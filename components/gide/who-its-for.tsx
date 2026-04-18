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
          For teams where data is scattered, analysts are swamped, and CEOs
          can&apos;t wait days for answers.
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
              Hours lost hunting for data. Reports you shouldn&apos;t be
              running yourself. Every board meeting, a hope the number holds
              up. Gide answers in Slack, with evidence,so you walk in
              knowing.
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
              Days debugging pipelines. More time transforming than
              analysing,and one wrong answer destroys trust. Gide gives you
              a team of governed agents that work under your review, so your
              time goes where it should.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
