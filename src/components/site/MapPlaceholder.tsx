const apiKey = import.meta.env["VITE_GOOGLE_MAPS_EMBED_KEY"] as string | undefined;

// İstanbul geneline ait nötr bir harita görünümü; işaretçi veya adres kullanılmaz.
const center = { lat: 41.0082, lng: 28.9784, zoom: 11 };

const mapSrc = apiKey
  ? `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${center.lat},${center.lng}&zoom=${center.zoom}&maptype=roadmap`
  : `https://maps.google.com/maps?ll=${center.lat},${center.lng}&z=${center.zoom}&t=m&output=embed`;

export function MapPlaceholder() {
  return (
    <div className="relative overflow-hidden border border-border bg-secondary">
      <iframe
        src={mapSrc}
        title="Harita görünümü"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[18rem] w-full border-0 md:h-[22rem]"
      />
    </div>
  );
}
