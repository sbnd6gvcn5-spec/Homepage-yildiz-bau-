import { hero } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { a } from "./tokens";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b-2"
      style={{ backgroundColor: a.paper, borderColor: a.ink }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p
            className="mb-4 inline-block border-2 px-3 py-1 text-xs font-semibold tracking-[0.15em] uppercase"
            style={{ borderColor: a.rust, color: a.rustDeep, ...a.bodyFont }}
          >
            {hero.eyebrow}
          </p>
          <h1
            className="text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ...a.headingFont, color: a.ink }}
          >
            {hero.headline}
          </h1>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ ...a.bodyFont, color: a.ink, opacity: 0.85 }}
          >
            {hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-4" style={a.bodyFont}>
            <a
              href="#kontakt"
              className="rounded-sm px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: a.rust }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#leistungen"
              className="rounded-sm border-2 px-6 py-3 text-sm font-semibold transition-colors hover:opacity-70"
              style={{ borderColor: a.ink, color: a.ink }}
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <PlaceholderImage
          label="Bild-Platzhalter · Baustelle"
          className="aspect-[4/5] w-full border-2 md:aspect-square"
          patternClassName="bg-[repeating-linear-gradient(135deg,currentColor_0,currentColor_2px,transparent_2px,transparent_14px)] opacity-15"
          style={{ color: a.ink, borderColor: a.ink, backgroundColor: a.paperDeep }}
        />
      </div>
    </section>
  );
}
