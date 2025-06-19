"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Crown, Sparkles, Sword, Shield } from "lucide-react";

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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Pesan berhasil dikirim! Tim kami akan segera menghubungi kamu seperti Garuda yang menyambar! 🦅");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mega-card p-10 mega-hover mega-glow nusantara-glow">
      {/* EPIC FORM HEADER */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
          <span className="text-4xl">💬</span>
        </div>
        <div className="relative inline-block mb-6">
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 p-8 rounded-2xl shadow-2xl nusantara-glow border-4 border-blue-300">
            <h3 className="text-3xl font-black text-white drop-shadow-lg">💬 KIRIM PESAN JAGOAN 💬</h3>
          </div>
          <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-spin" />
          <Crown className="absolute -top-2 -left-2 h-6 w-6 text-yellow-500 indonesian-wave" />
          <Sword className="absolute -bottom-2 -right-2 h-6 w-6 text-red-500 particle-float" />
        </div>
        <p className="mega-text text-gray-300 text-lg leading-relaxed">
          Sampaikan pesan kamu kepada <span className="text-blue-400 font-black">Tim Ahli Jawara-Net</span>! Kami siap
          membantu seperti <span className="text-purple-400 font-black">Penasihat Kerajaan</span>! 🏛️
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* EPIC BASIC INFO */}
        <div className="mega-card p-6 bg-slate-800/50 border-2 border-blue-500/30">
          <h4 className="mega-text font-black text-blue-400 text-xl mb-6 flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>👤 Info Dasar Jagoan</span>
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nama" className="mega-text text-white font-bold text-lg">
                Nama Lengkap Jagoan *
              </Label>
              <Input
                id="nama"
                type="text"
                value={formData.nama}
                onChange={(e) => handleChange("nama", e.target.value)}
                className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
                placeholder="Masukkan nama lengkap kamu"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mega-text text-white font-bold text-lg">
                Email Digital *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
                placeholder="nama@email.com"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="whatsapp" className="mega-text text-white font-bold text-lg">
              WhatsApp Jagoan *
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

        {/* EPIC MESSAGE TYPE */}
        <div className="mega-card p-6 bg-slate-800/50 border-2 border-orange-500/30">
          <h4 className="mega-text font-black text-orange-400 text-xl mb-6 flex items-center space-x-2">
            <Sword className="h-6 w-6" />
            <span>⚔️ Jenis Misi</span>
          </h4>
          <Label className="mega-text text-white font-bold text-lg">Pilih Jenis Pesan *</Label>
          <Select onValueChange={(value) => handleChange("jenispesan", value)}>
            <SelectTrigger className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2">
              <SelectValue placeholder="Pilih jenis misi kamu" />
            </SelectTrigger>
            <SelectContent className="mega-card bg-slate-800 border-2 border-gray-600">
              <SelectItem value="berlangganan" className="mega-text text-white font-bold">
                🏠 Berlangganan Baru - Gabung Kerajaan
              </SelectItem>
              <SelectItem value="complain" className="mega-text text-white font-bold">
                ⚔️ Komplain/Gangguan - Butuh Bantuan
              </SelectItem>
              <SelectItem value="kontak" className="mega-text text-white font-bold">
                💬 Sekadar Kontak/Tanya - Info Umum
              </SelectItem>
              <SelectItem value="upgrade" className="mega-text text-white font-bold">
                👑 Upgrade/Downgrade Paket - Naik Level
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* EPIC DYNAMIC FIELDS */}
        {formData.jenispesan === "berlangganan" && (
          <div className="mega-card p-6 bg-green-500/20 border-2 border-green-500/30 mega-glow">
            <h4 className="mega-text font-black text-green-400 text-xl mb-6 flex items-center space-x-2">
              <Crown className="h-6 w-6" />
              <span>🏠 Info Berlangganan Jagoan</span>
            </h4>
            <div className="space-y-6">
              <div>
                <Label htmlFor="alamat" className="mega-text text-white font-bold text-lg">
                  Alamat Lengkap Istana *
                </Label>
                <Textarea
                  id="alamat"
                  value={formData.alamat}
                  onChange={(e) => handleChange("alamat", e.target.value)}
                  className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
                  placeholder="Alamat lengkap untuk instalasi internet jagoan"
                  rows={3}
                />
              </div>
              <div>
                <Label className="mega-text text-white font-bold text-lg">Pilihan Senjata Internet</Label>
                <Select onValueChange={(value) => handleChange("paket", value)}>
                  <SelectTrigger className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2">
                    <SelectValue placeholder="Pilih paket yang diminati" />
                  </SelectTrigger>
                  <SelectContent className="mega-card bg-slate-800 border-2 border-gray-600">
                    <SelectItem value="jagoan-neon" className="mega-text text-white font-bold">
                      🌟 Jagoan Neon - 10 Mbps
                    </SelectItem>
                    <SelectItem value="mandor-sakti" className="mega-text text-white font-bold">
                      🔨 Mandor Sakti - 25 Mbps
                    </SelectItem>
                    <SelectItem value="wiro-sableng" className="mega-text text-white font-bold">
                      ⚔️ Wiro Sableng - 35 Mbps
                    </SelectItem>
                    <SelectItem value="sultan" className="mega-text text-white font-bold">
                      👑 Sultan - 50 Mbps
                    </SelectItem>
                    <SelectItem value="startup-warrior" className="mega-text text-white font-bold">
                      🚀 Startup Warrior - 50 Mbps Bisnis
                    </SelectItem>
                    <SelectItem value="corporate-beast" className="mega-text text-white font-bold">
                      🏢 Corporate Beast - 100 Mbps Bisnis
                    </SelectItem>
                    <SelectItem value="enterprise-king" className="mega-text text-white font-bold">
                      👑 Enterprise King - 200 Mbps Bisnis
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {formData.jenispesan === "complain" && (
          <div className="mega-card p-6 bg-red-500/20 border-2 border-red-500/30 mega-glow">
            <h4 className="mega-text font-black text-red-400 text-xl mb-6 flex items-center space-x-2">
              <Sword className="h-6 w-6" />
              <span>⚔️ Info Komplain Jagoan</span>
            </h4>
            <div className="space-y-6">
              <div>
                <Label htmlFor="idpelanggan" className="mega-text text-white font-bold text-lg">
                  ID Pelanggan Jagoan
                </Label>
                <Input
                  id="idpelanggan"
                  type="text"
                  value={formData.idpelanggan}
                  onChange={(e) => handleChange("idpelanggan", e.target.value)}
                  className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
                  placeholder="Contoh: JN001234"
                />
              </div>
              <div>
                <Label htmlFor="lokasi" className="mega-text text-white font-bold text-lg">
                  Lokasi Gangguan
                </Label>
                <Input
                  id="lokasi"
                  type="text"
                  value={formData.lokasi}
                  onChange={(e) => handleChange("lokasi", e.target.value)}
                  className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
                  placeholder="Alamat lokasi bermasalah"
                />
              </div>
            </div>
          </div>
        )}

        {/* EPIC MESSAGE */}
        <div className="mega-card p-6 bg-slate-800/50 border-2 border-purple-500/30">
          <h4 className="mega-text font-black text-purple-400 text-xl mb-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <span>💬 Pesan Jagoan</span>
          </h4>
          <Label htmlFor="pesan" className="mega-text text-white font-bold text-lg">
            Tulis Pesan Kamu *
          </Label>
          <Textarea
            id="pesan"
            value={formData.pesan}
            onChange={(e) => handleChange("pesan", e.target.value)}
            className="mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-lg mt-2"
            placeholder="Tulis pesan kamu di sini dengan detail..."
            rows={5}
            required
          />
        </div>

        {/* EPIC SUBMIT BUTTON */}
        <div className="text-center">
          <Button
            type="submit"
            className="mega-button px-16 py-8 text-3xl font-black text-white mega-text mega-hover flex items-center space-x-6 mx-auto"
          >
            <Crown className="h-10 w-10" />
            <span>🚀 KIRIM PESAN JAGOAN 🚀</span>
            <Sparkles className="h-10 w-10" />
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <div className="mega-card p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/30">
          <p className="mega-text text-gray-300 text-lg font-bold">
            Tim kami akan merespon dalam <span className="text-orange-400 font-black">1-2 jam kerja</span>. Untuk
            urgent, langsung chat <span className="text-green-400 font-black">WhatsApp</span> ya! 🦅⚡
          </p>
        </div>
      </div>
    </div>
  );
}
