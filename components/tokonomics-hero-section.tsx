"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TokonomicsHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [tokenCount, setTokenCount] = useState(14224900)
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
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white/30 rounded-full"
      initial={{
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
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
          alt="Futuristic visualization of bees interacting with holographic data displays, representing AI-powered agricultural intelligence and regenerative food systems technology"
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">{particles}</div>

      {/* Curved light effects */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
        <motion.div
          className="absolute right-0 top-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute right-20 top-1/2 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 70%)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
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
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
              Raising Intelligence.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">
                Regenerating Earth.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed max-w-5xl mx-auto drop-shadow-lg"
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
              <h3 className="text-xl sm:text-2xl font-semibold text-white uppercase tracking-wider">
                TOKENS ACTIVATED
              </h3>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                {tokenCount.toLocaleString()}
              </div>
              <p className="text-lg sm:text-xl text-white/90 font-light">and counting</p>
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
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                Loading Payment...
              </button>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-3xl mx-auto pb-8"
          >
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Every contribution directly funds AI and Computational resources to develop all of the EatoSystems locally
              and globally.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
