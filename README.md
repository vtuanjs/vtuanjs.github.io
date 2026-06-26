# Personal blog (Astro)

A blog with three spaces — **About me**, **Product**, and **Technical** —
built with [Astro](https://astro.build) and hosted free on GitHub Pages.
Product and Technical are separate blogs powered by Astro content collections.

## Structure

```
.
├── astro.config.mjs            # site URL, sitemap integration
├── src/
│   ├── consts.ts               # site metadata, nav, space config
│   ├── content.config.ts       # the two collections (product, technical)
│   ├── content/
│   │   ├── product/            # one Markdown file per Product post
│   │   └── technical/          # one Markdown file per Technical post
│   ├── components/             # BaseHead (SEO), Header, Footer, PostList
│   ├── layouts/                # BaseLayout, PostLayout
│   └── pages/
│       ├── index.astro         # home (links all 3 spaces)
│       ├── about.astro         # /about/
│       ├── product/index.astro       # /product/   list
│       ├── product/[...slug].astro   # /product/<post>/
│       ├── product/rss.xml.js        # /product/rss.xml
│       └── technical/...             # same for Technical
└── public/styles/global.css    # styling (light + dark mode)
```

## SEO

- **BaseHead.astro** — per-page `<title>`, meta description, canonical URL,
  Open Graph, Twitter cards, and JSON-LD structured data.
- **@astrojs/sitemap** — auto-generates `/sitemap-index.xml`.
- **@astrojs/rss** — feeds at `/product/rss.xml` and `/technical/rss.xml`.
- Astro ships zero JS by default → fast loads, great Core Web Vitals.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output to dist/
npm run preview    # preview the production build
```

## Add a post

Create a Markdown (or `.mdx`) file in `src/content/product/` or
`src/content/technical/`:

```yaml
---
title: "My post title"
description: "One-line summary used as the SEO meta description."
date: 2026-07-01
author: Tuan Nguyen
# image: /og/my-post.png   # optional social-card image (put it in public/og/)
# draft: true              # hide from lists/feeds until ready
---

Your content in Markdown...
```

It appears automatically on the space's index page, the home page, and its RSS feed.

## Deploy to GitHub Pages

1. **Set your URL** in `astro.config.mjs`:
   - User site (`https://<username>.github.io`): repo named
     `<username>.github.io`, `site:` = that URL, no `base`.
   - Project site (`https://<username>.github.io/<repo>`): `site:` =
     `https://<username>.github.io`, `base:` = `'/<repo>'`. Also update the
     `Sitemap:` line in `public/robots.txt`.
2. Push to GitHub. Repo → **Settings → Pages → Build and deployment →
   Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
   every push to `main`.
