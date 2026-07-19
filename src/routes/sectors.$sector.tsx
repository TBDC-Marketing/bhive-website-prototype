import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

const bySector: Record<string, { name: string; problem: string; pressures: string[]; workflows: string[]; humanJudgement: string[] }> = {
  manufacturing: {
    name: "Manufacturing",
    problem: "shift handovers, quote turnaround, and quality exceptions",
    pressures: [
      "Skilled labour transitions and shift handovers that lose context.",
      "Quote turnaround competing with production floor priorities.",
      "Quality exceptions that surface too late to act on.",
    ],
    workflows: [
      "Quote drafting from approved product and pricing rules.",
      "Shift-handover summary and next-shift briefing.",
      "Maintenance-note classification and recurring-issue summary.",
      "Supplier document comparison.",
    ],
    humanJudgement: ["Safety exceptions", "Customer-facing commitments", "Contract terms"],
  },
  logistics: {
    name: "Logistics & trucking",
    problem: "dispatch exceptions, invoice reconciliation, and driver communications",
    pressures: [
      "Dispatch exceptions that arrive faster than a human can triage.",
      "Invoice and rate confirmation reconciliation across many carriers.",
      "Driver communications in multiple languages under time pressure.",
    ],
    workflows: [
      "Order-exception detection and escalation.",
      "Rate-confirmation reconciliation.",
      "Multilingual driver-message drafting with human approval.",
      "Meeting-notes to owner, deadline, and next action.",
    ],
    humanJudgement: ["Regulatory reporting", "Insurance & incident calls", "Customer service recovery"],
  },
  "professional-services": {
    name: "Professional services",
    problem: "proposal drafting, meeting follow-through, and knowledge reuse",
    pressures: [
      "Proposal cycles that eat billable time.",
      "Meeting commitments lost between systems.",
      "Knowledge trapped in individual inboxes.",
    ],
    workflows: [
      "Proposal first draft from approved source material.",
      "Meeting-notes to owner, deadline, and next action.",
      "Internal policy and procedure search.",
      "Customer-call summary to accountable follow-up.",
    ],
    humanJudgement: ["Client strategy", "Fees and scope changes", "Confidentiality boundaries"],
  },
};

export const Route = createFileRoute("/sectors/$sector")({
  loader: ({ params }) => bySector[params.sector] ?? bySector.manufacturing,
  head: ({ loaderData }) => ({
    meta: [
      { title: `Practical AI for ${loaderData!.name} businesses — BNext AI` },
      { name: "description", content: `A real ${loaderData!.name.toLowerCase()} problem, without the expensive wrong turn.` },
      { property: "og:title", content: `BNext AI · ${loaderData!.name}` },
    ],
  }),
  component: SectorPage,
});

function SectorPage() {
  const s = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`Practical AI for ${s.name.toLowerCase()} businesses`}
        title={<><span className="signal-underline">A real {s.name.toLowerCase()} problem,</span> without the expensive wrong turn.</>}
        lede={`BNext AI helps ${s.name.toLowerCase()} owners and operating teams choose one useful workflow, test the case, and move toward safe adoption.`}
        ctas={<CTAButton to="/start">Find my starting point</CTAButton>}
      />

      <Section bg="paper">
        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <Eyebrow>What operators are dealing with</Eyebrow>
            <ul className="mt-6 space-y-3 text-lg text-ink">{s.pressures.map((p) => <li key={p} className="flex gap-3"><span className="text-honey-deep">·</span>{p}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Where AI may help</Eyebrow>
            <ul className="mt-6 space-y-3 text-lg text-ink">{s.workflows.map((w) => <li key={w} className="flex gap-3"><span className="text-honey-deep">·</span>{w}</li>)}</ul>
          </Reveal>
        </div>
      </Section>

      <Section bg="ink">
        <p className="eyebrow text-honey">Where judgement must stay human</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {s.humanJudgement.map((h) => <span key={h} className="rounded-sm border border-honey/40 px-4 py-2 text-paper">{h}</span>)}
        </div>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-3xl font-display text-3xl md:text-4xl">Three starting points. One program.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <CTAButton to="/start" variant="signal">Find my starting point</CTAButton>
          <CTAButton to="/bnext-ai" variant="ghost">See the program</CTAButton>
        </div>
      </Section>
    </>
  );
}
