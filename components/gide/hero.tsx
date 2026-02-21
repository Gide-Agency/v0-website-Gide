"use client"

import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
          <span className="text-xs font-medium text-blue-600">
            Currently in early access
          </span>
        </div>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Executive questions → structured analysis
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Surface the data sources and derive the analytical path to deliver more auditable answers.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/harald-gideagency/15plus"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book intro call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://demo-gide.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Try the demo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-muted-foreground" />
      </div>
    </section>
  )
}
