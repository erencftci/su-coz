import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function MapPlaceholder() {
  return (
    <div className="relative overflow-hidden border border-border bg-secondary">
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.24 0.05 259 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.24 0.05 259 / 0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative flex min-h-[18rem] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[22rem]">
        <span className="inline-flex h-12 w-12 items-center justify-center border border-primary/40 bg-background text-primary">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-lg font-semibold text-foreground">Harita alanı</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Konum bilgisi güncellendiğinde bu alana Google Haritalar görünümü eklenecektir. Bu süreçte iletişim için
          telefon ve WhatsApp kanallarını kullanabilirsiniz.
        </p>
        <p className="mt-5 text-sm font-semibold text-navy">{site.phoneDisplay}</p>
      </div>
    </div>
  );
}
