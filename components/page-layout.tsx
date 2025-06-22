'use client'

import { ReactNode } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LiveChatWidget } from '@/components/live-chat-widget'
import { SubscriptionWidget } from '@/components/subscription-widget-fixed'
import { PageHeader } from '@/components/breadcrumb'

interface PageLayoutProps {
  children: ReactNode
  showNavbar?: boolean
  showFooter?: boolean
  showWidgets?: boolean
  showPageHeader?: boolean
  pageHeaderProps?: {
    title?: string
    showBreadcrumb?: boolean
    showBackButton?: boolean
  }
  className?: string
}

export function PageLayout({
  children,
  showNavbar = true,
  showFooter = true,
  showWidgets = true,
  showPageHeader = false,
  pageHeaderProps,
  className = '',
}: PageLayoutProps) {
  return (
    <div
      className={`min-h-screen bg-slate-950 text-white overflow-x-hidden ${className}`}
    >
      {showNavbar && <Navbar activeSection="" />}

      <main className={showNavbar ? 'pt-24' : ''}>
        {showPageHeader && (
          <PageHeader
            title={pageHeaderProps?.title}
            showBreadcrumb={pageHeaderProps?.showBreadcrumb}
            showBackButton={pageHeaderProps?.showBackButton}
          />
        )}
        {children}
      </main>

      {showFooter && <Footer />}

      {showWidgets && (
        <>
          <LiveChatWidget />
          <SubscriptionWidget />
        </>
      )}
    </div>
  )
}

interface StandardPageProps {
  children: ReactNode
  title?: string
  showBreadcrumb?: boolean
  showBackButton?: boolean
  className?: string
}

// Layout khusus untuk halaman standard dengan navbar, footer, widgets, dan page header
export function StandardPageLayout({
  children,
  title,
  showBreadcrumb = true,
  showBackButton = true,
  className = '',
}: StandardPageProps) {
  return (
    <PageLayout
      showPageHeader={true}
      pageHeaderProps={{
        title,
        showBreadcrumb,
        showBackButton,
      }}
      className={className}
    >
      {children}
    </PageLayout>
  )
}

// Layout khusus untuk halaman dengan header custom (seperti berlangganan, speedtest, contact)
export function CustomHeaderPageLayout({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <PageLayout showNavbar={false} showPageHeader={false} className={className}>
      {children}
    </PageLayout>
  )
}
