const ceoStatements = [
  {
    title: "Answers in Slack, in seconds.",
    body: "No waiting for someone to pull a report. You ask. The agent investigates. You get the number, the source, and the reason.",
  },
  {
    title: "Meetings you walk into certain.",
    body: "Every number carries its evidence. Your CFO can verify before the board asks. Nobody has to take your word for it,and nobody does.",
  },
]

const analystStatements = [
  {
    title: "A team of agents, working under your review.",
    body: "Routine investigations, dashboard edits, new pipelines,proposed step by step. You approve, edit, or reject. One analyst, the output of a team.",
  },
  {
    title: "The person leadership trusts, not the one they chase.",
    body: "Your work ships with provenance baked in. Nobody questions where the number came from, because they can see for themselves.",
  },
]

function Row({ tag, items }: { tag: string; items: typeof ceoStatements }) {
  return (
    <div>
      <p className="mb-5 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {tag}
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-card p-8"
          >
            <h3 className="mb-3 font-serif text-xl leading-tight text-card-foreground">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Impact() {
  return (
    <section id="impact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          What changes
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          The bottleneck is gone. The proof is in the answer.
        </h2>
        <p className="mt-6 max-w-3xl text-[0.9375rem] leading-[1.8] text-muted-foreground">
          Gide doesn&apos;t make data work faster. It makes data work
          trustworthy,so the work gets done, and the answer holds up.
        </p>

        <div className="mt-12 space-y-10">
          <Row tag="For CEOs" items={ceoStatements} />
          <Row tag="For analysts" items={analystStatements} />
        </div>
      </div>
    </section>
  )
}
