"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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

export default function TokonomicsHeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Stripe script
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
      aria-labelledby="tokonomics-hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tokonomics-hero-bg.png"
          alt="Futuristic bees interacting with holographic data displays representing AI and regenerative intelligence"
          fill
          className="object-cover"
          priority
          quality={95}
        />
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
            Please Support EatoSystems to finance AI & Compute Tokens that will Design, Build, and Grow a Global
            Regenerative Food System.
          </motion.p>

          {/* Token Counter */}
          <TokenCounter />

          {/* Stripe Buy Button */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {isLoaded && (
              <div className="transform hover:scale-105 transition-transform duration-300">
                <stripe-buy-button
                  buy-button-id="buy_btn_1RqacQERiGajeDO5dfbTj6TA"
                  publishable-key="pk_live_51RqWgxERiGajeDO52BV9rZjJSIo56CgfVPvK39w2Ulu5RNtIUFoz4ZTKoZcNWEBorRhr4p2Pg2BvgyV0XuRN0KjG00yhAV4lhH"
                />
              </div>
            )}

            {/* Fallback button while Stripe loads */}
            {!isLoaded && (
              <button
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold text-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                disabled
              >
                Loading Payment Options...
              </button>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-base text-white/90 max-w-3xl mx-auto leading-relaxed pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Every contribution directly funds AI and Computational resources to develop all of the EatoSystems locally
              and globally.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
