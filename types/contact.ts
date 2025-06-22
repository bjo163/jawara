// Contact & Location Types
// Types for contact information, office locations, and communication

export interface ContactInfo {
  id: string
  type: 'phone' | 'email' | 'address' | 'hours'
  icon: string
  title: string
  value: string
  secondary?: string
  description: string
  color: 'green' | 'blue' | 'orange' | 'purple' | 'yellow'
  href?: string
  isClickable: boolean
}

export interface OfficeLocation {
  name: string
  lat: number
  lng: number
  address: string
  coverageRadius: number
  hours: string[]
}

export interface CoverageArea {
  id: string
  name: string
  coordinates: {
    lat: number
    lng: number
  }
  radius: number
  status: 'active' | 'planned' | 'maintenance'
}

export type ContactType = 'phone' | 'email' | 'address' | 'hours'
export type ContactColor = 'green' | 'blue' | 'orange' | 'purple' | 'yellow'
export type CoverageStatus = 'active' | 'planned' | 'maintenance'

export interface ContactPageState {
  userLocation: { lat: number; lng: number } | null
  locationStatus: 'idle' | 'loading' | 'success' | 'error'
  distance: number
  nearestArea: string
  coverageStatus: 'checking' | 'covered' | 'not-covered' | null
}
