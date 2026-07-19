import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { insights } from "../content/site";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights · BNext AI" },
      { name: "description", content: "Clear analysis for owners and operators: fewer trend summaries, more decisions you can make." },
      { property: "og:title", content: "Insights — BNext AI" },
      { property: "og:description", content: "What matters in AI. What it means for your business." },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const [featured, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>What matters in AI. <span className="signal-underline">What it means for your business.</span></>}
        lede="Clear analysis for owners and operators: fewer trend summaries, more decisions you can make."
        ctas={<CTAButton to="/contact">Get the BNext Signal</CTAButton>}
      />

      <Section bg="paper">
        {featured && (
          <Reveal>
            <Link
              to="/insights/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-8 rounded-sm border border-ink/10 bg-muted p-8 transition-all hover:border-ink md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="eyebrow text-honey-deep">Featured · {featured.lane}</p>
                <p className="mt-3 text-xs text-muted-foreground">{featured.readMinutes} min read</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl leading-tight md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{featured.shortVersion}</p>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((i) => (
            <Link
              key={i.slug}
              to="/insights/$slug"
              params={{ slug: i.slug }}
              className="group flex h-full flex-col rounded-sm border border-ink/10 bg-paper p-6 transition-all hover:border-ink"
            >
              <p className="eyebrow text-honey-deep">{i.lane} · {i.readMinutes} min</p>
              <h3 className="mt-4 font-display text-xl leading-snug">{i.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{i.shortVersion}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
