import { process } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Process() {
  return (
    <section id="prozess" className="border-b py-16 md:py-24" style={{ backgroundColor: t.sand, borderColor: t.stone + "40" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          data-reveal-item
          className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: t.stone + "40" }}>
          <h2 className="text-2xl font-medium sm:text-3xl" style={{ ...t.headingFont, color: t.ink }}>
            {process.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {process.sub}
          </p>
        </div>

        <ol className="mt-10 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.title} data-reveal-item className="relative pt-6">
              <div className="absolute top-0 left-0 h-px w-full" style={{ backgroundColor: t.stone + "40" }} />
              <div className="absolute top-0 left-0 h-px" style={{ width: "28px", backgroundColor: t.terracotta }} />
              <span className="text-sm" style={{ ...t.bodyFont, color: t.terracotta }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium" style={{ ...t.headingFont, color: t.ink }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
