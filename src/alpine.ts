import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  // Global Store for Modals and Toasts
  Alpine.store('ui', {
    modalOpen: false,
    modalDevice: '',
    modalFile: '',
    modalUrl: '',
    modalMirrorUrl: '',
    toastOpen: false,
    toastMessage: '',
    toastTimeout: null as any,

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
  });

  // TV Preview Component
  Alpine.data('tvPreview', () => {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const downloadsUrl = `${base}/downloads/`;
    const homeUrl = base ? `${base}/` : '/';

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
          bg: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop',
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
          bg: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1200&auto=format&fit=crop',
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
          bg: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
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
          bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
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
