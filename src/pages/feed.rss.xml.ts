import type { APIRoute } from 'astro';
import { generateFeeds } from '../utils/feed';

export const GET: APIRoute = async (context) => {
  const { rss } = await generateFeeds(context);

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
