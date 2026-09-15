import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, Home, Landmark, Layers } from "lucide-react";
import leakImage from "@/assets/leak-detection.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { WhatsAppGlyph } from "@/components/site/Header";
import { site } from "@/lib/site";

export const Route = createFileRoute("/su-kacagi-tespit")({
  head: () => ({
    meta: [
      { title: "Su Kaçağı Tespiti | Gizli Su Kaçağı Bulma | Sukaç" },
      {
        name: "description",
        content:
          "İstanbul su kaçağı tespiti: ev, apartman, villa ve sitelerde gizli su kaçağı bulma. Profesyonel yöntemlerle, gereksiz hasar en aza indirilerek teknik inceleme.",
      },
      { property: "og:title", content: "Su Kaçağı Tespiti | Sukaç" },
      {
        property: "og:description",
        content: "Gizli su kaçaklarının profesyonel yöntemlerle, minimum hasarla tespiti.",
      },
      { property: "og:url", content: "/su-kacagi-tespit" },
    ],
    links: [{ rel: "canonical", href: "/su-kacagi-tespit" }],
  }),
  component: LeakPage,
});

const targets = [
  { icon: Home, title: "Ev ve daireler", text: "Banyo, mutfak, ısıtma ve temiz su hatlarında oluşan gizli kaçaklar." },
  { icon: Building2, title: "Apartmanlar", text: "Kolon hatları, sayaç bağlantıları ve ortak alan tesisatları." },
  { icon: Layers, title: "Siteler", text: "Blok girişleri, dış hatlar ve ortak kullanım alanlarındaki su kayıpları." },
  { icon: Landmark, title: "Villalar", text: "Bahçe hatları, teknik hacimler ve zemin altı tesisat güzergâhları." },
];

const signs = [
  "Su faturasında açıklanamayan artış",
  "Duvar veya zeminde nem, kabarma ve renk değişimi",
  "Kullanım olmadığı halde sayaçta dönme",
  "Sıcak su hattı çevresinde ısınan zemin bölgeleri",
  "Alt kata veya komşu bölüme sızma",
  "Tesisat basıncında düşüş",
];

const steps = [
  { t: "Ön değerlendirme", d: "Belirtiler, yapının yaşı, tesisat tipi ve önceki müdahaleler hakkında bilgi alınır." },
  { t: "Yerinde teknik inceleme", d: "Tesisat kurgusu incelenir, kaçak şüphesi bulunan bölgeler daraltılır." },
  { t: "Profesyonel tespit", d: "Uygun tespit yöntemleri kullanılarak kaçağın konumu mümkün olan en dar alanda belirlenir." },
  { t: "Raporlama ve yönlendirme", d: "Bulgular, yapılması gereken işlem ve seçenekler açık biçimde aktarılır." },
];

function LeakPage() {
  return (
    <>
      <PageHero
        breadcrumb="Su Kaçağı Tespiti"
        eyebrow="Su Kaçağı Tespiti"
        title="Gizli su kaçaklarının profesyonel yöntemlerle tespiti"
        description="Ev, apartman, villa ve sitelerde görünmeyen su kaçaklarının konumunu, gereksiz kırım ve hasar en aza indirilerek belirliyoruz."
        image={leakImage}
        imageAlt="Zeminde elektronik cihazla yürütülen su kaçağı tespiti çalışması"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-navy-foreground px-6 py-4 text-sm font-semibold text-navy"
          >
            {site.phoneDisplay}
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
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Hizmet Kapsamı"
              title="Tespit odaklı, hasarı en aza indiren teknik çalışma"
            />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Su kaçaklarının önemli bölümü duvar, zemin veya şap altında ilerleyen hatlarda oluşur ve dışarıdan
                doğrudan görülmez. Bu nedenle çalışmamız, kaçağın etkilerini değil kaynağını belirlemeye odaklanır.
              </p>
              <p>
                Kaçak şüphesi bulunan bölge kademeli olarak daraltılır; böylece yapıda geniş alanlı kırım ihtiyacı
                büyük ölçüde azalır. Tespit sonucunda kaçağın konumu ve önerilen işlem adımları açık biçimde aktarılır.
              </p>
              <p className="border-l-2 border-primary bg-secondary px-6 py-5 text-secondary-foreground">
                Su kaçağı tespiti standart hizmet kapsamındadır. Tespit sonrasında talep edilmesi halinde onarım
                hizmeti de sağlanabilir.
              </p>
              <p>
                Çalışma kapsamı ve yöntemi başlangıçta tanımlanır. Sonuçla ilgili abartılı vaat veya koşullu ücret
                iddiasında bulunmayız; değerlendirmeler teknik bulgulara dayanır.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-border bg-card p-8">
              <h3 className="font-display text-lg font-semibold text-foreground">Su kaçağı belirtileri</h3>
              <ul className="mt-6 grid gap-3">
                {signs.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
                Bu belirtilerden birini gözlemliyorsanız, gecikmeden teknik değerlendirme yapılması yapıdaki hasarın
                büyümesini önleyebilir.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading
            eyebrow="Uygulama Alanları"
            title="Hizmet verdiğimiz yapı tipleri"
            description="Her yapı tipinin tesisat kurgusu farklıdır; değerlendirme yapının kendi düzenine göre yapılır."
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 60} className="bg-card p-8">
                <t.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Süreç" title="Tespit çalışması nasıl yürütülür?" />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.t} delay={i * 60} className="border-t-2 border-primary/70 bg-card px-6 py-8">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/sayac-ayrimi"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Sayaç ayrımı hizmeti <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground"
            >
              Bilgi al <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Su kaçağı şüphesi mi var? Teknik değerlendirme için ulaşın"
        description="Belirtileri kısaca aktarın; nasıl ilerlenmesi gerektiği konusunda net bilgi verelim."
      />
    </>
  );
}
