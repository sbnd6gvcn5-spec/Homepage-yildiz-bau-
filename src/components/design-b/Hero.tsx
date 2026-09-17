import { hero } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { b } from "./tokens";

export function Hero() {
  return (
    <section id="top" className="border-b" style={{ backgroundColor: b.bg, borderColor: b.line }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ ...b.monoFont, color: b.accent }}
          >
            <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: b.accent }} />
            {hero.eyebrow}
          </p>
          <h1
            className="text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ...b.headingFont, color: b.ink }}
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ ...b.bodyFont, backgroundColor: b.accent }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#leistungen"
              className="border px-6 py-3 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ ...b.bodyFont, borderColor: b.ink, color: b.ink }}
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="border" style={{ borderColor: b.line }}>
          <PlaceholderImage
            label="Bild-Platzhalter · Bauplan"
            className="aspect-[4/5] w-full md:aspect-square"
            patternClassName="bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.08]"
            style={{ color: b.ink, backgroundColor: b.surface }}
          />
        </div>
      </div>
    </section>
  );
}
