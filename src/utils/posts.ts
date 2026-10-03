import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export interface EnrichedPost {
  post: PostEntry;
  date: Date;
  formattedDate: string;
  year: string;
  month: string;
  day: string;
  cleanSlug: string;
  url: string;
  category: 'release' | 'dev';
  categoryLabel: string;
}

export function parsePostDetails(post: PostEntry): EnrichedPost {
  const rawId = post.id;
  const filename = rawId.split('/').pop() || rawId;
  const dateMatch = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

  let year = '2025';
  let month = '01';
  let day = '01';
  let cleanSlug = filename.replace(/\.md$/, '');

  if (dateMatch) {
    year = dateMatch[1];
    month = dateMatch[2];
    day = dateMatch[3];
    cleanSlug = dateMatch[4].replace(/\.md$/, '');
  }

  const postDate = post.data.date ? new Date(post.data.date) : new Date(`${year}-${month}-${day}T12:00:00Z`);

  const formattedDate = postDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const title = (post.data.title || '').toLowerCase();
  const isRelease =
    title.includes('release') ||
    title.includes('stable') ||
    title.includes('beta') ||
    title.includes('alpha') ||
    title.includes('rc') ||
    title.includes('hotfix') ||
    title.includes('omega') ||
    title.includes('nexus') ||
    title.includes('matrix') ||
    title.includes('leia') ||
    title.includes('krypton') ||
    title.includes('jarvis') ||
    title.includes('v12') ||
    title.includes('v11') ||
    title.includes('v10') ||
    title.includes('v9') ||
    title.includes('v8') ||
    title.includes('v7');

  const category = isRelease ? 'release' : 'dev';
  let releaseType = 'Official Release';
  if (title.includes('beta')) {
    releaseType = 'Beta';
  } else if (title.includes('alpha')) {
    releaseType = 'Alpha';
  } else if (title.includes('rc')) {
    releaseType = 'Release Candidate';
  }
  const categoryLabel = isRelease ? releaseType : 'Dev Update';

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const url = `${base}/${year}/${month}/${day}/${cleanSlug}/`;

  return {
    post,
    date: postDate,
    formattedDate,
    year,
    month,
    day,
    cleanSlug,
    url,
    category,
    categoryLabel
  };
}

export async function getSortedPosts(): Promise<EnrichedPost[]> {
  const rawPosts = await getCollection('posts');
  const enriched = rawPosts.map(parsePostDetails);

  return enriched.sort((a, b) => b.date.getTime() - a.date.getTime());
}
