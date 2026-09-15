type LogoProps = {
  className?: string;
  /** "light" for dark backgrounds, "dark" for light backgrounds */
  tone?: "light" | "dark";
  showWordmark?: boolean;
};

/**
 * Sukaç corporate mark: a technical "S" formed by three offset flow lines
 * inside a square emblem, paired with a geometric wordmark.
 */
export function Logo({ className, tone = "dark", showWordmark = true }: LogoProps) {
  const mark = tone === "light" ? "text-navy-foreground" : "text-navy";
  const rule = tone === "light" ? "text-primary" : "text-primary";

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={`h-9 w-9 shrink-0 ${mark}`}
        fill="none"
      >
        <rect x="0.75" y="0.75" width="38.5" height="38.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M11 13.5h13.5a4.5 4.5 0 0 1 0 9H15.5a4.5 4.5 0 0 0 0 9H29"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
        <path d="M11 8.5h18" className={rule} stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
      </svg>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-[1.35rem] font-semibold tracking-tight ${mark}`}>Sukaç</span>
          <span
            className={`mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.28em] ${
              tone === "light" ? "text-steel" : "text-muted-foreground"
            }`}
          >
            Su Altyapı
          </span>
        </span>
      ) : null}
    </span>
  );
}
