import Image from "next/image";
import { references } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function References() {
  return (
    <section id="referenzen" className="border-b py-16 md:py-24" style={{ backgroundColor: t.surface, borderColor: t.stone + "40" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: t.stone + "40" }}>
          <h2 className="text-2xl font-medium sm:text-3xl" style={{ ...t.headingFont, color: t.ink }}>
            {references.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {references.sub}
          </p>
        </div>

        {/* Hairline-Raster über 1px-Ringe statt Container-Hintergrund: bei einer
            unvollständigen letzten Reihe bliebe sonst eine leere Zelle sichtbar. */}
        <div className="mt-px grid sm:grid-cols-2 lg:grid-cols-3">
          {references.items.map((item, i) => (
            <div
              key={item.title}
              style={{ backgroundColor: t.surface, boxShadow: `0 0 0 1px ${t.stone}40` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ backgroundColor: t.sand }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  style={"position" in item ? { objectPosition: item.position } : undefined}
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs" style={{ ...t.bodyFont, color: t.terracotta }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs tracking-wide uppercase" style={{ ...t.bodyFont, color: t.stone }}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-1 text-base font-medium" style={{ ...t.headingFont, color: t.ink }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
