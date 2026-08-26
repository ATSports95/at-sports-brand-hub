/**
 * Edition layer.
 *
 * The Brand Hub ships in editions. Every edition renders the exact same
 * sections, layout, navigation, and AT Sports brand standards — only the
 * partner-facing identity strings differ. Adding an edition must never
 * require touching a section's markup.
 *
 * `PARTNER_EDITION` is the generic edition served at `/`.
 * `COURTINA_EDITION` is the Japan distributor edition served at `/courtina`.
 */

export type Locale = 'en' | 'ja'

/**
 * A string with an optional Japanese counterpart. When an edition is
 * `bilingual` and `ja` is present, both are rendered — English leads,
 * Japanese sits beneath it in a muted tone.
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

export type Edition = {
  /** URL segment for the edition. `null` for the edition served at the root. */
  slug: string | null
  /** The distributor or partner this edition is built for. */
  partnerName: string
  /** Render Japanese alongside English wherever a `ja` string exists. */
  bilingual: boolean
  /** `lang` attribute applied to the secondary text nodes. */
  secondaryLocale: Locale

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
  slug: null,
  partnerName: 'Partner',
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
  bilingual: true,
  secondaryLocale: 'ja',

  heroEyebrow: {
    en: 'Official Brand Portal',
    ja: '公式ブランドポータル',
  },
  heroTitle: {
    en: 'AT Sports Brand Hub',
    ja: 'AT Sports ブランドハブ',
  },
  heroSubtitle: {
    en: 'Courtina Edition — Japan',
    ja: 'コルティーナ版 — 日本',
  },
  heroLead: [
    {
      emphasis: true,
      text: {
        en: 'AT Sports is a manufacturer of professional sports surfacing systems trusted by contractors, distributors, and facilities around the world.',
        ja: 'AT Sports は、世界中の施工業者・販売代理店・施設から信頼される、プロフェッショナル向けスポーツ表面システムのメーカーです。',
      },
    },
    {
      text: {
        en: 'This edition is maintained for Courtina, the authorized AT Sports distributor in Japan. It provides the approved tools, messaging, and assets needed to represent the company and every AT Sports product line accurately and consistently in the Japanese market.',
        ja: '本エディションは、日本における AT Sports 正規販売代理店であるコルティーナ向けに管理されています。日本市場において、当社および AT Sports の各製品ラインを正確かつ一貫して表現するために承認されたツール、メッセージ、アセットを提供します。',
      },
    },
  ],

  welcomeIntro: {
    en: 'This Brand Hub is the single source of truth for the AT Sports brand in Japan. Every logo, product description, color, marketing asset, and positioning statement has been approved by the AT Sports Marketing Department to ensure a consistent experience across every market.',
    ja: '本ブランドハブは、日本における AT Sports ブランドの唯一の正式な情報源です。すべてのロゴ、製品説明、カラー、マーケティングアセット、ポジショニングステートメントは、AT Sports マーケティング部門の承認を受けており、あらゆる市場で一貫した体験を確保します。',
  },

  sidebarNote: {
    en: 'Courtina Edition. Always work from the live version.',
    ja: 'コルティーナ版。常に最新版をご参照ください。',
  },

  footerNote: {
    en: 'AT Sports Brand Hub — Courtina Edition, Japan. Maintained by AT Sports Marketing Department and updated as the brand evolves — always work from the live version.',
    ja: 'AT Sports ブランドハブ — コルティーナ版（日本）。AT Sports マーケティング部門が管理し、ブランドの進化に合わせて更新されます。常に最新版をご参照ください。',
  },

  meta: {
    title: 'AT Sports Brand Hub — Courtina Edition (Japan)',
    description:
      'Approved AT Sports brand tools, messaging, and assets for Courtina, the authorized AT Sports distributor in Japan.',
  },
}

export const EDITIONS = {
  partner: PARTNER_EDITION,
  courtina: COURTINA_EDITION,
} satisfies Record<string, Edition>
