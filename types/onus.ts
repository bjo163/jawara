export interface OnuDevice {
  id: number
  onu_name: string
  onu_iface: string
  iface_name: string
  onu_rx: number | null
  olt_rx: number | null
  onu_tx: number | null
  olt_tx: number | null
  onu_vendor_model: string | null
  onu_version: string | null
  onu_length: number | null
  onu_iface_name: string
  onu_iface_description: string | null
  device_id: number
  is_new: number
  active_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  description: string | null
  critical_onu: number
  fob_n: string | null
  lat: number | null
  lon: number | null
  olt_port_index: number
  monitoring_enable: number
  monitoring_last_active_at: string | null
  monitoring_last_state: string | null
  monitoring_is_device_available: number
  onu_temp: number | null
  monitoring_last_deregistered_at: string | null
  pon_port: string | null
  pon_port_onu: string | null
  building_id: number | null
  personal_sending_telegram: string | null
  onu_name_raw: string
  onu_type: string | null
  node_id: number | null
  huawei_service_port: string | null
  onu_ip: string | null
  catv_signal: string | null
  active: number
  send_notify: number
  monitoring_iface_metrics: number
  apartment: string | null
  entrance: string | null
  floor: string | null
  device_group_id: number | null
  onu_eth_port_descr: string | null
  device: [number, string]
}

export interface OnusApiResponse {
  success: boolean
  group_id: number
  onus: OnuDevice[]
}
