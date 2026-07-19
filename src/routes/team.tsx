import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { team } from "../content/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Advisors — The BHive & BNext AI" },
      { name: "description", content: "People who understand the decision, not just the technology." },
      { property: "og:title", content: "The BHive team & advisors" },
      { property: "og:description", content: "Operators, builders, facilitators, and specialists behind BNext AI." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const groups = [
  "Program & guidance",
  "AI product & engineering",
  "Data, privacy & security",
  "Business case & operations",
  "Sector & community advisors",
] as const;

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & advisors"
        title={<>People who understand the decision— <span className="signal-underline">not just the technology.</span></>}
        lede="Meet the operators, builders, facilitators, and specialists behind The BHive and BNext AI."
        ctas={<CTAButton to="/events">Meet The BHive at an event</CTAButton>}
      />

      {groups.map((g) => {
        const members = team.filter((m) => m.group === g);
        if (members.length === 0) return null;
        return (
          <Section key={g} bg="paper" className="!py-14">
            <Reveal>
              <Eyebrow>{g}</Eyebrow>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {members.map((m) => (
                  <article key={m.name} className="rounded-md border border-border bg-card p-6">
                    <p className="font-display text-xl">{m.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                    <p className="mt-4 text-xs uppercase tracking-widest text-honey-deep">Helps clients decide</p>
                    <p className="mt-1 text-sm text-ink">{m.helps}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
                    <p className="mt-4 text-xs uppercase tracking-widest text-honey-deep">Ask them about</p>
                    <ul className="mt-1 flex flex-wrap gap-2 text-xs">
                      {m.ask.map((a) => <li key={a} className="rounded-full bg-muted px-2.5 py-1">{a}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </Section>
        );
      })}
    </>
  );
}
