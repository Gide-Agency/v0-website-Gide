import { CheckCircle2 } from "lucide-react"

const approaches = [
  {
    label: "Traditional BI",
    title: "Slow but manual",
    description:
      "You control every step — and spend 80% of your time building reports, not reading them.",
    traits: ["Full control", "Extremely slow", "Errors go undetected"],
    highlight: false,
  },
  {
    label: "AI Chatbots",
    title: "Fast but blind",
    description:
      "You get a number in seconds — but no way to verify where it came from or whether it's right.",
    traits: ["Instant answers", "No source tracing", "Hallucinations undetected"],
    highlight: false,
  },
  {
    label: "Gide",
    title: "Fast and provable",
    description:
      "You get the answer fast — and every step, source, and assumption is visible and auditable.",
    traits: ["Full provenance", "Conflict detection", "Audit-ready output"],
    highlight: true,
  },
]

export function WhyGide() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Why Gide
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Not faster dashboards.
            <br />
            Trustworthy answers.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Most tools make analytics faster. Gide makes analytics{" "}
            <em>defensible</em>. Here&apos;s the difference.
          </p>
        </div>

        <div className="space-y-6">
          {approaches.map((approach) => (
            <div
              key={approach.label}
              className={`rounded-lg border p-8 ${
                approach.highlight
                  ? "border-blue-500 bg-blue-50/50"
                  : "border-border bg-card"
              }`}
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {approach.label}
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {approach.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {approach.description}
              </p>
              <ul className="mt-4 space-y-2">
                {approach.traits.map((trait) => (
                  <li
                    key={trait}
                    className={`flex items-center gap-2 text-sm ${
                      approach.highlight
                        ? "font-medium text-blue-700"
                        : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 ${
                      approach.highlight ? "text-blue-500" : "text-muted-foreground"
                    }`} />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
