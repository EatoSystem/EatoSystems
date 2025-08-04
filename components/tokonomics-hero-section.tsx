"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TokonomicsHeroSection() {
  const [tokenCount, setTokenCount] = useState(14224900)
  const [isVisible, setIsVisible] = useState(false)
  const [stripeLoaded, setStripeLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Load Stripe script
    const script = document.createElement("script")
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true
    script.onload = () => setStripeLoaded(true)
    document.head.appendChild(script)

    // Animate token counter
    const interval = setInterval(() => {
      setTokenCount((prev) => prev + Math.floor(Math.random() * 10) + 1)
    }, 2000)

    return () => {
      clearInterval(interval)
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white/30 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
      }}
      transition={{
        duration: Math.random() * 10 + 10,
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
          src="/images/tokonomics-hero-bg.png"
          alt="Futuristic bees interacting with holographic data displays showing AI and computational intelligence in a cosmic purple and orange environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={95}
        />
        {/* Clean overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">{typeof window !== "undefined" && particles}</div>

      {/* Curved Light Effects */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -right-20 top-1/4 w-40 h-96 bg-gradient-to-l from-purple-400/20 to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -right-32 top-1/2 w-60 h-80 bg-gradient-to-l from-orange-400/15 to-transparent rounded-full blur-2xl"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Raising Intelligence.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-orange-300 to-purple-300">
                Regenerating Earth.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed text-white/95 font-light drop-shadow-md"
          >
            Please Support EatoSystems to finance AI & Compute Tokens that will Design, Build, and Grow a Global
            Regenerative Food System.
          </motion.p>

          {/* Token Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-white/90 uppercase tracking-wider">
                TOKENS ACTIVATED
              </h3>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                {tokenCount.toLocaleString()}
              </div>
              <p className="text-lg sm:text-xl text-white/80 font-light">and counting</p>
            </div>
          </motion.div>

          {/* Buy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-16"
          >
            {stripeLoaded ? (
              <stripe-buy-button
                buy-button-id="buy_btn_1RqacQERiGajeDO5dfbTj6TA"
                publishable-key="pk_live_51RqWgxERiGajeDO52BV9rZjJSIo56CgfVPvK39w2Ulu5RNtIUFoz4ZTKoZcNWEBorRhr4p2Pg2BvgyV0XuRN0KjG00yhAV4lhH"
              />
            ) : (
              <div className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                Support EatoSystems
              </div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed pb-8"
          >
            Every contribution directly funds AI and Computational resources to develop all of the EatoSystems locally
            and globally.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
