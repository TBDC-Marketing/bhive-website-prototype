import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const EXCLUDED_PREFIXES = [
  "/apply",
  "/contact",
  "/start",
  "/vendors/apply",
  "/eligibility",
];

export function StickyRouteCTA() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (EXCLUDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return null;
  }
  if (!past) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 hidden justify-center px-4 md:flex">
      <Link
        to="/start"
        className="pointer-events-auto group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all hover:bg-honey hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-honey group-hover:bg-ink" />
        Find your starting point
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
