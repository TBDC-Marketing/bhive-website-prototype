import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/start/experimenting")({
  head: () => ({
    meta: [
      { title: "Experimenting with AI — The validation route · BNext AI" },
      { name: "description", content: "Stop experimenting. Choose the use case that pays. Turn scattered activity into one validated implementation decision." },
      { property: "og:title", content: "Experimenting — The validation route" },
      { property: "og:description", content: "Inventory, validate one workflow, model the economics, sign a route." },
    ],
  }),
  component: Experimenting,
});

const route = [
  ["Inventory the experiments", "People, tools, workflows, data, and hidden workarounds."],
  ["Find the strongest case", "Compare value, frequency, feasibility, risk, and sponsor readiness."],
  ["Validate the workflow", "Test representative examples and document exceptions."],
  ["Model the economics", "Baseline cost, expected benefit, implementation cost, and sensitivity."],
  ["Choose the route", "Buy, build, reuse, pause, or stop."],
  ["Sign the plan", "Owner, budget, timeline, next gate, and evidence still required."],
];

function Experimenting() {
  return (
    <>
      <PageHero
        eyebrow="Experimenting with AI"
        title={<>Stop experimenting. <span className="signal-underline">Choose the use case that pays.</span></>}
        lede="Inventory what is already happening, validate one high-value workflow, model the economics, and sign a route your team can act on."
        ctas={<>
          <CTAButton to="/contact">Apply for the validation route</CTAButton>
          <CTAButton to="/field-guides/roi-model" variant="ghost">See the business-case method</CTAButton>
        </>}
      />

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>Recognition</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">This route is for you if…</h2></Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-3 text-lg">
              {[
                "staff use several AI tools but adoption is inconsistent;",
                "there is enthusiasm without a shared measure of value;",
                "leaders are concerned about shadow AI, privacy, or output quality;",
                "multiple ideas are competing for limited time and budget;",
                "you need to decide whether to buy, build, reuse, pause, or stop.",
              ].map((s) => (<li key={s} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-honey" />{s}</li>))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Reveal><Eyebrow>The route</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Six moves to a signed business case.</h2></Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {route.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.03}>
              <li className="rounded-sm border border-ink/10 bg-paper p-6">
                <p className="font-display text-3xl text-honey-deep">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-display text-2xl">{t}</p>
                <p className="mt-3 text-muted-foreground">{b}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bg="ink">
        <Reveal>
          <Eyebrow>The decision gate</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl text-paper">
            A good idea does not move forward because the demo was impressive.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-paper/75">
            It moves because the workflow matters, the evidence is adequate, the risk is understood, and an owner is accountable.
          </p>
        </Reveal>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-3xl font-display text-5xl md:text-6xl">More tools will not solve a decision problem.</h2>
          <div className="mt-10"><CTAButton to="/contact">Apply for the validation route</CTAButton></div>
        </Reveal>
      </Section>
    </>
  );
}
