"use client";
import { useEffect, useState } from "react";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Zap, Shield, Globe } from "lucide-react";
import { heroConfig } from "@/configs/content/hero";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { sectionId, floatingElements, featureCards, statCards, mouseFollower, particleSystem, styling } = heroConfig;
  useEffect(() => {
    if (mouseFollower.enabled) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseFollower.enabled]);
  return (
    <section id={sectionId} className={styling.section}>
      {/* EPIC INTERACTIVE MOUSE FOLLOWER */}
      {mouseFollower.enabled && (
        <div
          className={`fixed w-${mouseFollower.size} h-${mouseFollower.size} pointer-events-none z-10 opacity-${mouseFollower.opacity}`}
          style={{
            left: mousePosition.x - mouseFollower.size / 2,
            top: mousePosition.y - mouseFollower.size / 2,
            background: mouseFollower.gradient,
            borderRadius: "50%",
            filter: `blur(${mouseFollower.blur}px)`,
            transition: mouseFollower.transition,
          }}
        />
      )}
      {/* EPIC FLOATING INDONESIAN WARRIOR ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${Object.entries(element.position)
              .map(([key, value]) => `${key}-${value}`)
              .join(" ")} ${element.size} ${element.animation} opacity-${element.opacity}`}
            style={element.animationDelay ? { animationDelay: element.animationDelay } : {}}
          >
            {element.icon}
          </div>
        ))}
      </div>{" "}
      {/* EPIC WARRIOR PARTICLE SYSTEM */}
      {particleSystem.enabled && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(particleSystem.count)].map((_, i) => (
            <div
              key={i}
              className={`absolute particle-float opacity-${particleSystem.opacity}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * particleSystem.animationDuration.max}s`,
                animationDuration: `${particleSystem.animationDuration.min + Math.random() * (particleSystem.animationDuration.max - particleSystem.animationDuration.min)}s`,
              }}
            >
              <span className={particleSystem.size}>{particleSystem.icons[i % particleSystem.icons.length]}</span>
            </div>
          ))}
        </div>
      )}
      <div className={styling.container}>
        <div className={styling.contentWrapper}>
          {/* HERO SLIDESHOW */}
          <HeroSlideshow /> {/* EPIC WARRIOR FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
            {featureCards.map((feature) => {
              const IconComponent = feature.icon === "Zap" ? Zap : feature.icon === "Shield" ? Shield : Globe;

              return (
                <div
                  key={feature.id}
                  className="mega-card p-6 md:p-10 text-center mega-hover mega-glow"
                  style={feature.animationDelay ? { animationDelay: feature.animationDelay } : {}}
                >
                  <div
                    className={`w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 mega-glow nusantara-glow`}
                  >
                    <IconComponent className="h-10 w-10 md:h-14 md:w-14 text-white" />
                  </div>
                  <h3 className={`mega-text text-xl md:text-2xl font-black text-white mb-4 md:mb-6`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg md:text-xl font-bold mb-2 md:mb-4">{feature.description}</p>
                  <p className={`${feature.textColor} text-base md:text-lg font-black`}>{feature.subtitle}</p>
                  <div className="mt-4 md:mt-6 text-4xl md:text-6xl garuda-soar">{feature.characterIcon}</div>
                </div>
              );
            })}
          </div>{" "}
          {/* EPIC WARRIOR STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 max-w-7xl mx-auto">
            {statCards.map((stat) => (
              <div
                key={stat.id}
                className="mega-card p-6 md:p-10 text-center mega-hover mega-glow"
                style={stat.animationDelay ? { animationDelay: stat.animationDelay } : {}}
              >
                <div className={`text-4xl md:text-6xl lg:text-7xl font-black ${stat.color} mb-3 md:mb-6 mega-title`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-bold text-base md:text-xl mb-2 md:mb-4">{stat.label}</div>
                <div className={`text-3xl md:text-5xl ${stat.animation}`}>{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
