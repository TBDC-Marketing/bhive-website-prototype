import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CTAButton, Reveal, Section } from "../components/site/primitives";
import { signalIssues } from "../content/signal";

export const Route = createFileRoute("/signal/$issue")({
  loader: ({ params }) => {
    const s = signalIssues.find((x) => x.slug === params.issue);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.thesis} — BNext Signal` : "BNext Signal" },
      { name: "description", content: loaderData?.whatChanged ?? "" },
      { property: "og:title", content: loaderData?.thesis ?? "BNext Signal" },
      { property: "og:description", content: loaderData?.whyItMatters ?? "" },
    ],
  }),
  component: SignalDetail,
  notFoundComponent: () => (
    <Section bg="paper">
      <h1 className="font-display text-4xl">Issue not found.</h1>
      <Link to="/signal" className="mt-6 inline-block text-honey-deep underline">Back to the Signal archive</Link>
    </Section>
  ),
});

function SignalDetail() {
  const s = Route.useLoaderData();
  return (
    <>
      <Section bg="ink" className="border-b border-paper/10">
        <Reveal>
          <p className="eyebrow text-honey">BNext Signal · Issue {s.issue} · {new Date(s.date).toLocaleDateString("en-CA", { dateStyle: "long" })}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-paper md:text-6xl">{s.thesis}</h1>
        </Reveal>
      </Section>

      <Section bg="paper">
        <div className="mx-auto max-w-3xl space-y-10">
          <Block title="What changed">{s.whatChanged}</Block>
          <Block title="Why an operator should care">{s.whyItMatters}</Block>
          <Block title="The move">{s.theMove}</Block>
          {s.fromPeel && <Block title="From Peel">{s.fromPeel}</Block>}
          <Block title="What we are watching">{s.watching}</Block>

          <div className="flex flex-wrap gap-4 pt-4">
            {s.relatedGuide && <CTAButton to="/field-guides/$slug" variant="signal">Use the related field guide</CTAButton>}
            <CTAButton to="/start" variant="ghost">Find your starting point</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-honey-deep">{title}</p>
      <p className="mt-3 text-lg leading-relaxed text-ink">{children}</p>
    </div>
  );
}
