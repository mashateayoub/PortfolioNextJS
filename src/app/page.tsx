'use client'

import { DownloadResumeDropdown } from "@/components/download-resume-dropdown"
import { JavaLogo } from "@/components/java-logo"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/LanguageContext"
import { getPortfolioData } from '@/lib/data'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Download, Mail, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import { useEffect, useState } from 'react'



export default function Portfolio() {
  const { language } = useLanguage()
  const data = getPortfolioData(language)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [activeTab, setActiveTab] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center ">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={handleLogoClick}
            >
              <JavaLogo />
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {["skills", "experience", "projects", "contact"].map((tab) => (
                <Link 
                  key={tab}
                  href={`#${tab}`}
                  className={`transition-colors hover:text-primary ${activeTab === tab ? "text-primary" : "text-muted-foreground"}`}
                >
                  {data.ui.nav[tab as keyof typeof data.ui.nav]}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <DownloadResumeDropdown>
                {data.ui.buttons.downloadResume}
              </DownloadResumeDropdown>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col space-y-4">
                {["skills", "experience", "projects", "contact"].map((tab) => (
                  <Link
                    key={tab}
                    href={`#${tab}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors hover:text-primary ${activeTab === tab ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {data.ui.nav[tab as keyof typeof data.ui.nav]}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                <LanguageToggle />
                <ThemeToggle />
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="mr-2 h-4 w-4" /> {data.ui.buttons.downloadResume}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="container py-6 relative backdrop-blur-[2px]">
        <section id="about" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-48 h-56 md:w-64 md:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-3xl -z-10 blur-2xl" />
                <div className="w-full h-full relative rounded-3xl border border-border/50 overflow-hidden">
                  <Image
                    src={data.personalInfo.image}
                    alt="Mashate Ayoub"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </div>

              <div className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">{data.personalInfo.name}</h1>
                    <h2 className="text-2xl text-muted-foreground">{data.personalInfo.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    {data.personalInfo.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java 8/11</Badge>
                    <Badge variant="secondary">Primefaces</Badge>
                    <Badge variant="secondary">JSF</Badge>
                    <Badge variant="secondary">Hibernate</Badge>
                    <Badge variant="secondary">Spring</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>mashateayoub@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>(+212)655-699797</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{data.ui.sections.skills}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <div className="mt-1 h-2 w-full rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{data.ui.sections.experienceEducation}</h2>
            <div className="space-y-6">
              {data.experience?.map((exp) => (
                <Card key={exp.title}>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}, {exp.location} | {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{data.ui.sections.projects}</h2>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{data.ui.sections.contact}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{data.ui.buttons.getInTouch}</CardTitle>
                <CardDescription>{data.ui.contact.formDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name">{data.ui.contact.name}</label>
                      <Input id="name" placeholder={data.ui.contact.namePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email">{data.ui.contact.email}</label>
                      <Input id="email" placeholder={data.ui.contact.emailPlaceholder} type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message">{data.ui.contact.message}</label>
                    <Textarea id="message" placeholder={data.ui.contact.messagePlaceholder} />
                  </div>
                  <Button type="submit">{data.ui.buttons.sendMessage}</Button>
                </form>
              </CardContent>
            </Card>
          
          </motion.div>
        </section>
      </main>
    </div>
  )
}