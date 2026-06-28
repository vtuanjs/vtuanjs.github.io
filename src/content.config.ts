import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared schema for blog posts in both spaces.
const postSchema = z.object({
  title: z.string(),
  description: z.string(), // used as the SEO meta description
  date: z.coerce.date(),
  author: z.string().default('Tuan Nguyen'),
  image: z.string().optional(), // social-card / Open Graph image
  draft: z.boolean().default(false),
  // Language of this post; the rest of the site treats `en` as the default.
  lang: z.enum(['en', 'vi']).default('en'),
  // Link to the same post in the other language. Accepts a relative path
  // (e.g. "/vi/technical/my-post/") or an absolute URL.
  vi_url: z.string().optional(),
  en_url: z.string().optional(),
});

// One collection per "space" — each is an independent blog.
const product = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/product' }),
  schema: postSchema,
});

const technical = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/technical' }),
  schema: postSchema,
});

const ai = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ai' }),
  schema: postSchema,
});

export const collections = { product, technical, ai };
