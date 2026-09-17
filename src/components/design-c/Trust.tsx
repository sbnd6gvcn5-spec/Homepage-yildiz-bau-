import { trust } from "@/lib/content";
import { c } from "./tokens";

export function Trust() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: c.offwhite }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-md text-3xl font-bold sm:text-4xl" style={{ ...c.headingFont, color: c.black }}>
          {trust.heading}
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {trust.values.map((v, i) => (
            <div key={v.title} className="flex gap-5">
              <span
                className="text-4xl leading-none font-bold sm:text-5xl"
                style={{ ...c.headingFont, color: c.gold }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold" style={{ ...c.headingFont, color: c.black }}>
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ ...c.bodyFont, color: c.black, opacity: 0.65 }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-xs font-semibold tracking-[0.2em] uppercase opacity-50" style={{ ...c.bodyFont, color: c.black }}>
          {trust.logosNote}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex h-12 w-28 items-center justify-center border text-[10px] font-semibold tracking-wide uppercase opacity-60"
              style={{ borderColor: c.black, color: c.black, ...c.bodyFont }}
            >
              Logo {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
