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
- `src/content.config.ts` — defines the `product`, `technical`, and `management` Astro content collections with a shared `postSchema` (title, description, date, author, image?, draft?, tags?).
- `astro.config.mjs` — sets `site` URL and the sitemap integration. The `base` option is commented out (only needed for project sites, not user sites).

**Content collections flow:** Markdown/MDX files in `src/content/{product,technical,management}/` are loaded by glob, validated against `postSchema` (title, description, date, author, image?, draft?, tags?), then consumed by a single dynamic route group under `src/pages/[space]/`:
- `index.astro` — list page
- `[...slug].astro` — individual post page
- `rss.xml.js` — RSS feed
- `tags/[tag].astro` — per-tag list

`src/lib/posts.ts` centralises collection access: `loadPosts(space, { drafts? })` filters drafts and sorts newest-first; `getAdjacentPosts(space, id)` returns prev/next neighbors for post nav. All pages go through these helpers — do not call `getCollection` directly in pages.

`src/lib/site.ts` holds `spaceMeta()`, `formatDate()`, and the `UI` string dictionary — any user-facing string that isn't post content lives here.

**In-post diagrams:** Posts carry their structure with bespoke, animated diagram components in `src/components/diagrams/` (`FlowChain`, `FanOut`, `Pipeline`, `Toggle`, `LostEventTimeline`, `StepCards`, `CompareCards`, `OutboxFlow`), styled by namespaced `.dw-*` CSS in `src/styles/diagrams.css`. They are theme-aware (use the global `--ok/--fail/--accent/--line/--bg/--muted` tokens), reduced-motion-aware (animation gated behind `@media (prefers-reduced-motion: no-preference)`), and emoji-free (marks drawn in CSS). Importing them requires a post to be `.mdx`. Prefer these over Mermaid; Mermaid is the fallback. The reference post is `src/content/technical/the-dual-write-problem.mdx`.

**Layouts:** `BaseLayout.astro` wraps every page (Header + Footer + global CSS slot). `PostLayout.astro` extends it with post metadata rendering and is used by the `[...slug].astro` pages.

**Search:** `src/pages/search-index.json.ts` emits a JSON array of all published posts at build time; client-side search reads this endpoint.

**Drafts:** Posts with `draft: true` in frontmatter are excluded from list pages and RSS feeds (filter is applied in the index and RSS pages).

## Adding a post

Create a file in `src/content/product/`, `src/content/technical/`, or `src/content/management/`. Use `.mdx` (not `.md`) so the post can import diagram components — visual-first is the house style:

```mdx
---
title: "Post title"
description: "One-line SEO summary."
date: 2026-07-01
author: Tuan Nguyen
# image: /og/my-post.png   # optional OG image (place file in public/og/)
# draft: true
# tags: [architecture, distributed-systems]
---

import FanOut from '../../components/diagrams/FanOut.astro';
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with `withastro/action@v3` (Node 22) and deploys to GitHub Pages automatically.
