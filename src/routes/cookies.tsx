import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/site/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Notice — The BHive & BNext AI" },
      { name: "description", content: "How we use cookies and how to manage your preferences." },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

const toc = [
  { id: "what", label: "What cookies are" },
  { id: "use", label: "How we use them" },
  { id: "types", label: "Types of cookies" },
  { id: "manage", label: "Managing preferences" },
];

function Cookies() {
  return (
    <LegalLayout eyebrow="Cookies" title="How we use cookies on this site." updated="February 2026" toc={toc}>
      <section id="what"><h2>What cookies are</h2><p>Cookies are small text files stored on your device that help websites remember information between visits.</p></section>
      <section id="use"><h2>How we use them</h2><p>We use a small number of cookies to keep the site working, understand aggregate usage, and remember accessibility preferences. We do not sell cookie data.</p></section>
      <section id="types"><h2>Types of cookies</h2><ul><li>Strictly necessary — required for the site to function.</li><li>Analytics — aggregate usage understanding.</li><li>Preferences — remember your accessibility and language choices.</li></ul></section>
      <section id="manage"><h2>Managing preferences</h2><p>Most browsers let you block or delete cookies. Doing so may affect site functionality. A cookie preferences control will be available on this site as consent tooling is enabled.</p></section>
    </LegalLayout>
  );
}
