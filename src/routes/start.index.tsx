import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, Eyebrow, PageHero, Reveal, Section } from "../components/site/primitives";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/start/")({
  head: () => ({
    meta: [
      { title: "Find your starting point — BNext AI readiness check" },
      { name: "description", content: "Tell us what is true in your business today. We will show you the most useful next AI move." },
      { property: "og:title", content: "Find your starting point — BNext AI" },
      { property: "og:description", content: "Five practical questions. About 60 seconds. See your route before we ask for an email." },
    ],
  }),
  component: StartPage,
});

const doors = [
  {
    key: "new",
    label: "We have not started.",
    body: "We are curious, but no one owns a use case yet.",
    cta: "Show me the first-win route",
    to: "/start/new-to-ai" as const,
  },
  {
    key: "exp",
    label: "We are experimenting.",
    body: "People use AI, but we cannot prove ROI or choose what to scale.",
    cta: "Show me the validation route",
    to: "/start/experimenting" as const,
  },
  {
    key: "ready",
    label: "We are ready to invest.",
    body: "We have a problem, urgency, and decision-makers engaged.",
    cta: "Show me the implementation route",
    to: "/start/ready-to-implement" as const,
  },
];

const questions = [
  { q: "Has anyone in the business used AI on real work in the last 60 days?", a: ["Not yet", "A few people, informally", "Yes, across multiple teams"] },
  { q: "Is there a named owner for at least one AI experiment?", a: ["No", "Informal", "Yes, with a review date"] },
  { q: "Do you have a specific workflow you want to change?", a: ["Not really", "A rough idea", "Yes, and I can name the friction"] },
  { q: "Is there budget or a buying window in the next 90 days?", a: ["No", "Possibly", "Yes"] },
  { q: "Would sensitive customer, financial, or employee data be involved?", a: ["No", "Possibly", "Yes"] },
];

function StartPage() {
  const [step, setStep] = useState<number>(-1); // -1 = doors, 0..4 questions, 5 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [mode, setMode] = useState<"doors" | "guided">("doors");

  const score = answers.reduce((a, b) => a + b, 0);
  const result =
    score <= 3
      ? { tag: "Start with one useful win.", body: "You do not need a full AI strategy yet.", to: "/start/new-to-ai" as const }
      : score <= 7
      ? { tag: "Turn experiments into a business case.", body: "The opportunity is not more tools; it is one validated decision.", to: "/start/experimenting" as const }
      : { tag: "Prepare to implement.", body: "Your next risk is moving quickly without the right acceptance criteria and controls.", to: "/start/ready-to-implement" as const };

  return (
    <>
      <PageHero
        eyebrow="Start here"
        title={<>You do not need to know your <span className="signal-underline">AI maturity score.</span></>}
        lede="Tell us what is true in your business today. We will show you the most useful next move."
      />

      <Section bg="paper">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 border-b border-border pb-4">
            <button
              onClick={() => setMode("doors")}
              className={`rounded-full px-4 py-2 text-sm ${mode === "doors" ? "bg-ink text-paper" : "text-muted-foreground"}`}
            >
              One-click self-sort
            </button>
            <button
              onClick={() => { setMode("guided"); setStep(0); setAnswers([]); }}
              className={`rounded-full px-4 py-2 text-sm ${mode === "guided" ? "bg-ink text-paper" : "text-muted-foreground"}`}
            >
              Five-question check
            </button>
          </div>
        </Reveal>

        {mode === "doors" && (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {doors.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.05}>
                <Link
                  to={d.to}
                  className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-muted p-8 transition-all hover:border-ink hover:bg-paper"
                >
                  <div>
                    <p className="font-display text-2xl">{d.label}</p>
                    <p className="mt-4 text-muted-foreground">{d.body}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    {d.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        {mode === "guided" && (
          <div className="mt-12">
            {step < questions.length ? (
              <div>
                <div className="mb-8 flex items-center gap-2">
                  {questions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full ${i <= step ? "bg-honey" : "bg-border"}`}
                    />
                  ))}
                </div>
                <p className="eyebrow text-honey-deep">Question {step + 1} of {questions.length}</p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-4xl">{questions[step]!.q}</h2>
                <div className="mt-8 grid gap-3 md:max-w-2xl">
                  {questions[step]!.a.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setAnswers((a) => [...a, i]);
                        setStep((s) => s + 1);
                      }}
                      className="group flex items-center justify-between rounded-sm border border-ink/15 bg-paper px-6 py-4 text-left transition-all hover:border-ink hover:bg-muted"
                    >
                      <span>{opt}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <Reveal>
                <div className="rounded-sm border border-ink/10 bg-muted p-10">
                  <p className="eyebrow text-honey-deep">Your route</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl">{result.tag}</h2>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{result.body}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <CTAButton to={result.to}>See the route</CTAButton>
                    <button
                      onClick={() => { setAnswers([]); setStep(0); }}
                      className="rounded-full border border-ink/20 px-6 py-3 text-sm"
                    >
                      Start over
                    </button>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        )}
      </Section>
    </>
  );
}
