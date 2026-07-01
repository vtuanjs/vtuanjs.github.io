---
name: write-blog
description: Draft a new blog post for this repo. Routes to the right space skill — Technical, Product, or Management. Use when the user wants to write a new post but hasn't specified a space, or when the space is ambiguous.
---

# Write a blog post — pick the right space

This repo has three spaces. Each has its own skill with specific rules for audience, voice, and structure. Pick the right one, then invoke it.

## The three spaces

| Space | Audience | Focus | Skill |
|---|---|---|---|
| **Technical** | Engineers, tech leads | One narrow engineering decision, defended in depth. Code, animated diagram components, precise technical language. | `write-blog-technical` |
| **Product** | PMs, founders, executives, operators | Vision, strategy, value, and benefit — no implementation. Plain language, business pain, feature benefits. | `write-blog-product` |
| **Management** | Tech leads, EMs, senior ICs, founders | Team decisions, org design, leadership calls, people/process. Grounded in engineering reality, about how teams work. | `write-blog-management` |

## How to pick

Ask yourself: **who is the intended reader, and what do they need to walk away with?**

- An engineer who will implement or evaluate a technical approach → **Technical**
- A stakeholder who needs to understand value, approve direction, or act on a business outcome → **Product**
- A tech lead or manager wrestling with a people/process/org decision → **Management**

If the topic is ambiguous, confirm the space with the user before drafting.

## Personal voice across every space

Every post needs Tuan's own imprint — "When I worked in...", "I once shipped...", "On a team I led..." — not a generic tutorial voice. **Never invent the anecdote or example.** Whenever a hook, story, or concrete example is needed, use `AskUserQuestion` to get the real situation from Tuan before writing it — do not assume or fabricate one. Each space skill has the full rule under "Personal voice."

## Visual-first across every space

One picture or animation beats a hundred boring words. Every space now carries its structure with the bespoke, animated diagram components in `src/components/diagrams/` (`FlowChain`, `FanOut`, `Pipeline`, `Toggle`, `LostEventTimeline`, `StepCards`, `CompareCards`, `OutboxFlow`) rather than walls of prose or plain Mermaid. Posts are `.mdx` so they can import them. Reuse a component when it fits; build a new one — namespaced `.dw-*` in `src/styles/diagrams.css`, theme-aware, reduced-motion-aware, no emoji — when the concept needs its own metaphor. Each space skill has the full catalog and rules under "Visual-first."

## How to work

1. Identify or confirm the space with the user.
2. Follow the skill for that space — it has the full rules for audience, structure, voice, and checklist.
3. Every post's frontmatter includes `tags` — 2-5 lowercase kebab-case topic tags. Check existing posts in that space's directory for the tag vocabulary already in use and reuse matching tags before inventing new ones.
4. Save the draft to the correct directory:
   - Technical: `src/content/technical/`
   - Product: `src/content/product/`
   - Management: `src/content/management/`
5. Tell the user: `npm run dev` to preview, flip `draft: true` off to publish.
