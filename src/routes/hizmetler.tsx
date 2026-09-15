import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import leakImage from "@/assets/leak-detection.jpg";
import meterImage from "@/assets/water-meters.jpg";
import planImage from "@/assets/project-plans.jpg";
import heroImage from "@/assets/hero-infrastructure.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "Hizmetler | Su Kaçağı Tespiti, Sayaç Ayrımı, İSKİ Danışmanlık" },
      {
        name: "description",
        content:
          "Sukaç hizmetleri: su kaçağı tespiti, bina ve site su tesisatı, İSKİ sayaç ayrımı, su ve atık su proje rehberliği ve danışmanlığı.",
      },
      { property: "og:title", content: "Hizmetler | Sukaç" },
      {
        property: "og:description",
        content: "Su kaçağı tespiti, sayaç ayrımı, İSKİ danışmanlığı ve proje rehberliği hizmetleri.",
      },
      { property: "og:url", content: "/hizmetler" },
    ],
    links: [{ rel: "canonical", href: "/hizmetler" }],
  }),
  component: ServicesPage,
});

const detailed = [
  {
    to: "/su-kacagi-tespit",
    title: "Su Kaçağı Tespiti",
    image: leakImage,
    alt: "Elektronik dinleme cihazı ile zeminde su kaçağı tespiti",
    text: "Ev, apartman, villa ve sitelerde gizli su kaçaklarının profesyonel yöntemlerle tespiti. Gereksiz hasar en aza indirilerek çalışma yürütülür.",
    items: [
      "Gizli su kaçağı tespiti",
      "Teknik inceleme ve belirti değerlendirmesi",
      "Ev, apartman, villa ve site uygulamaları",
      "Tespit sonrası talep edilmesi halinde onarım desteği",
    ],
  },
  {
    to: "/sayac-ayrimi",
    title: "Sayaç Ayrımı ve Bina/Site Su Sistemleri",
    image: meterImage,
    alt: "Bina sayaç panosunda dijital su sayaçları",
    text: "Bina ve sitelerde sayaç ayrımı projeleri, protokol hazırlığı, dijital sayaç okuma süreçleri ve tesisat düzenlemeleri.",
    items: [
      "Bina içi tesisat uygulama ve bakımı",
      "Sayaç ayrımı projeleri ve sayaç panoları",
      "Protokol hazırlığı ve süreç yönetimi",
      "Sayaç bilgilerinin İSKİ sistemine işlenmesine destek",
    ],
  },
  {
    to: "/iski-danismanlik",
    title: "İSKİ Danışmanlığı",
    image: heroImage,
    alt: "Su altyapısı tesisinde boru ve vana grupları",
    text: "İSKİ ile yürütülen su süreçlerinde başvuru rehberliği, iletişim, koordinasyon ve teknik danışmanlık.",
    items: [
      "Yeni yapı projelerinde süreç rehberliği",
      "Site projelerinde danışmanlık",
      "Başvuru süreçlerinin planlanması",
      "İSKİ ile iletişim ve koordinasyon",
    ],
  },
  {
    to: "/proje-hizmetleri",
    title: "Su ve Atık Su Proje Rehberliği",
    image: planImage,
    alt: "İçme suyu ve atık su altyapısına ait teknik proje paftaları",
    text: "İçme suyu ve atık su altyapısında proje rehberliği ve danışmanlığı, tesisat yönetimi ve proje takibi.",
    items: [
      "İçme suyu proje rehberliği",
      "Atık su proje rehberliği",
      "Proje danışmanlığı ve takibi",
      "Tesisat yönetimi ve koordinasyon",
    ],
  },
  {
    to: "/atik-su-kanal-hizmetleri",
    title: "Atık Su ve Kanal Hizmetleri",
    image: planImage,
    alt: "Atık su altyapısına ait teknik proje paftaları",
    text: "Atık su hatlarının kanal sistemine bağlanması ve tıkanık hatların açılmasına yönelik teknik çalışmalar.",
    items: [
      "Atık Su Kanal Rabi Bağlantısı",
      "Tıkanık Kanal Açılımı",
      "Bina içi ve bina dışı atık su hatlarında uygulama",
      "Yerinde teknik değerlendirme ve süreç takibi",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Hizmetler"
        eyebrow="Hizmet Kapsamı"
        title="Su kaçağı tespitinden proje danışmanlığına uzanan teknik hizmetler"
        description="Sukaç, suyla ilgili teknik süreçleri dört ana başlıkta ele alır. Her hizmet, yapının durumuna ve talebe göre kapsamı tanımlanarak yürütülür."
      />

      <section className="section-y">
        <div className="container-page space-y-16 md:space-y-24">
          {detailed.map((s, i) => (
            <Reveal key={s.to} delay={40}>
              <article className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="w-full border border-border object-cover"
                  />
                </div>
                <div className="lg:col-span-6">
                  <p className="eyebrow">Hizmet 0{i + 1}</p>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-foreground md:text-3xl">{s.title}</h2>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{s.text}</p>
                  <ul className="mt-7 grid gap-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={s.to}
                    className="mt-9 inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90"
                  >
                    Hizmet detayı <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading
            eyebrow="Süreç"
            title="Çalışma akışımız"
            description="Her hizmet başlığında izlenen temel adımlar; kapsam ve yapı tipine göre detaylandırılır."
            align="center"
          />
          <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {[
              { t: "Ön görüşme", d: "Talebin ve mevcut durumun telefon veya WhatsApp üzerinden değerlendirilmesi." },
              { t: "Teknik inceleme", d: "Yerinde inceleme, belirtilerin okunması ve tesisat kurgusunun değerlendirilmesi." },
              { t: "Yöntem ve kapsam", d: "Uygulanacak yöntemin, adımların ve kapsamın açık biçimde paylaşılması." },
              { t: "Uygulama ve takip", d: "Çalışmanın yürütülmesi, sonucun aktarılması ve gerekli durumlarda süreç takibi." },
            ].map((step, i) => (
              <Reveal as="li" key={step.t} delay={i * 60} className="bg-card p-8">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">0{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
