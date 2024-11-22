'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const nextLanguage = {
    en: 'fr',
    fr: 'ar',
    ar: 'en'
  } as const

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(nextLanguage[language])}
    >
      {language.toUpperCase()}
    </Button>
  )
} 