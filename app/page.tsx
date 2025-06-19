"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { PackagesSection } from "@/components/packages-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CoverageSection } from "@/components/coverage-section";
import { Footer } from "@/components/footer";
import { LiveChatWidget } from "@/components/live-chat-widget";
import { Wifi, Sparkles, Crown, Sword } from "lucide-react";
import { NavigationLoader } from "@/components/navigation-loader";
import { GamingHUD } from "@/components/gaming-hud";
import { GamingCursor } from "@/components/gaming-cursor";
import { AchievementSystem } from "@/components/achievement-system";
import { loadingConfig } from "@/configs/content/loading";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState(0);
  const [navigationLoading, setNavigationLoading] = useState(false);
  const [targetSection, setTargetSection] = useState("");

  // Use loading config instead of hardcoded data
  const { stages: loadingStages, timing, brand, stats, background } = loadingConfig;

  useEffect(() => {
    // Enhanced loading with stages using config timing
    const stageInterval = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev >= loadingStages.length - 1) {
          clearInterval(stageInterval);
          setTimeout(() => setIsLoading(false), timing.finalDelay);
          return prev;
        }
        return prev + 1;
      });
    }, timing.stageInterval);

    // Smooth progress animation using config timing
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const targetProgress = loadingStages[loadingStage]?.progress || 100;
        if (prev >= targetProgress) return prev;
        return Math.min(prev + Math.random() * 8, targetProgress);
      });
    }, timing.progressUpdateInterval);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, [loadingStage, loadingStages, timing]);

  const handleNavigation = (sectionId: string) => {
    setNavigationLoading(true);
    setTargetSection(sectionId);

    setTimeout(() => {
      setNavigationLoading(false);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "services",
        "process",
        "packages",
        "testimonials",
        "faq",
        "contact",
        "coverage",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    const currentStage = loadingStages[loadingStage];

    return (
      <div className="loading-overlay min-h-screen nusantara-bg flex items-center justify-center relative overflow-hidden">
        {/* EPIC BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 mega-grid opacity-20"></div>

        {/* FLOATING ELEMENTS - from config */}
        <div className="absolute inset-0 pointer-events-none">
          {background.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.position} ${element.size} ${element.animation} ${element.opacity}`}
            >
              {element.icon}
            </div>
          ))}
        </div>

        <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
          {/* EPIC LOADING LOGO */}
          <div className="relative mb-16">
            <div className="w-40 h-40 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mega-glow nusantara-glow animate-pulse">
              <Wifi className="h-20 w-20 text-white" />
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
            <Sparkles className="absolute -top-4 -left-4 h-12 w-12 text-yellow-400 animate-spin" />
            <Crown className="absolute -bottom-4 -right-4 h-10 w-10 text-yellow-500 indonesian-wave" />
            <Sword className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-red-500 opacity-50 particle-float" />
          </div>

          {/* EPIC LOADING TITLE - from config */}
          <div className="mega-card p-16 mega-hover mega-glow mb-16">
            <h1 className="mega-title text-6xl md:text-7xl mb-6">{brand.title}</h1>
            <p className="mega-text text-3xl text-orange-400 mb-4 font-black">{brand.tagline}</p>
            <div className="flex justify-center space-x-8 mb-8">
              {brand.decorativeIcons.map((icon, index) => (
                <span key={index} className={`text-5xl ${index % 2 === 0 ? "garuda-soar" : "indonesian-wave"}`}>
                  {icon}
                </span>
              ))}
            </div>
            <p className="mega-text text-gray-400 text-xl">{brand.description}</p>
          </div>

          {/* EPIC STAGE INDICATOR */}
          <div className="mega-card p-10 mb-12">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-8xl garuda-soar">{currentStage?.icon}</div>
              <div className="text-left">
                <h3 className="mega-title text-3xl mb-2">
                  Tahap {loadingStage + 1} dari {loadingStages.length}
                </h3>
                <p className="mega-text text-gray-300 text-xl font-bold">{currentStage?.text}</p>
              </div>
            </div>
          </div>

          {/* EPIC PROGRESS BAR - from config */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="mega-card p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="mega-text text-white font-bold text-xl">{loadingConfig.progress.labels.title}</span>
                <span className="mega-text text-orange-400 font-bold text-xl">
                  {loadingConfig.progress.labels.percentage(loadingProgress)}
                </span>
              </div>
              <div
                className={`w-full ${loadingConfig.progress.styling.backgroundColor} rounded-full ${loadingConfig.progress.styling.height} overflow-hidden mega-glow`}
              >
                <div
                  className={`h-full bg-gradient-to-r ${loadingConfig.progress.styling.barGradient} rounded-full transition-all ${loadingConfig.progress.animation.duration} ${loadingConfig.progress.animation.easing} mega-glow relative overflow-hidden`}
                  style={{ width: `${loadingProgress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* EPIC LOADING DOTS - from config */}
          <div className="flex justify-center space-x-4 mb-12">
            {loadingConfig.dots.map((dot, index) => (
              <div
                key={index}
                className={`w-6 h-6 bg-gradient-to-r ${dot.gradient} rounded-full animate-bounce`}
                style={{ animationDelay: dot.delay }}
              ></div>
            ))}
          </div>

          {/* EPIC LOADING STATS - from config */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="mega-card p-8 text-center mega-hover">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 mega-glow`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-3xl font-black ${stat.textColor} mb-2 mega-title`}>{stat.value}</div>
                <div className="mega-text text-gray-400 text-sm font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      <NavigationLoader isVisible={navigationLoading} targetSection={targetSection} />
      <GamingHUD />
      <GamingCursor />
      <AchievementSystem />
      <LiveChatWidget />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <PackagesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <CoverageSection />
      </main>

      <Footer />
    </div>
  );
}
