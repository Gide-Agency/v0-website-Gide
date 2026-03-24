const steps = [
  {
    number: "01",
    title: "Define the question",
    description:
      "Translate a business request into a precise, structured analytical question with clear scope and intent.",
  },
  {
    number: "02",
    title: "Map required data",
    description:
      "Identify the data sources, metrics, and dimensions needed — and surface any conflicts between them.",
  },
  {
    number: "03",
    title: "Validate sources",
    description:
      "Check data quality, recency, and consistency. If two sources disagree, Gide catches it before your stakeholder does.",
  },
  {
    number: "04",
    title: "Deliver with provenance",
    description:
      "Structure the output so every conclusion is traceable back to every input. No black boxes. No hidden assumptions.",
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
            A structured path to reliable answers
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
                {step.number}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
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
