"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  question: string
  answer: string
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mega-card overflow-hidden mega-hover">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="mega-text text-xl font-black text-white pr-4">{question}</h3>
        <div
          className={`w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""} mega-glow`}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </button>

      {isOpen && (
        <div className="px-8 pb-6">
          <div className="border-t border-orange-500/20 pt-6">
            <p className="mega-text text-gray-300 leading-relaxed text-lg">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
