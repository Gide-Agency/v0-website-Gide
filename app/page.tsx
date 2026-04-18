import { Header } from "@/components/gide/header"
import { Hero } from "@/components/gide/hero"
import { Scenario } from "@/components/gide/scenario"
import { WhoWeAre } from "@/components/gide/who-we-are"
import { Trust } from "@/components/gide/trust"
import { CTA } from "@/components/gide/cta"
import { Footer } from "@/components/gide/footer"

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-border" />
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <Scenario />
        <Divider />
        <WhoWeAre />
        <Divider />
        <Trust />
        <Divider />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
