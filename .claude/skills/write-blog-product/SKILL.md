---
name: write-blog-product
description: Draft a new Product space blog post — vision, strategy, and business value for non-technical stakeholders (PMs, founders, executives, operators). No implementation details. Use when writing to src/content/product/.
---

# Write a Product blog post

Help Tuan turn a product decision or system into a post that a non-technical stakeholder can read and act on. The audience is a PM, founder, executive, or operator — someone who makes decisions but doesn't write code.

The job is not to explain *how* something works. It's to explain *what* it is, *why* it was built this way, what value it creates, and what it costs to ignore. Never lead with the solution — explain why the problem exists first, and spend more words on the pain than on the fix.

## Core philosophy

**Every paragraph must earn its place.** Start with the business pain, explain why it exists, then describe the outcome after solving it. If a sentence names neither a problem nor a benefit, delete it. Prefer one precise noun over ten vague adjectives — *consistency, ownership, latency, trust, onboarding, retry, billing* beat *robust, scalable, flexible, modern*.

That's the whole spine: **problem before solution, benefit before feature, opinion over neutrality.** Everything below is how to execute it.

## Personal voice — real experience, never invented

What makes a post land as lived experience instead of a generic explainer is imprint: "When I worked on...", "I once had a customer...", "On a product I ran...". Every post should carry at least one such moment — usually the hook, sometimes a feature section.

**Never invent the anecdote.** Do not assume a "customers kept complaining that..." story from the topic — a fabricated example reads as generic and undermines the whole post. Before writing the hook or any concrete example, use `AskUserQuestion` to ask Tuan for the real pain, the real customer situation, the real thing that actually happened. Write from his answer. If he has no real anecdote for a section, drop the personal framing there rather than inventing one.

## Audience

Non-technical stakeholders. Write as if explaining to a sharp colleague who has never opened a terminal. No code, no implementation detail. Engineering jargon that needs a software background to parse gets replaced with plain language — but words a PM already uses (*API, workflow, platform, onboarding, automation*) are fine. The test: if a PM would understand it, keep it.

## Post structure

This is the default shape. Deviate only when a different order makes the argument clearer.

1. **Hook — one business pain, short** (2–4 sentences max). Open on something a non-engineer recognizes: a customer complaint, a support ticket no one could explain, a missed launch, a billing error. The pain should feel real, not abstract.

2. **Vision — one bold sentence.** What does "solved" look like from the outside? State it plainly and put it in bold. Not an architecture decision — a business outcome.

3. **Series intro** (if this is part of a series). One sentence: "This is part N of a series on X. This part covers Y; later parts go deep on Z."

4. **Problem / Why / Goal table.**

```markdown
| | |
|---|---|
| **Problem** | The one specific thing that's broken — in plain business terms. |
| **Why** | Why it keeps happening — the structural cause, not the technical one. |
| **Goal** | What the business gets when it's solved. |
```

5. **Why it matters** — the cost of inaction. What keeps breaking if this isn't solved? What can't be offered, what takes ten times longer, what erodes customer trust? This section is often more persuasive than explaining the solution.

6. **The features / pieces** — for each piece, lead with the benefit, then justify it. Format as a `###` subheading, then:
   - **Benefit:** one sentence — what the business gains, in plain English.
   - **Why this exists:** one sentence — the problem that forced it.
   - End with a pointer to the next part if this is a series.

7. **Trade-off table** — what building this costs, in business terms. Every trade-off should answer: what got harder, why that's acceptable, who pays the cost, and who gets the benefit. Then 2–3 sentences: why the cost is worth it, and what the alternative actually looks like in practice.

8. **What's next** — one sentence pointing to the next post in the series.

## Format inside sections — no paper walls

Tuan does not want posts that read like a paper. Within any section, default to lists, tables, or short bolded fragments over multi-sentence paragraph blocks:

- **Any time you're naming 2+ parallel pains, benefits, steps, or a before/after — that's a list or table, never a paragraph.**
- **Bold the key benefit/verdict at the start of the line**, not buried mid-sentence — a scanning stakeholder should catch it without reading the clause.
- A paragraph is still right for connective reasoning — one or two sentences of *why*, not a container for enumerable ideas.
- **Tell:** if a paragraph has an em-dash chain and 3+ enumerable ideas stacked in it, split it into bullets.
- **Product space leans harder into this than the others.** The audience skims for the decision, not the argument. When a "why this exists" or trade-off explanation runs more than ~2 sentences of prose, look for the list hiding inside it before defaulting to a paragraph.

## Voice and language rules

