import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/start/ready-to-implement")({
  head: () => ({
    meta: [
      { title: "Ready to implement — The implementation route · BNext AI" },
      { name: "description", content: "Pressure-test the use case, data, security, economics, and delivery route. Prove it with real users before the larger commitment." },
      { property: "og:title", content: "Ready to implement — BNext AI" },
      { property: "og:description", content: "Move quickly where the path is routine. Bring people in where the consequence is real." },
    ],
  }),
  component: Ready,
});

const route = [
  ["Deep intake", "Systems, data, stakeholders, constraints, success criteria, budget, and timing."],
  ["Readiness and security audit", "Access, data quality, privacy, error impact, reversibility, and operational ownership."],
  ["Buy/build decision", "Compare platform, vendor, internal-build, and stop options against the same criteria."],
  ["Controlled proof", "Test on representative data in an appropriate environment."],
  ["User acceptance", "End users complete real tasks; exceptions and failure modes are documented."],
  ["Sign the rollout route", "Price, owner, controls, vendor or build plan, measures, change path, and review schedule."],
];

function Ready() {
  return (
    <>
      <PageHero
        eyebrow="Ready to implement"
        title={<>You are ready to move. <span className="signal-underline">Make sure you move right.</span></>}
        lede="Pressure-test the use case, data, security, economics, and delivery route. Then prove it with real users before the larger commitment."
        ctas={<>
          <CTAButton to="/contact">Talk through the implementation</CTAButton>
          <CTAButton to="/how-it-works" variant="ghost">Review the method</CTAButton>
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
                "the business problem and executive sponsor are clear;",
                "budget or a buying window is active;",
                "the use case touches existing systems or sensitive data;",
                "vendor or build options are already being considered;",
                "you need a neutral process to reach a defendable decision quickly.",
              ].map((s) => (<li key={s} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-honey" />{s}</li>))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Reveal><Eyebrow>The route</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Six gates to a governed rollout.</h2></Reveal>
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
          <Eyebrow>Accuracy note</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-3xl md:text-4xl text-paper">
            Call the output <em className="text-honey not-italic">production-candidate</em>, not "production-ready," until it meets the client's security, integration, support, ownership, and acceptance gates.
          </h2>
          <p className="mt-6 max-w-2xl text-paper/70">
            BNext helps define and test those gates; the client remains the accountable decision-maker.
          </p>
        </Reveal>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl md:text-6xl">Move quickly where the path is routine. Bring people in where the consequence is real.</h2>
          <div className="mt-10"><CTAButton to="/contact">Talk through the implementation</CTAButton></div>
        </Reveal>
      </Section>
    </>
  );
}
