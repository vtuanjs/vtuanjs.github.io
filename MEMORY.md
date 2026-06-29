# Project memory — writing preferences

Durable preferences for working on this blog. Committed to the repo so they apply on any machine. These are guidance for how to write and edit posts; the mechanics live in `CLAUDE.md` and the `.claude/skills/`.

## Layered depth — deep AND scannable

Tuan is a senior/expert sharing deep knowledge with authority. **Depth is the product — never sacrifice it.** But readers are lazy and scan first, so layer every post for two readers at once rather than just making it short:

- **Scan layer:** hook, Problem/Why/Goal table, Mermaid diagrams, bold takeaway sentences, trade-off table — gist in ~30 seconds.
- **Depth layer:** full senior-level reasoning in prose under each section (why obvious answers fail, the real constraint, the judgment, the failure modes). Length follows how much the *why* needs, not a word cap.

Diagrams/tables carry structure, prose carries depth (the visual is the entry point, not a replacement). Mermaid for sequences/flows/decisions; color failure nodes red (`fill:#7f1d1d`). Front-load each section's takeaway in bold, then expand. Baked into the `write-blog` skill. Don't over-trim — gutting depth removes the expertise signal.

## Tight prose — readers are lazy

Người đọc rất lười: họ bỏ đi trước khi chạm tới chiều sâu nếu phải lội qua chữ thừa. Mỗi câu phải đáng giá. Không wind-up dài dòng, không lặp lại một ý hai lần để lấy nhịp, không diễn đạt lê thê khi một câu ngắn nói được điều đó. Test: nếu bỏ một câu/mệnh đề mà không mất *ý* nào thì bỏ. Đây là chuyện *độ dài câu chữ*, không phải chiều sâu — nói mỗi ý một lần, sắc, rồi đi tiếp; không bao giờ cắt reasoning. Baked into `write-blog` and `vn-translation`.

## No emoji, natural voice

No emoji anywhere — prose, headings, tables, or Mermaid diagram labels. Write naturally; avoid AI tells ("let's dive in", "in conclusion", "it's important to note", reflexive hedging, bullet padding). Plain, direct, first-person sentences.

Diagram node coloring (e.g. red failure nodes) is fine — it's a comprehension aid, not an AI tell; only emoji are banned. Baked into the `write-blog` skills.

## Technical posts: technical language, not decoration

Technical-space posts are carried by **precise engineering language**, not emotion or storytelling. Use the exact terms of art (transaction, commit, idempotent, write-ahead log…) instead of vague analogies. Cut decorative/emotional flourish that carries no technical information — if removing a phrase loses no engineering information, cut it. This is about *register*, not depth: keep all the reasoning and every strong opinion (those are substance), just express them precisely and plainly. Baked into the `write-blog` skills. The Vietnamese rule below is the stronger, language-specific version of this.

## Vietnamese versions: dry and technical

The Vietnamese version of a post should be **drier and more technical than the English** — cut emotional/decorative words ("sờ sờ ngay đó", "một buổi chiều tồi tệ") and redundancy. Lead with the technical claim. Keep English terms of art (transaction, commit, broker, deploy, log…) — only the connective words are Vietnamese. Never translate English idioms literally ("nó cắn tôi" → "tôi dính phải nó").

The English leans on imagery to carry a point; in Vietnamese the engineering substance carries it. Literal translation reads like machine/AI output, not how a senior Vietnamese engineer writes. Use the `vn-translation` skill, which encodes all of this. Still preserve the author's ideas and opinions unchanged — only the language gets drier.
