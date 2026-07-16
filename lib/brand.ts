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
    accentClass: 'bg-slate',
    overview: [
      'Acrytech is the Sport Surface Coatings Division of AT Sports, specializing in acrylic surfacing systems for tennis, pickleball, basketball, and multi-sport applications. The product line is designed to provide consistent appearance, playability, and finish quality across projects ranging from neighborhood courts to professional sports facilities.',
      'From new construction to resurfacing, Acrytech offers a complete portfolio of compatible acrylic products designed to work together as one coordinated sports surfacing system.',
    ],
    positioning: [
      {
        title: 'Complete Acrylic System',
        body: 'Every stage of the surfacing process, from preparation and repair to texture and final color, is supported within one manufacturer-backed system.',
      },
      {
        title: 'Built for Professional Application',
        body: 'Products are formulated to support consistent mixing, application, texture, and finish quality across a wide range of court projects.',
      },
      {
        title: 'Engineered for Court Performance',
        body: 'Designed to deliver reliable traction, consistent ball response, and lasting surface performance when installed according to specification.',
      },
      {
        title: 'Manufacturing Expertise',
        body: 'Manufactured in-house using advanced acrylic technology, giving AT Sports greater control over product quality, consistency, and technical support.',
      },
      {
        title: 'Proven at the Professional Level',
        body: 'As the Official Surface of the Professional Pickleball Association and Major League Pickleball, Acrytech delivers the consistency demanded by professional competition.',
      },
    ],
    marketingCopy: [
      'Acrytech is the acrylic sports coating division of AT Sports. Designed for new construction and court resurfacing, the product line includes surface preparation, repair, texture, and color systems engineered to work together from start to finish.',
      'We install Acrytech coatings because it provides a complete manufacturer-supported system, from preparation through final color, that helps us deliver consistent results on every project.',
      'Acrytech delivers professional sports surfaces designed for consistent playability, long-term durability, and dependable performance. Trusted by facilities around the world, every system is engineered to perform season after season.',
      'Manufactured with advanced acrylic technology, Acrytech systems are engineered for adhesion, durability, color stability, and consistent application across tennis, pickleball, basketball, and multi-sport surfaces.',
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
    accentClass: 'bg-navy',
    overview: [
      'CushionX is the Cushion Sport Surface Division of AT Sports, specializing in cushioned overlay systems for tennis, pickleball, basketball, and multi-sport applications. The product line includes multiple system configurations designed to increase force reduction while supporting a wide range of facility types and performance requirements.',
      'Available in multiple performance levels, CushionX systems allow sports surfaces to be tailored to the intended use, level of play, and project objectives.',
    ],
    positioning: [
      {
        title: 'Player Comfort',
        body: 'Designed to improve impact absorption while maintaining consistent ball response and playability.',
      },
      {
        title: 'Flexible System Options',
        body: 'Multiple system configurations allow facilities to match cushion performance to project goals, budget, and expected court usage.',
      },
      {
        title: 'Extend Court Life',
        body: 'Engineered to support renovation strategies that help facilities maximize existing court infrastructure while reducing project disruption.',
      },
      {
        title: 'Built for Every Level of Play',
        body: 'Suitable for residential, commercial, club, municipal, educational, and tournament environments through multiple system configurations.',
      },
      {
        title: 'Integrated Court System',
        body: 'Designed to work with Acrytech acrylic coatings as part of a complete AT Sports sports surfacing system.',
      },
    ],
    marketingCopy: [
      "CushionX is AT Sports' family of cushioned court systems designed to improve player comfort while providing flexible solutions for new construction and court renovation. Multiple system configurations allow facilities to select the composition level that best fits their project and expected court usage.",
      'We install CushionX because it provides multiple cushioned system options that integrate with AT Sports surfacing products, allowing us to recommend the right solution for each facility and budget.',
      'CushionX systems are designed to improve player comfort while supporting long-term court performance. Whether serving residential, club, educational, or tournament facilities, multiple cushion levels allow each project to be matched to its intended use.',
      'CushionX systems are engineered to integrate with Acrytech acrylic coatings as part of a complete AT Sports sports surfacing system. Multiple system configurations provide varying levels of impact absorption and durability based on project requirements.',
    ],
    systemsTitle: 'CushionX Composition Levels',
    systems: [
      {
        label: 'Level 1',
        name: 'Residential Usage Only',
        body: 'Ideal for homes and light-use courts, Level 1 includes a 4mm, 6mm, or 8mm cushion mat offering durability and comfort for recreational play.',
      },
      {
        label: 'Level 2',
        name: 'Light & Moderate Commercial',
        body: 'Level 2 improve durability and resilience of Level 1 by incorporating an extra reinforced membrane layer to meet the demands of commercial environments.',
      },
      {
        label: 'Level 3',
        name: 'High-Use Commercial & Tournament',
        body: 'Level 3 offers the maximum system configuration with adding three layers of urethane flex coatings for facilities requiring the highest levels of comfort, durability, and long-term performance.',
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
    accentClass: 'bg-sky',
    overview: [
      'Faultline is the Crack Repair Division of AT Sports, specializing in sports surface crack repair systems for tennis, pickleball, basketball, and multi-sport applications. The product line includes repair systems, reinforcement products, and restoration materials designed to address a wide range of surface conditions before resurfacing.',
      'From isolated cracks to large-scale restoration projects, Faultline provides repair solutions for varying surface conditions and project requirements.',
    ],
    positioning: [
      {
        title: 'Smarter Crack Repair',
        body: 'Purpose-built solutions designed to simplify crack repair while improving consistency and installation efficiency.',
      },
      {
        title: 'Consistent Ball Response',
        body: 'Designed to maintain consistent ball bounce for pickleball and tennis across repaired\nareas without excessive surface buildup',
      },
      {
        title: 'Lower Profile Results',
        body: 'Designed to create smoother transitions that blend naturally beneath resurfacer and color coatings.',
      },
      {
        title: 'Flexible Repair Options',
        body: 'From localized repairs to full-court restoration, Faultline offers solutions for a wide range of crack conditions and project requirements.',
      },
      {
        title: 'System Integration',
        body: 'Designed to work seamlessly with Acrytech surfacing systems as part of a complete AT Sports court solution.',
      },
    ],
    marketingCopy: [
      "Faultline is AT Sports' complete crack repair product family, providing contractors with engineered solutions for localized repairs, reinforcement, and full-court restoration. Every product is designed to integrate with Acrytech surfacing systems for consistent project results.",
      'We use Faultline because it provides repair solutions for a wide range of crack conditions while helping reduce installation time and create smoother finished courts.',
      'Faultline repair systems are designed to restore damaged courts while supporting long-term resurfacing performance. Multiple repair options allow contractors to recommend the right solution based on the condition of each court.',
      'Faultline products are engineered to integrate with Acrytech surfacing systems, providing flexible repair solutions designed to reduce reflective cracking and improve finished surface consistency.',
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
    accentClass: 'bg-red',
    overview: [
      "RollX is AT Sports' portable sports surfacing system, designed to create professional-quality playing surfaces wherever permanent court construction isn't practical or possible.",
      'Whether supporting tournaments, special events, clubs, schools, or multi-purpose facilities, RollX transforms existing spaces into ready-to-play pickleball courts without permanent construction.',
      'Manufactured by AT Sports, RollX combines dependable playability, rapid deployment, and customizable branding to help facilities expand programming, maximize space, and create new opportunities for play.',
    ],
    positioning: [
      {
        title: 'Portable Court System',
        body: 'Transforms existing indoor or outdoor spaces into consistent sport surfaces without permanent construction.',
      },
      {
        title: 'Rapid Deployment',
        body: 'Designed for fast installation, removal, storage, and repeated use across multiple venues and events.',
      },
      {
        title: 'Flexible Facility Solutions',
        body: 'Ideal for tournaments, clubs, schools, recreation centers, convention spaces, and multi-purpose facilities.',
      },
      {
        title: 'Custom Branding',
        body: 'Available with custom colors, logos, and graphics to support sponsors, venues, tournaments, and branded events.',
      },
      {
        title: 'Manufactured by AT Sports',
        body: 'Built with the same commitment to quality found throughout the AT Sports product portfolio.',
      },
    ],
    marketingCopy: [
      "RollX is AT Sports' portable court system designed to create professional-quality playing surfaces without permanent court construction. Ideal for events, schools, clubs, and multi-purpose facilities, RollX expands where sports can be played.",
      'RollX helps facilities maximize existing space by creating temporary courts that can be installed, removed, and stored as programming needs change.',
      'RollX provides event organizers and venue operators with a portable sports surface that delivers consistent playability while supporting rapid deployment and customized branding opportunities.',
      'Manufactured by AT Sports, RollX combines dependable performance, portable deployment, and flexible venue solutions to help facilities create new opportunities for sports without permanent infrastructure.',
    ],
    systemsTitle: 'RollX Key Features',
    systems: [
      {
        label: 'Surface',
        name: 'Reinforced Membrane Surface',
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
        body: 'Portable system designed for efficient installation, removal, transport, and storage across temporary and recurring events.',
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
