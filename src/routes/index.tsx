import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section, StatRow } from "../components/site/primitives";
import { useCases } from "../content/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The BHive — Brampton's business accelerator, home of BNext AI" },
      {
        name: "description",
        content:
          "From AI curiosity to AI working in your business. The BHive's BNext AI program helps established Peel businesses adopt AI with evidence.",
      },
      { property: "og:title", content: "The BHive — home of BNext AI" },
      {
        property: "og:description",
        content:
          "One program. Three starting points. A clear way forward on AI for Ontario businesses.",
      },
    ],
  }),
  component: HomePage,
});

const routes = [
  {
    tag: "New to AI",
    body: "You know AI matters. You do not yet know where it belongs in the business.",
    outcome: "One useful, low-risk workflow in use.",
    cta: "See the first-win route",
    to: "/start/new-to-ai" as const,
  },
  {
    tag: "Experimenting",
    body: "Your team has tried tools. The value is still hard to prove.",
    outcome: "One validated use case and a signed business case.",
    cta: "Build the business case",
    to: "/start/experimenting" as const,
  },
  {
    tag: "Ready to implement",
    body: "You have urgency, a real problem, and perhaps budget. You need the right route and partner.",
    outcome: "A tested production candidate and governed rollout plan.",
    cta: "Talk through the implementation",
    to: "/start/ready-to-implement" as const,
  },
];

const artifacts = [
  "A plain-language use-case brief",
  "A workflow and data map",
  "A value and feasibility score",
  "A risk and governance record",
  "A buy/build/stop decision",
  "A tested workflow or proof",
  "A named owner and 30/60/90-day plan",
];

const stages = ["Orient", "Define", "Route", "Prepare", "Prove", "Run"];

