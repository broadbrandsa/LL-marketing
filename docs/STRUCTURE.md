# Structure

## Folder structure

```
liquid-lighting-proposal/
├── docs/                       # Project documentation (this folder)
├── public/
│   ├── ll-icon.png             # Brand "liquid wave" spiral mark (from Shopify storefront)
│   ├── liquid-lighting-logo.png # Full brand lockup
│   ├── liquid-lighting-launch-marketing-plan-signed.pdf  # Signed SOW (download)
│   └── images/                 # Static image assets (add brand/lifestyle imagery here)
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme — brand tokens (charcoal + gold)
│   │   ├── layout.tsx          # Root layout: fonts, metadata, <html class="dark">
│   │   └── page.tsx            # Single route — composes all sections in order
│   ├── components/
│   │   ├── ui/                 # shadcn primitives (button, card, badge, tabs, …)
│   │   ├── sections/           # One file per proposal section
│   │   │   ├── hero.tsx
│   │   │   ├── executive-summary.tsx
│   │   │   ├── opportunity.tsx
│   │   │   ├── objectives.tsx
│   │   │   ├── audience.tsx
│   │   │   ├── channels.tsx
│   │   │   ├── launch-approach.tsx
│   │   │   ├── measurement.tsx
│   │   │   ├── benchmarks.tsx   # KPIs & SA-verified benchmarks (month-by-month + sector context)
│   │   │   ├── investment.tsx   # incl. 50/50 Google/Meta media split
│   │   │   ├── glossary.tsx     # appendix — index of terms & abbreviations
│   │   │   └── closing.tsx
│   │   ├── logo.tsx            # Liquid Lighting wordmark + orb mark (SVG)
│   │   ├── reveal.tsx          # Scroll-reveal wrapper (IntersectionObserver)
│   │   ├── section.tsx         # Shared <Section> shell + <SectionHeading>
│   │   ├── site-header.tsx     # Sticky nav (client) — scroll state + mobile menu
│   │   └── site-footer.tsx
│   ├── content/
│   │   └── proposal.ts         # SINGLE SOURCE OF TRUTH for all copy & data
│   └── lib/
│       └── utils.ts            # cn() class-merge helper (shadcn)
├── components.json             # shadcn config
├── next.config.ts
├── tsconfig.json               # alias: @/* → ./src/*
└── package.json
```

## Section composition rules

Every section follows the same pattern for visual and structural consistency:

1. **Wrapped in `<Section id="…">`** (`src/components/section.tsx`) — provides the
   max-width container, horizontal padding, vertical rhythm, and `scroll-mt` offset
   for the sticky header.
2. **Opens with `<SectionHeading>`** — numbered eyebrow (`01`…`08`), gold kicker
   label, balanced `h2`, and an optional lede paragraph.
3. **Content blocks are wrapped in `<Reveal>`** for a subtle fade-up on scroll
   (respects `prefers-reduced-motion`). Stagger with the `delay` prop.
4. **Colour is via brand tokens only** — `text-gold`, `bg-surface`, `border-border`,
   `bg-gold-soft`, `text-muted-foreground`, etc. No raw hex values in components.
5. **Server components by default.** Only `site-header.tsx`, `reveal.tsx` and
   `channels.tsx` (Tabs) are client components (`"use client"`), because they need
   interactivity or browser APIs.

## Content management approach

- **All copy and structured data live in `src/content/proposal.ts`.** Sections
  import named exports (`summary`, `opportunity`, `investment`, …) and render them.
- To **edit wording, numbers, or the investment**, change `proposal.ts` only —
  no component edits needed.
- The objects are declared `as const`, so the data is strongly typed and any
  structural change is caught at build time.
- To **add a section**: create `src/components/sections/<name>.tsx`, add its data
  to `proposal.ts`, add a nav entry to the `nav` array, and mount it in `page.tsx`.

## Theming

- The brand theme is defined once in `src/app/globals.css` as CSS variables,
  using the **exact** Liquid Lighting identity pulled from the Shopify storefront
  theme (`config/settings_data.json`): gold `#c5a028`, background `#1e1e1e`,
  footer `#0a0a0a`, borders `#2a2a2a`, muted `#a1a1a1`, white text, **Poppins** type.
- The whole site runs in a single dark theme (`<html class="dark">`); both
  `:root` and `.dark` are populated so shadcn components resolve correctly.
- Brand tokens exposed to Tailwind: `gold`, `gold-muted`, `gold-soft`, `ink`,
  `surface`, `surface-2`, `hairline`, plus the standard shadcn token set.
- To re-skin: edit the gold/charcoal `oklch(...)` values in `globals.css`.
