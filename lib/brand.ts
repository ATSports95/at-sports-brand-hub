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
    descriptor: 'Sports Coatings',
    whatFor:
      'Top-of-the-line sports surface coatings and surface materials.',
  },
  {
    id: 'cushionx',
    name: 'CushionX',
    descriptor: 'Cushion Sports Surfaces',
    whatFor:
      'A lightweight, pliable premium cushion mat that\u2019s fast and easy to install.',
  },
  {
    id: 'faultline',
    name: 'Faultline',
    descriptor: 'Crack Repair',
    whatFor:
      'A premium solution for repairing cracks on sports surfaces, for seamless play on tennis and pickleball courts.',
  },
  {
    id: 'rollx',
    name: 'RollX',
    descriptor: 'Portable Sports Surfaces',
    whatFor:
      'Transforms any foundational surface into a high-performance playing court.',
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
    descriptor: 'Sports Coatings',
    tagline: 'Sports Coatings and Surfacing Solutions',
    accentClass: 'bg-navy',
    overview: [
      'Acrytech Sports Coatings deliver a complete, professional-grade sports surfacing solution engineered for performance, durability, and long-term reliability.',
      'Built to perform and engineered to last, Acrytech is trusted by court builders, contractors, sports facilities, and professional organizations seeking consistent, high-quality playing surfaces across a wide range of sports applications.',
      'As the Official Surface of the Professional Pickleball Association (PPA), Acrytech represents professional-level performance, proven consistency, and long-term surface reliability.',
    ],
    positioning: [
      {
        title: 'Professional-Level Performance',
        body: 'Engineered for consistent playability, traction, and surface reliability.',
      },
      {
        title: 'Long-Term Durability',
        body: 'Designed to withstand heavy use, changing climates, and demanding environments over time.',
      },
      {
        title: 'Climate Reliability',
        body: 'Formulated to resist color fading, peeling, and surface breakdown across varying environmental conditions.',
      },
      {
        title: 'Advanced Technology',
        body: 'Built with 100% self-crosslinking formulations designed for durability, adhesion, and consistent finish quality.',
      },
      {
        title: 'Trusted by the Pros',
        body: 'As the Official Surface of the Professional Pickleball Association (PPA), Acrytech is trusted for professional-level consistency, performance, and playability.',
      },
    ],
    marketingCopy: [
      'Acrytech Sports Coatings deliver a professional-grade sports surfacing solution engineered for durability, consistent playability, and long-term performance. As the Official Surface of the Professional Pickleball Association (PPA), Acrytech is trusted for professional-level surface consistency across pickleball, tennis, basketball, and multi-sport applications.',
      'As a certified Acrytech installer, we provide professional acrylic sports surfacing systems designed for projects seeking durability, performance, and long-term surface reliability. Trusted by the PPA, Acrytech coatings are engineered to perform across a wide range of sports and climate conditions.',
      'Acrytech is an advanced sports coating system engineered to provide professional-level playability, consistent traction, and long-term durability across a wide range of court applications. As the Official Surface of the PPA, Acrytech is trusted for elite-level performance and consistency.',
      'Built with advanced self-crosslinking technology, Acrytech delivers a complete sports surfacing solution designed for long-lasting performance, vibrant color retention, and reliable installation results. Trusted by professional organizations including the PPA, Acrytech is engineered for demanding court environments.',
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
    descriptor: 'Cushion Sports Surfaces',
    tagline: 'Cushioned Sports Surfacing Solutions',
    accentClass: 'bg-sky',
    overview: [
      'CushionX is a premium cushioned sports surfacing system manufactured by AT Sports and engineered to deliver enhanced athlete comfort, long-term durability, and consistent playability across a wide range of court environments.',
      'Designed for pickleball, tennis, and multi-sport facilities, CushionX combines advanced cushion technology with multiple system configurations to provide a professional-level surface solution for residential, commercial, club, and tournament applications.',
    ],
    positioning: [
      {
        title: 'Enhanced Athlete Comfort',
        body: 'Engineered to provide force reduction up to 15%, helping reduce stress and fatigue during extended play.',
      },
      {
        title: 'Professional-Level Performance',
        body: 'Designed to deliver consistent playability across pickleball, tennis, and multi-sport court applications.',
      },
      {
        title: 'Multiple Cushion & Composition Options',
        body: 'Available in multiple composition levels and 4mm, 6mm, and 8mm cushion configurations to fit varying performance and usage needs.',
      },
      {
        title: 'Long-Term Durability',
        body: 'Engineered for long-lasting performance and built to hold up under demanding use environments over time.',
      },
      {
        title: 'Faster Installation',
        body: 'Designed for faster installation and improved installation efficiency compared to traditional cushioned court systems.',
      },
      {
        title: 'Manufactured by AT Sports',
        body: 'Engineered and backed by a trusted sports surfacing manufacturer, providing complete system quality control and long-term consistency.',
      },
    ],
    marketingCopy: [
      'CushionX delivers a premium cushioned sports surfacing solution engineered for enhanced comfort, long-term durability, and consistent playability. Designed for pickleball, tennis, and multi-sport facilities, CushionX provides a professional-level surface built to withstand demanding environments while helping reduce surface impact for athletes.',
      'As a certified CushionX installer, we provide advanced cushioned court systems designed for projects seeking premium performance, athlete comfort, and long-term surface reliability. Available in multiple system configurations, CushionX can be tailored to fit residential, commercial, club, and tournament-level applications.',
      'CushionX is an advanced cushioned sports surfacing system engineered to provide enhanced comfort, professional-level playability, and long-term durability across a wide range of court applications.',
      'CushionX combines advanced cushion technology with multiple performance levels to create a premium sports surfacing solution built for long-term durability, enhanced impact absorption, and faster installation compared to traditional cushioned court systems.',
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
    descriptor: 'Crack Repair',
    tagline: 'Long-Term Crack Repair Systems',
    accentClass: 'bg-red',
    overview: [
      'Faultline is a complete crack repair and court restoration product line engineered to deliver dependable performance, simplified installation, and durable repairs designed to withstand the stresses of court surfaces.',
      'At the heart of the line, the Faultline Crack Repair Kit is a patent-pending, fully adhered crack repair system developed to help reduce reflective cracking while maintaining predictable playability and surface integrity \u2014 the thinnest, permanent, fully adhered system available.',
    ],
    positioning: [
      {
        title: 'Thin-Profile System Design',
        body: 'A completed system thickness of only 1.1mm helps minimize surface buildup while maintaining smooth surface transitions beneath resurfacer and color coatings.',
      },
      {
        title: 'Unmatched Flexibility & Strength',
        body: 'Reinforced Polyfiber\u2122 membrane and advanced Faultline tape flex with the court, preventing cracking and wrinkling over time.',
      },
      {
        title: 'Consistent Ball Response',
        body: 'Designed to maintain consistent ball bounce for pickleball and tennis across repaired areas without excessive surface buildup.',
      },
      {
        title: 'Fully Adhered System Performance',
        body: 'Fully adhered reinforcement layers help improve bonding, reduce membrane movement, and support lasting crack repair performance.',
      },
      {
        title: 'Five-Step Installation Process',
        body: 'A systemized installation process designed to support reliable application, strong adhesion, and consistent repair results across a variety of court conditions.',
      },
      {
        title: 'Flexible Reinforcement',
        body: 'Advanced systems designed to move naturally with the court surface to help reduce future cracking and surface stress.',
      },
    ],
    marketingCopy: [
      'Faultline is a complete crack repair and court restoration product line engineered to deliver dependable performance, simplified installation, and durable repairs built to withstand the stresses of court surfaces. Products blend seamlessly with resurfacer and color coatings to create a smooth, uniform playing surface with consistent performance.',
      'The Faultline Crack Repair Kit is a patent-pending, fully adhered crack repair system \u2014 the thinnest, permanent, fully adhered system available. At just 1.1mm completed thickness, it helps reduce reflective cracking while maintaining predictable playability and surface integrity for pickleball and tennis courts.',
      'As a certified Faultline installer, we provide professional-grade court repair solutions including surface repair products, reinforcement systems, and flexible adhesive technologies for a wide range of court conditions. Faultline\u2019s reinforced Polyfiber\u2122 membrane and advanced tape flex with the court to prevent future cracking and wrinkling.',
      'Faultline delivers long-term crack repair engineered for optimized court performance and streamlined installation. Its fully adhered reinforcement layers improve bonding and reduce membrane movement, supporting durable repairs across both localized fixes and full-court restoration projects.',
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
    descriptor: 'Portable Sports Surfaces',
    tagline: 'Portable Sports Surfacing Solutions',
    accentClass: 'bg-slate',
    overview: [
      'RollX is a portable sports surfacing system manufactured by AT Sports and engineered to transform any foundational surface into a high-performance playing court.',
      'Designed for pickleball, tennis, and multi-sport use, RollX delivers professional-level playability in a roll-out format built for fast deployment, repeat use, and reliable performance across events, facilities, and temporary or multi-use court applications.',
    ],
    positioning: [
      {
        title: 'Portable & Reusable',
        body: 'Engineered in a roll-out format that can be deployed, removed, and reused across multiple courts and venues.',
      },
      {
        title: 'Fast Deployment',
        body: 'Designed for quick installation over existing foundational surfaces, minimizing setup time for events and multi-use spaces.',
      },
      {
        title: 'Professional-Level Playability',
        body: 'Formulated to deliver consistent traction, ball response, and footing that meet professional court standards.',
      },
      {
        title: 'Durable Construction',
        body: 'Built to withstand repeated setup, teardown, and heavy use while maintaining consistent surface performance.',
      },
      {
        title: 'Multi-Sport Versatility',
        body: 'Designed to support pickleball, tennis, and multi-sport play across a wide range of foundational surfaces.',
      },
      {
        title: 'Manufactured by AT Sports',
        body: 'Engineered and backed by a trusted sports surfacing manufacturer, providing complete system quality control and long-term consistency.',
      },
    ],
    marketingCopy: [
      'RollX delivers a portable sports surfacing solution engineered to transform any foundational surface into a high-performance playing court. Designed for pickleball, tennis, and multi-sport use, RollX provides professional-level playability in a roll-out format built for fast deployment and repeat use.',
      'As a certified RollX installer, we provide portable court surfacing systems designed for projects seeking fast deployment, professional playability, and durable, reusable performance. RollX can be tailored to fit events, facilities, and temporary or multi-use court applications.',
      'RollX is an advanced portable surfacing system engineered to deliver professional-level playability and durable performance across a wide range of foundational surfaces. Manufactured by AT Sports, RollX brings tournament-quality courts to virtually any space.',
      'RollX combines a durable, roll-out construction with proven surfacing technology to create a portable sports surfacing solution built for fast deployment, professional playability, and reliable, reusable performance.',
    ],
    systemsTitle: 'RollX Configurations',
    systems: [
      {
        label: 'Config 1',
        name: 'Event & Temporary',
        body: 'Ideal for tournaments, demos, and pop-up courts, Config 1 provides a fast-deploy, fully reusable surface for short-term and repeat event use.',
      },
      {
        label: 'Config 2',
        name: 'Multi-Use Facility',
        body: 'Designed for gyms and shared spaces, Config 2 delivers a durable roll-out surface that converts multi-use floors into professional-level courts on demand.',
      },
      {
        label: 'Config 3',
        name: 'Semi-Permanent',
        body: 'For longer-term installations, Config 3 offers enhanced durability and a secured layout for facilities seeking a portable surface with extended, consistent performance.',
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
  { correct: 'AT Sports', not: 'ATSports, At Sports', descriptor: '\u2014' },
  { correct: 'Acrytech', not: 'Acry-Tech, AcryTech', descriptor: 'Sports Coatings' },
  {
    correct: 'CushionX',
    not: 'Cushion X, Cushion-X',
    descriptor: 'Cushion Sports Surfaces',
  },
  { correct: 'Faultline', not: 'Fault Line, FaultLine', descriptor: 'Crack Repair' },
  {
    correct: 'RollX',
    not: 'Roll X, Roll-X, Rollx',
    descriptor: 'Portable Sports Surfaces',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Can I make my own AT Sports flyer or ad?',
    a: 'For standard sales materials, yes \u2014 use supplied assets and follow this hub. For paid ads, large signage, or press, send to [email] for quick approval first.',
  },
  {
    q: 'Which logo file for embroidery, engraving, or signage?',
    a: 'Use the solid black or reversed white one-color version, in vector (SVG/EPS) so it scales cleanly. For large-format, check with us first.',
  },
  {
    q: 'Can I change the colors to match my brand?',
    a: 'No \u2014 don\u2019t recolor AT Sports or product logos. When co-branding, keep both brands in their own correct colors, side by side.',
  },
  {
    q: 'Is it "Cushion X" or "CushionX"?',
    a: 'CushionX \u2014 one word, capital C and capital X, no space. Same for RollX. Acrytech and Faultline are each one word too.',
  },
  {
    q: 'When do I use the "Division of AT Sports" tag?',
    a: 'Whenever a product logo appears on its own without other context tying it to AT Sports.',
  },
  {
    q: 'Where do I get a higher-res or project-specific photo?',
    a: 'Request from [email / form link] with the product, color, and intended use.',
  },
  {
    q: 'Who do I contact for anything else?',
    a: '[Name], [email].',
  },
]
