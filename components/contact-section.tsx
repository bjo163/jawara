"use client";

import { SectionTitle } from "@/components/section-title";
import { ContactForm } from "@/components/contact-form";
import { Phone, Crown, Sparkles, Sword, Shield } from "lucide-react";
import { contactConfig } from "@/configs/content/contact";

export function ContactSection() {
  // Use contact config instead of hardcoded data
  const { header, intro, methods, hours, quickActions, stats, background } = contactConfig;
  return (
    <section id="contact" className="py-20 nusantara-bg relative overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* EPIC CONTACT INFO */}
          <div className="space-y-8">
            {" "}
            {/* EPIC HEADER */}
            <div className="mega-card p-10 mega-hover mega-glow scroll-reveal">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 p-8 rounded-2xl shadow-2xl nusantara-glow border-4 border-orange-300">
                    <h3 className="text-3xl font-black text-slate-900 drop-shadow-lg">{intro.title}</h3>
                  </div>
                  <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-spin" />
                  <Crown className="absolute -top-2 -left-2 h-6 w-6 text-yellow-500 indonesian-wave" />
                </div>
                <p className="mega-text text-gray-300 text-lg leading-relaxed">{intro.description}</p>
              </div>{" "}
              <div className="space-y-6">
                {methods.map((method, index) => (
                  <div
                    key={index}
                    className={`mega-card p-6 mega-hover ${method.bgColor} border-2 ${method.borderColor}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center mega-glow nusantara-glow`}
                      >
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mega-text font-black text-white mb-2 text-xl">{method.title}</h4>
                        {Array.isArray(method.value) ? (
                          method.value.map((line, idx) => (
                            <p key={idx} className={`mega-text ${method.valueColor} text-lg font-bold`}>
                              {line}
                            </p>
                          ))
                        ) : (
                          <p className={`mega-text ${method.valueColor} text-lg font-bold`}>{method.value}</p>
                        )}
                        <p className="mega-text text-gray-300 text-sm font-bold">{method.description}</p>
                        {method.link && (
                          <div className="mt-3">
                            <a
                              href={method.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`mega-button bg-gradient-to-r ${method.gradient} px-6 py-3 text-white font-bold mega-text mega-hover inline-flex items-center space-x-2`}
                            >
                              <span>{method.link.text}</span>
                              <method.link.icon className="h-5 w-5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Operating Hours Section */}
                <div className={`mega-card p-6 mega-hover ${hours.bgColor} border-2 ${hours.borderColor}`}>
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${hours.gradient} rounded-xl flex items-center justify-center mega-glow nusantara-glow`}
                    >
                      <hours.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">{hours.title}</h4>
                      <div className="space-y-2">
                        {hours.schedules.map((schedule, idx) => (
                          <p key={idx} className={`mega-text ${hours.valueColor} text-lg font-bold`}>
                            {schedule.service}: {schedule.hours} {schedule.icon}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* EPIC QUICK ACTIONS */}
            <div className="mega-card p-8 mega-hover mega-glow nusantara-glow scroll-reveal">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <h4 className="mega-title text-3xl mb-4">{quickActions.title}</h4>
                  <Sword className="absolute -top-2 -right-2 h-8 w-8 text-red-500 particle-float" />
                  <Shield className="absolute -top-2 -left-2 h-8 w-8 text-blue-500 garuda-soar" />
                </div>
                <p className="mega-text text-gray-300 text-lg">{quickActions.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickActions.actions.map((action) => (
                  <a
                    key={action.id}
                    href={action.url}
                    target={action.target || undefined}
                    rel={action.target === "_blank" ? "noopener noreferrer" : undefined}
                    className={`mega-button bg-gradient-to-r ${action.gradient} px-8 py-6 text-white font-black mega-text mega-hover flex items-center justify-center space-x-3 text-xl`}
                  >
                    <span className="text-2xl">{action.icon}</span>
                    <span>{action.text}</span>
                    <action.actionIcon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* EPIC CONTACT FORM */}
          <div className="scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <ContactForm />
          </div>
        </div>{" "}
        {/* EPIC SUPPORT STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="mega-card p-8 mega-hover mega-glow scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow`}
              >
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className={`text-4xl font-black ${stat.color} mb-4 mega-title`}>{stat.value}</div>
              <div className="mega-text text-gray-400 text-lg font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
