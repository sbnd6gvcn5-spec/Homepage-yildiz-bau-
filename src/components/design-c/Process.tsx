import { process } from "@/lib/content";
import { c } from "./tokens";

export function Process() {
  return (
    <section id="prozess" className="py-16 md:py-24" style={{ backgroundColor: c.black }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...c.headingFont, color: c.offwhite }}>
          {process.heading}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ ...c.bodyFont, color: c.gray }}>
          {process.sub}
        </p>

        <ol className="mt-12 grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.title}>
              <span className="block text-5xl leading-none font-bold" style={{ ...c.headingFont, color: c.gold }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold" style={{ ...c.headingFont, color: c.offwhite }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...c.bodyFont, color: c.gray }}>
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
