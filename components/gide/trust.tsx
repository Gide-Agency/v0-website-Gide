import { GitPullRequest, Link2, AlertTriangle, ShieldCheck } from "lucide-react"

const trustItems = [
  {
    icon: GitPullRequest,
    title: "Agents propose. You approve.",
    description:
      "Every step is visible before it runs. Accept, edit, or reject,like reviewing a pull request, but for your data.",
  },
  {
    icon: Link2,
    title: "Every number clicks back to its source.",
    description:
      "Full evidence chain from raw data through every transformation. Your CFO doesn't have to trust you. They can verify.",
  },
  {
    icon: AlertTriangle,
    title: "Conflicts surfaced, not hidden.",
    description:
      "When your ERP and your CRM disagree, Gide tells you before the number reaches leadership,with context on why, and which to trust.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign by design.",
    description:
      "Runs in your environment. Encrypted. Never used for training. GDPR-native, EU AI Act–ready.",
  },
]

export function Trust() {
  return (
    <section id="trust" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trust &amp; Governance
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Confidence that is backed by truth.
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
