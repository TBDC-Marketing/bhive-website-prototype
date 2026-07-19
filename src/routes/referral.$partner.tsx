import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Section } from "../components/site/primitives";

const partners: Record<string, { name: string; why: string }> = {
  "brampton-board-of-trade": { name: "Brampton Board of Trade", why: "The Board is connecting member businesses to practical AI adoption without an expensive wrong turn." },
  "sheridan-college": { name: "Sheridan College", why: "Sheridan is referring alumni-run and Peel-region businesses ready for a first structured AI decision." },
};

export const Route = createFileRoute("/referral/$partner")({
  loader: ({ params }) => partners[params.partner] ?? { name: params.partner, why: "This organization is referring eligible businesses to BNext AI." },
  head: ({ loaderData }) => (loaderData ? ({
    meta: [
      { title: `${loaderData.name} × BNext AI` },
      { name: "description", content: loaderData.why },
      { property: "og:title", content: `${loaderData.name} × BNext AI` },
    ],
  }),
  component: ReferralPage,
});

function ReferralPage() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${p.name} × BNext AI`}
        title={<>A practical route from AI interest to a <span className="signal-underline">business decision.</span></>}
        lede={`${p.name} is connecting eligible businesses to BNext AI, a government-funded, vendor-neutral adoption program delivered in Brampton.`}
        ctas={<CTAButton to="/start">See my BNext route</CTAButton>}
      />

      <Section bg="paper">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>Why {p.name} is referring businesses</Eyebrow>
            <p className="mt-4 text-lg text-ink">{p.why}</p>
          </div>
          <div>
            <Eyebrow>What BNext provides</Eyebrow>
            <ul className="mt-4 space-y-3 text-lg text-ink">
              <li>· A structured route from AI curiosity to adoption.</li>
              <li>· A vendor-neutral evaluation when a vendor is needed.</li>
              <li>· Ongoing measurement after the program.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Eyebrow>What is shared and with whom</Eyebrow>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Referral status is shared with {p.name} only with participant notice and consent. Unless otherwise agreed, {p.name} receives aggregate results—not named participant data.
        </p>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-3xl font-display text-3xl md:text-4xl">Take the {p.name} route.</h2>
        <div className="mt-6"><CTAButton to="/start" variant="signal">See my BNext route</CTAButton></div>
      </Section>
    </>
  );
}
