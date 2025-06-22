'use client'
import { useState } from 'react'
import AdminSidebar from './admin-sidebar'

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar overlay for mobile */}
      <button
        type="button"
        tabIndex={sidebarOpen ? 0 : -1}
        aria-label="Tutup sidebar"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') setSidebarOpen(false)
        }}
        style={{ outline: 'none', border: 'none', padding: 0, margin: 0 }}
      />
      {/* Sidebar */}
      <div
        className={`fixed z-50 md:static left-0 top-0 h-full transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <AdminSidebar />
      </div>
      {/* Hamburger button */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-slate-900 border border-slate-800 rounded-lg p-2 text-gray-200 hover:bg-slate-800 transition"
        onClick={() => setSidebarOpen(v => !v)}
        aria-label="Toggle sidebar"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto md:ml-0 ml-0 md:pl-0 pl-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen text-white font-sans text-sm">
        {children}
      </main>
    </div>
  )
}
