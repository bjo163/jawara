"use client"

import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { Breadcrumb, BackButton } from "@/components/breadcrumb"
import { getPageConfig } from "@/data/breadcrumb-config"

interface PageHeaderProps {
  showLogo?: boolean
  showBackButton?: boolean
  showBreadcrumb?: boolean
  customTitle?: string
  className?: string
}

export function PageHeader({
  showLogo = true,
  showBackButton = true,
  showBreadcrumb = true,
  customTitle,
  className = ""
}: PageHeaderProps) {
  const pathname = usePathname()
  const pageConfig = getPageConfig(pathname)
  
  // Get icon from breadcrumb config
  const icon = pageConfig.breadcrumbs.find(b => b.active)?.icon || ''

  return (
    <header className={`border-b border-gray-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && <BackButton variant="minimal" />}
          {showLogo && <Logo size="sm" showSubtext={false} />}
        </div>
        <div className="flex items-center space-x-4">
          {showBreadcrumb && <Breadcrumb showHome={false} />}
          {/* Only show icon, breadcrumb already has the title */}
          {icon && !showBreadcrumb && (
            <div className="text-2xl" aria-label={pageConfig.title}>
              {icon}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

interface ContactPageHeaderProps {
  showLogo?: boolean
  showBackButton?: boolean
  showBreadcrumb?: boolean
  customTitle?: string
  className?: string
}

export function ContactPageHeader({
  showLogo = true,
  showBackButton = true,
  showBreadcrumb = true,
  customTitle,
  className = ""
}: ContactPageHeaderProps) {
  const pathname = usePathname()
  const pageConfig = getPageConfig(pathname)
  
  // Get icon from breadcrumb config
  const icon = pageConfig.breadcrumbs.find(b => b.active)?.icon || ''

  return (
    <div className={`bg-slate-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && <BackButton variant="minimal" />}
            {showLogo && <Logo />}
          </div>
          <div className="flex items-center space-x-4">
            {showBreadcrumb && <Breadcrumb showHome={false} />}
            {/* Only show icon, breadcrumb already has the title */}
            {icon && !showBreadcrumb && (
              <div className="text-2xl" aria-label={pageConfig.title}>
                {icon}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
