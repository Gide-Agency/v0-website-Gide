import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="block">
          <Image
            src="/images/gide-logo.png"
            alt="Gide"
            width={64}
            height={22}
            className="h-auto w-auto object-contain"
          />
        </a>
        <p className="text-xs text-muted-foreground">
          {"© "}{new Date().getFullYear()} Gide. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
