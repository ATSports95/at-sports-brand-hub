/**
 * Static brand data for the AT Sports Brand Hub.
 * Logo SVGs live in /public/logos/ and are referenced by path.
 */

export const LOGO_BASE = '/logos'

export type ColorToken = {
  name: string
  hex: string
  /** tailwind class used to fill the swatch block */
  swatchClass: string
  /** true when the swatch needs light text for contrast */
  reversedText?: boolean
  group: 'primary' | 'secondary'
}

export const BRAND_COLORS: ColorToken[] = [
  {
    name: 'Navy',
    hex: '#233354',
    swatchClass: 'bg-navy',
    reversedText: true,
    group: 'primary',
  },
  {
    name: 'Red',
    hex: '#9A1B1E',
    swatchClass: 'bg-red',
    reversedText: true,
    group: 'primary',
  },
  {
    name: 'Sky',
    hex: '#4E8CB3',
    swatchClass: 'bg-sky',
    reversedText: true,
    group: 'secondary',
  },
  {
    name: 'Steel',
    hex: '#B9C4CB',
    swatchClass: 'bg-steel',
    group: 'secondary',
  },
  {
    name: 'Slate',
    hex: '#5D6F7A',
    swatchClass: 'bg-slate',
    reversedText: true,
    group: 'secondary',
  },
  {
    name: 'Near-Black',
    hex: '#202528',
    swatchClass: 'bg-ink',
    reversedText: true,
    group: 'secondary',
  },
]

export type ProductLine = {
  id: 'acrytech' | 'cushionx' | 'faultline' | 'rollx'
  name: string
  descriptor: string
  whatFor: string
}

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'acrytech',
    name: 'Acrytech',
    descriptor: 'The Coatings System',
    whatFor:
      'A complete line of acrylic coatings and surface-preparation products engineered for consistent application, reliable playability, and long-term court performance.',
  },
  {
    id: 'cushionx',
    name: 'CushionX',
    descriptor: 'The Cushion System',
    whatFor:
      'A family of cushioned sports surfacing systems designed to improve player comfort and provide solutions for new construction and court renovation.',
  },
  {
    id: 'faultline',
    name: 'Faultline',
    descriptor: 'The Crack Repair System',
    whatFor:
      'Engineered crack-repair solutions designed to simplify installation, reduce repair profile, and support smoother finished surfaces.',
  },
  {
    id: 'rollx',
    name: 'RollX',
    descriptor: 'The Portable Court System',
    whatFor:
      'A portable pickleball playing surface designed to create consistent courts in qualified indoor venues without permanent construction.',
  },
]

export type NavItem = { id: string; label: string }

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'welcome', label: 'Start Here' },
  { id: 'foundation', label: 'Brand Foundation' },
  { id: 'kits', label: 'Product Brand Kits' },
  { id: 'logo', label: 'Logo & Identity' },
  { id: 'color', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'cobranding', label: 'Co-Branding & Partner Use' },
  { id: 'photography', label: 'Photography' },
  { id: 'assets', label: 'Asset Library' },
  { id: 'faq', label: 'FAQ' },
]

/**
 * Full per-product brand kits.
 * Acrytech and CushionX content is taken from the official AT Sports Product
 * Brand Kit PDFs. Faultline and RollX follow the same structure with approved
 * positioning written in the AT Sports voice.
 */
export type ProductKit = {
  id: 'acrytech' | 'cushionx' | 'faultline' | 'rollx'
  name: string
  descriptor: string
  tagline: string
  accentClass: string
  overview: string[]
  positioning: { title: string; body: string }[]
  marketingCopy: string[]
  systems?: { label: string; name: string; body: string }[]
  systemsTitle?: string
  logoGuidelines: string[]
}

