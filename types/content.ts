// FAQ & Content Types
// Types for FAQ, help content, and informational data

export interface FAQItem {
  question: string
  answer: string
  category?: 'umum' | 'teknis' | 'pembayaran' | 'layanan'
}

export type FAQCategory = 'umum' | 'teknis' | 'pembayaran' | 'layanan'

export interface HelpArticle {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  author: string
  views: number
}

export interface SupportTicket {
  id: string
  userId: string
  subject: string
  message: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  createdAt: Date
  updatedAt: Date
  assignedTo?: string
}

export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'
