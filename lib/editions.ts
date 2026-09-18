/**
 * Edition layer.
 *
 * The Brand Hub ships in editions. Every edition renders the exact same
 * sections, layout, navigation, and AT Sports brand standards — only the
 * partner-facing identity strings differ. Adding an edition must never
 * require touching a section's markup.
 *
 * `PUBLIC_EDITION` is the simplified, public-facing edition served at `/`.
 * `PARTNER_EDITION` is the general partner edition served at `/partner`.
 * `COURTINA_EDITION` is the Japan distributor edition served at `/courtina`.
 *
 * Editions differ only in which sections render (via `sections`), the depth of
 * content shown (via `audience`), and their partner-facing strings. All brand
 * content stays shared in `lib/brand.ts` and `lib/assets.ts` so a single update
 * propagates to every edition. Partner editions are password protected; the
 * public edition is open.
 */

export type Locale = 'en' | 'ja'

/**
 * A string with an optional Japanese counterpart.
 *
 * No `ja` values exist in the codebase at the moment — the previous partial
 * translations were removed pending a full set of approved copy. Every string
 * therefore renders English only. The slot is kept so that arriving
 * translations are a data change rather than a markup change.
 *
 * Note that the incoming requirement is a *toggle* (show one language at a
 * time) rather than the stacked English-over-Japanese treatment the current
 * `bilingual` flag describes, so that flag is likely to be replaced by a
 * language selector when the translated copy lands.
 */
export type LocalizedText = {
  en: string
  ja?: string
}

/** A paragraph in the hero lead. `emphasis` renders it in the heavy weight. */
export type LeadParagraph = {
  text: LocalizedText
  emphasis?: boolean
}

/** Anchor ids of the Brand Hub sections, in render order. */
export type SectionId =
  | 'hero'
  | 'welcome'
  | 'foundation'
  | 'kits'
  | 'logo'
  | 'color'
  | 'typography'
  | 'cobranding'
  | 'photography'
  | 'assets'
  | 'faq'

/** Every section — the full partner experience. */
export const ALL_SECTIONS: SectionId[] = [
  'hero',
  'welcome',
  'foundation',
  'kits',
  'logo',
  'color',
  'typography',
  'cobranding',
  'photography',
  'assets',
  'faq',
]

/**
 * The simplified public experience. Partner-only sections — the partner "Start
 * Here" welcome and "Co-Branding & Partner Use" — are omitted. Shared sections
 * that render for the public are additionally trimmed in-place by `audience`.
 */
export const PUBLIC_SECTIONS: SectionId[] = [
  'hero',
  'foundation',
  'kits',
  'logo',
  'color',
  'typography',
  'assets',
  'faq',
]

export type Edition = {
  /** URL segment for the edition. `null` for the edition served at the root. */
  slug: string | null
  /** The distributor or partner this edition is built for. */
  partnerName: string
  /** Render Japanese alongside English wherever a `ja` string exists. */
  bilingual: boolean
  /** `lang` attribute applied to the secondary text nodes. */
  secondaryLocale: Locale

  /**
   * Audience the edition targets. `'public'` renders the simplified,
   * public-facing hub; `'partner'` renders the full partner experience.
   * Shared sections read this to trim partner-only content in place.
   */
  audience: 'partner' | 'public'
  /**
   * Name of the environment variable holding this edition's access password.
   * Protected editions set it; the public edition omits it. The value is read
   * server-side only and is never shipped to the client. Each edition can use
   * its own variable so future partner editions get separate credentials.
   */
  passwordEnvVar?: string
  /** Ordered allow-list of sections this edition renders. */
  sections: SectionId[]
  /**
   * Per-edition navigation label overrides. Only the sections listed here are
   * renamed for this edition; every other section keeps its shared label from
   * `NAV_ITEMS`. Used so the public hub can present friendlier, audience-fit
   * names without touching the partner editions.
   */
  navLabels?: Partial<Record<SectionId, string>>

  /** Pill above the hero headline. */
  heroEyebrow: LocalizedText
  /** Main hero headline — the hub name itself. */
  heroTitle: LocalizedText
  /** Sub-headline directly under the hero title, e.g. the edition name. */
  heroSubtitle: LocalizedText
  /** Hero body copy. */
  heroLead: LeadParagraph[]

  /** Opening paragraph of the Welcome section. */
  welcomeIntro: LocalizedText

  /** Small note pinned to the bottom of the desktop sidebar. */
  sidebarNote: LocalizedText

  /** Footer description line under the logo. */
  footerNote: LocalizedText

  /** Document metadata for the edition's route. */
  meta: {
    title: string
    description: string
  }
}

/* -------------------------------------------------------------------------- */
/* Partner Edition — served at `/`                                            */
/* -------------------------------------------------------------------------- */

