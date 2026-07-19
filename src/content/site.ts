// Static content modules — swap to CMS in Phase C

export type UseCase = {
  slug: string;
  title: string;
  outcome: string;
  function: string;
  sector?: string;
  bestStart: "New" | "Experimenting" | "Ready";
  humanRole: string;
  evidence: string;
  data: string;
};

export const useCases: UseCase[] = [
  { slug: "call-summary-followup", title: "Customer-call summary to accountable follow-up", outcome: "AI summarises calls and drafts the customer follow-up; a person checks facts and sends.", function: "Sales", bestStart: "Experimenting", humanRole: "Approver", evidence: "Time from call to sent follow-up; commitments captured; correction rate", data: "Call recordings, CRM records" },
  { slug: "quote-drafting", title: "Quote drafting from approved price and product rules", outcome: "Draft quotes from approved pricing and product rules; a person approves before send.", function: "Sales", bestStart: "Experimenting", humanRole: "Approver", evidence: "Quote turnaround; margin variance; error rate", data: "Product catalog, pricing rules" },
  { slug: "order-exception", title: "Order-exception detection and escalation", outcome: "Surface order exceptions before they become missed commitments.", function: "Operations", bestStart: "Ready", humanRole: "Exception owner", evidence: "Exceptions detected; time-to-escalate", data: "Order records, exception logs" },
  { slug: "policy-search", title: "Internal policy and procedure search", outcome: "Search internal policies without exposing them to public tools.", function: "Operations", bestStart: "New", humanRole: "Reader", evidence: "Retrieval accuracy; usage", data: "Internal policy library" },
  { slug: "service-note-update", title: "Service-note to customer-update workflow", outcome: "Turn service notes into a consistent customer follow-up.", function: "Customer Service", bestStart: "New", humanRole: "Approver", evidence: "Update turnaround; customer response rate", data: "Service tickets" },
  { slug: "proposal-draft", title: "Proposal first draft from approved source material", outcome: "Assemble a proposal draft from approved case studies and boilerplate.", function: "Sales", bestStart: "Experimenting", humanRole: "Editor", evidence: "Draft-to-final time; win rate", data: "Case library, template" },
  { slug: "invoice-exception", title: "Invoice or expense exception review", outcome: "Flag invoices and expenses that fall outside approved patterns.", function: "Finance", bestStart: "Experimenting", humanRole: "Approver", evidence: "Exceptions caught; false positive rate", data: "Invoice records" },
  { slug: "candidate-screening", title: "Candidate-screening administration with human decision control", outcome: "Administer initial screening; a person still makes hire decisions.", function: "HR", bestStart: "Ready", humanRole: "Decision-maker", evidence: "Time-to-shortlist; fairness audit", data: "Applications, role spec" },
  { slug: "maintenance-notes", title: "Maintenance-note classification and recurring-issue summary", outcome: "Classify maintenance notes and surface recurring issues to a supervisor.", function: "Operations", bestStart: "Experimenting", humanRole: "Supervisor", evidence: "Recurring issues identified", data: "Maintenance logs" },
  { slug: "multilingual-response", title: "Multilingual customer-message drafting with human approval", outcome: "Draft customer messages in the customer's language; a bilingual staffer approves.", function: "Customer Service", bestStart: "Experimenting", humanRole: "Approver", evidence: "Response time; correction rate", data: "Customer messages" },
  { slug: "supplier-comparison", title: "Supplier-document comparison", outcome: "Compare supplier documents side-by-side and surface differences.", function: "Operations", bestStart: "New", humanRole: "Reviewer", evidence: "Time saved on comparison", data: "Supplier docs" },
  { slug: "meeting-actions", title: "Meeting notes to owner, deadline, and next action", outcome: "Convert meeting notes into named actions with owners and deadlines.", function: "Operations", bestStart: "New", humanRole: "Approver", evidence: "Action completion rate", data: "Meeting transcripts" },
];

export type Story = {
  slug: string;
  company: string;
  sector: string;
  functionArea: string;
  startingPoint: "New" | "Experimenting" | "Ready";
  headline: string;
  problem: string;
  move: string;
  evidence: string;
  nextGate: string;
  evidenceStatus: "Observed" | "Estimated" | "Projected";
};

export const stories: Story[] = [
  { slug: "first-bnext-cohort", company: "First BNext AI stories are being built now", sector: "—", functionArea: "—", startingPoint: "New", headline: "The first BNext AI stories are being built now.", problem: "We will publish the workflow, evidence, and result after the participant has reviewed and approved the account.", move: "In the meantime, explore the method and representative use cases.", evidence: "Awaiting participant review", nextGate: "Publish", evidenceStatus: "Projected" },
];

