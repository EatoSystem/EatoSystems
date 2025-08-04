"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Sparkles, Leaf } from "lucide-react"

export default function InfiniteBrandSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="infinite-brand" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-orange-600 to-purple-600">
        <Image
          src="/images/infinite-brand-hero.jpeg"
          alt="Infinite Brand Landscape"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-yellow-200 flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              The Brand of Infinite Value
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-white break-words">The Brand of Infinite Value</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Eato + Any Word = Health Value + Community Value + Environmental Value
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Every application of Eato creates value that compounds infinitely. From Place{" "}
            <span className="text-green-300 font-semibold">(EatoIreland)</span> to Produce{" "}
            <span className="text-orange-300 font-semibold">(EatoTomato)</span> to Products{" "}
            <span className="text-yellow-300 font-semibold">(EatoHoney)</span> to People{" "}
            <span className="text-blue-300 font-semibold">(EatoMe)</span> - each word becomes a regenerative force for
            healing our health, community, and the world.
          </p>

          {/* Formula Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                ∞
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Applications
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Infinite possibilities</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                195
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Countries
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Global potential</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                3
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Value Types
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Health, Community, Environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
