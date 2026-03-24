const scenarios = [
  {
    label: "You ask",
    labelColor: "text-blue-600",
    title: '"Why is revenue down in Germany?"',
    body: (
      <p className="text-base leading-relaxed text-muted-foreground">
        Gide doesn&apos;t give you a guess. It constructs a{" "}
        <strong className="text-foreground">structured investigation</strong> —
        pulling from your ERP, CRM, and pipeline data. It detects that two
        sources define &quot;Germany revenue&quot; differently, reconciles them,
        and delivers the real answer{" "}
        <strong className="text-foreground">
          with the full evidence chain attached.
        </strong>
      </p>
    ),
    callout: "Not an answer. A governed investigation with a decision path.",
    calloutColor: "bg-blue-50 text-blue-700",
  },
  {
    label: "You decide",
    labelColor: "text-green-600",
    title: '"Increase sales investment in Germany by €500K"',
    body: (
      <p className="text-base leading-relaxed text-muted-foreground">
        Gide records this as a{" "}
        <strong className="text-foreground">commitment</strong>. It defines what
        should happen — pipeline growth targets, expected close rates, revenue
        trajectory. Then it{" "}
        <strong className="text-foreground">
          tracks what actually happens
        </strong>{" "}
        against those expectations, week over week.
      </p>
    ),
    callout: "Not a report. A living decision with accountability.",
    calloutColor: "bg-green-50 text-green-700",
  },
  {
    label: "Reality shifts",
    labelColor: "text-amber-600",
    title: "Pipeline grew 12% but close rate dropped 40%",
    body: (
      <p className="text-base leading-relaxed text-muted-foreground">
        Gide detects the{" "}
        <strong className="text-foreground">drift</strong> between what was
        expected and what happened. It surfaces the deviation with context —{" "}
        <strong className="text-foreground">
          not just that things changed, but why, and what it means for the
          original decision.
        </strong>{" "}
        It forces re-evaluation before the quarter closes.
      </p>
    ),
    callout: "Not a dashboard update. A governed trigger for re-decision.",
    calloutColor: "bg-amber-50 text-amber-700",
  },
]

export function WhatBecomesPossible() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What becomes possible
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Not faster answers.
            <br />
            A new operating model.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            When every decision is grounded in verified data and tracked over
            time, your company stops reacting and starts operating on{" "}
            <em>reality</em>.
          </p>
        </div>

        <div className="space-y-8">
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              className="rounded-lg border border-border bg-card p-8"
            >
              <p className={`mb-3 text-xs font-medium uppercase tracking-widest ${scenario.labelColor}`}>
                {scenario.label}
              </p>
              <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                {scenario.title}
              </h3>
              {scenario.body}
              <div
                className={`mt-6 rounded-md ${scenario.calloutColor} px-5 py-3`}
              >
                <p className="text-sm font-medium">
                  → {scenario.callout}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
