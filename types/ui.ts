// UI & Component Types
// Types for UI components, forms, and interface elements

import * as React from 'react'
import type { LucideIcon } from 'lucide-react'

// Navigation & Breadcrumb Types
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
  active?: boolean
}

export interface PageConfig {
  title: string
  breadcrumbs: BreadcrumbItem[]
  backButton?: {
    href: string
    label: string
  }
  description?: string
}

// Component Props Types
export interface TestimonialCardProps {
  name: string
  role: string
  location: string
  image: string
  rating: number
  comment: string
  packageName: string
}

export interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  color?: string
}

export interface ProductCardProps {
  title: string
  description: string
  image: string
  price: string
  features: string[]
}

export interface SectionTitleProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: React.ReactNode
}

export interface ContactPageHeaderProps {
  title: string
  subtitle?: string
  description?: string
}

export interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  showNavbar?: boolean
  showFooter?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export interface StandardPageProps {
  title: string
  description?: string
  children: React.ReactNode
}

// Timeline Component Types
export interface TimelineStep {
  icon: LucideIcon
  title: string
  description: string
  status?: 'completed' | 'current' | 'upcoming'
  details: string[]
  color: 'orange' | 'blue' | 'green' | 'purple'
}

export interface TechTimelineProps {
  steps: TimelineStep[]
  currentStep?: number
}
