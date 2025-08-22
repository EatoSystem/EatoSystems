"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sparkles, Globe, Leaf } from "lucide-react"
import { motion } from "framer-motion"

export default function InfiniteBrandSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-600 via-orange-600 to-purple-600">
      {/* Background with image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/infinite-brand-hero.jpeg"
          alt="Regenerative Brand Landscape"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <motion.div
          className="transition-all duration-1000 ease-out"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/40">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-yellow-100 flex-shrink-0" />
            <span className="text-gray-50 font-semibold text-sm sm:text-base md:text-lg">A Regenerative Brand</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-gray-50 drop-shadow-2xl">A Regenerative Brand</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-50 font-light px-4 sm:px-0 drop-shadow-2xl">
            Eato + A Word = Health + Community + Environmental Value
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-50 font-light px-4 sm:px-0 drop-shadow-2xl">
            Every application of Eato creates value that regenerates. From{" "}
            <span className="text-green-200 font-semibold drop-shadow-lg">EatoIreland</span> transforming nations to{" "}
            <span className="text-orange-200 font-semibold drop-shadow-lg">EatoTomato</span> nourishing families to{" "}
            <span className="text-yellow-200 font-semibold drop-shadow-lg">EatoHoney</span> supporting ecosystems to{" "}
            <span className="text-blue-200 font-semibold drop-shadow-lg">EatoMe</span> optimizing individuals - each
            word becomes a force for healing our health, community, and the world.
          </p>

          {/* Formula Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-12 px-4 sm:px-0">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 mb-2 sm:mb-3 drop-shadow-2xl">
                ∞
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-50 mb-1 sm:mb-2 drop-shadow-lg">
                Applications
              </div>
              <div className="text-xs sm:text-sm text-gray-100 drop-shadow-lg">Infinite possibilities</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 mb-2 sm:mb-3 drop-shadow-2xl">
                195
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-50 mb-1 sm:mb-2 drop-shadow-lg">
                Countries
              </div>
              <div className="text-xs sm:text-sm text-gray-100 drop-shadow-lg">Global potential</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 mb-2 sm:mb-3 drop-shadow-2xl">
                3
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-50 mb-1 sm:mb-2 drop-shadow-lg">
                Value Types
              </div>
              <div className="text-xs sm:text-sm text-gray-100 drop-shadow-lg">Health, Community, Environment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
