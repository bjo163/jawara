// Package & Product Types
// Types for internet packages, products, and pricing

export interface Package {
  id: string
  name: string
  icon: string
  character: string
  speed: string
  uploadSpeed: string
  quota: string
  price: string
  originalPrice?: string
  priceNumeric: number
  category: 'rumah' | 'bisnis'
  features: string[]
  popular?: boolean
  color: 'orange' | 'blue' | 'green' | 'purple'
  description: string
}

export type PackageCategory = 'rumah' | 'bisnis'
export type PackageColor = 'orange' | 'blue' | 'green' | 'purple'

export interface PackageFilter {
  category?: PackageCategory
  priceRange?: {
    min: number
    max: number
  }
  speedRange?: {
    min: number
    max: number
  }
}
