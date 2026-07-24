import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { CTAButton, PageHero, Reveal, Section } from "../components/site/primitives";
import { useCases } from "../content/site";

export const Route = createFileRoute("/ai-in-action/")({
  head: () => ({
    meta: [
      { title: "AI in action — Use-case library · BNext AI" },
      { name: "description", content: "Browse practical workflows by function, starting point, and expected human role." },
      { property: "og:title", content: "AI in action" },
      { property: "og:description", content: "See what AI actually does inside a business like yours." },
    ],
  }),
  component: UseCaseLibrary,
});

const functions = ["All", "Operations", "Sales", "Finance", "Customer Service", "HR"];
const starts = ["All", "New", "Experimenting", "Ready"];

function UseCaseLibrary() {
  const [fn, setFn] = useState("All");
  const [start, setStart] = useState("All");
  const filtered = useMemo(
    () => useCases.filter((u) => (fn === "All" || u.function === fn) && (start === "All" || u.bestStart === start)),
    [fn, start],
  );
  return (
    <>
      <PageHero
        eyebrow="AI in action"
        title={<>See what AI actually does <span className="signal-underline">inside a business like yours.</span></>}
        lede="Browse practical workflows by function, starting point, and human role."
        ctas={<CTAButton to="/start">Find a use case like mine</CTAButton>}
      />

      <Section bg="paper">
        <Reveal>
          <div className="flex flex-wrap gap-6 border-b border-border pb-6">
            <FilterGroup label="Function" options={functions} value={fn} onChange={setFn} />
            <FilterGroup label="Starting point" options={starts} value={start} onChange={setStart} />
          </div>
        </Reveal>
        <p className="mt-6 text-sm text-muted-foreground">{filtered.length} workflows</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u, i) => (
            <Reveal key={u.slug} delay={Math.min(i * 0.02, 0.2)}>
              <Link
                to="/ai-in-action/$slug"
                params={{ slug: u.slug }}
                className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-paper p-6 transition-all hover:border-ink"
              >
                <div>
                  <p className="eyebrow text-honey-deep">{u.function}</p>
                  <p className="mt-3 text-lg leading-snug">{u.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{u.outcome}</p>
                </div>
                <div className="mt-6 border-t border-border pt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <p>Best start · {u.bestStart}</p>
                  <p className="mt-1">Human role · {u.humanRole}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-sm border border-honey bg-honey-soft p-8">
            <p className="eyebrow text-honey-deep">Guidance</p>
            <p className="mt-4 font-display text-2xl md:text-3xl">
              Do not begin with "Where can we use AI?"
            </p>
            <p className="mt-4 text-muted-foreground">
              Begin with a workflow that is frequent, costly, slow, or inconsistent, and whose result can be checked.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <p className="eyebrow text-muted-foreground">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              value === o ? "bg-ink text-paper" : "border border-ink/20 text-muted-foreground hover:border-ink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
