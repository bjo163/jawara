// Data kontak Jawara-Net - Centralized Contact Data
import type { ContactInfo, OfficeLocation } from '@/types'

export const contactInfo: ContactInfo[] = [
  {
    id: 'phone',
    type: 'phone',
    icon: '📞',
    title: 'Telepon',
    value: '+62 812-9529-5734',
    description: 'Layanan telepon 24 jam',
    color: 'blue',
    href: 'tel:+6281295295734',
    isClickable: true,
  },
  {
    id: 'email',
    type: 'email',
    icon: '✉️',
    title: 'Email',
    value: 'info@jawara-net.com',
    description: 'Untuk pertanyaan detail & komplain',
    color: 'orange',
    href: 'mailto:info@jawara-net.com',
    isClickable: true,
  },
  {
    id: 'address',
    type: 'address',
    icon: '📍',
    title: 'Kantor Pusat',
    value: 'R398+H5H Srimukti',
    secondary: 'Bekasi Regency, West Java',
    description: 'Buka Senin-Sabtu, 08:00-17:00',
    color: 'purple',
    isClickable: false,
  },
  {
    id: 'hours',
    type: 'hours',
    icon: '🕒',
    title: 'Jam Operasional',
    value: 'Customer Service: 24/7',
    secondary: 'Technical Support: 24/7',
    description: 'Kantor: Senin-Sabtu 08:00-17:00',
    color: 'yellow',
    isClickable: false,
  },
]

export const officeLocation: OfficeLocation = {
  name: 'Kantor Jawara-Net',
  lat: -6.1810747,
  lng: 107.0654949,
  address: 'R398+H5H Srimukti, Bekasi Regency, West Java',
  coverageRadius: 10, // 10km radius
  hours: [
    'Customer Service: 24/7',
    'Technical Support: 24/7',
    'Kantor: Senin-Sabtu 08:00-17:00',
  ],
}

export const quickActions = [
  {
    id: 'phone-action',
    title: 'Telepon Sekarang',
    href: 'tel:+6281295295734',
    color: 'blue',
    icon: '📞',
  },
]

// Helper functions
export const getContactByType = (type: string): ContactInfo | undefined => {
  return contactInfo.find(contact => contact.type === type)
}

export const getContactById = (id: string): ContactInfo | undefined => {
  return contactInfo.find(contact => contact.id === id)
}

export const getClickableContacts = (): ContactInfo[] => {
  return contactInfo.filter(contact => contact.isClickable)
}
