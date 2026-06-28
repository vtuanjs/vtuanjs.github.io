import rss from '@astrojs/rss';
import { SITE, SPACE_IDS } from '../../consts';
import { spaceMeta } from '../../lib/i18n';
import { loadPosts } from '../../lib/posts';

export function getStaticPaths() {
  return SPACE_IDS.map((space) => ({ params: { space } }));
}

export async function GET({ params, site }) {
  const { space } = params;
  const meta = spaceMeta(space, 'en');
  const posts = await loadPosts(space, 'en');
  return rss({
    title: `${SITE.title} — ${meta.name}`,
    description: meta.blurb,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${meta.path}${post.id}/`,
    })),
  });
}
