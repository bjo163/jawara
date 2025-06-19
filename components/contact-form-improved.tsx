"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Send } from "lucide-react";

export function ContactFormImproved() {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    jenispesan: "",
    pesan: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pesan berhasil dikirim! Tim kami akan segera menghubungi kamu! 🦅");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mega-card p-10 mega-hover mega-glow nusantara-glow">
      {/* SIMPLIFIED FORM HEADER */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow">
          <span className="text-3xl">💬</span>
        </div>
        <h3 className="mega-title text-3xl mb-4">Kirim Pesan Cepat</h3>
        <p className="mega-text text-gray-300 text-lg">Sampaikan kebutuhan kamu, kami siap membantu!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* BASIC INFO - SIMPLIFIED */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="nama" className="mega-text text-white font-bold text-lg">
              Nama Lengkap *
            </Label>
            <Input
              id="nama"
              type="text"
              value={formData.nama}
              onChange={(e) => handleChange("nama", e.target.value)}
              className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
              placeholder="Masukkan nama kamu"
              required
            />
          </div>
          <div>
            <Label htmlFor="whatsapp" className="mega-text text-white font-bold text-lg">
              WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => handleChange("whatsapp", e.target.value)}
              className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
              placeholder="08123456789"
              required
            />
          </div>
        </div>

        {/* MESSAGE TYPE - SIMPLIFIED */}
        <div>
          <Label className="mega-text text-white font-bold text-lg">Keperluan *</Label>
          <Select onValueChange={(value) => handleChange("jenispesan", value)}>
            <SelectTrigger className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2">
              <SelectValue placeholder="Pilih keperluan kamu" />
            </SelectTrigger>
            <SelectContent className="mega-card bg-slate-800 border-2 border-gray-600">
              <SelectItem value="berlangganan" className="mega-text text-white font-bold">
                🏠 Berlangganan Baru
              </SelectItem>
              <SelectItem value="complain" className="mega-text text-white font-bold">
                ⚔️ Komplain/Gangguan
              </SelectItem>
              <SelectItem value="kontak" className="mega-text text-white font-bold">
                💬 Tanya-tanya
              </SelectItem>
              <SelectItem value="upgrade" className="mega-text text-white font-bold">
                👑 Upgrade Paket
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* MESSAGE */}
        <div>
          <Label htmlFor="pesan" className="mega-text text-white font-bold text-lg">
            Pesan Kamu *
          </Label>
          <Textarea
            id="pesan"
            value={formData.pesan}
            onChange={(e) => handleChange("pesan", e.target.value)}
            className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
            placeholder="Tulis pesan kamu di sini..."
            rows={5}
            required
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center">
          <Button
            type="submit"
            className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4 mx-auto"
          >
            <Send className="h-8 w-8" />
            <span>Kirim Pesan</span>
            <Sparkles className="h-8 w-8" />
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <div className="mega-card p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/30">
          <p className="mega-text text-gray-300 text-lg font-bold">
            Tim kami akan merespon dalam <span className="text-orange-400 font-black">1-2 jam</span>! 🦅⚡
          </p>
        </div>
      </div>
    </div>
  );
}
