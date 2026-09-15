import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { WhatsAppGlyph } from "@/components/site/Header";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | Sukaç Su Kaçağı Tespiti ve Danışmanlık" },
      {
        name: "description",
        content:
          "Sukaç iletişim: 0533 558 62 10. Çalışma saatleri 08:30 – 22:00, acil durumlarda 24 saat hizmet. WhatsApp ve iletişim formu ile hızlı bilgi alın.",
      },
      { property: "og:title", content: "İletişim | Sukaç" },
      {
        property: "og:description",
        content: "Telefon, WhatsApp ve form üzerinden Sukaç ile iletişime geçin.",
      },
      { property: "og:url", content: "/iletisim" },
    ],
    links: [{ rel: "canonical", href: "/iletisim" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="İletişim"
        eyebrow="İletişim"
        title="Su kaçağı, sayaç ayrımı ve İSKİ süreçleri için bize ulaşın"
        description="Talebinizi telefon veya WhatsApp üzerinden iletebilir, formu doldurarak da bilgi talebi oluşturabilirsiniz. Süreç, yöntem ve kapsam hakkında net bilgi paylaşırız."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-navy-foreground px-6 py-4 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp px-6 py-4 text-sm font-semibold text-whatsapp-foreground"
          >
            <WhatsAppGlyph className="h-4 w-4" /> WhatsApp ile İletişim
          </a>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="İletişim Bilgileri" title="Doğrudan ulaşın" />
            <Reveal delay={80} className="mt-9 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-start gap-4 border border-border bg-card px-6 py-6 transition-colors hover:border-primary"
              >
                <Phone className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Telefon</span>
                  <span className="mt-1 block font-display text-xl font-semibold text-navy">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-whatsapp px-6 py-6 text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <WhatsAppGlyph className="mt-1 h-5 w-5" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] opacity-80">WhatsApp</span>
                  <span className="mt-1 block font-display text-lg font-semibold">Mesaj gönderin</span>
                </span>
              </a>
              <div className="flex items-start gap-4 border border-border bg-card px-6 py-6">
                <Clock className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Çalışma Saatleri
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-foreground">{site.hours}</span>
                </span>
              </div>
              <div className="flex items-start gap-4 border border-border bg-navy-deep px-6 py-6 text-navy-foreground">
                <ShieldAlert className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-steel">Acil Durum</span>
                  <span className="mt-1 block font-display text-lg font-semibold">{site.emergency}</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={140} className="mt-10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Hizmet Başlıkları
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                {services.map((s) => (
                  <li key={s.to} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="border border-border bg-card p-7 md:p-10">
              <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">Bilgi talep formu</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Aşağıdaki formu doldurarak talebinizi iletebilirsiniz. Yapı tipi ve konu bilgisi, değerlendirmeyi
                hızlandırır.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <SectionHeading eyebrow="Konum" title="Harita" description="Konum bilgisi eklendiğinde bu alanda yayınlanacaktır." />
          <div className="mt-10">
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </>
  );
}
