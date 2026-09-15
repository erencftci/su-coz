import { Phone } from "lucide-react";
import { WhatsAppGlyph } from "@/components/site/Header";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Su kaçağı, sayaç ayrımı veya İSKİ süreciniz için teknik destek alın",
  description = "Durumunuzu kısaca aktarın; süreç, yöntem ve gerekli adımlar hakkında net bilgi verelim.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-page relative flex flex-col gap-8 py-14 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl leading-tight font-semibold md:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">{description}</p>
          <p className="mt-4 text-xs text-steel">
            Çalışma saatleri: {site.hours} · {site.emergency}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-navy-foreground px-6 py-4 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <WhatsAppGlyph className="h-4 w-4" /> WhatsApp ile İletişim
          </a>
        </div>
      </div>
    </section>
  );
}
