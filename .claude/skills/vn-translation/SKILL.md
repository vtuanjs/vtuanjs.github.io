---
name: vn-translation
description: Translate or localize a technical blog post in this repo into natural, strong Vietnamese — the way a senior Vietnamese engineer actually writes and talks, not a literal machine translation. Use when the user wants to create the Vietnamese version of an English post, fix a Vietnamese post that "reads like a translation" or AI-generated, or sharpen the Vietnamese technical voice. Preserves every idea, argument, and the author's voice — only the language changes.
---

# Vietnamese translation / localization

Produce the Vietnamese version of one of Tuan's posts so it reads like it was **written by a Vietnamese engineer**, not translated into Vietnamese. The test is simple: a senior dev in Hà Nội or Sài Gòn reads it and never once thinks "this is translated from English."

## The one rule that overrides everything

**Never change the author's idea.** Same contract as `improve-blog`: you translate and localize *language*, you do not touch substance. No new claims, no dropped points, no softened opinions, no reordered argument. If the English says "I avoid X every time," the Vietnamese says exactly that with the same force. Idea-level doubts become questions at the end — never silent edits.

## What "reads like a translation" actually means — and how to kill it

The problem is almost never vocabulary. It's **translating English idioms and sentence shapes literally** instead of saying the same thing the Vietnamese way. Hunt these down:

- **Literal idioms.** English metaphors translated word-for-word land as nonsense.
  - "it bit me" → ❌ "nó cắn tôi" → ✅ "tôi dính phải nó"
  - "the broker is having a bad afternoon" → ❌ "broker đang có một buổi chiều tồi tệ" → ✅ "broker đang trục trặc"
  - "the service never woke up" → ❌ "service chẳng bao giờ thức dậy" → ✅ "service không bao giờ chạy"
  - "you now own a coordinator" → ❌ "bạn sở hữu một coordinator" → ✅ "bạn phải tự vận hành một coordinator"
- **English prepositions translated as `dưới`/`trên`.** "fails under a restart" → ❌ "thất bại dưới một lần restart" → ✅ "hỏng khi restart". Vietnamese doesn't stack abstract prepositions the way English does.
- **The `một` article calque — the most common tell.** English needs "a/an" before every singular noun; Vietnamese doesn't. Translating each one as "một" makes the prose read instantly like a machine. Drop it unless the count *one* genuinely matters. "a new organization is created" → ❌ "một organization mới được tạo" → ✅ "organization mới được tạo". "publishes a single event" → keep "một" (one is the point) → "publish đúng một event". "support gets a ticket" → ❌ "support nhận một ticket" → ✅ "support nhận ticket". When in doubt, read it without "một" — if the meaning holds, leave it out.
- **Passive-voice pile-ups.** English loves the passive; Vietnamese prefers an active subject. "events are governed by one operation" → ❌ "sự kiện được cai quản bởi một thao tác" → ✅ "sự kiện nằm chung trong một thao tác". Watch for repeated `được + verb` ("được tạo", "được thiết lập") stacking up — rephrase to an active subject or an event verb: "an org is created" → ✅ "org mới ra đời" / "org vừa tạo xong" rather than "một org được tạo" every time.
- **Stiff connectors.** "Furthermore / Moreover / In addition" → don't translate as "Hơn nữa / Thêm vào đó" reflexively; often a Vietnamese writer just starts the next sentence, or uses "Và", "Ngoài ra" sparingly.
- **Over-formal register.** Avoid bookish words where a working engineer would use a plain one. Write the way people talk in a code review, not the way a textbook is printed.

When a sentence feels off, don't tweak the words — **re-say the whole thought in Vietnamese from scratch**, then check it still carries the exact same claim.

## Keep the technical vocabulary in English — this is the point

Vietnamese engineers code and talk in a mix: Vietnamese grammar, English terms of art. Forcing Vietnamese translations of technical terms is what makes a post feel fake and weak. **Strong technical Vietnamese keeps the English term.**

