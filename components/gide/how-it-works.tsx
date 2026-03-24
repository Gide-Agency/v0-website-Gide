const steps = [
  {
    number: "Step 01",
    title: "Decision Intent",
    description:
      "Translates a vague business question into a precise, structured analytical problem with clear scope.",
  },
  {
    number: "Step 02",
    title: "Data Contract",
    description:
      "Maps the question to required sources, metrics, and definitions — and surfaces any conflicts between them.",
  },
  {
    number: "Step 03",
    title: "Blueprint",
    description:
      "Validates data quality, recency, and consistency. Builds the analysis path with every assumption explicit.",
  },
  {
    number: "Step 04",
    title: "Insight",
    description:
      "Delivers the answer with full provenance — every conclusion traceable to every input, ready for the board.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            How it works
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Four steps. Extracting truth.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Gide doesn&apos;t just generate answers — it constructs them through
            a validated pipeline where every step is visible and every output is
            checked.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
                {step.number}
              </p>
              <h3 className="mb-3 font-serif text-xl text-card-foreground">
                {step.title}
              </h3>
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
