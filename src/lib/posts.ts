// Shared content-collection access. One place decides how posts are filtered
// (by draft status) and ordered, so every page agrees.
import { getCollection } from 'astro:content';
import type { SpaceId } from '../consts';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

interface LoadOptions {
  // Include drafts — used by getStaticPaths so draft posts are still buildable
  // by direct URL, while lists and feeds (which omit this) hide them.
  drafts?: boolean;
}

export async function loadPosts(space: SpaceId, { drafts = false }: LoadOptions = {}) {
  let posts = await getCollection(space);
  if (!drafts) posts = posts.filter((p) => !p.data.draft);
  return posts.sort(byDateDesc);
}

// Neighboring published posts in the same space, for prev/next links at the
// bottom of a post. Lists are sorted newest-first, so the newer post sits at a
// lower index and the older post at a higher one. Drafts are excluded so we
// never link a reader to an unpublished page.
export async function getAdjacentPosts(space: SpaceId, id: string) {
  const posts = await loadPosts(space);
  const i = posts.findIndex((p) => p.id === id);
  if (i === -1) return { newer: undefined, older: undefined };
  return {
    newer: i > 0 ? posts[i - 1] : undefined,
    older: i < posts.length - 1 ? posts[i + 1] : undefined,
  };
}
