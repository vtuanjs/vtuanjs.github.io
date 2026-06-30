// Site-wide helpers: space metadata, date formatting, and the UI string
// dictionary. The site is English-only.
import { SITE, SPACE_IDS, SPACES, type SpaceId } from '../consts';

// Name/label/blurb plus the base path for a space.
export function spaceMeta(id: SpaceId) {
  return SPACES[id];
}

// Header navigation.
export function navItems() {
  return SPACE_IDS.map((id) => ({ href: SPACES[id].path, label: SPACES[id].label }));
}

// Date formatting shared by lists, post meta, and the home page.
export function formatDate(date: Date, month: 'short' | 'long' = 'long') {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month,
    day: 'numeric',
  });
}

// UI strings. Anything user-facing that isn't post content or space config
// belongs here.
export const UI = {
  footerBuilt: 'Built with',
  search: 'Search',
  searchPlaceholder: 'Search posts…',
  searchNoResults: 'No results.',
  prevPost: 'Previous',
  nextPost: 'Next',
  home: {
    description: SITE.description,
    greeting: "Hi, I'm Tuan",
    lead: [
      "I'm a software engineer who enjoys turning fuzzy problems into systems that are simple to reason about. I care about clean architecture, pragmatic trade-offs, and shipping things that actually help the people using them.",
      'This blog is where I think out loud — half about how products get built and why, half about the engineering details that make them work.',
    ],
    latestFrom: 'Latest from',
  },
  about: {
    title: 'About me',
    description: 'Who Tuan Nguyen is, what I work on, and how to get in touch.',
    introHtml: "Hi, I'm <strong>Tuan Nguyen</strong>. I write here in two flavours:",
    flavours: [
      '<strong>Product space</strong> — how I think about products, discovery, and shipping.',
      '<strong>Technical space</strong> — engineering deep-dives and what I learn building software.',
    ],
    whatIDo: 'What I do',
    getInTouch: 'Get in touch',
  },
} as const;
