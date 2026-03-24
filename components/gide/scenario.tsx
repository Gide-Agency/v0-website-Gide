export function Scenario() {
  return (
    <section className="bg-foreground px-6 py-24 md:py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em] text-white/35">
          4:12PM on a Tuesday
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl text-balance">
          Your CEO asks why margins dropped. You have until end of day.
        </h2>

        <div className="mt-12 grid gap-0 md:grid-cols-2">
          {/* Without Gide */}
          <div className="border border-white/[0.07] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                Without Gide
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              Confident. Unverifiable. Amnesiac.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/55">
              Three hours pulling data from your ERP, CRM, and two
              spreadsheets. The ERP says margins are down 4%. The CRM data
              implies 2%.{" "}
              <span className="text-white">
                You don&apos;t know which is right.
              </span>
            </p>

            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/55">
              You send the number you trust more and hope nobody asks how you
              got it.{" "}
              <span className="text-white">They will.</span>
            </p>
          </div>

          {/* With Gide */}
          <div className="border border-blue-600/15 bg-blue-600/[0.06] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-sans text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                With Gide
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              True. Provable. Governed.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/70">
              You ask the question. Gide pulls from both systems,{" "}
              <span className="text-white">
                detects the 2% discrepancy, and explains why
              </span>{" "}
             ,a one-time revenue event was miscategorized as recurring.
            </p>

            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-white/70">
              You send the correct number with the full evidence chain.{" "}
              <span className="text-white">
                Your CEO shares it with the board. Nobody questions it.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
