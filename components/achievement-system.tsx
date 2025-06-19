"use client";

import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export function AchievementSystem() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "first-visit",
      title: "🏛️ Penjelajah Nusantara",
      description: "Mengunjungi website Jawara-Net untuk pertama kali",
      icon: "🗺️",
      rarity: "common",
      unlocked: true,
      progress: 1,
      maxProgress: 1,
    },
    {
      id: "scroll-master",
      title: "📜 Master Gulungan",
      description: "Scroll hingga bagian bawah website",
      icon: "📜",
      rarity: "common",
      unlocked: false,
      progress: 3,
      maxProgress: 5,
    },
    {
      id: "package-explorer",
      title: "💎 Penjelajah Paket",
      description: "Melihat semua paket internet yang tersedia",
      icon: "💎",
      rarity: "rare",
      unlocked: false,
      progress: 2,
      maxProgress: 4,
    },
    {
      id: "contact-warrior",
      title: "⚔️ Pejuang Kontak",
      description: "Menghubungi customer service Jawara-Net",
      icon: "⚔️",
      rarity: "epic",
      unlocked: false,
      progress: 0,
      maxProgress: 1,
    },
    {
      id: "jagoan-legend",
      title: "👑 Legenda Jagoan",
      description: "Menjadi pelanggan setia Jawara-Net",
      icon: "👑",
      rarity: "legendary",
      unlocked: false,
      progress: 0,
      maxProgress: 1,
    },
  ]);

  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);

  const rarityColors = {
    common: "from-gray-500 to-gray-600",
    rare: "from-blue-500 to-blue-600",
    epic: "from-purple-500 to-purple-600",
    legendary: "from-yellow-500 to-orange-600",
  };

  const rarityGlow = {
    common: "shadow-gray-500/50",
    rare: "shadow-blue-500/50",
    epic: "shadow-purple-500/50",
    legendary: "shadow-yellow-500/50",
  };

  useEffect(() => {
    // Simulate achievement unlock
    const timer = setTimeout(() => {
      const unlockedAchievement = achievements.find((a) => a.id === "scroll-master" && !a.unlocked);
      if (unlockedAchievement) {
        setAchievements((prev) =>
          prev.map((a) => (a.id === "scroll-master" ? { ...a, unlocked: true, progress: 5 } : a))
        );
        setShowAchievement({ ...unlockedAchievement, unlocked: true, progress: 5 });

        setTimeout(() => setShowAchievement(null), 5000);
      }
    }, 10000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* ACHIEVEMENT POPUP */}
      {showAchievement && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div
            className={`gaming-achievement-popup bg-gradient-to-r ${rarityColors[showAchievement.rarity]} ${rarityGlow[showAchievement.rarity]}`}
          >
            <div className="gaming-achievement-header">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <span className="gaming-text text-yellow-400 font-black text-lg">PRESTASI TERBUKA!</span>
            </div>
            <div className="gaming-achievement-content">
              <div className="text-6xl mb-4">{showAchievement.icon}</div>
              <h3 className="gaming-text text-white font-black text-xl mb-2">{showAchievement.title}</h3>
              <p className="gaming-text text-gray-300 text-sm">{showAchievement.description}</p>
            </div>
            <div className="gaming-achievement-rarity">
              <span
                className={`gaming-text font-bold text-sm ${
                  showAchievement.rarity === "legendary"
                    ? "text-yellow-400"
                    : showAchievement.rarity === "epic"
                      ? "text-purple-400"
                      : showAchievement.rarity === "rare"
                        ? "text-blue-400"
                        : "text-gray-400"
                }`}
              >
                {showAchievement.rarity.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ACHIEVEMENT PANEL */}
      <div className="fixed bottom-20 left-4 gaming-panel p-4 w-80 max-h-96 overflow-y-auto pointer-events-auto">
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span className="gaming-text text-yellow-400 font-black text-lg">🏆 PRESTASI JAGOAN</span>
        </div>

        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`gaming-achievement-item ${achievement.unlocked ? "unlocked" : "locked"}`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    achievement.unlocked ? `bg-gradient-to-r ${rarityColors[achievement.rarity]}` : "bg-gray-700"
                  }`}
                >
                  {achievement.unlocked ? achievement.icon : "🔒"}
                </div>
                <div className="flex-1">
                  <h4
                    className={`gaming-text font-bold text-sm ${achievement.unlocked ? "text-white" : "text-gray-500"}`}
                  >
                    {achievement.title}
                  </h4>
                  <p className={`gaming-text text-xs ${achievement.unlocked ? "text-gray-300" : "text-gray-600"}`}>
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && (
                    <div className="gaming-progress-bar mt-2">
                      <div
                        className="gaming-progress-fill bg-gradient-to-r from-orange-500 to-red-500"
                        style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
