# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Writing preferences (portable across machines): @MEMORY.md

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the dist/ build locally
```

There are no tests or linting scripts configured.

## Architecture

This is an [Astro](https://astro.build) static site deployed to GitHub Pages at `https://vtuanjs.github.io`. It has three sections: **About**, **Product**, and **Technical**. Product and Technical are independent blogs powered by Astro content collections.

**Key files:**

- `src/consts.ts` — single source of truth for site metadata (`SITE`), nav links (`NAV`), social profiles (`SOCIALS`), and per-space config (`SPACES`). Update here when changing site identity or adding a space.
- `src/content.config.ts` — defines the `product` and `technical` Astro content collections with a shared `postSchema` (title, description, date, author, image?, draft?).
- `astro.config.mjs` — sets `site` URL and the sitemap integration. The `base` option is commented out (only needed for project sites, not user sites).

**Content collections flow:** Markdown/MDX files in `src/content/product/` and `src/content/technical/` are loaded by glob, validated against `postSchema`, then consumed by:
- `src/pages/{product,technical}/index.astro` — list pages
- `src/pages/{product,technical}/[...slug].astro` — individual post pages
- `src/pages/{product,technical}/rss.xml.js` — RSS feeds

**Layouts:** `BaseLayout.astro` wraps every page (Header + Footer + global CSS slot). `PostLayout.astro` extends it with post metadata rendering and is used by the `[...slug].astro` pages.

**Drafts:** Posts with `draft: true` in frontmatter are excluded from list pages and RSS feeds (filter is applied in the index and RSS pages).

## Adding a post

Create a `.md` or `.mdx` file in `src/content/product/` or `src/content/technical/`:

```yaml
---
title: "Post title"
description: "One-line SEO summary."
date: 2026-07-01
author: Tuan Nguyen
# image: /og/my-post.png   # optional OG image (place file in public/og/)
# draft: true
---
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with `withastro/action@v3` (Node 22) and deploys to GitHub Pages automatically.
