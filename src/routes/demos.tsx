import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { demos } from "../content/demos";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Demos & Prototypes — See the workflow. Then inspect the evidence." },
      { name: "description", content: "Narrated BNext AI demos with the evidence and unknowns behind each one." },
      { property: "og:title", content: "BNext AI · Demos & Prototypes" },
      { property: "og:description", content: "A demo shows the experience. A proof shows it works here, for these users, within these controls." },
      { property: "og:url", content: "/demos" },
    ],
    links: [{ rel: "canonical", href: "/demos" }],
  }),
  component: DemosPage,
});

function DemosPage() {
  return (
    <>
      <PageHero
        eyebrow="Demos & prototypes"
        title={<>See the workflow. Then <span className="signal-underline">inspect the evidence.</span></>}
        lede="A polished demo can be useful. It is not proof of value, security, ownership, or adoption. These examples show both the experience and the gates behind it."
        ctas={<CTAButton to="/how-it-works">See how a demo becomes a decision</CTAButton>}
      />

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Launch demo set</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Five workflows. Synthetic or approved data only.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {demos.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-md border border-border bg-card p-8 shadow-[var(--shadow-frame)]">
                <p className="eyebrow text-honey-deep">Best for · {d.bestRoute} route</p>
                <h3 className="mt-3 font-display text-2xl leading-snug">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d.whatItDoes}</p>
                <dl className="mt-6 grid gap-3 text-sm">
                  <Row k="Business workflow" v={d.workflow} />
                  <Row k="What the person still decides" v={d.personDecides} />
                  <Row k="Data used" v={d.data} />
                  <Row k="What has been tested" v={d.tested} />
                  <Row k="What remains unproven" v={d.unproven} />
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl md:text-4xl">
            A demo answers "can it appear to work?" A proof answers "does it work here, for these users, within these controls?"
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/start" variant="signal">Find your starting point</CTAButton>
            <CTAButton to="/how-it-works" variant="ghost">See the six-stage method</CTAButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="text-sm text-ink">{v}</dd>
    </div>
  );
}
