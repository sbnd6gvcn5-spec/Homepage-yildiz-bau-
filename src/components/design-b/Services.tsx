import { services } from "@/lib/content";
import { b } from "./tokens";

export function Services() {
  return (
    <section id="leistungen" className="border-b py-16 md:py-24" style={{ backgroundColor: b.bg, borderColor: b.line }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: b.line }}>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ ...b.headingFont, color: b.ink }}>
            {services.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
            {services.sub}
          </p>
        </div>

        <div>
          {services.items.map((item, i) => (
            <div
              key={item.title}
              className="grid gap-2 border-b py-6 sm:grid-cols-[80px_1fr_1.4fr] sm:items-baseline sm:gap-6"
              style={{ borderColor: b.line }}
            >
              <span className="text-sm" style={{ ...b.monoFont, color: b.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold" style={{ ...b.headingFont, color: b.ink }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
