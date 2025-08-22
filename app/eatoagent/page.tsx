"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bot, ArrowRight, Calendar, Network, Zap, Brain, Lightbulb, SproutIcon as Seed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoAgentPage() {
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
      title: "Intelligent Agent Orchestration",
      description:
        "Deploy and manage AI agents that automate complex food system tasks, from farm management to supply chain optimization.",
      icon: <Bot className="w-12 h-12" />,
      color: "from-blue-500 to-indigo-600",
      image: "/images/systems/eatoagent-seed.png",
    },
    {
      title: "Autonomous Decision Making",
      description:
        "AI agents make real-time decisions based on environmental data, market conditions, and sustainability metrics.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600",
      image: "/images/systems/eatoagent-seed.png",
    },
    {
      title: "Multi-System Integration",
      description:
        "Seamlessly connect with all EatoSystems components to create a unified, intelligent food ecosystem.",
      icon: <Network className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600",
      image: "/images/systems/eatoagent-seed.png",
    },
    {
      title: "Adaptive Learning Platform",
      description:
        "Agents continuously learn and improve their performance based on outcomes and environmental changes.",
      icon: <Lightbulb className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      image: "/images/systems/eatoagent-seed.png",
    },
  ]

  const stats = [
    {
      icon: <Bot className="w-8 h-8" />,
      value: "1000+",
      label: "AI Agents",
      description: "Target deployment across food systems",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "80%",
      label: "Automation",
      description: "Efficiency improvement target",
    },
    {
      icon: <Network className="w-8 h-8" />,
      value: "All",
      label: "Systems",
      description: "EatoSystem component integration",
    },
    {
      icon: <Seed className="w-8 h-8" />,
      value: "SEED",
      label: "Layer",
      description: "Foundation intelligence layer",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Keep same but remove Lab button */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <Image
            src="/images/systems/eatoagent-seed.png"
            alt="EatoAgent AI Orchestration"
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
              <Seed className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-blue-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                SEED Layer • Agent System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-relaxed tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <Bot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300">
                  EatoAgent
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light leading-relaxed">
                AI Agent Orchestration
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              Intelligent AI agents that automate, optimize, and orchestrate every aspect of the food system — from seed
              to plate.
            </p>

            {/* Action Buttons - Remove Lab button */}
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
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q4</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch Date</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">AI Agents</div>
                <div className="text-sm sm:text-base text-white/80">Target Deploy</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">80%</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Automation</div>
                <div className="text-sm sm:text-base text-white/80">Efficiency</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Seed className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">SEED</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Layer</div>
                <div className="text-sm sm:text-base text-white/80">Foundation</div>
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
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 leading-relaxed">
              Agent Intelligence Capabilities
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Advanced AI agents that automate and optimize every aspect of food system operations with intelligent
              decision-making and seamless coordination.
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
                  <h3 className="text-3xl font-bold mb-4 leading-normal">{capability.title}</h3>
                  <p className="text-lg text-white/90 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/systems/eatoagent-seed.png"
            alt="EatoAgent AI Orchestration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/85 via-indigo-600/85 to-purple-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white leading-relaxed">Understanding EatoAgent</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The intelligent orchestration layer that deploys AI agents throughout the food ecosystem, automating
                complex tasks and optimizing operations from farm to table
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-normal">What is EatoAgent?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoAgent is the SEED layer of EatoSystems - the foundational intelligence that plants autonomous AI
                    agents throughout the food ecosystem. These agents work 24/7 to automate farm management, optimize
                    supply chains, coordinate logistics, and ensure food safety across the entire system.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By 2025, EatoAgent will deploy thousands of specialized agents that can make real-time decisions
                    based on environmental data, market conditions, and sustainability metrics - reducing manual work by
                    80% while improving outcomes.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-normal">Why Agent Orchestration?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Food systems are incredibly complex, with thousands of interconnected processes happening
                    simultaneously. Traditional automation can't handle this complexity, but intelligent agents can
                    adapt, learn, and coordinate with each other to manage the entire ecosystem.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create unprecedented automation that understands the relationships between soil
                    health, weather patterns, market demand, and supply chain logistics - optimizing the entire system
                    as one intelligent network.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-normal">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoAgent will be the central nervous system for intelligent food systems, providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Bot className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Autonomous farm management agents that optimize crop yields and resource usage</span>
                    </li>
                    <li className="flex items-start">
                      <Network className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Supply chain coordination agents that ensure efficient distribution and reduce waste</span>
                    </li>
                    <li className="flex items-start">
                      <Brain className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Predictive analytics agents that forecast demand and optimize inventory</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="w-5 h-5 mr-3 mt-1 text-blue-300 flex-shrink-0" />
                      <span>Adaptive learning systems that continuously improve performance and efficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-normal">Building the Future</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoAgent represents the foundation of truly intelligent food systems - where every process is
                    optimized, every decision is data-driven, and every outcome contributes to both productivity and
                    sustainability. It's the seed that grows into comprehensive automation across the entire food value
                    chain.
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
