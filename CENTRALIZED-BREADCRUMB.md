# Centralized Breadcrumb System Documentation

## Deskripsi
Sistem breadcrumb yang tersentralisasi dan konsisten untuk semua halaman dalam aplikasi Jawara-Net. Menggunakan konfigurasi terpusat untuk memastikan consistency dan kemudahan maintenance.

## Komponen Utama

### 1. Breadcrumb Configuration (`data/breadcrumb-config.ts`)
File konfigurasi terpusat yang mendefinisikan:
- **Page configs** - Konfigurasi untuk setiap halaman
- **Breadcrumb items** - Path navigation untuk setiap halaman
- **Back button configs** - Pengaturan tombol back
- **Helper functions** - Utility functions untuk mendapatkan config

```typescript
interface PageConfig {
  title: string
  breadcrumbs: BreadcrumbItem[]
  backButton?: {
    href: string
    label: string
  }
  description?: string
}

const pageConfigs: Record<string, PageConfig> = {
  '/paket': {
    title: 'Paket Internet',
    breadcrumbs: [
      { label: 'Paket Internet', active: true, icon: '💎' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    }
  }
  // ... other pages
}
```

### 2. Smart Breadcrumb Components (`components/breadcrumb.tsx`)

#### a. `Breadcrumb` Component
- **Auto-detection** - Menggunakan `usePathname()` untuk deteksi halaman saat ini
- **Flexible props** - Bisa override config dengan props manual
- **Icon support** - Mendukung emoji/icon untuk setiap breadcrumb item
- **Hover effects** - Interactive UI dengan smooth transitions

#### b. `BackButton` Component  
- **Auto-configuration** - Otomatis menggunakan config dari breadcrumb-config
- **Variant support** - `default` (dengan background) dan `minimal` (tanpa background)
- **Smart defaults** - Fallback ke homepage jika tidak ada config

#### c. `PageHeader` Component
- **All-in-one** - Breadcrumb + Back Button + Title dalam satu komponen
- **Auto-configuration** - Menggunakan `usePathname()` untuk auto-setup
- **Customizable** - Bisa override semua props jika diperlukan

### 3. Page Layout System (`components/page-layout.tsx`)

#### a. `PageLayout` Component
- **Base layout** - Template dasar untuk semua halaman
- **Configurable** - Bisa show/hide navbar, footer, widgets, page header
- **Flexible** - Mendukung berbagai tipe halaman

#### b. `StandardPageLayout` Component
- **Pre-configured** - Layout standard dengan navbar, footer, widgets, page header
- **Auto-breadcrumb** - Otomatis menampilkan breadcrumb sesuai path
- **Consistent** - Memastikan consistency di semua halaman standard

#### c. `CustomHeaderPageLayout` Component  
- **Custom header** - Untuk halaman dengan header khusus (berlangganan, speedtest, contact)
- **No navbar** - Tidak menampilkan navbar default
- **Flexible** - Memberikan kontrol penuh atas header

## Implementation

### 1. Halaman `/paket` (Standard Layout)
```tsx
import { StandardPageLayout } from "@/components/page-layout"

export default function PaketPage() {
  return (
    <StandardPageLayout>
      {/* Content here - breadcrumb otomatis */}
    </StandardPageLayout>
  )
}
```

### 2. Halaman dengan Custom Header
```tsx
import { CustomHeaderPageLayout, Breadcrumb, BackButton } from "@/components/..."

export default function CustomPage() {
  return (
    <CustomHeaderPageLayout>
      <header>
        <BackButton variant="minimal" />
        <Breadcrumb showHome={false} />
        <h1>Custom Title</h1>
      </header>
      {/* Content here */}
    </CustomHeaderPageLayout>
  )
}
```

## Pages Implementation Status

### ✅ `/paket` 
- **Layout**: StandardPageLayout (auto breadcrumb)
- **Breadcrumb**: "Beranda > Paket Internet 💎"
- **Back Button**: "Kembali ke Beranda"

### ✅ `/berlangganan`
- **Layout**: CustomHeaderPageLayout
- **Breadcrumb**: Manual dengan `showHome={false}`
- **Back Button**: Minimal variant

### ✅ `/speedtest`  
- **Layout**: CustomHeaderPageLayout
- **Breadcrumb**: Manual dengan `showHome={false}`
- **Back Button**: Minimal variant

### ✅ `/contact`
- **Layout**: CustomHeaderPageLayout  
- **Breadcrumb**: Manual dengan `showHome={false}`
- **Back Button**: Minimal variant

## Configuration Management

### Adding New Pages
```typescript
// In data/breadcrumb-config.ts
'/new-page': {
  title: 'New Page',
  breadcrumbs: [
    { label: 'New Page', active: true, icon: '🆕' }
  ],
  backButton: {
    href: '/',
    label: 'Kembali ke Beranda'  
  },
  description: 'Description for new page'
}
```

### Nested Breadcrumbs
```typescript
'/paket/detail': {
  title: 'Detail Paket',
  breadcrumbs: [
    { label: 'Paket', href: '/paket', icon: '💎' },
    { label: 'Detail Paket', active: true }
  ],
  backButton: {
    href: '/paket',
    label: 'Kembali ke Paket'
  }
}
```

## Benefits

### ✅ Centralized Management
1. **Single source of truth** - Semua config breadcrumb di satu tempat
2. **Easy maintenance** - Update config langsung apply ke semua halaman
3. **Consistency** - Tidak ada perbedaan styling antar halaman
4. **Type safety** - TypeScript interfaces untuk semua config

### ✅ Developer Experience
1. **Auto-configuration** - Minimal setup untuk halaman baru
2. **Override flexibility** - Bisa override config jika diperlukan
3. **Layout templates** - Pre-built layout untuk berbagai kebutuhan
4. **Reusable components** - Component yang bisa digunakan berulang

### ✅ User Experience  
1. **Consistent navigation** - User experience yang sama di semua halaman
2. **Clear hierarchy** - User selalu tahu posisi mereka di website
3. **Easy navigation** - Breadcrumb dan back button yang intuitif
4. **Mobile friendly** - Responsive design untuk semua ukuran layar

## File Structure

```
data/
└── breadcrumb-config.ts (Centralized configuration)

components/
├── breadcrumb.tsx (Smart breadcrumb components)
└── page-layout.tsx (Layout templates)

app/
├── paket/
│   └── page.tsx (StandardPageLayout)
├── berlangganan/
│   └── page.tsx (CustomHeaderPageLayout)
├── speedtest/
│   └── page.tsx (CustomHeaderPageLayout)
└── contact/
    └── page.tsx (CustomHeaderPageLayout)
```

## Implementation Status
- ✅ Centralized breadcrumb configuration
- ✅ Smart breadcrumb components with auto-detection
- ✅ Layout templates for different page types
- ✅ All pages updated with consistent breadcrumb
- ✅ Type-safe configuration system
- ✅ Mobile responsive breadcrumb design
- ✅ Icon support for breadcrumb items

**Status: COMPLETED** - Sistem breadcrumb tersentralisasi berhasil diimplementasikan dengan configuration management yang robust dan consistent UI di semua halaman.
