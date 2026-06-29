# Tracking Plan

This proposal site ships **without analytics by default** (it is a private,
`noindex` sales document). This document is the plan for adding measurement if and
when it is wanted — for example, to see whether the client opened and engaged with
the proposal.

> Note: this is tracking for the **proposal website itself**, not the marketing
> measurement framework described in the proposal's "Measurement & Optimisation"
> section (that lives in the client's live performance dashboard).

## 1. Google Analytics (placeholder)

Add GA4 via the official Next.js integration.

```bash
pnpm add @next/third-parties
```

```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";

// inside <html>…</html>, after {children}:
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
```

- Env var: `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXX`) — set in Vercel project settings.
- Leave unset to keep tracking off.

## 2. Event tracking (placeholder)

Recommended events for a proposal page:

| Event                | Trigger                                   |
| -------------------- | ----------------------------------------- |
| `view_section`       | A section scrolls into view (reuse the `Reveal` observer) |
| `cta_click`          | "Read the plan" / "See the investment" clicked |
| `investment_view`    | Investment section reaches the viewport   |
| `approve_click`      | "Approve & begin" mailto clicked          |
| `discuss_click`      | "Discuss the plan" mailto clicked         |
| `scroll_depth`       | 25 / 50 / 75 / 100% page depth            |

Implementation sketch (GA4):

```ts
declare global { interface Window { gtag?: (...a: unknown[]) => void } }
export const track = (name: string, params: Record<string, unknown> = {}) =>
  window.gtag?.("event", name, params);
```

Wire `track("cta_click", { label })` into the CTA `onClick`s, and emit
`view_section` from the `Reveal` IntersectionObserver callback.

## 3. Form submission tracking (placeholder)

The CTAs are currently `mailto:` links (no form). If a contact/approval form is
added later (e.g. a Server Action or a form provider):

- Fire `approve_submit` / `discuss_submit` on successful submission.
- Track validation errors as `form_error` with a `field` param.
- If using a third-party form (Formspree, Basin, etc.), set its webhook to forward
  to the team and mirror the conversion into GA4.

## 4. Vercel Analytics (recommended, zero-config)

Privacy-friendly, no cookie banner needed — the lightest option for this use case.

```bash
pnpm add @vercel/analytics @vercel/speed-insights
```

```tsx
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// before </body>:
<Analytics />
<SpeedInsights />
```

Enable **Web Analytics** and **Speed Insights** in the Vercel project dashboard.

## 5. Conversion goals (placeholder)

Define these once analytics is live:

| Goal                     | Definition                                  | Why it matters |
| ------------------------ | ------------------------------------------- | -------------- |
| **Proposal opened**      | First `page_view`                           | Client engaged |
| **Reached investment**   | `investment_view` fired                     | Read the commercials |
| **Deep read**            | `scroll_depth = 100` or ≥4 `view_section`   | Serious consideration |
| **Approval intent**      | `approve_click` / `approve_submit`          | Primary conversion |
| **Discussion intent**    | `discuss_click` / `discuss_submit`          | Secondary conversion |

## Privacy

- Default state: **no tracking, no cookies** — appropriate for a confidential B2B proposal.
- If analytics is added, prefer **Vercel Analytics** (cookieless) over GA4 to avoid
  a consent banner. If GA4 is required, add a consent mechanism.
- Keep `robots: noindex, nofollow` (already set in `layout.tsx`) regardless.
