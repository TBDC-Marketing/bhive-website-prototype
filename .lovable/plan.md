
# The BHive Website — Phase A + B Plan

Frontend-only build using the blueprint's written visual/motion system. Figma will be layered in later once Lovable Desktop MCP is connected — the design tokens defined here will be adjusted at that point.

## Scope

**Phase A (foundation):**
- Home (`/`)
- BNext AI program (`/bnext-ai`)
- How BNext Works (`/how-it-works`)
- About The BHive (`/about`)
- Contact (`/contact`)
- Global header, footer, sticky route CTA, Beacon concierge stub

**Phase B (three doors + proof system):**
- Find Your Starting Point / Readiness Check (`/start`)
- New to AI (`/paths/new`)
- Experimenting with AI (`/paths/experimenting`)
- Ready to Implement (`/paths/ready`)
- AI in Action / Use-Case Library (`/use-cases`) + detail template (`/use-cases/$slug`)
- Client Stories (`/stories`) + detail (`/stories/$slug`)
- Field Guides (`/field-guides`) + detail (`/field-guides/$slug`)
- Insights (`/insights`) + detail (`/insights/$slug`)

Forms (EOI, Readiness, Contact) render and validate but do not persist — backend deferred.

## Design system

Establish in `src/styles.css` before pages:
- Palette: institutional navy + honeycomb amber accent, warm off-white paper, ink black. All via oklch tokens.
- Typography: distinctive serif display + clean grotesk body (e.g. Fraunces / Inter Tight) loaded via `<link>` in `__root.tsx`.
- Radius, elevation, and a `--gradient-honey` + `--shadow-frame` for section framing.
- Motion primitives via framer-motion: section reveal, sticky-CTA slide-in, hex-grid hover.

## Information architecture

```
src/routes/
  __root.tsx           (header, footer, sticky CTA, meta)
  index.tsx            Home
  bnext-ai.tsx
  how-it-works.tsx
  start.tsx            Readiness check
  paths.new.tsx
  paths.experimenting.tsx
  paths.ready.tsx
  use-cases.tsx
  use-cases.$slug.tsx
  stories.tsx
  stories.$slug.tsx
  field-guides.tsx
  field-guides.$slug.tsx
  insights.tsx
  insights.$slug.tsx
  about.tsx
  contact.tsx
```

Each route defines its own `head()` with unique title/description/og. Detail routes derive og from loader data.

## Content strategy

Use-cases, stories, field guides, insights are static TS content modules under `src/content/` (typed arrays). This keeps Phase B shippable without a CMS and swaps cleanly to Lovable Cloud later.

## Shared components (`src/components/`)

- `SiteHeader`, `SiteFooter`, `StickyRouteCTA`, `BeaconStub`
- `Hero`, `PromiseBlock`, `RouteCard` (three-door), `ProofStrip`, `UseCaseCard`, `StoryCard`, `GuideCard`, `InsightCard`
- `ReadinessCheck` (multi-step client form, results routed to `/paths/*`)
- `EOIForm`, `ContactForm` (react-hook-form + zod, no submit backend)
- `SectionReveal` motion wrapper

## Copy source

Pull verbatim headlines, promises, and section copy from the blueprint's Page 01–19 sections. No lorem ipsum.

## Out of scope this plan
- Vendor network, events, team, participant sign-in, dashboard, sector/partner/campaign landing templates, search, legal pages (Phase C + later)
- Real form persistence, auth, CMS
- Figma-derived pixel matching (revisit once desktop MCP is live)

## Verification

After build: check console/network clean, screenshot Home + BNext AI + one path page + one detail template via Playwright at 1280×1800 to confirm hierarchy and tokens.

## Follow-ups after approval
1. Set up Lovable Desktop + Figma Dev Mode MCP so I can pull tokens/frames.
2. Phase C: forms → Lovable Cloud, participant auth, dashboard, remaining templates.
