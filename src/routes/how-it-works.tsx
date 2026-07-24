import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How BNext AI works — the adoption-to-value method" },
      { name: "description", content: "Six stages from a business problem to a governed, adopted AI workflow. Not training. Not consulting." },
      { property: "og:title", content: "How BNext AI works" },
      { property: "og:description", content: "Orient → Define → Route → Prepare → Prove → Run." },
    ],
  }),
  component: HowItWorks,
});

const stages = [
  { n: 1, name: "Orient", q: "Where are we now, and what should improve?", guardrail: "No tool talk before the problem is clear.", output: "Readiness baseline, named owner, success definition." },
  { n: 2, name: "Define", q: "Which workflow is worth changing?", guardrail: "One use case, in plain language, before any solution design.", output: "A use-case brief every later decision refers back to." },
  { n: 3, name: "Route", q: "Is it valuable, feasible, and safe enough?", guardrail: "Evidence and policy decide, not the best demo.", output: "Buy, build, reuse, pause, or stop, with a named owner." },
  { n: 4, name: "Prepare", q: "Can we test it inside the right boundaries?", guardrail: "Representative data, no avoidable risk.", output: "A test-ready environment and plan." },
  { n: 5, name: "Prove", q: "Does it work for real users on real work?", guardrail: "Routine cases can automate; consequential exceptions reach a person.", output: "A verified workflow or accepted production candidate." },
  { n: 6, name: "Run", q: "Does it stay useful after launch?", guardrail: "Named owner, review date, change path, retirement rule.", output: "Promote what people use. Retire what no longer earns its place." },
];

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The adoption-to-value method"
        title={<>A prototype is <span className="signal-underline">not adoption.</span></>}
        lede="AI pays off when a workflow has an owner, safe data, real usage, and a measure that improves. BNext AI guides the whole route."
        ctas={<CTAButton to="/start">See your starting point</CTAButton>}
      />

      <Section bg="paper">
        <div className="space-y-16">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.02}>
              <article className="grid gap-8 border-t border-border pt-12 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="eyebrow text-honey-deep">Stage {s.n}</p>
                  <h2 className="mt-3 font-display text-5xl md:text-6xl">{s.name}</h2>
                </div>
                <div className="md:col-span-9">
                  <p className="font-display text-2xl leading-snug md:text-3xl">{s.q}</p>
                  <dl className="mt-8 grid gap-6 md:grid-cols-2">
                    <Field label="Guardrail">{s.guardrail}</Field>
                    <Field label="Output">{s.output}</Field>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="ink">
        <Reveal>
          <Eyebrow>Why this works</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl text-paper">
            People handle judgement. Structure handles the routine. Evidence decides what moves forward.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-16 rounded-sm border border-honey/30 p-8">
            <p className="eyebrow text-honey">The governance trigger</p>
            <p className="mt-4 text-lg text-paper/85">
              The moment someone depends on the output, sensitive data enters, or AI triggers a real action, the experiment needs an owner and guardrails.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-3xl font-display text-5xl md:text-6xl">Know the stage. Make the next decision.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10"><CTAButton to="/start">Find your starting point</CTAButton></div>
        </Reveal>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-honey pl-4">
      <dt className="eyebrow text-honey-deep">{label}</dt>
      <dd className="mt-2 text-base leading-relaxed">{children}</dd>
    </div>
  );
}
