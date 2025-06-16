"use client"

import { useEffect, useRef, useState, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { systemsData } from "@/lib/systems-data"
import { ArrowRight, Sparkles, Zap, Calendar } from "lucide-react"

interface SystemProps {
  version: string
  name: string
  layer: string
  description: string
  slug: string
  index: number
  isVisible: boolean
}

// Interactive System Card with flip animation and slide-in effects
const InteractiveSystemCard = memo(function InteractiveSystemCard({
  version,
  name,
  layer,
  description,
  slug,
  index,
  isVisible,
}: SystemProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const getSystemImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      eatoglobal: "/images/systems/eatoglobal-soil.png",
      eatocultures: "/images/systems/eatocultures-soil.png",
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

    // Return the mapped image or a safe fallback
    return imageMap[slug] || `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(name || slug)}`
  }

  const getLayerColor = (layer: string) => {
    const colorMap: Record<string, string> = {
      SOIL: "from-green-500 to-emerald-600",
      SEED: "from-yellow-500 to-amber-600",
      POLLINATION: "from-pink-500 to-rose-600",
      ROOT: "from-purple-500 to-indigo-600",
      SPROUT: "from-blue-500 to-sky-600",
      FLOW: "from-teal-500 to-cyan-600",
      MYCELIUM: "from-violet-500 to-purple-600",
      CROP: "from-amber-500 to-orange-600",
      HARVEST: "from-orange-500 to-red-600",
      REGENERATION: "from-emerald-500 to-green-600",
      CANOPY: "from-red-500 to-rose-600",
      SANCTUARY: "from-indigo-500 to-blue-600",
    }
    return colorMap[layer] || "from-green-500 to-emerald-600"
  }

  // Determine if card should slide from left or right
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative h-[28rem] w-full perspective-1000 cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full preserve-3d transition-transform duration-700 ease-out"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-full">
              <Image
                src={getSystemImage(slug) || "/placeholder.svg"}
                alt={`${name} - ${layer} layer`}
                fill
                className="object-cover"
                loading={index < 6 ? "eager" : "lazy"}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(name)}`
                }}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white bg-black/50">
                <div>
                  <div className="text-sm font-mono opacity-90 mb-2">{version}</div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{name}</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                    {layer}
                  </div>
                  <p className="text-sm leading-relaxed opacity-90 line-clamp-3">{description}</p>

                  {/* Prominent Roadmap Link */}
                  <Link
                    href={`/roadmap/${slug}`}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full px-4 py-2 mt-4 transition-all duration-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Calendar className="w-4 h-4" />
                    View Roadmap <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="flex items-center justify-between">
                  <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }}>
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                  <div className="text-sm opacity-75">Click to explore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg rotate-y-180">
            <div className="relative h-full">
              {/* Background image */}
              <Image
                src={getSystemImage(slug) || "/placeholder.svg"}
                alt={`${name} - ${layer} layer`}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(name)}`
                }}
              />

              {/* Enhanced gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getLayerColor(layer)} opacity-90`}></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold text-sm uppercase tracking-wide">{layer} Layer</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">{name}</h3>
                  <div className="text-xs font-mono opacity-80 mb-4">{version}</div>
                  <p className="text-sm leading-relaxed opacity-95 mb-6">{description}</p>

                  {/* Key features or benefits */}
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wide opacity-80 mb-2">Key Focus</div>
                    <div className="flex flex-wrap gap-2">
                      {layer === "SOIL" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Foundation</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Global Scale</span>
                        </>
                      )}
                      {layer === "SEED" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">AI Agents</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Automation</span>
                        </>
                      )}
                      {layer === "POLLINATION" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Data Index</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Analytics</span>
                        </>
                      )}
                      {layer === "ROOT" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Metaverse</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Virtual Reality</span>
                        </>
                      )}
                      {layer === "SPROUT" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Robotics</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Automation</span>
                        </>
                      )}
                      {layer === "FLOW" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Logistics</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Supply Chain</span>
                        </>
                      )}
                      {layer === "MYCELIUM" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">AI/ML</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Intelligence</span>
                        </>
                      )}
                      {layer === "CROP" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Funding</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Investment</span>
                        </>
                      )}
                      {layer === "HARVEST" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Integration</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Ecosystem</span>
                        </>
                      )}
                      {layer === "REGENERATION" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Governance</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Policy</span>
                        </>
                      )}
                      {layer === "CANOPY" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Security</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Protection</span>
                        </>
                      )}
                      {layer === "SANCTUARY" && (
                        <>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Foundation</span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">Support</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Primary action buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/${slug}`}
                      className="block bg-white/25 backdrop-blur-sm hover:bg-white/35 rounded-lg px-3 py-2.5 text-center font-medium transition-all duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="flex items-center justify-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        System
                      </span>
                    </Link>
                    <Link
                      href={`/eatosystems/${slug}-lab`}
                      className="block bg-white/25 backdrop-blur-sm hover:bg-white/35 rounded-lg px-3 py-2.5 text-center font-medium transition-all duration-300 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="flex items-center justify-center gap-1">
                        <Zap className="w-3 h-3" />
                        Lab
                      </span>
                    </Link>
                  </div>

                  {/* Prominent Roadmap Link - Centered and larger */}
                  <div className="flex justify-center">
                    <Link
                      href={`/roadmap/${slug}`}
                      className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm hover:bg-white/40 rounded-full px-6 py-3 font-semibold transition-all duration-300 text-sm transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Calendar className="w-4 h-4" />
                      View Roadmap <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})

export default function SystemsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const systems = Object.entries(systemsData).map(([slug, system]) => ({
    ...system,
    slug,
  }))

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* rest of code here */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-8 border border-green-200">
            <Sparkles className="w-5 h-5 mr-2 text-green-600" />
            <span className="text-gray-800 font-semibold">Interactive Systems</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
              12 EatoSystems
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            From Soil to Sanctuary — Click each card to explore our interconnected ecosystem
          </p>

          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              👆
            </motion.div>
            <span>Click cards to flip and explore</span>
          </div>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-orange-500 to-green-500"></div>

            {systems.map((system, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={system.slug}
                  className={`relative flex items-center mb-24 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <InteractiveSystemCard
                      version={system.version}
                      name={system.name}
                      layer={system.layer}
                      description={system.description}
                      slug={system.slug}
                      index={index}
                      isVisible={isVisible}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
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
