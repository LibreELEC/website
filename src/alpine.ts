import type { Alpine } from 'alpinejs';

interface UiStore {
  modalOpen: boolean;
  modalDevice: string;
  modalFile: string;
  modalUrl: string;
  modalMirrorUrl: string;
  toastOpen: boolean;
  toastMessage: string;
  toastTimeout: ReturnType<typeof setTimeout> | null;
  openDownloadModal(device: string, file: string, url?: string, mirrorUrl?: string): void;
  closeDownloadModal(): void;
  showToast(message: string): void;
}

export default (Alpine: Alpine) => {
  // Global Store for Modals and Toasts
  const uiStore: UiStore = {
    modalOpen: false,
    modalDevice: '',
    modalFile: '',
    modalUrl: '',
    modalMirrorUrl: '',
    toastOpen: false,
    toastMessage: '',
    toastTimeout: null,

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
    },

    showToast(message: string) {
      this.toastMessage = message;
      this.toastOpen = true;
      if (this.toastTimeout) clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.toastOpen = false;
      }, 3500);
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
      clock: '20:45',
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
          bg: previewImg('settings-libreelec-addon.png'),
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

      init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
      },

      updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        this.clock = `${hours}:${minutes}`;
      },

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
