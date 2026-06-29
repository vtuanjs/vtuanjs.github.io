---
name: write-blog-management
description: Draft a new Management space blog post — engineering leadership, team decisions, organizational design, and people/process topics written for tech leads, engineering managers, and senior ICs. Use when writing to src/content/management/.
---

# Write a Management blog post

Help Tuan turn a leadership or team decision into a finished draft. The audience is tech leads, engineering managers, senior ICs moving into leadership, and founders managing technical teams.

This is not engineering implementation. It's the layer above it: how to make calls about people, process, and org design — grounded in engineering reality but about how teams work, not how code works.

## Core philosophy

Every post should argue, implicitly or explicitly, from one belief: **a manager leads by laying a solid foundation, then steps back so the team can own the work — while never stopping watching.**

In practice that means three moves, in order:

1. **Lead from the front first.** Set the foundation that's hard to fix later — the codebase, the standards, the process, the way decisions get made. The leader does this directly; it doesn't get delegated before it exists.
2. **Then step back.** Once the foundation holds, get out of the way. The team owns execution and grows by carrying it. A manager who keeps making every call has failed to build the foundation that lets him leave.
3. **But keep watching, and step in fast.** Stepping back is not stepping out. Watch continuously; the moment something drifts off course, jump in and fix it, then step back again.

The tension this philosophy lives in — and what most management posts here are really about — is the judgment of *when* each move applies: how much foundation is enough before stepping back, what counts as "off course" versus a team finding its own way, and when intervening rebuilds trust versus when it undermines ownership. A post that resolves one of those tensions with a concrete call is on-target. If a process or an intervention doesn't either strengthen the foundation, enable ownership, or correct a real drift, it's friction — cut it.

## Audience

Tech leads, engineering managers, senior ICs, and founders. They understand engineering but are wrestling with the harder problems: how to structure a team, how to give feedback that sticks, how to decide when to rewrite, how to run planning that doesn't waste everyone's time. They're experienced enough to smell corporate-speak and vague frameworks — write with the same directness you'd use talking to a peer.

No code. Minimal jargon. But don't talk down to them — they're smart people dealing with genuinely hard problems.

## What belongs here

- How to structure an engineering team for a given stage or goal
- How to make a hard call (rewrite vs. refactor, hire vs. promote, cut scope vs. slip deadline)
- How to run a process that actually works (planning, retros, 1:1s, incident reviews)
- How to give feedback, handle underperformance, or set expectations
- What to optimize for at each stage of a team's growth
- Org design decisions: team topologies, ownership models, on-call rotation
- The management layer of technical decisions: how to communicate a technical bet to stakeholders, how to get engineering buy-in on a direction

## What this is NOT

- Not a leadership-inspiration blog. No motivational arcs, no "great leaders do X."
- Not a collection of frameworks. A framework appears only when Tuan is arguing for or against using it.
- Not generic career advice.
- Not a book summary. Don't explain Scrum, Agile, OKRs, DORA, or Team Topologies; reference them only to take a position on a specific practice.

Every post exists to help someone make one better management decision. If it does anything else, it's the wrong post for this space.

## Post structure

1. **Hook — one concrete moment** (2–4 sentences). A specific situation that every reader in the audience has faced or will face. A meeting that went wrong, a decision that kept getting deferred, a hire that revealed a gap. Concrete and recognizable, not abstract.

2. **Vision / thesis — one bold sentence.** The core claim of the post. What Tuan believes and is prepared to defend.

3. **Problem / Why / Goal table:**

```markdown
| | |
|---|---|
| **Problem** | The specific situation that's broken or unclear. |
| **Why** | Why the default instinct fails here. |
| **Goal** | What good looks like — the leadership outcome. |
```

4. **Body** — the reasoning. This is where the depth lives:
   - Why the obvious answer fails
   - The real constraint (usually about people, incentives, or information flow — not technology)
   - The call Tuan makes and why
   - Where he'd decide differently

5. **What changed my mind** — the belief Tuan held that turned out wrong, and the experience that broke it. This is where credibility comes from: "I used to force every senior to mentor juniors; after running a few teams I stopped." A reversal earned through real calls beats another round of explanation. Skip it only when the post genuinely isn't about a changed belief.

