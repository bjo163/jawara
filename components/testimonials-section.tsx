"use client";

import { SectionTitle } from "@/components/section-title";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonialsConfig } from "@/configs/content/testimonials";

export function TestimonialsSection() {
  // Use testimonials config instead of hardcoded data
  const { header, testimonials, stats, cta, background } = testimonialsConfig;
  return (
    <section id="testimonials" className="py-20 nusantara-bg relative overflow-hidden">
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
        <SectionTitle title={header.title} subtitle={header.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mega-card p-8 mega-hover mega-glow scroll-reveal"
              style={{ animationDelay: stat.animationDelay }}
            >
              <div className={`text-5xl font-black ${stat.color} mb-4 mega-title`}>{stat.value}</div>
              <div className="mega-text text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="mega-card p-12 mega-hover mega-glow scroll-reveal">
            <h3 className="mega-title text-4xl mb-6">{cta.title}</h3>
            <p className="mega-text text-gray-300 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">{cta.description}</p>
            <button
              onClick={() => {
                const element = document.getElementById(cta.targetSection);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover"
            >
              {cta.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
