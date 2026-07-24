import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { fieldGuides } from "../content/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/field-guides/")({
  head: () => ({
    meta: [
      { title: "Field guides · BNext AI" },
      { name: "description", content: "Short, practical guides for choosing a use case, testing value, managing risk, and moving from experiment to adoption." },
      { property: "og:title", content: "Field guides — BNext AI" },
      { property: "og:description", content: "Use the same tools we use inside the program." },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Field guides"
        title={<>Use the same tools <span className="signal-underline">we use inside the program.</span></>}
        lede="Short guides for choosing a use case, testing value, managing risk, and moving from experiment to adoption."
      />

      <Section bg="paper">
        <div className="grid gap-4 md:grid-cols-2">
          {fieldGuides.map((g, i) => (
            <Reveal key={g.slug} delay={Math.min(i * 0.03, 0.2)}>
              <Link
                to="/field-guides/$slug"
                params={{ slug: g.slug }}
                className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-muted p-8 transition-all hover:border-ink hover:bg-paper"
              >
                <div>
                  <p className="eyebrow text-honey-deep">{g.format} · {g.minutes} min · Best for {g.bestFor}</p>
                  <h2 className="mt-4 font-display text-2xl md:text-3xl">{g.title}</h2>
                  <p className="mt-4 text-muted-foreground">{g.decision}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Open the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
