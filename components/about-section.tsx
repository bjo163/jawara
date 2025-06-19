"use client";

import { SectionTitle } from "@/components/section-title";
import { aboutConfig } from "@/configs/content/about";

export function AboutSection() {
  // Use about config instead of hardcoded data
  const { header, story, missionVision, whyChooseUs, funFact, background } = aboutConfig;

  return (
    <section id="about" className="py-16 md:py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
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
        <SectionTitle title={header.title} subtitle={header.subtitle} />{" "}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {" "}
            <div className="mega-card p-6 md:p-10 mega-hover scroll-reveal">
              <h3 className="mega-title text-2xl md:text-3xl mb-4 md:mb-6">{story.title}</h3>
              <p className="mega-text text-gray-300 text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                Kami adalah <span className="text-orange-400 font-black">Penyedia Internet Nusantara</span> yang{" "}
                <span className="text-blue-400 font-black">memahami jiwa pejuang digital Indonesia</span>. Dari yang
                gemar menonton drama Korea di Netflix sampai yang butuh koneksi stabil untuk membangun startup unicorn,
                <span className="text-green-400 font-black"> semua mimpi digital kalian adalah misi kami!</span>
              </p>
              <p className="mega-text text-gray-300 text-lg md:text-xl leading-relaxed">
                Dengan teknologi fiber optic terdepan dan tim support yang siap siaga seperti{" "}
                <span className="text-red-400 font-black">Penjaga Istana Merdeka</span>, kami berkomitmen memberikan
                pengalaman internet yang <span className="text-purple-400 font-black">lancar jaya tanpa hambatan</span>.
              </p>
            </div>
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {missionVision.map((item) => (
                <div
                  key={item.id}
                  className="mega-card p-6 md:p-8 mega-hover scroll-reveal"
                  style={{ animationDelay: item.animationDelay }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.iconGradient} rounded-full flex items-center justify-center mega-glow`}
                    >
                      <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h4 className="mega-title text-xl md:text-2xl">{item.title}</h4>
                  </div>
                  <p className="mega-text text-gray-300 leading-relaxed text-base md:text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div
              className="mega-card p-6 md:p-10 mega-hover mega-glow scroll-reveal"
              style={{ animationDelay: whyChooseUs.animationDelay }}
            >
              <h4 className="mega-title text-2xl md:text-3xl text-center mb-6 md:mb-8">{whyChooseUs.title}</h4>

              <div className="space-y-6 md:space-y-8">
                {whyChooseUs.features.map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-4 md:space-x-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.iconGradient} rounded-2xl flex items-center justify-center mega-glow nusantara-glow`}
                    >
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div>
                      <h5 className="mega-text font-black text-white mb-2 text-lg md:text-xl">{feature.title}</h5>
                      <p className="mega-text text-gray-400 text-base md:text-lg">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div
              className="mega-card p-6 md:p-8 mega-hover nusantara-glow scroll-reveal"
              style={{ animationDelay: funFact.animationDelay }}
            >
              <h5 className="mega-title text-xl md:text-2xl mb-4">{funFact.title}</h5>
              <p className="mega-text text-gray-300 leading-relaxed text-base md:text-lg">{funFact.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
