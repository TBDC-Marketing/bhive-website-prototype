export type Partner = {
  name: string;
  tier: "Founding" | "Referral" | "Community" | "Delivery";
  kind: string;
};

export const partners: Partner[] = [
  { name: "City of Brampton", tier: "Founding", kind: "Municipal partner" },
  { name: "FedDev Ontario", tier: "Founding", kind: "Federal funder" },
  { name: "Brampton Board of Trade", tier: "Referral", kind: "Business association" },
  { name: "Sheridan College", tier: "Delivery", kind: "Post-secondary" },
  { name: "Peel Region Chamber", tier: "Referral", kind: "Business association" },
  { name: "Local credit union", tier: "Community", kind: "Financial partner" },
];

export const faq = [
  { q: "Is the program really free?", a: "Yes, to eligible businesses, through Government of Canada funding. You contribute your people's time. Any later technology spend needs your approval." },
  { q: "Do I need technical staff?", a: "Not for the New-to-AI route. Implementation cases should include whoever handles IT, data, or security, even if that person is external." },
  { q: "Do I need an AI idea already?", a: "No. Bring a business problem or repetitive workflow. BNext helps decide whether AI belongs in the answer." },
  { q: "Will BNext build software for us?", a: "Depends on readiness and scope. Some participants build a controlled first workflow; implementation-ready businesses may test a production candidate. Participation is not free custom software." },
  { q: "Will you recommend a vendor?", a: "Where a vendor fits, BNext helps define requirements and evaluate providers through a neutral process. We earn no commissions." },
  { q: "What if the right answer is not to use AI?", a: "Then stopping is a useful result. The program improves the decision; it does not force a purchase." },
  { q: "What will my business leave with?", a: "Depends on your route: a verified first workflow, a validated business case, or a tested production candidate with a rollout plan." },
  { q: "How much time does it take?", a: "About 14, 20, or 30 guided hours by route, plus practical work between sessions." },
  { q: "Is it in person?", a: "Core delivery is in person in Brampton. The exact mix is listed for each cohort." },
  { q: "What happens after the program?", a: "Your plan names an owner and review points. Alumni may return to clinics where capacity allows." },
  { q: "How is our information handled?", a: "We collect only what intake, delivery, and reporting require. Do not enter sensitive operational data into website forms." },
];
