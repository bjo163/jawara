"use client";

import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Clock,
  Crown,
  Sparkles,
  Mic,
  ImageIcon,
  Paperclip,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo Jagoan Digital! 👋 Selamat datang di kerajaan internet Nusantara! Saya Sari, asisten virtual Jawara-Net. Ada yang bisa saya bantu hari ini?",
      sender: "support",
      time: "Baru saja",
      avatar: "👩‍💼",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "🏠 Info paket rumahan",
    "🏢 Paket bisnis",
    "📍 Cek coverage area",
    "💰 Harga berlangganan",
    "🔧 Bantuan teknis",
    "📞 Hubungi teknisi",
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: "Baru saja",
        avatar: "🧑‍💻",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      setIsTyping(true);

      // Enhanced auto reply with Indonesian context
      setTimeout(() => {
        setIsTyping(false);
        const responses = [
          "Terima kasih sudah menghubungi kami! Tim ahli Jawara-Net akan segera membantu. Untuk respon kilat seperti Garuda, langsung chat WhatsApp ya! 🦅",
          "Wah, pertanyaan yang bagus! Biar lebih mantap, saya hubungkan dengan specialist kami. Atau mau langsung video call via WhatsApp? 📞",
          "Siap jagoan! Saya catat dulu kebutuhannya. Tim teknisi kita yang berpengalaman akan follow up dalam 5 menit! ⚡",
        ];
        const autoReply = {
          id: messages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "support",
          time: "Baru saja",
          avatar: "👩‍💼",
        };
        setMessages((prev) => [...prev, autoReply]);
      }, 2000);
    }
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user",
      time: "Baru saja",
      avatar: "🧑‍💻",
    };
    setMessages([...messages, newMessage]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const contextualReplies: { [key: string]: string } = {
        "🏠 Info paket rumahan":
          "Paket rumahan kami ada 4 pilihan jagoan: Jagoan Neon (10Mbps), Mandor Sakti (25Mbps), Wiro Sableng (35Mbps), dan Sultan (50Mbps). Mau yang mana nih? 🏠",
        "🏢 Paket bisnis":
          "Untuk kerajaan bisnis, ada Startup Warrior (50Mbps), Corporate Beast (100Mbps), dan Enterprise King (200Mbps). Semua dedicated bandwidth! 🏢",
        "📍 Cek coverage area":
          "Kami sudah menguasai Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya, Yogya! Area mana yang mau dicek? 🗺️",
        "💰 Harga berlangganan":
          "Harga mulai dari Rp150rb/bulan untuk Jagoan Neon. Semua sudah termasuk instalasi gratis dan router WiFi premium! 💎",
        "🔧 Bantuan teknis":
          "Tim teknisi Jawara-Net siap membantu 24/7! Mau troubleshooting sekarang atau jadwalkan kunjungan teknisi? 🛠️",
        "📞 Hubungi teknisi":
          "Langsung hubungi teknisi senior kami di WhatsApp +62 812-3456-7890 atau mau saya buatkan tiket support? 📱",
      };

      const autoReply = {
        id: messages.length + 2,
        text: contextualReplies[reply] || "Tim specialist kami akan segera membantu dengan pertanyaan ini! 🚀",
        sender: "support",
        time: "Baru saja",
        avatar: "👩‍💼",
      };
      setMessages((prev) => [...prev, autoReply]);
    }, 1500);
  };

  return (
    <>
      {/* EPIC CHAT BUTTON - Single Instance */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mega-button w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mega-hover mega-glow nusantara-glow relative overflow-hidden shadow-2xl"
          >
            {isOpen ? (
              <X className="h-8 w-8 md:h-10 md:w-10 text-white" />
            ) : (
              <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
            )}

            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse border-2 border-white">
              <span className="text-white text-xs font-bold">!</span>
            </div>

            {/* Decorative Elements */}
            <Sparkles className="absolute -bottom-2 -left-2 h-5 w-5 md:h-6 md:w-6 text-yellow-400 animate-spin" />
            <Crown className="absolute -top-1 -left-1 h-4 w-4 md:h-5 md:w-5 text-yellow-500 indonesian-wave" />
          </button>

          {/* Floating Helper Text */}
          {!isOpen && (
            <div className="absolute bottom-full right-0 mb-4 mega-card p-3 whitespace-nowrap animate-bounce">
              <p className="mega-text text-sm font-bold text-white">💬 Ada yang bisa dibantu?</p>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
            </div>
          )}
        </div>
      </div>

      {/* EPIC CHAT WINDOW - Single Instance */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 max-w-[calc(100vw-3rem)] z-50">
          <div className="mega-card overflow-hidden mega-glow nusantara-glow shadow-2xl">
            {/* EPIC HEADER */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 md:p-6 relative overflow-hidden">
              <div className="absolute inset-0 mega-grid opacity-20"></div>
              <div className="absolute top-2 right-2 text-xl md:text-2xl garuda-soar opacity-30">🦅</div>
              <div className="absolute bottom-2 left-2 text-lg md:text-xl indonesian-wave opacity-30">⚔️</div>

              <div className="relative z-10 flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <span className="text-xl md:text-2xl">👩‍💼</span>
                </div>
                <div className="flex-1">
                  <h3 className="mega-text font-black text-white text-lg md:text-xl">Sari - Asisten Jawara</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="mega-text text-white/90 text-xs md:text-sm font-bold">
                      Online - Siap Membantu!
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2 w-2 md:h-3 md:w-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="mega-text text-white/80 text-xs ml-1">4.9/5</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors mega-hover"
                >
                  <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </button>
              </div>
            </div>

            {/* EPIC QUICK ACTIONS */}
            <div className="p-3 md:p-4 bg-slate-800/50 border-b border-gray-700">
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <button
                  onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                  className="mega-card p-2 md:p-3 text-center mega-hover bg-green-500/20 border border-green-500/30 group"
                >
                  <Phone className="h-4 w-4 md:h-6 md:w-6 text-green-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="mega-text text-green-400 text-xs font-bold">WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open("mailto:info@jawara-net.com", "_blank")}
                  className="mega-card p-2 md:p-3 text-center mega-hover bg-blue-500/20 border border-blue-500/30 group"
                >
                  <Mail className="h-4 w-4 md:h-6 md:w-6 text-blue-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="mega-text text-blue-400 text-xs font-bold">Email</span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("faq");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className="mega-card p-2 md:p-3 text-center mega-hover bg-purple-500/20 border border-purple-500/30 group"
                >
                  <Clock className="h-4 w-4 md:h-6 md:w-6 text-purple-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="mega-text text-purple-400 text-xs font-bold">FAQ</span>
                </button>
              </div>
            </div>

            {/* EPIC MESSAGES */}
            <div className="h-64 md:h-80 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-slate-900/30">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-end space-x-2 max-w-xs ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs md:text-sm">{msg.avatar}</span>
                    </div>
                    <div
                      className={`mega-card p-3 md:p-4 ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                          : "bg-slate-700/50 text-gray-300"
                      }`}
                    >
                      <p className="mega-text text-xs md:text-sm font-bold leading-relaxed">{msg.text}</p>
                      <span className="mega-text text-xs opacity-70 mt-2 block">{msg.time}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end space-x-2 max-w-xs">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-xs md:text-sm">👩‍💼</span>
                    </div>
                    <div className="mega-card p-3 md:p-4 bg-slate-700/50">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* QUICK REPLIES */}
            <div className="p-3 md:p-4 border-t border-gray-700 bg-slate-800/30">
              <p className="mega-text text-gray-400 text-xs mb-2 md:mb-3 font-bold">💡 Pertanyaan Populer:</p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {quickReplies.slice(0, 3).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="mega-card px-2 md:px-3 py-1 md:py-2 text-xs mega-text font-bold text-orange-400 hover:bg-orange-500/20 transition-colors mega-hover"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* EPIC INPUT */}
            <div className="p-3 md:p-4 border-t border-gray-700 bg-slate-800/50">
              <div className="flex space-x-2 md:space-x-3 mb-2 md:mb-3">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ketik pesan kamu disini..."
                  className="flex-1 bg-slate-700 border-gray-600 text-white mega-text font-bold placeholder:text-gray-400 text-xs md:text-sm"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  className="mega-button px-3 md:px-4 py-2 mega-hover"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>

              {/* Additional Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 md:space-x-2">
                  <button className="w-6 h-6 md:w-8 md:h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <Paperclip className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  </button>
                  <button className="w-6 h-6 md:w-8 md:h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <ImageIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  </button>
                  <button className="w-6 h-6 md:w-8 md:h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors">
                    <Mic className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  </button>
                </div>
                <p className="mega-text text-gray-400 text-xs font-bold">Tim kami online 24/7! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
