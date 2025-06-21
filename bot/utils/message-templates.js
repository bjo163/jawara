// Message Templates for Jawara-Net WhatsApp Bot
// Template pesan tersentralisasi untuk konsistensi

const config = require('../config/bot-config');

class MessageTemplates {
  // Welcome & Menu Messages
  static getWelcomeMessage(customerName = '') {
    const greeting = customerName ? `Halo ${customerName}!` : 'Halo!';
    return `🏛️ *Selamat datang di Jawara-Net!*

${greeting} Saya adalah asisten virtual Jawara-Net, siap membantu Anda 24/7.

🚀 *Layanan yang bisa saya bantu:*
👑 Info paket internet
⚡ Speed test & troubleshooting  
📞 Informasi kontak
🗡️ Proses berlangganan
❓ FAQ & panduan
💳 Status pembayaran

Ketik *menu* untuk pilihan lengkap atau langsung tanyakan yang Anda butuhkan!

🌐 Website: ${config.website.baseUrl}`;
  }

  static getMainMenu() {
    return `📋 *MENU UTAMA JAWARA-NET*

Silakan pilih menu yang Anda butuhkan:

1️⃣ *Paket Internet*
   📋 Lihat semua paket dan harga

2️⃣ *Berlangganan*
   🗡️ Cara daftar berlangganan baru

3️⃣ *Speed Test*
   ⚡ Test kecepatan internet Anda

4️⃣ *Coverage Area*
   📍 Cek area jangkauan

5️⃣ *Customer Service*
   📞 Hubungi tim support

6️⃣ *FAQ*
   ❓ Pertanyaan yang sering ditanyakan

7️⃣ *Status Pembayaran*
   💳 Cek tagihan dan pembayaran

8️⃣ *Bantuan Teknis*
   🔧 Troubleshooting masalah

Ketik *angka* atau *nama menu* yang diinginkan.
Contoh: ketik "1" atau "paket"`;
  }

  // Package Information
  static getPackageInfo() {
    return `👑 *PAKET INTERNET JAWARA-NET*

🚀 *PAKET RUMAHAN:*

⚡ *Jagoan 30 Mbps*
• Kecepatan: Up to 30 Mbps
• Harga: Rp 299.000/bulan
• Cocok untuk: Browsing, streaming HD

⚡ *Jagoan 50 Mbps*
• Kecepatan: Up to 50 Mbps  
• Harga: Rp 399.000/bulan
• Cocok untuk: Work from home, gaming

⚡ *Sultan 100 Mbps*
• Kecepatan: Up to 100 Mbps
• Harga: Rp 599.000/bulan
• Cocok untuk: Keluarga besar, streaming 4K

⚡ *Emperor 200 Mbps*
• Kecepatan: Up to 200 Mbps
• Harga: Rp 899.000/bulan
• Cocok untuk: Bisnis kecil, gaming pro

🎯 *KEUNGGULAN:*
✅ No FUP (Fair Usage Policy)
✅ Gratis instalasi
✅ Customer service 24/7
✅ Teknologi fiber optic

Ingin berlangganan? Ketik *"berlangganan"*
Lihat detail lengkap: ${config.website.baseUrl}/paket`;
  }

  // Subscription Process
  static getSubscriptionInfo() {
    return `🗡️ *CARA BERLANGGANAN JAWARA-NET*

📝 *Langkah Mudah Berlangganan:*

1️⃣ *Cek Coverage*
   Pastikan alamat Anda masuk area jangkauan

2️⃣ *Pilih Paket*  
   Tentukan paket sesuai kebutuhan

3️⃣ *Isi Formulir*
   Lengkapi data diri dan alamat

4️⃣ *Survey Lokasi*
   Tim kami akan survey lokasi (GRATIS)

5️⃣ *Instalasi*
   Pemasangan perangkat (GRATIS)

6️⃣ *Aktivasi*
   Internet siap digunakan!

💰 *Metode Pembayaran:*
• Transfer bank
• Virtual account
• E-wallet (OVO, GoPay, DANA)
• Kartu kredit

📞 *Butuh bantuan? Hubungi:*
WhatsApp: +62 812-9529-5734
Telepon: (021) 555-0123

🌐 Daftar online: ${config.website.baseUrl}/berlangganan

Ketik *"paket"* untuk lihat pilihan paket
Ketik *"coverage"* untuk cek area jangkauan`;
  }

