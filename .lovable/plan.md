
# BHive / BNext AI v2 rebuild

Implements `instructions.md` in the phase order given. Phase 1 lands before any restyling; Phase 3 tokens land before Phases 4–5 page work.

## Ground rules applied everywhere
- Three ICPs (New to AI / Experimenting / Ready to implement) with the exact CTAs from §0.1.
- Single geography line: "For established Ontario businesses; delivered in person in Brampton (Peel Region)." Reused via one constant in `src/content/site.ts`.
- No unsourced numbers. Only the three stats in §7.2 render, each with a source line.
- No simulated form success; no client-generated reference numbers.
- No staging words ("Phase C", "provisional", "preview", "CMS-managed", etc.) in rendered copy.
- One dominant primary CTA per viewport. Route pages → `/apply?route=…`; discovery → `/start`.
- WCAG 2.2 AA: focus states, semantic labels, error summaries, `prefers-reduced-motion`, keyboard-complete quiz/forms.

## Phase 1 — Launch safety (P0, no restyling)

1. **Shared form service** (`src/lib/forms/`): one `submitForm()` helper wrapping a TanStack Start server function that POSTs to `process.env.INTAKE_WEBHOOK_URL` with server-side Zod validation, consent timestamp + policy version, honeypot, idempotency key, server-generated confirmation id, and analytics events (metadata only, never form contents). If the env var is unset, the helper returns a `disabled` result; every form renders the fallback: *"Applications open soon — email bnextai@thebhive.ca."* No fake success states anywhere.
2. Route every form through it: `/apply`, `/contact`, event reservations, `/vendors/apply`, partner + referral forms, footer newsletter. Remove `/apply`'s client-side random reference number; `/apply/confirmation` renders only after a server ack (guard via search-param token or router state set by the submit response). Delete the "save and return" line unless a real draft-token flow is added — plan is to delete.
3. **Events real status** (`src/content/events.ts`, `events.index.tsx`, `events.$slug.tsx`): compute `upcoming`/`past` from event date + timezone at render; keep manual override only for `cancelled`/`postponed`. Past pages show "This event has ended," no reservation form. Fix Decision Room "Hybrid · Hybrid" dedupe. Fix "You'll leave able to name the one workflow worth changing first."
4. **Delete staging/placeholder content**:
   - Home + About: remove "Provisional legacy proof" boxes and reconciliation notes; remove broken overlapping-numerals grid.
   - `/bnext-ai`: remove the "Final delivery hours…CMS-managed" line.
   - `/team`: unpublish (remove from nav, redirect to `/about`) until real bios/photos land.
   - `/partners`: remove placeholders; if kept, group as funders / delivery / referral / vendors.
   - `/stories`: replace index with a designed "First cohort stories are being documented now" panel; hide detail routes.
   - `/demos`: hide from nav and routing.
   - Field guides: hide any guide whose worksheet doesn't exist yet (drive by `status` on record).
   - `/signal`: merge into Insights; delete `/signal` routes.
   - `/participants` + `/participants/dashboard`: delete until auth exists.
   - `/campaign/*`: remove Punjabi campaign.
   - `/sectors/$sector`: real not-found for unknown sectors.
   - Verify production build has no Lovable badge/dev overlays.
5. **Geography pass**: single constant applied to home meta, announcement bar, About, `/eligibility`, FAQ, `/apply`, route pages, `bnext-ai.tsx` fit list.

## Phase 2 — Global UX defects

