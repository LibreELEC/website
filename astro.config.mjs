import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://libreelec.tv',
  base: process.env.BASE_PATH || '/',
  integrations: [
    alpinejs({
      entrypoint: '/src/alpine.ts'
    }),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
});
