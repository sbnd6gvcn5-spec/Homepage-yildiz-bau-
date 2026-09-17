import { references } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { b } from "./tokens";

export function References() {
  return (
    <section id="referenzen" className="border-b py-16 md:py-24" style={{ backgroundColor: b.surface, borderColor: b.line }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: b.line }}>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ ...b.headingFont, color: b.ink }}>
            {references.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
            {references.sub}
          </p>
        </div>

        <div className="mt-px grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: b.line }}>
          {references.items.map((item, i) => (
            <div key={item.title} style={{ backgroundColor: b.surface }}>
              <PlaceholderImage
                className="aspect-[4/3] w-full"
                style={{ color: b.ink, backgroundColor: b.bg }}
                patternClassName="bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.07]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 p-4">
                <div>
                  <span className="text-xs" style={{ ...b.monoFont, color: b.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-semibold" style={{ ...b.headingFont, color: b.ink }}>
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs tracking-wide uppercase" style={{ ...b.monoFont, color: b.muted }}>
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
