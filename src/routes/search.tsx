import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "../components/site/primitives";
import { useCases } from "../content/site";
import { fieldGuides } from "../content/site";
import { insights } from "../content/site";
import { stories } from "../content/site";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — BNext AI" },
      { name: "description", content: "Find the workflow, answer, or next move." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

type Item = { type: string; title: string; body: string; to: string; params?: Record<string, string> };

function SearchPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const items: Item[] = useMemo(() => {
    return [
      ...useCases.map((u) => ({ type: "Use case", title: u.title, body: u.outcome, to: "/ai-in-action/$slug", params: { slug: u.slug } })),
      ...fieldGuides.map((g) => ({ type: "Field guide", title: g.title, body: g.decision, to: "/field-guides/$slug", params: { slug: g.slug } })),
      ...insights.map((i) => ({ type: "Insight", title: i.title, body: i.shortVersion, to: "/insights/$slug", params: { slug: i.slug } })),
      ...stories.map((s) => ({ type: "Story", title: s.headline, body: s.problem, to: "/stories", params: {} })),
    ];
  }, []);

  const filtered = q
    ? items.filter((i) => {
        if (filter !== "All" && i.type !== filter) return false;
        const t = (i.title + " " + i.body).toLowerCase();
        return t.includes(q.toLowerCase());
      })
    : [];

  const filters = ["All", "Use case", "Field guide", "Insight", "Story"];

  const suggested = useMemo(
    () => [
      { type: "Field guide", title: "How to choose a starting workflow", to: "/field-guides" as const },
      { type: "Use case", title: "Customer-call summary to accountable follow-up", to: "/ai-in-action/$slug" as const, params: { slug: "call-summary-followup" } },
      { type: "Insight", title: "Browse recent field notes", to: "/insights" as const },
      { type: "Route", title: "Not sure where to start? Take the 5-question check", to: "/start" as const },
    ],
    [],
  );

  return (
    <>
      <PageHero eyebrow="Search" title={<>Find the workflow, answer, or <span className="signal-underline">next move.</span></>} />
      <Section bg="paper">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Try "quote drafting," "shadow AI," "vendor," or "new to AI."`}
          className="w-full rounded-sm border border-border bg-card px-5 py-4 text-lg outline-none focus:border-honey-deep"
          autoFocus
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-widest ${filter === f ? "bg-ink text-paper" : "border border-border text-muted-foreground hover:border-ink"}`}>
              {f}
            </button>
          ))}
        </div>

        {!q && (
          <div className="mt-10">
            <p className="eyebrow text-honey-deep">Suggested</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {suggested.map((s) => (
                <li key={s.title}>
                  <Link
                    to={s.to}
                    params={("params" in s ? s.params : undefined) as never}
                    className="group grid gap-2 py-5 md:grid-cols-[120px_1fr] md:items-baseline md:gap-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-honey-deep">{s.type}</span>
                    <span className="font-display text-xl leading-snug group-hover:text-honey-deep">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {q && (
          <>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {filtered.map((i) => (
                <li key={i.type + i.title}>
                  <Link
                    to={i.to}
                    params={i.params as never}
                    className="group grid gap-2 py-5 md:grid-cols-[120px_1fr] md:items-baseline md:gap-6"
                  >
                    <span className="text-xs uppercase tracking-widest text-honey-deep">{i.type}</span>
                    <span>
                      <span className="block font-display text-xl leading-snug group-hover:text-honey-deep">{i.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{i.body}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {filtered.length === 0 && (
              <div className="mt-16 max-w-xl">
                <p className="font-display text-2xl">We could not find that phrase.</p>
                <p className="mt-3 text-sm text-muted-foreground">Try the business task instead of the tool name—or contact BNext.</p>
                <div className="mt-4 flex gap-4 text-sm text-honey-deep">
                  <Link to="/ai-in-action">Browse AI in Action</Link>
                  <Link to="/eligibility">Check FAQ</Link>
                  <Link to="/contact">Contact BNext</Link>
                </div>
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
}
