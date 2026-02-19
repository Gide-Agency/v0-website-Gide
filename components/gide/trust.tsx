import { Eye, Link2, FileCheck, Lock } from "lucide-react"

const trustItems = [
  {
    icon: Eye,
    title: "Analysis steps are visible",
    description:
      "Every analytical step is documented and inspectable by anyone on the team.",
  },
  {
    icon: Link2,
    title: "Sources are traceable",
    description:
      "Every number links back to its origin, so you always know where data comes from.",
  },
  {
    icon: FileCheck,
    title: "Reasoning is auditable",
    description:
      "Logic and assumptions are explicit, making it easy to verify or challenge conclusions.",
  },
  {
    icon: Lock,
    title: "Security-first architecture",
    description:
      "Your data stays yours. Built with enterprise-grade security from day one.",
  },
]

export function Trust() {
  return (
    <section id="trust" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trust & transparency
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Transparent by Design
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-lg text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
