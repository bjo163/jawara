/**
 * ABOUT SECTION CONFIGURATION
 * ===========================
 *
 * Centralized about section content untuk aplikasi Jawara-Net.
 * Includes company info, mission, vision, features, dan fun facts.
 */

import { Target, Eye, Award, Users } from "lucide-react";

// Main section header
export const aboutHeader = {
  title: "🛡️ KISAH JAWARA-NET 🛡️",
  subtitle: "Penyedia internet yang memahami jiwa pejuang digital Nusantara",
};

// Company description & story
export const companyStory = {
  title: "⚔️ Siapa Jawara-Net? ⚔️",
  description: {
    main: "Kami adalah Penyedia Internet Nusantara yang memahami jiwa pejuang digital Indonesia. Dari yang gemar menonton drama Korea di Netflix sampai yang butuh koneksi stabil untuk membangun startup unicorn, semua mimpi digital kalian adalah misi kami!",
    secondary:
      "Dengan teknologi fiber optic terdepan dan tim support yang siap siaga seperti Penjaga Istana Merdeka, kami berkomitmen memberikan pengalaman internet yang lancar jaya tanpa hambatan.",
  },
};

// Mission & Vision
export const missionVision = [
  {
    id: "mission",
    icon: Target,
    iconGradient: "from-orange-500 via-red-500 to-pink-500",
    title: "🎯 Misi Kami",
    description:
      "Menghubungkan setiap sudut Nusantara dengan internet berkualitas tinggi yang terjangkau, dari Sabang sampai Merauke, dari desa hingga kota metropolitan.",
    animationDelay: "0.2s",
  },
  {
    id: "vision",
    icon: Eye,
    iconGradient: "from-blue-500 via-cyan-500 to-teal-500",
    title: "👁️ Visi Kami",
    description:
      "Menjadi provider internet terdepan yang menghubungkan setiap rumah, warung, dan UMKM dengan koneksi internet stabil seperti Jembatan Suramadu.",
    animationDelay: "0.4s",
  },
];

// Why Choose Us features
export const whyChooseUs = {
  title: "🏆 Kenapa Pilih Jawara-Net? 🏆",
  features: [
    {
      id: "technology",
      icon: Award,
      iconGradient: "from-orange-500 via-red-500 to-pink-500",
      title: "⚡ Teknologi Garuda",
      description: "Fiber optic dengan kecepatan hingga 1 Gbps, secepat terbang Garuda",
    },
    {
      id: "team",
      icon: Users,
      iconGradient: "from-blue-500 via-cyan-500 to-teal-500",
      title: "👥 Tim Ramah Nusantara",
      description: "Customer service yang paham bahasa gaul anak muda dan sopan santun Indonesia",
    },
    {
      id: "pricing",
      icon: Target,
      iconGradient: "from-green-500 via-emerald-500 to-lime-500",
      title: "💰 Harga Rakyat",
      description: "Paket internet dengan harga yang ramah di kantong, dari pelajar sampai pengusaha",
    },
  ],
  animationDelay: "0.6s",
};

// Fun fact section
export const funFact = {
  title: "🎉 Fakta Menarik! 🎉",
  description:
    "Tim Jawara-Net terdiri dari anak-anak muda Indonesia berusia 20-35 tahun yang paham betul kebutuhan internet generasi digital natives dan tetap menjunjung tinggi nilai-nilai gotong royong!",
  animationDelay: "0.8s",
};

// Background decorative elements
export const backgroundElements = {
  topLeft: {
    icon: "🦅",
    animation: "indonesian-wave",
    position: "top-20 left-10",
    size: "text-4xl md:text-6xl",
    opacity: "opacity-20",
  },
  bottomRight: {
    icon: "🛡️",
    animation: "garuda-soar",
    position: "bottom-20 right-10",
    size: "text-4xl md:text-6xl",
    opacity: "opacity-20",
  },
};

// Complete about configuration export
export const aboutConfig = {
  header: aboutHeader,
  story: companyStory,
  missionVision,
  whyChooseUs,
  funFact,
  background: backgroundElements,
};

// Default export untuk kemudahan import
export default aboutConfig;
