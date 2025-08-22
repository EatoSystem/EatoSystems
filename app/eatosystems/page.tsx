"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Settings, ArrowRight, TrendingUp, Network, Target, TreePine, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoSystemsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % capabilities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const capabilities = [
    {
      title: "System Integration",
      description:
        "Seamless integration of all EatoSystem components through unified APIs, data flows, and orchestrated workflows.",
      icon: <Network className="w-12 h-12" />,
      color: "from-yellow-500 to-amber-500",
      image: "/images/systems/eatosystems-platform.png",
    },
    {
      title: "Platform Orchestration",
      description:
        "Intelligent coordination of agricultural systems, from farm management to supply chain optimization and market distribution.",
      icon: <Settings className="w-12 h-12" />,
      color: "from-amber-500 to-orange-500",
      image: "/images/systems/eatosystems-platform.png",
    },
    {
      title: "Data Architecture",
      description:
        "Comprehensive data infrastructure that connects all agricultural touchpoints for real-time insights and decision-making.",
      icon: <Cpu className="w-12 h-12" />,
      color: "from-orange-500 to-yellow-500",
      image: "/images/systems/eatosystems-platform.png",
    },
    {
      title: "Ecosystem Management",
      description:
        "Holistic management of the entire agricultural ecosystem through interconnected systems and automated workflows.",
      icon: <Target className="w-12 h-12" />,
      color: "from-yellow-600 to-amber-600",
      image: "/images/systems/eatosystems-platform.png",
    },
  ]

  const stats = [
    {
      icon: <Network className="w-8 h-8" />,
      value: "10+",
      label: "Systems",
      description: "Integrated platforms",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "99.9%",
      label: "Uptime",
      description: "System reliability",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      value: "CROP",
      label: "Layer",
      description: "Core platform",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "Global",
      label: "Scale",
      description: "Worldwide deployment",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Updated to use agricultural landscape background with yellow filter */}
      <section
        ref={sectionRef}
        className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
      >
        {/* Background with agricultural landscape image */}
        <div className="absolute inset-0">
          {/* Agricultural landscape background image */}
          <Image
            src="/images/eatosystem-harvest.png"
            alt="Agricultural landscape with golden fields"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 to-amber-500/70"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 animate-pulse"></div>

          {/* Flowing organic shapes with golden tones */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/40 to-amber-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-amber-400/40 to-yellow-400/40 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Flowing wave animation with golden gradients */}
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
                  <stop offset="0%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#EA580C" />
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
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center pt-4 sm:pt-8"
            >
              <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 sm:py-4 border border-white/30 shadow-lg">
                <TreePine className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-200" />
                <span className="text-white font-semibold text-xs sm:text-base uppercase tracking-wider drop-shadow-lg">
                  CROP LAYER • CORE PLATFORM
                </span>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-snug drop-shadow-2xl">
                <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                  <Settings className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-300 flex-shrink-0" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-200">
                    EatoSystems
                  </span>
                </div>
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-lg">
                Agricultural Platform Orchestration
              </h2>
            </motion.div>

            {/* Description paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl mx-auto px-2 drop-shadow-lg"
            >
              The unified platform that orchestrates all agricultural systems, integrating farm management, supply
              chains, and market distribution into one seamless ecosystem for global food system transformation.
            </motion.p>

            {/* Glass morphism description card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto px-2"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/30 shadow-2xl">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light drop-shadow-lg">
                  We're building the central nervous system that connects every component of the EatoSystem ecosystem —
                  one integration, one workflow, and one intelligent platform at a time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            >
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-w-[200px]"
                onClick={() => {
                  document.getElementById("capabilities-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>Explore Platform</span>
                <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </motion.div>

            {/* Feature cards - Updated with golden color scheme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pt-6 sm:pt-8 px-2"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/30 shadow-lg">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Network className="w-6 sm:w-8 h-6 sm:h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  System Integration
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed drop-shadow-lg">
                  Seamless integration of all EatoSystem components through unified APIs and orchestrated workflows.
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/30 shadow-lg">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Target className="w-6 sm:w-8 h-6 sm:h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  Ecosystem Management
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed drop-shadow-lg">
                  Holistic management of the entire agricultural ecosystem through intelligent automation and
                  coordination.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities-section" className="py-24 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500">
              Platform Capabilities
            </h2>
            <p className="text-2xl text-amber-700 max-w-4xl mx-auto">
              Comprehensive system orchestration that unifies all agricultural operations through intelligent
              integration, data architecture, and ecosystem management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={capability.image || "/placeholder.svg"}
                    alt={capability.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${capability.color} opacity-80`}></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-lg text-white/90 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              Platform Architecture
            </h2>
            <p className="text-2xl text-yellow-700 max-w-4xl mx-auto">
              Building the foundational infrastructure that powers the entire EatoSystem ecosystem through unified
              orchestration and intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-amber-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/eatosystem-harvest.png"
            alt="Agricultural landscape with golden fields"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/85 via-amber-600/85 to-orange-600/85"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoSystems</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The core platform that orchestrates and integrates all agricultural systems into one unified,
                intelligent ecosystem for global food system transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoSystems?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoSystems is the unified platform that orchestrates all agricultural operations through
                    intelligent system integration, data architecture, and ecosystem management. Think of it as the
                    central nervous system that connects every component of the EatoSystem ecosystem.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q1 2025, EatoSystems will provide seamless integration of farm management, supply chains, and
                    market distribution into one comprehensive platform.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Platform Orchestration?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional agricultural systems operate in silos, leading to inefficiencies, data fragmentation,
                    and missed opportunities for optimization. We're building unified orchestration that connects every
                    agricultural touchpoint.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented efficiency in agricultural operations while enabling
                    real-time decision-making and automated workflows across the entire food system.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoSystems will be the definitive platform for agricultural orchestration, providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Network className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                      <span>10+ integrated systems with seamless data flow</span>
                    </li>
                    <li className="flex items-start">
                      <Settings className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                      <span>Intelligent orchestration of agricultural workflows</span>
                    </li>
                    <li className="flex items-start">
                      <Cpu className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                      <span>Comprehensive data architecture for real-time insights</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 mt-1 text-yellow-300 flex-shrink-0" />
                      <span>Holistic ecosystem management at global scale</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoSystems represents more than just platform integration - it's the foundation for a new
                    agricultural paradigm where every system works in harmony. Every connection will be intelligent,
                    every workflow will be optimized, every decision will be data-driven.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
