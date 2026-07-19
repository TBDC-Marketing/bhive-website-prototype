import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/site/LegalLayout";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — The BHive & BNext AI" },
      { name: "description", content: "Our commitment to accessible services and how to request accommodations." },
      { property: "og:title", content: "Accessibility — The BHive & BNext AI" },
      { property: "og:description", content: "Our commitment to accessible services and how to request accommodations." },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: A11y,
});

const toc = [
  { id: "commitment", label: "Our commitment" },
  { id: "web", label: "Website accessibility" },
  { id: "in-person", label: "In-person accessibility" },
  { id: "accommodations", label: "Requesting accommodations" },
  { id: "feedback", label: "Feedback" },
];

function A11y() {
  return (
    <LegalLayout eyebrow="Accessibility" title="Our commitment to accessible services." updated="February 2026" toc={toc}>
      <section id="commitment"><h2>Our commitment</h2><p>The BHive is committed to identifying, removing, and preventing barriers for people with disabilities in line with the Accessibility for Ontarians with Disabilities Act (AODA).</p></section>
      <section id="web"><h2>Website accessibility</h2><p>We aim to meet WCAG 2.1 AA guidelines across colour contrast, keyboard navigation, alternative text, and semantic structure. Content is reviewed as it is added.</p></section>
      <section id="in-person"><h2>In-person accessibility</h2><p>Our Brampton location is transit-accessible with physical accessibility supports. Details are listed on the Contact page.</p></section>
      <section id="accommodations"><h2>Requesting accommodations</h2><p>Every intake form includes an accessibility field. You may also email accessibility@thebhive.ca in advance of any session.</p></section>
      <section id="feedback"><h2>Feedback</h2><p>We welcome feedback on accessibility. Contact us and we will respond within ten business days.</p></section>
    </LegalLayout>
  );
}
