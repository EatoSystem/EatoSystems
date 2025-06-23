"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bot, Brain, Zap, ArrowRight, Code, Calendar, CheckCircle, Clock, Network, Cpu } from "lucide-react"
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
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Intelligent Decision Support",
      description:
        "AI-powered agents that analyze complex agricultural data to provide actionable insights for farmers, researchers, and policymakers.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Autonomous Farm Management",
      description:
        "Smart agents that can autonomously manage irrigation, pest control, and crop monitoring systems based on real-time environmental data.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Predictive Analytics",
      description:
        "Advanced machine learning models that predict crop yields, weather patterns, and market trends to optimize agricultural planning.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Multi-Agent Coordination",
      description:
        "Coordinated networks of AI agents working together to solve complex agricultural challenges across multiple farms and regions.",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Agent Framework Launch",
      date: "December 2025",
      status: "upcoming" as const,
      description: "Release of core AI agent framework with basic decision support and farm management capabilities.",
    },
    {
      title: "Predictive Models Integration",
      date: "March 2026",
      status: "upcoming" as const,
      description:
        "Integration of advanced predictive analytics and machine learning models for crop and weather forecasting.",
    },
    {
      title: "Multi-Agent Networks",
      date: "June 2026",
      status: "upcoming" as const,
      description: "Deployment of coordinated agent networks for large-scale agricultural optimization.",
    },
    {
      title: "Global AI Ecosystem",
      date: "September 2026",
      status: "upcoming" as const,
      description: "Full deployment of global AI agent ecosystem with autonomous decision-making capabilities.",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">
          <Image
            src="/images/systems/eatoagent-seed.png"
            alt="EatoAgent AI System"
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
              <Bot className="w-6 h-6 mr-3 text-yellow-200" />
              <span className="text-white font-semibold text-lg">SEED Layer • AI Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-300">
                EatoAgent
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">v1.0</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Intelligent AI agents that revolutionize agricultural decision-making through autonomous systems,
              predictive analytics, and coordinated multi-agent networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore AI Agents <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Link href="/eatosystems/eatoagent-lab">
                <Button
                  size="lg"
                  className="bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700 px-10 py-5 text-xl rounded-full"
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Dec</div>
                <div className="text-lg font-semibold text-white mb-2">2025</div>
                <div className="text-sm text-white/80">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">100+</div>
                <div className="text-lg font-semibold text-white mb-2">AI Models</div>
                <div className="text-sm text-white/80">Pre-trained</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Network className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Multi</div>
                <div className="text-lg font-semibold text-white mb-2">Agent</div>
                <div className="text-sm text-white/80">Networks</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">SEED</div>
                <div className="text-lg font-semibold text-white mb-2">Layer</div>
                <div className="text-sm text-white/80">Intelligence</div>
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
              <span className="gradient-text from-yellow-600 to-amber-500">AI-Powered Capabilities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EatoAgent delivers intelligent automation and decision support through advanced AI agents designed
              specifically for agricultural applications.
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
                      ? "bg-yellow-50 border-2 border-yellow-200 shadow-lg"
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
                  src="/images/systems/eatoagent-seed.png"
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
              <span className="gradient-text from-yellow-600 to-amber-500">Development Roadmap</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones in the development and deployment of EatoAgent AI systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-amber-500"></div>

              {roadmapMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-12"
                >
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-yellow-500 rounded-full z-10"></div>

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
            <Link href="/roadmap/eatoagent">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 py-3 font-medium">
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
                <span className="gradient-text from-yellow-600 to-amber-500">Build AI Agents</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join the development of next-generation AI agents for sustainable agriculture and food systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-100"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Development Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access cutting-edge AI frameworks, pre-trained models, and development tools to create intelligent
                  agents for agricultural applications.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Pre-trained AI Models
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Agent Development Framework
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />
                    Multi-Agent Orchestration
                  </div>
                </div>
                <Link href="/eatosystems/eatoagent-lab">
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-6 py-3">
                    <Code className="mr-2 h-5 w-5" />
                    Enter AI Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Model Training</h3>
                <p className="text-gray-600 mb-6">
                  Train custom AI models using agricultural datasets and contribute to the global knowledge base of
                  intelligent farming solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Agricultural Datasets
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Model Training Pipeline
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Performance Analytics
                  </div>
                </div>
                <Link href="/eatoagent">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3">
                    <Cpu className="mr-2 h-5 w-5" />
                    Start Training
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Intelligent Agriculture?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoAgent community and help create the next generation of AI-powered agricultural solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
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
