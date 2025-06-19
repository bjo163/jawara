"use client";

import { useState, useEffect } from "react";
import { Zap, Shield, Crown, Sword, Star, Trophy, Target, Wifi, Volume2, VolumeX, Map, Settings } from "lucide-react";

interface GameStats {
  level: number;
  experience: number;
  maxExperience: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  coins: number;
  achievements: number;
}

export function GamingHUD() {
  const [gameStats, setGameStats] = useState<GameStats>({
    level: 15,
    experience: 750,
    maxExperience: 1000,
    health: 85,
    maxHealth: 100,
    mana: 92,
    maxMana: 100,
    coins: 2500,
    achievements: 12,
  });

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "🏆 Achievement: Jagoan Sejati unlocked!", type: "achievement" },
    { id: 2, text: "⚡ Koneksi stabil seperti Benteng Majapahit!", type: "status" },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate experience gain
    const expTimer = setInterval(() => {
      setGameStats((prev) => ({
        ...prev,
        experience: Math.min(prev.experience + Math.random() * 5, prev.maxExperience),
      }));
    }, 3000);
    return () => clearInterval(expTimer);
  }, []);

  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="gaming-hud fixed inset-0 pointer-events-none z-40">
      {/* TOP HUD BAR */}
      <div className="absolute top-20 left-0 right-0 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-start">
          {/* LEFT STATS PANEL */}
          <div className="gaming-panel p-4 space-y-3">
            {/* PLAYER INFO */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center border-4 border-yellow-400 gaming-glow">
                <span className="text-2xl">🥷</span>
              </div>
              <div>
                <div className="gaming-text text-yellow-400 font-black text-lg">JAGOAN DIGITAL</div>
                <div className="gaming-text text-white text-sm">Level {gameStats.level} Warrior</div>
              </div>
            </div>

            {/* HEALTH BAR */}
            <div className="gaming-stat-bar">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-red-500" />
                  <span className="gaming-text text-red-400 font-bold text-sm">NYAWA</span>
                </div>
                <span className="gaming-text text-white text-sm">
                  {gameStats.health}/{gameStats.maxHealth}
                </span>
              </div>
              <div className="gaming-progress-bar">
                <div
                  className="gaming-progress-fill bg-gradient-to-r from-red-600 to-red-400"
                  style={{ width: `${(gameStats.health / gameStats.maxHealth) * 100}%` }}
                />
              </div>
            </div>

            {/* MANA BAR */}
            <div className="gaming-stat-bar">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span className="gaming-text text-blue-400 font-bold text-sm">CHAKRA</span>
                </div>
                <span className="gaming-text text-white text-sm">
                  {gameStats.mana}/{gameStats.maxMana}
                </span>
              </div>
              <div className="gaming-progress-bar">
                <div
                  className="gaming-progress-fill bg-gradient-to-r from-blue-600 to-cyan-400"
                  style={{ width: `${(gameStats.mana / gameStats.maxMana) * 100}%` }}
                />
              </div>
            </div>

            {/* EXPERIENCE BAR */}
            <div className="gaming-stat-bar">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="gaming-text text-yellow-400 font-bold text-sm">PENGALAMAN</span>
                </div>
                <span className="gaming-text text-white text-sm">
                  {Math.round(gameStats.experience)}/{gameStats.maxExperience}
                </span>
              </div>
              <div className="gaming-progress-bar">
                <div
                  className="gaming-progress-fill bg-gradient-to-r from-yellow-600 to-orange-400"
                  style={{ width: `${(gameStats.experience / gameStats.maxExperience) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT STATS PANEL */}
          <div className="gaming-panel p-4 space-y-3">
            {/* CURRENCY & ACHIEVEMENTS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gaming-currency">
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <span className="gaming-text text-yellow-400 font-black">{gameStats.coins.toLocaleString()}</span>
                </div>
                <div className="gaming-text text-gray-400 text-xs">Koin Emas</div>
              </div>
              <div className="gaming-currency">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-orange-500" />
                  <span className="gaming-text text-orange-400 font-black">{gameStats.achievements}</span>
                </div>
                <div className="gaming-text text-gray-400 text-xs">Prestasi</div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex space-x-2">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="gaming-button w-10 h-10 flex items-center justify-center"
              >
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
              <button className="gaming-button w-10 h-10 flex items-center justify-center">
                <Map className="h-5 w-5" />
              </button>
              <button className="gaming-button w-10 h-10 flex items-center justify-center">
                <Settings className="h-5 w-5" />
              </button>
            </div>

            {/* GAME TIME */}
            <div className="gaming-time">
              <div className="gaming-text text-cyan-400 font-bold text-sm">
                {currentTime.toLocaleTimeString("id-ID")}
              </div>
              <div className="gaming-text text-gray-400 text-xs">Waktu Jagoan</div>
            </div>
          </div>
        </div>
      </div>

      {/* MINI MAP */}
      <div className="absolute top-32 right-4 pointer-events-auto">
        <div className="gaming-panel p-4 w-48">
          <div className="flex items-center justify-between mb-3">
            <span className="gaming-text text-cyan-400 font-bold text-sm">🗺️ PETA NUSANTARA</span>
            <Target className="h-4 w-4 text-green-500" />
          </div>
          <div className="gaming-minimap">
            <div className="gaming-minimap-bg">
              {/* Indonesia Map Representation */}
              <div className="absolute top-2 left-4 w-2 h-2 bg-green-500 rounded-full gaming-pulse" title="Jakarta" />
              <div className="absolute top-4 left-8 w-2 h-2 bg-blue-500 rounded-full gaming-pulse" title="Bandung" />
              <div
                className="absolute top-3 right-6 w-2 h-2 bg-orange-500 rounded-full gaming-pulse"
                title="Surabaya"
              />
              <div
                className="absolute bottom-4 left-6 w-2 h-2 bg-purple-500 rounded-full gaming-pulse"
                title="Yogyakarta"
              />

              {/* Player Position */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-white gaming-glow animate-pulse" />
              </div>
            </div>
          </div>
          <div className="gaming-text text-gray-400 text-xs mt-2">📍 Posisi: Jakarta Selatan</div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="absolute top-1/4 right-4 space-y-2 pointer-events-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`gaming-notification ${notification.type === "achievement" ? "gaming-achievement" : "gaming-status"}`}
            onClick={() => dismissNotification(notification.id)}
          >
            <div className="gaming-text text-white font-bold text-sm">{notification.text}</div>
            <div className="gaming-notification-timer" />
          </div>
        ))}
      </div>

      {/* BOTTOM HUD */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="gaming-panel p-4">
          <div className="flex items-center space-x-6">
            {/* SKILL SLOTS */}
            <div className="flex space-x-2">
              <div className="gaming-skill-slot">
                <Wifi className="h-6 w-6 text-blue-400" />
                <div className="gaming-skill-key">1</div>
              </div>
              <div className="gaming-skill-slot">
                <Shield className="h-6 w-6 text-green-400" />
                <div className="gaming-skill-key">2</div>
              </div>
              <div className="gaming-skill-slot">
                <Sword className="h-6 w-6 text-red-400" />
                <div className="gaming-skill-key">3</div>
              </div>
              <div className="gaming-skill-slot">
                <Crown className="h-6 w-6 text-yellow-400" />
                <div className="gaming-skill-key">4</div>
              </div>
            </div>

            {/* CENTER COMPASS */}
            <div className="gaming-compass">
              <div className="gaming-compass-inner">
                <div className="gaming-compass-needle" />
                <span className="gaming-text text-yellow-400 font-bold text-xs">N</span>
              </div>
            </div>

            {/* QUEST TRACKER */}
            <div className="gaming-quest-tracker">
              <div className="gaming-text text-orange-400 font-bold text-sm mb-1">🎯 MISI AKTIF</div>
              <div className="gaming-text text-white text-xs">• Taklukkan Internet Nusantara</div>
              <div className="gaming-text text-white text-xs">• Kumpulkan 1000 Jagoan</div>
              <div className="gaming-text text-white text-xs">• Bangun Kerajaan Digital</div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING DAMAGE NUMBERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gaming-floating-text" style={{ top: "30%", left: "20%" }}>
          +50 EXP
        </div>
        <div className="gaming-floating-text gaming-crit" style={{ top: "40%", right: "30%" }}>
          CRITICAL HIT!
        </div>
      </div>

      {/* COMBO METER */}
      <div className="absolute top-1/2 left-4 pointer-events-auto">
        <div className="gaming-combo-meter">
          <div className="gaming-text text-red-400 font-black text-lg mb-2">COMBO</div>
          <div className="gaming-combo-count">x7</div>
          <div className="gaming-combo-bar">
            <div className="gaming-combo-fill" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
