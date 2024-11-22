'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/LanguageContext"
import { Download } from "lucide-react"
import { Button } from "./ui/button"

type DownloadResumeDropdownProps = {
  children: React.ReactNode
}

export const DownloadResumeDropdown = ({ }: DownloadResumeDropdownProps) => {
  useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download Resume</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex p-0">
        <DropdownMenuItem asChild className="px-2 py-1.5 cursor-pointer">
          <a href="/resume/resume_en.pdf" target="_blank" rel="noopener noreferrer">
            <span className="text-lg">🇺🇸</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-2 py-1.5 cursor-pointer">
          <a href="/resume/resume_fr.pdf" target="_blank" rel="noopener noreferrer">
            <span className="text-lg">🇫🇷</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 