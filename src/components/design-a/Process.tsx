import { process } from "@/lib/content";
import { a } from "./tokens";

export function Process() {
  return (
    <section
      id="prozess"
      className="border-b-2 py-16 md:py-24"
      style={{ backgroundColor: a.paper, borderColor: a.ink }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ ...a.headingFont, color: a.ink }}
          >
            {process.heading}
          </h2>
          <p
            className="mt-3 text-base leading-relaxed opacity-80"
            style={{ ...a.bodyFont, color: a.ink }}
          >
            {process.sub}
          </p>
        </div>

        <ol className="mt-10 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li key={step.title}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: a.rust }}
              >
                {i + 1}
              </span>
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ ...a.headingFont, color: a.ink }}
              >
                {step.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed opacity-75"
                style={{ ...a.bodyFont, color: a.ink }}
              >
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
