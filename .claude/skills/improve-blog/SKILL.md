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
6. **Concision — readers are lazy, so cut the lê thê.** Tighten filler ("in order to" → "to", "the fact that" → "that") and, more importantly, hunt verbose/rambling phrasing: wind-up clauses that delay the point, the same idea restated twice for rhythm, long-winded constructions where a short one says the same thing. The test: if a sentence or clause can go without losing an *idea*, cut it. Say each point once, sharply. This is wording-only — never drop a reason, claim, or piece of reasoning; only the words used to express it.
7. **Strip AI tells** — remove all emoji (prose, headings, tables, diagram labels) and cut phrasing that reads as machine-written: "let's dive in", "in conclusion", "it's important to note", reflexive hedging, and bullet padding. Make it sound like a person wrote it. This is wording-only — never change the underlying point.
8. **Technical language (Technical posts)** — favor precise terms of art over vague analogies, and cut decorative/emotional flourish that carries no technical information ("sitting right there", "a bad afternoon", dramatic build-ups). Test: if removing a phrase loses no engineering information, cut it. Strong opinions and judgment are *substance*, not decoration — keep every one. This is register-only: tighten how the reasoning is phrased, never reduce the reasoning itself or change a claim.
9. **Accessibility** — alt text suggestions, descriptive link text.

## Make it scannable without making it shallow (layered depth)

Tuan is a senior/expert writing to share deep knowledge — **depth is the product and is never the thing to cut.** Readers are lazy and scan first, so the job is to make the depth *navigable*, not to remove it. Improve a post for two readers at once:

- **The scanner** should get the whole arc from the surface — hook, the Problem/Why/Goal table, diagrams, bold lead sentences, the trade-off table.
- **The reader who dives** should find the full reasoning intact in the prose beneath.

So:

- A paragraph describing a sequence, flow, or before→after → suggest (or insert) a **Mermaid diagram** *as an entry point*, keeping the reasoning prose beneath it.
- A paragraph weighing options or costs → suggest a **comparison/trade-off table**, then keep the *why* expanded below it.
- **Front-load each section's takeaway** in a bold lead sentence the scanner catches; leave the depth that follows it.
- Cut only genuine padding, filler, and anything a diagram already says verbatim — **never the senior-level reasoning.** There is no word-count target; length should follow how fully the post covers its one problem. If a post reads thin, that's a flag *to the author*, not something you can fix by writing in more depth yourself.

Converting prose to a diagram/table is a *presentation* change and is allowed — but the diagram must say exactly what the prose said: same claims, same trade-offs, no new facts, nothing dropped. If a conversion would force you to invent or omit a point, don't — flag it instead.

**Check the opening frame.** Every post should open (right after the hook) with a compact **Problem / Why / Goal** table so a scanning reader gets the point in five seconds. If it's missing, suggest adding one built *only* from what the post already says. If the three are present but unclear, sharpen the wording — never the meaning.

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
5. **Respect frontmatter and content rules.** Don't alter `title`/`description`/`date`/`author`/`draft` unless asked. `description` is the SEO line — if you suggest tightening it, ask first. Honor the repo's writing principles: one small problem, deep answer, express judgment, never expose the source project's internals.

## Checklist before finishing

- [ ] Every original idea, opinion, and conclusion is still present and unchanged in meaning.
- [ ] The author's voice and strong takes are intact.
- [ ] (Technical) Language is precise and technical; decorative/emotional flourish carrying no engineering information is cut — reasoning and opinions untouched.
- [ ] Prose is tight: no verbose wind-ups, no idea restated twice, no clause that can go without losing an idea. Each point said once.
- [ ] No new claims, facts, or examples were introduced.
- [ ] Edits are wording/structure/presentation only.
- [ ] Prose that a diagram or table would carry better has been flagged or converted — with no change to the idea.
- [ ] The post opens with a clear Problem / Why / Goal frame (suggested if missing).
- [ ] Visual suggestions (if any) solve a real comprehension problem and include where/what/why/how.
- [ ] Idea-level concerns are raised as questions, not silently changed.
