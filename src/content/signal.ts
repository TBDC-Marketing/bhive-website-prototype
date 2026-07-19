export type SignalIssue = {
  slug: string;
  issue: number;
  date: string;
  thesis: string;
  whatChanged: string;
  whyItMatters: string;
  theMove: string;
  fromPeel?: string;
  watching: string;
  relatedGuide?: string;
};

export const signalIssues: SignalIssue[] = [
  { slug: "shadow-ai-is-a-signal", issue: 1, date: "2026-02-07", thesis: "Shadow AI is a signal, not a security event.", whatChanged: "Ontario operators report growing informal use of consumer AI tools by staff without formal review.", whyItMatters: "The workflows people reach for on their own tell you where the friction is—and where the first structured experiment should go.", theMove: "Ask each team to name one workflow they have already tried with AI. Use the Use-Case Brief on the one with the most reuse.", fromPeel: "The BHive is hosting a First Look clinic on March 5 for owners still deciding where to start.", watching: "Vendor licence changes that could disrupt informal use before it becomes structured.", relatedGuide: "use-case-brief" },
  { slug: "boring-workflow-wins", issue: 2, date: "2026-02-21", thesis: "The fastest route to AI value is a boring workflow.", whatChanged: "Case reviews across three Ontario businesses show the highest-return first proofs were quote drafting, meeting-action capture, and internal policy search.", whyItMatters: "Frequent, checkable, low-consequence workflows compound quickly and build the internal confidence for a bigger case.", theMove: "Score your candidate list on frequency × checkability × consequence. Pick the lowest-drama winner.", watching: "Whether operators can resist skipping straight to customer-facing use cases.", relatedGuide: "first-use-checklist" },
];
