import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import planImage from "@/assets/project-plans.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/atik-su-kanal-hizmetleri")({
  head: () => ({
    meta: [
      { title: "Atık Su ve Kanal Hizmetleri | Rabi Bağlantısı ve Kanal Açılımı | Sukaç" },
      {
        name: "description",
        content:
          "Atık su kanal rabi bağlantısı ve tıkanık kanal açılımı: bina, apartman, villa ve sitelerde teknik değerlendirme, uygulama ve süreç takibi.",
      },
      { property: "og:title", content: "Atık Su ve Kanal Hizmetleri | Sukaç" },
      {
        property: "og:description",
        content: "Atık su kanal rabi bağlantısı ve tıkanık kanal açılımı çalışmalarında profesyonel teknik destek.",
      },
      { property: "og:url", content: "/atik-su-kanal-hizmetleri" },
    ],
    links: [{ rel: "canonical", href: "/atik-su-kanal-hizmetleri" }],
  }),
  component: WastewaterPage,
});

const services = [
  {
    title: "Atık Su Kanal Rabi Bağlantısı",
    text: "Yapının atık su hattının mevcut kanal sistemine bağlanmasına yönelik teknik çalışmadır. Bağlantı öncesinde hattın güzergâhı, kot durumu, boru çapı ve bağlantı noktasının uygunluğu yerinde değerlendirilir; gerekli teknik ve idari adımlar sıralanarak süreç planlanır.",
    items: [
      "Mevcut hat ve bağlantı noktasının yerinde incelenmesi",
      "Kot, güzergâh ve çap uygunluğunun değerlendirilmesi",
      "Bağlantı için gerekli teknik hazırlığın planlanması",
      "Süreç boyunca ilgili taraflarla koordinasyon ve takip",
    ],
  },
  {
    title: "Tıkanık Kanal Açılımı",
    text: "Bina içi ve bina dışı atık su hatlarında oluşan tıkanıklıkların açılmasına yönelik çalışmadır. Tıkanıklığın konumu ve nedeni önce değerlendirilir; ardından hatta ve yapıya zarar verilmeden uygun yöntemle açılım yapılır. Tekrarlayan tıkanıklıklarda hattın yapısal durumu ayrıca ele alınır.",
    items: [
      "Tıkanıklık konumunun ve nedeninin belirlenmesi",
      "Bina içi ve bina dışı atık su hatlarında açılım",
      "Apartman, villa ve site hatlarında uygulama",
      "Tekrarlayan tıkanıklıklarda hat durumunun değerlendirilmesi",
    ],
  },
];

function WastewaterPage() {
  return (
    <>
      <PageHero
        breadcrumb="Atık Su ve Kanal Hizmetleri"
        eyebrow="Atık Su ve Kanal Hizmetleri"
        title="Atık su kanal bağlantısı ve kanal açılımında teknik hizmet"
        description="Atık su hatlarının kanal sistemine bağlanması ve tıkanık hatların açılması, yapının mevcut altyapısı değerlendirilerek teknik esaslara göre yürütülür."
        image={planImage}
        imageAlt="Atık su altyapısına ait teknik proje paftaları"
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Hizmet Kapsamı" title="Bu başlık altındaki hizmetler" />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="bg-card p-8 md:p-10">
                <p className="eyebrow">Hizmet 0{i + 1}</p>
                <h2 className="mt-5 font-display text-xl font-semibold text-foreground md:text-2xl">{s.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{s.text}</p>
                <ul className="mt-7 grid gap-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading eyebrow="Süreç" title="Çalışma akışı" />
          <ol className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {[
              { t: "Ön görüşme", d: "Mevcut durumun ve talebin telefon veya WhatsApp üzerinden değerlendirilmesi." },
              { t: "Yerinde inceleme", d: "Hattın, bağlantı noktasının ve tıkanıklık belirtilerinin incelenmesi." },
              { t: "Yöntem ve kapsam", d: "Uygulanacak yöntemin ve kapsamın açık biçimde paylaşılması." },
              { t: "Uygulama ve takip", d: "Çalışmanın yürütülmesi ve gerekli durumlarda sürecin takip edilmesi." },
            ].map((step, i) => (
              <Reveal as="li" key={step.t} delay={i * 60} className="bg-card p-8">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">0{i + 1}</span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{step.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/proje-hizmetleri"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Proje hizmetleri <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Tüm hizmetler <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Atık su ve kanal çalışmanız için bilgi alın"
        description="Hattın durumunu ve talebinizi aktarın; uygulanacak yöntemi ve kapsamı birlikte değerlendirelim."
      />
    </>
  );
}
