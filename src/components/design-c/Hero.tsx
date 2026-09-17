import { hero } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { c } from "./tokens";

export function Hero() {
  return (
    <section id="top" style={{ backgroundColor: c.black }}>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <p
          className="mb-6 inline-block text-xs font-bold tracking-[0.25em] uppercase"
          style={{ ...c.bodyFont, color: c.gold }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="max-w-4xl text-5xl leading-[0.98] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          style={{ ...c.headingFont, color: c.offwhite }}
        >
          {hero.headline}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="max-w-md text-lg leading-relaxed" style={{ ...c.bodyFont, color: c.gray }}>
              {hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
                style={{ ...c.bodyFont, backgroundColor: c.gold, color: c.black }}
              >
                {hero.primaryCta}
              </a>
              <a
                href="#leistungen"
                className="border px-7 py-3.5 text-sm font-bold tracking-wide uppercase transition-colors hover:opacity-70"
                style={{ ...c.bodyFont, borderColor: c.offwhite, color: c.offwhite }}
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <PlaceholderImage
            label="Bild-Platzhalter"
            className="aspect-[16/10] w-full"
            patternClassName="bg-[repeating-linear-gradient(45deg,currentColor_0,currentColor_2px,transparent_2px,transparent_16px)] opacity-15"
            style={{ color: c.gold, backgroundColor: "#17161a" }}
          />
        </div>
      </div>
    </section>
  );
}
