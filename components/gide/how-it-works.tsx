const steps = [
  {
    number: "01",
    title: "Define question",
    description:
      "Translate a business request into a precise, structured analytical question.",
  },
  {
    number: "02",
    title: "Identify required data",
    description:
      "Map the question to the data sources, metrics, and dimensions needed to answer it.",
  },
  {
    number: "03",
    title: "Validate sources",
    description:
      "Check data quality, recency, and consistency across all connected systems.",
  },
  {
    number: "04",
    title: "Interpret results",
    description:
      "Structure the output so that conclusions are traceable back to every input.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            How it works
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            A structured path to reliable answers
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-5 md:flex-col md:gap-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <>
                  <div className="absolute top-5 left-10 right-0 hidden h-px bg-border md:block" />
                  <div className="absolute top-10 bottom-0 left-5 w-px bg-border md:hidden" />
                </>
              )}

              {/* Step number circle */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary text-sm font-medium text-primary-foreground">
                {step.number}
              </div>

              {/* Step content */}
              <div className="md:mt-6">
                <h3 className="mb-2 font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
