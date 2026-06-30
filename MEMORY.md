# Project memory — writing preferences

Durable preferences for working on this blog. Committed to the repo so they apply on any machine. These are guidance for how to write and edit posts; the mechanics live in `CLAUDE.md` and the `.claude/skills/`.

## Layered depth — deep AND scannable

Tuan is a senior/expert sharing deep knowledge with authority. **Depth is the product — never sacrifice it.** But readers are lazy and scan first, so layer every post for two readers at once rather than just making it short:

- **Scan layer:** hook, Problem/Why/Goal table, Mermaid diagrams, bold takeaway sentences, trade-off table — gist in ~30 seconds.
- **Depth layer:** full senior-level reasoning in prose under each section (why obvious answers fail, the real constraint, the judgment, the failure modes). Length follows how much the *why* needs, not a word cap.

Diagrams/tables carry structure, prose carries depth (the visual is the entry point, not a replacement). Mermaid for sequences/flows/decisions; color failure nodes red (`fill:#7f1d1d`). Front-load each section's takeaway in bold, then expand. Baked into the `write-blog` skill. Don't over-trim — gutting depth removes the expertise signal.

## Visual-first — one picture beats a hundred boring words

Mỗi post phải tải cấu trúc của nó bằng *hình ảnh động*, không phải tường chữ. Một diagram chuyển động cho người đọc nắm được cơ chế của hệ thống trước cả khi họ đọc một câu — đó là layer scan mạnh nhất. Dùng các component bespoke, có animation trong `src/components/diagrams/` (`FlowChain`, `FanOut`, `Pipeline`, `Toggle`, `LostEventTimeline`, `StepCards`, `CompareCards`, `OutboxFlow`); tái sử dụng khi vừa, dựng component mới khi một quyết định cần ẩn dụ hình ảnh riêng. Mọi component: CSS namespaced `.dw-*` trong `src/styles/diagrams.css`, theme-aware, reduced-motion-aware, không emoji (vẽ mark bằng CSS, tô node fail màu đỏ), và animation phải minh hoạ *cơ chế* chứ không trang trí. Post là `.mdx` để import được component. Mermaid chỉ còn là fallback. Đây là về *cách trình bày chiều sâu*, không thay thế chiều sâu — prose vẫn mang reasoning bên dưới mỗi hình. Baked into the `write-blog` skills; reference post `src/content/technical/the-dual-write-problem.mdx`.

## Tight prose — readers are lazy

Người đọc rất lười: họ bỏ đi trước khi chạm tới chiều sâu nếu phải lội qua chữ thừa. Mỗi câu phải đáng giá. Không wind-up dài dòng, không lặp lại một ý hai lần để lấy nhịp, không diễn đạt lê thê khi một câu ngắn nói được điều đó. Test: nếu bỏ một câu/mệnh đề mà không mất *ý* nào thì bỏ. Đây là chuyện *độ dài câu chữ*, không phải chiều sâu — nói mỗi ý một lần, sắc, rồi đi tiếp; không bao giờ cắt reasoning. Baked into `write-blog`.

## No emoji, natural voice

No emoji anywhere — prose, headings, tables, or Mermaid diagram labels. Write naturally; avoid AI tells ("let's dive in", "in conclusion", "it's important to note", reflexive hedging, bullet padding). Plain, direct, first-person sentences.

Diagram node coloring (e.g. red failure nodes) is fine — it's a comprehension aid, not an AI tell; only emoji are banned. Baked into the `write-blog` skills.

## Technical posts: technical language, not decoration

Technical-space posts are carried by **precise engineering language**, not emotion or storytelling. Use the exact terms of art (transaction, commit, idempotent, write-ahead log…) instead of vague analogies. Cut decorative/emotional flourish that carries no technical information — if removing a phrase loses no engineering information, cut it. This is about *register*, not depth: keep all the reasoning and every strong opinion (those are substance), just express them precisely and plainly. Baked into the `write-blog` skills.
