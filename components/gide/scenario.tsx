export function Scenario() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          4:12PM on a Tuesday
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          Your CEO asks why margins dropped. You have until end of day.
        </h2>

        <div className="mt-12 space-y-8">
          {/* Without Gide */}
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-red-600">
                Without Gide
              </span>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              Three hours pulling data from your ERP, CRM, and two
              spreadsheets. The ERP says margins are down 4%. The CRM data
              implies 2%.{" "}
              <strong className="text-foreground">
                You don&apos;t know which is right.
              </strong>
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You send the number you trust more and hope nobody asks how you
              got it.{" "}
              <strong className="text-foreground">They will.</strong>
            </p>
          </div>

          {/* With Gide */}
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-green-600">
                With Gide
              </span>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              You ask the question. Gide pulls from both systems,{" "}
              <strong className="text-foreground">
                detects the 2% discrepancy, and explains why
              </strong>{" "}
              — a one-time revenue event was miscategorized as recurring.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You send the correct number with the full evidence chain.{" "}
              <strong className="text-foreground">
                Your CEO shares it with the board. Nobody questions it.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
