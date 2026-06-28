// Shared content-collection access. One place decides how posts are filtered
// (by language and draft status) and ordered, so every page agrees.
import { getCollection } from 'astro:content';
import type { SpaceId } from '../consts';
import type { Lang } from './i18n';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

interface LoadOptions {
  // Include drafts — used by getStaticPaths so draft posts are still buildable
  // by direct URL, while lists and feeds (which omit this) hide them.
  drafts?: boolean;
}

export async function loadPosts(space: SpaceId, lang: Lang, { drafts = false }: LoadOptions = {}) {
  const wantVi = lang === 'vi';
  let posts = (await getCollection(space)).filter((p) => (p.data.lang === 'vi') === wantVi);
  if (!drafts) posts = posts.filter((p) => !p.data.draft);
  return posts.sort(byDateDesc);
}
