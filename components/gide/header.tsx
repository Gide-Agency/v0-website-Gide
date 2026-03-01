"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "What we do", href: "#what-gide-does" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Who we are", href: "#who-we-are" },
  { label: "Trust", href: "#trust" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
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
            href="https://live-demo.gideagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Test live demo
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
          className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden"
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
              href="https://calendly.com/harald-gideagency/15plus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-md bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              onClick={() => setMobileOpen(false)}
            >
              Try for free
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}