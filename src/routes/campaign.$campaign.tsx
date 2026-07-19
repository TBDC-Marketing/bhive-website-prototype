import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, PageHero, Section } from "../components/site/primitives";

const campaigns: Record<string, { headline: string; sub: string; audience: string; promise: string; cta: string; to: "/start" | "/events" | "/apply" }> = {
  "first-look": {
    headline: "You have heard about AI. Now see where it may be useful in your business.",
    sub: "A practical First Look session for Peel operators still deciding where to start.",
    audience: "Owners and operating leaders with no formal AI program yet.",
    promise: "Leave with one candidate workflow and a next step.",
    cta: "Reserve my place",
    to: "/events",
  },
  "punjabi-first-look": {
    headline: "AI ਬਾਰੇ ਸੁਣਿਆ ਹੈ। ਹੁਣ ਵੇਖੋ ਇਹ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਕਿੱਥੇ ਕੰਮ ਆ ਸਕਦੀ ਹੈ।",
    sub: "A community-language First Look session. Final Punjabi copy awaiting qualified community review.",
    audience: "Punjabi-speaking business owners in Peel.",
    promise: "Practical examples in your language, with follow-up in the same language.",
    cta: "Reserve my place",
    to: "/events",
  },
};

export const Route = createFileRoute("/campaign/$campaign")({
  loader: ({ params }) => campaigns[params.campaign] ?? campaigns["first-look"],
  head: ({ loaderData }) => (loaderData ? ({
    meta: [
      { title: `${loaderData.headline} — BNext AI` },
      { name: "description", content: loaderData.sub },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Campaign,
});

function Campaign() {
  const c = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={c.audience}
        title={<>{c.headline}</>}
        lede={c.sub}
        ctas={<CTAButton to={c.to}>{c.cta}</CTAButton>}
      />
      <Section bg="paper">
        <div className="grid gap-6 md:grid-cols-3">
          {["Government-funded and vendor-neutral", "Delivered in Brampton by The BHive", "Built on the BNext AI adoption method"].map((p) => (
            <div key={p} className="rounded-md border border-border bg-card p-6 text-sm text-ink">{p}</div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">{c.promise}</p>
        <p className="mt-4 text-xs text-muted-foreground">Eligibility and privacy details are confirmed during intake.</p>
      </Section>
    </>
  );
}
