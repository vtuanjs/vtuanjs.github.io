// Everything language-related lives here: detection, path helpers, localized
// space metadata, date formatting, and the UI string dictionary.
import { SITE, SPACE_IDS, SPACES, type SpaceId } from '../consts';

export type Lang = 'en' | 'vi';

// The Vietnamese site lives under /vi; everything else is English.
export function langFromPath(path: string): Lang {
  return path === '/vi' || path.startsWith('/vi/') ? 'vi' : 'en';
}

// Vietnamese post ids carry a leading "vi/" segment (the folder they live in).
// Strip it so URLs read /vi/<space>/<slug>/ rather than /vi/<space>/vi/<slug>/.
export function stripVi(id: string): string {
  return id.replace(/^vi\//, '');
}

// Localized name/label/blurb plus the language-correct base path for a space.
export function spaceMeta(id: SpaceId, lang: Lang) {
  const space = SPACES[id];
  return {
    ...space[lang],
    path: lang === 'vi' ? `/vi${space.path}` : space.path,
  };
}

// Header navigation, localized.
export function navItems(lang: Lang) {
  return SPACE_IDS.map((id) => ({
    href: spaceMeta(id, lang).path,
    label: SPACES[id][lang].label,
  }));
}

// Locale-aware date formatting shared by lists, post meta, and the home page.
export function formatDate(date: Date, lang: Lang, month: 'short' | 'long' = 'long') {
  return date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month,
    day: 'numeric',
  });
}

// UI strings, keyed by language. Anything user-facing that isn't post content
// or space config belongs here so the two languages stay in sync.
export const UI = {
  en: {
    footerBuilt: 'Built with',
    confirmSwitch: 'This page is not available in Vietnamese yet. Go to the Vietnamese section instead?',
    cancel: 'Cancel',
    ok: 'Continue',
    search: 'Search',
    searchPlaceholder: 'Search posts…',
    searchNoResults: 'No results.',
    searchResultsFor: (q: string) => `Results for "${q}"`,
    taggedWith: (tag: string) => `Tagged: ${tag}`,
    home: {
      description: SITE.description,
      langNoteHtml: 'This blog is available in English and Tiếng Việt. Use the <strong>EN / VI</strong> switch in the menu at the top of the page to change language at any time.',
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
  },
  vi: {
    footerBuilt: 'Xây dựng bằng',
    confirmSwitch: 'Trang này chưa có bản tiếng Anh. Chuyển tới mục tiếng Anh tương ứng?',
    cancel: 'Hủy',
    ok: 'Tiếp tục',
    search: 'Tìm kiếm',
    searchPlaceholder: 'Tìm bài viết…',
    searchNoResults: 'Không có kết quả.',
    searchResultsFor: (q: string) => `Kết quả cho "${q}"`,
    taggedWith: (tag: string) => `Nhãn: ${tag}`,
    home: {
      description: 'Bài viết kỹ thuật và sản phẩm của Tuan Nguyen, một kỹ sư phần mềm.',
      langNoteHtml: 'This blog is available in English and Tiếng Việt. Use the <strong>EN / VI</strong> switch in the menu at the top of the page to change language at any time.',
      greeting: 'Xin chào, tôi là Tuan',
      lead: [
        'Tôi là một kỹ sư phần mềm, thích biến những bài toán mơ hồ thành các hệ thống dễ suy luận. Tôi quan tâm đến kiến trúc sạch, những đánh đổi thực dụng, và việc tạo ra những sản phẩm thực sự giúp ích cho người dùng.',
        'Blog này là nơi tôi suy nghĩ thành lời — một nửa về cách các sản phẩm được xây dựng và vì sao, một nửa về những chi tiết kỹ thuật khiến chúng vận hành.',
      ],
      latestFrom: 'Mới nhất từ',
    },
    about: {
      title: 'Giới thiệu',
      description: 'Tuan Nguyen là ai, tôi làm gì, và cách liên hệ.',
      introHtml: 'Xin chào, tôi là <strong>Tuan Nguyen</strong>. Tôi viết ở đây theo hai mảng:',
      flavours: [
        '<strong>Không gian sản phẩm</strong> — cách tôi nghĩ về sản phẩm, quá trình khám phá, và việc đưa sản phẩm ra thị trường.',
        '<strong>Không gian kỹ thuật</strong> — đào sâu kỹ thuật và những gì tôi học được khi xây dựng phần mềm.',
      ],
      whatIDo: 'Tôi làm gì',
      getInTouch: 'Liên hệ',
    },
  },
} as const;
