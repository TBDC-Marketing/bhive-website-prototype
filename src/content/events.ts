export type EventType = "First Look" | "Workflow Clinic" | "Decision Room" | "Demo Review" | "Peer Exchange" | "Office Hours";

export type BEvent = {
  slug: string;
  type: EventType;
  title: string;
  date: string; // ISO
  timeLabel: string; // e.g. "9:00–11:00 AM ET"
  location: string;
  format: "In person" | "Hybrid" | "Online";
  bestFor: "New" | "Experimenting" | "Ready" | "All";
  outcome: string;
  bring: string;
  leaveWith: string;
  agenda: string[];
  status: "upcoming" | "past";
};

export const events: BEvent[] = [
  { slug: "first-look-march", type: "First Look", title: "First Look: where AI actually helps a small business", date: "2026-03-05", timeLabel: "9:00–10:30 AM ET", location: "The BHive · 8 Nelson St W, Brampton", format: "In person", bestFor: "New", outcome: "Leave able to name one workflow worth changing first.", bring: "One recurring workflow that frustrates your team.", leaveWith: "A short list of candidate first-win workflows and a next step.", agenda: ["Where AI is showing up in Peel businesses", "Three questions to sort useful from noisy", "One-workflow exercise", "Q&A"], status: "upcoming" },
  { slug: "workflow-clinic-quotes", type: "Workflow Clinic", title: "Workflow Clinic: quote drafting and approval", date: "2026-03-19", timeLabel: "1:00–3:30 PM ET", location: "The BHive", format: "In person", bestFor: "Experimenting", outcome: "Pressure-test whether quote drafting is a defensible first proof.", bring: "A recent quote, your pricing rules, and the person who reviews quotes today.", leaveWith: "A completed use-case brief and a go/no-go recommendation.", agenda: ["Use-case brief walkthrough", "Data and risk review", "Human-in-loop rules", "Evidence plan"], status: "upcoming" },
  { slug: "decision-room-buy-build", type: "Decision Room", title: "Decision Room: buy, build, reuse, or stop", date: "2026-04-02", timeLabel: "10:00–12:00 PM ET", location: "The BHive · Hybrid", format: "Hybrid", bestFor: "Ready", outcome: "Compare routes on shared criteria before committing budget.", bring: "Your candidate workflow, expected value, and any vendor conversations to date.", leaveWith: "A signed decision sheet with an owner and review date.", agenda: ["Route criteria", "Vendor evidence review", "Total cost and change load", "Decision and next gate"], status: "upcoming" },
  { slug: "peer-exchange-feb", type: "Peer Exchange", title: "Peer Exchange: what we tried and what we stopped", date: "2026-02-12", timeLabel: "8:30–10:00 AM ET", location: "The BHive", format: "In person", bestFor: "All", outcome: "Hear three operators describe experiments that worked and experiments that were retired.", bring: "One question you would ask an operator further down the route.", leaveWith: "Notes and contacts for follow-up conversations.", agenda: ["Three operator accounts", "Facilitated Q&A", "Coffee and connect"], status: "past" },
];
