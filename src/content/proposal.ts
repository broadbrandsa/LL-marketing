/**
 * Liquid Lighting · Launch Marketing Plan
 * Structured proposal content — single source of truth for all sections.
 * Source: BB-LL-LAUNCH-2026-002 (companion to Year 1 Marketing Calendar BB-LL-CAL-2026-001)
 */

export const meta = {
  client: "Liquid Lighting (Pty) Ltd",
  agency: "Broadbrand · Digital Agency",
  docRef: "BB-LL-LAUNCH-2026-002",
  companionRef: "BB-LL-CAL-2026-001",
  title: "Launch Marketing Plan",
  subtitle: "Year 1 Go-to-Market Strategy",
  tagline: "DESIGN · INNOVATE · ILLUMINATE",
  lede: "A phased digital launch and growth strategy for Liquid Lighting's direct-to-consumer and trade storefront.",
  confidentiality: "Confidential — prepared for Liquid Lighting (Pty) Ltd",
} as const;

export const nav = [
  { id: "summary", label: "Summary" },
  { id: "opportunity", label: "Opportunity" },
  { id: "objectives", label: "Objectives" },
  { id: "audience", label: "Audience" },
  { id: "channels", label: "Channels" },
  { id: "approach", label: "Approach" },
  { id: "measurement", label: "Measurement" },
  { id: "investment", label: "Investment" },
] as const;

/* ── 01 · Executive Summary ──────────────────────────────── */

export const summary = {
  lede: "Liquid Lighting is launching a premium, design-led lighting storefront for South African homes and trade buyers. This plan turns that launch into measured, compounding growth across paid, owned and earned channels.",
  body: [
    "The store goes live on a Shopify foundation with the full product catalogue, lifecycle automation, and search and commerce integrations in place from day one. Marketing launches alongside it as a single coordinated push rather than a scatter of disconnected tactics. Six paid campaigns — three on Google, three on Meta — go live together, supported by search-engine foundations and an email programme.",
    "We launch deliberately. A soft launch opens the doors and proves that tracking, payments and fulfilment work end to end. A 48-hour ramp gate holds paid spend at 30% of cap until every order is verified against real Shopify data. Only then do we scale to a hard launch and full budget. The first twelve weeks are an intensive engagement window where we drive cost-per-acquisition down to target and lock in the cadences that carry the brand through the rest of the year.",
  ],
  stats: [
    {
      value: "6",
      unit: "",
      label: "Launch campaigns",
      detail: "3 Google Ads + 3 Meta Ads, live together on Day 1.",
    },
    {
      value: "48",
      unit: "h",
      label: "Ramp gate",
      detail: "Spend capped until tracking is verified against real orders.",
    },
    {
      value: "12",
      unit: "wk",
      label: "Launch window",
      detail: "Intensive optimisation before steady-state.",
    },
  ],
  focus: [
    {
      title: "Demand capture first",
      body: "Brand and high-intent non-brand search defend revenue we can win immediately, while Performance Max and Meta catalogue ads put the full range in front of ready buyers.",
    },
    {
      title: "Demand creation alongside",
      body: "Meta prospecting with room-by-room lifestyle creative builds awareness and feeds the retargeting and email pools that convert later.",
    },
    {
      title: "Retention by design",
      body: "Always-on Shopify Flows — welcome, abandoned cart, browse abandonment, post-purchase — recover revenue and lift repeat purchase from the first order.",
    },
    {
      title: "Compounding foundations",
      body: "Technical SEO, structured data and a clean product feed make every channel cheaper and more effective over time.",
    },
  ],
} as const;

/* ── 02 · The Opportunity ────────────────────────────────── */

