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
  Alpine.data('tvPreview', () => ({
    activeKey: 'movies',
    clock: '20:45',
    fading: false,
    previewData: {
      movies: {
        category: 'Featured Media',
        title: 'Cyber Horizon 2088',
        desc: 'Direct 4K HDR playback powered by Linux kernel media pipelines. Instant hardware acceleration without bloated desktop overhead.',
        bg: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop'
      },
      tv: {
        category: 'Binge-Worthy Series',
        title: 'Constellation Noir S02',
        desc: 'Dolby Atmos passthrough and seamless chapter navigation directly to your AV receiver.',
        bg: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop'
      },
      music: {
        category: 'High-Res Audio Hub',
        title: 'Electronic Odyssey (Live in Tokyo)',
        desc: 'Bit-perfect audio passthrough via HDMI or dedicated USB DACs up to 192kHz/24-bit.',
        bg: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop'
      },
      addons: {
        category: 'Extensible Ecosystem',
        title: 'Kodi Official & Community Add-on Repository',
        desc: 'Access thousands of plugins for streaming, retro gaming emulators, and smart home PVR backends.',
        bg: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'
      }
    } as Record<string, { category: string; title: string; desc: string; bg: string }>,

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
      return this.previewData[this.activeKey] || this.previewData.movies;
    },

    switchPreview(key: string) {
      if (this.activeKey === key || !this.previewData[key]) return;
      this.fading = true;
      setTimeout(() => {
        this.activeKey = key;
        this.fading = false;
      }, 150);
    }
  }));
};