export type FieldGuide = {
  slug: string;
  title: string;
  decision: string;
  format: "Worksheet" | "Checklist" | "Playbook";
  minutes: number;
  bestFor: "New" | "Experimenting" | "Ready" | "All";
};

export const fieldGuides: FieldGuide[] = [
  { slug: "first-use-checklist", title: "The AI First-Use Checklist", decision: "Choose a low-risk workflow and verify it on real work.", format: "Checklist", minutes: 15, bestFor: "New" },
  { slug: "use-case-brief", title: "The Use-Case Brief", decision: "Define user, workflow, data, value, and risk before choosing a tool.", format: "Worksheet", minutes: 25, bestFor: "All" },
  { slug: "experiment-to-value", title: "The AI Experiment-to-Value Checklist", decision: "Know when an experiment needs an owner and guardrails.", format: "Checklist", minutes: 10, bestFor: "Experimenting" },
  { slug: "buy-build-reuse-stop", title: "The Buy, Build, Reuse, or Stop Decision Sheet", decision: "Compare routes on common criteria.", format: "Worksheet", minutes: 30, bestFor: "Experimenting" },
  { slug: "roi-model", title: "The Practical AI ROI Model", decision: "Separate observed value from hopeful projections.", format: "Worksheet", minutes: 40, bestFor: "Experimenting" },
  { slug: "production-candidate", title: "The Production-Candidate Acceptance Checklist", decision: "Test ownership, access, security, support, exceptions, and measures.", format: "Checklist", minutes: 20, bestFor: "Ready" },
  { slug: "adoption-review", title: "The 30/60/90-Day Adoption Review", decision: "Track usage, business value, incidents, and change requests.", format: "Playbook", minutes: 20, bestFor: "All" },
  { slug: "ai-use-policy", title: "The Small-Business AI Use Policy Starter", decision: "Basic rules for low-risk responsible use.", format: "Playbook", minutes: 30, bestFor: "New" },
];

export type Insight = {
  slug: string;
  lane: "Signals" | "From the Field" | "Decision Notes" | "Local Briefings";
  title: string;
  shortVersion: string;
  readMinutes: number;
  author: string;
  published: string;
};

export const insights: Insight[] = [
  { slug: "team-already-using-ai", lane: "Decision Notes", title: "Your team is already using AI. Here is when it becomes a company decision.", shortVersion: "Shadow AI is not a security event—it is a signal that a workflow is worth examining. The right response is to give one experiment an owner and a route.", readMinutes: 6, author: "The BHive", published: "2026-02-14" },
  { slug: "signs-ready-for-business-case", lane: "From the Field", title: "Five signs an AI experiment is ready for a business case.", shortVersion: "When the same prompt gets reused, when errors have consequences, when another team asks for access—your experiment is done experimenting.", readMinutes: 5, author: "The BHive", published: "2026-02-21" },
  { slug: "boring-workflow-wins", lane: "Decision Notes", title: "The fastest route to AI value is usually a boring workflow.", shortVersion: "The workflows worth changing first are frequent, checkable, and low-consequence. Ambition comes after evidence.", readMinutes: 7, author: "The BHive", published: "2026-03-01" },
  { slug: "human-in-the-loop", lane: "Decision Notes", title: "What \"human in the loop\" should mean in a small business.", shortVersion: "Routine cases automate. Consequential exceptions reach a person. The rule is decided before the tool is chosen.", readMinutes: 5, author: "The BHive", published: "2026-03-08" },
  { slug: "production-candidate-gap", lane: "From the Field", title: "Production-candidate is not production-ready. Here are the missing gates.", shortVersion: "Ownership, access, security, support, exceptions, measures. Six gates decide whether the demo becomes an adopted workflow.", readMinutes: 8, author: "The BHive", published: "2026-03-15" },
  { slug: "buy-or-build-wrong-question", lane: "Decision Notes", title: "Buy or build is the wrong first question.", shortVersion: "The first question is whether the workflow is worth changing. Buy/build/reuse/stop is a downstream decision made on evidence.", readMinutes: 6, author: "The BHive", published: "2026-03-22" },
  { slug: "choosing-ai-tools", lane: "Decision Notes", title: "Choosing AI tools for business workflows: a workflow-first buyer's guide.", shortVersion: "The right AI tool for your business starts with the workflow, not the vendor. Name the workflow, define the evidence, then evaluate AI tools on fit, risk, and ROI.", readMinutes: 9, author: "The BHive", published: "2026-04-05" },
];
