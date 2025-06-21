"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Crown, Sparkles, Sword, Shield, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { useFormValidation } from "@/hooks/use-form-validation";
import { useFormSubmission } from "@/hooks/use-api";
import { useMobileFormOptimization } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const { getInputProps } = useMobileFormOptimization();

  const {
    formState,
    updateField,
    handleFieldBlur,
    handleEmailValidation,
    handleSubmit,
    resetForm,
    getFormData,
    shouldShowError,
    isFormValid,
    hasSubmitted,
  } = useFormValidation({
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
  const {
    handleSubmit: submitForm,
    submitting: loading,
    submitError,
    submitSuccess: success,
  } = useFormSubmission(async (data: Record<string, string>) => {
    // Here we would send data to API
    console.log("Submitting form data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { success: true, message: "Form submitted successfully" };
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = handleSubmit();
    if (!validationResult.isValid) {
      return;
    }

    try {
      const formData = getFormData();
      await submitForm(formData);

      // Reset form on successful submission
      resetForm();
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  const getFieldIcon = (fieldName: string) => {
    const field = formState[fieldName];
    if (!field || !field.isTouched) return null;

    if (field.error) {
      return <XCircle className="h-5 w-5 text-red-500" />;
    }

    if (field.warning) {
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    }

    if (field.isValid && field.value) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    }

    return null;
  };

  const getFieldClassName = (fieldName: string, baseClassName: string) => {
    const field = formState[fieldName];
    if (!field || !field.isTouched) return baseClassName;

    return cn(baseClassName, {
      "border-red-500 bg-red-500/10": field.error,
      "border-yellow-500 bg-yellow-500/10": field.warning && !field.error,
      "border-green-500 bg-green-500/10": field.isValid && field.value && !field.error && !field.warning,
    });
  };

  const renderFieldError = (fieldName: string) => {
    if (!shouldShowError(fieldName)) return null;

    const field = formState[fieldName];
    const message = field?.error || field?.warning;
    if (!message) return null;

    return (
      <div
        className={cn("flex items-center space-x-2 mt-2 text-sm", field?.error ? "text-red-400" : "text-yellow-400")}
      >
        {field?.error ? <XCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
        <span>{message}</span>
      </div>
    );
  };
  return (
    <div className="mega-card p-6 sm:p-8 lg:p-10 mega-hover mega-glow nusantara-glow">
      {/* EPIC FORM HEADER */}
      <div className="text-center mb-8 lg:mb-10">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
          <span className="text-2xl sm:text-4xl">💬</span>
        </div>
        <div className="relative inline-block mb-6">
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl nusantara-glow border-4 border-blue-300">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white drop-shadow-lg">
              💬 KIRIM PESAN JAGOAN 💬
            </h3>
          </div>
          <Sparkles className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 animate-spin" />
          <Crown className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 indonesian-wave" />
          <Sword className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-5 w-5 sm:h-6 sm:w-6 text-red-500 particle-float" />
        </div>
        <p className="mega-text text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed px-4">
          Sampaikan pesan kamu kepada <span className="text-blue-400 font-black">Tim Ahli Jawara-Net</span>! Kami siap
          membantu seperti <span className="text-purple-400 font-black">Penasihat Kerajaan</span>! 🏛️
        </p>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <Alert className="mb-6 border-green-500 bg-green-500/20">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <AlertDescription className="text-green-400 font-bold">
            Pesan berhasil dikirim! Tim kami akan segera menghubungi kamu seperti Garuda yang menyambar! 🦅
          </AlertDescription>
        </Alert>
      )}

      {submitError && (
        <Alert className="mb-6 border-red-500 bg-red-500/20">
          <XCircle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-400 font-bold">{submitError}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleFormSubmit} className="space-y-6 lg:space-y-8">
        {/* EPIC BASIC INFO */}
        <div className="mega-card p-4 sm:p-6 bg-slate-800/50 border-2 border-blue-500/30">
          <h4 className="mega-text font-black text-blue-400 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center space-x-2">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>👤 Info Dasar Jagoan</span>
          </h4>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="nama"
                className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
              >
                <span>Nama Lengkap Jagoan *</span>
                {getFieldIcon("nama")}
              </Label>{" "}
              <Input
                id="nama"
                type="text"
                value={formState.nama?.value || ""}
                onChange={(e) => updateField("nama", e.target.value)}
                onBlur={() => handleFieldBlur("nama")}
                className={getFieldClassName(
                  "nama",
                  "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                )}
                placeholder="Masukkan nama lengkap kamu"
                disabled={loading}
                {...getInputProps("text")}
              />
              {renderFieldError("nama")}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
              >
                <span>Email Digital *</span>
                {getFieldIcon("email")}
              </Label>{" "}
              <Input
                id="email"
                type="email"
                value={formState.email?.value || ""}
                onChange={(e) => {
                  updateField("email", e.target.value);
                  if (e.target.value) {
                    handleEmailValidation(e.target.value);
                  }
                }}
                onBlur={() => handleFieldBlur("email")}
                className={getFieldClassName(
                  "email",
                  "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                )}
                placeholder="nama@email.com"
                disabled={loading}
                {...getInputProps("email")}
              />
              {renderFieldError("email")}
            </div>
          </div>

          <div className="mt-4 sm:mt-6 space-y-2">
            <Label
              htmlFor="whatsapp"
              className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
            >
              <span>WhatsApp Jagoan *</span>
              {getFieldIcon("whatsapp")}
            </Label>{" "}
            <Input
              id="whatsapp"
              type="tel"
              value={formState.whatsapp?.value || ""}
              onChange={(e) => updateField("whatsapp", e.target.value)}
              onBlur={() => handleFieldBlur("whatsapp")}
              className={getFieldClassName(
                "whatsapp",
                "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
              )}
              placeholder="08123456789 (akan diformat otomatis)"
              disabled={loading}
              {...getInputProps("tel")}
            />
            {renderFieldError("whatsapp")}
          </div>
        </div>

        {/* EPIC MESSAGE TYPE */}
        <div className="mega-card p-4 sm:p-6 bg-slate-800/50 border-2 border-orange-500/30">
          <h4 className="mega-text font-black text-orange-400 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center space-x-2">
            <Sword className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>⚔️ Jenis Misi</span>
          </h4>

          <div className="space-y-2">
            <Label className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2">
              <span>Pilih Jenis Pesan *</span>
              {getFieldIcon("jenispesan")}
            </Label>
            <Select
              value={formState.jenispesan?.value || ""}
              onValueChange={(value) => updateField("jenispesan", value)}
              disabled={loading}
            >
              <SelectTrigger
                className={getFieldClassName(
                  "jenispesan",
                  "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                )}
              >
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
            {renderFieldError("jenispesan")}
          </div>
        </div>

        {/* CONDITIONAL FIELDS */}
        {formState.jenispesan?.value === "berlangganan" && (
          <div className="mega-card p-4 sm:p-6 bg-green-500/20 border-2 border-green-500/30 mega-glow">
            <h4 className="mega-text font-black text-green-400 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center space-x-2">
              <Crown className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>🏠 Info Berlangganan Jagoan</span>
            </h4>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="alamat"
                  className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
                >
                  <span>Alamat Lengkap Istana *</span>
                  {getFieldIcon("alamat")}
                </Label>
                <Textarea
                  id="alamat"
                  value={formState.alamat?.value || ""}
                  onChange={(e) => updateField("alamat", e.target.value)}
                  onBlur={() => handleFieldBlur("alamat")}
                  className={getFieldClassName(
                    "alamat",
                    "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                  )}
                  placeholder="Alamat lengkap untuk instalasi internet jagoan"
                  rows={3}
                  disabled={loading}
                />
                {renderFieldError("alamat")}
              </div>

              <div className="space-y-2">
                <Label className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2">
                  <span>Pilihan Senjata Internet</span>
                  {getFieldIcon("paket")}
                </Label>
                <Select
                  value={formState.paket?.value || ""}
                  onValueChange={(value) => updateField("paket", value)}
                  disabled={loading}
                >
                  <SelectTrigger
                    className={getFieldClassName(
                      "paket",
                      "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                    )}
                  >
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
                {renderFieldError("paket")}
              </div>
            </div>
          </div>
        )}

        {formState.jenispesan?.value === "complain" && (
          <div className="mega-card p-4 sm:p-6 bg-red-500/20 border-2 border-red-500/30 mega-glow">
            <h4 className="mega-text font-black text-red-400 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center space-x-2">
              <Sword className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>⚔️ Info Komplain Jagoan</span>
            </h4>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="idpelanggan"
                  className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
                >
                  <span>ID Pelanggan Jagoan</span>
                  {getFieldIcon("idpelanggan")}
                </Label>
                <Input
                  id="idpelanggan"
                  type="text"
                  value={formState.idpelanggan?.value || ""}
                  onChange={(e) => updateField("idpelanggan", e.target.value.toUpperCase())}
                  onBlur={() => handleFieldBlur("idpelanggan")}
                  className={getFieldClassName(
                    "idpelanggan",
                    "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                  )}
                  placeholder="Contoh: JN001234"
                  disabled={loading}
                />
                {renderFieldError("idpelanggan")}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="lokasi"
                  className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
                >
                  <span>Lokasi Gangguan</span>
                  {getFieldIcon("lokasi")}
                </Label>
                <Input
                  id="lokasi"
                  type="text"
                  value={formState.lokasi?.value || ""}
                  onChange={(e) => updateField("lokasi", e.target.value)}
                  onBlur={() => handleFieldBlur("lokasi")}
                  className={getFieldClassName(
                    "lokasi",
                    "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
                  )}
                  placeholder="Alamat lokasi bermasalah"
                  disabled={loading}
                />
                {renderFieldError("lokasi")}
              </div>
            </div>
          </div>
        )}

        {/* EPIC MESSAGE */}
        <div className="mega-card p-4 sm:p-6 bg-slate-800/50 border-2 border-purple-500/30">
          <h4 className="mega-text font-black text-purple-400 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center space-x-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>💬 Pesan Jagoan</span>
          </h4>

          <div className="space-y-2">
            <Label
              htmlFor="pesan"
              className="mega-text text-white font-bold text-sm sm:text-lg flex items-center space-x-2"
            >
              <span>Tulis Pesan Kamu *</span>
              {getFieldIcon("pesan")}
            </Label>
            <Textarea
              id="pesan"
              value={formState.pesan?.value || ""}
              onChange={(e) => updateField("pesan", e.target.value)}
              onBlur={() => handleFieldBlur("pesan")}
              className={getFieldClassName(
                "pesan",
                "mega-card bg-slate-700 border-2 border-gray-600 text-white mega-text font-bold text-sm sm:text-lg"
              )}
              placeholder="Tulis pesan kamu di sini dengan detail..."
              rows={5}
              disabled={loading}
            />
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>{formState.pesan?.value?.length || 0}/500 karakter</span>
              {renderFieldError("pesan")}
            </div>
          </div>
        </div>

        {/* EPIC SUBMIT BUTTON */}
        <div className="text-center">
          <Button
            type="submit"
            disabled={loading || (!isFormValid && hasSubmitted)}
            className="mega-button px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-2xl lg:text-3xl font-black text-white mega-text mega-hover flex items-center space-x-3 sm:space-x-4 lg:space-x-6 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Crown className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
            <span>{loading ? "⏳ MENGIRIM..." : "🚀 KIRIM PESAN JAGOAN 🚀"}</span>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          </Button>

          {hasSubmitted && !isFormValid && (
            <div className="mt-4 text-red-400 text-sm font-bold">
              Mohon perbaiki kesalahan di atas sebelum mengirim pesan
            </div>
          )}
        </div>
      </form>

      <div className="mt-6 lg:mt-8 text-center">
        <div className="mega-card p-4 sm:p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/30">
          <p className="mega-text text-gray-300 text-sm sm:text-lg font-bold">
            Tim kami akan merespon dalam <span className="text-orange-400 font-black">1-2 jam kerja</span>. Untuk
            urgent, langsung chat <span className="text-green-400 font-black">WhatsApp</span> ya! 🦅⚡
          </p>
        </div>
      </div>
    </div>
  );
}
