---
name: write-blog-technical
description: Draft a new Technical space blog post — one narrow engineering decision, defended in depth with precise language, code, and Mermaid diagrams. Use when writing to src/content/technical/.
---

# Write a Technical blog post

Help Tuan turn one engineering decision into a finished draft. The audience is engineers and tech leads — people who read code, care about trade-offs, and will notice if the reasoning is shallow.

The job is to express judgment with authority, not to write a tutorial. Opinion is the product; code is the evidence.

## Audience

Engineers and tech leads. Use precise technical language. Name the real mechanism — `transaction`, `idempotent`, `write-ahead log`, `at-least-once` — not a vague analogy. Precision signals expertise; hand-waving hides it.

## Technical language rules

- **Use exact terms of art.** Never substitute a vague analogy for a real mechanism. If the reader needs to know what a WAL is, explain it once, then use the term.
- **Cut decorative and emotional phrasing.** No dramatic build-ups, no literary flourishes ("sitting right there", "a bad afternoon"). State the failure mode, the constraint, the trade-off. If removing a phrase loses no engineering information, cut it.
- **Hook is concrete, not emotional.** Open on the specific failure — the symptom, the log line, the constraint that bit. Concrete ≠ emotional.
- **Strong takes stay, but make them falsifiable.** Blunt opinions are the point — and the best ones carry their own counter-argument. Not "I prefer X" but "I avoid X because it breaks under Y" ("I avoid distributed transactions because retries are cheaper than coordinating locks across services"). An opinion that can be argued against is worth more than one that can't. Blunt ≠ dramatic; trim the flourish, never the verdict.
- **Register, not depth.** Keep all the reasoning. Technical language means expressing it precisely, not writing less of it.

### Banned vocabulary

These words signal junior writing because they assert quality without measuring it. Cut them and replace with the property you actually mean:

- Avoid: `best practice`, `scalable`, `robust`, `production-ready`, `enterprise-grade`, `clean`, `maintainable`, `performant`.
- Replace with measurable properties: `idempotent`, `O(log n)`, `append-only`, `monotonic`, `bounded memory`, `at-least-once`, `exactly-once`, `lock contention`, `write amplification`, `connection pool exhaustion`, `WAL replay`.

If a claim can't be restated as a property that's true or false under a named condition, it's marketing — cut it or make it concrete.

## Post structure

Every Technical post follows this arc. Drop a section if the post is better without it, but earn the omission.

1. **Hook** — the specific moment the problem showed up. Ideally a Mermaid diagram of the failure state. Concrete, not "imagine you have a system that…"

2. **Problem / Why / Goal table** — right after the hook:

```markdown
| | |
|---|---|
| **Problem** | The one specific thing that's broken or undecided. |
| **Why** | The root cause / the constraint that makes it hard. |
| **Goal** | What "solved" looks like — the engineering outcome. |
```

3. **The naive answer** — what most engineers reach for first, and what breaks. Show the failure with a Mermaid flow if it helps.

4. **The real problem** — the constraint that makes it genuinely hard. Go deep here. This is where a senior take separates from a tutorial.

5. **My answer** — the decision, as a diagram + a minimal code snippet, with the reasoning underneath.

6. **Why not the runner-up** — the senior reader already discarded the naive answer; they're comparing your choice against *their* second-best (Outbox vs 2PC, schema-per-tenant vs `tenant_id`, polling vs CDC). Name that alternative and say why you didn't take it. This is the most interesting part of the post — don't skip it.

7. **The trade-off** — what this costs; when he'd choose differently. Always a table, always with prose expanding the *why* below. Never skip or thin this section — it's the proof that the problem is understood.

## Layered depth — write for two readers

Every post serves two readers: the scanner and the one who stays.

- **Scan layer** — hook, Problem/Why/Goal table, Mermaid diagrams, bold takeaway sentences, trade-off table. A reader who only skims should still walk away with the decision and the gist. Build this so it stands alone in ~30 seconds.
- **Depth layer** — full senior-level reasoning in prose under each section: why obvious answers fail, the real constraint, the judgment call, the failure mode learned the hard way. Do not thin this out to save words.

