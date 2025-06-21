# Halaman Berlangganan Jawara-Net

Halaman berlangganan yang komprehensif dengan semua fitur subscription yang telah dipindahkan dari widget ke halaman dedicated.

## URL Akses
- **Halaman Berlangganan**: `/berlangganan`
- **Live URL**: `http://localhost:3000/berlangganan`

## Fitur Halaman Berlangganan

### 🗺️ Location & Coverage Check
- **GPS Detection**: Auto-detect lokasi user menggunakan browser geolocation
- **Coverage Calculation**: Hitung jarak ke kantor Jawara-Net (Bekasi)
- **Coverage Status**: 
  - ✅ **Ter-cover**: Jarak ≤ 10km dari kantor
  - ❌ **Belum ter-cover**: Jarak > 10km dari kantor
- **Manual Input**: Opsi input alamat manual jika GPS gagal

### 📦 Package Selection
Menampilkan semua paket internet tersedia:

1. **Paket Pemula** - 20 Mbps - Rp 150.000/bulan
2. **Paket Gaming Pro** - 50 Mbps - Rp 275.000/bulan  
3. **Paket Keluarga** - 100 Mbps - Rp 450.000/bulan
4. **Paket Bisnis** - 200 Mbps - Rp 750.000/bulan

### 📝 Subscription Form
Formulir lengkap untuk berlangganan:
- **Nama Lengkap** (required)
- **Nomor HP/WhatsApp** (required)
- **Email** (optional)
- **Alamat Lengkap** (required)
- **Catatan Tambahan** (optional)
- **Auto-fill Location**: Otomatis isi koordinat GPS jika tersedia

### 📱 WhatsApp Integration
- **Auto-generated Message**: Pesan WhatsApp otomatis dengan semua detail
- **Package Info**: Include info paket yang dipilih
- **Location Data**: Include koordinat GPS dan status coverage
- **Direct Send**: Langsung buka WhatsApp dengan pesan siap kirim

## Navigation Integration

### 🧭 Navbar
- **Menu "Berlangganan"** dengan icon 🗡️
- **Posisi**: Setelah "Testimoni", sebelum "Speed Test"
- **Type**: Link navigation (bukan scroll)

### 🦶 Footer
- **Link Berlangganan** di bagian Quick Links
- **Icon**: 🗡️ dengan text "Berlangganan"

### 🏠 Homepage Integration
- **Hero Section**: Tombol "👑 Berlangganan Sekarang"
- **Package Cards**: Tombol "🗡️ Berlangganan Sekarang" 
- **Subscription Widget**: Quick access button di kiri bawah

## Technical Implementation

### 🎯 Core Features
- **Geolocation API**: Browser native GPS detection
- **Haversine Formula**: Accurate distance calculation
- **Form Validation**: Required field validation
- **Responsive Design**: Mobile-first responsive layout
- **Error Handling**: Graceful error handling untuk GPS dan form

### 🔧 State Management
- **Location State**: GPS coordinates dan status
- **Coverage State**: Checking, covered, not-covered
- **Form State**: Form data management
- **UI State**: Form visibility, loading states

### 📊 User Experience
- **Progressive Disclosure**: Show form setelah coverage check
- **Auto-fill**: Otomatis isi koordinat di form alamat
- **Visual Feedback**: Loading indicators, success/error states
- **Clear CTAs**: Prominent call-to-action buttons

## Integration Points

### 🔗 From Homepage
1. **Navbar Menu**: Direct link ke /berlangganan
2. **Hero CTA**: "Berlangganan Sekarang" button
3. **Package Cards**: "Berlangganan Sekarang" pada setiap paket
4. **Footer Link**: Quick access di footer
5. **Subscription Widget**: Floating button di kiri bawah

### 🔗 To External Services
1. **WhatsApp**: Auto-generated message dengan semua detail
2. **Maps**: Koordinat GPS untuk verifikasi lokasi
3. **Contact**: Fallback ke contact form jika diperlukan

## Business Logic

### 📍 Coverage Logic
```typescript
const jawaraNetOffice = {
  name: "Kantor Jawara-Net",
  lat: -6.1810747,
  lng: 107.0654949,
  address: "R398+H5H Srimukti, Bekasi Regency, West Java",
  coverageRadius: 10 // 10km radius
}
```

### 💰 Package Pricing
- **Paket Pemula**: Rp 150.000 (Entry level)
- **Paket Gaming Pro**: Rp 275.000 (Gaming focused)
- **Paket Keluarga**: Rp 450.000 (Family plan)
- **Paket Bisnis**: Rp 750.000 (Business plan)

### 📞 Contact Integration
- **Primary**: WhatsApp +62 812-9529-5734
- **Secondary**: Phone call support
- **Tertiary**: Contact form fallback

## Future Enhancements

1. **Payment Integration**: Online payment gateway
2. **Installation Scheduling**: Calendar booking system
3. **Document Upload**: KTP/NPWP upload untuk bisnis
4. **Real-time Chat**: Live chat integration
5. **Coverage Map**: Interactive coverage map
6. **Package Comparison**: Side-by-side comparison tool
