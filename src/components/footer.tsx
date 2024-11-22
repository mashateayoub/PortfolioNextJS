'use client'

import { Heart } from "lucide-react"
import { JavaLogo } from "./java-logo"

export function Footer() {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-row justify-between mx-auto px-4 py-4">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="flex items-center gap-2"
            onClick={handleLogoClick}
          >
            <JavaLogo />
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Built with <Heart className="inline-block h-4 w-4 text-red-500 animate-pulse" /> using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Next.js
            </a>
            {", "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              shadcn/ui
            </a>
            {", "}
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              v0
            </a>
            {" & "}
            <a
              href="https://cursor.sh"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Cursor
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}