"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// Particle component for floating animations
const Particle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
      initial={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: typeof window !== "undefined" ? window.innerHeight + 10 : 800,
        opacity: 0,
      }}
      animate={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: -10,
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}

// Curved light effect component
const CurvedLight = () => {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -right-20 top-1/4 w-96 h-96"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute top-4 left-4 w-full h-full border border-orange-400/30 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute -right-32 top-1/2 w-64 h-64"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border border-pink-400/20 rounded-full"></div>
      </motion.div>
    </div>
  )
}

// Token counter component with animation
const TokenCounter = () => {
  const [count, setCount] = useState(14224900)
  const [displayCount, setDisplayCount] = useState(14224900)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 10) + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateCount = () => {
      const start = displayCount
      const end = count
      const duration = 1000
      const startTime = Date.now()

      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(start + (end - start) * progress)
        setDisplayCount(current)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }

    animateCount()
  }, [count, displayCount])

  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="text-sm font-semibold text-orange-400 mb-3 tracking-wider uppercase">TOKENS ACTIVATED</div>
      <div className="text-5xl md:text-7xl font-bold text-white mb-3 font-mono tracking-tight">
        {displayCount.toLocaleString()}
      </div>
      <div className="text-lg text-purple-300 font-medium">and counting</div>
    </motion.div>
  )
}

const MorphingSupporterTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const supporterTypes = [
    {
      type: "SUPPORTER",
      amount: "Millions",
      tokenCount: "1M Plus AI & Compute Credits (Tokens)",
      price: "€15+",
      gradient: "from-green-400 to-emerald-400",
      badgeGradient: "from-green-400 via-emerald-500 to-teal-600",
    },
    {
      type: "ENTERPRISE",
      amount: "Billions",
      tokenCount: "1B Plus AI & Compute Credits (Tokens)",
      price: "€15K+",
      gradient: "from-orange-400 to-red-400",
      badgeGradient: "from-orange-400 via-red-500 to-pink-600",
    },
    {
      type: "PHILANTHROPIST",
      amount: "Trillions",
      tokenCount: "1T Plus AI & Compute Credits (Tokens)",
      price: "€15M+",
      gradient: "from-purple-400 to-violet-400",
      badgeGradient: "from-purple-400 via-violet-500 to-indigo-600",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % supporterTypes.length)
    }, 6000) // increased from 4000ms to 6000ms to slow down the morphing

    return () => clearInterval(interval)
  }, [supporterTypes.length])

  const currentSupporter = supporterTypes[currentIndex]

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-xl font-bold bg-gradient-to-r ${currentSupporter.badgeGradient} text-white`}
        >
          <span>{currentSupporter.type}</span>
        </div>

        {/* Fund Amount */}
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Fund{" "}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSupporter.gradient}`}>
            {currentSupporter.amount}
          </span>
        </h2>

        {/* Token Count */}
        <div className="text-xl md:text-2xl text-white/90 font-semibold">{currentSupporter.tokenCount}</div>

        {/* Price */}
        <div
          className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${currentSupporter.gradient}`}
        >
          {currentSupporter.price}
        </div>
      </motion.div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {supporterTypes.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function TokonomicsHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
      aria-labelledby="tokonomics-hero-title"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-uYzaiANatOw9mMufbJoacnWXBQ5IOw.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-purple-800/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Animated Background Effects */}
      <CurvedLight />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} delay={i * 0.5} />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline - Moved down with more padding */}
          <motion.h1
            id="tokonomics-hero-title"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Raising Intelligence.
            <br />
            Regenerating Earth.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Please Support the EatoSystem to finance AI &amp; Compute Tokens that will Design, Build, and Grow a Global
            Regenerative Food System with a DNA of Health, Community, &amp; Environment.
          </motion.p>

          {/* Token Counter */}
          <TokenCounter />

          <MorphingSupporterTypes />

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <a
              href="/raising-intelligence"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Support the EatoSystem
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>Every contribution directly funds AI and Computational resources to develop the EatoSystem.</p>
            <p className="text-sm text-white/70 mt-4 italic">
              Please Note: This is a donation to support the development of regenerative food systems technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
