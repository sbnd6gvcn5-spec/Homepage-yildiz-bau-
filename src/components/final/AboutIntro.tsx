import { about } from "@/lib/content-fliesen";
import { PlaceholderImage } from "@/components/placeholder-image";
import { t } from "./tokens";

export function AboutIntro() {
  return (
    <section id="top" className="border-b" style={{ backgroundColor: t.sand, borderColor: t.stone + "40" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ ...t.bodyFont, color: t.terracotta }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: t.terracotta }} />
            {about.eyebrow}
          </p>
          <h1
            className="text-3xl leading-[1.18] font-medium tracking-tight sm:text-4xl lg:text-5xl"
            style={{ ...t.headingFont, color: t.ink }}
          >
            {about.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {about.lead}
          </p>
        </div>

        <div className="border" style={{ borderColor: t.stone + "40" }}>
          <PlaceholderImage
            label="Bild-Platzhalter · Betrieb"
            className="aspect-[4/3] w-full"
            patternClassName="bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]"
            style={{ color: t.stone, backgroundColor: t.surface }}
          />
        </div>
      </div>
    </section>
  );
}
