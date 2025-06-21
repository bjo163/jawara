"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    jenispesan: "",
    alamat: "",
    paket: "",
    idpelanggan: "",
    lokasi: "",
    pesan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Pesan berhasil dikirim! Tim kami akan segera menghubungi kamu.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700">
      <h3 className="text-2xl font-bold text-blue-400 mb-6">Kirim Pesan 💬</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nama" className="text-white">
              Nama Lengkap *
            </Label>
            <Input
              id="nama"
              type="text"
              value={formData.nama}
              onChange={(e) => handleChange("nama", e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-slate-700 border-gray-600 text-white"
              placeholder="nama@email.com"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-white">
            WhatsApp *
          </Label>
          <Input
            id="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="08123456789"
            required
          />
        </div>

        {/* Message Type */}
        <div>
          <Label className="text-white">Jenis Pesan *</Label>
          <Select onValueChange={(value) => handleChange("jenispesan", value)}>
            <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
              <SelectValue placeholder="Pilih jenis pesan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="berlangganan">Berlangganan Baru</SelectItem>
              <SelectItem value="complain">Komplain/Gangguan</SelectItem>
              <SelectItem value="kontak">Sekadar Kontak/Tanya</SelectItem>
              <SelectItem value="upgrade">Upgrade/Downgrade Paket</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dynamic Fields based on Message Type */}
        {formData.jenispesan === "berlangganan" && (
          <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-orange-400">Info Berlangganan</h4>
            <div>
              <Label htmlFor="alamat" className="text-white">
                Alamat Lengkap *
              </Label>
              <Textarea
                id="alamat"
                value={formData.alamat}
                onChange={(e) => handleChange("alamat", e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="Alamat lengkap untuk instalasi"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-white">Pilihan Paket</Label>
              <Select onValueChange={(value) => handleChange("paket", value)}>
                <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                  <SelectValue placeholder="Pilih paket yang diminati" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jagoan-neon">Jagoan Neon - 10 Mbps</SelectItem>
                  <SelectItem value="mandor-sakti">Mandor Sakti - 25 Mbps</SelectItem>
                  <SelectItem value="wiro-sableng">Wiro Sableng - 35 Mbps</SelectItem>
                  <SelectItem value="sultan">Sultan - 50 Mbps</SelectItem>
                  <SelectItem value="startup-warrior">Startup Warrior - 50 Mbps Bisnis</SelectItem>
                  <SelectItem value="corporate-beast">Corporate Beast - 100 Mbps Bisnis</SelectItem>
                  <SelectItem value="enterprise-king">Enterprise King - 200 Mbps Bisnis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {formData.jenispesan === "complain" && (
          <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-red-400">Info Komplain</h4>
            <div>
              <Label htmlFor="idpelanggan" className="text-white">
                ID Pelanggan
              </Label>
              <Input
                id="idpelanggan"
                type="text"
                value={formData.idpelanggan}
                onChange={(e) => handleChange("idpelanggan", e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="Contoh: JN001234"
              />
            </div>
            <div>
              <Label htmlFor="lokasi" className="text-white">
                Lokasi Gangguan
              </Label>
              <Input
                id="lokasi"
                type="text"
                value={formData.lokasi}
                onChange={(e) => handleChange("lokasi", e.target.value)}
                className="bg-slate-700 border-gray-600 text-white"
                placeholder="Alamat lokasi bermasalah"
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <Label htmlFor="pesan" className="text-white">
            Pesan *
          </Label>
          <Textarea
            id="pesan"
            value={formData.pesan}
            onChange={(e) => handleChange("pesan", e.target.value)}
            className="bg-slate-700 border-gray-600 text-white"
            placeholder="Tulis pesan kamu di sini..."
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3"
        >
          Kirim Pesan 🚀
        </Button>
      </form>

      <p className="text-gray-400 text-sm mt-4 text-center">
        Tim kami akan merespon dalam 1-2 jam kerja. Untuk urgent, langsung chat WhatsApp ya!
      </p>
    </div>
  )
}
