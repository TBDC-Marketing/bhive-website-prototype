import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl leading-tight">
              The BHive is Brampton's business accelerator and innovation hub.{" "}
              <span className="text-honey">BNext AI</span> is our signature program for
              practical AI adoption.
            </p>
            <div className="mt-8 space-y-1 text-sm text-paper/70">
              <p>8 Nelson St W, 6th Floor</p>
              <p>Brampton, ON L6X 1B7</p>
              <p className="pt-2">647-632-1072 · bnextai@thebhive.ca</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
            <FooterCol title="Program">
              <FLink to="/bnext-ai">BNext AI</FLink>
              <FLink to="/how-it-works">How it works</FLink>
              <FLink to="/start">Start here</FLink>
              <FLink to="/eligibility">Eligibility & FAQ</FLink>
              <FLink to="/apply">Apply</FLink>
            </FooterCol>
            <FooterCol title="Library">
              <FLink to="/ai-in-action">AI in action</FLink>
              <FLink to="/demos">Demos</FLink>
              <FLink to="/field-guides">Field guides</FLink>
              <FLink to="/insights">Insights</FLink>
              <FLink to="/stories">Stories</FLink>
              <FLink to="/signal">BNext Signal</FLink>
              <FLink to="/events">Events</FLink>
            </FooterCol>
            <FooterCol title="The BHive">
              <FLink to="/about">About</FLink>
              <FLink to="/team">Team & advisors</FLink>
              <FLink to="/partners">Partners</FLink>
              <FLink to="/vendor-network">Vendor network</FLink>
              <FLink to="/contact">Contact</FLink>
              <FLink to="/participants">Participants</FLink>
            </FooterCol>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-honey">BNext Signal</p>
            <p className="mt-3 text-sm text-paper/80">
              One meaningful change. One business implication. One move worth
              considering.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@company.ca"
                className="rounded-sm border border-paper/20 bg-transparent px-3 py-2 text-sm placeholder:text-paper/40 focus:border-honey focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-sm bg-honey px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-honey-deep"
              >
                Get the Signal
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row">
          <p>
            Supported by the Federal Economic Development Agency for Southern
            Ontario (FedDev Ontario). Built in Brampton.
          </p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-honey">Privacy</Link>
            <Link to="/terms" className="hover:text-honey">Terms</Link>
            <Link to="/accessibility" className="hover:text-honey">Accessibility</Link>
            <Link to="/cookies" className="hover:text-honey">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow text-honey">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-paper/80 transition-colors hover:text-honey">
        {children}
      </Link>
    </li>
  );
}
