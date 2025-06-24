"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  ArrowRight,
  Code,
  Calendar,
  CheckCircle,
  Clock,
  PieChart,
  LineChart,
} from "lucide-react"
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
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Regenerative Finance Index",
      description:
        "A comprehensive financial index that tracks and rewards investments in regenerative agriculture and sustainable food systems.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Impact Measurement",
      description:
        "Advanced metrics and analytics to measure the environmental and social impact of agricultural investments and practices.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Capital Allocation",
      description:
        "Intelligent capital allocation systems that direct funding toward the most impactful regenerative agriculture projects.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Market Intelligence",
      description:
        "Real-time market data and predictive analytics for sustainable agriculture commodities and carbon credit markets.",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Index Framework Launch",
      date: "March 2026",
      status: "upcoming" as const,
      description:
        "Launch of the core EatoIndex framework with basic regenerative finance tracking and impact measurement.",
    },
    {
      title: "Market Integration",
      date: "June 2026",
      status: "upcoming" as const,
      description:
        "Integration with major financial markets and establishment of regenerative agriculture investment products.",
    },
    {
      title: "Global Expansion",
      date: "September 2026",
      status: "upcoming" as const,
      description: "Expansion to global markets with localized impact metrics and regional investment opportunities.",
    },
    {
      title: "Autonomous Trading",
      date: "December 2026",
      status: "upcoming" as const,
      description: "Implementation of AI-driven autonomous trading systems for optimal capital allocation.",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600">
          <Image
            src="/images/systems/eatoindex-pollination.png"
            alt="EatoIndex Financial System"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
              <TrendingUp className="w-6 h-6 mr-3 text-pink-200" />
              <span className="text-white font-semibold text-lg">POLLINATION Layer • Financial Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-red-300">
                EatoIndex
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">v1.0</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Revolutionary financial index system that aligns capital markets with regenerative agriculture, enabling
              transparent impact measurement and intelligent investment allocation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Finance Tools <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Link href="/eatosystems/eatoindex-lab">
                <Button
                  size="lg"
                  className="bg-pink-600 text-white border-pink-600 hover:bg-pink-700 px-10 py-5 text-xl rounded-full"
                >
                  <Code className="mr-3 h-6 w-6" />
                  Developer Lab
                </Button>
              </Link>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Mar</div>
                <div className="text-lg font-semibold text-white mb-2">2026</div>
                <div className="text-sm text-white/80">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">$1B+</div>
                <div className="text-lg font-semibold text-white mb-2">Capital</div>
                <div className="text-sm text-white/80">Target AUM</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">50+</div>
                <div className="text-lg font-semibold text-white mb-2">Metrics</div>
                <div className="text-sm text-white/80">Impact Tracking</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">POLL</div>
                <div className="text-lg font-semibold text-white mb-2">Layer</div>
                <div className="text-sm text-white/80">Financial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="gradient-text from-pink-600 to-rose-500">Financial Innovation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EatoIndex revolutionizes agricultural finance by creating transparent, impact-driven investment mechanisms
              that reward regenerative practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                      ? "bg-pink-50 border-2 border-pink-200 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20`}></div>
                <Image
                  src="/images/systems/eatoindex-pollination.png"
                  alt={features[activeFeature].title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h4 className="text-white text-xl font-bold mb-2">{features[activeFeature].title}</h4>
                  <p className="text-white/90 text-sm">{features[activeFeature].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="gradient-text from-pink-600 to-rose-500">Development Roadmap</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones in the development and deployment of EatoIndex financial systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-rose-500"></div>

              {roadmapMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-12"
                >
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-500 rounded-full z-10"></div>

                  <div className="ml-16 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {milestone.date}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm text-orange-600 capitalize">{milestone.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 py-3 font-medium">
                <Calendar className="mr-2 h-5 w-5" />
                View Full Roadmap
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lab & Development Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="gradient-text from-pink-600 to-rose-500">Build Financial Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join the development of next-generation financial tools for regenerative agriculture and sustainable
                food systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">FinTech Development Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access financial APIs, market data feeds, and development tools to create innovative financial
                  products for regenerative agriculture.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Financial Data APIs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Impact Measurement Tools
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Trading Infrastructure
                  </div>
                </div>
                <Link href="/eatosystems/eatoindex-lab">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-6 py-3">
                    <Code className="mr-2 h-5 w-5" />
                    Enter FinTech Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Market Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Access comprehensive market data, analytics tools, and research resources for regenerative agriculture
                  investments and impact measurement.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Market Data Feeds
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Analytics Dashboard
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                    Research Reports
                  </div>
                </div>
                <Link href="/eatoindex">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-3">
                    <LineChart className="mr-2 h-5 w-5" />
                    View Analytics
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Revolutionize Agricultural Finance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoIndex community and help create transparent, impact-driven financial systems for sustainable
              agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
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