  // Speed Test
  static getSpeedTestInfo() {
    return `⚡ *SPEED TEST JAWARA-NET*

🚀 *Test kecepatan internet Anda:*

1️⃣ *Website Speed Test*
   ${config.website.baseUrl}/speedtest
   
2️⃣ *Speed Test Apps*
   • Speedtest by Ookla
   • Fast.com by Netflix
   • Google Speed Test

📊 *Tips untuk hasil akurat:*
✅ Tutup aplikasi lain
✅ Gunakan koneksi WiFi
✅ Test di berbagai waktu
✅ Restart router jika perlu

🔧 *Kecepatan lambat?*
• Restart modem/router
• Cek kabel jaringan
• Update device driver
• Scan virus/malware

❗ *Jika masih bermasalah:*
Hubungi customer service untuk bantuan teknis.

📞 Support: +62 812-9529-5734
⏰ 24/7 siap membantu

Ketik *"teknis"* untuk troubleshooting lebih lanjut`;
  }

  // Coverage Area
  static getCoverageInfo() {
    return `📍 *AREA JANGKAUAN JAWARA-NET*

🗺️ *Wilayah yang sudah terjangkau:*

🏙️ *JAKARTA:*
• Jakarta Pusat ✅
• Jakarta Selatan ✅ 
• Jakarta Barat ✅
• Jakarta Utara ✅
• Jakarta Timur ✅

🏘️ *TANGERANG:*
• Tangerang Kota ✅
• Tangerang Selatan ✅
• Kabupaten Tangerang (sebagian) ✅

🏘️ *BEKASI:*
• Bekasi Kota ✅
• Kabupaten Bekasi (sebagian) ✅

🏘️ *DEPOK:*
• Seluruh Depok ✅

🏘️ *BOGOR:*
• Bogor Kota ✅
• Kabupaten Bogor (sebagian) ✅

📍 *Cek alamat spesifik:*
${config.website.baseUrl}/berlangganan

💬 *Alamat belum terjangkau?*
Tim kami terus ekspansi. Daftarkan alamat Anda untuk notifikasi ketika sudah available.

📞 Info coverage: +62 812-9529-5734

Ketik *"berlangganan"* untuk lanjut mendaftar`;
  }

  // FAQ
  static getFAQ() {
    return `❓ *FAQ JAWARA-NET*

🔍 *Pertanyaan Yang Sering Ditanyakan:*

1️⃣ *Berapa biaya instalasi?*
   GRATIS! Tidak ada biaya instalasi dan survey

2️⃣ *Ada kontrak minimal?*
   Minimum kontrak 12 bulan

3️⃣ *Bagaimana cara pembayaran?*
   Bisa transfer, VA, e-wallet, kartu kredit

4️⃣ *Berapa lama proses instalasi?*
   2-7 hari kerja setelah survey

5️⃣ *Apa itu FUP?*
   Kami NO FUP! Unlimited tanpa batasan

6️⃣ *Jika ada gangguan?*
   Customer service 24/7 siap membantu

7️⃣ *Bisa pindah alamat?*
   Bisa, dengan syarat dan ketentuan

8️⃣ *Cara upgrade/downgrade paket?*
   Hubungi customer service

📱 *Masih ada pertanyaan?*
WhatsApp: +62 812-9529-5734
Website FAQ: ${config.website.baseUrl}/faq

Ketik nomor pertanyaan untuk detail lengkap
Contoh: ketik "1" untuk info biaya instalasi`;
  }

  // Technical Support
  static getTechnicalSupport() {
    return `🔧 *BANTUAN TEKNIS JAWARA-NET*

⚡ *Troubleshooting Cepat:*

1️⃣ *Internet Lambat*
   • Restart modem (cabut 30 detik)
   • Cek kabel LAN
   • Test speed di ${config.website.baseUrl}/speedtest

2️⃣ *Tidak Bisa Connect*
   • Cek lampu indikator modem
   • Restart perangkat WiFi
   • Cek pengaturan WiFi

3️⃣ *WiFi Tidak Muncul*
   • Reset router (tekan tombol reset 10 detik)
   • Cek power adapter
   • Periksa posisi router

4️⃣ *Sering Disconnect*
   • Update driver network
   • Cek interferensi sinyal
   • Ganti channel WiFi

🆘 *Masih bermasalah?*
Tim teknis kami siap membantu:

📞 Hotline: (021) 555-0123
📱 WhatsApp: +62 812-9529-5734
⏰ Support 24/7

💡 *Tips Optimal:*
• Posisi router di tengah rumah
• Jauhkan dari microwave/bluetooth
• Update firmware rutin
• Gunakan password kuat

Ketik *"cs"* untuk hubungi customer service langsung`;
  }

