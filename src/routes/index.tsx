import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ClipboardList,
  Clock,
  Gauge,
  Handshake,
  MessagesSquare,
  Phone,
  Route as RouteIcon,
  ScanSearch,
  ShieldAlert,
} from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";
import leakImage from "@/assets/leak-detection.jpg";
import meterImage from "@/assets/water-meters.jpg";
import planImage from "@/assets/project-plans.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPlaceholder } from "@/components/site/MapPlaceholder";
import { WhatsAppGlyph } from "@/components/site/Header";
import { features, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukaç | Su Kaçağı Tespiti ve Su Altyapı Çözümleri" },
      {
        name: "description",
        content:
          "Su kaçağı tespiti, bina ve site su tesisatı, İSKİ sayaç ayrımı ve su/atık su proje rehberliği. Sukaç ile profesyonel teknik destek: 0533 558 62 10.",
      },
      { property: "og:title", content: "Sukaç | Su Kaçağı Tespiti ve Su Altyapı Çözümleri" },
      {
        property: "og:description",
        content:
          "Gizli su kaçağı tespiti, bina/site su sistemleri, İSKİ süreç danışmanlığı ve proje rehberliğinde profesyonel destek.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const reasons = [
  {
    icon: RouteIcon,
    title: "Saha Deneyimi",
    text: "Bina, apartman ve site su sistemlerinde uzun süreli saha çalışmasına dayanan uygulama bilgisi.",
  },
  {
    icon: ScanSearch,
    title: "Profesyonel Tespit",
    text: "Gizli su kaçaklarının, gereksiz kırım ve hasar en aza indirilerek profesyonel yöntemlerle tespiti.",
  },
  {
    icon: ClipboardList,
    title: "İSKİ Süreç Bilgisi",
    text: "İSKİ ile yürütülen su süreçlerinde işleyiş, belge ve prosedür bilgisiyle doğru adım planlaması.",
  },
  {
    icon: Gauge,
    title: "Teknik Danışmanlık",
    text: "Sayaç ayrımı, tesisat düzeni ve altyapı kararlarında teknik değerlendirme ve yönlendirme.",
  },
  {
    icon: MessagesSquare,
    title: "Şeffaf İletişim",
    text: "Süreç, yöntem ve kapsam konusunda baştan net bilgi; abartılı vaat içermeyen açık iletişim.",
  },
  {
    icon: Handshake,
    title: "Proje Takibi",
    text: "Başvurudan uygulamaya kadar sürecin takibi ve ilgili taraflarla koordinasyonun sağlanması.",
  },
];

const galleryPreview = [
  { src: meterImage, alt: "Bina sayaç panosunda dijital su sayaçları ve vana grubu" },
  { src: leakImage, alt: "Elektronik cihazla zeminde su kaçağı tespiti çalışması" },
  { src: planImage, alt: "İçme suyu ve atık su altyapısına ait teknik proje paftaları" },
  { src: heroImage, alt: "Su dağıtım hattı üzerindeki büyük çaplı boru ve vana grubu" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <img
          src={heroImage}
          alt="Su altyapısı pompa istasyonunda büyük çaplı su boruları ve vanalar"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/55" />
        <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-8">
            <p className="eyebrow">Su Altyapı ve Teknik Danışmanlık</p>
            <h1 className="mt-6 max-w-4xl font-display text-[2rem] leading-[1.08] font-semibold sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              27+ Yıllık İSKİ Deneyimi ile Su Kaçağı Tespiti ve Su Altyapı Çözümlerinde Profesyonel Destek
            </h1>
            <p className="mt-7 inline-flex items-center gap-3 border-l-2 border-primary bg-navy-foreground/5 px-5 py-3 font-display text-sm font-semibold tracking-[0.18em] text-navy-foreground uppercase sm:text-base">
              <span className="h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
              27+ Yıllık İSKİ Deneyimi
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
              Sukaç; gizli su kaçağı tespiti, bina ve site su sistemleri, İSKİ süreçlerinde danışmanlık ve su/atık su
              projelerinde rehberlik alanlarında saha deneyimine dayalı teknik hizmet sunar.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-navy-foreground px-7 py-4 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
              >
                Ücretsiz Bilgi Al <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp px-7 py-4 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <WhatsAppGlyph className="h-4 w-4" /> WhatsApp ile İletişim
              </a>
            </div>
            <dl className="mt-14 grid gap-6 border-t border-white/12 pt-8 sm:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-steel">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Telefon
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-steel">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" /> Çalışma Saatleri
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold">{site.hours}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-steel">
                  <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" /> Acil Durum
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold">24 saat hizmet</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Sukaç Hakkında"
              title="Su altyapısını mühendislik disiplini ile ele alan teknik bir yaklaşım"
              description="Sukaç, su kaçağı tespitinden sayaç ayrımına, İSKİ süreçlerinden proje rehberliğine kadar suyla ilgili teknik konuları tek bir uzmanlık çatısı altında değerlendirir."
            />
            <Reveal delay={80} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Çalışma yöntemimiz; yapının mevcut durumunu doğru okumak, belirtileri teknik olarak değerlendirmek ve
                gereksiz müdahaleden kaçınarak en uygun adımı planlamak üzerine kuruludur.
              </p>
              <p>
                Apartman ve site yönetimleriyle yürütülen süreçlerde teknik konuların anlaşılır biçimde aktarılmasına
                önem veririz. Sayaç ayrımı, protokol hazırlığı ve İSKİ ile yürütülen işlemlerde sürecin hangi aşamada
                olduğunu takip edilebilir şekilde paylaşırız.
              </p>
              <p>
                Sukaç, İSKİ ile ilgili su süreçlerinde profesyonel rehberlik ve danışmanlık sağlar; resmî bir kurum
                temsilciliği veya bağlılığı iddia etmez.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-9">
              <Link
                to="/hakkimizda"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
              >
                Kurumsal bilgi <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative">
              <img
                src={planImage}
                alt="Su dağıtım ve atık su hatlarına ait teknik proje çizimleri"
                loading="lazy"
                width={1600}
                height={1067}
                className="w-full border border-border object-cover"
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Bina ve site su sistemlerinde teknik değerlendirme",
                  "Gizli su kaçaklarında hasarı en aza indiren tespit yaklaşımı",
                  "Sayaç ayrımı ve protokol süreçlerinde rehberlik",
                  "İSKİ süreçlerinde iletişim ve koordinasyon",
                ].map((item) => (
                  <p
                    key={item}
                    className="border-l-2 border-primary/70 bg-secondary px-4 py-3 text-sm leading-relaxed text-secondary-foreground"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="section-y bg-secondary">
        <div className="container-page">
          <SectionHeading
            eyebrow="Neden Sukaç"
            title="Teknik yeterlilik, süreç bilgisi ve şeffaf iletişim"
            description="Su altyapısı konularında doğru sonuç; doğru teşhis, doğru yöntem ve doğru süreç yönetimiyle mümkündür."
          />
          <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 60} className="bg-card p-8">
                <r.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Suyla ilgili teknik süreçlerin tamamında tek adres"
            description="Tespitten projeye, sayaç ayrımından İSKİ süreçlerine kadar dört ana hizmet başlığı."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={i * 70}>
                <Link to={s.to} className="surface-card group flex h-full flex-col p-8">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground md:text-2xl">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-primary">
                    Detaylı bilgi <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/* REFERENCES — features.references açılınca yeniden görünür olur */}
      {features.references ? (
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Referanslar"
            title="Tamamlanan çalışmalar"
            description="Referans projelerimiz, ilgili tarafların onayı doğrultusunda bu alanda yayınlanacaktır."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 70}>
                <article className="surface-card flex h-full flex-col p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Referans proje {n}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    Proje bilgisi yakında eklenecektir
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Bu alan; yapı tipi, hizmet kapsamı ve süreç özeti gibi bilgilerle güncellenmek üzere
                    hazırlanmıştır.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160} className="mt-10">
            <Link
              to="/referanslar"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Tüm referanslar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      ) : null}

      {/* GALLERY */}
      <section className="section-y bg-navy-deep text-navy-foreground">
        <div className="container-page">
          <SectionHeading
            eyebrow="Galeri"
            tone="light"
            title="Teknik çalışma ve altyapı görselleri"
            description="Sayaç panoları, tespit çalışmaları, tesisat detayları ve altyapı projelerine dair görseller."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map((img, i) => (
              <Reveal key={img.alt} delay={i * 60}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="h-56 w-full border border-white/10 object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-10">
            <Link
              to="/galeri"
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Galeriyi görüntüle <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Müşteri Görüşleri"
            title="Görüş ve değerlendirmeler"
            description="Bu bölüm, müşterilerimizin kendi ifadeleriyle paylaştığı gerçek görüşler için hazırlanmıştır."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n, i) => (
              <Reveal key={n} delay={i * 70}>
                <figure className="surface-card flex h-full flex-col p-8">
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    “Müşteri görüşü alanı — onay verilen değerlendirmeler yayınlandığında burada yer alacaktır.”
                  </blockquote>
                  <figcaption className="mt-7 border-t border-border pt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Müşteri görüşü {n} · yakında
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-y bg-secondary">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="İletişim"
              title="Talebinizi iletin, süreci netleştirelim"
              description="Telefon veya WhatsApp üzerinden ulaşabilir, formu doldurarak da bilgi talebi oluşturabilirsiniz."
            />
            <Reveal delay={80} className="mt-9 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-between border border-border bg-card px-6 py-5 transition-colors hover:border-primary"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Telefon</span>
                <span className="font-display text-lg font-semibold text-navy">{site.phoneDisplay}</span>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-whatsapp px-6 py-5 text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <span className="text-xs uppercase tracking-[0.16em] opacity-80">WhatsApp</span>
                <span className="inline-flex items-center gap-2 font-display text-base font-semibold">
                  <WhatsAppGlyph className="h-4 w-4" /> Mesaj gönder
                </span>
              </a>
              <div className="border border-border bg-card px-6 py-5">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Çalışma saatleri:</span> {site.hours}
                </p>
                <p className="mt-2 text-sm text-foreground">
                  <span className="font-semibold">Acil durum:</span> {site.emergency}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="border border-border bg-card p-7 md:p-10">
              <h3 className="font-display text-xl font-semibold text-foreground">Bilgi talep formu</h3>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="container-page mt-12">
          <MapPlaceholder />
        </div>
      </section>
    </>
  );
}
