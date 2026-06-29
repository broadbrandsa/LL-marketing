# Deployment

This is a standard, self-contained Next.js 16 app. It deploys to Vercel with
zero configuration — no `vercel.json` is needed.

## Prerequisites

- Node.js ≥ 20 (built and verified on Node 22)
- pnpm ≥ 10
- A GitHub account and a Vercel account

## 1. GitHub repository setup

From the project root (`liquid-lighting-proposal/`):

The repository is **https://github.com/broadbrandsa/LL-marketing**.

```bash
# A git repo is already initialised by create-next-app.
git add -A
git commit -m "Liquid Lighting launch proposal site"

# Point at the Broadbrand repo and push:
git remote add origin https://github.com/broadbrandsa/LL-marketing.git
git branch -M main
git push -u origin main
```

> If this folder lives inside a parent directory that has its own git repo, push
> **this folder** as its own repository, or point Vercel's **Root Directory** at it
> (see below).

## 2. Vercel project setup

**Option A — Dashboard (recommended)**

1. Go to vercel.com → **Add New… → Project**.
2. Import the `liquid-lighting-proposal` GitHub repo.
3. Vercel auto-detects the settings below. Confirm and **Deploy**.

**Option B — CLI**

```bash
pnpm dlx vercel        # first run: links/creates the project (preview deploy)
pnpm dlx vercel --prod # production deploy
```

## 3. Build & framework settings

These are Vercel's auto-detected defaults — leave them unless noted:

| Setting              | Value                          |
| -------------------- | ------------------------------ |
| Framework preset     | **Next.js**                    |
| Root directory       | **project root** (`./`) — or `liquid-lighting-proposal` if the repo is a parent monorepo |
| Install command      | `pnpm install`                 |
| Build command        | `pnpm build` (default `next build`) |
| Output directory     | **leave blank** (Next.js managed) |
| Node.js version      | 20.x or 22.x                   |

Do **not** add a `vercel.json` unless a specific override is required.

## 4. Environment variables

None are required to build or run this site today. Add these **only** if you
enable the optional features in `TRACKING_PLAN.md`:

| Variable             | Used for                    | Where |
| -------------------- | --------------------------- | ----- |
| `NEXT_PUBLIC_GA_ID`  | Google Analytics 4          | Vercel → Project → Settings → Environment Variables |

Manage them in **Vercel → Project → Settings → Environment Variables**, scoped to
Production / Preview / Development as appropriate. Never commit secrets to git.

## 5. How to redeploy

- **Automatic:** every push to `main` triggers a production deploy; every push to
  another branch or PR gets a unique **preview** URL.
- **Manual (dashboard):** Project → Deployments → ⋯ → **Redeploy**.
- **Manual (CLI):** `pnpm dlx vercel --prod`.

## 6. Custom domain (optional)

Vercel → Project → Settings → **Domains** → add the domain and follow the DNS
instructions. A subdomain like `liquid-lighting.broadbrand.co.za` works well for a
client proposal.

## 7. Local development

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build (run before pushing if unsure)
pnpm lint      # ESLint
```

## Privacy note

The site is set to `noindex, nofollow` (see `src/app/layout.tsx`), so it will not
appear in search engines. Share it via the direct Vercel URL or a custom domain.
For stronger gating, add Vercel **Password Protection** (Pro) or
**Deployment Protection** in the project settings.
