import { Feed } from 'feed';
import { marked } from 'marked';
import { getSortedPosts, type EnrichedPost } from './posts';
import type { APIContext } from 'astro';

export interface FeedResult {
  atom: string;
  rss: string;
}

// Cache generated feeds in memory during build
let cachedFeeds: FeedResult | null = null;

function makeAbsoluteUrls(html: string, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, '');
  return html
    .replace(/(href|src)="\/([^"]*)"/g, `$1="${base}/$2"`)
    .replace(/(href|src)='\/([^']*)'/g, `$1='${base}/$2'`);
}

function getExcerpt(post: EnrichedPost): string {
  if (post.post.data.description) {
    return post.post.data.description;
  }
  const body = post.post.body || '';
  const plainText = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/#+\s+/g, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return plainText.length > 200 ? plainText.slice(0, 197) + '...' : plainText;
}

export async function generateFeeds(context: APIContext): Promise<FeedResult> {
  if (cachedFeeds) {
    return cachedFeeds;
  }

  const siteConfig = context.site ? context.site.href.replace(/\/$/, '') : 'https://libreelec.tv';
  const rawBase = import.meta.env.BASE_URL.replace(/\/$/, '');
  const siteUrl = `${siteConfig}${rawBase}`;

  const posts = await getSortedPosts();
  const feedPosts = posts;
  const latestPost = feedPosts[0];

  const atomPath = `${rawBase}/feed.xml`;
  const rssPath = `${rawBase}/feed.rss.xml`;

  const feed = new Feed({
    title: 'LibreELEC',
    description: 'Just enough OS for KODI',
    id: `${siteUrl}/`,
    link: `${siteUrl}/`,
    language: 'en',
    image: `${siteUrl}/icon.png`,
    favicon: `${siteUrl}/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, LibreELEC Team`,
    updated: latestPost ? latestPost.date : new Date(),
    generator: 'LibreELEC Feed Generator',
    feedLinks: {
      atom: `${siteConfig}${atomPath}`,
      rss: `${siteConfig}${rssPath}`,
    },
    author: {
      name: 'LibreELEC Team',
      link: siteUrl,
    }
  });

  for (const enriched of feedPosts) {
    const post = enriched.post;
    const postUrl = new URL(`${siteConfig}${enriched.url}`).href;
    const authorName = post.data.author || 'LibreELEC Team';
    const excerpt = getExcerpt(enriched);

    let htmlContent = '';
    if (post.body) {
      try {
        const parsed = await marked.parse(post.body);
        htmlContent = makeAbsoluteUrls(parsed, siteConfig);
      } catch (err) {
        console.warn(`Failed to parse markdown for post: ${post.id}`, err);
        htmlContent = `<p>${excerpt}</p>`;
      }
    } else {
      htmlContent = `<p>${excerpt}</p>`;
    }

    const postImage = post.data.image
      ? new URL(`${rawBase ? rawBase + '/' : '/'}${post.data.image.replace(/^\//, '')}`, siteConfig).href
      : undefined;

    feed.addItem({
      title: post.data.title,
      id: postUrl,
      link: postUrl,
      description: excerpt,
      content: htmlContent,
      author: [
        {
          name: authorName,
          link: siteUrl,
        }
      ],
      date: enriched.date,
      category: [{ name: enriched.categoryLabel }],
      image: postImage,
    });
  }

  cachedFeeds = {
    atom: feed.atom1(),
    rss: feed.rss2(),
  };

  return cachedFeeds;
}
