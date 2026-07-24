import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact The BHive — BNext AI" },
      { name: "description", content: "Program fit, partnership, accessibility, media, or vendor network. We route it to the right person." },
      { property: "og:title", content: "Contact The BHive" },
      { property: "og:description", content: "Ask the question behind the question." },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://bhive-bnextai-preview.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "The BHive",
          url: "https://bhive-bnextai-preview.lovable.app/",
          telephone: "+1-647-632-1072",
          email: "bnextai@thebhive.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "8 Nelson St W, 6th Floor",
            addressLocality: "Brampton",
            addressRegion: "ON",
            postalCode: "L6X 1B7",
            addressCountry: "CA",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const routes = [
  ["Joining the program?", "Start with the readiness check.", "/start"],
  ["Already applied?", "Include your reference number.", "/contact"],
  ["Partnership or referral?", "Use the partner form.", "/contact"],
  ["Vendor?", "Review the Vendor Network first.", "/contact"],
  ["Media or general?", "Use the contact form.", "/contact"],
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Ask the question <span className="signal-underline">behind the question.</span></>}
        lede="Program fit, partnership, accessibility, media, or vendor network. We route it to the right person."
      />

      <Section bg="paper">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Contact routes</Eyebrow>
            <ul className="mt-6 divide-y divide-border">
              {routes.map(([t, b]) => (
                <li key={t} className="py-5">
                  <p className="font-medium text-ink">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-sm border border-ink/10 bg-muted p-6">
              <Eyebrow>Location & access</Eyebrow>
              <address className="mt-4 not-italic text-sm text-muted-foreground">
                8 Nelson St W, 6th Floor<br />
                Brampton, ON L6X 1B7<br /><br />
                647-632-1072<br />
                bnextai@thebhive.ca
              </address>
            </div>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              {sent ? (
                <div className="rounded-sm border border-honey bg-honey-soft p-10">
                  <p className="eyebrow text-honey-deep">Thanks</p>
                  <h2 className="mt-4 font-display text-3xl">We'll route this to the right person.</h2>
                  <p className="mt-4 text-muted-foreground">
                    You'll hear back within two business days. If it's urgent, call 647-632-1072.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="grid gap-5 rounded-sm border border-ink/10 bg-muted p-8"
                >
                  <Field label="Your name" name="name" required />
                  <Field label="Company or organization" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone (optional)" name="phone" />
                  <div>
                    <label className="eyebrow text-muted-foreground">Reason</label>
                    <select className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-3 py-2.5 focus:border-ink focus:outline-none">
                      <option>Program fit</option>
                      <option>Partnership or referral</option>
                      <option>Vendor application</option>
                      <option>Media</option>
                      <option>Accessibility</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground">Message</label>
                    <textarea rows={5} required className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-3 py-2.5 focus:border-ink focus:outline-none" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Do not include customer, employee, financial, health, or other sensitive data.
                  </p>
                  <button type="submit" className="mt-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-honey-deep hover:text-ink">
                    Send my question
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required}
        className="mt-2 w-full rounded-sm border border-ink/15 bg-paper px-3 py-2.5 focus:border-ink focus:outline-none" />
    </div>
  );
}
