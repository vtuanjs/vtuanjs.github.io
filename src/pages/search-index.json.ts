import type { APIRoute } from 'astro';
import { loadPosts } from '../lib/posts';
import { SPACE_IDS } from '../consts';
import { spaceMeta } from '../lib/site';

export const GET: APIRoute = async () => {
  const entries = [];
  for (const space of SPACE_IDS) {
    const posts = await loadPosts(space);
    const base = spaceMeta(space).path;
    for (const p of posts) {
      entries.push({
        title: p.data.title,
        description: p.data.description,
        tags: p.data.tags,
        url: `${base}${p.id}/`,
        space,
        date: p.data.date.toISOString().slice(0, 10),
      });
    }
  }
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
};
