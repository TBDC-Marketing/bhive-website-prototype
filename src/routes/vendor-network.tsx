import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/vendor-network")({
  head: () => ({
    meta: [
      { title: "Vendor Network — The right partner, after the right decision" },
      { name: "description", content: "BNext AI does not begin with a vendor list. We begin with the workflow, evidence, constraints, and route." },
      { property: "og:title", content: "BNext AI · Vendor Network" },
      { property: "og:description", content: "Requirements-based vendor matching, with disclosed rules and no commissions." },
      { property: "og:url", content: "/vendor-network" },
    ],
    links: [{ rel: "canonical", href: "/vendor-network" }],
  }),
  component: VendorNetwork,
});

function VendorNetwork() {
  return (
    <>
      <PageHero
        eyebrow="Vendor network"
        title={<>The right partner. <span className="signal-underline">After the right decision.</span></>}
        lede="BNext AI does not begin with a vendor list. We begin with the workflow, evidence, constraints, and route. Then we introduce suitable providers where a provider is actually needed."
        ctas={<><CTAButton to="/how-it-works">See how matching works</CTAButton><CTAButton to="/vendors/apply" variant="ghost">Become a vendor</CTAButton></>}
      />

      <Section bg="paper">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>What BNext does</Eyebrow>
            <ul className="mt-6 space-y-3 text-lg text-ink">
              <Bullet>Turns the use case into a comparable brief.</Bullet>
              <Bullet>Identifies required capabilities and constraints.</Bullet>
              <Bullet>Creates a fair evaluation structure.</Bullet>
              <Bullet>Helps the client inspect evidence, terms, support, security, and fit.</Bullet>
              <Bullet>Records why the route was selected.</Bullet>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>What BNext does not do</Eyebrow>
            <ul className="mt-6 space-y-3 text-lg text-ink">
              <Bullet>Accept commissions for a client choice.</Bullet>
              <Bullet>Guarantee vendor performance.</Bullet>
              <Bullet>Treat a polished demo as implementation evidence.</Bullet>
              <Bullet>Hide conflicts or partner roles.</Bullet>
              <Bullet>Make the accountable procurement decision for the client.</Bullet>
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section bg="ink">
        <p className="eyebrow text-honey">Matching flow</p>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-paper">
          {["Brief", "Requirements", "Shortlist", "Evidence", "Commercial review", "Client decision"].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-3">
              <span className="rounded-sm border border-honey/40 px-4 py-2 font-display text-lg">{s}</span>
              {i < arr.length - 1 && <span className="text-honey">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-paper/80">
          Network providers agree to disclose pricing assumptions, data handling, product dependencies, limitations, implementation responsibilities, conflicts, and reference evidence. They work from the same client brief and do not use program access for unsolicited selling.
        </p>
      </Section>

      <Section bg="honey">
        <h2 className="font-display text-3xl md:text-4xl">The brief comes first. The shortlist comes later.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <CTAButton to="/start" variant="signal">Find your starting point</CTAButton>
          <CTAButton to="/vendors/apply" variant="ghost">Apply to the vendor network</CTAButton>
        </div>
      </Section>
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-3"><span className="text-honey-deep">·</span>{children}</li>;
}