export const PRODUCT_KITS: ProductKit[] = [
  {
    id: 'acrytech',
    name: 'Acrytech',
    descriptor: 'The Coatings System',
    tagline: 'The complete acrylic surfacing system from one manufacturer.',
    accentClass: 'bg-navy',
    overview: [
      'Acrytech is the foundation of the AT Sports product portfolio\u2014a complete acrylic sports surfacing system engineered for long-term performance, consistent installation, and dependable results.',
      'Manufactured by AT Sports, the Acrytech product line includes everything contractors need to prepare, resurface, repair, texture, and finish professional-quality courts. Every product is designed to work together as part of a complete system, helping contractors deliver consistent outcomes from the first coat to the final color.',
      'Whether building new courts or restoring existing surfaces, Acrytech provides the reliability, performance, and technical support professionals depend on.',
    ],
    positioning: [
      {
        title: 'Acrylic Surfacing System',
        body: 'Manufactured by AT Sports, Acrytech provides everything needed to prepare, repair, resurface, texture, and finish professional sports surfaces.',
      },
      {
        title: 'Designed for Professional Installation',
        body: 'Formulated to support dependable mixing, application, texture, color, and finish quality across every stage of the surfacing process.',
      },
      {
        title: 'Engineered for Long-Term Durability',
        body: 'Formulated to withstand heavy play, changing climates, and demanding environments while maintaining color and performance.',
      },
      {
        title: 'Manufacturing You Can Trust',
        body: 'Manufactured in-house with advanced acrylic technology for consistent quality and dependable product performance.',
      },
      {
        title: 'Proven at the Professional Level',
        body: 'As the Official Surface of the Professional Pickleball Association and Major League Pickleball., Acrytech delivers the consistency demanded by professional competition.',
      },
    ],
    marketingCopy: [
      "Acrytech is AT Sports' complete acrylic sports surfacing system, engineered to help contractors build professional-quality courts with confidence. From surface preparation to the final color coat, every product is manufactured to work together for consistent installation, long-term durability, and dependable performance.",
      'We install Acrytech sports surfacing systems because they provide reliable installation, consistent application, and professional-grade performance. Manufactured by AT Sports, Acrytech products are engineered to work together as one complete system.',
      'Acrytech delivers professional sports surfaces designed for consistent playability, long-term durability, and dependable performance. Trusted by facilities around the world, every system is engineered to perform season after season.',
      'Manufactured with advanced acrylic technology, Acrytech systems are engineered for adhesion, durability, color stability, and consistent application across tennis, pickleball, basketball, and multi-sport courts.',
    ],
    logoGuidelines: [
      'Use only official Acrytech logos provided by AT Sports.',
      'When appropriate, reference Acrytech as \u201cA Division of AT Sports.\u201d',
      'Avoid combining the logo with other graphics.',
      'Avoid creating alternate versions of the logo.',
    ],
  },
  {
    id: 'cushionx',
    name: 'CushionX',
    descriptor: 'The Cushion System',
    tagline: 'Engineered comfort. Designed for performance. Built to simplify installation.',
    accentClass: 'bg-sky',
    overview: [
      "CushionX is AT Sports' family of cushioned court systems engineered to improve player comfort while simplifying installation for contractors.",
      'From traditional cushioned systems to innovative overlay solutions like CushionX Extreme, every system is designed to help facilities extend court life, reduce downtime, and deliver a premium playing experience.',
      'Manufactured as part of the complete AT Sports surfacing ecosystem, CushionX integrates seamlessly with Acrytech coatings to create professional-grade courts built for long-term performance.',
    ],
    positioning: [
      {
        title: 'Engineered Player Comfort',
        body: 'Designed to improve comfort while maintaining consistent playability.',
      },
      {
        title: 'Faster Court Renovation',
        body: 'Innovative overlay systems reduce demolition, downtime, and project disruption.',
      },
      {
        title: 'Complete Cushion Solutions',
        body: 'From traditional cushioned systems to CushionX Extreme overlays, every solution is engineered to integrate with AT Sports surfacing systems.',
      },
      {
        title: 'Built for Modern Facilities',
        body: 'Ideal for facilities seeking premium comfort while maximizing court life.',
      },
      {
        title: 'Manufactured for Performance',
        body: 'Every CushionX system is engineered to simplify installation without compromising quality.',
      },
    ],
    marketingCopy: [
      "CushionX is AT Sports' family of cushioned court systems designed to improve player comfort while helping contractors simplify installation. Whether building new courts or renovating existing facilities, CushionX delivers premium performance with less disruption.",
      "CushionX Extreme gives facilities a faster way to renovate damaged courts without full reconstruction. Engineered to reduce downtime while improving player comfort, it's an innovative solution built for today's courts.",
      'Manufactured by AT Sports, CushionX systems integrate seamlessly with Acrytech coatings to create complete court systems engineered for comfort, durability, and long-term performance.',
      'From premium cushioned systems to innovative overlays, CushionX helps contractors deliver exceptional playing experiences while reducing installation complexity.',
    ],
    systemsTitle: 'CushionX Composition Levels',
    systems: [
      {
        label: 'Level 1',
        name: 'Residential Usage Only',
        body: 'Ideal for homes and light-use courts, Level 1 includes a 4mm, 6mm, or 8mm cushion mat with three layers of flexible coatings offering durability and comfort for recreational play.',
      },
      {
        label: 'Level 2',
        name: 'Light & Moderate Commercial',
        body: 'Crafted for superior resilience, Level 2 enhances the capabilities of Level 1 by incorporating an extra reinforced membrane layer to meet the demands of commercial environments.',
      },
      {
        label: 'Level 3',
        name: 'High-Use Commercial & Tournament',
        body: 'Designed for top-tier performance, Level 3 enhances Level 2 with three layers of urethane flex coatings. This construction withstands heavy use while offering exceptional impact absorption and comfort.',
      },
    ],
    logoGuidelines: [
      'Use only official CushionX logos provided by AT Sports.',
      'When appropriate, reference CushionX as \u201cA Division of AT Sports.\u201d',
      'Avoid combining the logo with other graphics.',
      'Avoid creating alternate versions of the logo.',
    ],
  },
  {
    id: 'faultline',
    name: 'Faultline',
    descriptor: 'The Crack Repair System',
    tagline: 'Smarter crack repair. Faster installation. Better results.',
    accentClass: 'bg-red',
    overview: [
      "Faultline is AT Sports' engineered crack repair system designed to help contractors repair damaged courts faster, more efficiently, and with greater confidence.",
      'Developed to reduce installation time while producing a lower-profile repair, Faultline simplifies one of the most challenging parts of court resurfacing. Every component is engineered to work within the complete AT Sports surfacing system, creating reliable repairs that support long-term court performance.',
      'When repairs are required, Faultline helps contractors spend less time fighting cracks and more time delivering exceptional courts.',
    ],
    positioning: [
      {
        title: 'Smarter Crack Repair',
        body: 'Engineered to simplify one of the most challenging parts of court resurfacing.',
      },
      {
        title: 'Faster Installation',
        body: 'Designed to reduce installation time while maintaining reliable repair performance.',
      },
      {
        title: 'Lower Profile Results',
        body: 'Produces smoother repairs that blend more effectively beneath finished court systems.',
      },
      {
        title: 'Integrated System Design',
        body: 'Engineered to work seamlessly within the complete AT Sports surfacing system.',
      },
      {
        title: 'Built for Contractors',
        body: 'Developed to improve productivity without sacrificing long-term performance.',
      },
    ],
    marketingCopy: [
      "Faultline is AT Sports' engineered crack repair system designed to help contractors repair courts faster while producing smoother, longer-lasting results.",
      'Built to simplify crack repair, Faultline reduces installation complexity while delivering dependable performance beneath professional sports surfaces.',
      'Every Faultline repair system is engineered to integrate with AT Sports surfacing products, creating complete court systems built for long-term reliability.',
      'From isolated repairs to full court renovations, Faultline helps contractors spend less time repairing cracks and more time completing successful projects.',
    ],
    systemsTitle: 'The Faultline Product Line',
    systems: [
      {
        label: 'Kit',
        name: 'Faultline Crack Repair Kit',
        body: 'A patent-pending, fully adhered system combining reinforced Polyfiber\u2122 membrane and advanced Faultline tape. At just 1.1mm completed thickness, it reduces reflective cracking while preserving smooth surface transitions and consistent ball response.',
      },
      {
        label: 'Reinforcement',
        name: 'Flexible Reinforcement Systems',
        body: 'Advanced reinforcement systems designed to move naturally with the court surface, reducing future cracking and surface stress while blending seamlessly with resurfacer and color coatings.',
      },
      {
        label: 'Restoration',
        name: 'Full-Court Restoration Products',
        body: 'Professional-grade surface repair products and flexible adhesive technologies engineered for efficient, consistent results across both localized repairs and full-court restoration projects.',
      },
    ],
    logoGuidelines: [
      'Use only official Faultline logos provided by AT Sports.',
      'When appropriate, reference Faultline as \u201cA Division of AT Sports.\u201d',
      'Avoid combining the logo with other graphics.',
      'Avoid creating alternate versions of the logo.',
    ],
  },
  {
    id: 'rollx',
    name: 'RollX',
    descriptor: 'The Portable Court System',
    tagline: 'Professional pickleball\u2014wherever the game goes.',
    accentClass: 'bg-slate',
    overview: [
      "RollX gives facilities, event organizers, clubs, and contractors the flexibility to create professional-quality pickleball courts wherever the game is played.",
      "Unlike permanent court construction, RollX provides a portable playing surface that installs quickly, delivers consistent ball response, and allows courts to be deployed when and where they're needed.",
      "Manufactured by AT Sports, RollX expands the company's commitment to complete court solutions beyond permanent installations, helping partners create new opportunities for play without permanent infrastructure.",
    ],
    positioning: [
      {
        title: 'Professional Play Anywhere',
        body: 'Transforms existing spaces into tournament-quality pickleball courts.',
      },
      {
        title: 'Portable Without Compromise',
        body: 'Consistent ball response and dependable performance in a portable format.',
      },
      {
        title: 'Flexible Facility Solutions',
        body: 'Ideal for clubs, schools, recreation centers, and special events.',
      },
      {
        title: 'Expand Court Capacity',
        body: 'Create additional courts without permanent construction.',
      },
      {
        title: 'Manufactured by AT Sports',
        body: 'Built with the same commitment to quality found throughout the AT Sports product portfolio.',
      },
    ],
    marketingCopy: [
      "RollX is AT Sports' portable pickleball court system designed to create professional-quality playing surfaces wherever the game is played.",
      'Whether for tournaments, events, clubs, or multi-purpose facilities, RollX delivers consistent playability while giving facilities unmatched flexibility.',
      'RollX helps facilities maximize existing space by creating temporary courts that perform like permanent installations.',
      'Manufactured by AT Sports, RollX expands the possibilities for pickleball by bringing professional court performance to virtually any venue.',
    ],
    systemsTitle: 'RollX Key Features',
    systems: [
      {
        label: 'Surface',
        name: 'Reinforced Membrane Overlay',
        body: 'A ready-to-play prefabricated surface built from a proprietary reinforced membrane, engineered for exceptional durability and dependable ball response over concrete, asphalt, or any level surface.',
      },
      {
        label: 'Custom',
        name: 'Personalized Branding',
        body: 'A fully personalized sport surface featuring your choice of colors and logo(s) to meet your branding needs for events, sponsors, and venues.',
      },
      {
        label: 'Deploy',
        name: 'Roll-Out Install & Removal',
        body: 'Easy roll-out installation and removal lets you set up a pro-grade court quickly and efficiently, indoors or outdoors, for temporary and repeat-use applications.',
      },
    ],
    logoGuidelines: [
      'Use only official RollX logos provided by AT Sports.',
      'When appropriate, reference RollX as \u201cA Division of AT Sports.\u201d',
      'Avoid combining the logo with other graphics.',
      'Avoid creating alternate versions of the logo.',
    ],
  },
]

