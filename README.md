# Liquid Lighting · Launch Marketing Plan

A standalone proposal website presenting **Broadbrand's Launch Marketing Plan for
Liquid Lighting (Pty) Ltd** — `BB-LL-LAUNCH-2026-002`.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and
**shadcn/ui**. Single dark, brand-themed page (deep charcoal + signal gold).

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # production build
pnpm lint       # ESLint
```

## Editing content

All copy and data — including the investment figures — live in one file:

```
src/content/proposal.ts
```

Edit there; the section components render it. No component changes needed for
wording or number updates.

## Documentation

See [`docs/`](./docs):

- [`PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md) — what this is, audience, stack, owner
- [`ASSUMPTIONS.md`](./docs/ASSUMPTIONS.md) — directional strategy & validation needs
- [`SCOPE.md`](./docs/SCOPE.md) — pages, sections, exclusions, milestones
- [`STRUCTURE.md`](./docs/STRUCTURE.md) — folders, composition rules, theming
- [`TRACKING_PLAN.md`](./docs/TRACKING_PLAN.md) — analytics options & conversion goals
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — GitHub + Vercel runbook

## Deployment

Deploys to **Vercel** with zero config (Next.js preset). See
[`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

---

_Prepared by Broadbrand · Digital Agency. Confidential — prepared for Liquid Lighting (Pty) Ltd._
