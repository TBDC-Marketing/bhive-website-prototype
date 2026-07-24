import { createFileRoute } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The BHive — Brampton's business accelerator" },
      { name: "description", content: "The BHive is Brampton's business accelerator and innovation hub, built with the City of Brampton in 2022 and home today to BNext AI." },
      { property: "og:title", content: "About The BHive" },
      { property: "og:description", content: "A hive is where work gets done. From founders to established businesses adopting AI." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2022", title: "The doors open", body: "The BHive opens in downtown Brampton with the City of Brampton: a place for founders to learn, build, and join the local business community." },
  { year: "2022–2025", title: "Founders take root", body: "Brampton Next and the Global Entrepreneur Incubation Program guide international and newcomer entrepreneurs with practical education, peer accountability, and trusted networks." },
  { year: "2026", title: "Same hive, new mission", body: "The BHive turns that engine toward established businesses. BNext AI applies the proven playbook to AI adoption." },
];

const carried = [
  "Practical education over theory",
  "Direct guidance that respects the owner's time",
  "Peer accountability",
  "Trusted networks",
  "Brampton as home base, the City as founding partner",
  "Tangible progress over polished promises",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About The BHive"
        title={<>A hive is where <span className="signal-underline">work gets done.</span></>}
        lede="The BHive is Brampton's business accelerator and innovation hub, built with the City of Brampton in 2022. Today it is home to BNext AI, our signature program helping established Ontario businesses put AI to work."
        ctas={<>
          <CTAButton to="/bnext-ai">Explore BNext AI</CTAButton>
          <CTAButton to="/contact" variant="ghost">Meet the team</CTAButton>
        </>}
      />

      <Section bg="paper">
        <Reveal>
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl">
            Practical first. Proof over promises. The owner stays in charge.
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
            The businesses that keep Ontario running deserve the guidance large companies buy by the hour. The BHive is where an owner gets straight answers, a real plan, and trusted introductions. No hype. No vendor agenda.
          </p>
        </Reveal>
      </Section>

      <Section bg="ink">
        <Reveal>
          <p className="eyebrow text-honey">Our signature program · BNext AI</p>
          <h2 className="mt-6 max-w-4xl font-display text-5xl md:text-6xl text-paper">
            From AI curiosity to <span className="text-honey">AI working in your business.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-paper/75">
            AI is easier to try and harder to evaluate. BNext AI guides owners from one valuable workflow to a governed implementation route.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTAButton to="/bnext-ai" variant="signal">See the BNext AI program</CTAButton>
          </div>
        </Reveal>
      </Section>

      <Section bg="paper">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl md:text-5xl">
            Before we helped businesses adopt AI, we helped people build them.
          </h2>
        </Reveal>
        <div className="mt-16 relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-honey md:block" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-3 md:pl-12 relative">
                    <span className="absolute left-2 top-3 hidden h-3 w-3 rounded-full bg-honey md:block" />
                    <p className="font-display text-3xl md:text-4xl">{t.year}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-2xl md:text-3xl">{t.title}</h3>
                    <p className="mt-3 text-muted-foreground">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <Reveal>
          <Eyebrow>Legacy</Eyebrow>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            The founders, mentors, and alumni The BHive has supported since 2022 are the ground BNext AI builds on. Program figures will be published once reconciled with leadership.
          </p>
        </Reveal>
      </Section>

      <Section bg="paper">
        <Reveal>
          <Eyebrow>What carried forward</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Same hive. New mission.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {carried.map((c) => (
            <li key={c} className="flex gap-4 rounded-sm border border-ink/10 bg-muted p-6">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-honey-deep" />
              <span className="text-lg">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="ink">
        <Reveal>
          <p className="eyebrow text-honey">Alumni</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl text-paper">
            Once part of the hive, always part of the hive.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-paper/75">
            BHive alumni remain part of this community, as mentors, providers, and collaborators.
          </p>
          <div className="mt-10">
            <CTAButton to="/contact" variant="signal">Reconnect with The BHive</CTAButton>
          </div>
        </Reveal>
      </Section>

      <Section bg="honey">
        <h2 className="max-w-4xl font-display text-5xl md:text-6xl">
          The next chapter is being written by businesses like yours.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton to="/bnext-ai">Explore BNext AI</CTAButton>
          <CTAButton to="/start" variant="ghost">Find your starting point</CTAButton>
        </div>
      </Section>
    </>
  );
}
