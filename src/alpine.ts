import type { Alpine } from 'alpinejs';

interface UiStore {
  modalOpen: boolean;
  modalDevice: string;
  modalFile: string;
  modalUrl: string;
  modalMirrorUrl: string;
  toastOpen: boolean;
  toastMessage: string;
  openDownloadModal(device: string, file: string, url?: string, mirrorUrl?: string): void;
  closeDownloadModal(): void;
}

interface ThemeStore {
  current: 'light' | 'dark' | 'system';
  effective: 'light' | 'dark';
  init(): void;
  updateEffective(): void;
  applyTheme(): void;
  setTheme(theme: 'light' | 'dark' | 'system'): void;
  cycle(): void;
  getTooltip(): string;
}

export default (Alpine: Alpine) => {
  // Global Store for Theme (Light / Dark / System Auto)
  const themeStore: ThemeStore = {
    current: 'system',
    effective: 'light',

    init() {
      if (typeof window !== 'undefined') {
        try {
          const stored = localStorage.getItem('theme');
          if (stored === 'light' || stored === 'dark' || stored === 'system') {
            this.current = stored;
          }
        } catch (_) {}

        this.applyTheme();

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          if (this.current === 'system') {
            this.applyTheme();
          }
        });
      }
    },

    updateEffective() {
      if (typeof window !== 'undefined') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.effective = this.current === 'system' ? (prefersDark ? 'dark' : 'light') : this.current;
      }
    },

    applyTheme() {
      this.updateEffective();
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        if (this.effective === 'dark') {
          root.classList.add('dark');
          root.classList.remove('light');
        } else {
          root.classList.remove('dark');
          root.classList.add('light');
        }
      }
    },

    setTheme(theme: 'light' | 'dark' | 'system') {
      this.current = theme;
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('theme', theme);
        } catch (_) {}
      }
      this.applyTheme();
    },

    cycle() {
      const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        if (this.current === 'system') {
          this.setTheme('light');
        } else if (this.current === 'light') {
          this.setTheme('dark');
        } else {
          this.setTheme('system');
        }
      } else {
        if (this.current === 'system') {
          this.setTheme('dark');
        } else if (this.current === 'dark') {
          this.setTheme('light');
        } else {
          this.setTheme('system');
        }
      }
    },

    getTooltip() {
      if (this.current === 'light') {
        return 'Theme: Light (Click to switch to Dark)';
      }
      if (this.current === 'dark') {
        return 'Theme: Dark (Click to switch to System Auto)';
      }
      const activeState = this.effective === 'dark' ? 'Dark' : 'Light';
      const nextState = this.effective === 'dark' ? 'Light' : 'Dark';
      return `Theme: System (${activeState}) (Click to switch to ${nextState})`;
    }
  };

  Alpine.store('theme', themeStore);

  // Global Store for Modals and Toasts
  const uiStore: UiStore = {
    modalOpen: false,
    modalDevice: '',
    modalFile: '',
    modalUrl: '',
    modalMirrorUrl: '',
    toastOpen: false,
    toastMessage: '',

    openDownloadModal(device: string, file: string, url: string = '', mirrorUrl: string = '') {
      this.modalDevice = device;
      this.modalFile = file;
      this.modalUrl = url;
      this.modalMirrorUrl = mirrorUrl;
      this.modalOpen = true;

      if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', file);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },

    closeDownloadModal() {
      this.modalOpen = false;
    }
  };

  Alpine.store('ui', uiStore);

  // TV Preview Component
  Alpine.data('tvPreview', () => {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const downloadsUrl = `${base}/downloads/`;
    const homeUrl = base ? `${base}/` : '/';
    const previewImg = (name: string) => base ? `${base}/img/preview/${name}` : `/img/preview/${name}`;

    return {
      activeKey: 'video',
      fading: false,
      previewData: {
        video: {
          category: 'Direct Hardware Playback',
          title: '4K HDR10+ & Dolby Vision',
          desc: 'Direct hardware-accelerated video decoding via Linux DRM/GBM and V4L2 pipelines. Bit-accurate 24p/50p/60p frame rate switching, HDR10+, Dolby Vision, and AV1/HEVC support with zero desktop overhead.',
          tags: ['4K UHD @ 60Hz', 'HDR10+ / Dolby Vision', 'AV1 & HEVC Decoding', '24p Frame-Rate Sync'],
          bg: previewImg('video-movie-detail.jpg'),
          ctaText: 'Get LibreELEC',
          ctaUrl: downloadsUrl,
          secondaryText: 'Hardware Guide',
          secondaryUrl: 'https://wiki.libreelec.tv/hardware/general'
        },
        pvr: {
          category: 'Broadcast & Recording',
          title: 'Live TV & Tvheadend PVR',
          desc: 'Watch, pause, and record live broadcast television with native DVB-T/T2, DVB-C, DVB-S2, and IPTV tuner support. Features real-time Electronic Programme Guide (EPG) grids, continuous timeshifting, and multi-room network streaming.',
          tags: ['Tvheadend 4.3 Backend', 'DVB Tuner Support', 'EPG & Timeshifting', 'Series Recording'],
          bg: previewImg('pvr-epg-timeline.jpg'),
          ctaText: 'PVR Setup',
          ctaUrl: 'https://wiki.libreelec.tv/configuration/pvr',
          secondaryText: 'Tvheadend Docs',
          secondaryUrl: 'https://wiki.libreelec.tv/addons/tvheadend'
        },
        audio: {
          category: 'High-Fidelity Sound',
          title: 'Bit-Perfect Lossless & HD Passthrough',
          desc: 'Bit-perfect digital audio passthrough directly to your AV receiver for Dolby Atmos, Dolby TrueHD, and DTS:X. Native playback for high-resolution FLAC, ALAC, and DSD up to 192kHz/24-bit over HDMI or dedicated USB DACs.',
          tags: ['Dolby Atmos & DTS:X', 'TrueHD Passthrough', '192kHz / 24-bit Hi-Res', 'USB DAC & HDMI'],
          bg: previewImg('audio-music-player.jpg'),
          ctaText: 'Audio Settings',
          ctaUrl: 'https://wiki.libreelec.tv/configuration/audio',
          secondaryText: 'Wiki Overview',
          secondaryUrl: 'https://wiki.libreelec.tv'
        },
        settings: {
          category: 'Embedded Appliance OS',
          title: 'Native LibreELEC Settings Add-on',
          desc: 'Dedicated 10-foot TV configuration suite. Manage Wi-Fi, Ethernet, and Bluetooth remotes, toggle SSH and Samba network shares, configure audio outputs, and perform automated one-click OTA system updates right from your sofa.',
          tags: ['One-Click OTA Updates', 'Wi-Fi & Bluetooth Remotes', 'SSH & Samba Shares', 'Read-Only SquashFS'],
          bg: previewImg('settings-libreelec-addon.jpg'),
          ctaText: 'Settings Guide',
          ctaUrl: 'https://wiki.libreelec.tv/configuration/libreelec-settings',
          secondaryText: 'USB Creator',
          secondaryUrl: `${homeUrl}#creator`
        }
      } as Record<string, {
        category: string;
        title: string;
        desc: string;
        tags: string[];
        bg: string;
        ctaText: string;
        ctaUrl: string;
        secondaryText: string;
        secondaryUrl: string;
      }>,

      get activeItem() {
        return this.previewData[this.activeKey] || this.previewData.video;
      },

      switchPreview(key: string) {
        if (this.activeKey === key || !this.previewData[key]) return;
        this.fading = true;
        setTimeout(() => {
          this.activeKey = key;
          this.fading = false;
        }, 150);
      }
    };
  });
};
