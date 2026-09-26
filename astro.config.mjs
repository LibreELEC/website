import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import remarkJekyllCompat from './src/plugins/remark-jekyll-compat.mjs';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const ghRepository = process.env.GITHUB_REPOSITORY;
const ghRepoOwner = process.env.GITHUB_REPOSITORY_OWNER;
const ghRepoName = ghRepository ? ghRepository.split('/')[1] : '';

const isUserPage = ghRepoName.toLowerCase() === `${(ghRepoOwner || '').toLowerCase()}.github.io`;
const defaultGhBase = isUserPage ? '/' : `/${ghRepoName}`;

const site = process.env.SITE_URL || (isGitHubActions && ghRepoOwner ? `https://${ghRepoOwner.toLowerCase()}.github.io` : 'https://libreelec.tv');
const base = process.env.BASE_PATH ?? (isGitHubActions && ghRepoName ? defaultGhBase : '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [remarkJekyllCompat]
  },
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
