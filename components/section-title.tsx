"use client"

interface SectionTitleProps {
  title: string
  subtitle: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className="professional-bubble inline-block mb-6">
        <h2 className="cartoon-title text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">{title}</h2>
      </div>
      <p className="cartoon-text text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-semibold">
        {subtitle}
      </p>
    </div>
  )
}
