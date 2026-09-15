import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-infrastructure.jpg";
import leakImage from "@/assets/leak-detection.jpg";
import meterImage from "@/assets/water-meters.jpg";
import planImage from "@/assets/project-plans.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri | Su Altyapısı ve Teknik Çalışma Görselleri | Sukaç" },
      {
        name: "description",
        content:
          "Sukaç galerisi: su altyapısı, bina su sistemleri, sayaç panoları, teknik inceleme ve proje çalışmalarına ait görseller.",
      },
      { property: "og:title", content: "Galeri | Sukaç" },
      {
        property: "og:description",
        content: "Su altyapısı, sayaç panoları ve teknik inceleme çalışmalarına ait görseller.",
      },
      { property: "og:url", content: "/galeri" },
    ],
    links: [{ rel: "canonical", href: "/galeri" }],
  }),
  component: GalleryPage,
});

const items = [
  {
    src: heroImage,
    alt: "Su dağıtım tesisinde büyük çaplı borular ve vana grupları",
    title: "Su altyapı tesisi",
    caption: "Ana dağıtım hatları ve vana grupları",
    wide: true,
  },
  {
    src: meterImage,
    alt: "Bina sayaç panosunda sıralı dijital su sayaçları",
    title: "Sayaç panosu",
    caption: "Bina içi sayaç ayrımı düzeni",
  },
  {
    src: leakImage,
    alt: "Elektronik cihazla zeminde su kaçağı tespiti çalışması",
    title: "Kaçak tespiti",
    caption: "Zemin altı hatlarda teknik inceleme",
  },
  {
    src: planImage,
    alt: "İçme suyu ve atık su hatlarına ait teknik proje paftaları",
    title: "Proje çalışması",
    caption: "Altyapı projelerinin teknik değerlendirmesi",
    wide: true,
  },
  {
    src: meterImage,
    alt: "Su sayaçları ve bakır dağıtım manifoldu detayı",
    title: "Tesisat detayı",
    caption: "Dağıtım manifoldu ve vana bağlantıları",
  },
  {
    src: heroImage,
    alt: "Teknik hacimde su borularının bağlantı detayları",
    title: "Teknik hacim",
    caption: "Bina mekanik sistem bağlantıları",
  },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumb="Galeri"
        eyebrow="Galeri"
        title="Su altyapısı ve teknik çalışma görselleri"
        description="Sayaç panoları, kaçak tespiti çalışmaları, tesisat detayları ve altyapı projelerine dair teknik görseller. Bölüm, yeni çalışma görselleriyle güncellenmek üzere hazırlanmıştır."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Çalışma Görselleri"
            title="Teknik arşiv"
            description="Görseller; su altyapısı, bina su sistemleri, sayaç düzenleri ve teknik inceleme çalışmalarını temsil eder."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                key={`${item.title}-${i}`}
                delay={i * 60}
                className={item.wide ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <figure className="group relative h-full overflow-hidden border border-border bg-card">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={1600}
                    height={1067}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-72"
                  />
                  <figcaption className="border-t border-border px-6 py-5">
                    <h2 className="font-display text-base font-semibold text-foreground">{item.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Benzer bir çalışma için teknik destek alın"
        description="Yapınızın durumunu aktarın; uygun yöntem ve süreç hakkında bilgi verelim."
      />
    </>
  );
}
