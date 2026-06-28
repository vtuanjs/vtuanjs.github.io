---
name: write-blog
description: Draft a new blog post for this repo in one of the three spaces — Technical, Product, or AI. Use when the user wants to write a new post, turn an idea or topic into a draft, or start a post from a one-line pitch. Produces a sanitized, opinion-led draft that matches the repo's voice and frontmatter, saved as draft:true and ready to preview.
---

# Write a blog post

Help Tuan turn an idea into a finished draft for one of his three spaces. The job is to produce a post that reads like **him** — a working engineer expressing judgment — not a tutorial and not marketing copy.

## The three spaces

Each post belongs to exactly one collection. Pick the right one with the user; if it's ambiguous, ask.

- **Technical** (`src/content/technical/`) — one narrow engineering decision, defended in depth. Architecture, data modeling, migrations, build/infra trade-offs.
- **Product** (`src/content/product/`) — the *why* behind a product mechanic. Authorization, multi-tenancy, bounded contexts, audit, re-platforming — abstracted to the general problem.
- **AI** (`src/content/ai/`) — an honest logbook of how AI is *actually* used in real engineering/product work. See the extra AI rules below.

## Technical language (Technical space)

Technical posts are carried by **precise engineering language, not emotion or decoration.** The substance is the draw — say what happens technically and let the engineering do the work.

- **Use the exact terms of art.** Name the real mechanism — `transaction`, `commit`, `idempotent`, `write-ahead log`, `at-least-once` — not a vague analogy for it. Precision signals expertise; hand-waving hides it.
- **Cut decorative and emotional phrasing.** No dramatic build-ups, no literary flourishes ("sitting right there", "a bad afternoon", "the dreaded…"). State the failure mode, the constraint, the trade-off. If removing a phrase loses no technical information, cut it.
- **A hook is still concrete, but technical.** Open on the specific failure or decision — the symptom, the log line, the constraint that bit — not a mood or a story for its own sake. Concrete ≠ emotional.
- **Strong takes stay; they're substance, not decoration.** Blunt opinions and judgment calls ("I avoid 2PC here") are the point — keep them. Blunt ≠ dramatic; trim the flourish, never the verdict.
- **This is about register, not depth.** Keep all the reasoning (see layered depth below). Technical language means expressing that reasoning precisely and plainly, not writing less of it.

## The rules that define every post

These are non-negotiable. They are what make the writing worth reading.

1. **One small problem per post.** Not "how we do multi-tenancy" — but "should `tenant_id` live in a column or a schema, and why I chose one." Narrow enough to fully exhaust the *why* in one sitting. If a topic holds two real decisions, it's two posts — say so and offer to split it.
2. **The project is the source, never the subject.** Tuan draws on a large production monorepo, but never publishes it. Every post abstracts to the *general* version of the problem any engineer might hit. **No real file paths, no domain internals, no proprietary logic, no employer specifics.** A reader should learn the pattern without learning his system.
3. **Write to express judgment, not to document.** Lead with the decision faced and the reasoning. Show the trade-off actually weighed and what he'd do differently. Opinion is the product; code is the evidence — not the other way around.

## Layered depth — write for two readers at once

Tuan is a senior/expert writing to **share deep knowledge with authority**. Depth is the product — that's what signals expertise and makes a post worth reading. But most readers are lazy: they scan first and only dive if the scan earns their attention. So every post must serve **both** readers in one piece, by layering:

- **The scan layer (surface)** — hook, the Problem/Why/Goal table, diagrams, bold key sentences, and the trade-off table. A reader who only skims these should still walk away with the decision and the gist. Build this layer so it stands alone in ~30 seconds.
- **The depth layer (prose under each section)** — the full, senior-level reasoning: why the obvious answers fail, the constraint that actually makes it hard, the judgment call, the failure mode learned the hard way, when he'd decide differently. This is where expertise lives. **Do not thin it out to save words.**

Rules that make depth scannable instead of shorter:

