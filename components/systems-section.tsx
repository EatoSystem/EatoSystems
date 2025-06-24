"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Calendar, Circle } from "lucide-react"
import { motion } from "framer-motion"

// Systems data with launch timeline
const SYSTEMS_DATA = [
  {
    slug: "eatoglobal",
    version: "v0.1",
    name: "EatoGlobal",
    layer: "SOIL",
    launchDate: "September 2025",
    quarter: "Q3 2025",
    description:
      "The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where anyone can contribute, co-create, and help build the future of food.",
  },
  {
    slug: "eatoagent",
    version: "v1.0",
    name: "EatoAgent",
    layer: "SEED",
    launchDate: "December 2025",
    quarter: "Q4 2025",
    description:
      "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions.",
  },
  {
    slug: "eatoindex",
    version: "v2.0",
    name: "EatoIndex",
    layer: "POLLINATION",
    launchDate: "March 2026",
    quarter: "Q1 2026",
    description:
      "A real-time financial index that ranks and funds food based on health, community, and environmental value — aligning capital with regeneration.",
  },
  {
    slug: "eatoverse",
    version: "v3.0",
    name: "EatoVerse",
    layer: "ROOT",
    launchDate: "June 2026",
    quarter: "Q2 2026",
    description:
      "The digital twin of our food future — where national systems are prototyped in virtual environments before real-world rollout.",
  },
  {
    slug: "eatobotics",
    version: "v4.0",
    name: "EatoBotics",
    layer: "SPROUT",
    launchDate: "September 2026",
    quarter: "Q3 2026",
    description:
      "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration.",
  },
  {
    slug: "eatotransit",
    version: "v5.0",
    name: "EatoTransit",
    layer: "FLOW",
    launchDate: "December 2026",
    quarter: "Q4 2026",
    description:
      "A clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem.",
  },
  {
    slug: "eatoai",
    version: "v6.0",
    name: "EatoAI",
    layer: "MYCELIUM",
    launchDate: "March 2027",
    quarter: "Q1 2027",
    description:
      "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time.",
  },
  {
    slug: "eatofund",
    version: "v7.0",
    name: "EatoFund",
    layer: "CROP",
    launchDate: "June 2027",
    quarter: "Q2 2027",
    description:
      "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world.",
  },
  {
    slug: "eatosystem",
    version: "v8.0",
    name: "EatoSystem",
    layer: "HARVEST",
    launchDate: "September 2027",
    quarter: "Q3 2027",
    description:
      "The full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure.",
  },
  {
    slug: "eatogov",
    version: "v9.0",
    name: "EatoGov",
    layer: "REGENERATION",
    launchDate: "December 2027",
    quarter: "Q4 2027",
    description:
      "The governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure.",
  },
  {
    slug: "eatosecure",
    version: "v10.0",
    name: "EatoSecure",
    layer: "CANOPY",
    launchDate: "March 2028",
    quarter: "Q1 2028",
    description:
      "The global food security program that ensures every individual on earth will have secure, sustained access to food.",
  },
  {
    slug: "eatofoundation",
    version: "v11.0",
    name: "EatoFoundation",
    layer: "SANCTUARY",
    launchDate: "June 2028",
    quarter: "Q2 2028",
    description:
      "The global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations.",
  },
]

