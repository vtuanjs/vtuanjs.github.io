---
title: "Welcome to the Technical space"
description: "Engineering deep-dives, architecture notes, and lessons from the code."
date: 2026-06-26
author: Tuan Nguyen
# image: /og/hello-technical.png
---

This is the first post in my **Technical space** — write-ups on architecture,
debugging stories, and things I learn building software.

## Code blocks get syntax highlighting (Shiki, built in)

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("world"))
```

## How to add a new technical post

Create a Markdown file in `src/content/technical/` with front matter:

```yaml
---
title: "My technical post"
description: "A one-line summary used as the SEO meta description."
date: 2026-07-01
---
```

It appears automatically on the [Technical space](/technical/) page.
