export type EventType =
  | "First Look"
  | "Workflow Clinic"
  | "Decision Room"
  | "Demo Review"
  | "Peer Exchange"
  | "Office Hours";

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
  /** Manual override only for cancelled/postponed — upcoming/past is computed from date. */
  override?: "cancelled" | "postponed";
};

export const events: BEvent[] = [
  {
    slug: "first-look-march",
    type: "First Look",
    title: "First Look: where AI actually helps a small business",
    date: "2026-03-05",
    timeLabel: "9:00–10:30 AM ET",
    location: "The BHive · 8 Nelson St W, Brampton",
    format: "In person",
    bestFor: "New",
    outcome: "Leave able to name the workflow worth changing first.",
    bring: "One recurring workflow that frustrates your team.",
    leaveWith: "A shortlist of first-win workflows and a next step.",
    agenda: [
      "Where AI shows up in Peel businesses",
      "Three sorting questions",
      "One-workflow exercise",
      "Q&A",
    ],
  },
  {
    slug: "workflow-clinic-quotes",
    type: "Workflow Clinic",
    title: "Workflow Clinic: quote drafting and approval",
    date: "2026-03-19",
    timeLabel: "1:00–3:30 PM ET",
    location: "The BHive",
    format: "In person",
    bestFor: "Experimenting",
    outcome: "Pressure-test quote drafting as a first proof.",
    bring: "A recent quote, your pricing rules, and the person who reviews quotes.",
    leaveWith: "A completed use-case brief and a go/no-go.",
    agenda: [
      "Brief walkthrough",
      "Data and risk review",
      "Human-in-loop rules",
      "Evidence plan",
    ],
  },
  {
    slug: "decision-room-buy-build",
    type: "Decision Room",
    title: "Decision Room: buy, build, reuse, or stop",
    date: "2026-04-02",
    timeLabel: "10:00–12:00 PM ET",
    location: "The BHive",
    format: "Hybrid",
    bestFor: "Ready",
    outcome: "Compare routes on shared criteria before committing budget.",
    bring: "Your candidate workflow, expected value, vendor conversations to date.",
    leaveWith: "A signed decision sheet with owner and review date.",
    agenda: [
      "Route criteria",
      "Vendor evidence",
      "Total cost and change load",
      "Decision and next gate",
    ],
  },
  {
    slug: "peer-exchange-feb",
    type: "Peer Exchange",
    title: "Peer Exchange: what we tried and what we stopped",
    date: "2026-02-12",
    timeLabel: "8:30–10:00 AM ET",
    location: "The BHive",
    format: "In person",
    bestFor: "All",
    outcome:
      "Three operators on experiments that worked and experiments retired.",
    bring: "One question for an operator further down the route.",
    leaveWith: "Notes and contacts.",
    agenda: [
      "Three operator accounts",
      "Facilitated Q&A",
      "Coffee and connect",
    ],
  },
];

/** Computed status from event date. Manual override wins for cancelled/postponed. */
export function eventStatus(
  e: BEvent,
  now: Date = new Date(),
): "upcoming" | "past" | "cancelled" | "postponed" {
  if (e.override) return e.override;
  return new Date(e.date).getTime() >= now.getTime() ? "upcoming" : "past";
}

export function isUpcoming(e: BEvent, now: Date = new Date()) {
  return eventStatus(e, now) === "upcoming";
}