// Helper function to get layer-specific styling
function getLayerStyles(layer: string) {
  const layerStyleMap: Record<string, any> = {
    SOIL: {
      bgLight: "bg-green-50",
      textAccent: "text-green-600",
      gradientText: "from-green-600 to-emerald-500",
      bgGradientImage: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    },
    SEED: {
      bgLight: "bg-yellow-50",
      textAccent: "text-yellow-600",
      gradientText: "from-yellow-600 to-amber-500",
      bgGradientImage: "bg-gradient-to-r from-yellow-500/10 to-amber-500/10",
    },
    POLLINATION: {
      bgLight: "bg-pink-50",
      textAccent: "text-pink-600",
      gradientText: "from-pink-600 to-rose-500",
      bgGradientImage: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    },
    ROOT: {
      bgLight: "bg-purple-50",
      textAccent: "text-purple-600",
      gradientText: "from-purple-600 to-indigo-500",
      bgGradientImage: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
    },
    SPROUT: {
      bgLight: "bg-blue-50",
      textAccent: "text-blue-600",
      gradientText: "from-blue-600 to-sky-500",
      bgGradientImage: "bg-gradient-to-r from-blue-500/10 to-sky-500/10",
    },
    FLOW: {
      bgLight: "bg-teal-50",
      textAccent: "text-teal-600",
      gradientText: "from-teal-600 to-cyan-500",
      bgGradientImage: "bg-gradient-to-r from-teal-500/10 to-cyan-500/10",
    },
    MYCELIUM: {
      bgLight: "bg-violet-50",
      textAccent: "text-violet-600",
      gradientText: "from-violet-600 to-purple-500",
      bgGradientImage: "bg-gradient-to-r from-violet-500/10 to-purple-500/10",
    },
    CROP: {
      bgLight: "bg-amber-50",
      textAccent: "text-amber-600",
      gradientText: "from-amber-600 to-orange-500",
      bgGradientImage: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
    },
    HARVEST: {
      bgLight: "bg-orange-50",
      textAccent: "text-orange-600",
      gradientText: "from-orange-600 to-amber-500",
      bgGradientImage: "bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    },
    REGENERATION: {
      bgLight: "bg-emerald-50",
      textAccent: "text-emerald-600",
      gradientText: "from-emerald-600 to-green-500",
      bgGradientImage: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
    },
    CANOPY: {
      bgLight: "bg-red-50",
      textAccent: "text-red-600",
      gradientText: "from-red-600 to-rose-500",
      bgGradientImage: "bg-gradient-to-r from-red-500/10 to-rose-500/10",
    },
    SANCTUARY: {
      bgLight: "bg-indigo-50",
      textAccent: "text-indigo-600",
      gradientText: "from-indigo-600 to-blue-500",
      bgGradientImage: "bg-gradient-to-r from-indigo-500/10 to-blue-500/10",
    },
  }

  return layerStyleMap[layer] || layerStyleMap["SOIL"]
}

// Helper function to get system image
function getSystemImage(slug: string) {
  const imageMap: Record<string, string> = {
    eatoglobal: "/images/systems/eatoglobal-soil.png",
    eatoagent: "/images/systems/eatoagent-seed.png",
    eatoindex: "/images/systems/eatoindex-pollination.png",
    eatoverse: "/images/systems/eatoverse-root.png",
    eatobotics: "/images/systems/eatobotics-sprout.png",
    eatotransit: "/images/systems/eatotransit-flow.png",
    eatoai: "/images/systems/eatoai-mycelium.png",
    eatofund: "/images/systems/eatofund-crop.png",
    eatosystem: "/images/systems/eatosystem-harvest.png",
    eatogov: "/images/systems/eatogov-regeneration.png",
    eatosecure: "/images/systems/eatosecure-canopy.png",
    eatofoundation: "/images/systems/eatofoundation-sanctuary.png",
  }

  return imageMap[slug] || `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(slug)}`
}

export default function SystemsSection() {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="systems" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-8 border border-green-200">
            <Sparkles className="w-5 h-5 mr-2 text-green-600" />
            <span className="text-gray-800 font-semibold">Interactive Systems</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
              12 EatoSystems
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From Soil to Sanctuary — Click each card to explore our interconnected ecosystem of regenerative food
            systems.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

            {SYSTEMS_DATA.map((system, index) => {
              const layerStyles = getLayerStyles(system.layer)
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={system.slug}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <div
                      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
                        selectedSystem === system.slug ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedSystem(selectedSystem === system.slug ? null : system.slug)}
                    >
                      {/* System image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 ${layerStyles.bgGradientImage} z-0`}></div>
                        <Image
                          src={getSystemImage(system.slug) || "/placeholder.svg"}
                          alt={system.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105 relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.onerror = null
                            target.src = `/placeholder.svg?height=192&width=400&text=${system.name}`
                          }}
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full ${layerStyles.bgLight} gap-2`}
                          >
                            <span className={`text-sm font-medium ${layerStyles.textAccent}`}>{system.layer}</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 z-20">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-sm font-mono font-semibold text-gray-800">{system.version}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3
                            className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${layerStyles.gradientText}`}
                          >
                            {system.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {system.quarter}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-lg font-semibold text-gray-800 mb-2">{system.launchDate}</div>
                          <p className="text-gray-600">{system.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Circle className="w-4 h-4 text-orange-500 mr-2" />
                            <span className="text-sm text-gray-600 capitalize">upcoming</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Link
                              href={`/${system.slug}`}
                              className={`inline-flex items-center text-sm ${layerStyles.textAccent} hover:underline`}
                              onClick={(e) => {
                                e.stopPropagation()
                                window.scrollTo(0, 0)
                              }}
                            >
                              System Details <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                            <Link
                              href={`/roadmap/${system.slug}`}
                              className={`inline-flex items-center text-sm text-blue-600 hover:underline`}
                              onClick={(e) => {
                                e.stopPropagation()
                                window.scrollTo(0, 0)
                              }}
                            >
                              Roadmap <Calendar className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Expanded content */}
                        {selectedSystem === system.slug && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-gray-600 mb-4">
                              Explore the comprehensive capabilities and development roadmap for {system.name}.
                            </p>
                            <div className="flex gap-2">
                              <Link href={`/${system.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                <button
                                  className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 bg-gradient-to-r ${layerStyles.gradientText} hover:shadow-lg`}
                                >
                                  View Details
                                </button>
                              </Link>
                              <Link href={`/${system.slug.toLowerCase()}-lab`} onClick={() => window.scrollTo(0, 0)}>
                                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                                  Developer Lab
                                </button>
                              </Link>
                              <Link href={`/roadmap/${system.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                                  System Roadmap
                                </button>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/eatosystems">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Explore All Systems <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
