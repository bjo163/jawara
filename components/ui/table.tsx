import * as React from 'react'
import { cn } from '@/lib/utils' // Assuming cn is a utility like clsx or tailwind-merge

export interface TableColumn<T> {
  key: string
  label: string
  sortable?: boolean
  render?: (row: T, index?: number) => React.ReactNode
  className?: string
}

interface TablePaginationProps {
  page: number
  pageSize: number
  totalRows: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (size: number) => void
  pageSizeOptions?: number[]
}

interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[]
  data: T[]
  loading?: boolean
  onSort?: (key: string) => void
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
  skeletonRows?: number
  showNumbering?: boolean
  pagination?: TablePaginationProps
}

// Table skeleton loader
export function TableSkeleton({
  rows = 5,
  cols = 6,
}: Readonly<{ rows?: number; cols?: number }>) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, i) => (
        <tr
          key={`skel-row-${i}`}
          className="animate-pulse h-12 dark:bg-transparent"
        >
          {Array.from({ length: cols }).map((_, j) => (
            <td
              key={`skel-cell-${i}-${j}`}
              className="px-4 py-3 border-b border-slate-200 dark:border-slate-700/50"
            >
              <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export function DataTable<T extends { id?: string | number }>({
  columns,
  data,
  loading,
  onSort,
  sortKey,
  sortDirection,
  skeletonRows = 5,
  className,
  showNumbering = false,
  pagination,
  ...props
}: Readonly<TableProps<T>>) {
  const numberingOffset = pagination
    ? (pagination.page - 1) * pagination.pageSize
    : 0

  let tableBody: React.ReactNode
  if (loading) {
    tableBody = (
      <TableSkeleton
        rows={skeletonRows}
        cols={columns.length + (showNumbering ? 1 : 0)}
      />
    )
  } else if (data.length === 0) {
    tableBody = (
      <tbody>
        <tr>
          <td
            colSpan={columns.length + (showNumbering ? 1 : 0)}
            className="py-12 text-center text-slate-500 dark:text-slate-400"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400 dark:text-slate-500 mb-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 9v4" />
                <path d="M12 16v.01" />
              </svg>
              <span>Tidak ada data ditemukan.</span>
            </div>
          </td>
        </tr>
      </tbody>
    )
  } else {
    tableBody = (
      <tbody>
        {data.map((row, i) => {
          let key: string
          if (
            row &&
            typeof row === 'object' &&
            'id' in row &&
            row.id !== undefined
          ) {
            key = String(row.id)
          } else {
            key = `${numberingOffset + i}`
          }
          return (
            <tr
              key={key}
              className="border-b border-slate-700/40 dark:border-zinc-700/60 transition-colors even:bg-[#151c2c] odd:bg-[#151c2c] hover:bg-blue-900/30 dark:hover:bg-zinc-800/40"
            >
              {showNumbering && (
                <td className="px-4 py-3 align-middle text-slate-400 dark:text-slate-400 font-mono w-12">
                  {numberingOffset + i + 1}
                </td>
              )}
              {columns.map(col => {
                let cellValue: React.ReactNode
                if (col.render) {
                  cellValue = col.render(row, numberingOffset + i)
                } else {
                  const value = (row as Record<string, unknown>)[col.key]
                  if (value === '' || value == null) {
                    cellValue = <span className="select-none">—</span>
                  } else if (
                    typeof value === 'string' ||
                    typeof value === 'number'
                  ) {
                    cellValue = value
                  } else {
                    cellValue = '[object]'
                  }
                }
                return (
                  <td
                    key={col.key}
                    className={cn(
                      'px-4 py-3 align-middle',
                      col.className,
                      (row as Record<string, unknown>)[col.key] === '' ||
                        (row as Record<string, unknown>)[col.key] == null
                        ? 'text-slate-500 dark:text-slate-500 italic'
                        : 'text-slate-200 dark:text-slate-100'
                    )}
                  >
                    {cellValue}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    )
  }

  return (
    <div className="relative w-full overflow-x-auto rounded-xl shadow-lg border border-slate-700/40 dark:border-zinc-700/70 bg-[#151c2c] dark:bg-[#151c2c]">
      <table
        className={cn(
          'w-full caption-bottom text-sm font-sans', // font-sans dan text-sm konsisten
          'rounded-xl', // border radius table
          'bg-transparent',
          className
        )}
        {...props}
      >
        <thead className="bg-[#19213a] dark:bg-[#19213a]">
          <tr>
            {showNumbering && (
              <th className="h-12 px-4 text-left align-middle font-medium tracking-wider border-b border-slate-700/40 dark:border-sky-800/60 text-slate-200 dark:text-sky-300 w-12">
                No
              </th>
            )}
            {columns.map(col => (
              <th
                key={col.key}
                className={cn(
                  'h-12 px-4 text-left align-middle font-medium tracking-wider', // font-medium header
                  'border-b border-slate-700/40 dark:border-sky-800/60',
                  'text-slate-200 dark:text-sky-300',
                  col.className
                )}
                onClick={
                  col.sortable && onSort ? () => onSort(col.key) : undefined
                }
                style={col.sortable ? { cursor: 'pointer' } : {}}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && sortKey === col.key && (
                    <span className="text-sky-500 dark:text-sky-400">
                      {sortDirection === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        {tableBody}
      </table>
      {pagination && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 px-4 py-2 border-t border-slate-700/40 dark:border-zinc-700/70 bg-[#151c2c] dark:bg-[#151c2c]">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Rows per page:</span>
            <select
              className="bg-[#151c2c] dark:bg-[#151c2c] text-slate-200 dark:text-slate-100 border border-slate-700/40 dark:border-zinc-700/70 rounded px-2 py-1 text-xs"
              value={pagination.pageSize}
              onChange={e =>
                pagination.onPageSizeChange?.(parseInt(e.target.value))
              }
            >
              {(pagination.pageSizeOptions || [10, 20, 50, 100]).map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              onClick={() =>
                pagination.onPageChange(Math.max(1, pagination.page - 1))
              }
              disabled={pagination.page === 1}
            >
              Prev
            </button>
            <span className="px-2 py-1 text-xs">
              {pagination.page} /{' '}
              {Math.max(
                1,
                Math.ceil(pagination.totalRows / pagination.pageSize)
              )}
            </span>
            <button
              className="px-2 py-1 border rounded disabled:opacity-50"
              onClick={() =>
                pagination.onPageChange(
                  Math.min(
                    Math.ceil(pagination.totalRows / pagination.pageSize),
                    pagination.page + 1
                  )
                )
              }
              disabled={
                pagination.page ===
                Math.ceil(pagination.totalRows / pagination.pageSize)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
