import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTAButton, Reveal, Section } from "../components/site/primitives";
import { events, eventStatus } from "../content/events";
import { TextField, TextArea, FormNote } from "../components/site/FormField";
import { useState } from "react";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const e = events.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return e;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — BNext AI` : "Event" },
      { name: "description", content: loaderData?.outcome ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.outcome ?? "" },
    ],
  }),
  component: EventDetail,
  notFoundComponent: () => (
    <Section bg="paper">
      <h1 className="font-display text-4xl">Event not found.</h1>
      <Link to="/events" className="mt-6 inline-block text-honey-deep underline">Back to events</Link>
    </Section>
  ),
});

function EventDetail() {
  const e = Route.useLoaderData();
  const status = eventStatus(e);
  const isPast = status === "past";
  const [submitted, setSubmitted] = useState(false);

  // Dedupe format from location.
  const locBase = e.location.replace(new RegExp(`\\s*·\\s*${e.format}$`, "i"), "").trim();
  const showFormat = !e.location.toLowerCase().includes(e.format.toLowerCase());

  return (
    <>
      <section className="border-b border-border/40 bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
          <Reveal eager>
            <p className="eyebrow text-honey-deep">
              {e.type} · Best for {e.bestFor}
              {isPast && <span className="ml-3 rounded-full bg-muted px-2 py-0.5 text-[10px] text-ink">This event has ended</span>}
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-6xl">{e.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {new Date(e.date).toLocaleDateString("en-CA", { dateStyle: "long" })} · {e.timeLabel} · {locBase}
              {showFormat ? ` · ${e.format}` : ""}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-ink">{e.outcome}</p>
          </Reveal>
        </div>
      </section>

      <Section bg="paper">
        <div className="grid gap-16 md:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <Block title="Bring this">{e.bring}</Block>
            <Block title="Leave with this">{e.leaveWith}</Block>
            <div>
              <p className="eyebrow text-honey-deep">What we will cover</p>
              <ul className="mt-4 space-y-2 text-lg text-ink">
                {e.agenda.map((a: string) => <li key={a} className="flex gap-3"><span className="text-honey-deep">·</span>{a}</li>)}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-md border border-border bg-card p-6 shadow-[var(--shadow-frame)]">
            {isPast ? (
              <div>
                <p className="eyebrow text-honey-deep">This event has ended</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Registration is closed. Contact us for notes or the next session.
                </p>
                <div className="mt-4">
                  <CTAButton to="/contact" variant="ghost">Contact the program</CTAButton>
                </div>
              </div>
            ) : submitted ? (
              <div>
                <p className="eyebrow text-honey-deep">Request sent</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Registration isn't wired to a live backend yet. Email{" "}
                  <a href="mailto:bnextai@thebhive.ca" className="underline">bnextai@thebhive.ca</a>{" "}
                  to confirm your place.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(ev) => { ev.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <p className="eyebrow text-honey-deep">Reserve my place</p>
                <p className="text-xs text-muted-foreground">
                  Reservations open soon. Until then, email{" "}
                  <a href="mailto:bnextai@thebhive.ca" className="underline">bnextai@thebhive.ca</a>{" "}
                  to confirm your place.
                </p>
                <TextField label="Name" required />
                <TextField label="Company" required />
                <TextField label="Email" type="email" required />
                <TextArea label="Who else should join you?" hint="A workflow owner or decision-maker makes the session more useful." />
                <button className="w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">
                  Email the program to reserve
                </button>
                <FormNote>Do not include customer, employee, financial, or health data.</FormNote>
              </form>
            )}
          </aside>
        </div>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-3xl font-display text-3xl md:text-4xl">Not sure this event fits? Start with the readiness check.</h2>
        <div className="mt-6"><CTAButton to="/start" variant="signal">Find my starting point</CTAButton></div>
      </Section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-honey-deep">{title}</p>
      <p className="mt-3 text-lg text-ink">{children}</p>
    </div>
  );
}
