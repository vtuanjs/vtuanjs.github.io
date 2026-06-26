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
  { href: '/about/', label: 'About me' },
  { href: '/product/', label: 'Product' },
  { href: '/technical/', label: 'Technical' },
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
} as const;
