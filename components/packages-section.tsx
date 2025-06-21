"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { InternetCalculator } from "@/components/internet-calculator";
import { packagesConfig } from "@/configs/content/packages";
import { useDevValidation } from "@/configs/schemas/hooks";

export function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState("rumah");

  // Development validation untuk package data
  const devValidator = useDevValidation();

  // Use packages config instead of hardcoded data
  const { header, categories, packages, calculator, bonusFeatures, cta, background } = packagesConfig;

  return (
    <section id="packages" className="py-24 nusantara-bg relative overflow-hidden">
      {" "}
      {/* SPECTACULAR BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div
        className={`absolute ${background.topLeft.position} ${background.topLeft.size} ${background.topLeft.animation} ${background.topLeft.opacity}`}
      >
        {background.topLeft.icon}
      </div>
      <div
        className={`absolute ${background.bottomRight.position} ${background.bottomRight.size} ${background.bottomRight.animation} ${background.bottomRight.opacity}`}
      >
        {background.bottomRight.icon}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {" "}
        <SectionTitle title={header.title} subtitle={header.subtitle} /> {/* SPECTACULAR CATEGORY TABS */}
        <div className="flex justify-center mb-16">
          <div className="mega-card p-3 flex rounded-3xl nusantara-glow">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className={`mega-text px-12 py-6 text-xl font-black rounded-2xl transition-all duration-500 flex items-center space-x-4 mega-hover ${
                  activeCategory === category.id
                    ? `mega-button bg-gradient-to-r ${category.gradient} text-white nusantara-glow`
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <category.icon className="h-6 w-6" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
        {/* SPECTACULAR PACKAGE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {" "}
          {packages[activeCategory as keyof typeof packages].map((pkg, index) => {
            // Validate package data in development
            const validatedPkg = devValidator?.validatePackage?.(pkg);

            return (
              <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...(validatedPkg || pkg)} />
              </div>
            );
          })}
        </div>{" "}
        {/* INTERNET CALCULATOR SECTION */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-6">{calculator.title}</h3>
            <p className="mega-text text-2xl text-gray-300 leading-relaxed font-bold max-w-4xl mx-auto">
              {calculator.description}
            </p>
          </div>

          <InternetCalculator />
        </div>{" "}
        {/* SPECTACULAR BONUS SECTION */}
        <div className="mt-20">
          <div className="mega-card p-12 nusantara-glow mega-hover">
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-6">{bonusFeatures.title}</h3>
                <Sparkles className="absolute -top-4 -right-4 h-10 w-10 text-yellow-400 animate-spin" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bonusFeatures.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="text-center mega-hover"
                  style={{ animationDelay: feature.animationDelay || `${index * 0.1}s` }}
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow`}
                  >
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h4 className="mega-text font-black text-white text-xl mb-3">{feature.title}</h4>
                  <p className="mega-text text-gray-400 font-semibold">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4 mx-auto"
              >
                <Sparkles className="h-8 w-8" />
                <span>{cta.title}</span>
                <Sparkles className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
