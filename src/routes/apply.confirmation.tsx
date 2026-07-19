import { createFileRoute, Link } from "@tanstack/react-router";
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
  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title={<>We'll be in touch.</>}
        lede="Applications for the next cohort open soon. Until submissions are live, please email your interest to bnextai@thebhive.ca and a BNext intake owner will respond within five business days."
        ctas={
          <>
            <CTAButton to="/how-it-works">See what happens next</CTAButton>
            <CTAButton to="/field-guides" variant="ghost">Prepare with a field guide</CTAButton>
          </>
        }
      />
      <Section bg="paper">
        <div className="mx-auto max-w-2xl rounded-md border border-border bg-card p-8 text-center">
          <p className="eyebrow text-honey-deep">Direct contact</p>
          <p className="mt-3 font-display text-2xl">
            <a href="mailto:bnextai@thebhive.ca" className="underline">bnextai@thebhive.ca</a>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Include your business name, sector, and the workflow you'd like to change first.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            <Link to="/apply" className="underline">Return to the interest form</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