  // Payment Status
  static getPaymentInfo() {
    return `💳 *STATUS PEMBAYARAN*

📊 *Cek tagihan dan pembayaran:*

🔐 *Login Portal Pelanggan:*
${config.website.baseUrl}/login/pelanggan

📱 *Atau hubungi langsung:*
WhatsApp: +62 812-9529-5734
Telepon: (021) 555-0123

💰 *Metode Pembayaran:*
• Transfer Bank (BCA, Mandiri, BNI, BRI)
• Virtual Account
• E-Wallet (OVO, GoPay, DANA, ShopeePay)
• Kartu Kredit (Visa, Mastercard)
• Minimarket (Alfamart, Indomaret)

⏰ *Jam Cut-off Pembayaran:*
• Transfer: 21:00 WIB
• VA & E-Wallet: 23:00 WIB
• Minimarket: 22:00 WIB

📅 *Jatuh Tempo:*
Pembayaran paling lambat tanggal 25 setiap bulan

⚠️ *Telat bayar?*
Grace period 7 hari setelah jatuh tempo

Butuh bantuan pembayaran? Ketik *"cs"*`;
  }

  // Business Hours Check
  static getBusinessHoursMessage() {
    return `🕐 *DILUAR JAM OPERASIONAL*

Maaf, saat ini diluar jam operasional kami.

⏰ *Jam Operasional Customer Service:*
📅 Senin - Jumat: 08:00 - 22:00 WIB
📅 Sabtu: 08:00 - 20:00 WIB  
📅 Minggu: 09:00 - 18:00 WIB

📝 Pesan Anda sudah kami terima dan akan dibalas pada jam operasional.

🆘 *Bantuan Darurat:*
Untuk gangguan teknis mendesak:
📞 Emergency: (021) 555-0123
📱 WhatsApp: +62 812-9529-5734

💬 *Sementara itu:*
• Lihat FAQ: ${config.website.baseUrl}/faq
• Cek status: ${config.website.baseUrl}/login/pelanggan
• Test speed: ${config.website.baseUrl}/speedtest

Terima kasih atas pengertian Anda! 🙏`;
  }

  // Human Handoff
  static getHumanHandoffMessage() {
    return `👤 *MENGHUBUNGKAN KE CUSTOMER SERVICE*

Baik, saya akan menghubungkan Anda dengan tim customer service kami yang akan membantu lebih lanjut.

⏳ *Mohon tunggu sebentar...*

📞 *Atau hubungi langsung:*
• Telepon: (021) 555-0123
• WhatsApp: +62 812-9529-5734
• Email: support@jawara-net.com

⏰ *Jam Operasional:*
Senin-Jumat: 08:00-22:00 WIB
Sabtu: 08:00-20:00 WIB
Minggu: 09:00-18:00 WIB

🎯 *Untuk respon lebih cepat, siapkan:*
• Nomor pelanggan (jika sudah berlangganan)
• Alamat instalasi
• Deskripsi masalah yang detail

Tim kami akan segera membantu Anda! 🚀`;
  }

  // Error Message
  static getErrorMessage() {
    return `❌ *MAAF, TERJADI KESALAHAN*

Mohon maaf, terjadi kesalahan dalam memproses pesan Anda.

🔄 *Silakan coba:*
• Ketik *"menu"* untuk kembali ke menu utama
• Ulangi permintaan Anda
• Hubungi customer service jika masalah berlanjut

📞 *Customer Service:*
• WhatsApp: +62 812-9529-5734
• Telepon: (021) 555-0123
• Email: support@jawara-net.com

⏰ Tersedia 24/7 untuk membantu Anda!

Terima kasih atas pengertian Anda. 🙏`;
  }

  // Contact Information
  static getContactInfo() {
    return `📞 *KONTAK JAWARA-NET*

🏢 *Kantor Pusat:*
Jl. Sudirman No. 123, Blok M
Jakarta Selatan 12190

📱 *Customer Service:*
• WhatsApp: +62 812-9529-5734
• Telepon: (021) 555-0123
• SMS: +62 812-9529-5734

💻 *Online:*
• Website: ${config.website.baseUrl}
• Email: info@jawara-net.com
• Support: support@jawara-net.com

📅 *Jam Operasional:*
• Senin-Jumat: 08:00-22:00 WIB
• Sabtu: 08:00-20:00 WIB
• Minggu: 09:00-18:00 WIB

🌐 *Media Sosial:*
• Facebook: @JawaraNetID
• Instagram: @jawara.net.id
• Twitter: @JawaraNetID
• YouTube: Jawara-Net Official

📍 *Lokasi Kantor Cabang:*
Ketik *"cabang"* untuk info lengkap

Butuh bantuan? Langsung chat atau telepon! 📞`;
  }
}

module.exports = MessageTemplates;
