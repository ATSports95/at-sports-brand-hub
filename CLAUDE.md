# AT Sports Brand Hub — Partner Edition

A partner-facing brand guidelines microsite for **AT Sports**, a sports surfacing manufacturer. Audience: distributors, dealers, installers, and channel partners. It is a self-serve hub where partners learn how to represent the brand correctly and download assets.

**This site is itself a piece of brand collateral.** It's often a new distributor's first impression of AT Sports, so the execution has to model the standards it documents. If the site breaks its own rules, it fails.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- lucide-react for icons
- Static site, no backend. Deployed on Vercel.
- Keep dependencies lean — nothing heavier than shadcn/ui and lucide-react without asking.

---

## Brand rules (non-negotiable)

These are the actual AT Sports brand standards. Never violate them in site code — a mistake here contradicts the guidelines the page is teaching.

### Colors

Defined as design tokens. Always reference tokens, never hardcode hex in components.

| Token | Hex | Role |
|---|---|---|
| Navy | `#233354` | **Primary. Leads and dominates.** Backgrounds, headlines, nav, footer. |
| Red | `#9A1B1E` | **Accent only, sparingly.** Emphasis, dividers, hover, error/incorrect states. |
| Sky | `#4E8CB3` | Supporting accent, links, highlights. |
| Steel | `#B9C4CB` | Light backgrounds, borders, dividers, placeholders. |
| Slate | `#5D6F7A` | Secondary text on light. |
| Near-Black | `#202528` | Primary body text. |
| White | `#FFFFFF` | Base background. |

- **Navy leads**, with generous white space.
- **Red is the accent, never the field.** Never use Red as a large background.
- Keep contrast strong: dark text on light, white on Navy/Near-Black. Never Steel text on white.

### Typography

- **Effra** — the real everyday brand font (Light, Regular, SemiBold, ExtraBold). Commercially licensed.
  - The prototype uses **Figtree** (Google Fonts) as a stand-in fallback. There's a `TODO` comment where the swap happens. Don't remove it.
  - If self-hosted Effra files get added, swap via `@font-face` and remove the fallback.
- **Expletus Sans** — accent/display font (Google Fonts, free — actually loaded).
- **Flood** — high-impact accent font.
- Headlines: Expletus Sans, Navy, bold/extrabold. Body: Effra/Figtree, Near-Black or Slate.

### Aesthetic

Echoes the AT Sports style guide. Technical, confident, precise. Not a generic template.

- Navy-dominant, lots of clean white space, Red as a sharp accent only.
- **Diagonal split** motif as a recurring device (angled hero, angled section dividers).
- **Subtle halftone dot texture** as a light background accent in hero/section headers — low opacity, never overpowering.
- Rounded-md corners, crisp Steel borders, generous padding.

---

## Logos

### Files live in `/public/logos/`

Not Dropbox. Dropbox is **only** for the downloadable asset packs (see below). Displayed logos are served from `/public` for CDN reliability.

Use plain `<img>` with descriptive `alt`. Don't require `next/image` config for SVG.

### Filename manifest

Convention: `{name}-{version}.svg`

**Corporate:** `at-sports-color.svg` · `at-sports-black.svg` · `at-sports-white.svg`

**The Tag ("Division of AT Sports"):** `at-sports-tag-color.svg` · `at-sports-tag-black.svg` · `at-sports-tag-white.svg`

**Product lines** (each in color / black / white):
`acrytech-color.svg` `acrytech-black.svg` `acrytech-white.svg`
`cushionx-color.svg` `cushionx-black.svg` `cushionx-white.svg`
`faultline-color.svg` `faultline-black.svg` `faultline-white.svg`
`rollx-color.svg` `rollx-black.svg` `rollx-white.svg`

**Product + Tag lockups:** `acrytech-tag-color.svg` · `cushionx-tag-color.svg` · `faultline-tag-color.svg` · `rollx-tag-color.svg`

### Display rules

- **Color** and **black** versions go on white/light tiles. **White (reversed)** versions go on a **Navy tile** — never white-on-white.
- Showing three versions together: 3-up row of tiles — light / light / navy.
- Comfortable size with padding. **Never stretch** — always `object-contain`, preserve aspect ratio.
- If a file 404s, render a neutral Steel placeholder box labeled with the filename so it's obvious which asset is missing.

### The one exception

The Logo Don'ts and Co-Branding sections **intentionally** render distorted/recolored/rotated logos via CSS (`scaleX`, `hue-rotate`, `drop-shadow`, `rotate`) as **labeled incorrect examples**. These are deliberate teaching visuals, red-bordered and ❌-captioned. Don't "fix" them — they're supposed to look wrong. Everywhere else, these treatments are forbidden.

---

## Asset downloads

All download URLs live in **one config**: `lib/assets.ts`. Never inline a URL in a component.

Keys: `logoPack`, `productLineAssets`, `colorSwatches`, `fontsGuide`, `templates`, `overviewDeck`, `hubPdf`

- Values are Dropbox share links. Placeholder: `"DROPBOX_LINK_HERE"`.
- Dropbox links must end in **`?dl=1`** for direct download (not the preview page).
- All download buttons open in a new tab: `target="_blank" rel="noopener"`.

---

## Content rules

### Product line names — exact

Never "correct," reformat, or auto-capitalize these. Each is one word.

| Correct | Never | Descriptor |
|---|---|---|
| **AT Sports** | ATSports, At Sports, ATS | — |
| **Acrytech** | Acry-Tech, AcryTech | Sports Coatings |
| **CushionX** | Cushion X, Cushion-X | Cushion Sports Surfaces |
| **Faultline** | Fault Line, FaultLine | Crack Repair |
| **RollX** | Roll X, Roll-X, Rollx | Portable Sports Surfaces |

- Company name is **AT Sports**, two words, always in full. Never "ATS" in customer-facing copy.
- Don't add ™ or ® anywhere.

### Copy

The site copy is **approved and reviewed**. Don't rewrite, "improve," or paraphrase it when making changes to layout or styling. If copy genuinely needs to change, flag it rather than editing silently.

Placeholders in `[brackets]` — contact name, email, turnaround times, credit requirements — are **intentional** and awaiting real values. Don't invent values to fill them.

Voice, if new copy is ever needed: professional, technical, confident. Benefit-forward without hype. No unprovable superlatives.

---

## Structure

Single long scrolling page, each section an anchor target. Sticky left sidebar nav on desktop with scrollspy active-state; collapses to a hamburger top bar on mobile.

Sections in order:
1. Hero
2. Welcome / Start Here
3. Brand Foundation
4. Logo & Identity
5. Color System
6. Typography
7. Co-Branding & Partner Use ← most important section for partners
8. Photography & Imagery
9. Asset Library
10. FAQ
11. Footer

---

## Conventions

- Color swatches are click-to-copy hex with a "Copied!" state.
- FAQ uses the shadcn Accordion.
- Hover states in Red/Sky; always include `focus-visible` states.
- Mobile: cards and tables stack cleanly.
- Accessibility matters — this is a public partner-facing site. Real contrast, real alt text, keyboard nav.
