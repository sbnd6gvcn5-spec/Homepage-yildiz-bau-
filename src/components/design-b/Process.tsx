import { process } from "@/lib/content";
import { b } from "./tokens";

export function Process() {
  return (
    <section id="prozess" className="border-b py-16 md:py-24" style={{ backgroundColor: b.bg, borderColor: b.line }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: b.line }}>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ ...b.headingFont, color: b.ink }}>
            {process.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
            {process.sub}
          </p>
        </div>

        <ol className="mt-10 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-full" style={{ backgroundColor: b.line }} />
              <div
                className="absolute top-0 left-0 h-px"
                style={{ width: "28px", backgroundColor: b.accent }}
              />
              <span className="text-sm" style={{ ...b.monoFont, color: b.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold" style={{ ...b.headingFont, color: b.ink }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