- **U1 Reveal**: rewrite `Reveal` in `primitives.tsx` — above-the-fold heroes render fully static; other uses animate opacity only (0.25s, `viewport={{ margin: "0px", amount: 0.1 }}`), decorative only, honor `prefers-reduced-motion`.
- **U2 StickyRouteCTA**: hide on `/apply`, `/contact`, `/start*`, and any form page; on other pages, appear only after hero scroll, add `pb-24` safe space where present; never duplicate a CTA already visible.
- **CTA dedupe on home**: keep header button + hero primary; announcement-bar links become contextual, not CTAs; sticky per U2.
- **`/bnext-ai` comparison table**: desktop keeps the table with tinted recommended column + row hover; mobile swaps to three route cards/accordions.
- **`/apply` mobile**: compact progress bar + "Step 2 of 6 — Starting point" label; keep vertical rail desktop-only.
- **`/start` quiz**: add Back + restart; show "Why this route" derived from answers; carry result into route pages and `/apply` via `?route=` and `?score=` params; rename modes to **"Choose in one click"** / **"Answer 5 questions"**; give the quiz equal/primary visual weight; delete `start.results.tsx` if redundant (fold into `/start`).
- **`/search`**: start empty with suggested resources; add to nav as an intentional feature (Resources dropdown).
- **`/ai-in-action`**: remove Marketing + IT filter chips until content exists.
- **Events grid**: `items-stretch`, equal-height cards, proper 2/3-col.
- **Header nav**: simplify to **Program · How it works · AI in action · Resources · About**. Resources = dropdown/menu (field guides, insights, events, stories-when-live). Mobile toggle `aria-label` toggles "Open menu"/"Close menu".
- **Announcement bar**: site-wide, above header, dismissible (persist dismiss in `localStorage` behind `useHydrated`).

## Phase 3 — BNEXT design system

- **Tokens** in `src/styles.css`: replace paper/navy/serif system with the palette in §3.1 (black, text-dark, white, pale, yellow, amber, yellow-soft, sky, sky-tint, blue-deep + three gradients). Verify exact values against Figma frame child nodes before committing.
- **Typography**: drop Fraunces. Adopt Inter Tight as the geometric grotesque (until Helvetica Now is licensed); light-weight sentence-case headlines, tight leading; letterspaced uppercase micro-labels are the only all-caps; large stat numerals; a responsive type scale (no arbitrary `text-[8rem]`). Delete `signal-underline` and all honeycomb-hex logo styling. Add global visible focus + reduced-motion rules.
- **Primitives** in `src/components/site/primitives.tsx` + new files: `SplitHero`, `DarkBrandBand`, `RouteCard`, `MetricGrid` + `StatTile` (source line is a required prop), `ProcessSteps`, `SectorMosaic`, `PhotoCTA`, `ProofBand`, `HelixMotif` (uses official exported assets only), `MicroLabel` (replaces `Eyebrow`), `CTAButton` variants `solid-dark` / `outline` / `yellow`.
- **Chrome**: black header with BNEXT/BHive lockup, compact pill nav desktop, one persistent CTA. Footer becomes the yellow band with black text: logos, descriptor, address/phone/email, socials, FedDev Ontario logo, legal links, newsletter (wired to Phase 1 service).
- **Content model**: extend records in `src/content/*.ts` with `status`, `publishAt`, `unpublishAt`, `reviewedAt`, `source`, `audience`, `route`; events add `registrationStatus`, `capacity`, `waitlist`, `timezone`, `accessibility`; stories add `evidenceStatus`. Renderers filter by status/dates — this is what enforces Phase 1.3 going forward.

## Phase 4 — Homepage rebuild (`src/routes/index.tsx`)

Compose in order per §4:
1. `SplitHero` with the H1 + lede + CTAs from §4.1.
2. Three `RouteCard`s with the ICP recognition + CTAs from §0.1; eyebrow "Where are you today?".
3. Trust strip: Free · Government-funded · Vendor-neutral · Brampton in-person.
4. `DarkBrandBand` "Meet BNext AI" → `/bnext-ai`.
5. `MetricGrid` with only the three approved stats + source lines.
6. `ProcessSteps` Choose → Prove → Implement, "the detailed six stages" link → `/how-it-works`.
7. "What you leave with" by ICP — 3 short columns.
8. Six use-case cards from `ai-in-action`, filterable by route; intro "Examples of workflows — not guaranteed results."
9. `SectorMosaic` with the six sectors + "& You" → `/sectors/$sector`.
10. Existing dark "No catch. Here is the model." band, copy verbatim.
11. `PhotoCTA` "Now it's your turn" → `/apply`, micro-label "TO THE POWER OF AI", oversized BNEXT wordmark moment.
12. Yellow footer.

