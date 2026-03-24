import { Eye, Link2, ShieldCheck, Lock } from "lucide-react"

const trustItems = [
  {
    icon: Eye,
    title: "Every step visible",
    description:
      "Full transparency into every analytical step. Nothing happens behind closed doors.",
  },
  {
    icon: Link2,
    title: "Every source linked",
    description:
      "Click any result. Follow the evidence chain to the raw data. See exactly how it was derived.",
  },
  {
    icon: ShieldCheck,
    title: "Conflicts surfaced, not hidden",
    description:
      "When sources disagree, Gide tells you — with context on why and which to trust.",
  },
  {
    icon: Lock,
    title: "Governance as code",
    description:
      "Ethical constraints, access policies, and business rules are encoded as enforceable system rules — not guidelines that drift.",
  },
]

export function Trust() {
  return (
    <section id="trust" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trust & Governance
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Not just transparent. Governed.
          </h2>
        </div>

        <div className="space-y-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-bold text-card-foreground">
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
