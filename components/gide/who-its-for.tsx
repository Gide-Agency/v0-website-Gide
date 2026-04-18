export function WhoItsFor() {
  return (
    <section id="who-its-for" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Who it&apos;s for
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          Built for the people who need the numbers.
        </h2>
        <p className="mt-6 max-w-3xl text-[0.9375rem] leading-[1.8] text-muted-foreground">
          Gide fits companies where data lives in too many places, where the
          analyst is outnumbered by the questions, and where the CEO
          can&apos;t wait two days for an answer that should take two minutes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* For operators and CEOs */}
          <div className="rounded-lg border border-border bg-card p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                If this sounds like you
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl leading-tight text-foreground">
              You ask the questions. You need answers that hold up.
            </h3>
            <p className="text-[0.9375rem] leading-[1.8] text-muted-foreground">
              You&apos;re running a company where numbers live across Stripe,
              HubSpot, CSVs, a warehouse, and three spreadsheets. Every
              question means a wait. Every board meeting means hoping the
              number is right. Gide gives you answers in Slack, with
              evidence,so you walk in knowing.
            </p>
          </div>

          {/* For analysts and data teams */}
          <div className="rounded-lg border border-blue-500/30 bg-blue-50/40 p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-blue-600">
                Or this
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl leading-tight text-foreground">
              You are the bottleneck. You shouldn&apos;t be.
            </h3>
            <p className="text-[0.9375rem] leading-[1.8] text-muted-foreground">
              One of you, a queue of requests, no time for real analysis.
              Every dashboard edit takes an afternoon. Every ad-hoc question
              pushes the real work out a week. Gide gives you a team of
              governed agents that do the grunt work under your
              direction,so you can spend your time on what actually needs a
              human.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
