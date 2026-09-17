import { references } from "@/lib/content-fliesen";
import { PlaceholderImage } from "@/components/placeholder-image";
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

        <div className="mt-px grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: t.stone + "40" }}>
          {references.items.map((item, i) => (
            <div key={item.title} style={{ backgroundColor: t.surface }}>
              <PlaceholderImage
                className="aspect-[4/3] w-full"
                style={{ color: t.stone, backgroundColor: t.sand }}
                patternClassName="bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 p-4">
                <div>
                  <span className="text-xs" style={{ ...t.bodyFont, color: t.terracotta }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-medium" style={{ ...t.headingFont, color: t.ink }}>
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs tracking-wide uppercase" style={{ ...t.bodyFont, color: t.stone }}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
