"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  TrendingUp,
  ArrowRight,
  Code,
  Calendar,
  CheckCircle,
  Clock,
  BookOpen,
  BarChart3,
  PieChart,
  Activity,
  DollarSign,
  Flower2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoIndexPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "roadmap">("overview")
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
    },
    {
      title: "Portfolio Optimization",
      description:
        "AI-powered investment tools that optimize agricultural portfolios based on risk tolerance, sustainability goals, and market conditions.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
      details:
        "Machine learning algorithms analyze thousands of variables to recommend optimal portfolio allocations and investment strategies.",
    },
    {
      title: "Impact Measurement",
      description:
        "Comprehensive metrics that measure the economic, environmental, and social impact of agricultural investments.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      details:
        "Track ROI alongside sustainability metrics to ensure investments create positive impact while generating returns.",
    },
    {
      title: "Risk Assessment",
      description:
        "Advanced risk modeling that evaluates climate, market, and operational risks across agricultural investments.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      details:
        "Predictive models assess multiple risk factors to help investors make informed decisions and mitigate losses.",
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
    },
    {
      title: "AI Investment Platform",
      date: "Q2 2025",
      quarter: "June 2025",
      status: "upcoming" as const,
      description: "Deploy AI-powered investment optimization, risk assessment tools, and predictive market analytics.",
      deliverables: ["AI Optimization", "Risk Modeling", "Predictive Analytics"],
    },
    {
      title: "Impact Measurement Suite",
      date: "Q3 2025",
      quarter: "September 2025",
      status: "upcoming" as const,
      description: "Integrate comprehensive impact measurement tools for economic, environmental, and social metrics.",
      deliverables: ["Impact Analytics", "ESG Metrics", "Sustainability Tracking"],
    },
    {
      title: "Global Financial Network",
      date: "Q4 2025",
      quarter: "December 2025",
      status: "upcoming" as const,
      description: "Expand to global markets with institutional-grade tools and international investment capabilities.",
      deliverables: ["Global Markets", "Institutional Tools", "International Access"],
    },
  ]

  const contributionAreas = [
    {
      title: "Financial Analytics",
      description: "Develop advanced analytics and modeling tools for agricultural finance",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Financial Modeling", "Data Science", "Market Analysis"],
    },
    {
      title: "Investment Platform",
      description: "Build portfolio management and investment optimization systems",
      icon: <PieChart className="w-6 h-6" />,
      skills: ["Portfolio Theory", "Algorithm Design", "Risk Management"],
    },
    {
      title: "Market Intelligence",
      description: "Create real-time market data systems and trend analysis tools",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Market Research", "Data Engineering", "Predictive Analytics"],
    },
    {
      title: "Impact Measurement",
      description: "Design metrics and tools for measuring investment impact",
      icon: <Activity className="w-6 h-6" />,
      skills: ["ESG Analysis", "Impact Assessment", "Sustainability Metrics"],
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
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
              The comprehensive financial intelligence platform that tracks, analyzes, and optimizes agricultural
              investments, market trends, and economic impacts across the global food system.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Features <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </Button>
              </div>

              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Link href="/eatoindex-lab">
                  <Button
                    size="lg"
                    className="bg-amber-600 text-white border-amber-600 hover:bg-amber-700 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl rounded-full w-full sm:w-auto"
                  >
                    <Code className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    Financial Lab
                  </Button>
                </Link>
              </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q1</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch Date</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">$10B+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Assets</div>
                <div className="text-sm sm:text-base text-white/80">Target Track</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Accuracy</div>
                <div className="text-sm sm:text-base text-white/80">Predictions</div>
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

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1 max-w-md">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "overview" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "features" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "roadmap" ? "bg-white text-amber-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {activeTab === "overview" && (
        <section id="overview-section" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                    The Financial Intelligence Layer of Food Systems
                  </span>
                </h2>

                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed">
                    EatoIndex provides comprehensive financial intelligence that empowers investors, farmers, and
                    organizations to make data-driven decisions about agricultural investments and market opportunities.
                  </p>

                  <p>
                    As the <strong>POLLINATION</strong> layer of EatoSystems, EatoIndex spreads financial intelligence
                    across the ecosystem, enabling cross-pollination of investment opportunities, market insights, and
                    economic impact measurements that fertilize sustainable growth.
                  </p>

                  <p>
                    EatoIndex enables <strong>intelligent investing</strong> — AI-powered tools that analyze market
                    trends, assess risks, and optimize portfolios for maximum impact and returns. It provides{" "}
                    <strong>comprehensive analytics</strong> — real-time market intelligence that tracks global
                    agricultural commodities, investment flows, and economic indicators.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                    <p className="text-amber-800 font-medium mb-2">Your Role in Financial Transformation</p>
                    <p className="text-amber-700">
                      Whether you're an investor, financial analyst, agricultural economist, or fintech developer —
                      EatoIndex provides the platform to build intelligent financial solutions that transform how we
                      invest in sustainable food systems.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Core Financial Capabilities</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-amber-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Market Intelligence</h4>
                      <p className="text-gray-600">
                        Real-time agricultural market data, commodity prices, and investment trend analysis from global
                        exchanges and local markets.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <PieChart className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Portfolio Optimization</h4>
                      <p className="text-gray-600">
                        AI-powered investment tools that optimize agricultural portfolios based on risk tolerance and
                        sustainability goals.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Impact Measurement</h4>
                      <p className="text-gray-600">
                        Comprehensive metrics that measure economic, environmental, and social impact of agricultural
                        investments.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Risk Assessment</h4>
                      <p className="text-gray-600">
                        Advanced risk modeling that evaluates climate, market, and operational risks across agricultural
                        investments.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeTab === "features" && (
        <section id="features-section" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Financial Intelligence Capabilities
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Advanced financial analytics and intelligence tools that provide deep insights into agricultural
                markets, investments, and economic impacts.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Feature List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-white border-2 border-amber-200 shadow-lg"
                          : "bg-white/50 hover:bg-white border border-gray-100"
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <p className="text-gray-700 text-sm">{feature.details}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Feature Visualization */}
                <div className="relative">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20`}
                    ></div>
                    <Image
                      src="/images/systems/eatoindex-pollination.png"
                      alt={features[activeFeature].title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                          {features[activeFeature].icon}
                        </div>
                        <h4 className="text-white text-xl font-bold">{features[activeFeature].title}</h4>
                      </div>
                      <p className="text-white/90 text-sm">{features[activeFeature].details}</p>
                    </div>
                  </motion.div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeFeature === index ? "bg-amber-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap Section */}
      {activeTab === "roadmap" && (
        <section id="roadmap-section" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Development Roadmap
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key milestones in the development and deployment of EatoIndex as the financial intelligence layer of the
                EatoSystems ecosystem.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500 transform md:-translate-x-px"></div>

                {roadmapMilestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-start mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-amber-500 rounded-full z-10"></div>

                      {/* Content card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-l-amber-500">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-amber-600">{milestone.title}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {milestone.date}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-lg font-semibold text-gray-800 mb-2">{milestone.quarter}</div>
                              <p className="text-gray-600 mb-4">{milestone.description}</p>

                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-gray-700">Key Deliverables:</h4>
                                <ul className="space-y-1">
                                  {milestone.deliverables.map((deliverable, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                      <CheckCircle className="w-3 h-3 text-amber-500 mr-2 flex-shrink-0" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-600 capitalize">{milestone.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/roadmap/eatoindex">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Detailed Roadmap
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lab & Development Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Join Financial Development
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Contribute to the future of agricultural finance through analytics development, investment platform
                design, and market intelligence systems.
              </p>
            </motion.div>

            {/* Contribution Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contributionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 mb-4 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-amber-600">{area.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 rounded-full text-xs bg-amber-50 text-amber-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Lab Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">EatoIndex Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access financial modeling tools, market data APIs, and analytics platforms to build intelligent
                  investment solutions for agricultural markets.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                    Financial Modeling Tools
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                    Market Data APIs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                    Analytics Platform
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                    Investment Simulation
                  </div>
                </div>
                <Link href="/eatoindex-lab">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Code className="mr-2 h-5 w-5" />
                    Enter Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-100"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Financial Documentation</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive guides for financial modeling, investment strategies, and market analysis best practices
                  for agricultural finance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Investment Strategies
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Risk Management
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Market Analysis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Impact Measurement
                  </div>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Agricultural Finance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoIndex community and help build the financial intelligence platform that will revolutionize
              how we invest in sustainable food systems worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Building <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/eatosystems">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
                >
                  Explore All Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
