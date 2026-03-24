import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          Walk into the next meeting
          <br />
          knowing every number is right.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          See how Gide turns ambiguity into auditable answers — with a live demo
          or a 20-minute walkthrough.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/harald-gideagency/15plus"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://calendly.com/harald-gideagency/25plus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </section>
  )
}
