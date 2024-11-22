'use client'

import { motion } from 'framer-motion'

export function JavaLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative font-mono font-bold text-lg cursor-pointer"
    >
      <span className="text-primary">{`{ `}</span>
      <span className="text-foreground">MASHATE</span>
      <span className="text-primary">{` }`}</span>
    </motion.div>
  )
} 