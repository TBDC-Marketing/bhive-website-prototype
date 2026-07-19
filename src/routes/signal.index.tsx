import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { signalIssues } from "../content/signal";

export const Route = createFileRoute("/signal/")({
  head: () => ({
    meta: [
      { title: "BNext Signal — A practical AI briefing for Ontario operators" },
      { name: "description", content: "One meaningful change. One business implication. One move worth considering." },
      { property: "og:title", content: "BNext Signal" },
      { property: "og:description", content: "No daily noise. No vendor roundups. One useful signal at a time." },
      { property: "og:url", content: "/signal" },
    ],
    links: [{ rel: "canonical", href: "/signal" }],
  }),
  component: SignalIndex,
});

function SignalIndex() {
  return (
    <>
      <PageHero
        eyebrow="BNext Signal"
        title={<>A practical AI briefing for <span className="signal-underline">Ontario operators.</span></>}
        lede="One meaningful change. One business implication. One move worth considering."
      />

      <Section bg="paper">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-md border border-border bg-card p-8 shadow-[var(--shadow-frame)]">
            <p className="eyebrow text-honey-deep">Get the Signal</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex flex-col gap-3 md:flex-row">
              <input required type="email" placeholder="you@company.ca" className="flex-1 rounded-sm border border-border bg-paper px-3 py-2.5 text-sm" />
              <button className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">
                Get the Signal
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              No daily noise. No vendor roundups disguised as analysis. No claim that every new model changes your strategy.
            </p>
          </div>
        </Reveal>

        <div className="mt-16">
          <Eyebrow>What arrives</Eyebrow>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              ["The signal", "What changed and why it matters."],
              ["The operator's view", "The effect on cost, workflow, risk, or timing."],
              ["The move", "One practical action, question, or field guide."],
              ["From Peel", "One relevant event, story, or local opportunity."],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-border bg-card p-6">
                <p className="font-display text-lg">{k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Reveal>
          <Eyebrow>Archive</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">Past issues</h2>
        </Reveal>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {signalIssues.map((s) => (
            <li key={s.slug}>
              <Link to="/signal/$issue" params={{ issue: s.slug }} className="group grid gap-4 py-6 md:grid-cols-[100px_1fr_auto] md:items-baseline">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Issue {s.issue} · {new Date(s.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}</span>
                <span className="font-display text-xl leading-snug group-hover:text-honey-deep">{s.thesis}</span>
                <span className="text-sm text-muted-foreground">Read →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
