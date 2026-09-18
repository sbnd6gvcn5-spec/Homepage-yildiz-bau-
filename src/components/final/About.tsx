import { about } from "@/lib/content-fliesen";
import { PlaceholderImage } from "@/components/placeholder-image";
import { t } from "./tokens";

export function About() {
  return (
    <section
      id="ueber-uns"
      className="border-b py-16 md:py-24"
      style={{ backgroundColor: t.surface, borderColor: t.stone + "40" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          data-reveal-item
          className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between"
          style={{ borderColor: t.stone + "40" }}
        >
          <h2 className="text-2xl font-medium sm:text-3xl" style={{ ...t.headingFont, color: t.ink }}>
            {about.eyebrow}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {about.headline}
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div data-reveal-item>
            <p className="max-w-xl text-lg leading-relaxed" style={{ ...t.bodyFont, color: t.ink }}>
              {about.lead}
            </p>
            <div className="mt-6 max-w-xl space-y-4">
              {about.paragraphs.map((text) => (
                <p key={text} className="text-base leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div data-reveal-item className="border" style={{ borderColor: t.stone + "40" }}>
            <PlaceholderImage
              label="Bild-Platzhalter · Betrieb"
              className="aspect-[4/3] w-full"
              patternClassName="bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]"
              style={{ color: t.stone, backgroundColor: t.sand }}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {about.values.map((v, i) => (
            <div key={v.title} data-reveal-item className="border-t pt-4" style={{ borderColor: t.stone + "40" }}>
              <span className="text-xs font-medium tracking-[0.2em]" style={{ ...t.bodyFont, color: t.terracotta }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium" style={{ ...t.headingFont, color: t.ink }}>
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
