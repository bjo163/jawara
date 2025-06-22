'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'
import { widgetStateManager } from '@/lib/widget-state'

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isForceHidden, setIsForceHidden] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Halo! Selamat datang di Jawara-Net! 👋 Ada yang bisa kami bantu?',
      isBot: true,
      time: 'Sekarang',
    },
  ])

  // Subscribe to widget state changes
  useEffect(() => {
    const unsubscribe = widgetStateManager.subscribe(activeWidget => {
      if (activeWidget === 'subscription' && isOpen) {
        // Jika subscription widget dibuka dan chat widget sedang terbuka, tutup chat
        setIsOpen(false)
        setIsForceHidden(true)
      } else if (activeWidget === null) {
        // Jika tidak ada widget yang aktif, reset force hidden
        setIsForceHidden(false)
      }
    })

    return unsubscribe
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    setIsForceHidden(false)
    widgetStateManager.setActiveWidget('chat')
  }

  const handleClose = () => {
    setIsOpen(false)
    widgetStateManager.setActiveWidget(null)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        time: 'Sekarang',
      }

      setMessages([...messages, newMessage])
      setMessage('')

      // Auto reply dari bot
      setTimeout(() => {
        const botReply = {
          id: messages.length + 2,
          text: 'Terima kasih atas pesan Anda! Tim customer service kami akan segera merespons. Atau hubungi langsung telepon kami di +62 812-9529-5734 untuk respon lebih cepat! 🚀',
          isBot: true,
          time: 'Sekarang',
        }
        setMessages(prev => [...prev, botReply])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  return (
    <>
      {' '}
      {/* Chat Widget Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {!isOpen && !isForceHidden && (
          <button
            onClick={handleOpen}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        )}
        {/* Chat Window */}
        {isOpen && (
          <div className="bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl w-72 md:w-80 h-80 md:h-96 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 md:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg md:text-xl">👑</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm md:text-base">
                    Jawara-Net Support
                  </h3>
                  <p className="text-xs text-orange-100">
                    Online • Siap membantu 24/7
                  </p>
                </div>
              </div>{' '}
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-2xl ${
                      msg.isBot
                        ? 'bg-gray-700 text-white'
                        : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-gray-700">
              <div className="flex space-x-2 mb-3">
                <a
                  href="https://wa.me/6281295295734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span>Telepon</span>
                </a>
                <a
                  href="tel:+6281295295734"
                  className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call</span>
                </a>
                <a
                  href="mailto:info@jawara-net.com"
                  className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-full text-xs transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan Anda..."
                  className="flex-1 bg-slate-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>{' '}
      {/* Status Indicator */}
      {!isOpen && !isForceHidden && (
        <div className="fixed bottom-16 right-4 md:bottom-20 md:right-6 z-40">
          <div className="bg-slate-900/90 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>CS Online</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