export const opportunity = {
  lede: "South Africans increasingly research and buy lighting online, but the category is fragmented between commodity marketplaces and premium showrooms with little e-commerce presence. That gap is the opening.",
  body: "Lighting is a considered purchase. Buyers care about how a fixture looks, how it makes a room feel, and whether it will last — yet most online options force a trade-off between price and confidence. Liquid Lighting can own the middle ground that is currently underserved: designer quality at a fair price, sold with genuine expertise, delivered nationally and backed by a clear returns promise.",
  pillars: [
    {
      title: "A real catalogue",
      body: "Hundreds of fixtures across pendants, track, downlights, ceiling, outdoor, bathroom and floor lamps — deep enough to be a destination, not a single-product play.",
    },
    {
      title: "Two audiences, one store",
      body: "A direct-to-consumer storefront with a clear path to trade, so homeowner demand and specifier demand are captured on the same platform.",
    },
    {
      title: "Expertise as a moat",
      body: "Guidance on lumens, Kelvin, CRI and IP ratings turns a confusing category into a confident purchase — and into search visibility competitors lack.",
    },
  ],
  competitive:
    "At one end sit large marketplaces competing on price, where lighting is a commodity and advice is absent. At the other sit premium importers and showrooms with strong product but thin digital experiences. Liquid Lighting enters between them with a curated range, a credible brand, and genuine product expertise that answers the questions buyers are already asking. The strategy is not to outspend the marketplaces — it is to out-help them.",
  quote:
    "Win the buyer who is unsure — with the right product, the right price, and the answer to the question they were about to ask.",
  credibility: [
    {
      title: "Free delivery on every order",
      body: "No minimum spend, removing a major barrier at the checkout.",
    },
    {
      title: "30-day returns",
      body: "Removes the biggest barrier to buying lighting unseen.",
    },
    {
      title: "South African dispatch",
      body: "Local stock and local delivery, not long waits on imports.",
    },
    {
      title: "Room-by-room merchandising",
      body: "The store is organised the way people actually shop for light.",
    },
  ],
} as const;

/* ── 03 · Objectives & Success Measures ──────────────────── */

export const objectives = {
  lede: "Year 1 has three jobs: prove the model, drive efficient acquisition, and build the owned audience that makes Year 2 cheaper. Every channel is pointed at one of these — and judged, first, on one number: cost per acquisition.",
  table: [
    {
      objective: "Validate the funnel",
      meaning: "Tracking, payments and fulfilment work end to end before any scaling.",
      measure: "Verified match between ad-platform conversions and real Shopify orders.",
    },
    {
      objective: "Acquire efficiently",
      meaning: "Drive cost-per-acquisition down to target through the engagement window.",
      measure: "CPA vs target; ROAS by campaign; blended new-customer cost.",
    },
    {
      objective: "Grow revenue",
      meaning: "Scale spend only where it pays, across search and social.",
      measure: "Revenue, orders, conversion rate, average order value.",
    },
    {
      objective: "Build the audience",
      meaning: "Convert traffic into an owned email and retargeting asset.",
      measure: "List growth, flow-attributed revenue, returning-customer rate.",
    },
    {
      objective: "Compound organically",
      meaning: "Earn search visibility that lowers paid dependence over time.",
      measure: "Indexed pages, keyword rankings, organic sessions and revenue.",
    },
  ],
  note: "The specific CPA target is agreed against the confirmed media budget and product margins before launch, and reviewed at the end of the engagement window. This plan defines what we measure and how we act on it; the numeric targets live in the live performance dashboard so they stay current.",
  metrics: {
    primary: {
      tier: "Primary",
      tag: "Our north-star metric",
      metric: "CPA",
      heading: "Cost per acquisition",
      body: "The blended cost to acquire a paying customer across all paid channels. Every budget, bid, audience and creative decision is judged first against CPA: we scale what brings it down to target and cut what pushes it up. It is the single number the whole programme is steered by.",
    },
    secondary: {
      tier: "Secondary",
      tag: "The levers",
      heading: "Add to cart · Conversion rate · AOV",
      body: "The economics behind the headline number. Add-to-cart rate shows whether the product and price resonate; conversion rate shows whether the site closes the sale; average order value shows how much each order is worth. When CPA moves, these tell us why — and which lever to pull next.",
    },
    tertiary: {
      tier: "Tertiary",
      tag: "The early indicators",
      heading: "CTR · Landing page views · CPC · Impressions & reach",
      body: "The upper-funnel diagnostics. They move first and fast: click-through rate and cost per click show whether the creative and targeting are earning attention efficiently, and landing-page views confirm that interest is turning into real visits. When CPA drifts, these point to the cause before revenue is affected.",
    },
  },
} as const;

