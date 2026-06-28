// Central site metadata — used across layouts, SEO tags and feeds.
export const SITE = {
  title: 'Tuan Nguyen',
  tagline: 'Product & Technical writing',
  description:
    'Technical and product writing by Tuan Nguyen, a software engineer.',
  author: 'Tuan Nguyen',
  email: 'vantuan130393@gmail.com',
};

// Social profiles — shown on the About page and emitted as JSON-LD `sameAs`.
export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vtuanjs' },
  { label: 'GitHub', href: 'https://github.com/vtuanjs' },
];

// Order of the spaces, used for nav, the home page, and route generation.
export const SPACE_IDS = ['product', 'technical', 'ai'] as const;
export type SpaceId = (typeof SPACE_IDS)[number];

// Per-space config, keyed by collection name. Each space carries its English
// and Vietnamese copy side by side; the English `path` is the base — the
// Vietnamese path is derived by prefixing `/vi` (see `spaceMeta` in lib/i18n).
export const SPACES = {
  product: {
    path: '/product/',
    en: {
      label: 'Product',
      name: 'Product space',
      blurb: 'Notes on product thinking, discovery, and building things people use.',
    },
    vi: {
      label: 'Sản phẩm',
      name: 'Không gian sản phẩm',
      blurb: 'Ghi chép về tư duy sản phẩm, quá trình khám phá, và việc xây dựng những thứ mọi người thực sự dùng.',
    },
  },
  technical: {
    path: '/technical/',
    en: {
      label: 'Technical',
      name: 'Technical space',
      blurb: 'Engineering write-ups, architecture, and lessons from the code.',
    },
    vi: {
      label: 'Kỹ thuật',
      name: 'Không gian kỹ thuật',
      blurb: 'Các bài viết kỹ thuật, kiến trúc hệ thống, và những bài học rút ra từ code.',
    },
  },
  ai: {
    path: '/ai/',
    en: {
      label: 'AI',
      name: 'AI space',
      blurb: "How I actually use AI in my work — real workflows, what worked, what didn't, and the judgment behind it.",
    },
    vi: {
      label: 'AI',
      name: 'Không gian AI',
      blurb: 'Cách tôi thực sự dùng AI trong công việc — quy trình thật, cái gì hiệu quả, cái gì không, và sự phán đoán đằng sau nó.',
    },
  },
} as const;
