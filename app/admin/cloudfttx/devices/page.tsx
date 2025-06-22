'use client'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { DataTable, TableColumn } from '@/components/ui/table'
import AdminLayout from '@/components/admin-layout'
import { useToast } from '@/hooks/use-toast'
import type { CloudFttxDevice } from '@/types/cloudfttx-devices'
import { exportDevicesToCsv } from './export-csv'
import { Badge } from '@/components/ui/badge'
import { MoreVertical } from 'lucide-react'
import { Breadcrumb } from '@/components/breadcrumb'
import * as XLSX from 'xlsx'

export default function CloudFttxDevicesPage() {
  const { company } = useAuth()
  const { toast } = useToast()
  const [devices, setDevices] = useState<CloudFttxDevice[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  const [sortKey, setSortKey] = useState<string>('hostname')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  // State loadingFilter untuk skeleton loader saat filter/search
  const [loadingFilter, setLoadingFilter] = useState(false)

  // Handler hapus device
  const handleDeleteDevice = useCallback(
    (device: CloudFttxDevice) => {
      setDevices(prev => prev.filter(d => d.id !== device.id))
      toast({
        title: 'Device dihapus',
        description: `Perangkat ${device.hostname} berhasil dihapus.`,
        variant: 'default',
      })
    },
    [toast]
  )

  // Kolom table, render kolom aksi bisa akses handler
  const columns: TableColumn<CloudFttxDevice>[] = [
    { key: 'hostname', label: 'Hostname', sortable: true },
    { key: 'ip', label: 'IP', sortable: true },
    { key: 'device_real_model', label: 'Model', sortable: true },
    { key: 'sn', label: 'Serial', sortable: true },
    {
      key: 'monitoring_is_device_available',
      label: 'Status',
      sortable: true,
      render: d => (
        <Badge
          variant={d.monitoring_is_device_available ? 'default' : 'secondary'}
          className={
            d.monitoring_is_device_available
              ? 'bg-green-500 text-white'
              : 'bg-gray-400 text-white'
          }
        >
          {d.monitoring_is_device_available ? 'Online' : 'Offline'}
        </Badge>
      ),
    },
    { key: 'last_cpu', label: 'CPU' },
    { key: 'last_ram', label: 'RAM' },
    {
      key: 'actions',
      label: 'Aksi',
      render: row => (
        <div className="relative inline-block text-left">
          <button
            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800"
            title="Aksi"
            onClick={() => handleDeleteDevice(row)}
          >
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ]

  const exportDevicesToExcel = (devices: CloudFttxDevice[]) => {
    const ws = XLSX.utils.json_to_sheet(devices)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Devices')
    XLSX.writeFile(wb, 'cloudfttx_devices.xlsx')
  }

  useEffect(() => {
    if (!company?.company_registry) return
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BACKEND_URL
    if (!baseUrl) {
      setLoading(false)
      toast({
        title: 'Konfigurasi ENV Error',
        description: 'NEXT_PUBLIC_SERVER_BACKEND_URL belum di-set',
        variant: 'destructive',
      })
      return
    }
    setLoading(true)
    fetch(
      `${baseUrl}/api/v1/cloudfttx/devices?groups=${company.company_registry}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDevices(data.devices as CloudFttxDevice[])
          if (!data.devices.length)
            toast({
              title: 'Data Kosong',
              description: 'Tidak ada perangkat ditemukan.',
              variant: 'default',
            })
        } else {
          toast({
            title: 'Gagal Fetch Devices',
            description: 'API mengembalikan error.',
            variant: 'destructive',
          })
        }
      })
      .catch(() => {
        toast({
          title: 'Gagal Fetch Devices',
          description: 'Tidak dapat terhubung ke API.',
          variant: 'destructive',
        })
      })
      .finally(() => setLoading(false))
  }, [company?.company_registry, toast])

  // Tombol refresh manual
  const handleRefresh = () => {
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BACKEND_URL
    if (!baseUrl) {
      setLoading(false)
      toast({
        title: 'Konfigurasi ENV Error',
        description: 'NEXT_PUBLIC_SERVER_BACKEND_URL belum di-set',
        variant: 'destructive',
      })
      return
    }
    fetch(
      `${baseUrl}/api/v1/cloudfttx/devices?groups=${company?.company_registry}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDevices(data.devices as CloudFttxDevice[])
          if (!data.devices.length)
            toast({
              title: 'Data Kosong',
              description: 'Tidak ada perangkat ditemukan.',
              variant: 'default',
            })
        } else {
          toast({
            title: 'Gagal Fetch Devices',
            description: 'API mengembalikan error.',
            variant: 'destructive',
          })
        }
      })
      .catch(() => {
        toast({
          title: 'Gagal Fetch Devices',
          description: 'Tidak dapat terhubung ke API.',
          variant: 'destructive',
        })
      })
      .finally(() => setLoading(false))
  }

  const filteredDevices = useMemo(() => {
    return devices.filter(d => {
      const matchesSearch =
        d.hostname.toLowerCase().includes(search.toLowerCase()) ||
        d.ip.toLowerCase().includes(search.toLowerCase())
      const matchesStatus =
        statusFilter.length === 0 ||
        (statusFilter.includes('online') && d.monitoring_is_device_available) ||
        (statusFilter.includes('offline') && !d.monitoring_is_device_available)
      return matchesSearch && matchesStatus
    })
  }, [devices, search, statusFilter])

  const pagedDevices = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredDevices.slice(start, start + pageSize)
  }, [filteredDevices, page, pageSize])

  const sortedDevices = useMemo(() => {
    const sorted = [...pagedDevices]
    if (sortKey) {
      sorted.sort((a, b) => {
        const aValue = a[sortKey as keyof CloudFttxDevice]
        const bValue = b[sortKey as keyof CloudFttxDevice]
        if (aValue == null && bValue == null) return 0
        if (aValue == null) return 1
        if (bValue == null) return -1
        if (aValue === bValue) return 0
        if (sortDirection === 'asc') return aValue > bValue ? 1 : -1
        return aValue < bValue ? 1 : -1
      })
    }
    return sorted
  }, [pagedDevices, sortKey, sortDirection])
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(d => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  // Trigger skeleton loader saat filter/search berubah
  useEffect(() => {
    if (loading) return
    setLoadingFilter(true)
    const timeout = setTimeout(() => setLoadingFilter(false), 400)
    return () => clearTimeout(timeout)
  }, [search, statusFilter])

  return (
    <AdminLayout>
      <div className="mb-8">
        <Breadcrumb className="mb-4" />
        <h2 className="text-3xl font-bold mb-2">CloudFTTX Devices</h2>
        <p className="text-gray-400 mb-6">
          Daftar perangkat CloudFTTX untuk group{' '}
          <b>{company?.company_registry}</b>
        </p>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            className="border border-slate-700/40 dark:border-zinc-700/70 bg-[#151c2c] dark:bg-[#151c2c] text-slate-200 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500 px-3 py-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cari hostname/IP..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <fieldset className="flex items-center gap-2 bg-[#151c2c] dark:bg-[#151c2c] border border-slate-700/40 dark:border-zinc-700/70 rounded px-2 py-1 w-full md:w-56">
            <legend className="text-slate-400 text-xs font-semibold">
              Status:
            </legend>
            <label className="flex items-center gap-1 text-green-400 text-xs">
              <input
                type="checkbox"
                checked={statusFilter.includes('online')}
                onChange={e => {
                  setStatusFilter(f =>
                    e.target.checked
                      ? [...f, 'online']
                      : f.filter(s => s !== 'online')
                  )
                }}
              />
              Online
            </label>
            <label className="flex items-center gap-1 text-gray-400 text-xs">
              <input
                type="checkbox"
                checked={statusFilter.includes('offline')}
                onChange={e => {
                  setStatusFilter(f =>
                    e.target.checked
                      ? [...f, 'offline']
                      : f.filter(s => s !== 'offline')
                  )
                }}
              />
              Offline
            </label>
          </fieldset>
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => exportDevicesToCsv(filteredDevices)}
            disabled={loading || !filteredDevices.length}
          >
            Export CSV
          </button>
          <button
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
            onClick={() => exportDevicesToExcel(filteredDevices)}
            disabled={loading || !filteredDevices.length}
          >
            Export Excel
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-700 transition"
            onClick={handleRefresh}
            disabled={loading}
            title="Refresh data perangkat"
          >
            Refresh
          </button>
        </div>
        <div className="overflow-x-auto rounded border bg-white dark:bg-zinc-900">
          <DataTable
            columns={columns}
            data={sortedDevices}
            loading={loading || loadingFilter}
            onSort={handleSort}
            sortKey={sortKey}
            sortDirection={sortDirection}
            skeletonRows={5}
            showNumbering={true}
            pagination={{
              page,
              pageSize,
              totalRows: filteredDevices.length,
              onPageChange: setPage,
              onPageSizeChange: (size: number) => {
                setPageSize(size)
                setPage(1)
              },
              pageSizeOptions: [10, 20, 50, 100],
            }}
          />
        </div>
      </div>
    </AdminLayout>
  )
}
