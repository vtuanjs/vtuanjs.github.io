// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: set `site` to your real GitHub Pages URL before deploying.
//   User site:    https://<username>.github.io   (base: '/')
//   Project site: https://<username>.github.io/<repo>   (base: '/<repo>')
// https://astro.build/config
export default defineConfig({
  site: 'https://vtuanjs.github.io',
  // base: '/blog', // uncomment + set this ONLY for a project site (repo != <username>.github.io)
  integrations: [sitemap()],
});
