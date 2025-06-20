"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Sword, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { heroConfig } from "@/configs/content/hero";
import { COMPONENT_ANIMATIONS } from "@/configs/animations";

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(heroConfig.slideshowSettings.autoPlay);

  const { slides, slideshowSettings, ctaButtons } = heroConfig;
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideshowSettings.interval);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length, slideshowSettings.interval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {" "}
      {/* SLIDESHOW CONTAINER */}
      <div className="relative overflow-hidden">
        {" "}
        <div
          className={COMPONENT_ANIMATIONS.hero.slideshow}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, _index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="space-y-8 md:space-y-16">
                {/* MAIN HERO CARD */}
                <div className="relative inline-block mb-8 md:mb-16 mega-hover w-full">
                  <div
                    className={`bg-gradient-to-br ${slide.color} p-8 md:p-16 rounded-2xl md:rounded-3xl shadow-2xl nusantara-glow border-2 md:border-4 border-orange-300`}
                  >
                    <div className="relative">
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 text-3xl md:text-6xl text-teal-600 indonesian-wave">
                        {slide.decorativeElements.topLeft}
                      </div>
                      <div className="absolute -top-4 md:-top-8 -right-4 md:-right-8 text-3xl md:text-6xl text-blue-600 garuda-soar">
                        {slide.decorativeElements.topRight}
                      </div>
                      <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 text-3xl md:text-6xl text-teal-600 particle-float">
                        {slide.decorativeElements.bottomLeft}
                      </div>
                      <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 text-3xl md:text-6xl text-blue-600 indonesian-wave">
                        {slide.decorativeElements.bottomRight}
                      </div>

                      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-tight text-center">
                        <span className="block text-teal-700 drop-shadow-lg">{slide.title}</span>
                        <span className="block text-blue-700 drop-shadow-lg">INTERNET</span>
                        <span className="block text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl mt-3 md:mt-6 text-teal-600">
                          {slide.subtitle}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                {/* CONTENT DESCRIPTION */}
                <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
                  <div className="mega-card p-6 md:p-12 mega-hover text-center">
                    <div className="text-6xl md:text-8xl mb-6 md:mb-8 garuda-soar">{slide.character}</div>
                    <p className="mega-text text-xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <p className="mega-text text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                      {slide.subDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* NAVIGATION CONTROLS */}
      {slideshowSettings.showControls && (
        <>
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={prevSlide}
              className="mega-button w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mega-hover mega-glow"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={nextSlide}
              className="mega-button w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mega-hover mega-glow"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
          </div>
        </>
      )}
      {/* SLIDE INDICATORS */}
      {slideshowSettings.showIndicators && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500 scale-125 mega-glow" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
      {/* AUTO-PLAY TOGGLE */}
      {slideshowSettings.showAutoPlayToggle && (
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`mega-card px-3 py-2 text-xs font-bold transition-all ${
              isAutoPlaying ? "text-green-400" : "text-gray-400"
            }`}
          >
            {isAutoPlaying ? "⏸️ Auto" : "▶️ Manual"}
          </button>
        </div>
      )}{" "}
      {/* CTA BUTTONS */}
      <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center">
        {ctaButtons.map((button) => {
          const IconLeft = button.leftIcon === "Sword" ? Sword : Crown;
          const IconRight = button.rightIcon === "ArrowRight" ? ArrowRight : Sparkles;

          return (
            <button
              key={button.id}
              onClick={() => scrollToSection(button.target)}
              className={`${button.className} ${button.gradient ? `bg-gradient-to-r ${button.gradient}` : ""}`}
            >
              <IconLeft className="h-6 w-6 md:h-10 md:w-10" />
              <span>{button.text}</span>
              <IconRight className="h-6 w-6 md:h-10 md:w-10" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
