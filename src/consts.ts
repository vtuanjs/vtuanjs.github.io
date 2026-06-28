// Central site metadata — used across layouts, SEO tags and feeds.
export const SITE = {
  title: 'Tuan Nguyen',
  tagline: 'Product & Technical writing',
  description:
    'Technical and product writing by Tuan Nguyen, a software engineer.',
  author: 'Tuan Nguyen',
  email: 'vantuan130393@gmail.com',
};

export const NAV = [
  { href: '/product/', label: 'Product' },
  { href: '/technical/', label: 'Technical' },
  { href: '/ai/', label: 'AI' },
];

// Social profiles — shown on the About page and emitted as JSON-LD `sameAs`.
export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vtuanjs' },
  { label: 'GitHub', href: 'https://github.com/vtuanjs' },
];

// Per-space display config, keyed by collection name.
export const SPACES = {
  product: {
    name: 'Product space',
    blurb: 'Notes on product thinking, discovery, and building things people use.',
    path: '/product/',
  },
  technical: {
    name: 'Technical space',
    blurb: 'Engineering write-ups, architecture, and lessons from the code.',
    path: '/technical/',
  },
  ai: {
    name: 'AI space',
    blurb: 'How I actually use AI in my work — real workflows, what worked, what didn\'t, and the judgment behind it.',
    path: '/ai/',
  },
} as const;
