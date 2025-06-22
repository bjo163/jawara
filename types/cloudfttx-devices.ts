export interface CloudFttxDevice {
  id: string
  hostname: string
  ip: string
  device_real_model: string
  sn: string
  monitoring_is_device_available: boolean
  last_cpu?: string
  last_ram?: string
  // Tambahkan field lain sesuai kebutuhan
}
