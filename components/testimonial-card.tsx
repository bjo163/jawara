"use client"

import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  location: string
  image: string
  rating: number
  comment: string
  packageName: string
}

export function TestimonialCard({ name, role, location, image, rating, comment, packageName }: TestimonialCardProps) {
  return (
    <div className="mega-card p-8 mega-hover mega-glow">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="rounded-full border-4 border-orange-500/30 mega-glow"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">✓</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="mega-text font-black text-white text-xl">{name}</h4>
          <p className="mega-text text-orange-400 font-bold">{role}</p>
          <p className="mega-text text-gray-500 text-sm">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
        ))}
      </div>

      {/* Comment */}
      <p className="mega-text text-gray-300 mb-6 leading-relaxed text-lg">"{comment}"</p>

      {/* Package */}
      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-3 rounded-xl border border-orange-500/30">
        <span className="mega-text text-gray-400 text-sm">Paket: </span>
        <span className="mega-text font-black text-orange-400">{packageName}</span>
      </div>
    </div>
  )
}
