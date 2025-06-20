import { Home, Building, Network, Wrench, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "orange" | "blue" | "green" | "purple" | "pink";
}

export interface ServicesSectionConfig {
  sectionId: string;
  title: string;
  subtitle: string;
  services: Service[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    targetSection: string;
  };
  backgroundElements: {
    topLeft: string;
    bottomRight: string;
  };
}

export const servicesConfig: ServicesSectionConfig = {
  sectionId: "services",
  title: "🛡️ KEAHLIAN JAWARA 🛡️",
  subtitle: "Layanan lengkap untuk menaklukkan semua tantangan digital!",
  services: [
    {
      icon: Home,
      title: "🏠 Benteng Digital Rumah",
      description: "Koneksi super ngebut buat streaming, gaming, dan WFH tanpa lag. Bikin rumah jadi istana digital!",
      features: ["Unlimited seperti lautan", "Kecepatan stabil kayak gunung", "Gratis instalasi", "Penjaga 24/7"],
      color: "orange",
    },
    {
      icon: Building,
      title: "🏢 Kerajaan Bisnis Digital",
      description: "Solusi internet enterprise dengan bandwidth dedicated. Bikin bisnis makin jaya dan berkuasa!",
      features: [
        "Bandwidth khusus raja",
        "SLA 99.9% seperti janji ksatria",
        "Support prioritas",
        "IP tetap seperti tahta",
      ],
      color: "blue",
    },
    {
      icon: Network,
      title: "🤝 Jaringan Desa Digital",
      description: "Paket khusus untuk komunitas. Satu koneksi untuk semua, gotong royong internet!",
      features: ["Harga bersahabat", "Sistem manajemen keren", "Pembayaran otomatis", "Awasi terus 24/7"],
      color: "green",
    },
    {
      icon: Wrench,
      title: "🛠️ Bangun Jaringan Impian",
      description: "Jasa instalasi jaringan komputer dan WiFi. Dari gubuk sampai istana, kami siap membangun!",
      features: ["Survey gratis", "Pemasangan rapi", "Testing sakti", "Garansi setahun"],
      color: "purple",
    },
    {
      icon: Headphones,
      title: "📞 Garda Depan Support",
      description: "Tim teknis siap membantu 24/7. Ada masalah? Kami datang secepat kilat!",
      features: ["Respon kilat", "Bantuan jarak jauh", "Servis di tempat", "Jaga-jaga terus"],
      color: "pink",
    },
  ],
  cta: {
    title: "💬 Butuh Konsultasi Gratis? 💬",
    description:
      "Gak yakin paket mana yang cocok? Tim ahli kami siap bantu kamu pilih solusi internet terbaik sesuai kebutuhan dan budget!",
    buttonText: "🚀 Konsultasi Sekarang 🚀",
    targetSection: "contact",
  },
  backgroundElements: {
    topLeft: "⚔️",
    bottomRight: "🏛️",
  },
};
