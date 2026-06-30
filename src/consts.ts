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
export const SPACE_IDS = ['product', 'technical', 'management'] as const;
export type SpaceId = (typeof SPACE_IDS)[number];

// Per-space config, keyed by collection name.
export const SPACES = {
  product: {
    path: '/product/',
    label: 'Product',
    name: 'Product space',
    blurb: 'Notes on product thinking, discovery, and building things people use.',
  },
  technical: {
    path: '/technical/',
    label: 'Technical',
    name: 'Technical space',
    blurb: 'Engineering write-ups, architecture, and lessons from the code.',
  },
  management: {
    path: '/management/',
    label: 'Management',
    name: 'Management space',
    blurb: 'Engineering leadership, team decisions, and org design — the layer above the code.',
  },
} as const;
