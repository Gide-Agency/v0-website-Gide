import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
          Bring clarity to your data workflows.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          Join the early access list and be the first to experience structured,
          defensible analysis.
        </p>
        <div className="mt-10">
          <a
            href="https://calendly.com/harald-gideagency/15plus"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book intro call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
