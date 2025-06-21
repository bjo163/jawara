# Jawara-Net Internal Speed Test

Fitur Real Speed Test telah diintegrasikan ke website Jawara-Net menggunakan server internal Next.js untuk memberikan pengukuran kecepatan yang akurat tanpa ketergantungan pada layanan eksternal.

## Fitur Speed Test

### URL
- Halaman Speed Test: `/speedtest`
- Dapat diakses melalui: `http://localhost:3000/speedtest`

### Fitur Utama
1. **Internal Download Speed Test** - Mengukur kecepatan download menggunakan file statis internal
2. **Internal Upload Speed Test** - Mengukur kecepatan upload ke API internal Next.js
3. **Internal Ping Test** - Mengukur latency ke server internal localhost
4. **Real Jitter Measurement** - Mengukur stabilitas koneksi berdasarkan variasi ping

### Metodologi Internal Testing

#### Ping Test
- **Internal Endpoint**: `/api/speedtest/ping`
- **Multiple Measurements**: 8 ping tests untuk akurasi
- **Local Server Timing**: Menggunakan performance.now() untuk precision timing
- **Jitter Calculation**: Berdasarkan variasi ping time ke server internal

#### Download Test
- **Static Files**: `/public/speedtest/test-*.bin` (100KB, 500KB, 1MB, 2MB)
- **Real HTTP Downloads**: Menggunakan fetch API dengan cache disabled
- **Internal Server**: Semua file disajikan dari Next.js server
- **Bandwidth Calculation**: Timing dan file size yang akurat dari localhost

#### Upload Test
- **Internal API**: `/api/speedtest/upload` Next.js route
- **Real Data Generation**: Membuat data random untuk upload
- **Progressive Sizes**: 50KB, 100KB, 200KB, 500KB
- **Local Processing**: Server menerima dan memproses data upload

### Server Infrastructure
- **API Routes**: Next.js API routes di `/app/api/speedtest/`
- **Static Files**: Test files di `/public/speedtest/`
- **Internal Processing**: Semua measurement dilakukan di localhost
- **No External Dependencies**: Tidak bergantung pada layanan eksternal

### Analisis Real-Time
- **Streaming HD (1080p)** - Minimum 5 Mbps download
- **Streaming 4K** - Minimum 25 Mbps download
- **Gaming Online** - Maximum 100ms ping untuk gameplay yang baik
- **Video Call HD** - Minimum 3 Mbps upload + max 150ms ping
- **Work From Home** - Minimum 10 Mbps download + 5 Mbps upload

### Akurasi dan Reliabilitas
- **Multiple Measurements**: Setiap test dilakukan beberapa kali
- **Outlier Filtering**: Menghilangkan hasil yang tidak normal
- **Real Network Conditions**: Menggunakan kondisi jaringan yang sesungguhnya
- **Error Handling**: Fallback mechanism jika server tidak tersedia

### Riwayat Test
- Menyimpan 10 hasil test terakhir di localStorage
- Menampilkan timestamp setiap test
- Data persisten antar sesi browser

### Integrasi Navigasi
- **Navbar**: Menu "Speed Test" dengan ikon ⚡
- **Footer**: Link di bagian "Bantuan"
- **Hero Section**: Tombol CTA "⚡ Speed Test"

### Teknologi Internal
- **Next.js 15** - Framework React dengan API routes
- **TypeScript** - Type safety untuk backend dan frontend
- **Static File Serving** - Public folder untuk test files
- **API Routes** - Internal endpoints untuk upload dan ping
- **Performance API** - Browser timing untuk akurasi tinggi

### Struktur File
```
/app/api/speedtest/
  ├── ping/route.ts       # Ping test endpoint
  ├── download/route.ts   # Dynamic download generator
  └── upload/route.ts     # Upload test processor

/public/speedtest/
  ├── test-100kb.bin     # 100KB test file
  ├── test-500kb.bin     # 500KB test file
  ├── test-1mb.bin       # 1MB test file
  └── test-2mb.bin       # 2MB test file
```

### Keuntungan Internal Server
- **Ping Rendah**: Latency minimal karena server lokal
- **Tidak Ada External Dependencies**: Tidak bergantung pada layanan luar
- **Konsisten**: Hasil stabil tanpa variasi dari server eksternal
- **Cepat**: Semua resource disajikan dari localhost
- **Offline Capable**: Bisa bekerja tanpa internet (dalam development)

### Call-to-Action
Setelah test selesai, terdapat CTA untuk:
- Melihat paket internet Jawara-Net
- Menghubungi customer service
- Link ke section contact dan packages

## Instalasi

Speed Test sudah terintegrasi dengan website utama. Tidak perlu instalasi terpisah.

## Cara Penggunaan

1. Buka website Jawara-Net
2. Klik menu "Speed Test" di navbar atau tombol di hero section
3. Klik "Mulai Test" untuk memulai pengujian
4. Tunggu hingga test selesai (sekitar 8-10 detik)
5. Lihat hasil dan analisis kecepatan
6. Klik "Test Ulang" untuk mengulangi test

## Catatan Teknis

- **Real Network Testing**: Menggunakan server global dan koneksi internet sesungguhnya
- **Browser Performance API**: Timing precision menggunakan performance.now()
- **CORS Handling**: Menggunakan no-cors mode untuk ping, real data untuk transfer
- **Progressive Testing**: File size yang bertingkat untuk akurasi measurement
- **Error Recovery**: Automatic fallback ke server alternatif
- **Network Conditions**: Hasil akan bervariasi berdasarkan kondisi jaringan real user
- **Responsive Design**: Optimized untuk mobile dan desktop testing
