'use client'

import { Home, ChevronRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  getPageConfig,
  generateBreadcrumbs,
  getBackButtonConfig,
  getPageTitle,
} from '@/data/breadcrumb-config'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
  active?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export function Breadcrumb({
  items,
  className = '',
  showHome = true,
}: BreadcrumbProps) {
  const pathname = usePathname()
  const breadcrumbItems = items || generateBreadcrumbs(pathname)

  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Home Link */}
      {showHome && (
        <>
          <Link
            href="/"
            className="flex items-center space-x-1 text-gray-400 hover:text-orange-400 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Beranda</span>
          </Link>
          {breadcrumbItems.length > 0 && (
            <ChevronRight className="h-3 w-3 text-gray-500" />
          )}
        </>
      )}

      {/* Breadcrumb Items */}
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="h-3 w-3 text-gray-500" />}
          <div className="flex items-center space-x-1">
            {item.icon && <span className="text-xs">{item.icon}</span>}
            {item.href && !item.active ? (
              <Link
                href={item.href}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  item.active
                    ? 'text-orange-400 font-semibold'
                    : 'text-gray-300'
                }
              >
                {item.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </nav>
  )
}

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
  variant?: 'default' | 'minimal'
}

export function BackButton({
  href,
  label,
  className = '',
  variant = 'default',
}: BackButtonProps) {
  const pathname = usePathname()
  const backConfig = getBackButtonConfig(pathname)

  const finalHref = href || backConfig?.href || '/'
  const finalLabel = label || backConfig?.label || 'Kembali'

  if (variant === 'minimal') {
    return (
      <Link
        href={finalHref}
        className={`flex items-center space-x-2 text-gray-400 hover:text-white transition-colors ${className}`}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>{finalLabel}</span>
      </Link>
    )
  }

  return (
    <Link
      href={finalHref}
      className={`flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{finalLabel}</span>
    </Link>
  )
}

interface PageHeaderProps {
  title?: string
  breadcrumbItems?: BreadcrumbItem[]
  backButton?: {
    href?: string
    label?: string
    variant?: 'default' | 'minimal'
  }
  showBreadcrumb?: boolean
  showBackButton?: boolean
  className?: string
}

export function PageHeader({
  title,
  breadcrumbItems,
  backButton,
  showBreadcrumb = true,
  showBackButton = true,
  className = '',
}: PageHeaderProps) {
  const pathname = usePathname()
  const pageConfig = getPageConfig(pathname)
  const finalTitle = title || getPageTitle(pathname)

  return (
    <section className={`py-4 px-4 border-b border-gray-800/50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          {/* Breadcrumb */}
          {showBreadcrumb && <Breadcrumb items={breadcrumbItems} />}

          {/* Back Button */}
          {showBackButton && (
            <BackButton
              href={backButton?.href}
              label={backButton?.label}
              variant={backButton?.variant || 'default'}
            />
          )}
        </div>

        {/* Page Title */}
        {finalTitle && (
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {finalTitle}
          </h1>
        )}
      </div>
    </section>
  )
}

// Hook untuk mendapatkan breadcrumb data
export function useBreadcrumb() {
  const pathname = usePathname()
  const config = getPageConfig(pathname)

  return {
    breadcrumbs: generateBreadcrumbs(pathname),
    backButton: getBackButtonConfig(pathname),
    title: getPageTitle(pathname),
    description: config.description,
  }
}
