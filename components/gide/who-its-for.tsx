import { Layers, Clock, RefreshCw, Zap } from "lucide-react"

const painPoints = [
  {
    icon: Layers,
    title: "Data scattered across systems that don't talk to each other",
    description:
      "You spend hours figuring out which number is right before the real work even starts.",
  },
  {
    icon: Clock,
    title: "Decisions delayed because nobody trusts the data",
    description:
      "Leadership won't commit to a strategy when they're not sure the numbers behind it are correct.",
  },
  {
    icon: RefreshCw,
    title: "Rebuilding context every time & nothing compounds",
    description:
      "Last month's work doesn't help this month because there's no institutional memory.",
  },
  {
    icon: Zap,
    title: "AI that sounds confident but can't show its work",
    description:
      'When your VP asks "where did this number come from?" — Copilot has nothing. Gide shows the entire chain.',
  },
]

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Who it&apos;s for
          </p>

          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Built for the analyst everyone depends on.
          </h2>
          <p className="mt-2 font-sans text-lg font-bold text-foreground">
            Whose credibility is on the line.
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            You&apos;re the one who gets the Slack message at 4pm. The one who has
            to reconcile three systems before you can even start analyzing. The
            one whose credibility is on the line every time a number reaches
            leadership.
          </p>
        </div>

        <div className="space-y-4">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                <point.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-card-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}