import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    domains: z.array(z.string()),
    role: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    accentColor: z.string().optional(),
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    published: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['note', 'article']).default('note'),
    published: z.boolean().default(false),
  }),
});

export const collections = { work, notes };
