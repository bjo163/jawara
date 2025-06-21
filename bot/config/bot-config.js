// WhatsApp Bot Configuration for Jawara-Net
// Konfigurasi utama untuk WhatsApp bot

module.exports = {
  // Bot Basic Settings
  botName: 'Jawara-Net Assistant',
  botVersion: '1.0.0',
  
  // WhatsApp Settings
  whatsapp: {
    sessionName: 'jawara-net-session',
    qrTimeout: 60000, // 60 seconds
    authStrategy: 'LocalAuth',
    restartOnAuthFail: true,
    puppeteerOptions: {
      headless: process.env.NODE_ENV === 'production',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--no-first-run',
        '--disable-default-apps'
      ]
    }
  },

  // Business Hours
  businessHours: {
    enabled: true,
    timezone: 'Asia/Jakarta',
    schedule: {
      monday: { start: '08:00', end: '22:00', enabled: true },
      tuesday: { start: '08:00', end: '22:00', enabled: true },
      wednesday: { start: '08:00', end: '22:00', enabled: true },
      thursday: { start: '08:00', end: '22:00', enabled: true },
      friday: { start: '08:00', end: '22:00', enabled: true },
      saturday: { start: '08:00', end: '20:00', enabled: true },
      sunday: { start: '09:00', end: '18:00', enabled: true }
    }
  },

  // Auto Reply Settings
  autoReply: {
    enabled: true,
    delay: 1000, // 1 second delay before reply
    maxMessagesPerMinute: 10,
    welcomeMessage: true,
    faqEnabled: true,
    humanHandoffKeywords: ['admin', 'manusia', 'operator', 'komplain', 'masalah teknis']
  },

  // Admin Settings
  admin: {
    numbers: [
      '6281295295734@c.us', // Admin utama Jawara-Net
    ],
    allowBroadcast: true,
    allowGroupManagement: true
  },

  // Customer Service
  customerService: {
    enabled: true,
    transferKeywords: ['bantuan', 'help', 'komplain', 'masalah', 'gangguan'],
    workingHours: true, // Follow business hours
    autoTransferAfterAttempts: 3
  },

  // Website Integration
  website: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://jawara-net.com',
    apiEndpoint: '/api/whatsapp',
    webhookSecret: process.env.WHATSAPP_WEBHOOK_SECRET || 'jawara-net-webhook-secret'
  },

  // Message Templates
  templates: {
    welcome: '🏛️ *Selamat datang di Jawara-Net!*\n\nHalo! Saya adalah asisten virtual Jawara-Net. Saya siap membantu Anda dengan:\n\n👑 Info paket internet\n⚡ Speed test\n📞 Informasi kontak\n🗡️ Proses berlangganan\n❓ FAQ\n\nKetik *menu* untuk melihat pilihan lengkap atau langsung tanyakan yang Anda butuhkan!',
    
    menu: '📋 *MENU JAWARA-NET*\n\nPilih menu yang Anda butuhkan:\n\n1️⃣ *Paket Internet* - Info paket dan harga\n2️⃣ *Berlangganan* - Cara daftar berlangganan\n3️⃣ *Speed Test* - Test kecepatan internet\n4️⃣ *Coverage* - Area jangkauan\n5️⃣ *Kontak* - Hubungi customer service\n6️⃣ *FAQ* - Pertanyaan umum\n7️⃣ *Status Pembayaran* - Cek tagihan\n8️⃣ *Bantuan Teknis* - Troubleshooting\n\nKetik angka atau nama menu yang diinginkan.',
    
    notInBusinessHours: '🕐 *Diluar Jam Operasional*\n\nMaaf, saat ini diluar jam operasional kami.\n\n⏰ *Jam Operasional:*\nSenin-Jumat: 08:00 - 22:00\nSabtu: 08:00 - 20:00\nMinggu: 09:00 - 18:00\n\nPesan Anda sudah kami terima dan akan dibalas pada jam operasional. Untuk bantuan darurat, silakan hubungi emergency hotline.',
    
    humanHandoff: '👤 *Menghubungkan ke Customer Service*\n\nBaik, saya akan menghubungkan Anda dengan customer service kami. Mohon tunggu sebentar...\n\nJika mendesak, Anda dapat langsung menghubungi:\n📞 (021) 555-0123\n📱 WhatsApp: +62 812-9529-5734',
    
    error: '❌ *Maaf, terjadi kesalahan*\n\nMohon maaf, terjadi kesalahan dalam memproses pesan Anda. Silakan coba lagi atau hubungi customer service kami.\n\n📞 (021) 555-0123\n📱 WhatsApp: +62 812-9529-5734'
  },

  // Logging
  logging: {
    enabled: true,
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    file: './logs/whatsapp-bot.log',
    maxFiles: 10,
    maxSize: '10m'
  }
};
