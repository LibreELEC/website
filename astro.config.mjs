import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const ghRepository = process.env.GITHUB_REPOSITORY;
const ghRepoOwner = process.env.GITHUB_REPOSITORY_OWNER;
const ghRepoName = ghRepository ? ghRepository.split('/')[1] : '';

const isUserPage = ghRepoName.toLowerCase() === `${(ghRepoOwner || '').toLowerCase()}.github.io`;
const defaultGhBase = isUserPage ? '/' : `/${ghRepoName}`;

const site = process.env.SITE_URL || (isGitHubActions && ghRepoOwner ? `https://${ghRepoOwner.toLowerCase()}.github.io` : 'https://libreelec.tv');
const base = process.env.BASE_PATH ?? (isGitHubActions && ghRepoName ? defaultGhBase : '/');

function rehypeBaseLinks() {
  const cleanBase = base === '/' ? '' : base.replace(/\/$/, '');
  return (tree) => {
    function visit(node) {
      if (node && node.type === 'element' && node.tagName === 'a' && node.properties && node.properties.href) {
        let href = String(node.properties.href);
        if (href.startsWith('${base}')) {
          node.properties.href = href.replace('${base}', cleanBase);
        } else if (href.startsWith('$%7Bbase%7D')) {
          node.properties.href = href.replace('$%7Bbase%7D', cleanBase);
        } else if (href.startsWith('%24%7Bbase%7D')) {
          node.properties.href = href.replace('%24%7Bbase%7D', cleanBase);
        } else if (cleanBase && href.startsWith('/downloads')) {
          node.properties.href = `${cleanBase}${href}`;
        }
      }
      if (node && node.children) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  markdown: {
    rehypePlugins: [rehypeBaseLinks]
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
