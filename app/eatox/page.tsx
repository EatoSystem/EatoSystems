"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Users, ArrowRight, Code, Calendar, Sparkles, Network, Heart, TreePine, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoXYZPage() {
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
      title: "Global Knowledge Network",
      description:
        "A worldwide platform where diverse voices contribute real-world knowledge, traditions, and practices, building the collective intelligence that powers all EatoSystems.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      image: "/images/systems/eatoglobal-soil.png",
    },
    {
      title: "Living Collaboration Hub",
      description:
        "A continuously expanding space for global contributors to co-create, share stories, and build sustainable food solutions together.",
      icon: <Users className="w-12 h-12" />,
      color: "from-emerald-500 to-green-500",
      image: "/images/systems/eatoglobal-soil.png",
    },
    {
      title: "System Intelligence Foundation",
      description:
        "All contributions feed the learning and evolution of EatoAI and EatoSystems, supporting more intelligent, human-informed food system solutions.",
      icon: <Network className="w-12 h-12" />,
      color: "from-green-500 to-blue-500",
      image: "/images/systems/eatoglobal-soil.png",
    },
    {
      title: "Cultural Preservation & Innovation",
      description:
        "Programs that honor traditional food knowledge while fostering innovation, ensuring wisdom is preserved and evolved for future generations.",
      icon: <Heart className="w-12 h-12" />,
      color: "from-blue-500 to-green-500",
      image: "/images/systems/eatoglobal-soil.png",
    },
  ]

  const stats = [
    {
      value: "Q3 2025",
      label: "Launch Date",
      description: "Global foundation launch",
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      value: "100+",
      label: "Countries",
      description: "Global reach target",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      value: "1M+",
      label: "Communities",
      description: "Target community reach",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: "SOIL",
      label: "Layer",
      description: "Foundation system",
      icon: <Sprout className="w-8 h-8" />,
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Keep original EatoX content and styling */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600">
          <Image
            src="/images/systems/eatoglobal-soil.png"
            alt="EatoX Global Network"
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
              <TreePine className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-green-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                SOIL Layer • Foundation System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-blue-300">
                  EatoX
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Kitchen, Studio, & Lab
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              Kitchen, Studio, & Lab is the knowledge, cultural, and collaborative foundation of the EatoSystem - where
              the world comes together to cook, create, and co-design the future of food.
            </p>

            {/* Action Buttons - Remove Lab button */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
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

      <section id="capabilities-section" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Core Capabilities
            </h2>
            <p className="text-2xl text-green-700 max-w-4xl mx-auto">
              EatoX provides the foundational infrastructure for global food system transformation through
              community-driven initiatives and regenerative practices.
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

      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-500">
              Global Foundation Impact
            </h2>
            <p className="text-2xl text-blue-700 max-w-4xl mx-auto">
              Building the SOIL layer infrastructure that enables global food system transformation through knowledge
              sharing, cultural exchange, and collaborative innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                value: "25+",
                label: "Launch Countries",
                description: "Initial global reach",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                value: "1M+",
                label: "Target Communities",
                description: "Global community network",
                icon: <Users className="w-8 h-8" />,
              },
              {
                value: "100%",
                label: "Open Source",
                description: "Collaborative development",
                icon: <Code className="w-8 h-8" />,
              },
              {
                value: "24/7",
                label: "Global Access",
                description: "Always available platform",
                icon: <Network className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-green-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/systems/eatoglobal-soil.png" alt="EatoX Global Network" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/85 via-emerald-600/85 to-blue-600/85"></div>
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
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoX</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The knowledge, cultural, and collaborative foundation where the world comes together to cook, create,
                and co-design the future of food
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoX?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoX is Kitchen, Studio, & Lab - the SOIL layer of EatoSystems where every system begins with a
                    story, a skill, or a spark of intention. As a kitchen, we gather to share meals and food stories. As
                    a studio, we create content that amplifies our mission. As a lab, we collaborate to design and
                    prototype innovative solutions.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q3 2025, EatoX will be the global foundation for food system transformation through open
                    collaboration and cultural exchange.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Kitchen, Studio, & Lab?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional food system solutions often lack the cultural depth and collaborative foundation needed
                    for lasting change. We're building the SOIL where diverse voices can contribute real-world
                    knowledge, traditions, and practices.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This enables us to create solutions that are both innovative and culturally grounded, ensuring
                    sustainable transformation that honors local wisdom while fostering global collaboration.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoX will be the definitive foundation for global food system collaboration, providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 mr-3 mt-1 text-green-300 flex-shrink-0" />
                      <span>Global knowledge network across 100+ countries</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-1 text-green-300 flex-shrink-0" />
                      <span>Living collaboration hub for 1M+ communities</span>
                    </li>
                    <li className="flex items-start">
                      <Network className="w-5 h-5 mr-3 mt-1 text-green-300 flex-shrink-0" />
                      <span>System intelligence foundation for EatoAI</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 mr-3 mt-1 text-green-300 flex-shrink-0" />
                      <span>Cultural preservation and innovation programs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Foundation</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoX represents more than just a platform - it's the SOIL that nurtures the entire EatoSystems
                    ecosystem. Every story shared, every skill taught, every collaboration formed strengthens the
                    foundation for global food system transformation.
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
