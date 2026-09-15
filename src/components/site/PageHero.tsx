import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        </>
      ) : (
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
      )}

      <div className="container-page relative py-16 md:py-24">
        <nav aria-label="Sayfa yolu" className="flex items-center gap-2 text-xs text-steel">
          <Link to="/" className="hover:text-primary">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <span className="text-navy-foreground/90">{breadcrumb}</span>
        </nav>
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-3xl leading-[1.1] font-semibold md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel md:text-lg">{description}</p>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
