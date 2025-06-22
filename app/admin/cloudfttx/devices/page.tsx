'use client'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { DataTable, TableColumn } from '@/components/ui/table'
import AdminLayout from '@/components/admin-layout'
import { useToast } from '@/hooks/use-toast'
import type { CloudFttxDevice } from '@/types/cloudfttx-devices'
import { exportDevicesToCsv } from './export-csv'
import { Badge } from '@/components/ui/badge'
import { MoreVertical } from 'lucide-react'
import { Breadcrumb } from '@/components/breadcrumb'

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
    render: () => (
      <div className="relative inline-block text-left">
        <button
          className="p-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800"
          title="Aksi"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    ),
  },
]

export default function CloudFttxDevicesPage() {
  const { company } = useAuth()
  const { toast } = useToast()
  const [devices, setDevices] = useState<CloudFttxDevice[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  // TODO: Pagination
  const [page, setPage] = useState(1)
  const pageSize = 20
  const [sortKey, setSortKey] = useState<string>('hostname')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

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
        statusFilter === null ||
        (statusFilter === 'online' && d.monitoring_is_device_available) ||
        (statusFilter === 'offline' && !d.monitoring_is_device_available)
      return matchesSearch && matchesStatus
    })
  }, [devices, search, statusFilter])

  const pagedDevices = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredDevices.slice(start, start + pageSize)
  }, [filteredDevices, page])
  const totalPages = Math.ceil(filteredDevices.length / pageSize)

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
            className="border px-2 py-1 rounded w-full md:w-64"
            placeholder="Cari hostname/IP..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            className="border px-2 py-1 rounded w-full md:w-40"
            value={statusFilter ?? ''}
            onChange={e => setStatusFilter(e.target.value || null)}
          >
            <option value="">Semua Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={() => exportDevicesToCsv(filteredDevices)}
            disabled={loading || !filteredDevices.length}
          >
            Export CSV
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
            loading={loading}
            onSort={handleSort}
            sortKey={sortKey}
            sortDirection={sortDirection}
            skeletonRows={5}
          />
        </div>
        {totalPages > 1 && (
          <div className="flex gap-2 mt-4 justify-center">
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="px-2 py-1">
              {page} / {totalPages}
            </span>
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
