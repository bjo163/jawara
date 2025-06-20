"use client";

import { SectionTitle } from "@/components/section-title";
import { MapPin, CheckCircle, Clock, Crown, Sparkles, Sword } from "lucide-react";
import { coverageConfig } from "@/configs/content/coverage";

export function CoverageSection() {
  // Use coverage config
  const { header, areas, colors, statuses, background, request, grid, styling } = coverageConfig;
  // Helper functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleCTAAction = (action: string, target: string) => {
    if (action === "contact" || action === "scroll") {
      scrollToSection(target);
    } else if (action === "external") {
      window.open(target, "_blank");
    }
  };

  return (
    <section id={coverageConfig.sectionId} className={styling.section}>
      {/* EPIC BACKGROUND ELEMENTS - Config Driven */}
      {background.grid.enabled && (
        <div className={`absolute inset-0 ${background.grid.class} opacity-${background.grid.opacity}`}></div>
      )}
      {background.decorations.map((decoration, index) => (
        <div
          key={index}
          className={`absolute ${decoration.position} ${decoration.size} ${decoration.animation} opacity-${decoration.opacity}`}
        >
          {decoration.icon}
        </div>
      ))}

      <div className={styling.container}>
        <SectionTitle title={header.title} subtitle={header.subtitle} />

        <div
          className={`${grid.breakpoints.mobile} ${grid.breakpoints.tablet} ${grid.breakpoints.desktop} ${grid.breakpoints.large} ${grid.gap}`}
        >
          {areas.map((area, index) => {
            const areaColors = colors[area.color];
            const statusInfo = statuses[area.status];

            return (
              <div
                key={area.id}
                className={styling.card}
                style={{ animationDelay: `${index * grid.animation.stagger}s` }}
              >
                {/* EPIC HEADER - Config Driven */}
                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${areaColors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow relative`}
                  >
                    <span className="text-4xl">{area.icon}</span>
                    {area.status === "active" ? (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <h3
                    className={`mega-title text-2xl mb-4 ${areaColors.text} flex items-center justify-center space-x-2`}
                  >
                    <MapPin className="h-6 w-6" />
                    <span>{area.city}</span>
                  </h3>

                  <div className="mega-card p-4 mb-6">
                    <div className={`text-3xl font-black mb-2 mega-title ${statusInfo.color}`}>{area.coverage}</div>
                    <div className="mega-text text-gray-400 font-bold">{statusInfo.label}</div>
                  </div>
                </div>

                {/* EPIC AREAS - Config Driven */}
                <div className="space-y-4 mb-8">
                  <h4 className="mega-text font-black text-white text-lg mb-4 flex items-center space-x-2">
                    <Sword className="h-5 w-5" />
                    <span>Wilayah Kekuasaan:</span>
                  </h4>
                  <div className="space-y-3">
                    {area.areas.map((subArea, subIndex) => (
                      <div
                        key={subIndex}
                        className={`mega-card p-3 ${areaColors.bg} ${areaColors.border} border-2 mega-hover`}
                      >
                        <div className="flex items-center space-x-3">
                          {area.status === "active" ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          )}
                          <span className={`mega-text font-bold ${areaColors.text}`}>{subArea}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EPIC CTA - Config Driven */}
                <div className="text-center">
                  <div className="space-y-4">
                    <div className={`mega-card p-4 ${areaColors.bg} border-2 ${areaColors.border}`}>
                      <p className={`mega-text ${statusInfo.color} font-black text-lg mb-2`}>
                        {statusInfo.icon} {statusInfo.label}
                      </p>
                      <p className="mega-text text-gray-300 text-sm">{statusInfo.description}</p>
                    </div>
                    <button
                      onClick={() =>
                        handleCTAAction(
                          statusInfo.ctaType,
                          statusInfo.ctaType === "contact" ? "contact" : "https://wa.me/6281234567890"
                        )
                      }
                      className={`w-full mega-button bg-gradient-to-r ${areaColors.gradient} text-white font-bold mega-text py-3 mega-hover flex items-center justify-center space-x-2`}
                    >
                      <Crown className="h-5 w-5" />
                      <span>{statusInfo.ctaText}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>

        {/* EPIC REQUEST SECTION - Config Driven */}
        <div className="mt-20">
          <div className="mega-card p-16 mega-hover mega-glow nusantara-glow">
            <div className="text-center">
              <div className="relative mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mega-glow nusantara-glow">
                  <span className="text-6xl">{request.icon}</span>
                </div>
                <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 animate-spin" />
                <Crown className="absolute -bottom-4 -left-4 h-10 w-10 text-yellow-500 indonesian-wave" />
                <Sword className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-red-500 opacity-30 particle-float" />
              </div>

              <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-8">{request.title}</h3>

              <div className="mega-card p-10 mb-12 max-w-4xl mx-auto">
                <p className="mega-text text-gray-300 mb-8 text-2xl leading-relaxed font-bold">
                  {request.subtitle} Kalau wilayah kamu belum ter-cover, daftar dulu biar kami prioritaskan area kamu
                  untuk
                  <span className="text-red-400 font-black"> ekspansi berikutnya</span>!
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  {request.features.map((feature, index) => (
                    <div key={index} className="mega-card p-6 mega-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className={`text-5xl mb-4 ${feature.animation || ""}`}>{feature.icon}</div>
                      <h4 className={`mega-text font-black ${feature.color} text-xl mb-2`}>{feature.title}</h4>
                      <p className="mega-text text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button
                  onClick={() => handleCTAAction(request.cta.primary.action, request.cta.primary.target)}
                  className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4"
                >
                  <Crown className="h-8 w-8" />
                  <span>{request.cta.primary.text}</span>
                  <Sword className="h-8 w-8" />
                </button>
                <button
                  onClick={() => handleCTAAction(request.cta.secondary.action, request.cta.secondary.target)}
                  className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4"
                >
                  <Sparkles className="h-8 w-8" />
                  <span>{request.cta.secondary.text}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
