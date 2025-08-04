"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function InfiniteBrandSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Floating particles animation
  const particles = Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      initial={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * 800,
      }}
      animate={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * 800,
      }}
      transition={{
        duration: Math.random() * 15 + 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  ))

  // Geometric shapes animation
  const shapes = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute ${
        i % 3 === 0 ? "w-4 h-4 bg-purple-400/10" : i % 3 === 1 ? "w-6 h-6 bg-orange-400/10" : "w-3 h-3 bg-pink-400/10"
      } rounded-full`}
      initial={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * 800,
        rotate: 0,
      }}
      animate={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * 800,
        rotate: 360,
      }}
      transition={{
        duration: Math.random() * 20 + 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  ))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/infinite-brand-hero.jpeg"
          alt="Infinite Brand of Value visualization showing the mathematical beauty of regenerative food systems with cosmic purple and orange gradients"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-800/40 to-orange-900/60" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">{typeof window !== "undefined" && particles}</div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">{typeof window !== "undefined" && shapes}</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/20"
          >
            <span className="text-white font-medium text-sm sm:text-base uppercase tracking-wider">
              The Infinite Brand of Value
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Eato + Any Word =
            </h1>
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              <span className="text-green-300">Health Value</span>
              <span className="text-white mx-2 sm:mx-4">+</span>
              <span className="text-orange-300">Community Value</span>
              <span className="text-white mx-2 sm:mx-4">+</span>
              <span className="text-purple-300">Environmental Value</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 font-light"
          >
            Every application of Eato creates value that compounds infinitely. From{" "}
            <span className="text-green-400 font-medium">Place (EatoIreland)</span> to{" "}
            <span className="text-orange-400 font-medium">Produce (EatoTomato)</span> to{" "}
            <span className="text-yellow-400 font-medium">Products (EatoHoney)</span> to{" "}
            <span className="text-blue-400 font-medium">People (EatoMe)</span> - each word becomes a regenerative force
            for healing our health, community, and the world.
          </motion.p>

          {/* Formula Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">∞</div>
              <div className="text-lg sm:text-xl font-semibold text-white mb-2">Applications</div>
              <div className="text-sm sm:text-base text-white/80">Unlimited potential</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">195</div>
              <div className="text-lg sm:text-xl font-semibold text-white mb-2">Countries</div>
              <div className="text-sm sm:text-base text-white/80">Global reach</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">3</div>
              <div className="text-lg sm:text-xl font-semibold text-white mb-2">Value Types</div>
              <div className="text-sm sm:text-base text-white/80">Holistic impact</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
