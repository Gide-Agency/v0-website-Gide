"use client"

import Image from "next/image"

const partners = [
  {
    name: "NVIDIA Inception Program",
    logo: "/images/partners/nvidia-inception.png",
  },
  {
    name: "EDISS",
    logo: "/images/partners/ediss-masters.jpg",
  },
  {
    name: "Hanken",
    logo: "/images/partners/hanken.png",
  },
  {
    name: "Helsinki",
    logo: "/images/partners/helsinki.png",
  },
  {
    name: "NVIDIA Inception Program 2",
    logo: "/images/partners/nvidia-inception.png",
  },
  {
    name: "EDISS 2",
    logo: "/images/partners/ediss-masters.jpg",
  },
  {
    name: "Hanken 2",
    logo: "/images/partners/hanken.png",
  },
  {
    name: "Helsinki 2",
    logo: "/images/partners/helsinki.png",
  },
]

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Who we are
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              We are building agents that you can trust to do analytics.
            </h2>
          </div>
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-full md:h-56 md:w-56">
            <Image
              src="/images/Harald-Helsinki.png"
              alt="Harald in Helsinki"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* A tool for analysts */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-4 font-serif text-xl text-card-foreground">
              A tool for analysts
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For the analyst everyone depends on. Gide gives you a team of
              governed agents,and makes you the most trusted person in the
              room.
            </p>
          </div>

          {/* A solution for companies */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-4 font-serif text-xl text-card-foreground">
              Answers for leaders
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Runs inside your environment. Connects to your systems. Respects
              your permissions. Never trains on your data. GDPR-native. EU AI
              Act–ready.
            </p>
          </div>
        </div>

        {/* Partners and supporters */}
        <div className="mt-20">
          <h3 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
            Partners and supporters
          </h3>
          <div className="relative overflow-hidden">
            {/* Fade effect on sides */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-48 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-background to-transparent" />

            {/* Scrolling container — two identical halves, no outer gap */}
            <div className="animate-scroll-left flex hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-12 pr-12">
                  {partners.map((partner) => (
                    <div
                      key={`${partner.name}-${setIndex}`}
                      className="flex h-20 w-40 flex-shrink-0 items-center justify-center"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={80}
                        style={{ width: 'auto', height: 'auto' }}
                        className="max-h-16 max-w-full object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
