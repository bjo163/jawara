import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../hooks/use-auth'
import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import {
  LayoutDashboard,
  ActivitySquare,
  MessageCircle,
  Server,
} from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'WhatsApp', href: '/admin/whatsapp', icon: MessageCircle },
  {
    label: 'CloudFTTX',
    icon: Server,
    children: [
      { label: 'Devices', href: '/admin/cloudfttx/devices', icon: Server },
    ],
  },
  {
    label: 'Diagnostics',
    href: '/admin/diagnostics',
    icon: ActivitySquare,
    badge: '!',
  },
  // Tambahkan menu lain sesuai kebutuhan
]

function getInitials(name?: string) {
  if (!name) return ''
  return name
    .split(' ')
    .map(part => part[0]?.toUpperCase())
    .join('')
    .slice(0, 2)
}

export default function AdminSidebar() {
  const { user, company } = useAuth()
  const pathname = usePathname()
  return (
    <Card className="h-screen w-64 bg-gradient-to-b from-slate-950 to-slate-900 border-r border-slate-800 flex flex-col shadow-xl rounded-none transition-all duration-300">
      <div className="p-6 border-b border-slate-800 flex flex-col items-center gap-2 bg-slate-950/80 shadow-md">
        <Avatar className="w-16 h-16 mb-2 shadow-lg ring-2 ring-orange-400">
          <AvatarImage src={user?.avatar ?? undefined} alt={user?.name ?? ''} />
          <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
        </Avatar>
        <div className="font-bold text-lg truncate text-orange-400 text-center w-full drop-shadow">
          {company?.name ?? '-'}
        </div>
        <div className="text-xs text-gray-400 truncate text-center w-full">
          {user?.email ?? '-'}
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <TooltipProvider>
          {menuItems.map(item => {
            if (item.children) {
              // Kelompok menu CloudFTTX
              return (
                <div key={item.label}>
                  <button className="flex items-center gap-3 px-3 py-2 rounded font-bold text-gray-200 hover:bg-slate-800 w-full transition justify-between">
                    <span className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-gray-400" />
                      {item.label}
                    </span>
                  </button>
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map(sub => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-gray-200 hover:bg-slate-800 font-medium transition ${pathname === sub.href ? 'bg-slate-800 text-orange-400 font-bold' : ''}`}
                      >
                        <sub.icon className="w-4 h-4 text-gray-400" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Tooltip key={item.href} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded font-medium transition text-gray-200 hover:bg-slate-800 ${
                      active ? 'bg-slate-800 text-orange-400 font-bold' : ''
                    }`}
                  >
                    <span className="relative flex items-center">
                      <Icon
                        className={`w-5 h-5 ${active ? 'text-orange-400' : 'text-gray-400'} transition-all duration-200`}
                      />
                      {item.badge && (
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <span className="transition-all duration-200">
                      {item.label}
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="md:hidden">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>
      </nav>
    </Card>
  )
}
