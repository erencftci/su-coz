import { Phone } from "lucide-react";
import { WhatsAppGlyph } from "@/components/site/Header";
import { site } from "@/lib/site";

export function StickyContact() {
  return (
    <>
      {/* Desktop / tablet floating WhatsApp */}
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed right-5 bottom-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform hover:scale-105 md:inline-flex"
      >
        <WhatsAppGlyph className="h-7 w-7" />
      </a>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-navy"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Hemen Ara
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-whatsapp-foreground"
        >
          <WhatsAppGlyph className="h-4 w-4" /> WhatsApp
        </a>
      </div>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  );
}
