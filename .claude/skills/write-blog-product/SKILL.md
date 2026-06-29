---
name: write-blog-product
description: Draft a new Product space blog post — vision, strategy, and business value for non-technical stakeholders (PMs, founders, executives, operators). No implementation details. Use when writing to src/content/product/.
---

# Write a Product blog post

Help Tuan turn a product decision or system into a post that a non-technical stakeholder can read and act on. The audience is a PM, founder, executive, or operator — someone who makes decisions but doesn't write code.

The job is not to explain *how* something works. It's to explain *what* it is, *why* it was built this way, what value it creates, and what it costs to ignore.

## Audience

Non-technical stakeholders. Write as if explaining to a sharp colleague who has never opened a terminal. No code, no implementation detail, no jargon that needs a glossary. If a term requires a technical background to understand, replace it with a plain-language equivalent.

## Post structure

Every Product post follows this shape:

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

6. **The features / pieces** — for each piece of the system or decision:
   - One sentence: what it is, in plain English.
   - One sentence: what problem it solves or what the business gains.
   - End with a pointer to the next part if this is a series.

   Format each as a `###` subheading followed by **Benefit:** in bold.

7. **Trade-off table** — what centralizing or building this costs, in business terms (not engineering terms). Then 2–3 sentences of prose: why the cost is worth it, and what the alternative actually looks like in practice.

8. **What's next** — one sentence pointing to the next post in the series.

## Voice and language rules

- **No code blocks.** Zero. If a concept needs illustration, use a plain analogy or a concrete business example.
- **No jargon.** Replace every technical term with plain English: "idempotent" → "safe to repeat," "event-driven" → "one action triggers everything else automatically," "dual-write" → "writing to two places at once."
- **Mermaid only for high-level business flows** — customer onboarding, feature rollout, provisioning sequence. Never system internals or data models. Node labels in plain English.
- **Plain, direct, first-person.** No corporate-neutral prose. Tuan has opinions — state them.
- **Still opinionated.** The point of view is the product. Don't sand down strong takes into "it depends."
- **No emoji anywhere.** Not in prose, headings, tables, or diagram labels.
- **No AI tells.** No "let's dive in," "in conclusion," "it's worth noting," or reflexive hedging.

## The rules that apply to every post

1. **One focused topic per post.** If the post covers two real decisions, it's two posts — say so and offer to split.
2. **The project is the source, never the subject.** Abstract to the general pattern. No real employer, team, or system names.
3. **Write to express judgment.** The trade-off weighed, the call made, what he'd do differently. Opinion is the product.

## Frontmatter

```yaml
---
title: "The specific, opinionated title"
description: "One line — the exact question this post answers."
date: 2026-07-01
author: Tuan Nguyen
draft: true
# image: /og/my-post.png
---
```

Save to `src/content/product/` with a kebab-case filename. Always `draft: true` until Tuan confirms.

## How to work

1. Take the topic. If it's broad, narrow to one decision or one system.
2. Confirm a working title — it should name the outcome, not the mechanism.
3. Identify the business pain and the cost of inaction before drafting.
4. Draft in Tuan's voice — opinionated, direct, no filler.
5. Write the file, then tell the user: `npm run dev` to preview, flip `draft: true` off to publish.

## Checklist before finishing

- [ ] No emoji anywhere.
- [ ] No code blocks.
- [ ] No jargon that needs a glossary.
- [ ] Hook opens on business pain a non-engineer recognizes.
- [ ] Vision stated in one bold sentence.
- [ ] Each feature/piece has a benefit in 1–2 sentences.
- [ ] Cost of inaction named.
- [ ] Trade-off section present and honest.
- [ ] Tight prose: no point restated twice, no clause that can go without losing an idea.
- [ ] Frontmatter complete, saved to `src/content/product/`, `draft: true`.
