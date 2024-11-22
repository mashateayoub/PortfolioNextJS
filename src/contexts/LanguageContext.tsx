'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr' | 'ar'
type Direction = 'ltr' | 'rtl'

interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  setLanguage: () => {}
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [direction, setDirection] = useState<Direction>('ltr')

  useEffect(() => {
    document.documentElement.dir = 'ltr'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
      setDirection(savedLanguage === 'ar' ? 'rtl' : 'ltr')
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    } else {
      localStorage.setItem('language', 'en')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    setDirection(lang === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <LanguageContext.Provider value={{
      language,
      direction,
      setLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext) 