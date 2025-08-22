"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { DollarSign, ArrowRight, Calendar, TrendingUp, PieChart, Target, TreePine, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoFundPage() {
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
      title: "Impact Investing",
      description:
        "Strategic investment in agricultural innovations that generate positive social and environmental impact alongside financial returns.",
      icon: <DollarSign className="w-12 h-12" />,
      color: "from-amber-500 to-yellow-600",
      image: "/images/systems/eatofund-crop.png",
    },
    {
      title: "Growth Capital",
      description:
        "Scaling innovative agricultural technologies and sustainable farming practices through strategic funding and partnership.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-yellow-500 to-orange-600",
      image: "/images/systems/eatofund-crop.png",
    },
    {
      title: "Portfolio Diversification",
      description:
        "Balanced investment across the entire agricultural value chain, from farm-level innovations to global distribution systems.",
      icon: <PieChart className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      image: "/images/systems/eatofund-crop.png",
    },
    {
      title: "Community Investment",
      description:
        "Direct investment in farming communities and local food systems to build resilient, sustainable agricultural economies.",
      icon: <Target className="w-12 h-12" />,
      color: "from-red-500 to-pink-600",
      image: "/images/systems/eatofund-crop.png",
    },
  ]

  const stats = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$100M",
      label: "Initial Fund",
      description: "Target size",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "15%",
      label: "Target Return",
      description: "Annual IRR",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      value: "CROP",
      label: "Layer",
      description: "Investment system",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "Global",
      label: "Impact",
      description: "Sustainable agriculture",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Same style as EatoAI but removed Lab button */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600">
          <Image
            src="/images/systems/eatofund-crop.png"
            alt="EatoFund Investment Platform"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* System Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
              <TreePine className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-amber-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                CROP Layer • Investment System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-300">
                  EatoFund
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Agricultural Investment Platform
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              Democratizing agricultural investment through innovative funding mechanisms, impact investing, and
              sustainable finance solutions for food system transformation.
            </p>

            {/* Action Buttons - Removed Lab button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("capabilities-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Investments <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </Button>
              </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q2</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch Date</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">$100M</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Initial Fund</div>
                <div className="text-sm sm:text-base text-white/80">Target Size</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">15%</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Target Return</div>
                <div className="text-sm sm:text-base text-white/80">Annual IRR</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Coins className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">CROP</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Layer</div>
                <div className="text-sm sm:text-base text-white/80">Investment</div>
              </div>
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
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Investment Strategies
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Comprehensive investment approaches that maximize both financial returns and positive impact on global
              food systems and agricultural communities.
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
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              Investment Platform Development
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Building advanced investment infrastructure to create the comprehensive funding platform for the entire
              EatoSystem ecosystem
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
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
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
            src="/images/systems/eatofund-crop.png"
            alt="EatoFund Investment Platform"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/85 via-yellow-600/85 to-orange-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoFund</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The investment platform that revolutionizes how we fund, scale, and optimize agricultural innovations
                through strategic capital deployment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoFund?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoFund is the investment platform that democratizes agricultural finance through innovative
                    funding mechanisms, impact investing, and sustainable finance solutions. Think of it as the
                    financial engine that powers the entire EatoSystem ecosystem.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q2 2025, EatoFund will provide unprecedented access to agricultural investment opportunities that
                    generate both financial returns and positive impact on global food systems.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Impact Investing?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional agricultural finance often prioritizes short-term profits over long-term sustainability,
                    leading to environmental degradation and social inequality. We're building investment strategies
                    that optimize for both returns and impact.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented value in agricultural innovation while supporting sustainable
                    farming practices and strengthening local food systems worldwide.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoFund will be the definitive investment platform for agricultural innovation,
                    providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>$100M initial fund with 15% target annual returns</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Growth capital for scaling agricultural innovations</span>
                    </li>
                    <li className="flex items-start">
                      <PieChart className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Diversified portfolio across the agricultural value chain</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Community investment in local food systems</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoFund represents more than just investment capital - it's the foundation for a new agricultural
                    finance paradigm where every dollar invested creates both financial returns and positive impact.
                    Every investment will be strategic, every return will be sustainable.
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
