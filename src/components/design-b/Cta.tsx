import { cta } from "@/lib/content";
import { b } from "./tokens";

export function Cta() {
  return (
    <section id="kontakt" className="border-b py-16 md:py-24" style={{ backgroundColor: b.ink, borderColor: b.line }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ ...b.monoFont, color: b.accent }}>
            Kontakt
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold sm:text-4xl" style={{ ...b.headingFont, color: "#ffffff" }}>
            {cta.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed" style={{ ...b.bodyFont, color: "#c7ccd6" }}>
            {cta.sub}
          </p>
        </div>
        <a
          href="#kontakt-formular"
          className="shrink-0 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ ...b.bodyFont, backgroundColor: b.accent }}
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
