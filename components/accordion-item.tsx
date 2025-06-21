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
    <div className="bg-slate-800/50 rounded-xl border border-gray-700 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-orange-500 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
