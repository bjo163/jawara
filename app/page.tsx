"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CoverageSection } from "@/components/coverage-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "process",
        "testimonials",
        "faq",
        "coverage",
        "map",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <CoverageSection />
        <MapSection />
      </main>

      <Footer />
      
      {/* Live Chat Widget */}
      <LiveChatWidget />
      
      {/* Subscription Widget - Quick Access */}
      <SubscriptionWidget />
    </div>
  )
}
