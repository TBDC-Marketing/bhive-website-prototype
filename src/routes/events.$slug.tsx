import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTAButton, Reveal, Section } from "../components/site/primitives";
import { events } from "../content/events";
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
  const [reserved, setReserved] = useState(false);

  return (
    <>
      <section className="border-b border-border/40 bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24">
          <Reveal>
            <p className="eyebrow text-honey-deep">{e.type} · Best for {e.bestFor}</p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-6xl">{e.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {new Date(e.date).toLocaleDateString("en-CA", { dateStyle: "long" })} · {e.timeLabel} · {e.location} · {e.format}
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
            {reserved ? (
              <div>
                <p className="eyebrow text-honey-deep">You are registered</p>
                <h3 className="mt-3 font-display text-2xl">Now make the session useful.</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>· Add it to your calendar.</li>
                  <li>· Share it with a colleague who owns the workflow.</li>
                  <li>· Complete the two-minute preparation prompt.</li>
                </ul>
              </div>
            ) : (
              <form onSubmit={(ev) => { ev.preventDefault(); setReserved(true); }} className="space-y-4">
                <p className="eyebrow text-honey-deep">Reserve my place</p>
                <TextField label="Name" required />
                <TextField label="Company" required />
                <TextField label="Email" type="email" required />
                <TextArea label="Who else should join you?" hint="A workflow owner or decision-maker makes the session more useful." />
                <button className="w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">
                  Reserve my place
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
