# Login System Implementation - Jawara-Net

## Overview
Implementasi sistem login terpisah untuk pelanggan dan admin dengan halaman dashboard yang berbeda.

## Struktur Login System

### 1. Halaman Login Terpisah
- **Login Pelanggan**: `/login/pelanggan`
- **Login Admin**: `/login/admin`

### 2. Komponen Reusable
- **LoginForm**: Komponen form login yang dapat digunakan untuk kedua tipe user
- **PageHeader**: Header dengan breadcrumb konsisten
- **Validasi**: Pengecekan role dan redirect otomatis

### 3. Dashboard Terpisah
- **Pelanggan Dashboard**: `/pelanggan/dashboard`
- **Admin Dashboard**: `/admin/dashboard`

## Demo Credentials

### Pelanggan
```
Username: john.doe
Password: password123

Username: jane.smith
Password: password123
```

### Admin
```
Username: admin
Password: password123

Username: superadmin
Password: password123
```

## Fitur Login

### Halaman Login Pelanggan (`/login/pelanggan`)
- Form login dengan validasi
- Benefits section untuk pelanggan
- Auto-redirect jika sudah login
- Link ke halaman admin login
- Demo credentials display
- Help section dengan WhatsApp link

### Halaman Login Admin (`/login/admin`)
- Form login dengan validasi role
- Admin features overview
- Security notice
- Auto-redirect jika sudah login
- Link ke halaman pelanggan login
- Contact IT section

### LoginForm Component (`/components/login-form.tsx`)
- Reusable untuk pelanggan dan admin
- Props: `userType: 'pelanggan' | 'admin'`
- Validasi input
- Password visibility toggle
- Loading states
- Error dan success messages
- Role validation
- Demo credentials display

## Authentication System

### Auth Data (`/data/auth.ts`)
```typescript
interface User {
  id: string
  username: string
  email: string
  name: string
  role: 'pelanggan' | 'admin'
  avatar?: string
  phone?: string
  address?: string
  package?: string
  status: 'active' | 'inactive' | 'suspended'
  createdAt: Date
  lastLogin?: Date
}
```

### Helper Functions
- `authenticateUser()`: Validasi login
- `saveAuthData()`: Simpan data ke localStorage
- `getAuthData()`: Ambil data dari localStorage
- `clearAuthData()`: Hapus data login
- `isAuthenticated()`: Cek status login
- `isAdmin()`: Cek role admin
- `isPelanggan()`: Cek role pelanggan

## Navigation Updates

### Navbar (`/components/navbar.tsx`)
- Dropdown menu login dengan 2 opsi:
  - 👤 Login Pelanggan
  - ⚙️ Login Admin
- Mobile: Tombol terpisah untuk login
- Responsive design

### Breadcrumb Config (`/data/breadcrumb-config.ts`)
```typescript
'/login/pelanggan': {
  title: 'Login Pelanggan',
  breadcrumbs: [
    { label: 'Login Pelanggan', active: true, icon: '👤' }
  ],
  backButton: {
    href: '/',
    label: 'Kembali ke Beranda'
  }
},
'/login/admin': {
  title: 'Login Admin',
  breadcrumbs: [
    { label: 'Login Admin', active: true, icon: '🔐' }
  ],
  backButton: {
    href: '/',
    label: 'Kembali ke Beranda'
  }
}
```

## Dashboard Features

### Pelanggan Dashboard
- Welcome message dengan nama user
- Quick stats: Paket aktif, status pembayaran, status koneksi
- Quick actions: Profil, Pembayaran, Support, Pengaturan
- Recent activity timeline
- Logout functionality

### Admin Dashboard
- Admin panel header dengan role indicator
- Statistics grid: Total pelanggan, revenue, uptime, growth
- Quick actions: Manajemen pelanggan, Analytics, Network monitor, Pengaturan
- System activity log
- Alerts & notifications panel
- Logout functionality

## Security Features

1. **Role Validation**: Login hanya berhasil jika role sesuai dengan halaman
2. **Auto Redirect**: Redirect otomatis jika user sudah login
3. **Protected Routes**: Dashboard hanya bisa diakses setelah login
4. **Session Management**: Data tersimpan di localStorage
5. **Error Handling**: Pesan error yang informatif

## File Structure

```
app/
├── login/
│   ├── pelanggan/
│   │   └── page.tsx          # Halaman login pelanggan
│   └── admin/
│       └── page.tsx          # Halaman login admin
├── pelanggan/
│   └── dashboard/
│       └── page.tsx          # Dashboard pelanggan
└── admin/
    └── dashboard/
        └── page.tsx          # Dashboard admin

components/
├── navbar.tsx                # Navigation dengan dropdown login
├── login-form.tsx            # Form login reusable
├── page-header.tsx           # Header dengan breadcrumb
└── page-layout.tsx           # Layout wrapper

data/
├── auth.ts                   # Authentication logic & demo data
└── breadcrumb-config.ts      # Breadcrumb configuration
```

## Usage

### 1. Akses Halaman Login
- Dari navbar, hover pada tombol "🔐 Login"
- Pilih "👤 Login Pelanggan" atau "⚙️ Login Admin"
- Atau akses langsung via URL

### 2. Login Process
- Masukkan username dan password
- Sistem akan validasi role
- Jika berhasil, redirect ke dashboard sesuai role
- Jika gagal, tampilkan error message

### 3. Dashboard Access
- Setelah login, user diarahkan ke dashboard
- Dashboard menampilkan data sesuai role
- Ada tombol logout di header

### 4. Logout
- Klik tombol "Logout" di dashboard
- Session akan dihapus
- Redirect ke halaman login

## Pengembangan Selanjutnya

1. **Backend Integration**: Ganti demo data dengan API real
2. **JWT Implementation**: Gunakan token JWT untuk keamanan
3. **Route Protection**: Implementasi middleware untuk proteksi route
4. **Password Reset**: Fitur lupa password
5. **Registration**: Halaman registrasi untuk pelanggan baru
6. **Session Timeout**: Auto logout setelah waktu tertentu
7. **Two-Factor Auth**: 2FA untuk admin
8. **Audit Log**: Log aktivitas user

## Notes

- Saat ini menggunakan localStorage untuk demo
- Password di-hardcode untuk demo (password123)
- Implementasi real harus menggunakan hashing password
- Session management perlu diperbaiki untuk production
- Perlu implementasi CSRF protection
- Perlu rate limiting untuk login attempts

---

*Dokumentasi ini menjelaskan implementasi sistem login terpisah untuk pelanggan dan admin di website Jawara-Net.*
