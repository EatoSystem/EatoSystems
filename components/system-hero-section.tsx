"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SystemHeroSectionProps {
  systemSlug: string
  systemData: any
}

export default function SystemHeroSection({ systemSlug, systemData }: SystemHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getSystemImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      eatocultures: "soil",
      eatoagent: "seed",
      eatoindex: "pollination",
      eatoverse: "root",
      eatobotics: "sprout",
      eatoai: "mycelium",
      eatofund: "crop",
      eatosystem: "harvest",
      eatogov: "regeneration",
      eatotransit: "flow",
      eatofoundation: "sanctuary",
      eatosecure: "canopy",
    }
    return imageMap[slug] || "soil"
  }

  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with same gradient as homepage */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
        <Image
          src={`/images/systems/${systemSlug}-${getSystemImage(systemSlug)}.png`}
          alt={`${systemData.name} System Background`}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          onError={(e) => {
            // Fallback to global network image if system image doesn't load
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.src = "/images/global-network-earth.png"
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 pt-20 sm:pt-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Layer Badge - same style as homepage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 border border-white/30"
          >
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide break-words">
              {systemData.layer} Layer System
            </span>
          </motion.div>

          {/* Main Title - same gradient as homepage */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
              {systemData.name}
            </span>
          </motion.h1>

          {/* Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 sm:mb-6 md:mb-8 break-words"
          >
            {systemData.version}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-2 sm:px-4 md:px-0"
          >
            {systemData.description}
          </motion.p>

          {/* Action Buttons - same style as homepage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-0"
          >
            <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("system-content")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="break-words">Explore System</span>
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
              </Button>
            </div>

            <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
              <Link href={`/eatosystems/${systemSlug}-lab`}>
                <Button
                  size="lg"
                  className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl rounded-full w-full sm:w-auto"
                >
                  <span className="break-words">Developer Lab</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards - same style as homepage stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words">
                Innovative Technology
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Cutting-edge solutions for sustainable food systems and regenerative agriculture.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words">
                Global Community
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Join thousands of developers, farmers, and innovators building the future of food.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words">
                Open Source
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Transparent, collaborative development with full access to source code and documentation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
