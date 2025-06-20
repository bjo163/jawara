"use client";

import { Crown, Sparkles } from "lucide-react";
import { navigationConfig } from "@/configs/navigation/menu";

export function Footer() {
  // Use navigation config
  const { menus, contact, social, legal, brand } = navigationConfig.footer;
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="nusantara-bg relative overflow-hidden border-t-4 border-orange-500/50">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-20"></div>
      <div className="absolute top-10 left-10 text-6xl garuda-soar opacity-20">🦅</div>
      <div className="absolute bottom-10 right-10 text-6xl indonesian-wave opacity-20">🏛️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* EPIC BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mega-hover">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mega-glow nusantara-glow">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-400 animate-spin" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="mega-title text-3xl text-orange-500">JAWARA</span>
                  <span className="mega-title text-3xl text-red-500">NET</span>
                </div>
                <span className="mega-text text-sm text-gray-400 font-bold">INTERNET NUSANTARA</span>
              </div>
            </div>{" "}
            <div className="mega-card p-6 mega-hover">
              <p className="mega-text text-gray-300 leading-relaxed font-bold text-lg">
                {brand.description.split(" ").map((word, index) => {
                  const highlight = brand.highlights?.find((h) => word.includes(h.text.replace(/\s+/g, "")));
                  if (highlight) {
                    return (
                      <span key={index} className={`${highlight.color} font-black`}>
                        {word}{" "}
                      </span>
                    );
                  }
                  return <span key={index}>{word} </span>;
                })}
              </p>
            </div>
            <div className="flex space-x-4">
              {social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center mega-hover mega-glow`}
                >
                  <link.icon className="h-6 w-6 text-white" />
                </a>
              ))}
            </div>
          </div>
          {/* MENU UTAMA - from config */}
          <div className="mega-card p-8 mega-hover">
            <h4 className={`mega-title text-2xl ${menus.main.iconColor} mb-6 flex items-center space-x-2`}>
              <menus.main.icon className="h-6 w-6" />
              <span>{menus.main.title}</span>
            </h4>
            <ul className="space-y-4">
              {menus.main.items.map((item) => (
                <li key={item.id || item.label}>
                  <button
                    onClick={() => item.id && scrollToSection(item.id)}
                    className={`mega-text text-gray-400 ${menus.main.hoverColor} transition-colors font-bold text-lg mega-hover`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* BANTUAN - from config */}
          <div className="mega-card p-8 mega-hover">
            <h4 className={`mega-title text-2xl ${menus.support.iconColor} mb-6 flex items-center space-x-2`}>
              <menus.support.icon className="h-6 w-6" />
              <span>{menus.support.title}</span>
            </h4>
            <ul className="space-y-4">
              {menus.support.items.map((item, index) => (
                <li key={index}>
                  {item.id ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`mega-text text-gray-400 ${menus.support.hoverColor} transition-colors font-bold text-lg mega-hover`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`mega-text text-gray-400 ${menus.support.hoverColor} transition-colors font-bold text-lg mega-hover`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>{" "}
          {/* KONTAK - from config */}
          <div className="mega-card p-8 mega-hover">
            <h4 className={`mega-title text-2xl ${contact.iconColor} mb-6 flex items-center space-x-2`}>
              <span className="text-2xl">{contact.icon}</span>
              <span>{contact.title}</span>
            </h4>
            <div className="space-y-6 mega-text text-gray-400">
              {contact.sections.map((section) => (
                <div key={section.id}>
                  <p className="font-black text-white text-lg mb-2">{section.title}</p>
                  {section.items.map((item, index) => (
                    <p key={index} className="font-bold">
                      {item.label}: {item.value}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EPIC BOTTOM BAR */}
        <div className="border-t-2 border-orange-500/30 mt-16 pt-8">
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="mega-text text-gray-400 text-lg text-center md:text-left">
                © {new Date().getFullYear()} {brand.copyright.text}
                <span className="text-orange-400 font-black"> {brand.copyright.suffix} </span>
                <span className="text-2xl">{brand.copyright.flag}</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mega-text">
                {legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors font-bold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
