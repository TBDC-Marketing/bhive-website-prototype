import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  CTAButton,
  Eyebrow,
  PageHero,
  Reveal,
  Section,
} from "../components/site/primitives";
import { useCases, fieldGuides, insights } from "../content/site";
import { upcomingEvents } from "../content/events";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — BNext AI use cases, field guides, insights, events" },
      {
        name: "description",
        content:
          "One place for everything BNext AI publishes: real workflows, decision guides, short field notes, and upcoming events.",
      },
      { property: "og:title", content: "Resources — BNext AI" },
      {
        property: "og:description",
        content:
          "Use cases, field guides, insights, and events for Ontario businesses adopting AI.",
      },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/resources" },
    ],
    links: [
      { rel: "canonical", href: "https://bhive-bnextai-preview.lovable.app/resources" },
    ],
  }),
  component: ResourcesHub,
});

function ResourcesHub() {
  const events = upcomingEvents().slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Everything BNext AI publishes, in <span className="signal-underline">one place.</span>
          </>
        }
        lede="Real workflows we've seen work. Short guides for the decisions owners have to make. Field notes from the program. Events you can walk into."
        ctas={
          <>
            <CTAButton to="/start">Find your starting point</CTAButton>
            <CTAButton to="/search" variant="ghost">
              Search resources
            </CTAButton>
          </>
        }
      />

      {/* Four pillar cards */}
      <Section bg="paper">
        <div className="grid gap-6 md:grid-cols-2">
          <Pillar
            to="/ai-in-action"
            eyebrow="AI in action"
            title="See where AI already fits."
            body={`${useCases.length} plain-language workflows across sales, operations, finance, HR, and customer service — each with the human role, evidence, and best starting route.`}
            cta="Browse the use-case library"
          />
          <Pillar
            to="/field-guides"
            eyebrow="Field guides"
            title="Make the decision, not just the survey."
            body={`${fieldGuides.length} short guides that name the decision, weigh the options, and hand you the next move — for owners who need to choose, not just learn.`}
            cta="Read the field guides"
          />
          <Pillar
            to="/insights"
            eyebrow="Insights"
            title="Short field notes from the program."
            body={`${insights.length} pieces on what's shifting for Ontario businesses — one meaningful change, one business implication, one move worth considering.`}
            cta="Read the latest"
          />
          <Pillar
            to="/events"
            eyebrow="Events"
            title="Walk in. Ask questions. Leave with a plan."
            body="Working sessions, briefings, and open-office hours in Brampton. In person, small groups, no pitch."
            cta="See upcoming events"
          />
        </div>
      </Section>

      {/* Upcoming events strip */}
      {events.length > 0 && (
        <Section bg="muted">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Upcoming</Eyebrow>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">
                  Coming up in Brampton.
                </h2>
              </div>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
              >
                All events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {events.map((e) => (
              <li key={e.slug}>
                <Link
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="group grid gap-2 py-6 md:grid-cols-[160px_1fr_auto] md:items-baseline md:gap-8"
                >
                  <span className="text-xs uppercase tracking-widest text-honey-deep">
                    {new Date(e.date).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="font-display text-2xl leading-snug group-hover:text-honey-deep">
                    {e.title}
                  </span>
                  <span className="text-sm text-muted-foreground">{e.location}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Closing CTA */}
      <Section bg="honey">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Not sure which resource fits? Start with the 5-question check.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10">
            <CTAButton to="/start">Find your starting point</CTAButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Pillar({
  to,
  eyebrow,
  title,
  body,
  cta,
}: {
  to: "/ai-in-action" | "/field-guides" | "/insights" | "/events";
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <Reveal>
      <Link
        to={to}
        className="group flex h-full flex-col justify-between rounded-sm border border-ink/15 bg-paper p-8 transition-all hover:border-ink hover:bg-honey-soft"
      >
        <div>
          <p className="eyebrow text-honey-deep">{eyebrow}</p>
          <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-base text-muted-foreground">{body}</p>
        </div>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </Reveal>
  );
}
