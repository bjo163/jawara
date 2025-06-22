// Company type for backend response
export interface Company {
  id: string | number
  name: string
  address?: string
  phone?: string
  email?: string
  logoUrl?: string
  createdAt?: Date
  updatedAt?: Date
  partner_id?: number
  company_registry?: string
  street?: string
  city?: string
  state?: string
  country?: string
  vat?: string
  website?: string
}
