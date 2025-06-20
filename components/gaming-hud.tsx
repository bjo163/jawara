"use client";

import { useState, useEffect } from "react";
import { Zap, Shield, Crown, Sword, Star, Trophy, Target, Wifi, Volume2, VolumeX, Map, Settings } from "lucide-react";
import { gamingHudConfig, type GameStats, type GameNotification, gamingHudUtils } from "@/configs/content/gaming";

export function GamingHUD() {
  const [gameStats, setGameStats] = useState<GameStats>(gamingHudConfig.defaultStats);
  const [soundEnabled, setSoundEnabled] = useState(gamingHudConfig.settings.soundEnabled);
  const [notifications, setNotifications] = useState<GameNotification[]>(gamingHudConfig.defaultNotifications);
  const [currentTime, setCurrentTime] = useState(new Date());

  const {
    playerInfo,
    statBars,
    currencies,
    quickActions,
    minimapLocations,
    skillSlots,
    quests,
    floatingTexts,
    styling,
    positions,
  } = gamingHudConfig;

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
        experience: Math.min(prev.experience + gamingHudUtils.generateRandomExp(), prev.maxExperience),
      }));
    }, 3000);
    return () => clearInterval(expTimer);
  }, []);

  const dismissNotification = (id: number) => {
    setNotifications((prev) => gamingHudUtils.dismissNotification(prev, id));
  };
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
      Shield,
      Zap,
      Star,
      Crown,
      Trophy,
      Volume2,
      VolumeX,
      Map,
      Settings,
      Wifi,
      Sword,
      Target,
    };
    return icons[iconName] || Shield;
  };
  return (
    <div className="gaming-hud fixed inset-0 pointer-events-none z-40">
      {/* TOP HUD BAR */}
      <div className={positions.topLeft}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-start">
          {/* LEFT STATS PANEL */}
          <div className={`${styling.panel} p-4 space-y-3`}>
            {/* PLAYER INFO */}
            <div className="flex items-center space-x-4 mb-4">
              <div
                className={`w-16 h-16 bg-gradient-to-br ${playerInfo.avatarGradient} rounded-full flex items-center justify-center border-4 ${playerInfo.borderColor} gaming-glow`}
              >
                <span className="text-2xl">{playerInfo.avatar}</span>
              </div>
              <div>
                <div className={`${styling.text} ${playerInfo.titleColor} font-black text-lg`}>{playerInfo.title}</div>
                <div className={`${styling.text} ${playerInfo.subtitleColor} text-sm`}>
                  Level {gameStats.level} {playerInfo.subtitle}
                </div>
              </div>
            </div>

            {/* STAT BARS */}
            {statBars.map((statBar) => {
              const IconComponent = getIconComponent(statBar.icon);
              const currentValue = gameStats[statBar.valueKey] as number;
              const maxValue = statBar.maxValueKey ? (gameStats[statBar.maxValueKey] as number) : 100;
              const percentage = gamingHudUtils.calculatePercentage(currentValue, maxValue);

              return (
                <div key={statBar.id} className="gaming-stat-bar">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`h-4 w-4 ${statBar.color}`} />
                      <span className={`${styling.text} ${statBar.textColor} font-bold text-sm`}>{statBar.label}</span>
                    </div>
                    <span className={`${styling.text} text-white text-sm`}>
                      {Math.round(currentValue)}
                      {maxValue ? `/${maxValue}` : ""}
                    </span>
                  </div>
                  <div className={styling.progressBar}>
                    <div
                      className={`${styling.progressFill} bg-gradient-to-r ${statBar.gradient}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>{" "}
          {/* RIGHT STATS PANEL */}
          <div className={`${styling.panel} p-4 space-y-3`}>
            {/* CURRENCY & ACHIEVEMENTS */}
            <div className="grid grid-cols-2 gap-4">
              {currencies.map((currency) => {
                const IconComponent = getIconComponent(currency.icon);
                const value = gameStats[currency.valueKey] as number;
                const formattedValue = gamingHudUtils.formatCurrency(value, currency.formatter);

                return (
                  <div key={currency.id} className="gaming-currency">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`h-5 w-5 ${currency.color}`} />
                      <span className={`${styling.text} ${currency.color.replace("text-", "text-")} font-black`}>
                        {formattedValue}
                      </span>
                    </div>
                    <div className={`${styling.text} text-gray-400 text-xs`}>{currency.label}</div>
                  </div>
                );
              })}
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex space-x-2">
              {quickActions.map((action) => {
                const IconComponent = getIconComponent(action.icon);
                const isActive = action.stateKey === "soundEnabled" ? soundEnabled : false;
                const IconToShow = action.id === "sound" && !isActive ? VolumeX : IconComponent;

                return (
                  <button
                    key={action.id}
                    onClick={() => {
                      if (action.stateKey === "soundEnabled") {
                        setSoundEnabled(!soundEnabled);
                      }
                    }}
                    className={action.className}
                  >
                    <IconToShow className="h-5 w-5" />
                  </button>
                );
              })}
            </div>

            {/* GAME TIME */}
            <div className="gaming-time">
              <div className={`${styling.text} text-cyan-400 font-bold text-sm`}>
                {currentTime.toLocaleTimeString("id-ID")}
              </div>
              <div className={`${styling.text} text-gray-400 text-xs`}>Waktu Jagoan</div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* MINI MAP */}
      <div className={positions.topRight}>
        <div className={`${styling.panel} p-4 w-48`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`${styling.text} text-cyan-400 font-bold text-sm`}>🗺️ PETA NUSANTARA</span>
            <Target className="h-4 w-4 text-green-500" />
          </div>
          <div className={styling.minimap}>
            <div className="gaming-minimap-bg">
              {/* Indonesia Map Representation */}
              {minimapLocations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute ${Object.entries(location.position)
                    .map(([key, value]) => `${key}-${value}`)
                    .join(" ")} ${location.size} ${location.color} rounded-full gaming-pulse`}
                  title={location.name}
                />
              ))}

              {/* Player Position */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-white gaming-glow animate-pulse" />
              </div>
            </div>
          </div>
          <div className={`${styling.text} text-gray-400 text-xs mt-2`}>📍 Posisi: Jakarta Selatan</div>
        </div>
      </div>{" "}
      {/* NOTIFICATIONS */}
      <div className={positions.rightSide}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styling.notification} ${notification.type === "achievement" ? "gaming-achievement" : "gaming-status"}`}
            onClick={() => dismissNotification(notification.id)}
          >
            <div className={`${styling.text} text-white font-bold text-sm`}>{notification.text}</div>
            <div className="gaming-notification-timer" />
          </div>
        ))}
      </div>{" "}
      {/* BOTTOM HUD */}
      <div className={positions.bottomCenter}>
        <div className={`${styling.panel} p-4`}>
          <div className="flex items-center space-x-6">
            {/* SKILL SLOTS */}
            <div className="flex space-x-2">
              {skillSlots.map((skill) => {
                const IconComponent = getIconComponent(skill.icon);

                return (
                  <div key={skill.id} className={styling.skillSlot}>
                    <IconComponent className={`h-6 w-6 ${skill.color}`} />
                    <div className="gaming-skill-key">{skill.keyBinding}</div>
                  </div>
                );
              })}
            </div>

            {/* CENTER COMPASS */}
            <div className={styling.compass}>
              <div className="gaming-compass-inner">
                <div className="gaming-compass-needle" />
                <span className={`${styling.text} text-yellow-400 font-bold text-xs`}>N</span>
              </div>
            </div>

            {/* QUEST TRACKER */}
            <div className={styling.questTracker}>
              {quests.map((quest, index) => (
                <div key={quest.id} className={index === 0 ? "mb-1" : ""}>
                  <div
                    className={`${styling.text} ${index === 0 ? "text-orange-400 font-bold text-sm" : "text-white text-xs"}`}
                  >
                    {index === 0 ? quest.title : quest.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      {/* FLOATING DAMAGE NUMBERS */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTexts.map((floatingText) => (
          <div
            key={floatingText.id}
            className={`${floatingText.animation} ${floatingText.color} ${floatingText.size}`}
            style={{
              ...Object.fromEntries(Object.entries(floatingText.position).map(([key, value]) => [key, value])),
            }}
          >
            {floatingText.text}
          </div>
        ))}
      </div>
      {/* COMBO METER */}
      <div className={positions.leftSide}>
        <div className={styling.comboMeter}>
          <div className={`${styling.text} text-red-400 font-black text-lg mb-2`}>COMBO</div>
          <div className="gaming-combo-count">x7</div>
          <div className="gaming-combo-bar">
            <div className="gaming-combo-fill" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
