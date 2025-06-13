"use client"

import { useState, useEffect } from "react"
import { systemsData } from "@/lib/systems-data"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, CheckCircle, Circle, ArrowRight, Rocket, Users, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

// Roadmap data with launch dates
const roadmapData = [
  {
    slug: "eatoglobal",
    launchDate: "September 2025",
    quarter: "Q3 2025",
    status: "upcoming",
    description: "The foundational layer launching our global movement",
  },
  {
    slug: "eatoagent",
    launchDate: "December 2025",
    quarter: "Q4 2025",
    status: "upcoming",
    description: "AI agents to support food system decisions",
  },
  {
    slug: "eatoindex",
    launchDate: "March 2026",
    quarter: "Q1 2026",
    status: "upcoming",
    description: "Financial index aligning capital with regeneration",
  },
  {
    slug: "eatoverse",
    launchDate: "June 2026",
    quarter: "Q2 2026",
    status: "upcoming",
    description: "Digital twin for prototyping food systems",
  },
  {
    slug: "eatobotics",
    launchDate: "September 2026",
    quarter: "Q3 2026",
    status: "upcoming",
    description: "Regenerative robotics for soil health",
  },
  {
    slug: "eatotransit",
    launchDate: "December 2026",
    quarter: "Q4 2026",
    status: "upcoming",
    description: "Clean energy logistics and traceability",
  },
  {
    slug: "eatoai",
    launchDate: "March 2027",
    quarter: "Q1 2027",
    status: "upcoming",
    description: "Decentralized intelligence coordination",
  },
  {
    slug: "eatofund",
    launchDate: "June 2027",
    quarter: "Q2 2027",
    status: "upcoming",
    description: "Regenerative capital engine",
  },
  {
    slug: "eatosystem",
    launchDate: "September 2027",
    quarter: "Q3 2027",
    status: "upcoming",
    description: "Full-stack national implementation",
  },
  {
    slug: "eatogov",
    launchDate: "December 2027",
    quarter: "Q4 2027",
    status: "upcoming",
    description: "Governance and licensing framework",
  },
  {
    slug: "eatosecure",
    launchDate: "March 2028",
    quarter: "Q1 2028",
    status: "upcoming",
    description: "Global food security program",
  },
  {
    slug: "eatofoundation",
    launchDate: "June 2028",
    quarter: "Q2 2028",
    status: "upcoming",
    description: "Long-term stewardship and governance",
  },
]

export default function RoadmapPage() {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <RoadmapHero />
        <RoadmapTimeline selectedSystem={selectedSystem} setSelectedSystem={setSelectedSystem} />
        <RoadmapStats />
      </div>
    </>
  )
}

function RoadmapHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <Image
          src="/images/global-network-earth.png"
          alt="Global EatoSystems Roadmap"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
            <Calendar className="w-6 h-6 mr-3 text-blue-200" />
            <span className="text-white font-semibold text-lg">Launch Timeline 2025-2028</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-green-300">
              EatoSystems
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">Roadmap</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
            Our comprehensive 3-year journey to transform the global food ecosystem — launching 12 interconnected
            systems starting with EatoGlobal in September 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("roadmap-timeline")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Timeline <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Link href="/eatosystems">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-10 py-5 text-xl rounded-full"
                >
                  Explore Systems
                </Button>
              </Link>
            </div>
          </div>

          {/* Launch Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">12</div>
              <div className="text-lg font-semibold text-white mb-2">Systems</div>
              <div className="text-sm text-white/80">Sequential launches</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">3</div>
              <div className="text-lg font-semibold text-white mb-2">Years</div>
              <div className="text-sm text-white/80">2025-2028</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">3</div>
              <div className="text-lg font-semibold text-white mb-2">Months</div>
              <div className="text-sm text-white/80">Between launches</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">∞</div>
              <div className="text-lg font-semibold text-white mb-2">Impact</div>
              <div className="text-sm text-white/80">Global transformation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RoadmapTimeline({
  selectedSystem,
  setSelectedSystem,
}: {
  selectedSystem: string | null
  setSelectedSystem: (system: string | null) => void
}) {
  return (
    <section id="roadmap-timeline" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="gradient-text from-primary to-accent-orange">Launch Timeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each system builds upon the previous, creating a comprehensive ecosystem for sustainable food
            transformation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

            {roadmapData.map((item, index) => {
              const system = systemsData[item.slug as keyof typeof systemsData]
              const layerStyles = getLayerStyles(system.layer)
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.slug}
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
                        selectedSystem === item.slug ? "ring-2 ring-blue-500" : ""
                      }`}
                      onClick={() => setSelectedSystem(selectedSystem === item.slug ? null : item.slug)}
                    >
                      {/* System image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className={`absolute inset-0 ${layerStyles.bgGradientImage} z-0`}></div>
                        <Image
                          src={`/images/systems/${item.slug.toLowerCase()}-${getSystemLayer(item.slug)}.png`}
                          alt={system.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105 relative z-10"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.onerror = null
                            target.src = `/placeholder_image.png?height=192&width=400&text=${system.name}`
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
                          <h3 className={`text-2xl font-bold gradient-text ${layerStyles.gradientText}`}>
                            {system.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.quarter}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-lg font-semibold text-gray-800 mb-2">{item.launchDate}</div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Circle className="w-4 h-4 text-orange-500 mr-2" />
                            <span className="text-sm text-gray-600 capitalize">{item.status}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Link
                              href={`/${item.slug}`}
                              className={`inline-flex items-center text-sm ${layerStyles.textAccent} hover:underline`}
                              onClick={(e) => {
                                e.stopPropagation()
                                window.scrollTo(0, 0)
                              }}
                            >
                              System Details <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                            <Link
                              href={`/roadmap/${item.slug}`}
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
                        {selectedSystem === item.slug && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-gray-600 mb-4">{system.description}</p>
                            <div className="flex gap-2">
                              <Link href={`/${item.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                <Button
                                  size="sm"
                                  className={`${layerStyles.textAccent} hover:${layerStyles.textAccent}`}
                                >
                                  View Details
                                </Button>
                              </Link>
                              <Link href={`/${item.slug.toLowerCase()}-lab`} onClick={() => window.scrollTo(0, 0)}>
                                <Button size="sm" variant="outline">
                                  Developer Lab
                                </Button>
                              </Link>
                              <Link href={`/roadmap/${item.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                <Button size="sm" variant="outline">
                                  System Roadmap
                                </Button>
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
      </div>
    </section>
  )
}

function RoadmapStats() {
  const stats = [
    {
      number: "Sept 2025",
      label: "First Launch",
      description: "EatoGlobal begins the journey",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      number: "June 2028",
      label: "Final Launch",
      description: "EatoFoundation completes the ecosystem",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: "12",
      label: "Systems",
      description: "Comprehensive ecosystem coverage",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      number: "Global",
      label: "Impact",
      description: "Worldwide food system transformation",
      icon: <Users className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <span className="gradient-text from-primary to-accent-orange">Journey Milestones</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key milestones in our mission to transform the global food ecosystem through systematic innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent-orange rounded-full flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/start-building"
            className="inline-block bg-gradient-to-r from-primary to-accent-orange hover:from-primary-dark hover:to-accent-orange-dark text-white rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            onClick={() => window.scrollTo(0, 0)}
          >
            Join the Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

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

// Helper function to get the layer for a system
function getSystemLayer(systemSlug: string): string {
  const layerMap: Record<string, string> = {
    eatoglobal: "soil",
    eatoagent: "seed",
    eatoindex: "pollination",
    eatoverse: "root",
    eatobotics: "sprout",
    eatotransit: "flow",
    eatoai: "mycelium",
    eatofund: "crop",
    eatosystem: "harvest",
    eatogov: "regeneration",
    eatosecure: "canopy",
    eatofoundation: "sanctuary",
  }

  return layerMap[systemSlug] || "soil"
}
