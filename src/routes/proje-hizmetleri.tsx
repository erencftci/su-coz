import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import planImage from "@/assets/project-plans.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/proje-hizmetleri")({
  head: () => ({
    meta: [
      { title: "Su ve Atık Su Proje Rehberliği ve Danışmanlığı | Sukaç" },
      {
        name: "description",
        content:
          "İçme suyu ve atık su altyapısında proje rehberliği ve danışmanlığı, tesisat yönetimi, proje takibi; bina, villa, apartman ve siteler için teknik rehberlik.",
      },
      { property: "og:title", content: "Proje Hizmetleri | Sukaç" },
      {
        property: "og:description",
        content: "İçme suyu ve atık su altyapısında proje rehberliği ve danışmanlığı, tesisat yönetimi ve proje takibi.",
      },
      { property: "og:url", content: "/proje-hizmetleri" },
    ],
    links: [{ rel: "canonical", href: "/proje-hizmetleri" }],
  }),
  component: ProjectsPage,
});

const scope = [
  {
    title: "İçme suyu proje rehberliği",
    text: "İçme suyu altyapısında teknik gerekliliklerin değerlendirilmesi ve uygulanabilir çözümlerin yönlendirilmesi.",
  },
  {
    title: "Atık su proje rehberliği",
    text: "Atık su hatlarında kot, güzergâh ve bağlantı gereksinimlerine yönelik teknik rehberlik.",
  },
  {
    title: "Proje rehberliği ve danışmanlığı",
    text: "Karar aşamasında teknik seçeneklerin, süreç gerekliliklerinin ve olası sonuçların birlikte değerlendirilmesi.",
  },
  {
    title: "Tesisat yönetimi",
    text: "Uygulama sürecinde tesisat işlerinin planlanması, sıralanması ve teknik denetiminin sağlanması.",
  },
  {
    title: "Proje takibi",
    text: "Sürecin aşamalarının izlenmesi, aksaklıkların erken tespiti ve ilgili taraflara bilgi aktarımı.",
  },
  {
    title: "Bina ve site altyapı rehberliği",
    text: "Bina, villa, apartman ve sitelerde su altyapısına yönelik bütüncül teknik yönlendirme.",
  },
  {
    title: "Süreç koordinasyonu",
    text: "Suyla ilgili teknik süreçlerde taraflar arası koordinasyonun yürütülmesi.",
  },
  {
    title: "Teknik değerlendirme raporlaması",
    text: "İnceleme sonuçlarının, önerilerin ve adımların yazılı ve anlaşılır biçimde paylaşılması.",
  },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Proje Hizmetleri"
        eyebrow="Su ve Atık Su Proje Hizmetleri"
        title="İçme suyu ve atık su altyapısında proje rehberliği ve danışmanlığı"
        description="Bina, villa, apartman ve sitelerde suyla ilgili teknik süreçlerin planlanması, yönetilmesi ve takibi; genel bir tesisat hizmeti değil, profesyonel proje rehberliği ve danışmanlığı."
        image={planImage}
        imageAlt="İçme suyu ve atık su altyapısına ait teknik proje çizimleri"
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Yaklaşım" title="Doğru kararlar, uygulamadan önce alınır" />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Su ve atık su altyapısında yapılan hataların maliyeti, uygulama aşamasında değil sonrasında ortaya
                çıkar. Bu nedenle hizmetimiz, uygulamaya geçmeden önce teknik gerekliliklerin ve süreç adımlarının
                netleştirilmesine odaklanır.
              </p>
              <p>
                Yapının kullanım biçimi, bağımsız bölüm sayısı, mevcut altyapı ve saha koşulları birlikte
                değerlendirilir. Teknik seçenekler; uygulanabilirlik, bakım kolaylığı ve süreç gereklilikleri açısından
                karşılaştırılarak aktarılır.
              </p>
              <p>
                Uygulama aşamasında tesisat işlerinin planlanması ve teknik denetimi ile süreç takip edilir; ilgili
                taraflar arasındaki koordinasyon yürütülür.
              </p>
              <p>
                Hizmetimiz proje rehberliği ve danışmanlığı kapsamındadır; teknik değerlendirme, yönlendirme ve süreç
                yönetimi üzerine kuruludur.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-border bg-navy-deep p-8 text-navy-foreground">
              <h3 className="font-display text-lg font-semibold">Uygulama alanları</h3>
              <ul className="mt-6 space-y-4 text-sm text-steel">
                {["Binalar", "Villalar", "Apartmanlar", "Konut siteleri", "Yeni yapı projeleri"].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0">
                    <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/iletisim"
                className="mt-8 inline-flex items-center gap-2 bg-navy-foreground px-6 py-3.5 text-sm font-semibold text-navy"
              >
                Proje görüşmesi <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading eyebrow="Kapsam" title="Proje rehberliği ve danışmanlığı başlıkları" />
          <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 50} className="bg-card p-7">
                <h3 className="font-display text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Projenizin su altyapısı için teknik danışmanlık"
        description="Projenizin kapsamını aktarın; teknik gereklilikleri ve süreç adımlarını birlikte planlayalım."
      />
    </>
  );
}
