import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageHero, Section } from "../components/site/primitives";

export const Route = createFileRoute("/participants/dashboard")({
  head: () => ({
    meta: [
      { title: "Journey dashboard — BNext AI" },
      { name: "description", content: "Your route, next required action, and artifact stack." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <PageHero
        eyebrow="Journey dashboard · preview"
        title={<>Your route. <span className="signal-underline">Your next required action.</span></>}
        lede="This is a preview of the participant workspace. It becomes live for accepted businesses with their first cohort."
      />

      <Section bg="paper">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Your route" body="Starting point: Experimenting · Current stage: Prepare · Next gate: Evidence plan review · Cohort: Spring 2026" />
          <Card title="Next required action" body="Owner: workflow owner · Due: Friday · Definition of done: use-case brief signed by executive sponsor" />
          <Card title="Cohort" body="Guide: A. Singh · Next session: Workflow clinic on quote drafting · Support: office hours Wednesdays" />
        </div>
      </Section>

      <Section bg="muted">
        <Eyebrow>Artifact stack</Eyebrow>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            ["Readiness baseline", "Accepted"],
            ["Use-case brief", "Working"],
            ["Workflow / data map", "Not started"],
            ["Business case", "Not started"],
            ["Risk record", "Working"],
            ["Test plan", "Not started"],
            ["Evidence log", "Not started"],
            ["Decision record", "Not started"],
            ["Rollout plan", "Not started"],
            ["Value reviews", "Not started"],
          ].map(([n, s]) => (
            <div key={n} className="flex items-center justify-between rounded-sm border border-border bg-card px-4 py-3 text-sm">
              <span>{n}</span>
              <span className={`text-xs uppercase tracking-widest ${s === "Accepted" ? "text-honey-deep" : s === "Working" ? "text-ink" : "text-muted-foreground"}`}>{s}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-frame)]">
      <p className="eyebrow text-honey-deep">{title}</p>
      <p className="mt-3 text-sm text-ink">{body}</p>
    </div>
  );
}