Move BHive history to `/about`. Fix home meta to the geography line.

## Phase 5 — Page-by-page

- **`/bnext-ai`**: route cards (with 14/20/30 guided hours + required roles) before the six-step model; rename "Artifacts" → "What your business leaves with"; mobile cards/accordion; add "vendor introductions occur only after requirements are defined". Ask stakeholder whether "four focused weeks" applies to all three routes before publishing; until then, drop the phrase.
- **`/how-it-works`**: replace "A prototype is not adoption." with the positive promise; lead with Choose/Prove/Implement, six stages become detail layer with plain-terms summaries; add one worked example using `call-summary-followup`.
- **`/start` + routes**: quiz changes above; route pages reordered "You are likely here because… → What we will do together → What you will leave with → Who needs to participate → Time commitment → Next step (`/apply?route=…`)". Fix `start.new-to-ai.tsx` hero CTA self-link. All route primary CTAs → `/apply`. New-to-AI: minimal jargon + one concrete outcome with numbers. Experimenting/Ready: keep flagged copy verbatim.
- **`/eligibility`**: five fast qualification criteria before the FAQ; keep accordion; add what "free" includes and that later technology costs are not included; geography line.
- **`/apply` + confirmation**: prepopulate route/readiness from `/start` params; strengthen privacy context beside data-risk questions; mobile progress; keep reassurance notes; confirmation is post-ack only.
- **`/ai-in-action` + detail**: intro line added; shorten long card titles; remove empty filters; detail pages add "Why this is a good first use", "What can go wrong", and a route CTA matched to `bestStart`.
- **Resources hub** at `/resources` linking field guides, insights, events, stories; apply publish/hide rules.
- **`/about`**: BHive role, why BNext AI exists, funded/vendor-neutral model; don't repeat H1; timeline stays; sourced numbers only.
- **`/team`, `/partners`, `/vendor-network`, `/vendors/apply`**: hide from nav until real. Add short "vendor network coming" note on `/bnext-ai`.
- **`/contact`**: routes Program / Partnership / Accessibility / Media / Vendor; wire via form service; show expected response time.
- **Legal**: pass review-date, eligibility, privacy, cookie, accessibility, analytics-consent, third-party processor language; flag counsel-required items in a TODO comment rather than inventing.

## Phase 6 — QA

Manual + Playwright pass at 360 / 390 / 768 / 1024 / 1280 / 1440 px against the §6 checklist. Typecheck + Lighthouse ≥90 perf/a11y. Fix all §7.1 known bugs during Phases 1–2.

## Technical notes

- Forms need a webhook. Plan uses `INTAKE_WEBHOOK_URL` server env; without it, fallback copy renders. **Question for approval:** you said backend is off — is a single webhook URL OK, or should every form show the email fallback for now? Default plan: env-gated; fallback if unset.
- No Lovable Cloud is enabled by this plan (per your earlier "frontend only"). Persistence would require enabling Cloud later.
- Fonts: Inter Tight (Google Fonts) via `<link>` in `__root.tsx` per Tailwind v4 rules. Helvetica Now only if you supply a license.
- Assets: helix + BNEXT wordmark + FedDev logo pulled from thebhive.ca URLs listed in §3.2 via `lovable-assets create`; no hand-drawn marks.

## Out of scope (call out explicitly)

- Real auth / participant dashboard (routes deleted for launch).
- Real CMS (structured typed collections instead).
- Signal newsletter workflow (folded into Insights).
- Demos route (hidden until a demo exists).
- Punjabi campaign (removed until language review).
- Any statistic not in §7.2.
