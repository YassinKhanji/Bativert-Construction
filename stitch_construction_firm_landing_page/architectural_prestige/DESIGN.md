---
name: Architectural Prestige
colors:
  surface: '#f8faf3'
  surface-dim: '#d9dbd4'
  surface-bright: '#f8faf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4ed'
  surface-container: '#edefe7'
  surface-container-high: '#e7e9e2'
  surface-container-highest: '#e1e3dc'
  on-surface: '#191c18'
  on-surface-variant: '#41493f'
  inverse-surface: '#2e312c'
  inverse-on-surface: '#f0f2ea'
  outline: '#72796f'
  outline-variant: '#c1c9bc'
  surface-tint: '#376939'
  primary: '#002406'
  on-primary: '#ffffff'
  primary-container: '#063c11'
  on-primary-container: '#73a871'
  inverse-primary: '#9dd499'
  secondary: '#4f644d'
  on-secondary: '#ffffff'
  secondary-container: '#d2e9cc'
  on-secondary-container: '#556a53'
  tertiary: '#3e0920'
  on-tertiary: '#ffffff'
  tertiary-container: '#591f35'
  on-tertiary-container: '#d4859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b8f1b4'
  primary-fixed-dim: '#9dd499'
  on-primary-fixed: '#002105'
  on-primary-fixed-variant: '#1f5124'
  secondary-fixed: '#d2e9cc'
  secondary-fixed-dim: '#b6cdb1'
  on-secondary-fixed: '#0d200e'
  on-secondary-fixed-variant: '#384c37'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3a061d'
  on-tertiary-fixed-variant: '#713248'
  background: '#f8faf3'
  on-background: '#191c18'
  surface-variant: '#e1e3dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies the intersection of architectural precision and high-end craftsmanship. It is built for an audience that values legacy, structural integrity, and understated luxury. The aesthetic is rooted in **Minimalism** with a focus on editorial-grade typography and vast negative space, reflecting the openness of a well-designed structure.

The visual narrative is "Quiet Confidence"—avoiding loud marketing gimmicks in favor of meticulous alignment, thin line-art, and a palette that mirrors raw materials like moss-covered stone, oxidized copper, and deep plum wood. Every element is intentional, providing a sense of stability and institutional trust.

## Colors

The palette is derived from natural architectural elements and botanical accents, moving toward a more mid-tone, organic spectrum.
- **Primary (Sage Stone):** A balanced, earthy green that serves as the foundation for structural elements and key actions, representing growth and groundedness.
- **Secondary (Oxidized Lichen):** A desaturated, grayish-green used for supportive UI elements and subtle accents, maintaining a monochromatic architectural harmony.
- **Tertiary (Plum Iron):** A deep, muted burgundy/plum used sparingly for high-contrast moments, refined call-to-outs, or sophisticated interactive states.
- **Neutral (Concrete Gray):** A balanced gray that grounds the interface, used for typography and UI borders to ensure technical clarity.

## Typography

The typographic hierarchy relies on the contrast between a literary serif and a utilitarian sans-serif.
- **Headlines:** Uses **Libre Caslon Text**. It should be set with tight tracking in display sizes to emphasize its elegant curves. Headings utilize the Primary Sage Stone or Neutral tones for a sophisticated, integrated look.
- **Body:** Uses **Work Sans**. Its clean, neutral character ensures high legibility for technical descriptions and firm history.
- **Accents:** Small caps are used for section headers (e.g., "SERVICES") to create a structured, organized feel. Use the Tertiary Plum Iron color for these labels when a distinct highlight is required, otherwise stick to Neutral.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure a curated, editorial look. 
- **Grid:** A 12-column grid with generous gutters. Images should often "bleed" or span across multiple columns (e.g., 8 columns for an image, 4 for text) to create asymmetrical balance.
- **Rhythm:** Vertical spacing is exceptionally generous. Sections are separated by large gaps to allow the content to breathe and to signal a premium, unhurried experience.
- **Mobile:** Transition to a single-column layout with 20px side margins, maintaining the large vertical gaps between distinct content blocks.

## Elevation & Depth

This system avoids traditional shadows to maintain its minimalist aesthetic. Instead, it uses:
- **Tonal Layering:** Subtle color shifts in background containers define depth, moving between light neutral surfaces and soft secondary-tinted zones.
- **Low-Contrast Outlines:** Thin (1px) lines in a muted neutral shade are used to divide table-style data (like stats or lists) or to frame inputs, acting as "ghost" boundaries.
- **Structural Lines:** Horizontal rules are used frequently to separate sections, acting as the "foundation" for the content above them.

## Shapes

The shape language is predominantly **Sharp**. Architectural precision is better represented by right angles and clean edges.
- **Buttons & Inputs:** Use a very slight 4px radius (Soft) to provide a touch of modern accessibility without losing the technical edge.
- **Containers:** Large image containers and section wrappers should always have 0px radius (Sharp) to mimic the lines of a blueprint or a finished building.

## Components

- **Buttons:** Primary buttons use the Sage Stone fill or a "Ghost" style with a 1px border and the "label-caps" typography. Hover states should involve a subtle shift to the Tertiary Plum Iron for a sophisticated interactive cue.
- **Input Fields:** Minimalist design—only a bottom border (1px) that darkens on focus. Labels sit above the line in "label-caps" style.
- **Icons:** Use thin-stroke (1px or 1.5px) line-art icons. Icons should be geometric and never filled.
- **Cards:** No shadows or heavy borders. Cards are defined by their internal spacing (padding) and alignment to the grid. Use thin neutral dividers to separate items in a list-based card.
- **Stats:** Large-scale numbers in the serif font paired with small-caps labels to communicate "proven results" with authority.