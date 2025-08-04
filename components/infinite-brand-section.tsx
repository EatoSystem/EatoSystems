"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function InfiniteBrandSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/infinite-brand-hero.jpeg"
          alt="Infinite Brand of Value visualization showing the expansive potential of regenerative food systems and sustainable agriculture technology"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 border border-emerald-200">
              <span className="text-emerald-800 font-medium text-sm sm:text-base uppercase tracking-wider">
                The Infinite Brand of Value
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Every Word Creates
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-orange-500 to-red-500">
                Infinite Value
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Every application of Eato creates value that compounds infinitely. From{" "}
              <span className="font-semibold text-emerald-600">Place (EatoIreland)</span> to{" "}
              <span className="font-semibold text-orange-600">Produce (EatoTomato)</span> to{" "}
              <span className="font-semibold text-yellow-600">Products (EatoHoney)</span> to{" "}
              <span className="font-semibold text-blue-600">People (EatoMe)</span> - each word becomes a regenerative
              force for healing our health, community, and the world.
            </p>
          </motion.div>

          {/* Formula Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">P</span>
                </div>
                <h3 className="font-semibold text-gray-900">Place</h3>
                <p className="text-sm text-gray-600">EatoIreland</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">P</span>
                </div>
                <h3 className="font-semibold text-gray-900">Produce</h3>
                <p className="text-sm text-gray-600">EatoTomato</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-600">P</span>
                </div>
                <h3 className="font-semibold text-gray-900">Products</h3>
                <p className="text-sm text-gray-600">EatoHoney</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">P</span>
                </div>
                <h3 className="font-semibold text-gray-900">People</h3>
                <p className="text-sm text-gray-600">EatoMe</p>
              </div>
            </div>
          </motion.div>

          {/* Mathematical Formula */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 space-x-4">
              <span className="text-emerald-600 font-semibold">Eato</span>
              <span>+</span>
              <span className="text-orange-600 font-semibold">∞ Words</span>
              <span>=</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-600 font-bold">
                ∞ Value
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
