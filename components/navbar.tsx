"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navbarConfig } from "@/configs/content/navbar";

interface NavbarProps {
  activeSection: string;
  onNavigate?: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Use navbar config
  const { brand, navigation, cta, scroll, styling } = navbarConfig;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > scroll.threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll.threshold]);

  const scrollToSection = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: scroll.behavior });
    }
    setIsOpen(false);
  };

  const handleCtaAction = (ctaButton: (typeof cta.buttons)[0]) => {
    if (ctaButton.action.type === "scroll") {
      scrollToSection(ctaButton.action.target);
    } else if (ctaButton.action.type === "external") {
      window.open(ctaButton.action.target, "_blank");
    }
  };
  return (
    <nav
      className={`fixed top-0 w-full ${styling.zIndex} transition-all duration-700 ${
        scrolled
          ? `${styling.background.scrolled} ${styling.border.scrolled}`
          : `${styling.background.default} ${styling.border.default}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className={`flex justify-between items-center ${styling.height.mobile} ${styling.height.desktop}`}>
          {/* EPIC WARRIOR LOGO - Config Driven */}
          <div className="flex items-center space-x-2 mega-hover flex-shrink-0">
            <div className="relative group">
              <div
                className={`${brand.logo.size.mobile} md:${brand.logo.size.desktop} bg-gradient-to-br ${brand.logo.gradient} rounded-xl flex items-center justify-center mega-glow nusantara-glow`}
              >
                <span className="text-xl md:text-2xl">{brand.logo.icon}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-ping"></div>
              <Sparkles className="absolute -bottom-1 -left-1 h-3 w-3 md:h-4 md:w-4 text-yellow-400 animate-spin" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="mega-title text-sm md:text-lg lg:text-xl text-orange-500">{brand.name.primary}</span>
                <span className="mega-title text-sm md:text-lg lg:text-xl text-red-500">{brand.name.secondary}</span>
              </div>
              <span className="mega-text text-xs text-gray-400 font-bold hidden sm:block">{brand.tagline}</span>
            </div>
          </div>
          {/* EPIC WARRIOR DESKTOP NAVIGATION - Config Driven */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mega-text px-2 xl:px-3 py-2 rounded-xl font-bold transition-all duration-500 flex items-center space-x-1 mega-hover relative overflow-hidden text-xs xl:text-sm ${
                  activeSection === item.id
                    ? scroll.activeClass
                    : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl"
                }`}
                title={item.tooltip}
              >
                <span>{item.label}</span>
                <span className="text-sm indonesian-wave">{item.icon}</span>
              </button>
            ))}
          </div>
          {/* EPIC WARRIOR CTA BUTTONS - Config Driven */}
          <div className={`hidden md:flex items-center ${cta.spacing} flex-shrink-0`}>
            {cta.buttons.map((ctaButton) => (
              <Button
                key={ctaButton.id}
                onClick={() => handleCtaAction(ctaButton)}
                className={`mega-button bg-gradient-to-r ${ctaButton.style.gradient} ${ctaButton.style.size} text-white font-bold mega-text ${ctaButton.style.hover} flex items-center space-x-1 text-xs`}
              >
                <span>{ctaButton.label}</span>
              </Button>
            ))}
          </div>{" "}
          {/* EPIC WARRIOR MOBILE MENU BUTTON */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 mega-hover p-2 rounded-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* EPIC WARRIOR MOBILE NAVIGATION - Config Driven */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="mega-card m-3 p-4 space-y-3 mega-glow">
              {navigation.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold mega-text transition-all duration-500 flex items-center space-x-3 mega-hover text-sm ${
                    activeSection === item.id ? scroll.activeClass : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex-1">{item.label}</span>
                  <span className="text-lg indonesian-wave">{item.icon}</span>
                </button>
              ))}
              <div className="pt-3 space-y-2">
                {cta.buttons.map((ctaButton) => (
                  <Button
                    key={ctaButton.id}
                    onClick={() => handleCtaAction(ctaButton)}
                    className={`w-full mega-button bg-gradient-to-r ${ctaButton.style.gradient} text-white font-bold mega-text py-2 text-sm`}
                  >
                    {ctaButton.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