6. **Trade-off** — what this approach costs; when he'd choose differently. Always a table for scannability, always with prose expanding the *why* below. The table names the failure mode, not just the cost — how this choice breaks in practice:

```markdown
| Benefit | Cost | Failure mode |
|---|---|---|
| Faster decisions | Less consensus | Team stops raising concerns |
```

7. **Closing** — one actionable decision the reader can make tomorrow, not a summary of the post. "In your next planning meeting, cut one approval step and see if anyone misses it" beats "good management balances many factors."

## Voice and language rules

- **No code.** Management posts have zero code blocks. If a concept needs illustration, use a concrete scenario — a real meeting, a real decision, a real conversation structure.
- **No management clichés.** Cut: "it's all about trust," "fail fast," "psychological safety" (use it only if you're going to say something specific about it), "alignment," "bandwidth." If a phrase appears in every management book, replace it with what you actually mean.
- **No frameworks as decoration.** Mention a framework (RACI, DACI, OKRs) only if Tuan has something specific to say about using or not using it. Don't name-drop to seem thorough.
- **First-person, direct, opinionated.** Tuan has managed teams and made real calls. That experience is the authority — not citations or frameworks. Say what he did and why.
- **Plain language, but not dumbed down.** The audience is experienced. Don't over-explain. Do explain your actual reasoning.
- **No emoji anywhere.** Not in prose, headings, tables, or labels.
- **No AI tells.** No "let's explore," "it's important to note," "in conclusion," reflexive hedging.

## Layered depth — write for two readers

Same rule as every space: serve both the scanner and the one who stays.

- **Scan layer** — hook, thesis, table, bold takeaway sentences, trade-off table. A reader who skims should still know the call and the core argument.
- **Depth layer** — the full reasoning under each section. Why the obvious instinct fails, the real constraint (usually human, not technical), the judgment made, the failure mode encountered. Don't thin this out.

Rules:
- **Front-load the takeaway.** Lead each section with the conclusion in bold, then expand.
- **Tables carry comparison; prose carries reasoning.** A trade-off or option comparison becomes a table. The reasoning behind the table goes in prose below it.
- **Tight prose.** Every sentence earns its place. No restating the same point twice for rhythm.
- **Default to the shortest version, then cut again.** The first draft is always too long. Re-read each paragraph and delete every word that earns nothing — decoration, wind-up, restated points — but never cut the reasoning that proves the call.

## The rules that apply to every post

1. **One focused decision or situation per post.** If the post covers two real tensions, it's two posts.
2. **The context is the source, never the subject.** Abstract to the general pattern. No real team names, company names, or identifying details. A reader should recognize the situation without learning Tuan's org.
3. **Write to express judgment.** The call made, the trade-off weighed, what he'd do differently. Opinion is the product.

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

- **`title`** — name the decision or the call, not the topic. "Promote from within vs. hire externally for a senior role" beats "Hiring decisions."
- **`description`** — the one question this post answers.

Save to `src/content/management/` with a kebab-case filename. Always `draft: true` until Tuan confirms.

## How to work

1. Take the topic. Narrow to one concrete situation or decision.
2. Find the real constraint — it's almost never technology. It's incentives, information flow, trust, clarity of ownership.
3. Find the trade-off before drafting. If the cost of the chosen approach can't be named, the problem isn't clear yet.
4. Draft in Tuan's voice: first-person, direct, no hedging, no clichés.
5. Write the file, then tell the user: `npm run dev` to preview, flip `draft: true` off to publish.

## Checklist before finishing

- [ ] No emoji anywhere.
- [ ] No code blocks.
- [ ] No management clichés or framework name-drops without substance.
- [ ] Hook is a concrete, recognizable situation — not an abstract premise.
- [ ] Thesis stated in one bold sentence.
- [ ] Real constraint identified (usually human/organizational, not technical).
- [ ] The call is consistent with the core philosophy (foundation → step back → watch and intervene), even if the post never names it.
- [ ] "What changed my mind" present (unless the post genuinely isn't about a reversed belief).
- [ ] Trade-off table names the failure mode, not just the cost.
- [ ] Closing is one decision the reader can act on tomorrow — not a summary.
- [ ] Tight prose: no point restated twice, no clause that can go without losing an idea.
- [ ] Nothing identifies the real team, company, or individuals.
- [ ] Frontmatter complete, saved to `src/content/management/`, `draft: true`.
