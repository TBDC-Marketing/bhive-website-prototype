import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "../components/site/primitives";
import { TextField } from "../components/site/FormField";

export const Route = createFileRoute("/participants/")({
  head: () => ({
    meta: [
      { title: "Participant sign in — BNext AI" },
      { name: "description", content: "Continue your plan. Access your route, sessions, artifacts, and support." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [msg, setMsg] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="Participant access" title={<>Continue your plan.</>} lede="Access your route, session details, artifacts, assignments, support, and value reviews." />
      <Section bg="paper">
        <div className="mx-auto max-w-md rounded-md border border-border bg-card p-8">
          <form onSubmit={(e) => { e.preventDefault(); setMsg("Sign-in is not yet available. Participant workspaces open with the first cohort."); }} className="space-y-4">
            <TextField label="Email" type="email" required />
            <TextField label="Password" type="password" required />
            <button className="w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-honey-deep hover:text-ink">Sign in</button>
            {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          </form>
          <div className="mt-6 space-y-1 text-xs text-muted-foreground">
            <p><Link to="/contact" className="hover:text-ink">Activate account</Link></p>
            <p><Link to="/contact" className="hover:text-ink">Forgot access</Link></p>
            <p><Link to="/contact" className="hover:text-ink">Participant support</Link></p>
          </div>
          <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
            BNext staff will never ask for your password or one-time code. Do not upload sensitive data unless the program workspace explicitly requests it.
          </p>
        </div>
      </Section>
    </>
  );
}
