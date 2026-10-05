import { createFileRoute, Link } from "@tanstack/react-router";
import { features } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/referanslar")({
  head: () => ({
    meta: [
      ...(features.references ? [] : [{ name: "robots", content: "noindex" }]),
      { title: "Referanslar | Tamamlanan Çalışmalar | Sukaç" },
      {
        name: "description",
        content:
          "Sukaç referansları: su kaçağı tespiti, sayaç ayrımı, bina ve site su sistemleri ile proje danışmanlığı çalışmalarına ait referans alanı.",
      },
      { property: "og:title", content: "Referanslar | Sukaç" },
      {
        property: "og:description",
        content: "Su altyapısı, kaçak tespiti ve sayaç ayrımı çalışmalarına ait referans projeler.",
      },
      { property: "og:url", content: "/referanslar" },
    ],
    links: [{ rel: "canonical", href: "/referanslar" }],
  }),
  component: ReferencesPage,
});

const categories = [
  "Su kaçağı tespiti",
  "Sayaç ayrımı",
  "Bina / site su sistemleri",
  "İSKİ süreç danışmanlığı",
  "Su ve atık su proje rehberliği",
  "Teknik inceleme",
];

function ReferencesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Referanslar"
        eyebrow="Referanslar"
        title="Tamamlanan çalışmalar ve referans projeler"
        description="Referans projelerimiz, ilgili yapı sahibi veya yönetimin onayı doğrultusunda bu bölümde yayınlanır. Alan, gerçek proje bilgileriyle güncellenmek üzere hazırlanmıştır."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Çalışma Alanları"
            title="Referansların kapsamı"
            description="Referans projeler; yapı tipi, hizmet başlığı ve süreç özeti bilgileriyle birlikte yayınlanacaktır."
          />
          <ul className="mt-12 flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 40}>
                <span className="inline-flex border border-border bg-secondary px-4 py-2 text-xs font-semibold tracking-wide text-secondary-foreground">
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((n, i) => (
              <Reveal key={n} delay={i * 60}>
                <article className="surface-card flex h-full flex-col">
                  <div className="relative border-b border-border bg-secondary">
                    <div
                      className="h-44 w-full"
                      aria-hidden="true"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, oklch(0.24 0.05 259 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.24 0.05 259 / 0.08) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                    <span className="absolute top-4 left-4 border border-border bg-card px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Referans proje {n}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      Proje bilgisi yakında eklenecektir
                    </h2>
                    <dl className="mt-5 space-y-3 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-4 border-b border-border pb-3">
                        <dt>Yapı tipi</dt>
                        <dd className="text-foreground/70">Yakında</dd>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-border pb-3">
                        <dt>Hizmet kapsamı</dt>
                        <dd className="text-foreground/70">Yakında</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Süreç özeti</dt>
                        <dd className="text-foreground/70">Yakında</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-12">
            <div className="border border-border bg-secondary px-7 py-8 md:px-10">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Referans bilgisi paylaşımı hakkında
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Yürüttüğümüz çalışmalara ait bilgileri yalnızca ilgili tarafların onayıyla yayınlıyoruz. Bu nedenle
                referans alanında gerçek olmayan proje, kurum veya rakam bilgisi yer almaz. Onay verilen projeler
                eklendikçe bu bölüm güncellenecektir.
              </p>
              <Link
                to="/galeri"
                className="mt-7 inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
              >
                Teknik galeriyi görüntüle <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
