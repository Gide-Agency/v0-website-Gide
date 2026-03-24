import { X, CheckCircle2 } from "lucide-react"

const copilotWeaknesses = [
  "No source tracing — can't show where numbers came from",
  "No conflict detection — doesn't know your ERP and CRM disagree",
  'No definition awareness — "revenue" means whatever it guesses',
  "No memory — every query starts from zero",
  "No governance — hallucinations pass every security check",
]

const gideStrengths = [
  "Full provenance — click any number, see the entire chain",
  "Conflict detection — catches discrepancies before they reach leadership",
  "Definition enforcement — your metrics, your rules, system-wide",
  "Decision memory — tracks commitments and compares to reality",
  "Governed pipeline — LLM proposes, system validates, you decide",
]

export function Comparison() {
  return (
    <section className="bg-foreground px-6 py-24 md:py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-white/35">
          This is not another AI assistant
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl text-balance">
          Copilot generates answers.
          <br />
          Gide governs reality.
        </h2>
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-white/50">
          AI assistants are fast. But speed without truth is just faster
          mistakes. Here&apos;s what&apos;s fundamentally different.
        </p>

        <div className="mt-12 grid gap-0 md:grid-cols-2">
          {/* AI Copilots & Chatbots */}
          <div className="border border-white/[0.07] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                AI copilots &amp; chatbots
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              Confident. Unverifiable. Amnesiac.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/55">
              They give you a number in seconds. But they don&apos;t know your
              definitions. They can&apos;t detect when systems disagree. They
              don&apos;t remember last week&apos;s decision.{" "}
              <strong className="font-semibold text-white">
                They sound right even when they&apos;re wrong.
              </strong>
            </p>

            <ul className="mt-5">
              {copilotWeaknesses.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 py-1.5 text-[0.8125rem] text-white/40"
                >
                  <X className="h-3.5 w-3.5 flex-shrink-0 text-white/25" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gide */}
          <div className="border border-blue-600/15 bg-blue-600/[0.06] p-10">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em]">
                Gide
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl leading-tight">
              Governed. Provable. Compounding.
            </h3>

            <p className="text-[0.9375rem] leading-[1.8] text-white/70">
              Gide doesn&apos;t generate guesses — it{" "}
              <strong className="font-semibold text-white">
                constructs verified decisions from your actual data
              </strong>
              . It knows your definitions. It catches disagreements. It tracks
              decisions over time.{" "}
              <strong className="font-semibold text-white">
                Every output is evidence-bound.
              </strong>
            </p>

            <ul className="mt-5">
              {gideStrengths.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 py-1.5 text-[0.8125rem] text-blue-300/90"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
