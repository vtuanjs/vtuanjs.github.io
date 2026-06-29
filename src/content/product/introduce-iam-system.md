---
title: "Identity and access management as one system (part 1)"
description: "Why identity, authorization, and per-tenant decisions belong in one system every other service reads from or reacts to — and a tour of the five pieces."
date: 2026-06-29
author: Tuan Nguyen
draft: false
tags: [iam, authorization, architecture]
vi_url: /vi/product/gioi-hieu-he-thong-iam/
# image: /og/introduce-iam-system.png
---

A customer is locked out of a feature they pay for. Support escalates to engineering. Both logs say the customer has access. No error, no recent change. You can't find the bug because every part of the product is keeping its own answer to "who is this customer and what can they do?" — and those answers drifted apart.

**The fix is one system that owns these decisions, and one rule for everyone else: get the answer from there, never invent your own.**

This is the first post in a series on building that system. This part frames the problem and introduces the five pieces; later parts go deep on each one.

| | |
|---|---|
| **Problem** | Each part of the product keeps its own copy of who a customer is, what they can do, and how they're configured — and the copies diverge. |
| **Why** | There is no single source of truth. Every team builds what they need, and the gaps show up as customer-facing bugs. |
| **Goal** | One system owns these decisions. Every other part of the product reads from it, so the answer is always the same. |

## Why it matters

When different parts of the product disagree about a customer, the customer feels it — locked out of something they pay for, charged the wrong price, or onboarded into a broken state they can't explain and support can't fix. The cause is always the same: two places each stored "what this customer can do," and they drifted.

The business cost compounds quickly. Support tickets increase. Engineering spends time on bugs that have no single owner. Launching a new feature becomes a coordination effort across teams instead of flipping one switch. Onboarding a new customer requires N separate actions — miss one and something breaks.

Centralizing these decisions doesn't add complexity. It removes the hidden complexity that was already there, spread across every team's codebase.

## The five pieces

### Organization — one customer record, everything else follows

When a new customer signs up, every part of the product needs to know they exist: billing, support, access control, analytics. Without a single place that owns this, each team provisions their own copy — and if any one step fails, the customer ends up in a broken state that's hard to diagnose and harder to fix.

**Benefit:** One action creates the customer. Every other system follows automatically. Part 2.

### User — one person, consistent access everywhere

The same person can be an admin in their own account and a read-only viewer in a partner's. Without a system that tracks this cleanly, access bugs appear: someone sees something they shouldn't, or can't do something they should, and there's no clear place to fix it.

**Benefit:** One authoritative answer to "who is this person and what are they allowed to do" — regardless of which part of the product is asking. Part 3.

### Feature flag — test with real customers before rolling out to everyone

New features used to ship to everyone at once, or stay hidden until they were fully ready. Feature flags change that: turn a feature on for one or two customers to watch it work with real usage, then widen the rollout, and turn it off in seconds if something breaks.

**Benefit:** Faster, safer launches. Pilots with specific customers before committing to everyone. No emergency deploys to turn something off. Part 4.

### Config — each customer's settings, in one governed place

Some customers have different pricing, currency, invoice formats, or SLA tiers. Without a governed place for this, those differences end up scattered — in spreadsheets, in code exceptions, in tribal knowledge. They drift, conflict, and cause the wrong behavior for the wrong customer.

**Benefit:** Each customer's configuration lives in one place the whole product reads consistently, with no guesswork about which version is current. Part 5.

### Rules — business logic that anyone can change, without a deploy

Shipping fees, discount eligibility, pricing tiers: this logic changes on a business schedule, not an engineering one. When it's in code, every change needs a developer and a deployment. When it's in a free-text box, one typo can break checkout.

**Benefit:** The right people can change business logic directly — validated, auditable, live without a deploy. Engineering is no longer the bottleneck for every rule change. Part 6.

## The trade-off: one shared system means one shared dependency

Centralizing these decisions is not free.

| | Each team decides on their own | One shared system |
|---|---|---|
| "Can this customer do X?" | Different answer depending on who you ask | One answer, everywhere |
| Onboarding a new customer | Each team provisions separately — easy to miss one | One action, everything follows |
| Launching for select customers | Re-built in each product area | One targeting list |
| Consistency across the product | Varies | Same everywhere |
| Risk if the system is down | Isolated to one area | Broader impact |

The real cost is concentration: if this system has a problem, more of the product feels it. That's a real risk, and it's managed deliberately — not ignored.

But the scattered model doesn't avoid this cost. It hides it as bugs you discover in production, one confused customer at a time. A single owner makes the answer a fact instead of a guess.

Part 2 starts with the organization: what actually happens when a new customer is created, and why getting it wrong shows up so late.
