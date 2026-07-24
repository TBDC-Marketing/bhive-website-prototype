import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { events, eventStatus, type BEvent } from "../content/events";
import { useState } from "react";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Clinics — BNext AI" },
      { name: "description", content: "Bring the business problem. Leave with a next move." },
      { property: "og:title", content: "BNext AI · Events & Clinics" },
      { property: "og:description", content: "Practical sessions, demos, office hours, and peer conversations." },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/events" },
    ],
    links: [{ rel: "canonical", href: "https://bhive-bnextai-preview.lovable.app/events" }],
  }),
  component: EventsIndex,
});

const types = ["All", "First Look", "Workflow Clinic", "Decision Room", "Peer Exchange"] as const;

function EventsIndex() {
  const [filter, setFilter] = useState<(typeof types)[number]>("All");
  const now = new Date();
  const upcoming = events.filter(
    (e) => eventStatus(e, now) === "upcoming" && (filter === "All" || e.type === filter),
  );
  const past = events.filter((e) => eventStatus(e, now) === "past");

  return (
    <>
      <PageHero
        eyebrow="Events & clinics"
        title={<>Bring the business problem. <span className="signal-underline">Leave with a next move.</span></>}
        lede="Practical sessions, demonstrations, office hours, and peer conversations. In person, small groups, no pitch."
        ctas={<CTAButton to="/events">See upcoming events</CTAButton>}
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

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.05}>
              <EventCard e={e} status="upcoming" />
            </Reveal>
          ))}
          {upcoming.length === 0 && (
            <p className="text-muted-foreground">No upcoming events match this filter yet.</p>
          )}
        </div>
      </Section>

      {past.length > 0 && (
        <Section bg="muted">
          <Eyebrow>Past events</Eyebrow>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Materials from earlier sessions</h2>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => <EventCard key={e.slug} e={e} status="past" />)}
          </div>
        </Section>
      )}
    </>
  );
}

function EventCard({ e, status }: { e: BEvent; status: "upcoming" | "past" }) {
  // Dedupe format when the location string already includes it.
  const locBase = e.location.replace(new RegExp(`\\s*·\\s*${e.format}$`, "i"), "").trim();
  const showFormat = !e.location.toLowerCase().includes(e.format.toLowerCase());
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
      <div className="mt-auto grid gap-1 pt-6 text-sm text-ink">
        <span>{new Date(e.date).toLocaleDateString("en-CA", { dateStyle: "long" })} · {e.timeLabel}</span>
        <span className="text-muted-foreground">
          {locBase}{showFormat ? ` · ${e.format}` : ""}
        </span>
      </div>
      <span className="mt-6 text-sm font-medium text-honey-deep">
        {status === "upcoming" ? "Reserve my place →" : "This event has ended →"}
      </span>
    </Link>
  );
}
