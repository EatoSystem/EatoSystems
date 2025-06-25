"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, TreePine, Building2, Code, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
        {!imageError && (
          <Image
            src="/images/global-network-earth.png"
            alt="Global Regenerative Food Systems Network"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        )}
        {/* Fallback gradient pattern if image fails */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-emerald-400/20 to-orange-500/30 opacity-40"></div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-green-200" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              REGENERATIVE • Food Systems Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
              EatoSystems
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/90 break-words">
              From Soil to Sanctuary
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Building the world's first regenerative food system, one that begins with knowledge and cultures then grows
            into infrastructure, finance, robotics, AI, governance, and global trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
            <Link href="/support">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
              >
                <span className="break-words">Support the Mission</span>{" "}
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              </Button>
            </Link>

            <Link href="/start-building">
              <Button
                size="lg"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-full w-full sm:w-auto"
              >
                <Code className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="break-words">Start Building</span>
              </Button>
            </Link>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {/* Each stat item */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                12
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Systems
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Integrated Solutions</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                Global
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Network
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Worldwide Reach</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                Open
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Source
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Community Driven</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <TreePine className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                ∞
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Impact
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Regenerative Future</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
