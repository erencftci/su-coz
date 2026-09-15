import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        const text = [
          "Sukaç web sitesi talep formu",
          `Ad Soyad: ${data.get("name")}`,
          `Telefon: ${data.get("phone")}`,
          `Konu: ${data.get("subject")}`,
          `Yapı tipi: ${data.get("building")}`,
          `Mesaj: ${data.get("message")}`,
        ].join("\n");
        setSent(true);
        window.open(`https://wa.me/905335586210?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" placeholder="Adınız ve soyadınız" required />
        <Field label="Telefon" name="phone" type="tel" placeholder="05XX XXX XX XX" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Konu
          </label>
          <select
            id="subject"
            name="subject"
            className="h-12 border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            defaultValue="Su kaçağı tespiti"
          >
            <option>Su kaçağı tespiti</option>
            <option>Sayaç ayrımı</option>
            <option>İSKİ danışmanlığı</option>
            <option>Su ve atık su proje rehberliği</option>
            <option>Bina / site su sistemleri</option>
            <option>Diğer</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label htmlFor="building" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Yapı Tipi
          </label>
          <select
            id="building"
            name="building"
            className="h-12 border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            defaultValue="Apartman"
          >
            <option>Daire / Ev</option>
            <option>Apartman</option>
            <option>Site</option>
            <option>Villa</option>
            <option>Yeni yapı projesi</option>
            <option>Diğer</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Durumunuzu kısaca açıklayın: belirtiler, yapının durumu ve talebiniz."
          className="border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-navy px-6 py-4 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90"
      >
        Bilgi Talebi Gönder
      </button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Form gönderildiğinde talebiniz WhatsApp üzerinden {site.phoneDisplay} numarasına iletilmek üzere hazırlanır.
        Dilerseniz doğrudan telefonla da ulaşabilirsiniz.
      </p>
      {sent ? (
        <p className="border border-primary/40 bg-accent px-4 py-3 text-sm text-accent-foreground">
          Talebiniz hazırlandı. WhatsApp penceresi açılmadıysa {site.phoneDisplay} numarasını arayabilirsiniz.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 border border-input bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