**What "deep" actually means.** A section is deep when it answers these, not when it's long:
- What invariant are we preserving?
- What assumption breaks, and under what condition?
- What failure mode does this prevent?
- What operational cost shows up later (not at write time)?
- Which complexity are we *moving* rather than removing — and under what condition would I reverse this decision?

If a section doesn't touch at least a couple of these, it's still a tutorial.

Rules:
- **Diagrams carry structure; prose carries depth.** A flow/sequence becomes a Mermaid diagram — then the prose goes deep on the why beneath it. The visual is the entry point, not a replacement.
- **Reach for Mermaid when the decision involves control flow, ordering, ownership, or system boundaries** — not by default. A diagram that only restates one sentence is noise; a table or plain prose is often enough (e.g. "role IDs vs role names in the token" needs a table, not a flowchart). When you do draw one, color failure nodes red: `style X fill:#7f1d1d,color:#fff`.
- **Front-load the takeaway.** Lead each section with the conclusion in bold, then expand. Progressive disclosure, not omission.
- **Length follows coverage, not a cap.** Write as much as it takes to fully exhaust the *why*. Cut padding; never cut reasoning.
- **Tight prose.** Every sentence earns its place. No restating the same point twice for rhythm. If a clause can go without losing an idea, it goes.
- **Default to the shortest version, then cut again.** The first draft is always too long. Re-read each paragraph and delete every word that earns nothing — but never cut reasoning. This trims length (decoration, wind-up, restated points), not depth.

## Snippet discipline

Code is evidence, kept small and sanitized:

- **≤20 lines**, ideally 5–15. Show the idea, not a working module.
- **Generic names** — `orders`, `tenant_id`, `Item`, `doSomething()`. No real table names, service names, or domain terms.
- **No real paths.** Invent plausible generic ones if a path is needed.
- Prefer pseudocode over a literal paste when the decision is the point, not the syntax.

## The rules that apply to every post

1. **One narrow decision per post.** Not "how we do multi-tenancy" — but "should `tenant_id` live in a column or a schema, and why." If a topic holds two real decisions, it's two posts.
2. **The project is the source, never the subject.** Abstract to the general pattern. No real file paths, domain internals, proprietary logic, or employer specifics.
3. **Write to express judgment.** Lead with the decision and the reasoning. Show the trade-off actually weighed. Opinion is the product.

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

- **`title`** — name the decision, not the topic. "Putting role IDs (not role names) in the token" beats "Token design."
- **`description`** — the one question this post answers. A reader should know in one line whether it's for them.

Save to `src/content/technical/`. Always `draft: true` until Tuan confirms.

## How to work

1. Take the topic. Narrow to one defensible decision before writing.
2. Name the constraint that forced the decision — the connection limit, the tenant count, the latency budget, the consistency requirement. Senior engineers start from constraints, not solutions; once the constraint is explicit, the trade-off and the decision both become defensible.
3. Find the trade-off first — name what the chosen answer costs. If the cost can't be named, the problem isn't understood yet.
4. Draft in Tuan's voice: first person, direct, opinionated, no corporate neutrality.
5. Sanitize as you go — re-read asking: *does this reveal his system, or teach a pattern?*
6. Write the file, then tell the user: `npm run dev` to preview, flip `draft: true` off to publish.

## Checklist before finishing

- [ ] No emoji anywhere.
- [ ] Precise terms of art throughout; no vague analogies substituting for real mechanisms.
- [ ] No banned vocabulary (`best practice`, `scalable`, `robust`, `production-ready`…); claims stated as measurable properties.
- [ ] Decorative/emotional phrasing cut; every strong take and all reasoning kept.
- [ ] Strong opinions are falsifiable — each one names what it breaks under.
- [ ] Tight prose: no point restated twice, no clause that can go without losing an idea.
- [ ] Exactly one narrow decision; the constraint that forced it is explicit.
- [ ] Depth answers the invariant / assumption / failure-mode / cost / reversal questions, not just length.
- [ ] Problem/Why/Goal table present and crisp.
- [ ] Naive answer addressed — and the runner-up alternative explicitly rejected with a reason.
- [ ] Trade-off section names a real cost and when he'd choose differently.
- [ ] Every snippet ≤20 lines, generic names, no real paths or domain terms.
- [ ] Nothing reveals the underlying system, employer, or proprietary logic.
- [ ] Frontmatter complete, saved to `src/content/technical/`, `draft: true`.
