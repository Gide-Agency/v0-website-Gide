import Image from "next/image"
import { Shield, Scale, Lock } from "lucide-react"

const partners = [
  {
    name: "NVIDIA Inception Program",
    logo: "/images/partners/nvidia-inception.png",
    role: "Startup member",
  },
  {
    name: "EDISS",
    logo: "/images/partners/ediss-masters.jpg",
    role: "Associate partners",
  },
  {
    name: "Hanken",
    logo: "/images/partners/hanken.png",
    role: "Startup member",
  },
  {
    name: "Helsinki",
    logo: "/images/partners/helsinki.png",
    role: "Startup member",
  },
]

const values = [
  {
    icon: Shield,
    title: "Truth by design",
    description:
      "Every conclusion is traceable end-to-end, inspectable step by step, and independently verifiable. No hidden assumptions. No black boxes.",
  },
  {
    icon: Scale,
    title: "Principles of sovereignty",
    description:
      "Your data never leaves your control and is never reused for model training. Human judgment remains authoritative.",
  },
  {
    icon: Lock,
    title: "Governance as a foundation",
    description:
      "Ethical constraints, access policies, and business rules are encoded as enforceable system rules, not guidelines.",
  },
]

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Who we are
          </p>
          <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            We are building the layer between your questions, your data and your action.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* A tool for analysts */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-4 font-serif text-xl text-card-foreground">
              A tool for analysts
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Helps analysts precisely define business questions and goals. Locate
              the relevant data. Define the process to use the data for a valuable
              answer.
            </p>
          </div>

          {/* A solution for companies */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="mb-4 font-serif text-xl text-card-foreground">
              A solution for companies
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Gide integrates with existing data systems and permissions, allowing
              companies to use AI securely for analysis without surrendering
              sovereignty.
            </p>
          </div>
        </div>

        {/* Our values */}
        <div className="mt-12">
          <h3 className="mb-8 font-serif text-xl text-foreground">
            Our values
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-muted-foreground">
                  <value.icon className="h-5 w-5" />
                </div>
                <h4 className="mb-3 font-serif text-lg text-card-foreground">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Partners and supporters */}
        <div className="mt-20">
          <h3 className="mb-12 text-center font-serif text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
            Partners and supporters
          </h3>
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="h-auto w-auto max-h-16 object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