- **Keep in English** (do NOT translate): transaction, commit, rollback, broker, publish, event, deploy, build, log, exception, request, idempotent, at-least-once / at-most-once, outbox, relay, coordinator, lock, throughput, latency, schema, column, index, query, cache, retry, consumer, producer, worker, payload, topic, partition, write-ahead log, change-data-capture, two-phase commit (2PC), and product/tech names (Kafka, Postgres, Debezium, Astro…).
- **Translate to Vietnamese** (the connective, everyday words): the verbs and nouns around the terms — "ghi vào database", "đọc bảng", "hàng đó", "tiến trình riêng", "thất bại trong im lặng", "đánh dấu hàng đã xong", "giữ lock và chờ".
- **Don't half-translate a term of art.** Either it's the English term or it's not — never "sự kiện cam-kết" for "commit".
- **First use of a less-common term:** a short Vietnamese gloss in parentheses is fine once, then use the English term. e.g. "idempotent (gọi lại nhiều lần vẫn ra một kết quả)". Don't gloss common terms everyone knows (commit, deploy, log).

The rule of thumb: **if a Vietnamese engineer would say the English word out loud in a meeting, keep it in English in the post.**

## Voice and register

The Vietnamese version is **drier, shorter, and more technical than the English.** Tuan's English leans on imagery and emotion to carry a point; in Vietnamese, the technical substance carries it. Cut the decoration, keep the engineering. **Khô nhưng ngắn gọn, xúc tích, không lan man** — that is the target, every sentence.

- **Default to the shortest version that keeps the idea — then cut again.** The first Vietnamese draft is almost always too long. After translating a paragraph, re-read it and delete every word that earns nothing: the meaning must survive, nothing else. Tuan will keep asking "ngắn gọn hơn" until it's tight, so do that pass yourself first. Concrete cuts from real edits:
  - "Có một bước đã bị sót" → "Sót một bước."
  - "thông báo 'organization created', giống ý tưởng webhook" → "event 'organization created', giống webhook"
  - "org đã tồn tại trước khi mọi hệ thống bắt kịp — nên đừng thiết kế trải nghiệm lần đầu với giả định mọi thứ sẵn sàng" → "đừng giả định mọi thứ sẵn sàng ngay ở lần đầu"
  - "chạy sai theo kiểu không ai thấy" → "chạy sai mà không ai thấy"
  - Prefer the short verb: "thiết lập / cấp phát" → "set", "nhập tay" → "gõ tay" when it reads naturally.
- **No emotional or decorative words.** Drop the literary flourishes — "sờ sờ ngay đó", "một buổi chiều tồi tệ", "cay đắng", "đáng sợ", dramatic build-ups. State what happens technically. The English "the worst kind of bug is the one with no error" becomes a plain "bug không kèm theo lỗi nào là loại khó phát hiện nhất" — fact, not lament.
- **No redundancy, no lê thê — người đọc rất lười.** If two sentences make the same point for emphasis (common in the English for rhythm), keep one in Vietnamese. Don't restate, don't wind up before the point, don't pad with "điều quan trọng là", "cần lưu ý rằng", "thực ra thì", "việc", "một cách". The test: if a clause can go without losing an idea, cut it. A reader who hits filler stops before reaching the substance. The Vietnamese is often *shorter* than the English — that's correct, not a loss.
- **Lead with the technical claim.** Every paragraph opens with the engineering point, not a wind-up. Translate the *information*, not the mood.
- **Second person `bạn`, first person `tôi`.** Keep strong takes blunt and declarative; don't soften with "có lẽ", "có thể bạn nên" when the English is declarative — but don't amplify with emotion either. Blunt ≠ dramatic.
- **Short, active sentences.** Break English run-ons into separate Vietnamese sentences. One idea per sentence.
- **No emoji, no AI tells** — no "Tóm lại", "Hãy cùng tìm hiểu", reflexive hedging, or bullet padding.

