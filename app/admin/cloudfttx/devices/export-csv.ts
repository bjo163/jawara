import type { CloudFttxDevice } from '@/types/cloudfttx-devices'

export function exportDevicesToCsv(devices: CloudFttxDevice[]) {
  const header = ['Hostname', 'IP', 'Model', 'Serial', 'Status', 'CPU', 'RAM']
  const rows = devices.map(d => [
    d.hostname,
    d.ip,
    d.device_real_model,
    d.sn,
    d.monitoring_is_device_available ? 'Online' : 'Offline',
    d.last_cpu ?? '-',
    d.last_ram ?? '-',
  ])
  const csvContent = [header, ...rows].map(r => r.join(',')).join('\n')
  const blob = new Blob([csvContent], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'cloudfttx-devices.csv'
  a.click()
  URL.revokeObjectURL(url)
}
