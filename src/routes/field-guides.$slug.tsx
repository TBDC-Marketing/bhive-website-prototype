import { createFileRoute, notFound } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Section } from "../components/site/primitives";
import { fieldGuides } from "../content/site";

export const Route = createFileRoute("/field-guides/$slug")({
  loader: ({ params }) => {
    const g = fieldGuides.find((x) => x.slug === params.slug);
    if (!g) throw notFound();
    return { g };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Guide not found" }, { name: "robots", content: "noindex" }] };
    const url = `https://bhive-bnextai-preview.lovable.app/field-guides/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.g.title} · Field guide` },
        { name: "description", content: loaderData.g.decision },
        { property: "og:title", content: loaderData.g.title },
        { property: "og:description", content: loaderData.g.decision },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (<Section bg="paper"><h1 className="font-display text-4xl">Guide not found.</h1></Section>),
  component: GuideDetail,
});

function GuideDetail() {
  const { g } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`Field guide · ${g.format}`}
        title={g.title}
        lede={g.decision}
        ctas={<CTAButton to="/contact">Get the editable version</CTAButton>}
      />

      <Section bg="paper">
        <div className="flex flex-wrap gap-6 border-b border-border pb-6 text-sm text-muted-foreground">
          <span><strong className="text-ink">Best for:</strong> {g.bestFor}</span>
          <span><strong className="text-ink">Time:</strong> {g.minutes} minutes</span>
          <span><strong className="text-ink">Version:</strong> 2026-04</span>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Use this when</Eyebrow>
            <ul className="mt-4 space-y-3 text-lg text-muted-foreground">
              <li>you are choosing between candidate workflows;</li>
              <li>an experiment now affects other people, data, or decisions;</li>
              <li>leadership needs a defendable answer this quarter.</li>
            </ul>
          </div>
          <div>
            <Eyebrow>Do not use this to</Eyebrow>
            <ul className="mt-4 space-y-3 text-lg text-muted-foreground">
              <li>replace a security or legal review;</li>
              <li>bypass a live procurement process;</li>
              <li>score employees or vendors.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-sm border border-ink/10 bg-muted p-8">
          <Eyebrow>The tool</Eyebrow>
          <p className="mt-4 text-muted-foreground">
            The interactive version arrives in Phase C. The structure:
          </p>
          <ol className="mt-8 space-y-4">
            {["Name the workflow and owner.", "Identify the input, output, and error impact.", "Decide the smallest credible test.", "Assign the review date."].map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span className="mt-1 font-display text-2xl text-honey-deep">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-3xl font-display text-4xl md:text-5xl">Bring it into BNext.</h2>
        <p className="mt-6 max-w-2xl">This artifact plugs directly into your BNext AI route.</p>
        <div className="mt-8"><CTAButton to="/start">Find your starting point</CTAButton></div>
      </Section>
    </>
  );
}
