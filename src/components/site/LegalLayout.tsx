import type { ReactNode } from "react";
import { PageHero } from "./primitives";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={`Last reviewed ${updated}. This page is maintained by The BHive.`} />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[220px_1fr] md:py-24">
          <aside className="md:sticky md:top-24 md:self-start">
            <p className="eyebrow text-honey-deep">On this page</p>
            <ul className="mt-4 space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-muted-foreground hover:text-ink">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <article className="prose prose-neutral max-w-none space-y-10 text-ink [&_h2]:font-display [&_h2]:text-3xl [&_h2]:mt-0 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:text-muted-foreground [&_li]:my-1">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
