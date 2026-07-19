import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { faq } from "../content/partners";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/eligibility")({
  head: () => ({
    meta: [
      { title: "Eligibility & FAQ — BNext AI" },
      { name: "description", content: "Questions before you make the first move? Here is what the program asks and provides." },
      { property: "og:title", content: "BNext AI · Eligibility & FAQ" },
      { property: "og:description", content: "What the program asks of your business, what it provides, and what happens after you express interest." },
      { property: "og:url", content: "/eligibility" },
    ],
    links: [{ rel: "canonical", href: "/eligibility" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: EligibilityPage,
});

const eligibility = [
  "Eligible geography: businesses operating in the Peel Region.",
  "Business type and size: established small or mid-sized businesses.",
  "Operating status: minimum trading history confirmed during intake.",
  "Decision-maker participation for the duration of the route.",
  "A workflow and test data available for the engagement.",
  "Attendance at scheduled sessions with the between-session work completed.",
  "Consent to measurement, reporting, and follow-up.",
  "Excluded activities and costs confirmed during intake.",
];

function EligibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Eligibility & FAQ"
        title={<>Questions before you make the <span className="signal-underline">first move?</span></>}
        lede="Here is what the program asks of your business, what it provides, and what happens after you express interest."
        ctas={<CTAButton to="/start">Check my starting point</CTAButton>}
      />

      <Section bg="paper">
        <Eyebrow>Eligibility summary</Eyebrow>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Dated version · reviewed February 2026. Full terms are confirmed during intake.</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {eligibility.map((r) => (
            <li key={r} className="flex gap-3 rounded-sm border border-border bg-card px-4 py-3 text-sm">
              <span className="text-honey-deep">✓</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="muted">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 font-display text-4xl">Common questions</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faq.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </div>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-3xl font-display text-3xl md:text-4xl">Still unsure? That is what the starting-point check is for.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <CTAButton to="/start" variant="signal">Check my starting point</CTAButton>
          <CTAButton to="/contact" variant="ghost">Contact BNext AI</CTAButton>
        </div>
      </Section>
    </>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = q.replace(/\W+/g, "-").toLowerCase();
  return (
    <details id={id} open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)} className="group py-5">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span className="font-display text-xl leading-snug">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </summary>
      <p className="mt-4 text-muted-foreground">{a}</p>
    </details>
  );
}
