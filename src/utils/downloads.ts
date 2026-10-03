import fs from 'node:fs';
import path from 'node:path';
import { load } from 'js-yaml';

export interface VersionConfig {
  id: string;
  name: string;
  downloadVersion: string;
  releaseDate: string;
  kodiVersion: string;
  kernelVersion: string;
  kernelOverrides?: Record<string, string>;
  downloadVersionOverrides?: Record<string, string>;
  status: 'latest' | 'stable' | 'old' | 'legacy' | 'prerelease';
  description?: string;
}

export interface CreatorConfig {
  version: string;
  wikiUrl: string;
  downloads: Record<string, {
    name: string;
    icon: string;
    url: string;
  }>;
}

export interface DeviceConfig {
  id: string;
  name: string;
  project: string;
  arch: string;
  archOverrides?: Record<string, string>;
  device?: string;
  supportedVersions: string[];
  chipset?: string;
  features?: string;
}

export interface PlatformConfig {
  id: string;
  name: string;
  icon: string;
  badgeColor: string;
  description: string;
  note?: string;
  featuredDeviceIds?: string[];
  devices: DeviceConfig[];
}

export interface DownloadConfig {
  baseUrl: string;
  creator: CreatorConfig;
  versions: VersionConfig[];
  platforms: PlatformConfig[];
}

export interface DeviceDownloadInfo {
  deviceId: string;
  deviceName: string;
  platformId: string;
  platformName: string;
  badgeColor: string;
  icon: string;
  chipset?: string;
  features?: string;
  versionId: string;
  versionName: string;
  downloadVersion: string;
  kodiVersion: string;
  kernelVersion: string;
  imageFileName: string;
  imageUrl: string;
  updateFileName: string;
  updateUrl: string;
  mirrorListUrl: string;
  isSupported: boolean;
}

let cachedConfig: DownloadConfig | null = null;

export function getDownloadConfig(): DownloadConfig {
  if (cachedConfig && !import.meta.env.DEV) {
    return cachedConfig;
  }

  const possiblePaths = [
    path.resolve(process.cwd(), 'config.yml'),
    path.resolve(process.cwd(), 'src/config.yml'),
    path.resolve(process.cwd(), 'src/data/config.yml')
  ];

  let rawYaml = '';
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      rawYaml = fs.readFileSync(p, 'utf-8');
      break;
    }
  }

  if (!rawYaml) {
    throw new Error('config.yml could not be found in project root or src/.');
  }

  const rawConfig = load(rawYaml) as DownloadConfig;
  if (rawConfig && Array.isArray(rawConfig.platforms)) {
    const platformsToSortByName = new Set(['allwinner', 'amlogic', 'rockchip']);
    for (const platform of rawConfig.platforms) {
      if (platformsToSortByName.has(platform.id) && Array.isArray(platform.devices)) {
        platform.devices.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
        );
      }
    }
  }

  cachedConfig = rawConfig;
  return cachedConfig;
}

export function getVersions(): VersionConfig[] {
  const config = getDownloadConfig();
  return config.versions || [];
}

export function getLatestVersion(): VersionConfig {
  const versions = getVersions();
  const latest = versions.find((v) => v.status === 'latest');
  return latest || versions[0] || {
    id: '12.0',
    name: '12.0',
    downloadVersion: '12.0.2',
    releaseDate: '2025.01',
    kodiVersion: '21.2',
    kernelVersion: '6.6.x',
    status: 'stable'
  };
}


export function getDeviceDownloadInfo(
  platform: PlatformConfig,
  device: DeviceConfig,
  version: VersionConfig
): DeviceDownloadInfo {
  const config = getDownloadConfig();
  const baseUrl = config.baseUrl.replace(/\/$/, '');

  const isSupported = device.supportedVersions.includes(version.id);

  // Compute download version string (check overrides e.g. RPi in LE 9.2)
  const downloadVer = (version.downloadVersionOverrides && version.downloadVersionOverrides[device.project])
    ? version.downloadVersionOverrides[device.project]
    : version.downloadVersion;

  // Compute arch (check overrides e.g. RPi4 in LE 11 arm vs LE 12 aarch64)
  const arch = (device.archOverrides && device.archOverrides[version.id])
    ? device.archOverrides[version.id]
    : device.arch;

  // Compute kernel version (check per-platform overrides e.g. RPi kernel)
  const kernel = (version.kernelOverrides && version.kernelOverrides[platform.id])
    ? version.kernelOverrides[platform.id]
    : version.kernelVersion;

  // Build image filename: LibreELEC-{project}.{arch}-{downloadVer}{device ? '-' + device : ''}.img.gz
  const devicePart = device.device ? `-${device.device}` : '';
  const imageFileName = `LibreELEC-${device.project}.${arch}-${downloadVer}${devicePart}.img.gz`;
  const imageUrl = `${baseUrl}/${imageFileName}`;

  // Build tar filename: LibreELEC-{project}.{arch}-{downloadVer}.tar
  const updateFileName = `LibreELEC-${device.project}.${arch}-${downloadVer}.tar`;
  const updateUrl = `${baseUrl}/${updateFileName}`;

  const mirrorListUrl = `${imageUrl}?mirrorlist`;

  return {
    deviceId: device.id,
    deviceName: device.name,
    platformId: platform.id,
    platformName: platform.name,
    badgeColor: platform.badgeColor,
    icon: platform.icon,
    chipset: device.chipset,
    features: device.features,
    versionId: version.id,
    versionName: version.name,
    downloadVersion: downloadVer,
    kodiVersion: version.kodiVersion,
    kernelVersion: kernel,
    imageFileName,
    imageUrl,
    updateFileName,
    updateUrl,
    mirrorListUrl,
    isSupported
  };
}


/**
 * Pre-computes all matrix combinations (all versions x all devices)
 * so Alpine.js on the client can instantly filter without round-trips.
 */
export function getClientMatrixData() {
  const config = getDownloadConfig();
  const versions = config.versions;
  const platforms = config.platforms;

  const matrix: DeviceDownloadInfo[] = [];

  for (const version of versions) {
    for (const platform of platforms) {
      for (const device of platform.devices) {
        if (device.supportedVersions.includes(version.id)) {
          matrix.push(getDeviceDownloadInfo(platform, device, version));
        }
      }
    }
  }

  const catalog = [];
  for (const platform of platforms) {
    for (const device of platform.devices) {
      const downloadsByVersion: Record<string, DeviceDownloadInfo> = {};
      for (const verId of device.supportedVersions) {
        const verCfg = versions.find((v) => v.id === verId);
        if (verCfg) {
          downloadsByVersion[verId] = getDeviceDownloadInfo(platform, device, verCfg);
        }
      }
      catalog.push({
        deviceId: device.id,
        deviceName: device.name,
        platformId: platform.id,
        platformName: platform.name,
        badgeColor: platform.badgeColor,
        icon: platform.icon,
        chipset: device.chipset,
        features: device.features,
        supportedVersions: device.supportedVersions,
        downloads: downloadsByVersion
      });
    }
  }

  return {
    creator: config.creator,
    versions,
    platforms: platforms.map((p) => ({
      id: p.id,
      name: p.name,
      icon: p.icon,
      badgeColor: p.badgeColor,
      description: p.description,
      note: p.note,
      deviceCount: p.devices.length
    })),
    devices: matrix,
    catalog
  };
}
