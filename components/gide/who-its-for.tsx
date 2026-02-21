import { Layers, MessageCircleQuestion, ShieldCheck, Zap } from "lucide-react"

const painPoints = [
  { icon: Layers, text: "Difficulty identifying the correct data across inconsistent and fragmented sources" },
  { icon: MessageCircleQuestion, text: "Interpreting vague requests before analysis can begin" },
  { icon: ShieldCheck, text: "Remembering and rebuilding context instead of compounding knowledge" },
  { icon: Zap, text: "Receiving AI-generated answers that are not verifiable or grounded in truth" },
]

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
          {/* LEFT: headline + paragraph in the same column (so the column has full height) */}
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Who it{"'"}s for
            </p>

            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Built for the people behind the numbers
            </h2>

            {/* controls the spacing between headline and paragraph (replaces mb-16) */}
            <p className="mt-12 text-base leading-relaxed text-muted-foreground">
              Gide is built for data analysts and data specialists in small to
              mid-sized companies who spend large portions of their time
              collecting, validating, and rebuilding reports instead of
              analyzing and advising.
            </p>
          </div>

          {/* RIGHT: vertically centered against the full left column height */}
          <div className="grid grid-cols-2 gap-3 self-center">
            {painPoints.map((point) => (
              <div
                key={point.text}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                  <point.icon className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-card-foreground">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}