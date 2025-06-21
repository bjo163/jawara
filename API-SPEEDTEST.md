# Speedtest API Documentation

Internal API endpoints untuk speed test functionality di Jawara-Net website.

## API Endpoints

### 1. Ping Test
**Endpoint**: `/api/speedtest/ping`
**Methods**: GET, POST
**Purpose**: Mengukur latency ke server internal

#### GET Request
```bash
curl http://localhost:3000/api/speedtest/ping
```

#### Response
```json
{
  "timestamp": 1703512800000,
  "server": "jawara-net-internal",
  "message": "pong"
}
```

### 2. Download Test
**Endpoint**: `/api/speedtest/download`
**Method**: GET
**Purpose**: Generate random data untuk download speed test

#### Parameters
- `size` (optional): Size in bytes (default: 1048576 = 1MB, max: 10MB)

#### GET Request
```bash
curl "http://localhost:3000/api/speedtest/download?size=102400"
```

#### Response
- Binary data dengan size yang diminta
- Headers: Content-Type: application/octet-stream
- Cache-Control: no-cache untuk akurasi timing

### 3. Upload Test
**Endpoint**: `/api/speedtest/upload`
**Method**: POST
**Purpose**: Menerima data untuk upload speed test

#### POST Request
```bash
curl -X POST \
  -H "Content-Type: application/octet-stream" \
  --data-binary "@testfile.bin" \
  http://localhost:3000/api/speedtest/upload
```

#### Response
```json
{
  "received": true,
  "size": 102400,
  "duration": 45,
  "timestamp": 1703512800000,
  "server": "jawara-net-internal"
}
```

## Static Test Files

Located in `/public/speedtest/`:

- `test-100kb.bin` - 100KB (102,400 bytes)
- `test-500kb.bin` - 500KB (512,000 bytes)  
- `test-1mb.bin` - 1MB (1,048,576 bytes)
- `test-2mb.bin` - 2MB (2,097,152 bytes)

### Access URLs
- `http://localhost:3000/speedtest/test-100kb.bin`
- `http://localhost:3000/speedtest/test-500kb.bin`
- `http://localhost:3000/speedtest/test-1mb.bin`
- `http://localhost:3000/speedtest/test-2mb.bin`

## Security Features

1. **Size Limits**: Upload dan download dibatasi maksimal 10MB
2. **Rate Limiting**: Bisa ditambahkan di masa depan
3. **Data Validation**: Server memvalidasi incoming data
4. **Error Handling**: Graceful error responses

## Performance Considerations

1. **Memory Usage**: File generated in memory untuk download test
2. **Concurrent Requests**: Bisa handle multiple simultaneous tests
3. **Caching**: Disabled untuk akurasi timing measurement
4. **Cleanup**: Data tidak disimpan permanen setelah test

## Development Notes

- API routes menggunakan Next.js 15 App Router
- TypeScript untuk type safety
- Streaming responses untuk file besar
- Performance.now() timing di client-side untuk akurasi tinggi
