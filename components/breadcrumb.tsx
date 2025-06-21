"use client"

import { Home, ChevronRight } from "lucide-react"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      {/* Home Link */}
      <Link 
        href="/" 
        className="flex items-center space-x-1 text-gray-400 hover:text-orange-400 transition-colors"
      >
        <Home className="h-4 w-4" />
        <span>Beranda</span>
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-3 w-3 text-gray-500" />
          {item.href && !item.active ? (
            <Link 
              href={item.href}
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className={item.active ? "text-orange-400 font-semibold" : "text-gray-300"}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
}

export function BackButton({ href = "/", label = "Kembali", className = "" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors ${className}`}
    >
      <Home className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  )
}

interface PageHeaderProps {
  title?: string
  breadcrumbItems?: BreadcrumbItem[]
  backButton?: {
    href?: string
    label?: string
  }
  className?: string
}

export function PageHeader({ 
  title, 
  breadcrumbItems = [], 
  backButton = { href: "/", label: "Kembali" },
  className = ""
}: PageHeaderProps) {
  return (
    <section className={`py-4 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Back Button */}
          <BackButton href={backButton.href} label={backButton.label} />
        </div>
        
        {/* Page Title */}
        {title && (
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h1>
        )}
      </div>
    </section>
  )
}
