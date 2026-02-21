import Image from "next/image"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <a href="#" className="block">
              <Image
                src="/images/gide-logo.png"
                alt="Gide"
                width={64}
                height={22}
                className="h-auto w-auto object-contain"
              />
            </a>
            <div className="flex items-center gap-3">
              <a href="mailto:support@gideagency.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                support@gideagency.com
              </a>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/company/gide-agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://x.com/gideagency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-xs text-muted-foreground">
              {"© "}{new Date().getFullYear()} Gide Oy. All rights reserved.
            </p>
            <a href="/terms-privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms & Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