function HomePage() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-2.5 text-xs">
          <p>
            <span className="text-honey">BNext AI</span> is now accepting expressions of
            interest from eligible Ontario businesses.
          </p>
          <Link to="/start" className="underline underline-offset-4 hover:text-honey">
            Find your starting point →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <Reveal>
            <Eyebrow>
              The BHive · Brampton's business accelerator and innovation hub
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-5xl font-display text-6xl leading-[0.98] md:text-[8rem]">
              A hive is where <span className="signal-underline">work</span> gets done.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              The BHive helps business owners turn consequential ideas into practical
              progress. Today, that work leads with{" "}
              <span className="text-ink font-medium">BNext AI</span>—our signature program
              guiding established businesses from AI curiosity to adoption and measurable
              value.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton to="/start">Find your starting point</CTAButton>
              <CTAButton to="/bnext-ai" variant="ghost">
                Explore BNext AI
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-16 border-t border-border/60 pt-6">
              <StatRow
                items={[
                  "Built in Brampton",
                  "Practical guidance",
                  "Trusted networks",
                  "Government-supported programming",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature program — ink field */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow text-honey">BNext AI · Signature program</p>
          </Reveal>
          <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <h2 className="font-display text-5xl leading-[1.05] md:text-6xl">
                  Put AI to work.{" "}
                  <span className="text-honey">Start with the right move.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
                  AI is easy to try and hard to evaluate. BNext AI gives owners and
                  operating teams a clear route: choose one valuable workflow, test the
                  case and the risk, and leave with evidence, ownership, and a practical
                  implementation plan.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-paper/60">
                  <span>Free to participating businesses</span>
                  <span>·</span>
                  <span>Government-funded</span>
                  <span>·</span>
                  <span>Vendor-neutral</span>
                  <span>·</span>
                  <span>In person in Brampton</span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10">
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
                  >
                    See how BNext AI works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <aside className="md:col-span-5">
                <div className="rounded-sm border border-honey/30 bg-paper/[0.03] p-8">
                  <p className="eyebrow text-honey">The route</p>
                  <ol className="mt-6 space-y-4">
                    {stages.map((s, i) => (
                      <li key={s} className="flex items-center gap-4">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-honey/40 text-xs text-honey">
                          {i + 1}
                        </span>
                        <span className="font-display text-2xl">{s}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6 border-t border-paper/10 pt-4 text-xs text-paper/60">
                    Orient → Define → Route → Prepare → Prove → Run
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The problem */}
      <Section bg="paper">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-6xl">
            AI is not the risk. <span className="signal-underline">Guessing is.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Buying a tool before defining the workflow. Running experiments without a
            success measure. Choosing a vendor before deciding what good looks like. Those
            are expensive ways to learn.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The BHive built BNext AI to give the decision a structure.
          </p>
        </Reveal>
      </Section>

      {/* Sort yourself — three doors */}
      <Section bg="muted">
        <Reveal>
          <Eyebrow>Sort yourself</Eyebrow>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">Start where you are.</h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal key={r.tag} delay={i * 0.05}>
              <Link
                to={r.to}
                className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-paper p-8 transition-all hover:border-ink hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]"
              >
                <div>
                  <p className="eyebrow text-honey-deep">{r.tag}</p>
                  <p className="mt-4 text-lg text-ink">{r.body}</p>
                  <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-ink">Route outcome:</span>{" "}
                    {r.outcome}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-honey-deep">
                  {r.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Artifacts */}
      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>Artifacts</Eyebrow>
              <h2 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
                Leave with work your business can use.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border">
              {artifacts.map((a, i) => (
                <Reveal key={a} delay={i * 0.03}>
                  <li className="flex items-center gap-6 py-5">
                    <span className="font-display text-3xl text-honey-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg">{a}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* AI in action preview */}
      <Section bg="muted">
        <Reveal>
          <Eyebrow>AI in action</Eyebrow>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-5xl leading-[1.05] md:text-6xl">
              See where AI already fits.
            </h2>
            <Link
              to="/ai-in-action"
              className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Explore the use-case library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.slice(0, 6).map((u, i) => (
            <Reveal key={u.slug} delay={i * 0.04}>
              <Link
                to="/ai-in-action/$slug"
                params={{ slug: u.slug }}
                className="group block h-full rounded-sm border border-ink/10 bg-paper p-6 transition-all hover:border-ink"
              >
                <p className="eyebrow text-honey-deep">{u.function}</p>
                <p className="mt-3 text-lg leading-snug text-ink">{u.title}</p>
                <p className="mt-4 text-sm text-muted-foreground">{u.outcome}</p>
                <p className="mt-6 border-t border-border pt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  Best start · {u.bestStart}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Legacy */}
      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow>The BHive legacy</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Before we helped businesses adopt AI, we helped people build them.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg text-muted-foreground">
                The BHive opened in downtown Brampton in 2022, in partnership with the
                City of Brampton. Through Brampton Next and the Global Entrepreneur
                Incubation Program, founders from around the world found practical
                education, direct guidance, a place to build, and a trusted network.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Those programs have concluded. Their playbook lives on in BNext AI:
                practical education over theory, one-to-one guidance that respects the
                owner's time, and a network built on fit and trust.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8">
                <CTAButton to="/about" variant="ghost">
                  About The BHive
                </CTAButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="md:col-span-6">
              <div className="rounded-sm border border-ink/10 bg-muted p-8">
                <p className="eyebrow text-honey-deep">Provisional legacy proof</p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {[
                    ["100+", "startups"],
                    ["17", "countries"],
                    ["50+", "alumni"],
                  ].map(([n, l]) => (
                    <div key={l as string}>
                      <p className="font-display text-4xl text-ink md:text-5xl">{n}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-muted-foreground">
                  Retired-site figures. Subject to leadership reconciliation with strategy
                  materials.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Trust */}
      <Section bg="ink">
        <Reveal>
          <Eyebrow>Trust</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] md:text-6xl text-paper">
            No catch. Here is the model.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">
            BNext AI is funded to help local businesses make better AI decisions. The
            program is free to participating companies. The BHive does not earn vendor
            commissions from a participant's technology decision, and a purchase is not
            the program's measure of success. Sometimes the right answer is to build.
            Sometimes it is to buy. Sometimes it is to stop.
          </p>
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            You do not need the whole map. You need the right next move.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg">
            Answer a few practical questions. BNext AI will show you the route that fits
            your business now.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <CTAButton to="/start">Find your starting point</CTAButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
