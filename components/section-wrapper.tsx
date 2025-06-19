"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "primary" | "secondary"
}

export function SectionWrapper({ children, className = "", id, background = "primary" }: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const bgClass = background === "secondary" ? "jawara-bg-secondary" : "jawara-bg-primary"

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`jawara-section ${bgClass} jawara-bg-pattern ${className} ${isVisible ? "animate-in" : ""}`}
    >
      {/* Background Elements */}
      <div className="jawara-bg-elements">
        <div className="jawara-floating-element text-6xl">🇮🇩</div>
        <div className="jawara-floating-element text-4xl">⚔️</div>
        <div className="jawara-floating-element text-5xl">🏛️</div>
        <div className="jawara-floating-element text-3xl">🦅</div>
        <div className="jawara-floating-element text-4xl">🛡️</div>
      </div>

      <div className="jawara-container relative z-10">{children}</div>
    </section>
  )
}
