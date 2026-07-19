import { createFileRoute, notFound } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Section } from "../components/site/primitives";
import { stories } from "../content/site";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const s = stories.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { s };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Story not found" }, { name: "robots", content: "noindex" }] };
    const url = `https://bhive-bnextai-preview.lovable.app/stories/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.s.headline} · Client story` },
        { name: "description", content: loaderData.s.problem },
        { property: "og:title", content: loaderData.s.headline },
        { property: "og:description", content: loaderData.s.problem },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (<Section bg="paper"><h1 className="font-display text-4xl">Story not found.</h1></Section>),
  component: StoryDetail,
});

function StoryDetail() {
  const { s } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={`${s.sector} · ${s.functionArea} · ${s.startingPoint}`}
        title={s.headline}
        lede={s.problem}
        ctas={<CTAButton to="/start">See the route for my business</CTAButton>}
      />
      <Section bg="paper">
        <div className="grid gap-8 md:grid-cols-2">
          <div><Eyebrow>The move</Eyebrow><p className="mt-4 text-lg">{s.move}</p></div>
          <div><Eyebrow>The evidence</Eyebrow><p className="mt-4 text-lg">{s.evidence}</p></div>
          <div><Eyebrow>Evidence status</Eyebrow><p className="mt-4 text-lg">{s.evidenceStatus}</p></div>
          <div><Eyebrow>Next gate</Eyebrow><p className="mt-4 text-lg">{s.nextGate}</p></div>
        </div>
      </Section>
    </>
  );
}