export const PRODUCT_NAMING = [
  {
    correct: 'AT Sports',
    not: 'ATSports, At Sports, ATS',
    descriptor: 'Sports Surfacing Manufacturer',
  },
  {
    correct: 'Acrytech',
    not: 'Acry-Tech, AcryTech',
    descriptor: 'Sports Coating Systems',
  },
  {
    correct: 'CushionX',
    not: 'Cushion X, Cushion-X',
    descriptor: 'Cushioned Court Systems',
  },
  {
    correct: 'Faultline',
    not: 'Fault Line, FaultLine',
    descriptor: 'Crack Repair Systems',
  },
  {
    correct: 'RollX',
    not: 'Roll X, Roll-X, Rollx',
    descriptor: 'Portable Court Systems',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Can I make my own AT Sports flyer or ad?',
    a: 'Yes. Approved logos, colors, messaging, and imagery may be used in standard sales materials. Paid advertising, press releases, large-format graphics, and newly created co-branded templates must be approved before publication.',
  },
  {
    q: 'Which logo file should I use for embroidery, engraving, or signage?',
    a: 'Use a vector EPS or SVG file whenever possible. The approved one-color logo is generally best for embroidery and engraving. Contact AT Sports Marketing before producing permanent or large-format signage.',
  },
  {
    q: 'Can I change the colors to match my brand?',
    a: 'No. AT Sports and product-line logos must remain in their approved colors, solid black, or reversed white. Partner branding may retain its own colors as long as the AT Sports identity is not altered.',
  },
  {
    q: 'Is it \u201CCushion X\u201D or \u201CCushionX\u201D?',
    a: 'Always write CushionX as one word with a capital C and X.',
  },
  {
    q: 'When do I use the \u201CDivision of AT Sports\u201D tag?',
    a: 'Use the supplied product-line lockup with the tag when the product logo appears without clear AT Sports company context. Do not rebuild or manually add the tag.',
  },
  {
    q: 'Where do I get a higher-resolution or project-specific photo?',
    a: 'Contact malory@atsports.com with the product line, project type, preferred orientation, surface color, and intended use.',
  },
  {
    q: 'Who do I contact for anything else?',
    a: 'Contact AT Sports Marketing at malory@atsports.com before publishing anything that falls outside the guidance provided in this hub.',
  },
]
