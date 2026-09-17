import { trust } from "@/lib/content";
import { a } from "./tokens";

export function Trust() {
  return (
    <section
      className="border-b-2 py-16"
      style={{ backgroundColor: a.charcoal, borderColor: a.ink }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="mb-10 text-2xl font-semibold sm:text-3xl"
          style={{ ...a.headingFont, color: a.paper }}
        >
          {trust.heading}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.values.map((v, i) => (
            <div key={v.title} className="border-t-2 pt-4" style={{ borderColor: a.rust }}>
              <span
                className="text-xs font-semibold tracking-[0.2em]"
                style={{ color: a.rust, ...a.bodyFont }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-2 text-lg font-semibold"
                style={{ ...a.headingFont, color: a.paper }}
              >
                {v.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ ...a.bodyFont, color: a.paper, opacity: 0.7 }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-12 text-xs tracking-wide uppercase opacity-50"
          style={{ ...a.bodyFont, color: a.paper }}
        >
          {trust.logosNote}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex h-12 w-28 items-center justify-center border text-[10px] tracking-wide uppercase opacity-50"
              style={{ borderColor: a.paper, color: a.paper, ...a.bodyFont }}
            >
              Logo {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
