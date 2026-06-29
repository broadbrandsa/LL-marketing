# Scope

## Pages included

This is a **single-page** proposal site (one route, `/`) composed of anchored
sections with a sticky nav for in-page navigation.

## Sections included

| # | Section                     | Anchor         | Content |
| - | --------------------------- | -------------- | ------- |
| — | Hero                        | `#top`         | Title, signed status, document metadata, primary CTAs, signed-PDF download |
| 01| Executive Summary           | `#summary`     | Accordion: Overview · By the numbers · Where this plan focuses |
| 02| The Opportunity             | `#opportunity` | Market context; three pillars; competitive picture; credibility |
| 03| Objectives & Success Measures | `#objectives` | Objectives table; CPA / secondary / tertiary metric hierarchy |
| 04| Audience                    | `#audience`    | Homeowners, Renovators & DIY; Trade & Specifiers; funnel-to-audience mapping |
| 05| Channel Strategy            | `#channels`    | Tabs: Paid search · Paid social · SEO, email & social (monthly newsletter + weekly organic Meta posts) |
| — | Creative asset examples     | `#showcase`    | Lifestyle room-context video gallery (3 lazy-loaded square clips) |
| 06| The Launch Approach         | `#approach`    | Soft launch → ramp gate → scale → hard launch timeline; Day 1 checklist |
| 07| The Roadmap                 | `#roadmap`     | 12-week Gantt: 6 paid campaigns, 1 newsletter/month, 1 Meta post/week (IG+FB), milestones |
| 08| Measurement & Optimisation  | `#measurement` | Verification gate; weekly rhythm; test programme; reporting |
| 09| KPIs & SA-Verified Benchmarks | `#benchmarks` | Month-by-month targets (CVR, ATC, AOV, ROAS, blended CPA total → R500, cart recovery, organic) shown up front; supporting detail in an accordion (LL-vs-benchmark comparison, blended-CPA approach, SA inputs, sector context, Google Ads campaign split, sources) |
| 10| Investment                  | `#investment`  | Line items (PPC media split 50/50 Google/Meta), what's covered, 3-month total, signed-PDF download |
| — | Closing                     | `#closing`     | "Let's switch it on" CTA |
| — | Footer                      | —              | Agency details, doc/plan refs, signed status, signed-PDF download |

## Pages

| Route        | Purpose |
| ------------ | ------- |
| `/`          | The single-page proposal (all sections above) |
| `/appendix`  | Glossary — index of terms & abbreviations (CPA, ROAS, CVR, AOV, …) on its own page, with a "Back to the proposal" link |

## Navigation

The header nav shows **Summary**, a **Sections** dropdown (Opportunity, Objectives,
Audience, Channels, Approach, Measurement, Benchmarks, Investment), **Roadmap**, and
**Appendix** (the `/appendix` page). Anchor links are path-aware — they jump in-page
on `/` and route back to `/#section` from the appendix page.

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
