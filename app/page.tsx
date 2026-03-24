import { Header } from "@/components/gide/header"
import { Hero } from "@/components/gide/hero"
import { WhatGideDoes } from "@/components/gide/what-gide-does"
import { Scenario } from "@/components/gide/scenario"
import { StructuredPath } from "@/components/gide/structured-path"
import { Comparison } from "@/components/gide/comparison"
import { HowItWorks } from "@/components/gide/how-it-works"
import { WhoItsFor } from "@/components/gide/who-its-for"
import { WhyGide } from "@/components/gide/why-gide"
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
        <WhatGideDoes />
        <Divider />
        <Scenario />
        <Divider />
        <StructuredPath />
        <Comparison />
        <Divider />
        <HowItWorks />
        <Divider />
        <WhoItsFor />
        <Divider />
        <WhyGide />
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
