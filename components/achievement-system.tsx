"use client";

import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { achievementConfig } from "@/configs/content/achievements";
import type { Achievement } from "@/configs/content/achievements";

export function AchievementSystem() {
  const [achievements, setAchievements] = useState<Achievement[]>(achievementConfig.achievements);
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);

  // Use config data
  const { rarities, popup, panel, simulation, texts } = achievementConfig;
  useEffect(() => {
    // Use simulation config
    if (simulation.enabled && simulation.autoUnlock.enabled) {
      const timer = setTimeout(() => {
        const unlockedAchievement = achievements.find((a) => a.id === simulation.autoUnlock.targetId && !a.unlocked);
        if (unlockedAchievement) {
          setAchievements((prev) =>
            prev.map((a) =>
              a.id === simulation.autoUnlock.targetId ? { ...a, unlocked: true, progress: a.maxProgress } : a
            )
          );
          setShowAchievement({ ...unlockedAchievement, unlocked: true, progress: unlockedAchievement.maxProgress });

          setTimeout(() => setShowAchievement(null), popup.duration);
        }
      }, simulation.autoUnlock.delay);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* ACHIEVEMENT POPUP - Config Driven */}
      {showAchievement && (
        <div className={`fixed ${popup.position.x} ${popup.position.y} z-50 pointer-events-none`}>
          <div
            className={`gaming-achievement-popup bg-gradient-to-r ${rarities[showAchievement.rarity].colors.gradient} ${rarities[showAchievement.rarity].colors.glow}`}
          >
            <div className="gaming-achievement-header">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <span className="gaming-text text-yellow-400 font-black text-lg">{texts.popupTitle}</span>
            </div>
            <div className="gaming-achievement-content">
              <div className="text-6xl mb-4">{showAchievement.icon}</div>
              <h3 className="gaming-text text-white font-black text-xl mb-2">{showAchievement.title}</h3>
              <p className="gaming-text text-gray-300 text-sm">{showAchievement.description}</p>
            </div>
            <div className="gaming-achievement-rarity">
              <span className={`gaming-text font-bold text-sm ${rarities[showAchievement.rarity].colors.text}`}>
                {showAchievement.rarity.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ACHIEVEMENT PANEL - Config Driven */}
      <div
        className={`fixed ${panel.position.bottom} ${panel.position.left} ${panel.styling.container} ${panel.size.width} ${panel.size.maxHeight}`}
      >
        <div className={panel.styling.header}>
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span className="gaming-text text-yellow-400 font-black text-lg">{texts.panelTitle}</span>
        </div>

        <div className={panel.styling.items}>
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`gaming-achievement-item ${achievement.unlocked ? "unlocked" : "locked"}`}
              title={achievement.tooltip}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    achievement.unlocked
                      ? `bg-gradient-to-r ${rarities[achievement.rarity].colors.gradient}`
                      : "bg-gray-700"
                  }`}
                >
                  {achievement.unlocked ? achievement.icon : texts.lockedIcon}
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
