import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, SPACES } from '../../consts';

export async function GET(context) {
  const posts = (await getCollection('product')).filter((p) => !p.data.draft);
  return rss({
    title: `${SITE.title} — ${SPACES.product.name}`,
    description: SPACES.product.blurb,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/product/${post.id}/`,
      })),
  });
}
