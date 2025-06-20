"use client";

import { SectionTitle } from "@/components/section-title";
import { AccordionItem } from "@/components/accordion-item";
import { faqConfig } from "@/configs/content/faq";

export function FaqSection() {
  const { sectionId, title, subtitle, faqs, cta, backgroundElements } = faqConfig;

  return (
    <section id={sectionId} className="py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl indonesian-wave opacity-20">{backgroundElements.topLeft}</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">
        {backgroundElements.bottomRight}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <AccordionItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="mega-card p-12 mega-hover mega-glow scroll-reveal">
            <h3 className="mega-title text-4xl mb-6">{cta.title}</h3>
            <p className="mega-text text-gray-300 mb-8 text-xl leading-relaxed">{cta.description}</p>
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
