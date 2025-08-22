"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, ArrowRight, Calendar, Route, Activity, MapPin, Zap, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoTransitPage() {
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
      title: "Smart Logistics Network",
      description:
        "AI-powered routing and optimization system that reduces transportation costs and environmental impact across food supply chains.",
      icon: <Route className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      details:
        "Advanced algorithms optimize delivery routes, reduce fuel consumption, and ensure fresh food reaches destinations efficiently.",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Complete visibility into food shipments with temperature monitoring, location tracking, and quality assurance throughout transit.",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      details:
        "IoT sensors and GPS tracking provide real-time data on location, temperature, humidity, and handling conditions.",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Supply Chain Analytics",
      description:
        "Comprehensive analytics platform that identifies bottlenecks, predicts delays, and optimizes distribution networks.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-cyan-600",
      details:
        "Machine learning models analyze historical data to predict and prevent supply chain disruptions before they occur.",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Sustainable Transport",
      description:
        "Carbon footprint tracking and optimization tools that promote sustainable transportation methods and reduce emissions.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      details:
        "Track and optimize carbon emissions, promote electric vehicles, and implement sustainable logistics practices.",
      image: "/images/systems/eatotransit-flow.png",
    },
  ]

  const capabilities = [
    {
      title: "Smart Routing",
      description:
        "AI-powered route optimization that reduces fuel consumption, delivery times, and transportation costs across food supply chains.",
      icon: <Route className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Complete visibility into food shipments with GPS tracking, temperature monitoring, and quality assurance throughout transit.",
      icon: <MapPin className="w-12 h-12" />,
      color: "from-cyan-500 to-blue-500",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Supply Chain Analytics",
      description:
        "Comprehensive analytics that identify bottlenecks, predict delays, and optimize distribution networks for maximum efficiency.",
      icon: <Activity className="w-12 h-12" />,
      color: "from-green-500 to-cyan-500",
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Sustainable Transport",
      description:
        "Carbon footprint tracking and optimization tools that promote sustainable transportation methods and reduce emissions.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-teal-500 to-green-500",
      image: "/images/systems/eatotransit-flow.png",
    },
  ]

  const stats = [
    {
      icon: <Route className="w-8 h-8" />,
      value: "50%",
      label: "Efficiency Gain",
      description: "Optimizing logistics networks",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: "Real-Time",
      label: "Tracking",
      description: "Complete supply chain visibility",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      value: "AI",
      label: "Analytics",
      description: "Predictive supply chain intelligence",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "30%",
      label: "Carbon Reduction",
      description: "Sustainable transportation methods",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Logistics Infrastructure",
      date: "Q1 2025",
      quarter: "March 2025",
      status: "upcoming" as const,
      description:
        "Launch core logistics platform with route optimization, tracking systems, and basic analytics capabilities.",
      deliverables: ["Route Optimization", "GPS Tracking", "Basic Analytics"],
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "AI-Powered Optimization",
      date: "Q2 2025",
      quarter: "June 2025",
      status: "upcoming" as const,
      description: "Deploy machine learning models for predictive analytics, demand forecasting, and smart routing.",
      deliverables: ["ML Models", "Predictive Analytics", "Smart Routing"],
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "IoT Integration",
      date: "Q3 2025",
      quarter: "September 2025",
      status: "upcoming" as const,
      description: "Integrate IoT sensors for real-time monitoring of temperature, humidity, and cargo conditions.",
      deliverables: ["IoT Sensors", "Real-time Monitoring", "Quality Tracking"],
      image: "/images/systems/eatotransit-flow.png",
    },
    {
      title: "Global Network",
      date: "Q4 2025",
      quarter: "December 2025",
      status: "upcoming" as const,
      description: "Expand to global logistics network with international shipping and cross-border optimization.",
      deliverables: ["Global Expansion", "International Shipping", "Cross-border Tools"],
      image: "/images/systems/eatotransit-flow.png",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Keep Same Style as EatoIndex but Remove Lab Button */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600">
          <Image
            src="/images/systems/eatotransit-flow.png"
            alt="EatoTransit Logistics Network"
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
              <Flower2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-blue-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                FLOW Layer • Logistics System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <Truck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-green-300">
                  EatoTransit
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Smart Logistics Platform
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              The intelligent logistics and transportation platform that optimizes food supply chains, reduces waste,
              and ensures fresh, sustainable food reaches communities worldwide. Launching Q1 2025.
            </p>

            {/* Action Buttons - Removed Lab button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
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
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q1</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Route className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">50%</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Efficiency</div>
                <div className="text-sm sm:text-base text-white/80">Improvement</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">30%</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Carbon</div>
                <div className="text-sm sm:text-base text-white/80">Reduction</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Flower2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">FLOW</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Layer</div>
                <div className="text-sm sm:text-base text-white/80">Logistics</div>
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
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Smart Logistics Capabilities
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Advanced logistics and transportation tools that optimize food supply chains, reduce waste, and ensure
              efficient delivery of fresh food worldwide.
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
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Logistics Intelligence Development
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Building advanced AI-powered logistics intelligence to create the comprehensive transportation
              optimization system for the entire EatoSystem ecosystem
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
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-blue-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/systems/eatotransit-flow.png"
            alt="EatoTransit Logistics Network"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/85 via-cyan-600/85 to-green-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoTransit</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The intelligent logistics platform that revolutionizes how we transport, track, and optimize food
                distribution across global supply chains
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoTransit?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoTransit is the comprehensive logistics intelligence platform that optimizes food transportation
                    networks through AI-powered routing, real-time tracking, and predictive analytics. Think of it as
                    the nervous system for global food distribution.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q1 2025, EatoTransit will provide smart routing optimization, complete supply chain visibility,
                    and sustainable transportation solutions for the entire agricultural value chain.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Smart Logistics?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional logistics systems waste 30% of food during transportation due to inefficient routing,
                    poor temperature control, and lack of real-time visibility. We're building intelligent systems that
                    eliminate these inefficiencies.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented efficiency in food distribution while reducing carbon
                    emissions, minimizing waste, and ensuring fresh food reaches communities worldwide.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoTransit will be the definitive platform for food logistics intelligence, providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Route className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>AI-powered route optimization reducing transportation costs by 50%</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Real-time tracking with temperature and quality monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Predictive analytics preventing supply chain disruptions</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Carbon footprint reduction through sustainable transportation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoTransit represents more than just logistics technology - it's the foundation for a new
                    transportation paradigm where efficiency and sustainability are intrinsically linked. Every delivery
                    will be optimized for speed, cost, and environmental impact.
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
