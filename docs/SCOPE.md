# Scope

## Pages included

This is a **single-page** proposal site (one route, `/`) composed of anchored
sections with a sticky nav for in-page navigation.

## Sections included

| # | Section                     | Anchor         | Content |
| - | --------------------------- | -------------- | ------- |
| — | Hero                        | `#top`         | Title, signed status, document metadata, primary CTAs, signed-PDF download |
| 01| Executive Summary           | `#summary`     | The launch in one page; stat row; focus pillars |
| 02| The Opportunity             | `#opportunity` | Market context; three pillars; competitive picture; credibility |
| 03| Objectives & Success Measures | `#objectives` | Objectives table; CPA / secondary / tertiary metric hierarchy |
| 04| Audience                    | `#audience`    | Homeowners and Trade; funnel-to-audience mapping |
| 05| Channel Strategy            | `#channels`    | Tabs: Paid search · Paid social · SEO & email |
| 06| The Launch Approach         | `#approach`    | Soft launch → ramp gate → scale → hard launch timeline; Day 1 checklist |
| 07| Measurement & Optimisation  | `#measurement` | Verification gate; weekly rhythm; test programme; reporting |
| 08| KPIs & SA-Verified Benchmarks | `#benchmarks` | SA input data, derived CPA scenarios, 90-day KPI targets, paid split, sources |
| 09| Investment                  | `#investment`  | Line items, what's covered, 3-month total, signed-PDF download |
| — | Closing                     | `#closing`     | "Let's switch it on" CTA |
| — | Footer                      | —              | Agency details, doc/plan refs, signed status, signed-PDF download |

## Downloadable asset

The **signed scope of work** (`Liquid Lighting Launch Marketing Plan - May 2026
SIGNED.pdf`) is served from `public/` and offered for download from the header,
hero, Investment section and footer.

## What is excluded

- **No CMS / admin.** Content is managed in code (`src/content/proposal.ts`).
- **No authentication / gating.** Privacy is by obscured link + `noindex`.
- **No backend / database / API routes.** Fully static.
- **No live integrations** with ad platforms, Shopify, or analytics dashboards.
- **No e-commerce functionality** — this presents the plan for a store; it is not the store.
- **No blog, multi-page routing, or i18n.**
- **No contact form** — CTAs are `mailto:` links (a form can be added later; see TRACKING_PLAN.md).

## Launch milestones (the plan's own sequence)

The strategy the site presents follows this launch sequence:

1. **Day 1 — Soft launch.** Site live; all six paid campaigns at 30% of cap; flows live.
2. **Day 1–3 — 48-hour ramp gate.** Spend held while conversions are verified against real Shopify orders.
3. **Day 3 — Scale to full cap.** Tracking confirmed; full daily caps; optimisation begins.
4. **Day 8 — Hard launch.** Full-list email; all campaigns at full budget.
5. **Weeks 1–12 — Engagement window.** Intensive optimisation; rolling tests; monthly reviews.

## Site delivery milestones

1. Scaffold (Next.js + Tailwind v4 + shadcn) — **done**
2. Brand theme + content + sections — **done**
3. Build + lint verification — **done**
4. Documentation — **done**
5. Vercel deployment — see [`DEPLOYMENT.md`](./DEPLOYMENT.md)