- **Diagrams and tables carry structure; prose carries depth.** A sequence/flow/before→after becomes a Mermaid diagram; a comparison or trade-off becomes a table — *and then the prose goes deep on the why beneath it.* The visual is the entry point, not a replacement for the reasoning.
- **Mermaid is the default visual** (this repo renders ` ```mermaid ` blocks live, theme-aware). Use it for sequences, flows, decision trees, boundaries. Color failure nodes (e.g. `style X fill:#7f1d1d,color:#fff`) so the eye lands on them.
- **Front-load the takeaway, then go deep.** Lead each section with the conclusion in a bold sentence the scanner catches, then expand for the reader who stays. Progressive disclosure, not omission.
- **Length follows coverage, not a cap.** Write as much as it takes to fully exhaust the *why* of one small problem — typically substantial. Cut padding and anything a diagram already says, never the reasoning. Don't pad to seem deep; don't trim to seem brief.
- **Tight prose — readers are lazy.** Every sentence must earn its place. No verbose wind-ups, no restating the same point twice for rhythm, no long-winded phrasing where a short one carries the same meaning. The test: if a sentence (or clause) can go without losing an idea, it goes. This is about *wordiness*, not depth — say each point once, sharply, then move on. A reader who has to wade through filler stops reading before they reach the depth.

## Open with Problem / Why / Goal — always

A scanning reader must grasp **what the problem is, why it happens, and what we're trying to achieve** in the first five seconds, *before* any diagram or deep content. Lead every post with a compact framing table right after the one-line hook:

```markdown
| | |
|---|---|
| **Problem** | The one specific thing that's broken or undecided. |
| **Why** | The root cause / the constraint that makes it hard. |
| **Goal** | What "solved" looks like — the outcome we want. |
```

Keep each cell to one sentence. This is non-negotiable: if these three aren't crisp, the post isn't clear yet — sharpen them before writing the body.

## Post shape

Most posts follow this arc. Use it as a skeleton, not a rigid template — drop a section if the post is better without it, but earn the omission. **Lead each beat with a visual where one fits:**

- **Hook** — the specific moment the problem showed up, ideally a diagram of the failure. Concrete, not "imagine you have a system that…"
- **The naive answer** — what most people reach for first, and what's wrong with it (a flow showing why it breaks).
- **The real problem** — the constraint that makes it genuinely hard. Go deep here; this is where a senior take separates from a tutorial.
- **My answer** — the decision, as a diagram + a minimal snippet, with the reasoning that justifies it underneath.
- **The trade-off** — what it costs; when he'd choose differently, **as a table** with the *why* expanded in prose below. **This is the section that proves he understands the problem** — never skip it, never thin it.

## Snippet discipline

Code is evidence, kept small and sanitized:

- **≤20 lines**, ideally 5–15. Show the idea, not a working module.
- **Generic names** — `orders`, `tenant_id`, `Item`, `doSomething()`. No real table names, service names, or domain terms.
- **No real paths.** Invent plausible generic ones if a path is needed.
- Prefer pseudocode or a sketch over a literal paste. The snippet illustrates the decision; it is not meant to compile.
- This repo renders **Mermaid** — any ` ```mermaid ` fenced block becomes a live, theme-aware diagram. Use one for sequences, flows, before→after states, or boundaries when prose is harder to follow than a picture.

## Frontmatter

Every post starts with this. Save new drafts with `draft: true` until the opinion is clear.

```yaml
---
title: "The specific, opinionated title"
description: "One line — the exact question this post answers. This is the SEO meta description."
date: 2026-07-01
author: Tuan Nguyen
draft: true
# image: /og/my-post.png   # optional OG image (place file in public/og/)
---
```

- **`title`** — name the decision, not the topic. "Putting role IDs (not role names) in the token" beats "Token design."
- **`description`** — the single question the post answers, phrased so a reader knows in one line whether it's for them. Confirm it with the user if unsure.
- **`date`** — use today's date unless the user gives one.
- **Filename** — kebab-case slug derived from the title, e.g. `role-ids-in-the-token.md`. `.md` by default; `.mdx` only if the post needs components.

## Extra rules for the AI space

The AI space has its own voice — honest, anti-hype, judgment-in-the-loop:

- **Show the real task, not a toy demo.** Start from a problem that had to be solved anyway.
- **Report honestly.** If the AI was wrong, slow, or confidently incorrect, that's the interesting part — say so.
- **Keep judgment in the loop.** The point is never "AI did it." It's where he trusted it, where he didn't, and why.
- **Protect the work** — same sanitization rule as every other space: the pattern, not the employer's internals.

## How to work

1. **Get the seed.** Take the user's topic/pitch. If it's broad, narrow it to one defensible decision before writing. If it spans two decisions, propose splitting into two posts.
2. **Confirm the space** (technical / product / AI) and a working title.
3. **Find the trade-off first.** Before drafting, get clear on what the chosen answer *costs*. If the cost can't be named, the problem isn't understood yet — discuss it with the user rather than writing around it.
4. **Draft in his voice** — first person, direct, opinionated, no hedging-by-default and no corporate neutrality. Strong takes are welcome when he holds them; don't invent opinions he hasn't expressed. **Write like a human, not an AI: no emoji anywhere** (prose, headings, tables, diagram labels), no bullet-point padding, no "in conclusion" / "let's dive in" filler, no over-hedged qualifiers. Plain, natural sentences. **For Technical posts, favor precise technical language over emotion or decoration** (see "Technical language" above).
5. **Sanitize as you go** — every snippet and example passes the snippet-discipline bar. Re-read asking: *does this reveal his system, or teach a pattern?* Cut anything that's the former.
6. **Write the file** to the right collection dir with correct frontmatter and `draft: true`.
7. **Tell the user how to preview** — `npm run dev`, then the post appears on its space page and the home page. Remind them to flip `draft: true` off (or remove it) to publish.

## Checklist before finishing

- [ ] No emoji anywhere; reads like a human wrote it, not an AI.
- [ ] (Technical) Precise terms of art, not vague analogies; decorative/emotional phrasing cut, but every strong take and all reasoning kept.
- [ ] Tight prose: no verbose wind-ups, no point restated twice, no clause that can go without losing an idea. Each point said once, sharply.
- [ ] Exactly one small problem; the *why* is fully exhausted.
- [ ] Lead is the decision and reasoning, not background or documentation.
- [ ] The trade-off section names a real cost and when he'd choose differently.
- [ ] Every snippet is ≤20 lines, generic names, no real paths or domain terms.
- [ ] Nothing reveals the underlying system, employer, or proprietary logic.
- [ ] Frontmatter complete; `title` names the decision; `description` is the one question answered.
- [ ] Saved with `draft: true` in the correct space directory.
- [ ] (AI space) Real task, honest report, judgment kept in the loop.
