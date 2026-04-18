"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "How", href: "#how-it-works" },
  { label: "Who", href: "#who-its-for" },
  { label: "What", href: "#impact" },
  { label: "Us", href: "#who-we-are" },
  { label: "Why", href: "#trust" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
        <div className="flex items-center">
          <a href="#" className="block">
            <Image
              src="/images/gide-logo.png"
              alt="Gide"
              width={80}
              height={28}
              className="h-auto w-auto object-contain"
              priority
            />
          </a>
        </div>

        <nav
          className="hidden min-w-0 items-center justify-center gap-6 whitespace-nowrap md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end md:flex">
          <a
            href="https://calendly.com/harald-gideagency/25plus"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
          >
            Book a walkthrough
          </a>
        </div>

        <div className="col-span-2 flex justify-end md:hidden">
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border px-6 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com/harald-gideagency/25plus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-md bg-foreground px-5 py-2 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              onClick={() => setMobileOpen(false)}
            >
              Book a walkthrough
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}