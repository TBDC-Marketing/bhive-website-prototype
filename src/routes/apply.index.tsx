import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, PageHero, Section } from "../components/site/primitives";
import { TextField, TextArea, SelectField, FormNote } from "../components/site/FormField";

export const Route = createFileRoute("/apply/")({
  head: () => ({
    meta: [
      { title: "Program Expression of Interest — BNext AI" },
      { name: "description", content: "Start where you are. Tell us the business problem, who owns it, and what you have tried." },
      { property: "og:title", content: "Express your interest in BNext AI" },
      { property: "og:description", content: "About 6–8 minutes. Complete in one sitting; drafts are not saved." },
      { property: "og:url", content: "/apply" },
    ],
    links: [{ rel: "canonical", href: "/apply" }],
  }),
  component: ApplyPage,
});

const steps = ["Your business", "Your starting point", "The business problem", "Team and timing", "Data and consequence", "Declarations"] as const;

function ApplyPage() {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const last = step === steps.length - 1;

  return (
    <>
      <PageHero
        eyebrow="Express your interest"
        title={<>Start <span className="signal-underline">where you are.</span></>}
        lede="Tell us the business problem, who owns it, and what you have tried. If BNext is a fit, we will confirm your route and next step."
      />

      <Section bg="paper">
        {/* Mobile compact progress */}
        <div className="mb-6 md:hidden">
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full ${i <= step ? "bg-honey" : "bg-border"}`}
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-ink">
            <span className="text-muted-foreground">Step {step + 1} of {steps.length} — </span>
            <span className="font-medium">{steps[step]}</span>
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <p className="eyebrow text-honey-deep">Route · 6 waypoints</p>
            <ol className="mt-4 space-y-2 text-sm">
              {steps.map((s, i) => (
                <li key={s} className={`flex gap-3 ${i === step ? "text-ink font-medium" : "text-muted-foreground"}`}>
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-xs ${i <= step ? "bg-ink text-paper" : "border border-border"}`}>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-muted-foreground">About 6–8 minutes. Complete in one sitting; drafts are not saved.</p>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (last) nav({ to: "/apply/confirmation" });
              else setStep((s) => s + 1);
            }}
            className="space-y-6 rounded-md border border-border bg-card p-8"
          >
            <p className="eyebrow text-honey-deep">Step {step + 1} of {steps.length}</p>
            <h2 className="font-display text-3xl">{steps[step]}</h2>

            {step === 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                <TextField label="Legal or trading name" required />
                <TextField label="Website" />
                <TextField label="Sector" />
                <TextField label="Municipality" required />
                <SelectField label="Employees">
                  <option>1–5</option><option>6–20</option><option>21–50</option><option>51–200</option><option>200+</option>
                </SelectField>
                <TextField label="Years operating" type="number" />
              </div>
            )}
            {step === 1 && (
              <SelectField label="What is happening today?" required>
                <option>We have not started using AI.</option>
                <option>People experiment informally.</option>
                <option>We have tried structured pilots.</option>
                <option>We are ready to invest in one production use case.</option>
              </SelectField>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <TextArea label="What workflow, delay, cost, risk, or customer problem would you most like to improve?" required />
                <TextField label="Who does this work today?" />
                <TextField label="How often does it happen?" />
                <TextField label="How would you know it improved?" />
                <FormNote>An estimate is fine. We use this to choose the route, not to grade your business.</FormNote>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-4 md:grid-cols-2">
                <TextField label="Executive sponsor" />
                <TextField label="Workflow owner" />
                <TextField label="Technical / security support (if relevant)" />
                <SelectField label="Budget readiness">
                  <option>Not yet</option><option>Possibly, next quarter</option><option>Yes, in this budget cycle</option>
                </SelectField>
                <TextField label="Target timing" />
                <SelectField label="Attendance commitment">
                  <option>Owner will attend sessions</option><option>Delegate with owner review</option>
                </SelectField>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <SelectField label="Does the workflow involve personal or confidential data?"><option>No</option><option>Possibly</option><option>Yes</option></SelectField>
                <SelectField label="External users involved?"><option>No</option><option>Yes</option></SelectField>
                <SelectField label="Any irreversible actions?"><option>No</option><option>Yes</option></SelectField>
                <SelectField label="Impact of an error"><option>Low</option><option>Moderate</option><option>High</option></SelectField>
                <FormNote>Do not paste customer, employee, financial, health, or other sensitive records here.</FormNote>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-4 text-sm text-muted-foreground">
                {[
                  "I confirm my business meets the eligibility summary or wish to be reviewed.",
                  "The information provided is accurate to the best of my knowledge.",
                  "I consent to BNext AI contacting me about program fit.",
                  "I have reviewed the privacy notice.",
                ].map((c) => (
                  <label key={c} className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1" />
                    <span>{c}</span>
                  </label>
                ))}
                <TextArea label="Accessibility or accommodation request (optional)" />
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="text-sm text-muted-foreground disabled:opacity-40"
              >
                ← Back
              </button>
              <button className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">
                {last ? "Submit expression of interest" : "Continue →"}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

export { Eyebrow };
