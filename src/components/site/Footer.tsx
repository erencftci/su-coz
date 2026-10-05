import { Link } from "@tanstack/react-router";
import { Clock, Phone, ShieldAlert } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppGlyph } from "@/components/site/Header";
import { visibleNavLinks, services, site } from "@/lib/site";

const corporateNav = visibleNavLinks.filter((l) =>
  ["/", "/hakkimizda", "/hizmetler", "/referanslar", "/galeri", "/iletisim"].includes(l.to),
);

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-steel">
            Sukaç; su kaçağı tespiti, bina ve site su sistemleri, sayaç ayrımı, İSKİ süreçleri ve su/atık su proje
            rehberliği alanlarında saha deneyimine dayalı teknik hizmet sunar.
          </p>
        </div>

        <nav aria-label="Hizmetler" className="text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">Hizmetler</h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="text-navy-foreground/85 transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kurumsal" className="text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">Kurumsal</h3>
          <ul className="mt-5 space-y-3">
            {corporateNav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="text-navy-foreground/85 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">İletişim</h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 font-display text-lg font-semibold">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3 text-steel">
              <Clock className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <span>Çalışma saatleri: {site.hours}</span>
            </li>
            <li className="flex items-start gap-3 text-steel">
              <ShieldAlert className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <span>{site.emergency}</span>
            </li>
          </ul>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppGlyph className="h-4 w-4" /> WhatsApp ile İletişim
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sukaç. Tüm hakları saklıdır.</p>
          <p>Su kaçağı tespiti · Sayaç ayrımı · İSKİ danışmanlık · Proje rehberliği</p>
        </div>
      </div>
    </footer>
  );
}
