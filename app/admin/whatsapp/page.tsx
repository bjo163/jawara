import AdminLayout from '@/components/admin-layout'
import { WhatsAppQuickPanel } from '@/components/whatsapp-quick-panel-simple'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function AdminWhatsAppPage() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">WhatsApp Service</h2>
        <p className="text-gray-400 mb-6">
          Panel kontrol dan status WhatsApp untuk admin.
        </p>
        <Card className="bg-slate-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">WhatsApp Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <WhatsAppQuickPanel />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
