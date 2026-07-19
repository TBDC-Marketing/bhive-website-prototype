import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "bhive-announce-dismissed-v1";

export function AnnouncementBar() {
  const [hydrated, setHydrated] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      setDismissed(localStorage.getItem(KEY) === "1");
    } catch {
      // ignore
    }
  }, []);

  if (!hydrated || dismissed) return null;

  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
        <p className="text-paper/80">
          Applications open soon for BNext AI cohorts in Brampton.{" "}
          <Link to="/start" className="underline decoration-honey underline-offset-4 hover:text-honey">
            Find your starting point →
          </Link>
        </p>
        <button
          aria-label="Dismiss announcement"
          className="shrink-0 rounded-full p-1 text-paper/70 hover:text-honey"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              // ignore
            }
            setDismissed(true);
          }}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
