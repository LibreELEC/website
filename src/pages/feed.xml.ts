import type { APIRoute } from 'astro';
import { generateFeeds } from '../utils/feed';

export const GET: APIRoute = async (context) => {
  const { atom } = await generateFeeds(context);

  return new Response(atom, {
    status: 200,
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
