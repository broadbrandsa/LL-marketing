# Project Overview

## What this is

A standalone, single-page **proposal website** that presents Broadbrand's
**Launch Marketing Plan** for Liquid Lighting (Pty) Ltd. It is the interactive,
shareable companion to the source document `BB-LL-LAUNCH-2026-002` (itself a
companion to the Year 1 Marketing Calendar, `BB-LL-CAL-2026-001`).

The site translates the plan into a navigable web experience: executive summary,
market opportunity, objectives, audience, channel strategy, launch approach,
measurement framework, SA-verified KPI benchmarks, and a clear three-month
commercial investment. The **signed** scope of work is downloadable as a PDF
throughout the site.

## Purpose

- Give Liquid Lighting decision-makers a polished, on-brand way to review the plan.
- Make the strategy easy to navigate, section by section, on any device.
- Present the commercial terms (media spend + retainer) transparently.
- Provide a single link that can be shared, revisited, and approved.

## Target audience

- **Primary:** Liquid Lighting ownership / decision-makers reviewing the proposal.
- **Secondary:** Internal Broadbrand stakeholders and any advisors the client loops in.

This is a private, gated-by-link sales document — it is **not** indexed by search
engines (`robots: noindex, nofollow`).

## Commercial summary

| Line item            | Monthly | Over 3 months |
| -------------------- | ------- | ------------- |
| PPC media spend      | R30,000 | R90,000       |
| Broadbrand retainer  | R30,000 | R90,000       |
| **Total**            | **R60,000** | **R180,000** |

Broadbrand is not VAT registered, so no VAT applies to the retainer. PPC media is
paid directly to the ad platforms (working budget); the retainer covers Broadbrand's
strategy, build, creative and optimisation.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** primitives (Radix base)
- **lucide-react** icons
- Fonts: **Poppins** (the Liquid Lighting brand typeface) + **JetBrains Mono** (figures)
- Brand identity (gold `#c5a028`, charcoal `#1e1e1e`, logo) pulled directly from the
  Liquid Lighting Shopify storefront for a pixel-faithful match.

## Deployment environment

- **Host:** Vercel (Next.js preset, zero-config)
- **Package manager:** pnpm
- **Build:** `pnpm build`  ·  **Dev:** `pnpm dev`

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the full deployment runbook.

## Owner

- **Prepared by:** Broadbrand · Digital Agency
- **Maintained by:** Broadbrand engineering
- **Prepared for:** Liquid Lighting (Pty) Ltd
