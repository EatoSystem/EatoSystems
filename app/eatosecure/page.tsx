"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, ArrowRight, Calendar, Eye, Lock, Fingerprint, BarChart3, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoSecurePage() {
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
      title: "Global Food Security Monitoring",
      description:
        "AI-powered monitoring of global food supply chains, crop yields, and distribution networks to ensure food security and prevent shortages before they occur.",
      icon: <Eye className="w-12 h-12" />,
      color: "from-amber-500 to-orange-600",
      image: "/images/eatosecure-canopy.png",
    },
    {
      title: "Supply Chain Protection",
      description:
        "Comprehensive protection framework securing food supply chains from farm to table, ensuring safe, traceable, and reliable food distribution worldwide.",
      icon: <Lock className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      image: "/images/eatosecure-canopy.png",
    },
    {
      title: "Food Safety & Quality Assurance",
      description:
        "Advanced authentication and verification systems ensuring food safety standards, quality control, and traceability throughout the global food network.",
      icon: <Fingerprint className="w-12 h-12" />,
      color: "from-yellow-500 to-amber-600",
      image: "/images/eatosecure-canopy.png",
    },
    {
      title: "Food Security Analytics",
      description:
        "Comprehensive analytics platform providing real-time insights into global food security status, vulnerability assessments, and predictive threat analysis.",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-red-500 to-rose-600",
      image: "/images/eatosecure-canopy.png",
    },
  ]

  const stats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      value: "Q1",
      label: "2025",
      description: "Launch Date",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      value: "24/7",
      label: "Food Security",
      description: "Monitoring",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      value: "Global",
      label: "Supply Chain",
      description: "Protection",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: "CANOPY",
      label: "Food Security",
      description: "Platform",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Using forest canopy background with red-pink filter */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/eatosecure-canopy.png"
            alt="EatoSecure Security Platform"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-pink-600/80 to-rose-600/80"></div>
        </div>

        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* System Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-pink-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                CANOPY Layer • Food Security System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-red-300">
                  EatoSecure
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Food Security Platform
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              The global food security platform that protects, monitors, and secures the world's food systems, ensuring
              food safety, supply chain resilience, and nutritional security for all populations worldwide.
            </p>

            {/* Action Buttons - Removed Lab button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("capabilities-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Features <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </Button>
              </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-base sm:text-lg text-white/90 mb-1">{stat.label}</div>
                  <div className="text-sm sm:text-base text-white/80">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities-section" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              Food Security Capabilities
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Advanced food security and protection systems that safeguard global food supplies, ensure nutritional
              access, and protect food systems from threats and vulnerabilities worldwide.
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              Food Security Platform Development
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Building advanced food security infrastructure to create the comprehensive protection and monitoring
              platform for global food systems and nutritional security worldwide
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
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-red-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/eatosecure-canopy.png" alt="EatoSecure Security Platform" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/85 via-pink-600/85 to-rose-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoSecure</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The food security platform that revolutionizes how we protect, monitor, and secure global food systems
                through comprehensive supply chain protection and nutritional security frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoSecure?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoSecure is the global food security platform that protects, monitors, and secures the world's
                    food systems, ensuring food safety, supply chain resilience, and nutritional security for all
                    populations. Built on a foundation of advanced technical security solutions that protect the
                    infrastructure enabling global food security.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q1 2025, EatoSecure will provide unprecedented food security capabilities that protect global
                    food supplies while ensuring equitable access to safe, nutritious food for all communities
                    worldwide.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Food Security Excellence?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional food security approaches often lack comprehensive monitoring and protection frameworks,
                    leading to food shortages, supply chain vulnerabilities, and nutritional inequities. We're building
                    food security systems that optimize for both global resilience and local accessibility.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented security in global food systems while supporting nutritional
                    equity and strengthening food resilience frameworks worldwide.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoSecure will be the definitive food security platform for global food systems,
                    providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 mr-3 mt-1 text-pink-300 flex-shrink-0" />
                      <span>24/7 global food security monitoring with AI-powered threat detection</span>
                    </li>
                    <li className="flex items-start">
                      <Lock className="w-5 h-5 mr-3 mt-1 text-pink-300 flex-shrink-0" />
                      <span>End-to-end supply chain protection and food safety assurance</span>
                    </li>
                    <li className="flex items-start">
                      <Fingerprint className="w-5 h-5 mr-3 mt-1 text-pink-300 flex-shrink-0" />
                      <span>Food quality authentication and traceability systems</span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="w-5 h-5 mr-3 mt-1 text-pink-300 flex-shrink-0" />
                      <span>Advanced food security analytics and vulnerability assessment platform</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoSecure represents more than just food security tools - it's the foundation for a new global food
                    paradigm where every community has access to safe, nutritious food. Every supply chain will be
                    protected, every food system will be resilient. Every person will have food security.
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
