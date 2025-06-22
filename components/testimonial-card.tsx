'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  location: string
  image: string
  rating: number
  comment: string
  packageName: string
}

export function TestimonialCard({
  name,
  role,
  location,
  image,
  rating,
  comment,
  packageName,
}: TestimonialCardProps) {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          width={60}
          height={60}
          className="rounded-full border-2 border-orange-500/20"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        &quot;{comment}&quot;
      </p>

      {/* Package */}
      <div className="bg-slate-700/50 px-3 py-2 rounded-lg">
        <span className="text-xs text-gray-400">Paket: </span>
        <span className="text-sm font-semibold text-orange-400">
          {packageName}
        </span>
      </div>
    </div>
  )
}
