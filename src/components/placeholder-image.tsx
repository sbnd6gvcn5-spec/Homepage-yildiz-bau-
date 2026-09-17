import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  patternClassName?: string;
  style?: CSSProperties;
};

// Temporärer Bild-Platzhalter: keine echten Projektfotos vorhanden.
export function PlaceholderImage({
  label = "Bild-Platzhalter",
  className = "",
  patternClassName = "bg-[repeating-linear-gradient(135deg,currentColor_0,currentColor_1px,transparent_1px,transparent_12px)] opacity-10",
  style,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={style}
      role="img"
      aria-label={label}
    >
      <div className={`absolute inset-0 ${patternClassName}`} aria-hidden="true" />
      <span className="relative px-3 py-1 text-center text-xs font-medium tracking-wide uppercase opacity-60">
        {label}
      </span>
    </div>
  );
}
