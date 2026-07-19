import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-honey-deep">{children}</p>;
}

export function Section({
  children,
  className = "",
  bg = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "paper" | "ink" | "muted" | "honey";
  id?: string;
}) {
  const bgs = {
    paper: "bg-paper text-ink",
    ink: "bg-ink text-paper",
    muted: "bg-muted text-ink",
    honey: "bg-honey text-ink",
  };
  return (
    <section id={id} className={`${bgs[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "signal";
}) {
  const cls = {
    primary:
      "bg-ink text-paper hover:bg-honey-deep hover:text-ink",
    ghost:
      "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    signal: "bg-honey text-ink hover:bg-honey-deep",
  }[variant];
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${cls}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  ctas,
  tone = "paper",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  ctas?: ReactNode;
  tone?: "paper" | "ink" | "honey";
}) {
  const bg = {
    paper: "bg-paper text-ink",
    ink: "bg-ink text-paper",
    honey: "bg-honey text-ink",
  }[tone];
  return (
    <section className={`${bg} border-b border-border/50`}>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <Reveal>
          <p className="eyebrow text-honey-deep">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {lede}
            </p>
          )}
          {ctas && <div className="mt-10 flex flex-wrap gap-4">{ctas}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function StatRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
      {items.map((s, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 && <span className="h-1 w-1 rounded-full bg-honey" />}
          {s}
        </span>
      ))}
    </div>
  );
}
