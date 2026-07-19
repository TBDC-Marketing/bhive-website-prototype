export type Demo = {
  slug: string;
  title: string;
  workflow: string;
  whatItDoes: string;
  personDecides: string;
  data: string;
  tested: string;
  unproven: string;
  bestRoute: "New" | "Experimenting" | "Ready";
};

export const demos: Demo[] = [
  { slug: "meeting-commitments", title: "Meeting commitments assistant", workflow: "Turn meeting recordings into named actions with owners.", whatItDoes: "Transcribes, extracts commitments, drafts a follow-up email.", personDecides: "Approves the commitment list and sends the follow-up.", data: "Synthetic meeting transcripts.", tested: "Extraction accuracy on 40 recorded meetings.", unproven: "Cross-team ownership when commitments cross boundaries.", bestRoute: "New" },
  { slug: "proposal-drafter", title: "Approved-content proposal drafter", workflow: "Assemble a proposal from approved case studies and boilerplate.", whatItDoes: "Selects relevant sections and generates a first draft.", personDecides: "Edits and approves before send.", data: "Approved case library and template.", tested: "Draft-to-final time reduction, section relevance.", unproven: "Win-rate impact.", bestRoute: "Experimenting" },
  { slug: "order-exception-triage", title: "Order exception triage board", workflow: "Surface order exceptions and route them to an owner.", whatItDoes: "Classifies exceptions and drafts escalation notes.", personDecides: "Confirms severity and escalates.", data: "Synthetic order records and exception logs.", tested: "Classification accuracy, time-to-escalate.", unproven: "Behaviour under holiday volume spikes.", bestRoute: "Ready" },
  { slug: "policy-search", title: "Internal procedure search", workflow: "Answer staff policy questions without exposing them to public tools.", whatItDoes: "Retrieves the relevant policy passage with citations.", personDecides: "Confirms the answer applies to their situation.", data: "Synthetic policy library.", tested: "Retrieval accuracy and citation precision.", unproven: "Handling of conflicting or outdated policies.", bestRoute: "New" },
  { slug: "multilingual-response", title: "Multilingual customer-response workspace", workflow: "Draft customer replies in the customer's language.", whatItDoes: "Detects language, drafts response, flags nuance for review.", personDecides: "Bilingual staff approve before send.", data: "Synthetic customer messages.", tested: "Language detection and tone consistency.", unproven: "Regional dialect handling under load.", bestRoute: "Experimenting" },
];
