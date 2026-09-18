import { cta } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Cta() {
  return (
    <section id="kontakt" className="border-b py-16 md:py-24" style={{ backgroundColor: t.ink, borderColor: t.stone + "40" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-end">
        <div data-reveal-item>
          <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ ...t.bodyFont, color: t.terracotta }}>
            Kontakt
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-medium sm:text-4xl" style={{ ...t.headingFont, color: t.sand }}>
            {cta.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed" style={{ ...t.bodyFont, color: "#C9C2B6" }}>
            {cta.sub}
          </p>
        </div>
        <a
          data-reveal-item
          href="/#kontakt"
          className="shrink-0 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ ...t.bodyFont, backgroundColor: t.terracotta }}
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