- **No code blocks.** Zero. If a concept needs illustration, use a plain analogy or a concrete business example.
- **Translate engineering terms to plain English:** "idempotent" → "safe to repeat," "event-driven" → "one action triggers everything else automatically," "dual-write" → "writing to two places at once." (See the jargon test under Audience — PM-level words stay.)
- **Visual-first: one picture beats a hundred words.** A non-technical reader scans before they read. Carry the structure with the animated diagram components in `src/components/diagrams/` — `FanOut` for "one action triggers everything else" (an event with many listeners), `Pipeline` for an ordered process (and the step a manual checklist skips, `tone:'fail'`), `Toggle` for a feature flag, `CompareCards` for before-vs-after. Labels in plain English, never system internals or data models. Posts that use them are `.mdx` with imports at the top (see "Visual-first" below). Mermaid is the fallback only.
- **Plain, direct, first-person, opinionated.** Tuan has a point of view — state it. The point of view is the product; don't sand strong takes into "it depends," and don't write corporate-neutral prose.
- **No emoji anywhere.** Not in prose, headings, tables, or diagram labels.
- **No AI tells.** No "let's dive in," "in conclusion," "it's worth noting," or reflexive hedging.

(Concision and "cut decoration" are covered in Core philosophy — apply them here too.)

## Visual-first: animated diagram components

**One picture or animation beats a hundred words** — doubly true for a stakeholder who skims. Lead a section with a visual that shows the outcome, then explain the value in plain prose. Posts that use components are `.mdx`, with imports right after the frontmatter:

```mdx
import FanOut from '../../components/diagrams/FanOut.astro';
import Pipeline from '../../components/diagrams/Pipeline.astro';
```

The library lives in `src/components/diagrams/`; the full catalog and the rules for building a new one are in the `write-blog-technical` skill ("Visual-first"). For Product, favor: `FanOut` (one action, everything follows), `Pipeline` (a process, and the step a human checklist skips — `tone:'fail'`), `Toggle` (a flag turning a feature on), `CompareCards` (the old way vs the new). Plain-English labels only — show the business flow, never system internals. Build a new component only if nothing fits, following the same rules (namespaced `.dw-*`, theme-aware, reduced-motion-aware, no emoji). Reference post: `src/content/product/org-creation-events.mdx`.

## The rules that apply to every post

1. **One focused topic per post.** If the post covers two real decisions, it's two posts — say so and offer to split.
2. **Generalize the lesson; never write about a specific employer.** The project is the source, not the subject — abstract to the general pattern, no real team or system names.
3. **Write to express judgment.** The trade-off weighed, the call made, what he'd do differently. Opinion is the product.

## Frontmatter

```yaml
---
title: "The specific, opinionated title"
description: "One line — the exact question this post answers."
date: 2026-07-01
author: Tuan Nguyen
draft: true
tags: [tag-one, tag-two, tag-three]
# image: /og/my-post.png
---
```

- **`tags`** — 2-5 lowercase kebab-case topic tags (e.g. `feature-flags`, `multi-tenancy`, `onboarding`). Look at existing posts in `src/content/product/` for the tag vocabulary already in use and reuse matching tags before inventing new ones.

Save to `src/content/product/` with a kebab-case filename — use the `.mdx` extension when the post imports diagram components (it usually should). Always `draft: true` until Tuan confirms.

## How to work

1. Take the topic. If it's broad, narrow to one decision or one system.
2. Ask Tuan (via `AskUserQuestion`) for the real business pain or customer situation behind the hook — never assume one.
3. Confirm a working title — it should name the outcome, not the mechanism.
4. Identify the business pain and the cost of inaction before drafting.
5. Draft in Tuan's voice — opinionated, direct, no filler, grounded in the real situation he gave you.
6. Write the file, then tell the user: `npm run dev` to preview, flip `draft: true` off to publish.

## Checklist before finishing

- [ ] The hook (and any concrete example) is grounded in a real situation Tuan gave via `AskUserQuestion` — nothing invented.
- [ ] No emoji, no code blocks, no jargon that needs a software background.
- [ ] Visual-first: the structure is carried by animated diagram components with plain-English labels, not walls of prose. File is `.mdx` with components imported; no system internals shown; no raw Mermaid unless nothing in the library fits.
- [ ] Problem explained before the solution; pain gets more words than the fix.
- [ ] Hook opens on business pain a non-engineer recognizes.
- [ ] Vision stated in one bold sentence.
- [ ] Each feature leads with the benefit, then why it exists.
- [ ] Cost of inaction named.
- [ ] Trade-off section names who pays the cost and who gets the benefit.
- [ ] Every sentence names a problem or a benefit; precise nouns over vague adjectives; nothing restated twice.
- [ ] No paper walls: parallel pains/benefits/steps/before-after are lists or tables, not paragraphs; key benefits bolded at line start.
- [ ] Frontmatter complete including `tags` (reused from existing posts where they match), saved to `src/content/product/`, `draft: true`.
