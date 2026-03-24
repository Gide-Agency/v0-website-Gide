import { X, CheckCircle2 } from "lucide-react"

const copilotWeaknesses = [
  "No source tracing",
  "No conflict detection",
  "No business definition awareness",
  "Each query starts from zero",
  "Hallucinations pass every security check",
]

const gideStrengths = [
  "Full provenance on every insight",
  "Automatic conflict detection",
  "Enforces your metric definitions",
  "Each analysis compounds knowledge",
  "Governed — LLM proposes, system validates",
]

export function Comparison() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24 md:py-32 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
          This is not another copilot
        </p>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl text-balance">
          Copilot gives you an answer.
          <br />
          Gide gives you the truth — with proof.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-400">
          AI assistants are fast. But fast and wrong is worse than slow and{" "}
          <em>right</em>. Here&apos;s what&apos;s fundamentally different.
        </p>

        <div className="mt-12 space-y-8">
          {/* AI Copilots / Chatbots */}
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                AI Copilots / Chatbots
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl font-bold">
              Confident. Unverifiable.
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              They give you a number in seconds. But they don&apos;t know your
              company&apos;s definitions. They can&apos;t tell you where the
              number came from. They can&apos;t detect when two systems
              disagree.{" "}
              <strong className="text-red-400">
                They sound right even when they&apos;re wrong.
              </strong>
            </p>

            <ul className="mt-6 space-y-3">
              {copilotWeaknesses.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-neutral-400"
                >
                  <X className="h-4 w-4 flex-shrink-0 text-neutral-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gide */}
          <div className="rounded-lg border border-blue-500/30 bg-neutral-900 p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
                Gide
              </span>
            </div>

            <h3 className="mb-4 font-serif text-2xl font-bold">
              Correct. Provable. Governed.
            </h3>

            <p className="text-base leading-relaxed text-neutral-400">
              Gide doesn&apos;t just answer — it{" "}
              <strong className="text-white">
                shows the entire reasoning chain
              </strong>
              . It knows your definitions. It catches disagreements between
              systems.{" "}
              <strong className="text-white">
                It gives your analyst the evidence to defend every number.
              </strong>
            </p>

            <ul className="mt-6 space-y-3">
              {gideStrengths.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-500" />
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
