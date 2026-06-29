import type { APIRoute } from 'astro';
import { loadPosts } from '../lib/posts';
import { SPACE_IDS } from '../consts';
import { stripVi, spaceMeta } from '../lib/i18n';

export const GET: APIRoute = async () => {
  const entries = [];
  for (const space of SPACE_IDS) {
    const posts = await loadPosts(space, 'en');
    const base = spaceMeta(space, 'en').path;
    for (const p of posts) {
      entries.push({
        title: p.data.title,
        description: p.data.description,
        tags: p.data.tags,
        url: `${base}${stripVi(p.id)}/`,
        space,
        date: p.data.date.toISOString().slice(0, 10),
      });
    }
  }
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};
