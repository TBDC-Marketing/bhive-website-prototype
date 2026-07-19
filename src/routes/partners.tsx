import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { partners } from "../content/partners";
import { TextField, TextArea, SelectField, FormNote } from "../components/site/FormField";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Referrals — BNext AI" },
      { name: "description", content: "Help the right business find the right starting point." },
      { property: "og:title", content: "BNext AI · Partners & Referrals" },
      { property: "og:description", content: "Referral partners, community organizations, and delivery collaborators across Peel." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const tiers = ["Founding", "Referral", "Community", "Delivery"] as const;

function PartnersPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={<>Help the right business find the <span className="signal-underline">right starting point.</span></>}
        lede="BNext AI works with trusted organizations across Peel to identify businesses, reduce barriers, and connect practical AI adoption to the communities it should serve."
        ctas={<><CTAButton to="#become">Become a referral partner</CTAButton><CTAButton to="#refer" variant="ghost">Refer a business</CTAButton></>}
      />

      <Section bg="paper">
        <Eyebrow>Ways to work together</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Refer", "Send an eligible business through a partner-specific route with clear consent and source tracking."],
            ["Host", "Bring a clinic, briefing, or workflow session to a member community."],
            ["Contribute expertise", "Support a defined program gate without promoting a predetermined solution."],
            ["Reach communities", "Co-create relevant language and sector pathways with trusted local organizations."],
            ["Share evidence", "Help publish responsible lessons from adoption."],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-border bg-card p-6">
              <p className="font-display text-xl">{k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="muted">
        <Eyebrow>Current partners</Eyebrow>
        <div className="mt-10 grid gap-10">
          {tiers.map((t) => {
            const ps = partners.filter((p) => p.tier === t);
            if (ps.length === 0) return null;
            return (
              <div key={t}>
                <p className="text-xs uppercase tracking-widest text-honey-deep">{t}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {ps.map((p) => (
                    <div key={p.name} className="rounded-sm border border-border bg-card px-5 py-4">
                      <p className="font-medium text-ink">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.kind}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Neutrality rule: Referral and ecosystem partnerships do not buy influence over client technology decisions. Sponsorship, referral, delivery, and vendor roles must be disclosed and separated.
        </p>
      </Section>

      <Section bg="paper" id="become">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Become a partner</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">Tell us who you serve.</h2>
            <p className="mt-4 text-muted-foreground">We will respond with a partner brief, eligibility criteria, and a trackable route for your community.</p>
          </div>
          {sent ? (
            <div className="rounded-md border border-border bg-card p-8">
              <p className="eyebrow text-honey-deep">Received</p>
              <h3 className="mt-3 font-display text-2xl">Thank you.</h3>
              <p className="mt-3 text-sm text-muted-foreground">A named BNext contact will reach out within five business days.</p>
            </div>
          ) : (
            <form id="refer" onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-md border border-border bg-card p-8">
              <TextField label="Organization" required />
              <SelectField label="Partner type" required>
                <option>Referral</option>
                <option>Host</option>
                <option>Expertise</option>
                <option>Community</option>
              </SelectField>
              <TextField label="Contact name" required />
              <TextField label="Email" type="email" required />
              <TextField label="Audience served" />
              <TextArea label="Proposed contribution" />
              <FormNote>Disclose any conflicts, sponsorship, or vendor relationships that may be relevant.</FormNote>
              <button className="w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">Send</button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
