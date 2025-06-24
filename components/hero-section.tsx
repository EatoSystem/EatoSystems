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

      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
            <Sparkles className="w-6 h-6 mr-3 text-green-200" />
            <span className="text-white font-semibold text-lg">REGENERATIVE • Food Systems Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
              EatoSystems
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">From Soil to Sanctuary</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
            Building the world's first regenerative food system, one that begins with knowledge and cultures then grows
            into infrastructure, finance, robotics, AI, governance, and global trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link href="/support">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
              >
                Support the Mission <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>

            <Link href="/start-building">
              <Button
                size="lg"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-10 py-5 text-xl rounded-full"
              >
                <Code className="mr-3 h-6 w-6" />
                Start Building
              </Button>
            </Link>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">12</div>
              <div className="text-lg font-semibold text-white mb-2">Systems</div>
              <div className="text-sm text-white/80">Integrated Solutions</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">Global</div>
              <div className="text-lg font-semibold text-white mb-2">Network</div>
              <div className="text-sm text-white/80">Worldwide Reach</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">Open</div>
              <div className="text-lg font-semibold text-white mb-2">Source</div>
              <div className="text-sm text-white/80">Community Driven</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <TreePine className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">∞</div>
              <div className="text-lg font-semibold text-white mb-2">Impact</div>
              <div className="text-sm text-white/80">Regenerative Future</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
