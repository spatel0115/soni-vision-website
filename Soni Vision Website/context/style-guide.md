# Soni Vision Institute — Style Guide

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#32384e` | Hero bg, header, CTA sections, footers |
| `--teal` | `#499188` | Primary CTAs, accents, section labels, stars |
| `--teal-dark` | `#357069` | Button hover states |
| `--white` | `#ffffff` | Main backgrounds |
| `--off-white` | `#f8f7f4` | Alternate section backgrounds |
| `--light-gray` | `#efefef` | Dividers, subtle backgrounds |
| `--body-text` | `#222222` | Primary text |
| `--body-light` | `#666666` | Secondary text, captions |

## Typography

### Fonts
- **Display:** `Cormorant Garamond` (serif) — headings, hero text, section titles
- **Body:** `Inter` (sans-serif) — all body copy, labels, nav, buttons

### Scale
| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Hero H1 | `clamp(58px, 6.5vw, 90px)` | 600 | Letter-spacing: -0.5px |
| Section H2 | `clamp(38px, 4vw, 54px)` | 600 | Line-height: 1.1 |
| Section label | `10px` | 600 | Uppercase, 4px letter-spacing, teal color |
| Body | `16–17px` | 300–400 | Line-height: 1.75 |
| Nav links | `11px` | 500 | Uppercase, 0.3px letter-spacing |
| Buttons | `13px` | 600 | Uppercase, 1.5px letter-spacing |

### Italic Usage
Em elements in headings (`<em>`) are italic and teal — used for the "money phrase" of each heading.

## Spacing

- **Base unit:** 8px
- **Section padding desktop:** 110px top/bottom
- **Section padding mobile:** 72px top/bottom
- **Container max-width:** 1200px
- **Container padding:** 40px sides (desktop), 24px sides (mobile)

## Buttons

| Class | Style | Usage |
|-------|-------|-------|
| `.btn-primary` | Teal bg, white text | Primary CTA |
| `.btn-outline` | Transparent, white border/text | Secondary on dark bg |
| `.btn-outline-dark` | Transparent, navy border/text | Secondary on light bg |
| `.btn-white` | White bg, navy text | CTA on dark sections |

Button padding: `15px 34px`. Font: Inter 13px uppercase. Border-radius: 2px.

## Header

- **Background:** White (`#ffffff`) — always, no scroll toggle
- **Height:** 80px
- **Nav text:** Navy (`#32384e`), 11px uppercase
- **Mobile:** Logo + hamburger only. CTA button hidden. Open menu = navy bg, white text.

## Page Hero (Inner Pages)

- **Background:** Navy (`#32384e`)
- **Padding desktop:** `110px 0 52px`
- **Padding mobile:** `88px 0 40px`
- **Text:** White, full-width (no max-width constraint)

## Breakpoints

| Breakpoint | Width | Key changes |
|------------|-------|-------------|
| Large | 1100px | Hero collapses to 1 col, services 2-col |
| Medium | 900px | Surgeon cards stack, reviews stack |
| Mobile | 768px | Nav hidden, hamburger shown, CTA hidden from header |
| Small | 580px | Steps grid 1-col |

## Images

- **Format:** WebP preferred
- **Hero photo:** `dr-soni-hero.webp` — arms crossed, clinic waiting room
- **object-fit:** `cover` with `object-position: top center` for portrait photos
- **Two-col images:** `height: 400px` desktop, `height: 320px` mobile

## Key CSS Classes

- `.page-hero` — inner page hero (navy banner)
- `.content-section` — main content sections (110px padding)
- `.content-section.gray` — off-white alternate sections
- `.two-col` — 2-column grid layout (reverses for alternate sections)
- `.surgeon-card` — doctor bio cards (photo + info grid)
- `.hero-stats` — stat row in homepage hero
- `.section-label` — small teal uppercase label above headings
- `.section-title` — main heading with teal italic em
