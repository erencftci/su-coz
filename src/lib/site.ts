export const site = {
  name: "Sukaç",
  legalName: "Sukaç Su Altyapı Hizmetleri",
  phoneDisplay: "0533 558 62 10",
  phoneHref: "tel:+905335586210",
  whatsappHref:
    "https://wa.me/905335586210?text=" +
    encodeURIComponent("Merhaba, Sukaç ile su kaçağı tespiti ve altyapı hizmetleri hakkında bilgi almak istiyorum."),
  hours: "08:30 – 22:00",
  emergency: "Acil durumlarda 24 saat hizmet",
  tagline: "Su kaçağı tespiti, bina ve site su sistemleri, İSKİ danışmanlığı",
} as const;

export const navLinks = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/su-kacagi-tespit", label: "Su Kaçağı Tespiti" },
  { to: "/sayac-ayrimi", label: "Sayaç Ayrımı" },
  { to: "/iski-danismanlik", label: "İSKİ Danışmanlık" },
  { to: "/proje-hizmetleri", label: "Proje Hizmetleri" },
  { to: "/atik-su-kanal-hizmetleri", label: "Atık Su ve Kanal" },
  { to: "/referanslar", label: "Referanslar" },
  { to: "/galeri", label: "Galeri" },
  { to: "/iletisim", label: "İletişim" },
] as const;

// Referans bölümü/projesi yayında görünmez; referanslar biriktikçe burası true
// yapılırsa menü, alt bilgi, ana sayfa ve /referanslar sayfası olduğu gibi döner.
export const features = { references: false } as const;

// Menü ve alt bilgide gösterilen bağlantılar; kapalı özellikler burada elenir.
export const visibleNavLinks = navLinks.filter(
  (l) => features.references || l.to !== "/referanslar",
);

export const services = [
  {
    to: "/su-kacagi-tespit",
    title: "Su Kaçağı Tespiti",
    summary:
      "Ev, apartman, villa ve sitelerde gizli su kaçaklarının profesyonel yöntemlerle, gereksiz hasar en aza indirilerek tespiti.",
  },
  {
    to: "/sayac-ayrimi",
    title: "Sayaç Ayrımı ve Bina/Site Su Sistemleri",
    summary:
      "Sayaç ayrımı projeleri, protokol hazırlığı, dijital sayaç okuma süreçleri ve bina/site su sistemlerinin düzenlenmesi.",
  },
  {
    to: "/iski-danismanlik",
    title: "İSKİ Danışmanlığı",
    summary:
      "İSKİ ile yürütülen su süreçlerinde başvuru rehberliği, iletişim, koordinasyon ve teknik danışmanlık.",
  },
  {
    to: "/proje-hizmetleri",
    title: "Su ve Atık Su Proje Rehberliği",
    summary:
      "İçme suyu ve atık su altyapısında proje rehberliği ve danışmanlığı, tesisat yönetimi ve proje takibi.",
  },
  {
    to: "/atik-su-kanal-hizmetleri",
    title: "Atık Su ve Kanal Hizmetleri",
    summary:
      "Atık Su Kanal Rabıt Bağlantısı ve Tıkanık Kanal Açılımı çalışmalarında teknik değerlendirme ve uygulama desteği.",
  },
] as const;
