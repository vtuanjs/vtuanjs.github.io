---
name: improve-blog
description: Improve the clarity and readability of a blog post in this repo WITHOUT changing the author's ideas. Use when the user wants to polish a draft, make a post easier to understand, or get suggestions for images/diagrams. Preserves every argument, opinion, conclusion, and the author's voice — only sharpens how it is expressed.
---

# Improve blog

Help Tuan make a blog post **easier to understand** and suggest where **images or diagrams** would help — while treating his ideas as fixed and untouchable.

## The one rule that overrides everything

**Never change the author's idea.** You are an editor for clarity, not a co-author of substance. You do not:

- change an argument, claim, opinion, conclusion, recommendation, or its strength ("I avoid X" must not become "you might consider avoiding X");
- add new technical claims, facts, reasons, examples, or trade-offs the author didn't make;
- remove a point the author chose to include because you'd have left it out;
- reorder the logical argument in a way that changes emphasis or what the post is "really about";
- flatten the author's voice, humor, or strong takes into neutral corporate prose;
- soften a deliberately blunt or contrarian statement.

If something reads as wrong, risky, or unclear in its *meaning* (not its wording), **flag it as a question** — do not silently fix it. The author decides.

When in doubt about whether a change touches wording vs. idea: assume it touches the idea, and ask.

## What you MAY improve (wording and presentation only)

1. **Clarity** — replace vague or convoluted sentences with direct ones that say the *same thing*. Break run-ons. Cut redundancy. Fix sentences a reader has to re-read.
2. **Structure for reading ease** — headings, short paragraphs, lists for parallel items, a clear lead sentence per section. Same content, easier to scan.
3. **Flow** — transitions between paragraphs so the existing argument reads smoothly. No new logic, just connective tissue.
4. **Plain language** — define jargon the first time, or swap needless jargon for plain words *when the meaning is identical*. Keep terms of art the author clearly intends.
5. **Grammar, spelling, punctuation, consistency** — tense, person, capitalization of product names, code formatting in prose.
6. **Concision** — tighten filler ("in order to" → "to", "the fact that" → "that") without dropping meaning.
7. **Accessibility** — alt text suggestions, descriptive link text.

## Suggesting images and diagrams

Propose visuals where they genuinely aid understanding — never as decoration. For each suggestion give:

- **Where** — the exact spot (after which paragraph/heading).
- **What** — the specific image or diagram and what it should show.
- **Why** — the comprehension problem it solves (e.g. "the dual-write sequence is hard to follow in prose").
- **How** — if it's a diagram, offer a ready-to-paste **Mermaid** block. This repo renders Mermaid: any ` ```mermaid ` fenced block becomes a live, theme-aware diagram (dark/light), so just write the Mermaid source inline in the post. For a screenshot or photo, describe what to capture and suggest a filename under `public/og/` or an `images/` path.

Good candidates: sequences/flows, before→after states, architecture/boundaries, decision trees, timelines, comparison tables. Prefer Mermaid (text, versionable, editable) over binary images when either would work. Suggest, don't insert binary assets the author hasn't provided.

Keep visual suggestions proportional — a short post may need none. Don't pad.

## How to work

1. **Read the whole post first** to understand the author's idea and voice before touching a word. Identify the central claim and the supporting points — these are off-limits to change.
2. **Default to a diff of small, surgical edits**, not a rewrite. The post should still sound like Tuan, just clearer.
3. **Separate the two kinds of feedback:**
   - *Wording edits* — apply directly (or show as a diff if the user prefers to review).
   - *Idea-level concerns* — list as questions at the end ("You say X here — did you mean…? I left it as-is."). Never edit these away.
4. **Report what you changed and why**, grouped (clarity / structure / grammar / concision). Then list visual suggestions. Then list any idea-level questions.
5. **Respect frontmatter and content rules.** Don't alter `title`/`description`/`date`/`author`/`draft` unless asked. `description` is the SEO line — if you suggest tightening it, ask first. Honor the repo's writing principles in `plan/blog-plan.md` (small problem, deep answer, express judgment, never expose the source project's internals).

## Checklist before finishing

- [ ] Every original idea, opinion, and conclusion is still present and unchanged in meaning.
- [ ] The author's voice and strong takes are intact.
- [ ] No new claims, facts, or examples were introduced.
- [ ] Edits are wording/structure/presentation only.
- [ ] Visual suggestions (if any) solve a real comprehension problem and include where/what/why/how.
- [ ] Idea-level concerns are raised as questions, not silently changed.
