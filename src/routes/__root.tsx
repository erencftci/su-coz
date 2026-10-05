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
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyContact } from "@/components/site/StickyContact";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-6xl font-semibold text-navy">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Sayfa bulunamadı</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground"
          >
            Ana sayfaya dön
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
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-foreground">Sayfa yüklenemedi</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Beklenmeyen bir sorun oluştu. Sayfayı yenilemeyi deneyebilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground"
          >
            Tekrar dene
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground"
          >
            Ana sayfa
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
      { title: "Sukaç | Su Kaçağı Tespiti ve Su Altyapı Danışmanlığı" },
      {
        name: "description",
        content:
          "Sukaç; su kaçağı tespiti, bina ve site su tesisatı, İSKİ sayaç ayrımı ve su/atık su proje danışmanlığında profesyonel teknik destek sunar.",
      },
      { property: "og:site_name", content: "Sukaç" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/sukac-favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sukaç",
          description:
            "Su kaçağı tespiti, bina ve site su sistemleri, İSKİ sayaç ayrımı süreçleri ve su/atık su proje rehberliği.",
          telephone: "+90 533 558 62 10",
          areaServed: "İstanbul",
          openingHours: "Mo-Su 08:30-22:00",
          knowsAbout: [
            "su kaçağı tespiti",
            "gizli su kaçağı bulma",
            "İSKİ sayaç ayrımı",
            "bina su tesisatı",
            "su altyapı danışmanlığı",
          ],
        }),
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
    <html lang="tr">
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <StickyContact />
      </div>
    </QueryClientProvider>
  );
}
