"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { TrendingUp, ArrowRight, Calendar, BarChart3, PieChart, Activity, DollarSign, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoIndexPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Real-Time Market Intelligence",
      description:
        "Advanced analytics platform that tracks global agricultural markets, commodity prices, and investment opportunities in real-time.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      details:
        "Live data feeds from global exchanges provide instant market insights and trend analysis for informed investment decisions.",
      image: "/images/systems/eatoindex-pollination.png",
    },
    {
      title: "Portfolio Optimization",
      description:
        "AI-powered investment tools that optimize agricultural portfolios based on risk tolerance, sustainability goals, and market conditions.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
      details:
        "Machine learning algorithms analyze thousands of variables to recommend optimal portfolio allocations and investment strategies.",
      image: "/images/systems/eatoindex-pollination.png",
    },
    {
      title: "Impact Measurement",
      description:
        "Comprehensive metrics that measure the economic, environmental, and social impact of agricultural investments.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      details:
        "Track ROI alongside sustainability metrics to ensure investments create positive impact while generating returns.",
      image: "/images/systems/eatoindex-pollination.png",
    },
    {
      title: "Risk Assessment",
      description:
        "Advanced risk modeling that evaluates climate, market, and operational risks across agricultural investments.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      details:
        "Predictive models assess multiple risk factors to help investors make informed decisions and mitigate losses.",
      image: "/images/systems/eatoindex-pollination.png",
    },
  ]

  const capabilities = [
    {
      title: "Market Intelligence",
      description:
        "Real-time agricultural market data, commodity prices, and investment trend analysis from global exchanges and local markets.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-amber-500 to-orange-500",
      image: "/financial-dashboard.png",
    },
    {
      title: "Portfolio Optimization",
      description:
        "AI-powered investment tools that optimize agricultural portfolios based on risk tolerance and sustainability goals.",
      icon: <PieChart className="w-12 h-12" />,
      color: "from-orange-500 to-yellow-500",
      image: "/investment-portfolio-optimization.png",
    },
    {
      title: "Impact Measurement",
      description:
        "Comprehensive metrics that measure economic, environmental, and social impact of agricultural investments.",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-yellow-500 to-amber-500",
      image: "/images/systems/eatoindex-pollination.png",
    },
    {
      title: "Risk Assessment",
      description:
        "Advanced risk modeling that evaluates climate, market, and operational risks across agricultural investments.",
      icon: <Activity className="w-12 h-12" />,
      color: "from-red-500 to-orange-500",
      image: "/risk-assessment-visualization.png",
    },
  ]

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "∞",
      label: "Data Sources",
      description: "Building comprehensive data infrastructure",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      value: "All",
      label: "Asset Classes",
      description: "Indexing every EatoSystem component",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: "AI",
      label: "Intelligence",
      description: "Building foundational AI engine",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      value: "2026",
      label: "Launch Ready",
      description: "Complete financial ecosystem",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Financial Data Infrastructure",
      date: "Q1 2025",
      quarter: "March 2025",
      status: "upcoming" as const,
      description:
        "Launch comprehensive financial data collection systems, market feeds, and foundational analytics infrastructure.",
      deliverables: ["Market Data Feeds", "Analytics Engine", "Portfolio Tools"],
      image: "/placeholder-grmyu.png",
    },
    {
      title: "AI Investment Platform",
      date: "Q2 2025",
      quarter: "June 2025",
      status: "upcoming" as const,
      description: "Deploy AI-powered investment optimization, risk assessment tools, and predictive market analytics.",
      deliverables: ["AI Optimization", "Risk Modeling", "Predictive Analytics"],
      image: "/ai-investment-platform.png",
    },
    {
      title: "Impact Measurement Suite",
      date: "Q3 2025",
      quarter: "September 2025",
      status: "upcoming" as const,
      description: "Integrate comprehensive impact measurement tools for economic, environmental, and social metrics.",
      deliverables: ["Impact Analytics", "ESG Metrics", "Sustainability Tracking"],
      image: "/placeholder-z7c1w.png",
    },
    {
      title: "Global Financial Network",
      date: "Q4 2025",
      quarter: "December 2025",
      status: "upcoming" as const,
      description: "Expand to global markets with institutional-grade tools and international investment capabilities.",
      deliverables: ["Global Markets", "Institutional Tools", "International Access"],
      image: "/global-financial-network.png",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Keep Exact Same */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
          <Image
            src="/images/systems/eatoindex-pollination.png"
            alt="EatoIndex Financial Intelligence"
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
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-amber-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                POLLINATION Layer • Financial System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-300">
                  EatoIndex
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Financial Intelligence Platform
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              The foundational financial intelligence engine being built from the ground up to index all produce,
              products, investments, and financial instruments within the EatoSystem ecosystem. Launching 2026.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
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
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">2026</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Launch</div>
                <div className="text-sm sm:text-base text-white/80">Target Year</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Zero</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Starting</div>
                <div className="text-sm sm:text-base text-white/80">Point</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">AI</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Engine</div>
                <div className="text-sm sm:text-base text-white/80">Building</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">POLL</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Layer</div>
                <div className="text-sm sm:text-base text-white/80">Financial</div>
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
              Financial Intelligence Capabilities
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Advanced financial analytics and intelligence tools that provide deep insights into agricultural markets,
              investments, and economic impacts.
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
              Financial Intelligence Development
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Building advanced AI-powered financial intelligence from the ground up to create the comprehensive
              indexing system for the entire EatoSystem ecosystem
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
            src="/images/systems/eatoindex-pollination.png"
            alt="EatoIndex Financial Intelligence"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/85 via-orange-600/85 to-yellow-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoIndex</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The foundational financial intelligence engine that will revolutionize how we understand, track, and
                optimize agricultural economics
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoIndex?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoIndex is the comprehensive financial intelligence platform being built from zero to index every
                    produce item, product, investment opportunity, and financial instrument within the EatoSystem
                    ecosystem. Think of it as the Bloomberg Terminal for regenerative agriculture and sustainable food
                    systems.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By 2026, EatoIndex will provide real-time market intelligence, portfolio optimization, impact
                    measurement, and risk assessment for the entire agricultural value chain - from seed to plate and
                    beyond.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Build from Zero?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional financial systems weren't designed for the complexity of regenerative agriculture,
                    climate impact measurement, or the interconnected nature of sustainable food systems. We're building
                    a new financial intelligence architecture that understands these relationships from the ground up.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented insights into how agricultural investments impact not just
                    financial returns, but also soil health, biodiversity, carbon sequestration, and community
                    resilience.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2026</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoIndex will be the definitive source for agricultural financial intelligence,
                    providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Real-time pricing and market data for every agricultural commodity and product</span>
                    </li>
                    <li className="flex items-start">
                      <PieChart className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>AI-powered investment optimization across the entire food value chain</span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Comprehensive impact measurement linking financial and environmental returns</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="w-5 h-5 mr-3 mt-1 text-amber-300 flex-shrink-0" />
                      <span>Advanced risk modeling for climate, market, and operational factors</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoIndex represents more than just financial technology - it's the foundation for a new economic
                    paradigm where financial success and environmental regeneration are intrinsically linked. Every
                    investment decision will be informed by comprehensive data on ecological impact, social benefit, and
                    long-term sustainability.
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
