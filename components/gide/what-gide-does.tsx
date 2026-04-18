const features = [
  {
    number: "01",
    title: 'End the "which dashboard is right?" meeting',
    description:
      "Gide detects when your systems disagree,before the number reaches a decision-maker. No more two slides with different revenue figures. One truth, with proof.",
  },
  {
    number: "02",
    title: "Every number carries a chain of evidence",
    description:
      "Click any insight and see exactly where it came from,through every data source, transformation, and assumption. Your CFO doesn't have to trust you. They can verify.",
  },
  {
    number: "03",
    title: "From one-off analysis to continuous system",
    description:
      "No more rebuilding context. No more repeating work. Every decision is tracked, compared to reality over time, and updated when conditions change. Your intelligence compounds.",
  },
]

export function WhatGideDoes() {
  return (
    <section id="what-gide-does" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What changes
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Your analyst becomes the most trusted person in the room.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Other tools make data work faster. Gide makes data work{" "}
            <em>trustworthy</em>. That&apos;s the difference between an answer and a
            decision.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 max-w-2xl">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className="mb-4 font-serif text-4xl text-blue-600">
                {feature.number}
              </p>
              <h3 className="mb-3 font-serif text-xl text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
