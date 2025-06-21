"use client"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showSubtext?: boolean
  className?: string
}

export function Logo({ size = "md", showSubtext = true, className = "" }: LogoProps) {
  const sizes = {
    sm: {
      container: "space-x-2",
      crown: "text-2xl",
      pulse: "w-3 h-3",
      text: "text-lg",
      subtext: "text-xs"
    },
    md: {
      container: "space-x-3",
      crown: "text-3xl",
      pulse: "w-3 h-3",
      text: "text-xl md:text-2xl",
      subtext: "text-xs"
    },
    lg: {
      container: "space-x-3",
      crown: "text-4xl",
      pulse: "w-4 h-4",
      text: "text-2xl md:text-3xl",
      subtext: "text-sm"
    }
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <div className="relative">
        <div className={`${currentSize.crown}`}>👑</div>
        <div className={`absolute -top-1 -right-1 ${currentSize.pulse} bg-red-500 rounded-full animate-pulse`}></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`cartoon-title ${currentSize.text} text-red-500 font-black`}>JAWARA</span>
          <span className={`cartoon-title ${currentSize.text} text-yellow-500 font-black`}>NET</span>
        </div>
        {showSubtext && (
          <span className={`cartoon-text ${currentSize.subtext} text-gray-400 font-bold ${size === 'sm' ? 'hidden' : 'hidden md:block'}`}>
            INTERNET NUSANTARA
          </span>
        )}
      </div>
    </div>
  )
}
