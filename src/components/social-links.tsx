'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPortfolioData } from "@/lib/data";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function SocialLinks() {
  const { language, direction } = useLanguage()
  const data = getPortfolioData(language)

  return (
    <div className={`fixed ${direction === 'rtl' ? 'left-4' : 'right-4'} bottom-1/2 translate-y-1/2 flex flex-col gap-2 z-50`}>
      <Button
        variant="outline"
        size="icon"
        className="hover:scale-110 transition-transform"
        asChild
      >
        <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hover:scale-110 transition-transform"
        asChild
      >
        <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hover:scale-110 transition-transform"
        asChild
      >
        <a href={data.socialLinks.email}>
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hover:scale-110 transition-transform"
        asChild
      >
        <a href={data.socialLinks.phone}>
          <Phone className="h-4 w-4" />
          <span className="sr-only">Phone</span>
        </a>
      </Button>
    </div>
  )
} 