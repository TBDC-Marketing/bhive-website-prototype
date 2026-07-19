import { createFileRoute, notFound } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Section } from "../components/site/primitives";
import { insights } from "../content/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const a = insights.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return { a };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const url = `https://bhive-bnextai-preview.lovable.app/insights/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.a.title} · Insights` },
        { name: "description", content: loaderData.a.shortVersion },
        { property: "og:title", content: loaderData.a.title },
        { property: "og:description", content: loaderData.a.shortVersion },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.a.title,
            description: loaderData.a.shortVersion,
            author: { "@type": "Organization", name: loaderData.a.author },
            datePublished: loaderData.a.published,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (<Section bg="paper"><h1 className="font-display text-4xl">Article not found.</h1></Section>),
  component: InsightDetail,
});

function InsightDetail() {
  const { a } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${a.lane} · ${a.readMinutes} min read`}
        title={a.title}
        lede={<><strong className="text-ink">The short version: </strong>{a.shortVersion}</>}
      />

      <Section bg="paper">
        <p className="text-sm text-muted-foreground">By {a.author} · Published {a.published}</p>
        <article className="mt-12 max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
          <div>
            <Eyebrow>The commonly held view</Eyebrow>
            <p className="mt-3">Most conversations about AI in the enterprise assume the constraint is the model. Newer, larger, faster. But the operators actually using AI on real work see a different constraint: the workflow, the evidence, and the owner.</p>
          </div>
          <div>
            <Eyebrow>What operators are actually seeing</Eyebrow>
            <p className="mt-3">Adoption follows the same three questions every time: Is the workflow worth changing? Is the result checkable? Is someone accountable when it changes?</p>
          </div>
          <div>
            <Eyebrow>The decision this creates</Eyebrow>
            <p className="mt-3">Stop shopping. Start scoping. Choose the workflow first, then the tool.</p>
          </div>
          <div className="rounded-sm border border-honey bg-honey-soft p-6 text-ink">
            <p className="eyebrow text-honey-deep">The operating implication</p>
            <p className="mt-3 font-display text-xl">A leader can act on this by naming one workflow, one owner, and one review date this week.</p>
          </div>
        </article>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-4xl font-display text-4xl md:text-5xl">
          If your experiments now affect other people, sensitive data, or consequential work, it is time to give them an owner and a route.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton to="/field-guides/experiment-to-value">Use the Experiment-to-Value Checklist</CTAButton>
          <CTAButton to="/start" variant="ghost">Find your starting point</CTAButton>
        </div>
      </Section>
    </>
  );
}