export const PARTNER_EDITION: Edition = {
  slug: 'partner',
  partnerName: 'Partner',
  audience: 'partner',
  passwordEnvVar: 'PARTNER_ACCESS_PASSWORD',
  sections: ALL_SECTIONS,
  bilingual: false,
  secondaryLocale: 'ja',

  heroEyebrow: { en: 'Official Brand Portal' },
  heroTitle: { en: 'AT Sports Brand Hub' },
  heroSubtitle: { en: 'Partner Edition' },
  heroLead: [
    {
      emphasis: true,
      text: {
        en: 'AT Sports is a manufacturer of professional sports surfacing systems trusted by contractors, distributors, and facilities around the world.',
      },
    },
    {
      text: {
        en: 'This Brand Hub provides the approved tools, messaging, and assets needed to represent the company and every AT Sports product line accurately and consistently.',
      },
    },
  ],

  welcomeIntro: {
    en: 'This Brand Hub is the single source of truth for the AT Sports brand. Every logo, product description, color, marketing asset, and positioning statement has been approved by the AT Sports Marketing Department to ensure a consistent experience across every market.',
  },

  sidebarNote: { en: 'Partner Edition. Always work from the live version.' },

  footerNote: {
    en: 'AT Sports Brand Hub — Partner Edition. Maintained by AT Sports Marketing Department and updated as the brand evolves — always work from the live version.',
  },

  meta: {
    title: 'AT Sports Brand Hub — Partner Edition',
    description:
      'Everything partners need to represent AT Sports and our product lines correctly.',
  },
}

/* -------------------------------------------------------------------------- */
/* Courtina Edition — served at `/courtina`                                   */
/* -------------------------------------------------------------------------- */

export const COURTINA_EDITION: Edition = {
  slug: 'courtina',
  partnerName: 'Courtina',
  audience: 'partner',
  passwordEnvVar: 'COURTINA_ACCESS_PASSWORD',
  sections: ALL_SECTIONS,
  // No Japanese copy is in the codebase right now, so this stays false and the
  // edition renders English only. See the `bilingual` note on `Edition`.
  bilingual: false,
  secondaryLocale: 'ja',

  heroEyebrow: { en: 'Official Brand Portal' },
  heroTitle: { en: 'AT Sports Brand Hub' },
  heroSubtitle: { en: 'Courtina Edition — Japan' },
  heroLead: [
    {
      emphasis: true,
      text: {
        en: 'AT Sports is a manufacturer of professional sports surfacing systems trusted by contractors, distributors, and facilities around the world.',
      },
    },
    {
      text: {
        en: 'This edition is maintained for Courtina, the authorized AT Sports distributor in Japan. It provides the approved tools, messaging, and assets needed to represent the company and every AT Sports product line accurately and consistently in the Japanese market.',
      },
    },
  ],

  welcomeIntro: {
    en: 'This Brand Hub is the single source of truth for the AT Sports brand in Japan. Every logo, product description, color, marketing asset, and positioning statement has been approved by the AT Sports Marketing Department to ensure a consistent experience across every market.',
  },

  sidebarNote: {
    en: 'Courtina Edition. Always work from the live version.',
  },

  footerNote: {
    en: 'AT Sports Brand Hub — Courtina Edition, Japan.\nMaintained by AT Sports Marketing Department and updated as the brand evolves — always work from the live version.',
  },

  meta: {
    title: 'AT Sports Brand Hub — Courtina Edition (Japan)',
    description:
      'Approved AT Sports brand tools, messaging, and assets for Courtina, the authorized AT Sports distributor in Japan.',
  },
}

/* -------------------------------------------------------------------------- */
/* Public Edition — served at `/`                                             */
/* -------------------------------------------------------------------------- */

export const PUBLIC_EDITION: Edition = {
  slug: null,
  partnerName: 'Public',
  audience: 'public',
  // No password: this is the default, open, public-facing hub.
  sections: PUBLIC_SECTIONS,
  // Public-facing names. Partner editions keep the shared NAV_ITEMS labels.
  navLabels: {
    foundation: 'About AT Sports',
    kits: 'Product Brands',
  },
  bilingual: false,
  secondaryLocale: 'ja',

  heroEyebrow: { en: 'Official Brand Portal' },
  heroTitle: { en: 'AT Sports Brand Hub' },
  heroSubtitle: { en: 'Overview' },
  heroLead: [
    {
      emphasis: true,
      text: {
        en: 'AT Sports is a manufacturer of professional sports surfacing systems trusted by contractors, distributors, and facilities around the world.',
      },
    },
    {
      text: {
        en: 'This Brand Hub introduces the AT Sports company and product lines, with the logos, colors, typography, and photography that define the brand.',
      },
    },
  ],

  welcomeIntro: {
    en: 'This Brand Hub is the single source of truth for the AT Sports brand — every logo, color, and product description has been approved by the AT Sports Marketing Department.',
  },

  sidebarNote: { en: 'AT Sports Brand Hub. Always work from the live version.' },

  footerNote: {
    en: 'AT Sports Brand Hub. Maintained by the AT Sports Marketing Department and updated as the brand evolves — always work from the live version.',
  },

  meta: {
    title: 'AT Sports Brand Hub',
    description:
      'The AT Sports brand at a glance — company overview, product lines, logos, colors, typography, and brand resources.',
  },
}

export const EDITIONS = {
  public: PUBLIC_EDITION,
  partner: PARTNER_EDITION,
  courtina: COURTINA_EDITION,
} satisfies Record<string, Edition>
