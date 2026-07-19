export type Member = {
  name: string;
  role: string;
  group: "Program & guidance" | "AI product & engineering" | "Data, privacy & security" | "Business case & operations" | "Sector & community advisors";
  helps: string;
  bio: string;
  ask: string[];
};

export const team: Member[] = [
  { name: "A. Singh", role: "Program Director, BNext AI", group: "Program & guidance", helps: "Use-case selection, program fit", bio: "Twelve years running education and adoption programs for Ontario small and mid-sized businesses. Built the operating model behind Brampton Next and GEIP.", ask: ["Program fit", "First-win selection", "Cohort structure"] },
  { name: "M. Patel", role: "Executive Director, The BHive", group: "Program & guidance", helps: "Institutional partnership, funder alignment", bio: "Led The BHive's opening with the City of Brampton in 2022. Prior operator background in professional services and municipal economic development.", ask: ["Partnership", "Institutional context", "Long-term direction"] },
  { name: "J. Chen", role: "Head of AI Product", group: "AI product & engineering", helps: "Build versus buy, production-candidate scoping", bio: "Shipped AI-assisted workflow tools in regulated environments before joining The BHive. Focused on evidence-backed proofs, not demos.", ask: ["Prototype scoping", "Evidence gates", "Tool selection"] },
  { name: "R. Kaur", role: "Data & Privacy Lead", group: "Data, privacy & security", helps: "Risk classification, data handling, governance triggers", bio: "Ten years in data governance and privacy across financial services and public sector. Sets the boundaries between routine automation and consequential decisions.", ask: ["Data classification", "Consent design", "Vendor security review"] },
  { name: "D. Nguyen", role: "Business Case Lead", group: "Business case & operations", helps: "ROI modelling, adoption measurement", bio: "Financial analyst turned operating advisor. Built the practical ROI model behind the BNext field guides.", ask: ["ROI models", "Value-after-launch reviews", "Buy/build/reuse/stop"] },
  { name: "S. Okafor", role: "Community Advisor, Peel Manufacturing", group: "Sector & community advisors", helps: "Sector fit, floor-level adoption", bio: "Operating leader in Peel-region manufacturing. Advises on realistic first workflows for shop-floor and back-office teams.", ask: ["Manufacturing use cases", "Floor-level rollout", "Change resistance"] },
];
