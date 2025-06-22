import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TableColumn<T> {
  key: string
  label: string
  sortable?: boolean
  render?: (row: T) => React.ReactNode
  className?: string
}

interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[]
  data: T[]
  loading?: boolean
  onSort?: (key: string) => void
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
  skeletonRows?: number
}

// Table skeleton loader
export function TableSkeleton({
  rows = 5,
  cols = 6,
}: Readonly<{ rows?: number; cols?: number }>) {
  // Gunakan key kombinasi string agar tidak warning lint
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={`skel-row-${i}`} className="animate-pulse bg-muted/40">
          {Array.from({ length: cols }).map((_, j) => (
            <td key={`skel-cell-${i}-${j}`} className="p-4">
              <div className="h-4 bg-muted rounded w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export function DataTable<T>({
  columns,
  data,
  loading,
  onSort,
  sortKey,
  sortDirection,
  skeletonRows = 5,
  className,
  ...props
}: TableProps<T>) {
  return (
    <div className="relative w-full overflow-auto rounded-xl shadow border border-slate-800 bg-white dark:bg-zinc-900">
      <table
        className={cn(
          'w-full caption-bottom text-sm rounded-xl overflow-hidden',
          className
        )}
        {...props}
      >
        <thead className="bg-slate-100 dark:bg-zinc-800">
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={cn(
                  'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
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
                    <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        {loading ? (
          <TableSkeleton rows={skeletonRows} cols={columns.length} />
        ) : (
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-b transition-colors even:bg-slate-50 dark:even:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800"
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    className={cn('p-4 align-middle', col.className)}
                  >
                    {col.render
                      ? col.render(row)
                      : (row as Record<string, unknown>)[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}
