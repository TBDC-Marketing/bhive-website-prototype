import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { useCases, stories, fieldGuides, insights } from "../content/site";
import { events } from "../content/events";

const BASE_URL = "https://bhive-bnextai-preview.lovable.app";

const staticPaths = [
  "/",
  "/about",
  "/bnext-ai",
  "/how-it-works",
  "/start",
  "/start/new-to-ai",
  "/start/experimenting",
  "/start/ready-to-implement",
  "/eligibility",
  "/apply",
  "/ai-in-action",
  "/field-guides",
  "/insights",
  "/stories",
  "/events",
  "/partners",
  "/vendor-network",
  "/vendors/apply",
  "/contact",
  "/search",
  "/privacy",
  "/terms",
  "/accessibility",
  "/cookies",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const dynamic: string[] = [
          ...useCases.map((x) => `/ai-in-action/${x.slug}`),
          ...stories.map((x) => `/stories/${x.slug}`),
          ...fieldGuides.map((x) => `/field-guides/${x.slug}`),
          ...insights.map((x) => `/insights/${x.slug}`),
          ...events.map((x) => `/events/${x.slug}`),
        ];
        const all = [...staticPaths, ...dynamic];
        const urls = all
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
