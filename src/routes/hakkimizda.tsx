import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import meterImage from "@/assets/water-meters.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/site";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Sukaç Su Altyapı ve Danışmanlık" },
      {
        name: "description",
        content:
          "Sukaç; su kaçağı tespiti, bina ve site su tesisatı, İSKİ süreçleri ve su altyapı danışmanlığında saha deneyimine dayalı teknik yaklaşımı benimser.",
      },
      { property: "og:title", content: "Hakkımızda | Sukaç" },
      {
        property: "og:description",
        content: "Su altyapısı, kaçak tespiti ve İSKİ süreçlerinde profesyonel teknik yaklaşım.",
      },
      { property: "og:url", content: "/hakkimizda" },
    ],
    links: [{ rel: "canonical", href: "/hakkimizda" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Su altyapısı uzmanlığı",
    text: "İçme suyu ve atık su sistemlerinin işleyişine dair teknik bilgi; bina içi tesisattan site altyapısına uzanan geniş bir bakış.",
  },
  {
    title: "Su kaçağı tespiti deneyimi",
    text: "Farklı yapı tiplerinde gizli kaçak belirtilerinin doğru okunması ve gereksiz hasar oluşturmadan tespit yapılması.",
  },
  {
    title: "Bina ve site su sistemleri",
    text: "Sayaç düzeni, kolon hatları, vana grupları ve bakım gereksinimlerinin bütüncül değerlendirilmesi.",
  },
  {
    title: "İSKİ süreç bilgisi",
    text: "Su ile ilgili başvuru ve işlemlerin işleyişine dair pratik bilgi; doğru sıralamayla ilerleyen bir süreç planı.",
  },
  {
    title: "Danışmanlık yaklaşımı",
    text: "Karar öncesinde teknik seçeneklerin, gerekliliklerin ve olası sonuçların açık biçimde paylaşılması.",
  },
  {
    title: "Şeffaf çalışma disiplini",
    text: "Kapsam, yöntem ve süreç adımlarının baştan tanımlanması; abartılı vaat ve garanti ifadelerinden kaçınılması.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="Hakkımızda"
        eyebrow="Kurumsal"
        title="Suyla ilgili teknik süreçleri mühendislik disipliniyle yürüten bir hizmet anlayışı"
        description="Sukaç; su kaçağı tespiti, bina ve site su sistemleri, sayaç ayrımı, İSKİ süreçleri ve su/atık su proje rehberliği alanlarında saha deneyimine dayalı profesyonel hizmet sunar."
        image={heroImage}
        imageAlt="Su altyapısı tesisinde boru ve vana grupları"
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Yaklaşımımız"
              title="Doğru teşhis, doğru yöntem, takip edilebilir süreç"
            />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Su ile ilgili sorunların büyük bölümü, görünen belirtinin arkasındaki gerçek nedenin doğru
                belirlenmemesinden kaynaklanır. Bu nedenle çalışmalarımıza yapının mevcut durumunu teknik olarak
                değerlendirmekle başlarız: tesisat kurgusu, sayaç düzeni, kullanım biçimi ve belirtilerin seyri
                birlikte ele alınır.
              </p>
              <p>
                Tespit çalışmalarında amaç, en az müdahale ile en doğru sonuca ulaşmaktır. Gereksiz kırım ve hasar
                oluşturacak yöntemlerden kaçınır, çalışmanın her aşamasını yapı sahibiyle veya yönetimle paylaşırız.
              </p>
              <p>
                Sayaç ayrımı, protokol hazırlığı, dijital sayaç okuma ve İSKİ ile yürütülen işlemlerde süreç bilgisi
                belirleyicidir. Hangi adımın hangi sırayla tamamlanması gerektiğini planlar, ilgili taraflarla
                koordinasyonu sağlar ve süreci takip ederiz.
              </p>
              <p>
                Sukaç, İSKİ süreçlerinde profesyonel rehberlik ve danışmanlık sağlar. Resmî bir kurum temsilciliği
                iddia etmez; hizmetimiz teknik bilgi, süreç deneyimi ve koordinasyon üzerine kuruludur.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <img
              src={meterImage}
              alt="Bina sayaç panosunda düzenli şekilde monte edilmiş dijital su sayaçları"
              loading="lazy"
              width={1600}
              height={1067}
              className="w-full border border-border object-cover"
            />
            <div className="mt-6 border-l-2 border-primary bg-secondary px-6 py-6">
              <p className="text-sm leading-relaxed text-secondary-foreground">
                Sukaç, hizmet kapsamını ve yöntemini önceden tanımlar; sonuç konusunda garanti veya koşullu ücret
                iddiasında bulunmaz. Teknik değerlendirme, süreç bilgisi ve şeffaf iletişim esastır.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading
            eyebrow="Uzmanlık Alanları"
            title="Deneyimin yoğunlaştığı başlıklar"
            description="Su altyapısına dair teknik konular birbiriyle bağlantılıdır; bu nedenle her başlık bütünün parçası olarak ele alınır."
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60} className="bg-card p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Hizmetler" title="Çalışma alanlarımız" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={i * 60}>
                <Link to={s.to} className="surface-card group flex h-full flex-col p-8">
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-primary">
                    Detaylı bilgi <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
