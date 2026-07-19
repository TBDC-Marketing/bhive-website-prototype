import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function StickyRouteCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <Link
        to="/start"
        className="pointer-events-auto group inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all hover:bg-honey hover:text-ink"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-honey group-hover:bg-ink" />
        Find your starting point
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
