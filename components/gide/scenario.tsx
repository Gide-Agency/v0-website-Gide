export function Scenario() {
  return (
    <section id="how-it-works" className="bg-foreground px-6 py-24 md:py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl text-balance">
          Two ways in. One workforce.
        </h2>
        <p className="mt-6 max-w-3xl text-[0.9375rem] leading-[1.8] text-white/70">
          CEOs ask in Slack. Analysts work in a console where every step is
          proposed,accept, edit, or reject. Same agents. Same governance.
        </p>

        <div className="mt-12 grid gap-0 md:grid-cols-2">
          {/* For CEOs */}
          <div className="border border-white/[0.07] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                In Slack
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              Get answers in Slack.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/70">
              Your CEO asks. Gide runs a governed investigation and returns a{" "}
              <span className="text-white">
                verified answer with its evidence
              </span>
              . No dashboards. No waiting.
            </p>
          </div>

          {/* For analysts */}
          <div className="border border-blue-600/15 bg-blue-600/[0.06] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                In the console
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              Direct a team of governed agents.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/70">
              Modify dashboards. Build pipelines. Run investigations. Agents
              propose each step. You approve, edit, or reject,and{" "}
              <span className="text-white">
                ship a week&apos;s work in an afternoon
              </span>
              .
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-[0.9375rem] leading-[1.8] text-white/70">
          When the CEO&apos;s question needs deeper work, Gide hands it to your
          analyst with full context.{" "}
          <span className="text-white">Nothing falls through.</span>
        </p>
      </div>
    </section>
  )
}
