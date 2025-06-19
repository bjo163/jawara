# 🐳 Docker Setup Guide

## Quick Start

### Production

```bash
# Build dan run production
docker-compose up --build jawara-web

# Atau dengan detached mode
docker-compose up -d --build jawara-web
```

### Development

```bash
# Uncomment jawara-dev service di docker-compose.yml, lalu:
docker-compose up --build jawara-dev
```

### Single Commands

```bash
# Production build
docker build -t jawara-net .

# Development build
docker build -f Dockerfile.dev -t jawara-net-dev .

# Run production
docker run -p 3000:3000 jawara-net

# Run development
docker run -p 3000:3000 -v $(pwd):/app jawara-net-dev
```

## Optimisasi yang Diterapkan

### 📦 Size Optimization

- **Multi-stage build**: Mengurangi ukuran final image
- **Standalone output**: Next.js optimized bundle
- **Alpine Linux**: Base image yang minimal
- **Layer caching**: Dependencies terpisah dari source code
- **.dockerignore**: Exclude file yang tidak perlu

### 🚀 Performance

- **pnpm**: Package manager yang lebih cepat dan hemat disk
- **Production dependencies only**: Hanya install deps yang diperlukan
- **SWC minification**: Bundling yang lebih cepat
- **Static compression**: Gzip compression enabled

### 💾 Disk Usage

- **Before**: ~800MB+ (dengan semua dependencies)
- **After**: ~200-300MB (optimized)
- **Reduction**: 60-70% lebih kecil

## Environment Variables

Buat file `.env.local` untuk konfigurasi:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Troubleshooting

### Build Issues

```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache
```

### Development Hot Reload

```bash
# Pastikan volume mounting aktif untuk development
# Check docker-compose.yml bagian jawara-dev
```

### Port Conflicts

```bash
# Check port 3000
netstat -an | findstr 3000

# Use different port
docker run -p 3001:3000 jawara-net
```
