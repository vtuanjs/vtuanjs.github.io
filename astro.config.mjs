// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Turn ```mermaid fenced blocks into <pre class="mermaid"> with the raw
// diagram source, so the client-side renderer (see BaseLayout) can draw them.
// Works whether or not syntax highlighting has already tokenized the block:
// we just concatenate all descendant text, which reproduces the source.
function rehypeMermaid() {
  const textOf = (node) =>
    node.type === 'text'
      ? node.value
      : (node.children || []).map(textOf).join('');

  const walk = (node) => {
    for (const child of node.children || []) {
      if (child.tagName === 'pre') {
        const code = (child.children || []).find((c) => c.tagName === 'code');
        // Astro's highlighter tags the language on the <pre> (data-language)
        // or, unhighlighted, on the <code> class (language-mermaid).
        const classes = code?.properties?.className;
        const isMermaid =
          child.properties?.dataLanguage === 'mermaid' ||
          (Array.isArray(classes) &&
            classes.some((c) => String(c).includes('language-mermaid')));
        if (isMermaid) {
          child.properties = { className: ['mermaid'] };
          child.children = [{ type: 'text', value: textOf(code ?? child) }];
          continue;
        }
      }
      walk(child);
    }
  };

  return (tree) => walk(tree);
}

// IMPORTANT: set `site` to your real GitHub Pages URL before deploying.
//   User site:    https://<username>.github.io   (base: '/')
//   Project site: https://<username>.github.io/<repo>   (base: '/<repo>')
// https://astro.build/config
export default defineConfig({
  site: 'https://vtuanjs.github.io',
  // base: '/blog', // uncomment + set this ONLY for a project site (repo != <username>.github.io)
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
});
