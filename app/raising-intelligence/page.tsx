"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Users, Building, Heart, Sparkles, Zap, Crown } from "lucide-react"

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

// Supporter types data
const supporterTypes = [
  {
    type: "Supporter",
    icon: Heart,
    decorativeIcon: Sparkles,
    tokenAmount: "Millions",
    tokenCount: "1M Plus",
    price: "€15+",
    priceDetail: "Starting at €15",
    description:
      "Join thousands of individuals who believe in regenerating our planet through intelligent food systems. Your contribution directly funds AI tokens and computational resources that power the development of local regenerative food networks. Every donation helps train AI models to optimize soil health, reduce food waste, and create sustainable growing practices that can feed communities while healing the earth.",
    buttonText: "Fund Millions 1M Plus AI & Compute Credits (Tokens)",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    bgGradient: "from-green-500/10 to-emerald-600/10",
    borderGradient: "from-green-500/30 to-emerald-600/30",
    glowColor: "shadow-green-500/25",
    tokenIcon: "💎",
    stripeButtonId: "buy_btn_1RqacQERiGajeDO5dfbTj6TA",
  },
  {
    type: "Fund Billions",
    icon: Building,
    decorativeIcon: Zap,
    tokenAmount: "Billions",
    tokenCount: "1B Plus",
    price: "€15K+",
    priceDetail: "Starting at €15,000",
    description:
      "Enterprise partners drive civilization-scale change in how humanity produces and distributes food. Your transformational investment funds billions of AI tokens that power the most advanced computational systems for regenerative food design. This enables EatoSystem to develop AI capable of redesigning entire continental food systems, creating closed-loop agricultural networks, and establishing regenerative food production that can sustain billions while reversing climate change and restoring planetary health.",
    buttonText: "Fund Billions 1B Plus AI & Compute Credits (Tokens)",
    gradient: "from-orange-400 via-red-500 to-pink-600",
    bgGradient: "from-orange-500/10 to-red-600/10",
    borderGradient: "from-orange-500/30 to-red-600/30",
    glowColor: "shadow-orange-500/25",
    tokenIcon: "🚀",
    stripeButtonId: "buy_btn_1RqacQERiGajeDO5dfbTj6TA",
  },
  {
    type: "Fund Trillions",
    icon: Users,
    decorativeIcon: Crown,
    tokenAmount: "Trillions",
    tokenCount: "1T Plus",
    price: "€15M+",
    priceDetail: "Starting at €15,000,000",
    description:
      "As a philanthropist, you have the power to accelerate global food system transformation. Your significant contribution funds trillions of AI tokens that enable large-scale computational modeling of regenerative agriculture across entire regions. This level of support allows EatoSystem to develop sophisticated AI algorithms that can predict climate impacts, optimize crop rotations, and design resilient food networks that serve millions while restoring biodiversity and soil health.",
    buttonText: "Fund Trillions 1T Plus AI & Compute Credits (Tokens)",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    bgGradient: "from-purple-500/10 to-violet-600/10",
    borderGradient: "from-purple-500/30 to-violet-600/30",
    glowColor: "shadow-purple-500/25",
    tokenIcon: "👑",
    stripeButtonId: "buy_btn_1RqacQERiGajeDO5dfbTj6TA",
  },
]

export default function RaisingIntelligencePage() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section - Raising Intelligence */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="raising-intelligence-title"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-uYzaiANatOw9mMufbJoacnWXBQ5IOw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-violet-800/30 to-indigo-900/30"></div>

          {/* Flowing organic shapes */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-violet-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-purple-800/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        </div>

        {/* Animated Background Effects */}
        <CurvedLight />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Headline */}
            <motion.h1
              id="raising-intelligence-title"
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
              Please Support the EatoSystem to finance AI &amp; Compute Tokens that will Design, Build, and Grow a
              Global Regenerative Food System with a DNA of Health, Community, &amp; Environment.
            </motion.p>

            {/* Token Counter */}
            <TokenCounter />

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

      <div className="h-20 bg-white"></div>

      {/* Individual Supporter Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-uYzaiANatOw9mMufbJoacnWXBQ5IOw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-emerald-800/50 to-teal-900/50"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/60 to-emerald-400/60 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/60 to-green-400/60 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 text-white mb-12">
                <span>SUPPORTER</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Fund{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Millions
                </span>
              </h2>
              <div className="text-3xl text-white/90 mb-6 font-semibold">1M Plus AI & Compute Credits (Tokens)</div>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-10">
                €15+
              </div>
              <p className="text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                {supporterTypes[0].description}
              </p>

              {/* Orange Link Button */}
              <div className="flex justify-center mb-8">
                <a
                  href="https://buy.stripe.com/3cIbJ1d89dNv0gyaMhcAo00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {supporterTypes[0].buttonText}
                </a>
              </div>

              <div className="text-sm text-white/70">Powered by Stripe</div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-20 bg-white"></div>

      {/* Enterprise Supporter Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-uYzaiANatOw9mMufbJoacnWXBQ5IOw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-red-800/50 to-pink-900/50"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/60 to-red-400/60 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/60 to-orange-400/60 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white mb-12">
                <span>ENTERPRISE</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Fund{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Billions
                </span>
              </h2>
              <div className="text-3xl text-white/90 mb-6 font-semibold">1B Plus AI & Compute Credits (Tokens)</div>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-10">
                €15K+
              </div>
              <p className="text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                {supporterTypes[1].description}
              </p>

              {/* Orange Link Button */}
              <div className="flex justify-center mb-8">
                <a
                  href="https://buy.stripe.com/3cIbJ1d89dNv0gyaMhcAo00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {supporterTypes[1].buttonText}
                </a>
              </div>

              <div className="text-sm text-white/70">Powered by Stripe</div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-20 bg-white"></div>

      {/* Philanthropist Supporter Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-uYzaiANatOw9mMufbJoacnWXBQ5IOw.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-violet-800/50 to-indigo-900/50"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/60 to-violet-400/60 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/60 to-purple-400/60 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xl font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-600 text-white mb-12">
                <span>PHILANTHROPIST</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                Fund{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  Trillions
                </span>
              </h2>
              <div className="text-3xl text-white/90 mb-6 font-semibold">1T Plus AI & Compute Credits (Tokens)</div>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 mb-10">
                €15M+
              </div>
              <p className="text-2xl text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed">
                {supporterTypes[2].description}
              </p>

              {/* Orange Link Button */}
              <div className="flex justify-center mb-8">
                <a
                  href="https://buy.stripe.com/3cIbJ1d89dNv0gyaMhcAo00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {supporterTypes[2].buttonText}
                </a>
              </div>

              <div className="text-sm text-white/70">Powered by Stripe</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