/* ── 04 · Audience ───────────────────────────────────────── */

export const audience = {
  lede: "Two audiences shop the same store with different needs. The messaging, the proof points and the channels flex for each — but the brand stays one brand.",
  primary: {
    label: "Primary · Homeowners & Renovators",
    body: "People furnishing, renovating or refreshing a home. They shop room by room, are guided as much by feel as by spec, and want reassurance that what they choose will look right and last. They respond to lifestyle imagery, clear guidance, and low-risk offers like free delivery and easy returns.",
    points: [
      "Discovery on Meta and Google; research on category and product pages.",
      "Won with room-led merchandising and clear product guidance.",
      "Converted by social proof, delivery and returns confidence.",
    ],
  },
  secondary: {
    label: "Secondary · Trade & Specifiers",
    body: "Interior designers, architects, electricians and contractors specifying lighting for clients. They buy on availability, spec accuracy and repeat reliability. They are reached through high-intent search and accurate product specs, and nurtured toward a trade relationship rather than a one-off sale.",
    points: [
      "Captured on spec-led search (IP ratings, lumens, fittings).",
      "Won with technical depth and a clear trade path.",
      "Nurtured toward a trade relationship over time.",
    ],
  },
  funnel: [
    {
      stage: "Awareness",
      mindset: "I want my space to feel better lit.",
      channels: "Meta prospecting · organic search",
    },
    {
      stage: "Consideration",
      mindset: "Which fixture is right for this room?",
      channels: "Non-brand search · category & product pages",
    },
    {
      stage: "Decision",
      mindset: "Is this the right place to buy it?",
      channels: "Brand search · PMax/Shopping · Meta catalogue · retargeting",
    },
    {
      stage: "Retention",
      mindset: "What else do I need — and will I come back?",
      channels: "Email campaigns · Shopify Flows · review requests",
    },
  ],
} as const;

/* ── 05 · Channel Strategy ───────────────────────────────── */

