import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/bnext-ai")({
  head: () => ({
    meta: [
      { title: "BNext AI — The BHive's signature AI-adoption program" },
      { name: "description", content: "One program. Three starting points. A clear way forward on AI for Ontario businesses." },
      { property: "og:title", content: "BNext AI — The BHive" },
      { property: "og:description", content: "Four weeks to choose the right AI move, test it, and leave with a plan you can act on." },
    ],
  }),
  component: BNextAI,
});

const depths = [
  { tag: "New to AI", hours: "~14 guided hours", body: "One low-risk workflow, built and verified on real work, with a 30/60/90-day plan." },
  { tag: "Experimenting", hours: "~20 guided hours", body: "One use case validated, the ROI case built, the route signed." },
  { tag: "Ready to implement", hours: "~30 guided hours + rollout", body: "Readiness audited, buy and build options tested with users, a production candidate accepted." },
];

const routeArtifacts = [
  { tag: "New to AI", body: "a working first use, plus light ROI and governance records." },
  { tag: "Experimenting", body: "a full ROI case, governance record, and signed buy/build/stop decision, validated on a sample." },
  { tag: "Ready to implement", body: "all of the above, proven with real users, with a priced rollout plan." },
];

function BNextAI() {
  return (
    <>
      <PageHero
        eyebrow="The BNext AI program"
        title={<>One program. Three starting points. <span className="signal-underline">A clear way forward.</span></>}
        lede="Four weeks to choose the right AI move, test it, and leave with a plan you can act on."
        ctas={<CTAButton to="/start">Find your starting point</CTAButton>}
      />

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Operating model</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl">
            You bring the problem. Evidence sets the direction. BNext brings the structure.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            No generic workshop. No vendor agenda. No plan that dies in a deck.
          </p>
        </Reveal>
      </Section>

      <Section bg="muted">
        <Reveal>
          <Eyebrow>The system</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Everyone moves through the same six-stage decision system.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Name the problem. Choose one workflow. Test it with evidence. Decide with an owner accountable.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <CTAButton to="/how-it-works" variant="ghost">Read the method</CTAButton>
          </div>
        </Reveal>
      </Section>

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Choose the depth</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Three routes. Choose your depth.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depths.map((d, i) => (
            <Reveal key={d.tag} delay={i * 0.05}>
              <div className="h-full rounded-sm border border-ink/10 bg-muted p-8">
                <p className="eyebrow text-honey-deep">{d.tag}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.hours}</p>
                <p className="mt-6 text-base leading-relaxed">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Hours and cohort dates are confirmed with each accepted business.
        </p>
      </Section>

      <Section bg="ink">
        <Reveal>
          <Eyebrow>What you leave with</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-paper">Artifacts by route.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/75">
            Every route leaves with a readiness baseline, a named workflow and owner, and
            a 30/60/90-day review plan. Then the routes deepen:
          </p>
        </Reveal>
        <ul className="mt-10 max-w-2xl divide-y divide-paper/10">
          {routeArtifacts.map((r, i) => (
            <Reveal key={r.tag} delay={i * 0.05}>
              <li className="py-5 text-lg text-paper/80">
                <span className="font-medium text-honey">{r.tag}</span> — {r.body}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Fit</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">This is a fit if…</h3>
            <ul className="mt-6 space-y-3 text-lg">
              {[
                "you operate in Peel or meet current eligibility;",
                "a senior decision-maker takes part;",
                "there is a real workflow problem, with real work to test on;",
                "you will measure results and share progress.",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-honey" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>Not a fit</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">It may not be a fit if…</h3>
            <ul className="mt-6 space-y-3 text-lg text-muted-foreground">
              {[
                "you want inspiration without an implementation owner;",
                "you want free custom software without doing the work;",
                "you need a high-risk autonomous system beyond our testing scope.",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink/30" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl md:text-6xl">The route depends on where you are now.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/start">Find your starting point</CTAButton>
            <CTAButton to="/how-it-works" variant="ghost">Read the method</CTAButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
