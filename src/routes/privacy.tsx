import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — The BHive & BNext AI" },
      { name: "description", content: "How BNext AI handles your information." },
      { property: "og:title", content: "Privacy · The BHive" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const toc = [
  { id: "who", label: "Who controls and processes data" },
  { id: "what", label: "What we collect" },
  { id: "purpose", label: "Purpose and legal basis" },
  { id: "systems", label: "CRM and program systems" },
  { id: "sharing", label: "Sharing and subprocessors" },
  { id: "rights", label: "Your rights" },
  { id: "retention", label: "Retention" },
  { id: "contact", label: "Contact" },
];

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Privacy" title="How BNext AI handles your information." updated="February 2026" toc={toc}>
      <section id="who"><h2>Who controls and processes data</h2><p>The BHive controls information you submit through this website in connection with BNext AI. Named subprocessors are used for hosting, email, and CRM functions and are listed on request.</p></section>
      <section id="what"><h2>What we collect</h2><p>Information you provide through readiness checks, expression-of-interest forms, event registrations, contact requests, and the newsletter. This includes name, business name, email, and the operating context you choose to share.</p></section>
      <section id="purpose"><h2>Purpose and legal basis</h2><p>We use this information to route you to the right program, respond to inquiries, deliver the program you enrolled in, and report on funded activities to our funder in aggregate form.</p></section>
      <section id="systems"><h2>CRM and program systems</h2><p>Program information is stored in access-controlled CRM and workspace systems used for delivery and follow-up. Sensitive operational or client data should never be entered into public website forms.</p></section>
      <section id="sharing"><h2>Sharing and subprocessors</h2><p>We do not sell information. Referral status is not shared with partners without your notice and consent. Aggregate outcomes may be reported to funders as required.</p></section>
      <section id="rights"><h2>Your rights</h2><p>You may request access, correction, or deletion of information you have provided. Contact us at the address below.</p></section>
      <section id="retention"><h2>Retention</h2><p>We retain information for the duration required by program reporting, then archive or delete it in line with our records policy.</p></section>
      <section id="contact"><h2>Contact</h2><p>Privacy questions: privacy@thebhive.ca · 8 Nelson St W, 6th Floor, Brampton, ON L6X 1B7.</p></section>
    </LegalLayout>
  );
}