export const channels = {
  lede: "Four channels, one funnel. Paid search and social capture and create demand; SEO and email compound it.",
  paidSearch: {
    lede: "Google captures buyers at the moment of intent. Three campaigns run from launch, each doing a distinct job, and all governed by the same ramp gate.",
    rows: [
      {
        campaign: "Brand Search",
        tag: "Always-on",
        role: "Defends the “Liquid Lighting” term — the cheapest, highest-intent traffic we can buy. Catches store, pricing and domain queries.",
        optimisation: "Daily pacing review; text-ad RSA rotation.",
      },
      {
        campaign: "Non-brand Search",
        role: "Captures category demand — pendant, track, outdoor, downlights and more — organised one ad group per category.",
        optimisation: "Weekly negative-keyword pass; match-type laddering from phrase/exact to broad as data proves out.",
      },
      {
        campaign: "Performance Max / Shopping",
        role: "Puts the full catalogue in front of ready buyers across Google's surfaces, driven by the Merchant Centre feed.",
        optimisation: "Asset refresh monthly; weekly feed-health check; asset groups split by category.",
      },
    ],
    foundation:
      "Search is launched on a clean foundation: Search Console verified, an XML sitemap submitted, and a validated Merchant Centre product feed. Brand and non-brand are separated so we never pay non-brand prices for brand intent, and the non-brand structure mirrors the store's categories so spend maps directly to merchandising.",
    keywords:
      "We start with controlled phrase and exact match across brand and category ad groups, layering in broad only once the non-brand campaign converts cleanly. A standing negative-keyword list filters out bargain-hunters, DIY and repair intent, automotive and stage lighting, and recruitment queries — so budget stays on buyers.",
  },
  paidSocial: {
    lede: "Meta creates demand and recovers it. Three campaigns work the full funnel — from cold discovery to dynamic catalogue retargeting.",
    rows: [
      {
        campaign: "Prospecting",
        tag: "Cold",
        role: "Reaches new audiences with lifestyle and product-led creative across interests and lookalikes — building the pools the rest of the funnel draws on.",
        cadence: "New creative every 10 days; two concepts at launch, three formats each.",
      },
      {
        campaign: "Retargeting",
        tag: "Warm",
        role: "Brings back site visitors, add-to-cart and view-content audiences with frequency-capped reminders and offer nudges.",
        cadence: "Weekly creative rotation.",
      },
      {
        campaign: "Catalogue / Shop",
        role: "Dynamic product ads pulled from the Meta Commerce feed, with the Shop tab live — showing people the exact products they viewed.",
        cadence: "Weekly catalogue feed-health check.",
      },
    ],
    note: "Creative is the lever on Meta, so it is treated as a pipeline, not a one-off. Lifestyle concepts carry the brand feeling; product-led concepts carry the spec and the offer. Under-performers are pruned on a weekly read and refreshed on cadence so fatigue never sets in. The catalogue and Shop integration mean the product range itself becomes an always-on advertisement.",
    creative: [
      {
        title: "Lifestyle",
        body: "Rooms transformed by light — aspirational, scroll-stopping, brand-building.",
      },
      {
        title: "Product-led",
        body: "Hero fixtures with the offer and the spec — built to convert intent.",
      },
      {
        title: "Dynamic",
        body: "Feed-driven ads that follow the buyer with the exact product they viewed.",
      },
    ],
  },
  seoEmail: {
    lede: "The owned and earned channels are where the launch stops being a campaign and starts being a compounding asset.",
    seo: {
      title: "Search-engine foundations",
      body: "From launch, the site is built to be found: meta titles and descriptions on core pages, structured data on products and key content, an XML sitemap generated and submitted, Search Console verified, and indexing validated. These are not glamorous, but they make every other channel cheaper — better organic visibility means lower paid dependence, and clean structured data means richer search and shopping results.",
    },
    email: {
      title: "Email & lifecycle flows",
      intro:
        "The email programme runs on two tracks. Campaigns — a monthly newsletter — carry seasonal merchandising, new arrivals and offers. Always-on flows run independently and recover revenue automatically:",
      flows: [
        {
          title: "Welcome",
          body: "Introduces the brand and the range to new subscribers, with an A/B test between social-proof and product-led variants.",
        },
        {
          title: "Abandoned cart & browse",
          body: "Recovers shoppers who left before buying — the highest-ROI automation in any store.",
        },
        {
          title: "Post-purchase & review",
          body: "Drives cross-sell, repeat purchase and the reviews that fuel social proof.",
        },
      ],
    },
  },
} as const;

/* ── 06 · The Launch Approach ────────────────────────────── */

export const approach = {
  lede: "We do not pour budget into an unproven funnel. The launch is sequenced so that spend only scales once real orders confirm the tracking is sound.",
  timeline: [
    {
      step: "1",
      when: "Day 1",
      title: "Soft launch",
      body: "Site live. All six paid campaigns on at 30% of cap. Flows live. Soft-launch email to the list.",
    },
    {
      step: "2",
      when: "Day 1–3",
      title: "48-hour ramp gate",
      body: "Spend held at 30% while conversions are verified end-to-end against real Shopify orders. Nothing scales until tracking is proven.",
    },
    {
      step: "3",
      when: "Day 3",
      title: "Scale to full cap",
      body: "With tracking confirmed, campaigns move to full daily cap and optimisation begins in earnest.",
    },
    {
      step: "4",
      when: "Day 8",
      title: "Hard launch",
      body: "Full-list hard-launch email. All campaigns at full budget. The brand is officially open.",
    },
  ],
  gate: {
    title: "Why the ramp gate matters",
    body: "Scaling spend before tracking is verified is the most common — and most expensive — launch mistake. By holding at 30% of cap for the first 48 hours and reconciling every platform conversion against an actual Shopify order, we guarantee that when budget scales, it scales on data we trust. It costs two days; it saves weeks of misattributed spend.",
  },
  day1: [
    "Full Shopify storefront with the product catalogue live and merchandised by room and category.",
    "Six paid campaigns built, approved and live at 30% of cap.",
    "Search Console, Merchant Centre and Meta Commerce connected and validated.",
    "Email platform live with always-on flows firing and the launch campaign scheduled.",
  ],
} as const;

