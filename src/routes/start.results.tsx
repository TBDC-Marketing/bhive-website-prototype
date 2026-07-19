import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Section } from "../components/site/primitives";

type Search = { score?: number };

export const Route = createFileRoute("/start/results")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    score: typeof s.score === "number" ? s.score : Number(s.score) || undefined,
  }),
  head: () => ({
    meta: [
      { title: "Your readiness result — BNext AI" },
      { name: "description", content: "Your recommended starting point on the BNext AI route." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Results,
});

function Results() {
  const { score } = Route.useSearch();
  const s = score ?? 0;
  const rec =
    s <= 3
      ? { tag: "Start with one useful win.", body: "You do not need a full AI strategy yet. You need one workflow to change, safely, with a person in charge.", to: "/start/new-to-ai" as const, label: "See the New-to-AI route" }
      : s <= 7
      ? { tag: "Turn experiments into a business case.", body: "The opportunity is not more tools; it is one validated decision.", to: "/start/experimenting" as const, label: "See the Experimenting route" }
      : { tag: "Move to a tested implementation.", body: "You have signal, sponsor, and constraints. A tested proof beats another tool.", to: "/start/ready-to-implement" as const, label: "See the Ready-to-Implement route" };

  return (
    <>
      <PageHero
        eyebrow="Your result"
        title={<>{rec.tag}</>}
        lede={rec.body}
        ctas={<><CTAButton to={rec.to}>{rec.label}</CTAButton><CTAButton to="/apply" variant="ghost">Express interest</CTAButton></>}
      />

      <Section bg="paper">
        <Eyebrow>Next actions</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Read the route", "See what the recommended path asks of you.", rec.to, rec.label],
            ["Prepare with a field guide", "Bring one workflow to the first conversation.", "/field-guides" as const, "Open field guides"],
            ["Talk to us", "Contact intake with your reference or question.", "/contact" as const, "Contact BNext AI"],
          ].map(([t, d, to, l]) => (
            <div key={t} className="rounded-md border border-border bg-card p-6">
              <p className="font-display text-xl">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              <Link to={to} className="mt-4 inline-block text-sm text-honey-deep">{l} →</Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
