"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Background with enhanced accessibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
        <Image
          src="/images/global-network-earth.png"
          alt="Global network visualization showing interconnected food systems across Earth, representing the worldwide regenerative agriculture movement and sustainable food technology infrastructure"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          onError={(e) => {
            // Enhanced error handling with accessibility
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.src = "/placeholder.svg?height=1080&width=1920&text=Global+Food+Network"
            target.alt = "Placeholder image for global food systems network (original image unavailable)"
          }}
        />
      </div>

      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 pt-20 sm:pt-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Enhanced tagline with accessibility */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 border border-white/30"
            role="banner"
            aria-label="EatoSystems tagline"
          >
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide break-words">
              From Soil to Sanctuary
            </span>
          </motion.div>

          {/* Main title with enhanced accessibility */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
              EatoSystems
            </span>
          </motion.h1>

          {/* Subtitle with accessibility */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 sm:mb-6 md:mb-8 break-words"
            role="heading"
            aria-level={2}
          >
            Regenerative Food Systems for Earth
          </motion.div>

          {/* Description with enhanced accessibility */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-2 sm:px-4 md:px-0"
            role="text"
            aria-describedby="hero-description"
          >
            <span id="hero-description">
              Building the world's first comprehensive ecosystem of regenerative food systems — from AI-powered
              agriculture to global food security infrastructure.
            </span>
          </motion.p>

          {/* Action buttons with enhanced accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-0"
            role="group"
            aria-label="Primary navigation actions"
          >
            <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" })
                }}
                aria-label="Scroll to explore the 12 EatoSystems in detail"
              >
                <span className="break-words">Explore Systems</span>
                <ArrowRight
                  className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0"
                  aria-hidden="true"
                />
              </Button>
            </div>

            <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl rounded-full w-full sm:w-auto"
                  aria-label="Begin building with EatoSystems - access developer tools and resources"
                >
                  <span className="break-words">Start Building</span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Feature cards with enhanced accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0"
            role="group"
            aria-label="Key features of EatoSystems"
          >
            <div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              role="article"
              aria-labelledby="feature-innovation-title"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
              </div>
              <h3
                id="feature-innovation-title"
                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words"
              >
                Innovative Technology
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Cutting-edge solutions for sustainable food systems and regenerative agriculture powered by AI and
                robotics.
              </p>
            </div>

            <div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              role="article"
              aria-labelledby="feature-community-title"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
              </div>
              <h3
                id="feature-community-title"
                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words"
              >
                Global Community
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Join thousands of developers, farmers, and innovators building the future of food systems worldwide.
              </p>
            </div>

            <div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
              role="article"
              aria-labelledby="feature-opensource-title"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 md:mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
              </div>
              <h3
                id="feature-opensource-title"
                className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 break-words"
              >
                Open Source
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed break-words">
                Transparent, collaborative development with full access to source code and comprehensive documentation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
