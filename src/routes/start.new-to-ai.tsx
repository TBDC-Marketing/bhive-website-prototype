import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/start/new-to-ai")({
  head: () => ({
    meta: [
      { title: "New to AI — The first-win route · BNext AI" },
      { name: "description", content: "You do not need an AI strategy yet. You need one useful win. Choose a low-risk workflow and verify it on real work." },
      { property: "og:title", content: "New to AI — The first-win route" },
      { property: "og:description", content: "Choose a low-risk workflow, prove it on real work, and leave with a plan." },
    ],
  }),
  component: NewToAI,
});

const steps = [
  "See what today's tools can and cannot do.",
  "Pick one repetitive, low-risk task.",
  "Build the first use around your real work.",
  "Run it three times; log what worked and what failed.",
  "Adopt, improve, or stop. Leave with a 30/60/90-day plan.",
];

const wins = [
  "Turn meeting notes into follow-up tasks.",
  "Draft a customer email from a service record.",
  "Summarize a long policy or supplier document.",
  "Build a reusable quote outline.",
];

function NewToAI() {
  return (
    <>
      <PageHero
        eyebrow="New to AI"
        title={<>You do not need an AI strategy yet. <span className="signal-underline">You need one useful win.</span></>}
        lede="Choose a low-risk workflow, prove it on real work, and leave with a plan."
        ctas={<>
          <CTAButton to="/apply">Apply for the first-win route</CTAButton>
          <CTAButton to="/ai-in-action" variant="ghost">See example first wins</CTAButton>
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
                "you have watched AI from the sidelines;",
                "staff use public tools with no common approach;",
                "you want experience before a bigger commitment.",
              ].map((s) => (
                <li key={s} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-honey" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Reveal><Eyebrow>The route</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Five steps. One useful win.</h2></Reveal>
        <ol className="mt-12 space-y-3">
          {steps.map((t, i) => (
            <Reveal key={t} delay={i * 0.03}>
              <li className="flex items-center gap-4 rounded-sm border border-ink/10 bg-paper p-6">
                <span className="font-display text-4xl text-honey-deep">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl">{t}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Example first wins</Eyebrow>
            <ul className="mt-6 space-y-3 text-lg">
              {wins.map((w) => <li key={w} className="border-l-2 border-honey pl-4">{w}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>What this is not</Eyebrow>
            <p className="mt-6 text-lg text-muted-foreground">
              No coding. No pressure to buy. No high-risk automation in week one.
            </p>
            <Eyebrow>Commitment</Eyebrow>
            <p className="mt-6 text-lg text-muted-foreground">
              The owner joins with the person who runs the workflow. The team does practical work between sessions.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl md:text-6xl">Start small enough to learn. Useful enough to matter.</h2>
          <div className="mt-10"><CTAButton to="/contact">Apply for the first-win route</CTAButton></div>
        </Reveal>
      </Section>
    </>
  );
}
