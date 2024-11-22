'use client'

import { Heart } from "lucide-react"
import Link from "next/link"
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
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={handleLogoClick}
          >
            <JavaLogo />
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Built with <Heart className="inline-block h-4 w-4 text-red-500 animate-pulse" /> using{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Next.js
            </Link>
            {", "}
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              shadcn/ui
            </Link>
            {", "}
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              v0
            </Link>
            {" & "}
            <Link
              href="https://cursor.sh"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Cursor
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}