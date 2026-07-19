import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { events } from "../content/events";
import { useState } from "react";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Clinics — BNext AI" },
      { name: "description", content: "Bring the business problem. Leave with a next move." },
      { property: "og:title", content: "BNext AI · Events & Clinics" },
      { property: "og:description", content: "Practical sessions, demos, office hours, and peer conversations." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsIndex,
});

const types = ["All", "First Look", "Workflow Clinic", "Decision Room", "Peer Exchange"] as const;

function EventsIndex() {
  const [filter, setFilter] = useState<(typeof types)[number]>("All");
  const upcoming = events.filter((e) => e.status === "upcoming" && (filter === "All" || e.type === filter));
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        eyebrow="Events & clinics"
        title={<>Bring the business problem. <span className="signal-underline">Leave with a next move.</span></>}
        lede="Practical sessions, demonstrations, office hours, and peer conversations for businesses at different starting points."
        ctas={<CTAButton to="#upcoming">See upcoming events</CTAButton>}
      />

      <Section bg="paper" id="upcoming">
        <div className="flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <Eyebrow>Upcoming</Eyebrow>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">On the route now</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-widest ${filter === t ? "bg-ink text-paper" : "border border-border text-muted-foreground hover:border-ink"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.05}>
              <EventCard e={e} />
            </Reveal>
          ))}
          {upcoming.length === 0 && (
            <p className="text-muted-foreground">No upcoming events match this filter yet.</p>
          )}
        </div>
      </Section>

      <Section bg="muted">
        <Eyebrow>Past events</Eyebrow>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Materials from earlier sessions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {past.map((e) => <EventCard key={e.slug} e={e} />)}
        </div>
      </Section>
    </>
  );
}

function EventCard({ e }: { e: (typeof events)[number] }) {
  return (
    <Link
      to="/events/$slug"
      params={{ slug: e.slug }}
      className="group flex h-full flex-col rounded-md border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-frame)]"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="rounded-full bg-honey-soft px-2.5 py-1 text-honey-deep">{e.type}</span>
        <span>Best for · {e.bestFor}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl leading-snug group-hover:text-honey-deep">{e.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{e.outcome}</p>
      <div className="mt-6 grid gap-1 text-sm text-ink">
        <span>{new Date(e.date).toLocaleDateString("en-CA", { dateStyle: "long" })} · {e.timeLabel}</span>
        <span className="text-muted-foreground">{e.location} · {e.format}</span>
      </div>
      <span className="mt-6 text-sm font-medium text-honey-deep">{e.status === "upcoming" ? "Reserve my place →" : "Use the materials →"}</span>
    </Link>
  );
}
