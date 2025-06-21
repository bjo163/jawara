# HALAMAN KONTAK TERPUSAT - CENTRALIZED CONTACT DATA

## Overview
Halaman kontak telah dipindahkan ke route terpisah `/contact` dengan data terpusat dan fitur deteksi lokasi otomatis untuk memberikan pengalaman yang lebih baik kepada user.

## 📁 **File Data Terpusat**
**Location:** `/data/contact.ts`

### Contact Data Structure
```typescript
interface ContactInfo {
  id: string                          // Unique identifier
  type: 'whatsapp' | 'phone' | 'email' | 'address' | 'hours'
  icon: string                        // Emoji icon
  title: string                       // Display title
  value: string                       // Main value (phone, email, etc)
  secondary?: string                  // Secondary info (optional)
  description: string                 // Description text
  color: 'green' | 'blue' | 'orange' | 'purple' | 'yellow'
  href?: string                       // Clickable link (optional)
  isClickable: boolean               // Whether item is clickable
}
```

## 🌍 **Fitur Deteksi Lokasi**
- **Auto Location Detection**: Deteksi koordinat user secara otomatis
- **Coverage Calculation**: Hitung jarak ke kantor pusat (10km radius)
- **Smart Coverage Status**: 
  - ✅ **Covered**: Dalam radius 10km dari kantor
  - ❌ **Not Covered**: Di luar coverage area
  - 🔄 **Detecting**: Sedang mendeteksi lokasi
  - ⚠️ **Error**: Gagal mendeteksi lokasi

## 📞 **Data Kontak Terpusat**

### Contact Information
1. **WhatsApp Customer Service**
   - 📱 +62 812-9529-5734
   - Clickable dengan direct WhatsApp link
   - 24/7 customer support

2. **Telepon**
   - 📞 +62 812-9529-5734  
   - Direct call link
   - 24 jam layanan telepon

3. **Email**
   - ✉️ info@jawara-net.com
   - Direct mailto link
   - Untuk pertanyaan detail & komplain

4. **Alamat Kantor**
   - 📍 R398+H5H Srimukti, Bekasi Regency, West Java
   - Buka Senin-Sabtu, 08:00-17:00

5. **Jam Operasional**
   - 🕒 Customer Service: 24/7
   - Technical Support: 24/7
   - Kantor: Senin-Sabtu 08:00-17:00

## 🚀 **Quick Actions**
- **Chat WhatsApp**: Direct link dengan template message
- **Telepon Sekarang**: Direct call link
- **Chat dengan Template**: WhatsApp dengan pesan pre-filled

## 📱 **Implementasi Halaman**

### Routes & Components
- **`/contact`** - Halaman kontak lengkap dengan deteksi lokasi
- **~~Contact Section~~** - **DIHAPUS** dari homepage, diganti dengan link langsung ke `/contact`
- **Navbar** - Link ke `/contact`
- **Footer** - Link dan data kontak menggunakan data terpusat

### Perubahan Struktur
✅ **Section "Hubungi Kami" dihapus dari SPA** (homepage)  
✅ **Dedicated `/contact` page** untuk semua kebutuhan kontak  
✅ **Simplified navigation** - direct link dari navbar dan footer  
✅ **Cleaner homepage** - fokus pada content utama tanpa duplikasi  

### Helper Functions
```typescript
// Ambil kontak berdasarkan tipe
getContactByType(type: string): ContactInfo | undefined

// Ambil kontak berdasarkan ID
getContactById(id: string): ContactInfo | undefined

// Ambil semua kontak yang clickable
getClickableContacts(): ContactInfo[]

// Format link WhatsApp dengan template
formatContactForWhatsApp(): string
```

## 🔗 **Integrasi dengan Komponen Lain**

### ✅ Komponen yang Diperbarui:
1. **~~Contact Section~~** - **DIHAPUS** dari homepage (`/app/page.tsx`)
   - Section kontak tidak lagi ditampilkan di halaman utama
   - User langsung diarahkan ke halaman `/contact` yang lebih lengkap

2. **Navbar** (`/components/navbar.tsx`)
   - Link "Kontak" mengarah ke `/contact`

3. **Footer** (`/components/footer.tsx`)
   - Data kontak menggunakan helper functions
   - Link ke halaman kontak lengkap

4. **Halaman Contact** (`/app/contact/page.tsx`)
   - Deteksi lokasi otomatis
   - Coverage calculation 
   - Complete contact information
   - Contact form integration

## 🌟 **Keuntungan Sistem Terpusat**

✅ **Konsistensi Data** - Semua komponen menggunakan data yang sama  
✅ **Single Source of Truth** - Update sekali, berubah di mana-mana  
✅ **Enhanced UX** - Deteksi lokasi dan coverage check otomatis  
✅ **Mobile Friendly** - Direct links untuk WhatsApp dan telepon  
✅ **SEO Optimized** - Dedicated contact page dengan route terpisah  
✅ **Type Safety** - TypeScript interfaces untuk data validation  

## 🧪 **Testing & Validation**
- ✅ Location detection menggunakan HTML5 Geolocation API
- ✅ Coverage calculation dengan Haversine formula
- ✅ Responsive design untuk mobile dan desktop
- ✅ WhatsApp integration dengan template message
- ✅ Direct call links untuk mobile devices

## 📍 **Coverage Area**
**Kantor Pusat**: R398+H5H Srimukti, Bekasi Regency, West Java  
**Koordinat**: -6.1810747, 107.0654949  
**Radius Coverage**: 10km dari kantor pusat  

---
**Last Updated:** June 21, 2025  
**Status:** ✅ COMPLETED - Contact page centralized with location detection

## 🗑️ **PERUBAHAN TERBARU - Section Contact Dihapus**

### ✅ **Yang Baru Diselesaikan (21 Juni 2025):**

**PENGHAPUSAN SECTION CONTACT DARI HOMEPAGE:**
- ❌ **Section "Hubungi Kami" dihapus** dari halaman utama (SPA)
- ✅ **Homepage lebih clean** - fokus pada content utama
- ✅ **No duplication** - semua kontak terpusat di `/contact`
- ✅ **Simplified navigation** - direct link ke halaman kontak

**STRUKTUR BARU:**
```
Homepage (SPA):
├── Hero Section
├── About Section  
├── Services Section
├── Process Section
├── Packages Section
├── Testimonials Section
├── FAQ Section
├── Coverage Section (geo info)
├── Map Section
└── Footer (dengan link ke /contact)

Contact Page (/contact):
├── Location Detection
├── Coverage Calculator
├── Complete Contact Info
├── Contact Form
└── Quick Actions
```

**NAVIGASI:**
- **Navbar**: Link "Kontak" → `/contact` 
- **Footer**: Contact preview + link lengkap
- **Homepage**: Clean tanpa section kontak