/* ── 07 · Measurement & Optimisation ─────────────────────── */

export const measurement = {
  lede: "Optimisation is a discipline, not an afterthought. The plan builds in a verification gate, a weekly operating rhythm, and a rolling test programme.",
  verification: {
    title: "Trust the numbers before you spend them",
    body: "Before any scaling, every platform conversion is reconciled against a real Shopify order. This is the single most important control in the launch: it ensures the CPA and ROAS figures we optimise toward reflect reality, not double-counted or misfired events.",
  },
  rhythm: [
    {
      title: "Paid",
      body: "Negative-keyword passes, search-term reviews, creative pruning and refresh, budget pacing against target.",
    },
    {
      title: "Owned",
      body: "Newsletter performance reads, flow A/B tests, list segmentation and deliverability checks.",
    },
    {
      title: "Site",
      body: "Product-page tests, cart-drawer tests, page-speed passes, and internal-search relevance reviews.",
    },
  ],
  tests: [
    {
      test: "Cart drawer",
      hypothesis: "A clearer cart reduces drop-off before checkout.",
      window: "Week 4",
    },
    {
      test: "Top product page",
      hypothesis: "Stronger PDP layout lifts conversion on the best-seller.",
      window: "Weeks 5–7",
    },
    {
      test: "Welcome flow",
      hypothesis: "Social-proof intro converts better than product-led.",
      window: "Week 10",
    },
    {
      test: "Meta creative",
      hypothesis: "Continuous: lifestyle vs product-led, format by format.",
      window: "Ongoing",
    },
  ],
  reporting:
    "Performance is tracked in a live dashboard and reviewed monthly with a written read of what changed, why, and what we are doing next. The engagement window closes with a full review and data export that sets the baseline for the rest of the year.",
} as const;

/* ── 08 · Investment ─────────────────────────────────────── */

export const investment = {
  lede: "A focused three-month engagement window — the period where the funnel is proven, acquisition is driven to target, and the cadences that carry the brand are locked in.",
  termMonths: 3,
  currency: "R",
  lines: [
    {
      name: "PPC media spend",
      monthly: 30000,
      detail:
        "Working ad budget across the six launch campaigns — Google (Brand, Non-brand, Performance Max) and Meta (Prospecting, Retargeting, Catalogue). Paid to the platforms; managed against the ramp gate and CPA target.",
      tag: "Media",
    },
    {
      name: "Broadbrand retainer",
      monthly: 30000,
      detail:
        "Campaign build and management, creative production and refresh, SEO foundations, email flows and campaigns, weekly optimisation, and monthly reporting against the live dashboard.",
      tag: "Management & creative",
    },
  ],
  includes: [
    "Six paid campaigns built, launched and managed across Google and Meta",
    "48-hour ramp-gate verification and conversion reconciliation",
    "Creative pipeline — lifestyle, product-led and dynamic, refreshed on cadence",
    "Search Console, Merchant Centre and Meta Commerce setup and validation",
    "Technical SEO foundations and structured data",
    "Email programme — welcome, abandoned cart, browse and post-purchase flows plus monthly campaign",
    "Rolling A/B test programme across site, paid and owned",
    "Live performance dashboard and monthly written review",
  ],
  note: "Figures exclude VAT. PPC media spend is paid directly to the advertising platforms and is fully allocated to working budget. The retainer covers Broadbrand's strategy, build, creative and optimisation. Spend levels are reviewed at the end of the engagement window before moving to steady-state.",
} as const;

/* ── Closing ─────────────────────────────────────────────── */

export const closing = {
  headline: "Let's switch it on.",
  body: "A careful launch, a clear plan, and a year of compounding growth — built to light up South African homes, room by room.",
  ctaPrimary: "Approve & begin",
  ctaSecondary: "Discuss the plan",
} as const;