A metaphor that is *load-bearing* (it's the only way the idea is expressed) can stay if it reads natively in Vietnamese — "cái bẫy chực chờ sập" for a latent bug is fine. But a metaphor that only adds color, not meaning, gets cut. When unsure: **would removing this phrase lose any technical information? If no, cut it.**

## What stays byte-for-byte identical

- **Code blocks** — never translate code, identifiers, or string literals. Comments inside code may be translated to Vietnamese if short and natural, but default to leaving them.
- **Mermaid diagrams** — keep the structure and node IDs. Labels can be translated if they're prose; keep them terse. Don't translate technical labels that are terms of art.
- **Links, anchors, `Part 1 of 2` style cross-references** — translate the surrounding prose, keep the URLs. Point cross-links at the Vietnamese counterpart when one exists (see wiring below).

## Bilingual wiring (the mechanics)

The repo links the two language versions through frontmatter and a `vi/` subdirectory. Get this exactly right or the language switcher breaks.

- **Vietnamese file location:** `src/content/<space>/vi/<slug>.md` (e.g. `src/content/technical/vi/van-de-dual-write.md`). The slug should be a natural Vietnamese kebab-case (e.g. `van-de-dual-write`), not the English slug.
- **Vietnamese frontmatter:**
  ```yaml
  ---
  title: "Tiêu đề tiếng Việt — dịch sát ý, giữ giọng"
  description: "Một dòng tiếng Việt — đúng câu hỏi bài viết trả lời (SEO)."
  date: <same date as the English post>
  author: Tuan Nguyen
  draft: false
  lang: vi
  en_url: /technical/<english-slug>/
  ---
  ```
- **Update the English post** to point back: add `vi_url: /vi/<space>/<vi-slug>/` to its frontmatter (next to the other fields). The pairing is two-way — `en_url` on the VI file, `vi_url` on the EN file.
- **`title` / `description`** — translate them too (they're the page title and SEO line). Same no-literal-idiom rule. Keep the English term of art if the title names one ("dual-write", "outbox").
- **`draft`** — match the English post's draft state unless told otherwise.

## How to work

1. **Identify the job.** Either (a) translate an English post that has no Vietnamese version yet, or (b) localize an existing Vietnamese post that reads like a translation. Read the whole source first — understand the idea and voice before writing.
2. **For a new translation:** create `src/content/<space>/vi/<slug>.md`, write the full Vietnamese version, set `lang: vi` and `en_url`, then add `vi_url` to the English post. Translate idea-for-idea and idiom-for-meaning — never line-by-line literally.
3. **For a localization pass:** default to **surgical edits** of the unnatural phrasings, not a full rewrite — keep what already reads naturally. Hunt the literal idioms, passive pile-ups, and over-translated terms listed above.
4. **Read it aloud in your head as a Vietnamese engineer.** Every sentence that makes you pause is a calque — re-say it natively.
5. **Report what you changed,** grouped (idiom localization / term restored to English / voice / wiring). List any idea-level doubts as questions — never edit them away.
6. **Tell the user how to preview** — `npm run dev`, then the language switcher on the post should swap between the two versions.

## Checklist before finishing

- [ ] No literal English idioms — every metaphor reads natively in Vietnamese.
- [ ] Technical terms of art kept in English; only the connective words are Vietnamese.
- [ ] No half-translated terms (e.g. no "sự kiện cam-kết" for commit).
- [ ] Active, short sentences; English run-ons and passive pile-ups broken up; no `được + verb` stacking.
- [ ] No `một` article calque — dropped unless the count *one* actually matters.
- [ ] No emotional/decorative words, no redundancy, no lê thê — every phrase carries technical information; no wind-up clauses, no point restated twice.
- [ ] Did the shortest-version pass: re-read each paragraph and cut every word that earns nothing; short verbs preferred (set, gõ tay). Khô, ngắn gọn, xúc tích, không lan man.
- [ ] Author's ideas, opinions, and their strength are unchanged.
- [ ] Voice stays blunt, technical, and first-person; no softening, no emoji, no AI filler.
- [ ] Code blocks and Mermaid structure untouched; URLs preserved.
- [ ] Wiring correct: VI file has `lang: vi` + `en_url`; EN file has `vi_url`; slugs and paths match.
- [ ] `title` and `description` translated naturally for SEO.
- [ ] Idea-level concerns raised as questions, not silently changed.
