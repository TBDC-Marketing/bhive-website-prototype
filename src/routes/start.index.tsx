import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton, PageHero, Reveal, Section } from "../components/site/primitives";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

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

type RouteKey = "new-to-ai" | "experimenting" | "ready-to-implement";

const doors: {
  key: RouteKey;
  label: string;
  body: string;
  cta: string;
  to: "/start/new-to-ai" | "/start/experimenting" | "/start/ready-to-implement";
}[] = [
  {
    key: "new-to-ai",
    label: "We have not started.",
    body: "We are curious, but no one owns a use case yet.",
    cta: "Show me the first-win route",
    to: "/start/new-to-ai",
  },
  {
    key: "experimenting",
    label: "We are experimenting.",
    body: "People use AI, but we cannot prove ROI or choose what to scale.",
    cta: "Show me the validation route",
    to: "/start/experimenting",
  },
  {
    key: "ready-to-implement",
    label: "We are ready to invest.",
    body: "We have a problem, urgency, and decision-makers engaged.",
    cta: "Show me the implementation route",
    to: "/start/ready-to-implement",
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
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [mode, setMode] = useState<"doors" | "guided">("doors");

  const score = answers.reduce((a, b) => a + b, 0);
  const result =
    score <= 3
      ? {
          key: "new-to-ai" as RouteKey,
          tag: "Start with one useful win.",
          body: "You do not need a full AI strategy yet.",
          why: "Your answers suggest little AI use and no named owner yet — the highest-leverage move is one small, provable win.",
          to: "/start/new-to-ai" as const,
        }
      : score <= 7
      ? {
          key: "experimenting" as RouteKey,
          tag: "Turn experiments into a business case.",
          body: "The opportunity is not more tools; it is one validated decision.",
          why: "You already have activity but not proof — the next move is a structured validation, not another pilot.",
          to: "/start/experimenting" as const,
        }
      : {
          key: "ready-to-implement" as RouteKey,
          tag: "Prepare to implement.",
          body: "Your next risk is moving quickly without the right acceptance criteria and controls.",
          why: "You have urgency, budget, and data considerations — implementation risk is real; controls matter.",
          to: "/start/ready-to-implement" as const,
        };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  const back = () => {
    if (step === 0) return;
    setAnswers((a) => a.slice(0, -1));
    setStep((s) => s - 1);
  };

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
              Choose in one click
            </button>
            <button
              onClick={() => { setMode("guided"); restart(); }}
              className={`rounded-full px-4 py-2 text-sm ${mode === "guided" ? "bg-ink text-paper" : "text-muted-foreground"}`}
            >
              Answer 5 questions
            </button>
          </div>
        </Reveal>

        {mode === "doors" && (
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {doors.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.05}>
                <Link
                  to={d.to}
                  search={{ route: d.key }}
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
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-honey-deep">Question {step + 1} of {questions.length}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-muted-foreground transition-colors hover:border-ink hover:text-ink disabled:opacity-40 disabled:hover:border-ink/15 disabled:hover:text-muted-foreground"
                    >
                      <ArrowLeft className="h-3 w-3" /> Back
                    </button>
                    <button
                      onClick={restart}
                      className="inline-flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-muted-foreground transition-colors hover:border-ink hover:text-ink"
                    >
                      <RotateCcw className="h-3 w-3" /> Restart
                    </button>
                  </div>
                </div>
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
                  <div className="mt-6 rounded-sm border-l-2 border-honey bg-paper p-4">
                    <p className="eyebrow text-muted-foreground">Why this route</p>
                    <p className="mt-2 text-sm text-ink">{result.why}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <CTAButton to={result.to} search={{ route: result.key, score }}>
                      See the route
                    </CTAButton>
                    <button
                      onClick={restart}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm hover:border-ink"
                    >
                      <RotateCcw className="h-4 w-4" /> Start over
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
