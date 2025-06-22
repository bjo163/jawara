# CloudFTTX Devices

## ENV yang Dibutuhkan

- `NEXT_PUBLIC_SERVER_BACKEND_URL` — URL backend API CloudFTTX

## API Endpoint

- GET `${NEXT_PUBLIC_SERVER_BACKEND_URL}/api/v1/cloudfttx/devices?groups={company_registry}`
  - Parameter: `groups` (wajib, dari company_registry)
  - Response: `{ success: boolean, devices: CloudFttxDevice[] }`

## Fitur

- Pencarian dan filter status perangkat
- Export data ke CSV
- Tabel responsif

> Semua custom type/interface ada di `/types/cloudfttx-devices.ts`
