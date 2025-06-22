'use client'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { DataTable, TableColumn } from '@/components/ui/table'
import AdminLayout from '@/components/admin-layout'
import { Badge } from '@/components/ui/badge'
import type { OnuDevice } from '@/types/onus'
import { formatDateTime } from '@/lib/date-format'

const columns: TableColumn<OnuDevice>[] = [
  { key: 'onu_name', label: 'ONU Name', sortable: true },
  { key: 'iface_name', label: 'IFACE', sortable: true },
  { key: 'onu_iface_name', label: 'IFACE Name', sortable: true },
  {
    key: 'monitoring_last_state',
    label: 'Status',
    sortable: true,
    render: d => (
      <Badge
        variant={d.monitoring_last_state === 'ONLINE' ? 'default' : 'secondary'}
        className={
          d.monitoring_last_state === 'ONLINE'
            ? 'bg-green-500 text-white'
            : 'bg-gray-400 text-white'
        }
      >
        {d.monitoring_last_state || '-'}
      </Badge>
    ),
  },
  { key: 'active', label: 'Active' },
  {
    key: 'created_at',
    label: 'Created',
    render: d => formatDateTime(d.created_at),
  },
  {
    key: 'updated_at',
    label: 'Updated',
    render: d => formatDateTime(d.updated_at),
  },
  {
    key: 'device',
    label: 'Device',
    render: d => (Array.isArray(d.device) ? d.device[1] : '-'),
  },
]

export default function OnusPage() {
  const { company } = useAuth()
  const [onus, setOnus] = useState<OnuDevice[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  useEffect(() => {
    if (!company?.company_registry) return
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BACKEND_URL
    if (!baseUrl) {
      setLoading(false)
      return
    }
    setLoading(true)
    fetch(`${baseUrl}/api/v1/cloudfttx/onus?groups=${company.company_registry}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setOnus(data.onus)
      })
      .finally(() => setLoading(false))
  }, [company?.company_registry])

  const filtered = useMemo(() => {
    return onus.filter(
      d =>
        d.onu_name.toLowerCase().includes(search.toLowerCase()) ||
        d.iface_name.toLowerCase().includes(search.toLowerCase()) ||
        (d.device &&
          Array.isArray(d.device) &&
          d.device[1]?.toLowerCase().includes(search.toLowerCase()))
    )
  }, [onus, search])

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])

  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">CloudFTTX ONUs</h2>
        <p className="text-gray-400 mb-6">
          Daftar ONU untuk group <b>{company?.company_registry}</b>
        </p>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            className="border border-slate-700/40 dark:border-zinc-700/70 bg-[#151c2c] dark:bg-[#151c2c] text-slate-200 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-500 px-3 py-2 rounded w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cari ONU Name/IFACE/Device..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto rounded border bg-white dark:bg-zinc-900">
          <DataTable
            columns={columns}
            data={paged}
            loading={loading}
            showNumbering={true}
            pagination={{
              page,
              pageSize,
              totalRows: filtered.length,
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
