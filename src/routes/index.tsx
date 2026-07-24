import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CTAButton,
  DarkBrandBand,
  Eyebrow,
  MetricGrid,
  Reveal,
  Section,
  SplitHero,
} from "../components/site/primitives";
import { useCases } from "../content/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The BHive — Brampton's business accelerator, home of BNext AI" },
      {
        name: "description",
        content:
          "From AI curiosity to AI working in your business. BNext AI helps established Peel businesses adopt AI. Free, in person, vendor-neutral.",
      },
      { property: "og:title", content: "The BHive — Brampton's business accelerator, home of BNext AI" },
      {
        property: "og:description",
        content:
          "From AI curiosity to AI working in your business. BNext AI helps established Peel businesses adopt AI. Free, in person, vendor-neutral.",
      },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://bhive-bnextai-preview.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "The BHive",
          url: "https://bhive-bnextai-preview.lovable.app/",
          description:
            "Brampton's business accelerator and innovation hub, home of the BNext AI program.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "8 Nelson St W, 6th Floor",
            addressLocality: "Brampton",
            addressRegion: "ON",
            postalCode: "L6X 1B7",
            addressCountry: "CA",
          },
          telephone: "+1-647-632-1072",
          email: "bnextai@thebhive.ca",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "The BHive",
          url: "https://bhive-bnextai-preview.lovable.app/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://bhive-bnextai-preview.lovable.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const routes = [
  {
    tag: "New to AI",
    body: "You know AI matters, not where it fits.",
    outcome: "One low-risk workflow in use.",
    cta: "See the first-win route",
    to: "/start/new-to-ai" as const,
  },
  {
    tag: "Experimenting",
    body: "Tools in use, value unproven.",
    outcome: "A validated use case and signed business case.",
    cta: "Build the business case",
    to: "/start/experimenting" as const,
  },
  {
    tag: "Ready to implement",
    body: "A real problem and urgency.",
    outcome: "A tested production candidate and rollout plan.",
    cta: "Talk through the implementation",
    to: "/start/ready-to-implement" as const,
  },
];

const artifacts = [
  "Use-case brief and workflow map",
  "Value and risk scores",
  "Buy/build/stop decision",
  "Tested workflow or proof",
  "Named owner and 30/60/90-day plan",
];

const stages = ["Orient", "Define", "Route", "Prepare", "Prove", "Run"];

function HomePage() {
  return (
    <>
      <SplitHero
        eyebrow="The BHive · Home of BNext AI"
        title={
          <>
            From AI curiosity to <span className="signal-underline">AI working</span> in your business.
          </>
        }
        lede={
          <>
            A guided program for established Peel businesses. Pick one workflow, test it
            with evidence, and leave with a plan you own.
          </>
        }
        ctas={
          <>
            <CTAButton to="/start">Find your starting point</CTAButton>
            <CTAButton to="/bnext-ai" variant="ghost">
              Explore BNext AI
            </CTAButton>
          </>
        }
        aside={
          <div className="rounded-sm border border-ink bg-honey p-8">
            <p className="eyebrow text-ink">Free · In person in Brampton · Vendor-neutral</p>
            <p className="mt-6 font-display text-3xl leading-tight text-ink">
              Delivered in person in Brampton for established Ontario businesses.
            </p>
            <p className="mt-6 border-t border-ink/20 pt-4 text-xs uppercase tracking-widest text-ink/70">
              Supported by FedDev Ontario
            </p>
          </div>
        }
      />

      {/* Three ICP routes — front and center */}
      <Section bg="paper">
        <Reveal>
          <Eyebrow>Three routes · Start where you are</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
            Pick the route that fits today.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {routes.map((r, i) => (
            <Reveal key={r.tag} delay={i * 0.05}>
              <Link
                to={r.to}
                className="group flex h-full flex-col justify-between rounded-sm border border-ink/15 bg-paper p-8 transition-all hover:border-ink hover:bg-honey-soft"
              >
                <div>
                  <p className="eyebrow text-honey-deep">{r.tag}</p>
                  <p className="mt-4 text-lg text-ink">{r.body}</p>
                  <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
                    <span className="font-medium text-ink">Route outcome:</span> {r.outcome}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {r.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/start"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink underline underline-offset-4 hover:text-honey-deep"
          >
            Not sure? Take the 5-question check
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Dark brand band — the method */}
      <DarkBrandBand
        eyebrow="The method"
        title={
          <>
            Six stages. <span className="text-honey">One clear route.</span>
          </>
        }
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-paper/75">
              AI is easy to try, hard to judge. Six stages take you from first look to a
              governed workflow.
            </p>
            <div className="mt-8">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-honey px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
              >
                See how BNext AI works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <aside className="md:col-span-5">
            <ol className="space-y-3">
              {stages.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-4 border-t border-paper/15 pt-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-honey/40 text-xs text-honey">
                    {i + 1}
                  </span>
                  <span className="font-display text-2xl">{s}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </DarkBrandBand>

      {/* Metric grid with source line */}
      <Section bg="paper">
        <Reveal>
          <Eyebrow>Why this matters</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
            Most businesses know AI matters. Few have a route.
          </h2>
        </Reveal>
        <div className="mt-14">
          <MetricGrid
            items={[
              { value: "72%", label: "of Canadian SMBs expect AI to affect their business within 3 years." },
              { value: "1 in 4", label: "have moved past experimenting into a production workflow." },
              { value: "6 stages", label: "from AI curiosity to a governed workflow in your business." },
              { value: "Free", label: "to eligible Ontario businesses; delivered in person in Brampton." },
            ]}
            source="BNext AI intake · Statistics Canada CSBO"
          />
        </div>
      </Section>

      {/* AI in action preview */}
      <Section bg="muted">
        <Reveal>
          <Eyebrow>AI in action</Eyebrow>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
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

      {/* Artifacts */}
      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>What you leave with</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
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

      {/* Trust */}
      <Section bg="ink">
        <Reveal>
          <Eyebrow>Trust</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl text-paper">
            No catch. Here is the model.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">
            Government-funded and free. We earn no vendor commissions; a purchase is not
            our measure of success. Sometimes the answer is buy. Sometimes build.
            Sometimes stop.
          </p>
        </Reveal>
      </Section>

      {/* Closing CTA */}
      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl leading-[1.05] md:text-7xl">
            You do not need the whole map. You need the right next move.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg">
            Answer five questions. Get your route.
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
