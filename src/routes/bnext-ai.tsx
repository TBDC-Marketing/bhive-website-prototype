import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/bnext-ai")({
  head: () => ({
    meta: [
      { title: "BNext AI — The BHive's signature AI-adoption program" },
      { name: "description", content: "One program. Three starting points. A clear way forward on AI for Ontario businesses." },
      { property: "og:title", content: "BNext AI — The BHive" },
      { property: "og:description", content: "Four focused weeks to choose the right AI move, test it with evidence, and leave with a plan." },
    ],
  }),
  component: BNextAI,
});

const commonSteps = [
  "Name the business problem and owner.",
  "Choose one workflow worth changing.",
  "Define value, risk, and acceptance criteria.",
  "Decide whether to buy, build, or stop.",
  "Test with representative users and data.",
  "Leave with ownership, safeguards, and a next-stage plan.",
];

const depths = [
  { tag: "New to AI", hours: "~14 guided hours", body: "Build a useful, low-risk first workflow. Verify it on real work. Leave with basic usage rules and a 30/60/90-day plan." },
  { tag: "Experimenting", hours: "~20 guided hours", body: "Turn scattered activity into one validated use case. Build the ROI case, complete a governance review, and sign the implementation route." },
  { tag: "Ready to implement", hours: "~30 guided hours + rollout follow-through", body: "Audit readiness and data, test buy/build routes, validate with end users, and leave with an accepted production candidate or vendor route." },
];

type Row = [string, string, string, string];
const artifactRows: Row[] = [
  ["Readiness baseline", "✓", "✓", "✓"],
  ["Named workflow and owner", "✓", "✓", "✓"],
  ["Working first use", "✓", "—", "—"],
  ["ROI and feasibility case", "Light", "✓", "✓"],
  ["Risk/governance record", "Basic", "✓", "✓"],
  ["Buy/build/stop decision", "Next-step", "✓", "✓"],
  ["Tested proof with users", "—", "Validation sample", "✓"],
  ["Priced rollout plan", "—", "Route-level", "✓"],
  ["30/60/90-day review plan", "✓", "✓", "✓"],
];

function BNextAI() {
  return (
    <>
      <PageHero
        eyebrow="The BNext AI program"
        title={<>One program. Three starting points. <span className="signal-underline">A clear way forward.</span></>}
        lede="Four focused weeks to choose the right AI move, test it with evidence, and leave with a plan your business can act on."
        ctas={<CTAButton to="/start">Find your starting point</CTAButton>}
      />

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Operating model</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl">
            Your business supplies the problem. Evidence sets the direction. BNext supplies the structure.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            No generic workshop. No vendor agenda. No plan that dies in a deck.
          </p>
        </Reveal>
      </Section>

      <Section bg="muted">
        <Reveal>
          <Eyebrow>What is common</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Every participant moves through the same decision system.</h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {commonSteps.map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <li className="flex gap-4 rounded-sm border border-ink/10 bg-paper p-6">
                <span className="font-display text-3xl text-honey-deep">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{s}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Choose the depth</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Three routes. One decision system.</h2>
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
          Session hours and cohort calendars are confirmed with each accepted business.
        </p>
      </Section>

      <Section bg="ink">
        <Reveal>
          <Eyebrow>What you leave with</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-paper">Artifact comparison by route.</h2>
        </Reveal>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-paper">
            <thead>
              <tr className="border-b border-paper/20 text-xs uppercase tracking-widest text-paper/60">
                <th className="py-4 pr-4 font-medium">Artifact</th>
                <th className="py-4 px-4 text-center font-medium">New to AI</th>
                <th className="py-4 px-4 text-center font-medium">Experimenting</th>
                <th className="py-4 px-4 text-center font-medium">Ready to implement</th>
              </tr>
            </thead>
            <tbody>
              {artifactRows.map((r) => (
                <tr key={r[0]} className="border-b border-paper/10">
                  <td className="py-4 pr-4 font-medium">{r[0]}</td>
                  <td className="py-4 px-4 text-center text-paper/80">{r[1]}</td>
                  <td className="py-4 px-4 text-center text-paper/80">{r[2]}</td>
                  <td className="py-4 px-4 text-center text-honey">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Fit</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">This is a fit if…</h3>
            <ul className="mt-6 space-y-3 text-lg">
              {[
                "your business operates in Peel or meets current program eligibility;",
                "a senior decision-maker will participate;",
                "there is a real workflow or operating problem to examine;",
                "you can test on representative work;",
                "you are willing to measure results and share progress with the cohort.",
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
                "you want a general inspiration session with no implementation owner;",
                "you are seeking free custom software with no internal participation;",
                "the immediate requirement is a high-risk autonomous system beyond the program's testing scope;",
                "procurement is already complete and the only goal is vendor promotion.",
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
