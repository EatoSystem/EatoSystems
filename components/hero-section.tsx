"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Users, Code } from "lucide-react"
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
      <div className="absolute inset-0">
        {/* Video background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250804_1040_Global%20Connectivity%20Visualization_remix_01k1t77nswff6bm965gpvx9d1g-2iOWWEc3yA90gT5CzgZMIyonBR0IBf.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-orange-500/80"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-orange-400/40 animate-pulse"></div>

        {/* Flowing organic shapes */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Flowing wave animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z"
              fill="url(#gradient1)"
              fillOpacity="0.4"
              animate={{
                d: [
                  "M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z",
                  "M0 350C400 250 800 450 1200 350C1600 250 1920 450 1920 350V1080H0V350Z",
                  "M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z"
              fill="url(#gradient2)"
              fillOpacity="0.3"
              animate={{
                d: [
                  "M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z",
                  "M0 450C400 350 800 550 1200 450C1600 350 1920 550 1920 450V1080H0V450Z",
                  "M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-10"
        >
          {/* Top pill badge - moved above title with proper spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center pt-4 sm:pt-8"
          >
            <div className="inline-flex items-center bg-white/35 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 sm:py-4 border border-white/40 shadow-lg">
              <span className="text-white font-semibold text-xs sm:text-base uppercase tracking-wider drop-shadow-2xl">
                FROM SOIL TO SANCTUARY
              </span>
            </div>
          </motion.div>

          {/* Main title - responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3 sm:space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-snug drop-shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100">
                EatoSystem
              </span>
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-50 drop-shadow-2xl">
              The Regenerative Food System for Earth
            </h2>
          </motion.div>

          {/* Description paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-gray-50 font-light leading-relaxed max-w-4xl mx-auto px-2 drop-shadow-2xl"
          >
            Building the world's first comprehensive ecosystem of regenerative food systems — from AI-powered
            agriculture to global food security infrastructure through EatoSystem.
          </motion.p>

          {/* Glass morphism description card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto px-2"
          >
            <div className="bg-white/25 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/40 shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-50 leading-relaxed font-light drop-shadow-2xl">
                We're building a global food system rooted in health, community, and environmental regeneration — one
                story, one collaboration, and one system at a time.
              </p>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-w-[200px]"
              onClick={() => {
                document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>Explore Systems</span>
              <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
          </motion.div>

          {/* Feature cards - only Global Community and Open Source */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pt-6 sm:pt-8 px-2"
          >
            <div className="bg-white/25 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-gray-50 drop-shadow-lg" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-50 mb-3 sm:mb-4 drop-shadow-2xl">
                Global Community
              </h3>
              <p className="text-sm sm:text-base text-gray-50 leading-relaxed drop-shadow-lg">
                Join thousands of developers, farmers, and innovators building the future of food systems worldwide.
              </p>
            </div>

            <div className="bg-white/25 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Code className="w-6 sm:w-8 h-6 sm:h-8 text-gray-50 drop-shadow-lg" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-50 mb-3 sm:mb-4 drop-shadow-2xl">
                Open Source
              </h3>
              <p className="text-sm sm:text-base text-gray-50 leading-relaxed drop-shadow-lg">
                Transparent, collaborative development with full access to source code and comprehensive documentation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
