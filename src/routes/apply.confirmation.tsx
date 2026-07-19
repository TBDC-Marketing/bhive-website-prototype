import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, PageHero, Section } from "../components/site/primitives";

export const Route = createFileRoute("/apply/confirmation")({
  head: () => ({
    meta: [
      { title: "Application received — BNext AI" },
      { name: "description", content: "Your expression of interest has been received." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Confirmation,
});

function Confirmation() {
  const ref = "BNX-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return (
    <>
      <PageHero
        eyebrow="Received"
        title={<>Your interest is <span className="signal-underline">on the route.</span></>}
        lede="A BNext intake owner will review your submission. Expect a response within five business days."
        ctas={<><CTAButton to="/how-it-works">See what happens next</CTAButton><CTAButton to="/field-guides" variant="ghost">Prepare with a field guide</CTAButton></>}
      />
      <Section bg="paper">
        <div className="mx-auto max-w-2xl rounded-md border border-border bg-card p-8 text-center">
          <p className="eyebrow text-honey-deep">Reference number</p>
          <p className="mt-3 font-display text-3xl">{ref}</p>
          <p className="mt-4 text-sm text-muted-foreground">Keep this number for any follow-up. It is not a confirmation of acceptance—that decision follows intake review.</p>
        </div>
      </Section>
    </>
  );
}
