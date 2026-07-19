import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { useCases } from "../content/site";

export const Route = createFileRoute("/ai-in-action/$slug")({
  loader: ({ params }) => {
    const u = useCases.find((x) => x.slug === params.slug);
    if (!u) throw notFound();
    return { u };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Use case not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.u.title} · AI in action` },
        { name: "description", content: loaderData.u.outcome },
        { property: "og:title", content: loaderData.u.title },
        { property: "og:description", content: loaderData.u.outcome },
      ],
    };
  },
  notFoundComponent: () => (
    <Section bg="paper"><h1 className="font-display text-4xl">Use case not found.</h1></Section>
  ),
  component: UseCaseDetail,
});

function UseCaseDetail() {
  const { u } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${u.function}${u.sector ? ` · ${u.sector}` : ""}`}
        title={u.title}
        lede={u.outcome}
        ctas={<CTAButton to="/start">Assess this use case</CTAButton>}
      />

      <Section bg="paper">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Best starting point", u.bestStart],
            ["Human role", u.humanRole],
            ["Typical data", u.data],
          ].map(([k, v]) => (
            <div key={k} className="border-l-2 border-honey pl-4">
              <p className="eyebrow text-honey-deep">{k}</p>
              <p className="mt-2 text-lg">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="muted">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>The current workflow</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">
              Describe the trigger, steps, people, delays, rework, and systems today. Do not begin with the AI feature.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>Where AI helps</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">
              The exact task AI performs — draft, find, summarize, classify, predict, recommend, or act. What stays with the person is stated.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>What good looks like</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">
              Three to five acceptance criteria including quality and error tolerance, not only speed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow>What to measure</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">{u.evidence}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Eyebrow>Data and risk questions</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">
              What data enters? Who can see it? What happens when the output is wrong? Can it be reversed? Who handles the exception?
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Eyebrow>The smallest credible test</Eyebrow>
            <p className="mt-4 text-lg text-muted-foreground">
              Define a representative sample, time box, owner, tool boundary, and pass/fail decision.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl md:text-5xl">
            A useful idea becomes valuable when the workflow, evidence, and owner are clear.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/start">Assess this use case</CTAButton>
            <Link to="/ai-in-action" className="rounded-full border border-ink/30 px-6 py-3 text-sm">See another workflow</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
