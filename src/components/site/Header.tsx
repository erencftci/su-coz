import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navLinks, site } from "@/lib/site";

const primaryNav = navLinks.filter((l) =>
  ["/", "/hakkimizda", "/hizmetler", "/referanslar", "/galeri", "/iletisim"].includes(l.to),
);

const serviceNav = navLinks.filter((l) =>
  ["/su-kacagi-tespit", "/sayac-ayrimi", "/iski-danismanlik", "/proje-hizmetleri"].includes(l.to),
);

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border/70 bg-navy-deep text-navy-foreground lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="text-steel">{site.tagline}</p>
          <p className="flex items-center gap-6">
            <span className="text-steel">
              Çalışma saatleri: <span className="text-navy-foreground">{site.hours}</span>
            </span>
            <span className="text-steel">{site.emergency}</span>
          </p>
        </div>
      </div>

      <div className="container-page flex h-18 items-center justify-between gap-3 py-3">
        <Link to="/" aria-label="Sukaç ana sayfa" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Ana menü" className="hidden 2xl:flex 2xl:items-center 2xl:gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="whitespace-nowrap rounded-sm px-0.5 py-2 text-[0.75rem] font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 border border-border px-3 py-2 text-sm font-semibold whitespace-nowrap text-foreground transition-colors hover:border-primary hover:text-primary md:inline-flex 2xl:px-2.5"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp px-3 py-2 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 2xl:px-2.5"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground 2xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-border bg-background 2xl:hidden">
          <nav aria-label="Mobil menü" className="container-page flex flex-col py-6">
            {primaryNav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-lg font-medium text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
            <p className="eyebrow mt-8">Hizmetler</p>
            {serviceNav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 text-base text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 grid gap-3 pb-10">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-navy px-5 py-4 text-sm font-semibold text-navy-foreground"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp px-5 py-4 text-sm font-semibold text-whatsapp-foreground"
              >
                <WhatsAppGlyph className="h-4 w-4" /> WhatsApp ile İletişim
              </a>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {site.hours} · {site.emergency}
              </p>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.79.96-.94 1.16-.15.2-.3.22-.6.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.32-1.58-1.47-1.88-.15-.3-.02-.47.13-.62.15-.15.35-.4.5-.6.15-.2.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.22-.24-.58-.48-.5-.66-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.83 1.2 3.03.15.2 2.07 3.3 5.03 4.5 2.96 1.19 3.13.99 3.7.94.57-.05 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.58-.35Z" />
      <path d="M12.04 2.5C6.79 2.5 2.53 6.76 2.53 12c0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.86-1.28A9.44 9.44 0 0 0 12.04 21.5c5.25 0 9.51-4.26 9.51-9.5S17.29 2.5 12.04 2.5Zm0 17.36c-1.5 0-2.97-.4-4.26-1.17l-.3-.18-3.02.79.8-2.95-.19-.31A7.83 7.83 0 0 1 4.2 12c0-4.33 3.52-7.86 7.85-7.86 4.33 0 7.85 3.53 7.85 7.86s-3.52 7.86-7.85 7.86Z" />
    </svg>
  );
}
