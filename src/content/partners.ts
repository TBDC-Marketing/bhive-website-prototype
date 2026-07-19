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
  { q: "Is the program really free?", a: "The program is free to eligible participating businesses because it is supported by Government of Canada funding. Your business contributes the time of the people needed to make and test the decision. Any later technology, vendor, or implementation spend requires your approval and is not implied by participation." },
  { q: "Do I need technical staff?", a: "No for the New-to-AI route. More complex implementation cases should include the person responsible for IT, systems, data, or security—even if that role is external." },
  { q: "Do I need an AI idea already?", a: "No. Bring a business problem, repetitive workflow, or operating constraint. BNext helps determine whether AI belongs in the answer." },
  { q: "Will BNext build software for us?", a: "The route depends on readiness and scope. Some participants build a controlled first workflow; implementation-ready businesses may develop or evaluate a production-candidate proof. Participation is not a promise of free custom software." },
  { q: "Will you recommend a vendor?", a: "Where a vendor is appropriate, BNext can help define requirements and evaluate suitable providers through a neutral process. BNext does not earn commissions from the selection." },
  { q: "What if the right answer is not to use AI?", a: "Then stopping is a useful result. The program is designed to improve the decision, not force a purchase or project." },
  { q: "What will my business leave with?", a: "It depends on your starting point: a verified first workflow, a validated business case and implementation route, or a tested production candidate with a governed rollout plan." },
  { q: "How much time does it take?", a: "Current routes are designed around approximately 14, 20, or 30 guided hours, with practical work between sessions and follow-through for implementation cases." },
  { q: "Is it in person?", a: "Core delivery is designed around in-person work in Brampton, with the exact mix of sessions, clinics, and follow-up listed for each cohort." },
  { q: "What happens after the program?", a: "The plan includes a named owner and review points. Alumni may return to relevant clinics or later modules where capacity and program rules allow." },
  { q: "How is our information handled?", a: "BNext collects only the information required for intake, delivery, reporting, and follow-up. Sensitive operational or client data should not be entered into public website forms." },
];
