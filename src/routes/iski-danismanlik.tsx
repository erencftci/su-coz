import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/iski-danismanlik")({
  head: () => ({
    meta: [
      { title: "İSKİ Danışmanlık | Su Süreçlerinde Teknik Rehberlik | Sukaç" },
      {
        name: "description",
        content:
          "İSKİ danışmanlık: yeni yapı ve site projelerinde su süreçleri, başvuru rehberliği, iletişim ve koordinasyon, teknik danışmanlık ve proje takibi.",
      },
      { property: "og:title", content: "İSKİ Danışmanlık | Sukaç" },
      {
        property: "og:description",
        content: "İSKİ ile yürütülen su süreçlerinde profesyonel rehberlik, koordinasyon ve proje takibi.",
      },
      { property: "og:url", content: "/iski-danismanlik" },
    ],
    links: [{ rel: "canonical", href: "/iski-danismanlik" }],
  }),
  component: IskiPage,
});

const areas = [
  {
    title: "Yeni yapı projeleri",
    text: "Yeni inşa edilen yapılarda suyla ilgili süreçlerin hangi aşamada, hangi sırayla yürütülmesi gerektiğine dair rehberlik.",
  },
  {
    title: "Site projeleri",
    text: "Çok bloklu yapı ve sitelerde ortak altyapı, sayaç düzeni ve süreç planlamasında danışmanlık.",
  },
  {
    title: "Başvuru süreçleri",
    text: "Su ile ilgili başvurularda gerekli adımların, belge ve bilgi ihtiyacının önceden netleştirilmesi.",
  },
  {
    title: "İletişim",
    text: "Süreç boyunca gerekli görüşmelerin teknik içerikle ve doğru muhataplarla yürütülmesi.",
  },
  {
    title: "Koordinasyon",
    text: "Yapı sahibi, yönetim, müteahhit ve teknik ekipler arasındaki koordinasyonun sağlanması.",
  },
  {
    title: "Teknik süreç rehberliği",
    text: "Tesisat ve altyapı kararlarının süreç gereklilikleriyle uyumlu biçimde alınması için teknik yönlendirme.",
  },
  {
    title: "Proje takibi",
    text: "Sürecin hangi aşamada olduğunun izlenmesi ve ilgili taraflara düzenli bilgi aktarılması.",
  },
  {
    title: "Saha deneyimine dayalı danışmanlık",
    text: "Uygulamada karşılaşılan durumlara dair pratik bilgiye dayanan, gerçekçi bir yol haritası.",
  },
  {
    title: "İSKAN İşlemleri",
    text: "İSKAN süreçlerinde gerekli teknik ve idari işlemler konusunda danışmanlık ve süreç takibi desteği sağlanmaktadır.",
  },
];

function IskiPage() {
  return (
    <>
      <PageHero
        breadcrumb="İSKİ Danışmanlık"
        eyebrow="İSKİ Danışmanlık"
        title="İSKİ ile yürütülen su süreçlerinde profesyonel rehberlik ve danışmanlık"
        description="Yeni yapı ve site projelerinde suyla ilgili işlemlerin doğru sırayla planlanması, iletişimin teknik içerikle yürütülmesi ve sürecin takip edilmesi."
        image={heroImage}
        imageAlt="Şehir su altyapısında büyük çaplı boru ve vana grupları"
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Hizmet Yaklaşımı" title="Süreç bilgisi, doğru planlamanın temelidir" />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Suyla ilgili işlemlerde zaman kaybının en yaygın nedeni, adımların yanlış sırayla ilerletilmesi ve
                teknik gerekliliklerin sonradan fark edilmesidir. Sukaç, süreci baştan planlayarak bu tür geri
                dönüşlerin önüne geçmeyi hedefler.
              </p>
              <p>
                Yeni yapı ve site projelerinde suyla ilgili başvuru ve işlemlerin kapsamı, gereken teknik hazırlık ve
                izlenmesi gereken sıra önceden değerlendirilir. Böylece proje takvimi daha gerçekçi biçimde kurgulanır.
              </p>
              <p>
                Süreç boyunca ilgili taraflarla iletişim ve koordinasyon yürütülür; teknik konular anlaşılır biçimde
                aktarılır ve sürecin durumu düzenli olarak paylaşılır.
              </p>
              <p className="border-l-2 border-primary bg-secondary px-6 py-5 text-secondary-foreground">
                Sukaç, İSKİ süreçlerinde profesyonel danışmanlık ve rehberlik hizmeti sunar. Herhangi bir resmî kurum
                temsilciliği veya kurumsal bağlılık iddiasında bulunmaz; hizmet kapsamı teknik bilgi, süreç deneyimi ve
                koordinasyondan oluşur.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-border bg-card p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">Kimler için uygundur?</h3>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Yeni yapı yapan yapı sahipleri ve müteahhitler",
                  "Apartman ve site yönetimleri",
                  "Sayaç ayrımı planlayan binalar",
                  "Altyapı düzenlemesi gereken siteler",
                  "Su süreçlerinde teknik yönlendirme arayan proje ekipleri",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/iletisim"
                className="mt-8 inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground"
              >
                Süreç değerlendirmesi <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading eyebrow="Kapsam" title="Danışmanlık başlıkları" />
          <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 50} className="bg-card p-7">
                <h3 className="font-display text-base font-semibold text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/proje-hizmetleri"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Proje hizmetleri <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/sayac-ayrimi"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Sayaç ayrımı <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="İSKİ süreciniz için teknik rehberlik alın"
        description="Projenizin durumunu aktarın; hangi adımların gerektiğini ve nasıl sıralanacağını birlikte değerlendirelim."
      />
    </>
  );
}
