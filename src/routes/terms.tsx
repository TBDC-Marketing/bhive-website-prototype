import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — The BHive & BNext AI" },
      { name: "description", content: "Terms of use for the BNext AI website." },
      { property: "og:title", content: "Terms of Use — The BHive & BNext AI" },
      { property: "og:description", content: "Terms of use for the BNext AI website." },
      { property: "og:url", content: "https://bhive-bnextai-preview.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "use", label: "Acceptable use" },
  { id: "content", label: "Content and intellectual property" },
  { id: "no-advice", label: "No professional advice" },
  { id: "third-party", label: "Third-party links" },
  { id: "liability", label: "Limitation of liability" },
  { id: "governing", label: "Governing law" },
];

function TermsPage() {
  return (
    <LegalLayout eyebrow="Terms of use" title="Terms of use for the BNext AI website." updated="February 2026" toc={toc}>
      <section id="acceptance"><h2>Acceptance</h2><p>By using this website you accept these terms. If you do not accept them, please do not use the site.</p></section>
      <section id="use"><h2>Acceptable use</h2><p>Use the site for lawful purposes. Do not attempt to disrupt, misuse, or gain unauthorized access to any part of it.</p></section>
      <section id="content"><h2>Content and intellectual property</h2><p>Site content is owned by The BHive or its licensors and may not be reproduced without permission, except where quoted for review under fair dealing.</p></section>
      <section id="no-advice"><h2>No professional advice</h2><p>Information on this site is general in nature and does not constitute legal, financial, tax, or technology advice. Program participation and outputs are governed by the program agreement.</p></section>
      <section id="third-party"><h2>Third-party links</h2><p>We are not responsible for content hosted on external sites we link to.</p></section>
      <section id="liability"><h2>Limitation of liability</h2><p>To the extent permitted by law, The BHive is not liable for indirect or consequential loss arising from use of the site.</p></section>
      <section id="governing"><h2>Governing law</h2><p>These terms are governed by the laws of Ontario, Canada.</p></section>
    </LegalLayout>
  );
}
