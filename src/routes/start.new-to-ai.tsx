import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/start/new-to-ai")({
  head: () => ({
    meta: [
      { title: "New to AI — The first-win route · BNext AI" },
      { name: "description", content: "You do not need an AI strategy yet. You need one useful win. Choose a low-risk workflow and verify it on real work." },
      { property: "og:title", content: "New to AI — The first-win route" },
      { property: "og:description", content: "Choose a low-risk workflow. Learn the tool on real work. Verify the result. Leave with a plan." },
    ],
  }),
  component: NewToAI,
});

const steps = [
  ["See the possibilities", "Learn what current tools can and cannot do in ordinary business work."],
  ["Choose one workflow", "Identify a repetitive, low-risk task with a visible before and after."],
  ["Build the first use", "Create the prompt, process, or assistant around your real work."],
  ["Verify it", "Run it at least three times and log what worked, failed, and needed human judgement."],
  ["Decide the next move", "Adopt, improve, or stop; leave with a 30/60/90-day plan."],
];

const wins = [
  "Turn meeting notes into approved follow-up tasks.",
  "Draft a customer email from an existing service record.",
  "Summarize a long policy or supplier document.",
  "Build a reusable quote or proposal outline.",
  "Categorize incoming requests for human review.",
];

function NewToAI() {
  return (
    <>
      <PageHero
        eyebrow="New to AI"
        title={<>You do not need an AI strategy yet. <span className="signal-underline">You need one useful win.</span></>}
        lede="Choose a low-risk workflow. Learn the tool on real work. Verify the result. Leave with a practical plan for what comes next."
        ctas={<>
          <CTAButton to="/start/new-to-ai">Apply for the first-win route</CTAButton>
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
                "staff may be using public tools, but there is no common approach;",
                "you are unsure where AI belongs in the business;",
                "you want practical experience before making a larger commitment.",
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
          {steps.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.03}>
              <li className="grid gap-6 rounded-sm border border-ink/10 bg-paper p-6 md:grid-cols-12">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-display text-4xl text-honey-deep">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl">{t}</span>
                </div>
                <p className="text-muted-foreground md:col-span-8">{b}</p>
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
              No coding requirement. No pressure to buy a platform. No attempt to automate a high-risk decision in week one.
            </p>
            <Eyebrow>Commitment</Eyebrow>
            <p className="mt-6 text-lg text-muted-foreground">
              The owner or CEO participates with the person who owns the selected workflow. The team completes practical work between sessions and brings the results back for review.
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
