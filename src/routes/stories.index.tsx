import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { stories } from "../content/site";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Client stories · BNext AI" },
      { name: "description", content: "Real businesses. Working AI. Measured progress. The problem, the route, the evidence, and what happened next." },
      { property: "og:title", content: "Client stories — BNext AI" },
      { property: "og:description", content: "Proof standards over promotional claims." },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Client stories"
        title={<>Real businesses. Working AI. <span className="signal-underline">Measured progress.</span></>}
        lede="The problem they chose, the route they took, what the evidence showed, and what happened next."
      />

      <Section bg="paper">
        <Reveal>
          <div className="rounded-sm border border-honey bg-honey-soft p-8 md:p-12">
            <p className="eyebrow text-honey-deep">Launch state</p>
            <p className="mt-4 max-w-3xl font-display text-2xl md:text-3xl">
              The first BNext AI stories are being built now.
            </p>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              We will publish the workflow, evidence, and result after the participant has reviewed and approved the account. Until then, explore the method and representative use cases.
            </p>
            <div className="mt-6"><CTAButton to="/ai-in-action">Explore AI in action</CTAButton></div>
          </div>
        </Reveal>

        <div className="mt-16">
          <Eyebrow>Proof standards</Eyebrow>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">Every published result should show:</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "what changed;",
              "baseline and comparison period;",
              "sample size or evidence source;",
              "owner of the measure;",
              "whether the result is observed, estimated, or projected;",
              "review date.",
            ].map((s) => (
              <li key={s} className="rounded-sm border border-ink/10 bg-muted p-4 text-sm">{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <div
              key={s.slug}
              className="rounded-sm border border-ink/10 bg-muted p-6"
            >
              <p className="eyebrow text-honey-deep">{s.evidenceStatus}</p>
              <p className="mt-3 text-lg leading-snug">{s.headline}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
