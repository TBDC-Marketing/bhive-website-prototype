import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { StickyRouteCTA } from "../components/site/StickyRouteCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-honey-deep">404 · off the route</p>
        <h1 className="mt-4 font-display text-5xl">This page has been retired.</h1>
        <p className="mt-4 text-muted-foreground">
          It may have moved, or it may have belonged to a program that has concluded.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper">
            Home
          </Link>
          <Link to="/start" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm">
            Find your starting point
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-ink/20 px-5 py-2.5 text-sm">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The BHive — Brampton's business accelerator, home of BNext AI" },
      {
        name: "description",
        content:
          "From AI curiosity to AI working in your business. The BHive's BNext AI program helps established Peel businesses adopt AI with evidence.",
      },
      { property: "og:title", content: "The BHive — Brampton's business accelerator, home of BNext AI" },
      {
        property: "og:description",
        content:
          "From AI curiosity to AI working in your business. The BHive's BNext AI program helps established Peel businesses adopt AI with evidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The BHive — Brampton's business accelerator, home of BNext AI" },
      { name: "twitter:description", content: "From AI curiosity to AI working in your business. The BHive's BNext AI program helps established Peel businesses adopt AI with evidence." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1d2c45c4-d6e6-491f-9372-603f2e5c60d9/id-preview-b90ddc70--bcb1c2a0-32a7-4fa1-8e03-772914fd4f58.lovable.app-1784483309161.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1d2c45c4-d6e6-491f-9372-603f2e5c60d9/id-preview-b90ddc70--bcb1c2a0-32a7-4fa1-8e03-772914fd4f58.lovable.app-1784483309161.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter+Tight:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <StickyRouteCTA />
      </div>
    </QueryClientProvider>
  );
}
