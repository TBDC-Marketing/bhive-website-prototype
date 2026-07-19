import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/bnext-ai", label: "BNext AI" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/start", label: "Start here" },
  { to: "/ai-in-action", label: "AI in action" },
  { to: "/field-guides", label: "Field guides" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-ink text-honey" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2 22 7v10l-10 5L2 17V7z" />
            </svg>
          </span>
          <span className="font-display text-lg leading-none">
            The <span className="font-semibold">BHive</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-ink"
              activeProps={{ className: "text-ink font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/start"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-honey-deep hover:text-ink md:inline-flex"
          >
            Find your starting point
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-paper lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-2 text-base text-muted-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
