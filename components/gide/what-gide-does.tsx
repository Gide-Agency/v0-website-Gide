import { Search, MessageSquareText, GitBranch } from "lucide-react"

const features = [
  {
    icon: MessageSquareText,
    title: "Clarify the Question",
    description:
      "Turn vague business requests into clear analytical problems.",
  },
  {
    icon: Search,
    title: "Find the Right Data",
    description:
      "Locate relevant sources across fragmented systems.",
  },
  {
    icon: GitBranch,
    title: "Structure the Analysis",
    description:
      "Build a defensible, traceable process that leads to reliable answers.",
  },
]

export function WhatGideDoes() {
  return (
    <section id="what-gide-does" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What Gide does
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            From ambiguity to clarity
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/20"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
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
