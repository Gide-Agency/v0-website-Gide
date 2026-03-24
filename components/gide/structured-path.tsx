const steps = [
  {
    number: "01",
    title: "Decision Intent",
    subtitle: "What are we actually deciding?",
    description:
      "Translate a vague business question into a clear, scoped decision with defined stakes, constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Data Contract",
    subtitle: "What data defines this decision,and does it agree?",
    description:
      "Identify the exact sources, metrics, and definitions required, and surface any conflicts before they turn into wrong conclusions.",
  },
  {
    number: "03",
    title: "Blueprint",
    subtitle: "How do we get from data to truth?",
    description:
      "Build a complete, traceable path from raw data to conclusion, with every assumption explicit and every step validated.",
  },
  {
    number: "04",
    title: "Provenance result",
    subtitle: "Closest thing to a decision, not a report.",
    description:
      "Deliver a clear, defensible conclusion with full provenance, ready to act on and stand behind.",
  },
]

export function StructuredPath() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            How it works
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Four steps. Extracting truth.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Gide doesn&apos;t just generate answers,it constructs them through
            a validated pipeline where every step is visible and every output is
            checked:
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                {step.number}
              </div>
              <h3 className="mb-1 font-serif text-xl text-foreground">
                {step.title}
              </h3>
              <p className="mb-2 text-sm italic text-muted-foreground">
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
