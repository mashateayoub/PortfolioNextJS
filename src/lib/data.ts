import enData from '@/data/portfolio.en.json'
import frData from '@/data/portfolio.fr.json'
import arData from '@/data/portfolio.ar.json'

export function getPortfolioData(language: 'en' | 'fr' | 'ar' = 'en') {
  switch (language) {
    case 'fr':
      return frData
    case 'ar':
      return arData
    default:
      return enData
  }
} 