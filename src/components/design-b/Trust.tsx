import { trust } from "@/lib/content";
import { b } from "./tokens";

export function Trust() {
  return (
    <section className="border-b py-16" style={{ backgroundColor: b.surface, borderColor: b.line }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ ...b.monoFont, color: b.muted }}>
          {trust.heading}
        </h2>

        <div className="mt-8 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4" style={{ borderColor: b.line }}>
          {trust.values.map((v, i) => (
            <div key={v.title} className="px-0 py-6 sm:px-6 sm:first:pl-0" style={{ borderColor: b.line }}>
              <span className="text-xs" style={{ ...b.monoFont, color: b.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold" style={{ ...b.headingFont, color: b.ink }}>
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs tracking-wide uppercase" style={{ ...b.monoFont, color: b.muted }}>
          {trust.logosNote}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex h-12 w-28 items-center justify-center border text-[10px] tracking-wide uppercase"
              style={{ ...b.monoFont, borderColor: b.line, backgroundColor: b.surface, color: b.muted }}
            >
              Logo {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
