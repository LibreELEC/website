import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    author: z.string().optional().default('LibreELEC Team'),
    date: z.coerce.date().optional()
  })
});

export const collections = { posts };
