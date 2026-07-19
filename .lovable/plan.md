
# Phase C — Remaining pages from the blueprint

Frontend-only, no backend. Forms render + validate but don't persist. Static content lives in `src/content/*` alongside the existing modules. All routes follow the established design system (navy/honey/paper, Fraunces/Inter Tight, `Section` / `PageHero` / `Reveal` primitives) and each defines its own `head()` with unique title/description/og.

## Already built (skip)
Home, BNext AI, How it works, Start + 3 paths, AI in Action (+detail), Stories (+detail), Field Guides (+detail), Insights (+detail), About, Contact, __root 404.

## Pages to build

### Proof & content hubs
- `demos.index.tsx` — Page 12 Demos & Prototypes: gallery of narrated demo cards, "what a demo is / isn't" strip, request-a-walkthrough CTA.
- `signal.index.tsx` — Page 17 BNext Signal: newsletter hub, latest issue teaser, past-issues list, signup form (no persist).
- `signal.$issue.tsx` — Page 17A issue template.
- `events.index.tsx` — Page 18: upcoming + past events grid, filter by type (briefing, workshop, cohort kickoff).
- `events.$slug.tsx` — Page 19 event detail template with RSVP form stub.

### Trust
- `team.tsx` — Page 21 Team & Advisors: leadership + advisor grid, bios, roles.
- `partners.tsx` — Page 22 Partners & Referrals: partner logos/tiers, "refer a business" form stub.
- `vendor-network.tsx` — Page 23: how the network works, categories, participation rules.
- `vendors.apply.tsx` — Page 24 Become a Vendor: application form (react-hook-form + zod, no submit).

### Conversion & state
- `eligibility.tsx` — Page 25 Eligibility & FAQ: fit criteria, expandable FAQ.
- `apply.index.tsx` — Page 26 Program EOI: multi-section form (business, stage, use-case hypothesis, stakeholders) — validates only.
- `apply.confirmation.tsx` — Page 28: post-submit state page (reachable via router state / direct URL).
- `start.results.tsx` — Page 27 Personalized Readiness Result: reads answers from query params written by existing `start.index.tsx` check, renders recommended path + next actions.

### Participant area (visual stubs)
- `participants.index.tsx` — Page 30 sign-in form UI, "auth coming soon" note.
- `participants.dashboard.tsx` — Page 31 dashboard shell with placeholder journey/artifact cards.

### Campaign templates (one representative instance each)
- `sectors.$sector.tsx` — Page 32 with one seeded sector (e.g. `manufacturing`).
- `referral.$partner.tsx` — Page 33.
- `campaign.$campaign.tsx` — Page 34.

### Utility & legal
- `search.tsx` — Page 35: client-side filter over static content (use-cases, guides, insights, stories).
- `privacy.tsx`, `terms.tsx`, `accessibility.tsx`, `cookies.tsx` — Pages 37–40 long-form legal templates using shared `LegalLayout`.
- Page 36 (404) already handled in `__root.tsx`.

## Shared additions
- `src/content/team.ts`, `src/content/events.ts`, `src/content/signal.ts`, `src/content/partners.ts`, `src/content/vendors.ts`, `src/content/demos.ts`, `src/content/faq.ts` — typed arrays seeded from blueprint copy.
- `src/components/site/LegalLayout.tsx` — shared TOC + prose wrapper for legal pages.
- `src/components/site/FormField.tsx` — small wrapper over shadcn inputs for the EOI / vendor / referral / RSVP forms.
- Extend `SiteHeader` / `SiteFooter` nav with Demos, Signal, Events, Team, Partners, Eligibility, Apply, Legal.

## Out of scope (deferred)
- Real form persistence, auth, dashboard data — waits for Lovable Cloud.
- Full library of sector/referral/campaign instances (only one seed each).
- Full Signal / Events / Demos content — placeholder entries with blueprint copy.

## Verification
After build: typecheck clean; Playwright screenshot Apply, Eligibility, Events, Signal, Team, and one legal page at 1280×1800 to confirm tokens and hierarchy.
