import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import meterImage from "@/assets/water-meters.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/sayac-ayrimi")({
  head: () => ({
    meta: [
      { title: "İSKİ Sayaç Ayrımı ve Bina/Site Su Sistemleri | Sukaç" },
      {
        name: "description",
        content:
          "İSKİ sayaç ayrımı süreçleri, sayaç panoları, protokol hazırlığı, dijital sayaç okuma ve bina/site su tesisatı düzenlemelerinde teknik rehberlik.",
      },
      { property: "og:title", content: "Sayaç Ayrımı ve Bina/Site Su Sistemleri | Sukaç" },
      {
        property: "og:description",
        content: "Sayaç ayrımı projeleri, protokol hazırlığı ve İSKİ sistem süreçlerinde teknik destek.",
      },
      { property: "og:url", content: "/sayac-ayrimi" },
    ],
    links: [{ rel: "canonical", href: "/sayac-ayrimi" }],
  }),
  component: MeterPage,
});

const scope = [
  {
    title: "Bina içi tesisat uygulama ve bakımı",
    text: "Kolon hatları, dağıtım noktaları ve vana gruplarının uygun düzende kurulması, mevcut tesisatın bakımı.",
  },
  {
    title: "Bina ve site su sistemi düzenlemesi",
    text: "Ortak kullanım ve bağımsız bölüm ayrımının teknik olarak uygulanabilir şekilde planlanması.",
  },
  {
    title: "Sayaç ayrımı projeleri",
    text: "Bağımsız bölümlerin kendi sayacı üzerinden ölçülmesine yönelik teknik düzenleme ve uygulama.",
  },
  {
    title: "Sayaç panoları",
    text: "Sayaçların erişilebilir, okunabilir ve bakımı kolay biçimde konumlandırıldığı pano düzeni.",
  },
  {
    title: "Protokol hazırlığı",
    text: "Sayaç ayrımı sürecinde gereken protokol ve belgelerin hazırlanmasında rehberlik.",
  },
  {
    title: "Dijital sayaç okuma süreçleri",
    text: "Dijital ölçüm ve uzaktan okuma uygulamalarına yönelik teknik değerlendirme ve yönlendirme.",
  },
  {
    title: "İSKİ sistemine sayaç bilgisi girişi desteği",
    text: "Sayaç bilgilerinin İSKİ sistemine/veri tabanına işlenmesi sürecinde destek ve takip.",
  },
  {
    title: "İSKİ ile iletişim ve koordinasyon",
    text: "Süreç boyunca gerekli görüşme ve koordinasyonun yönetilmesi, adımların sıralanması.",
  },
];

const process = [
  { t: "Mevcut durumun tespiti", d: "Bina veya sitedeki tesisat kurgusu, sayaç düzeni ve bağımsız bölüm yapısı incelenir." },
  { t: "Teknik plan", d: "Ayrımın hangi noktalardan, hangi hat düzeniyle yapılabileceği teknik olarak planlanır." },
  { t: "Protokol ve belge hazırlığı", d: "Süreçte gerekli protokol ve belgelerin hazırlanmasında rehberlik sağlanır." },
  { t: "Uygulama", d: "Sayaç panosu ve hat düzenlemeleri planlanan şekilde uygulanır." },
  { t: "Sistem kaydı", d: "Sayaç bilgilerinin İSKİ sistemine işlenmesi sürecinde destek verilir." },
  { t: "Takip ve teslim", d: "Süreç tamamlanana kadar takip edilir, yönetime bilgi aktarılır." },
];

function MeterPage() {
  return (
    <>
      <PageHero
        breadcrumb="Sayaç Ayrımı"
        eyebrow="Sayaç Ayrımı ve Bina/Site Su Sistemleri"
        title="Sayaç ayrımı sürecinde teknik planlama ve İSKİ prosedürlerinde rehberlik"
        description="Bina ve sitelerde bağımsız bölümlerin su tüketiminin kendi sayaçları üzerinden ölçülmesi; teknik uygulama, protokol hazırlığı ve sistem kayıt süreçlerini birlikte gerektirir."
        image={meterImage}
        imageAlt="Bina sayaç panosunda sıralı dijital su sayaçları ve vanalar"
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Süreç Hakkında" title="Sayaç ayrımı neden teknik bir süreçtir?" />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Sayaç ayrımı yalnızca yeni sayaç montajı değildir. Bağımsız bölümlerin hatlarının doğru ayrıştırılması,
                ortak kullanım noktalarının belirlenmesi ve tesisatın bu düzene uygun hale getirilmesi gerekir.
              </p>
              <p>
                Bina veya sitede mevcut tesisatın kurgusu her yapıda farklıdır. Bu nedenle önce mevcut durum incelenir;
                ardından uygulanabilir bir ayrım planı oluşturulur. Yanlış planlanan bir ayrım, sonradan tüketim
                anlaşmazlıklarına ve ek maliyete yol açabilir.
              </p>
              <p>
                Sürecin ikinci boyutu prosedürlerdir: protokol hazırlığı, sayaç bilgilerinin sisteme işlenmesi ve İSKİ
                ile yürütülen yazışma ve koordinasyon adımları. Sukaç bu adımlarda teknik rehberlik ve süreç takibi
                sağlar.
              </p>
              <p>
                Yönetim ve kat malikleriyle yürütülen süreçlerde teknik bilgilerin anlaşılır biçimde aktarılmasına önem
                verilir; kararlar bu şekilde daha hızlı ve daha net alınır.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="border border-border bg-navy-deep p-8 text-navy-foreground">
              <h3 className="font-display text-lg font-semibold">Tipik sayaç ayrımı düzeni</h3>
              <ul className="mt-7 space-y-4 text-sm">
                {[
                  "Ana giriş hattı ve ana vana",
                  "Ortak kullanım hattı ve ölçüm noktası",
                  "Sayaç panosu ve bağımsız bölüm sayaçları",
                  "Bağımsız bölüm kolon hatları",
                  "Ölçüm verilerinin dijital okunması",
                ].map((row, i) => (
                  <li key={row} className="flex gap-4 border-b border-white/10 pb-4 last:border-0">
                    <span className="font-display text-xs font-semibold tracking-[0.18em] text-primary">
                      0{i + 1}
                    </span>
                    <span className="text-steel">{row}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-steel">
                Şema, genel işleyişi anlatmak amacıyla sadeleştirilmiştir. Uygulama düzeni yapının mevcut tesisatına
                göre belirlenir.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hizmet Kapsamı"
            title="Sayaç ayrımı ve bina/site su sistemlerinde sunduğumuz başlıklar"
          />
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

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Adımlar" title="Sayaç ayrımı süreç akışı" />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 60} className="border-t-2 border-primary/70 bg-card px-6 py-8">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200} className="mt-12">
            <Link
              to="/iski-danismanlik"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              İSKİ danışmanlık hizmeti <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Bina veya sitenizde sayaç ayrımı planlıyor musunuz?"
        description="Mevcut tesisat düzeninizi aktarın; sürecin nasıl planlanacağı konusunda teknik bilgi verelim."
      />
    </>
  );
}
