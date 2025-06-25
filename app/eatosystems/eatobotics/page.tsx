"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bot, Cpu, Zap, ArrowRight, Code, Calendar, CheckCircle, Clock, Target, Cog, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoBoticsPage() {
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
      title: "Autonomous Farm Robots",
      description:
        "Advanced robotic systems that perform precision farming tasks including planting, weeding, harvesting, and soil monitoring with minimal human intervention.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-sky-600",
    },
    {
      title: "Soil Health Monitoring",
      description:
        "Intelligent sensors and robotic systems that continuously monitor soil conditions, nutrient levels, and ecosystem health for optimal crop management.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Precision Agriculture",
      description:
        "Robotic systems equipped with AI and machine learning capabilities for precise application of water, nutrients, and pest control measures.",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Swarm Coordination",
      description:
        "Coordinated networks of agricultural robots working together to optimize farm operations and maximize efficiency across large-scale operations.",
      icon: <Cog className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Robotics Platform Launch",
      date: "September 2026",
      status: "upcoming" as const,
      description:
        "Launch of the core EatoBotics platform with basic autonomous farming robots and soil monitoring systems.",
    },
    {
      title: "AI Integration",
      date: "December 2026",
      status: "upcoming" as const,
      description:
        "Integration of advanced AI and machine learning capabilities for precision agriculture and autonomous decision-making.",
    },
    {
      title: "Swarm Intelligence",
      date: "March 2027",
      status: "upcoming" as const,
      description: "Implementation of swarm coordination systems for large-scale robotic farm operations.",
    },
    {
      title: "Global Deployment",
      date: "June 2027",
      status: "upcoming" as const,
      description:
        "Global deployment of EatoBotics systems across diverse agricultural environments and farming operations.",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600">
          <Image
            src="/images/systems/eatobotics-sprout.png"
            alt="EatoBotics Robotic System"
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
              <Bot className="w-6 h-6 mr-3 text-blue-200" />
              <span className="text-white font-semibold text-lg">SPROUT Layer • Robotic Systems</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-cyan-300">
                EatoBotics
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">v1.0</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Revolutionary robotic systems for regenerative agriculture, featuring autonomous farm robots, precision
              monitoring, and coordinated swarm intelligence for sustainable farming.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Robotics <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Link href="/eatosystems/eatobotics-lab">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-10 py-5 text-xl rounded-full"
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Sep</div>
                <div className="text-lg font-semibold text-white mb-2">2026</div>
                <div className="text-sm text-white/80">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">500+</div>
                <div className="text-lg font-semibold text-white mb-2">Robot Types</div>
                <div className="text-sm text-white/80">Specialized</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Cog className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Swarm</div>
                <div className="text-lg font-semibold text-white mb-2">Intelligence</div>
                <div className="text-sm text-white/80">Coordination</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">SPROUT</div>
                <div className="text-lg font-semibold text-white mb-2">Layer</div>
                <div className="text-sm text-white/80">Robotic</div>
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
              <span className="gradient-text from-blue-600 to-sky-500">Robotic Capabilities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EatoBotics delivers advanced robotic solutions that revolutionize farming through autonomous systems,
              precision monitoring, and intelligent coordination.
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
                      ? "bg-blue-50 border-2 border-blue-200 shadow-lg"
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
                  src="/images/systems/eatobotics-sprout.png"
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
              <span className="gradient-text from-blue-600 to-sky-500">Development Roadmap</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones in the development and deployment of EatoBotics robotic systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-sky-500"></div>

              {roadmapMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-12"
                >
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

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
            <Link href="/roadmap/eatobotics">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-medium">
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
                <span className="gradient-text from-blue-600 to-sky-500">Build Robotic Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join the development of next-generation robotic systems for sustainable agriculture and precision
                farming.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Robotics Development Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access robotics frameworks, simulation environments, and hardware integration tools to develop
                  autonomous agricultural robots.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Robotics Frameworks
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Simulation Environment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Hardware Integration
                  </div>
                </div>
                <Link href="/eatosystems/eatobotics-lab">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3">
                    <Code className="mr-2 h-5 w-5" />
                    Enter Robotics Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Hardware Platform</h3>
                <p className="text-gray-600 mb-6">
                  Access hardware specifications, sensor integration guides, and robotic platform designs for
                  agricultural applications.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Hardware Specs
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sensor Integration
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Platform Designs
                  </div>
                </div>
                <Link href="/eatobotics">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3">
                    <Settings className="mr-2 h-5 w-5" />
                    View Hardware
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Automate Agriculture?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoBotics community and help build the next generation of autonomous robotic systems for
              sustainable farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
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
