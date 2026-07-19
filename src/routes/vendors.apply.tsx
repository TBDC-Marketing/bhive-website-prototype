import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, PageHero, Section } from "../components/site/primitives";
import { TextField, TextArea, SelectField, FormNote } from "../components/site/FormField";

export const Route = createFileRoute("/vendors/apply")({
  head: () => ({
    meta: [
      { title: "Become a Vendor — BNext AI vendor network" },
      { name: "description", content: "Bring evidence. Respect the brief. Earn the match." },
      { property: "og:title", content: "Apply to the BNext AI vendor network" },
      { property: "og:description", content: "Structured application for capable providers." },
      { property: "og:url", content: "/vendors/apply" },
    ],
    links: [{ rel: "canonical", href: "/vendors/apply" }],
  }),
  component: VendorApply,
});

function VendorApply() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Vendor application"
        title={<>Bring evidence. Respect the brief. <span className="signal-underline">Earn the match.</span></>}
        lede="The BNext vendor network connects qualified providers to defined client requirements. It is not a directory, paid placement, or open sales channel."
      />

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Requirements</Eyebrow>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Legal entity, insurance, and service capacity appropriate to the engagement.",
                "Clear product or service scope.",
                "Transparent pricing model and implementation assumptions.",
                "Data handling, security, privacy, hosting, and subprocessors disclosed.",
                "Referenceable work or credible product evidence.",
                "Support, change, incident, and offboarding process.",
                "Willingness to work from client-owned requirements.",
                "Conflict disclosure and agreement to non-solicitation rules.",
              ].map((r) => <li key={r} className="flex gap-2"><span className="text-honey-deep">·</span>{r}</li>)}
            </ul>

            <p className="mt-8 text-xs uppercase tracking-widest text-honey-deep">Process</p>
            <p className="mt-2 text-sm text-ink">Submit → Completeness review → Capability/evidence review → Interview or demo → Conditional approval → Match-specific diligence</p>
            <p className="mt-4 text-xs text-muted-foreground">Network acceptance does not guarantee referrals. Every match remains requirements-based.</p>
          </div>

          {sent ? (
            <div className="rounded-md border border-border bg-card p-8">
              <p className="eyebrow text-honey-deep">Application received</p>
              <h3 className="mt-3 font-display text-2xl">Thank you.</h3>
              <p className="mt-3 text-sm text-muted-foreground">Completeness review takes up to ten business days. We will follow up by email.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-md border border-border bg-card p-8">
              <p className="eyebrow text-honey-deep">Start vendor application</p>
              <div className="grid gap-4 md:grid-cols-2">
                <TextField label="Company" required />
                <TextField label="Website" />
                <TextField label="Primary contact" required />
                <TextField label="Email" type="email" required />
              </div>
              <TextArea label="Capabilities and sectors" required />
              <SelectField label="Suitable client size">
                <option>Small (1–20)</option>
                <option>Mid (21–200)</option>
                <option>Both</option>
              </SelectField>
              <TextArea label="Product/service architecture" />
              <TextArea label="Security & data handling" hint="Hosting, subprocessors, data location, retention." />
              <TextArea label="Pricing model and implementation assumptions" />
              <TextArea label="Evidence and references" />
              <TextArea label="Conflicts, partnerships, and declarations" />
              <FormNote>Do not paste customer data or credentials. Upload evidence during match-specific diligence.</FormNote>
              <button className="w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">Submit application</button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
