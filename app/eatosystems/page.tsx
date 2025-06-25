"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import { systemsData } from "@/lib/systems-data"
import Image from "next/image"
import Link from "next/link"
import { Code, Leaf, Sprout, Zap, Network, Globe, ArrowRight, Building2, TreePine, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import SystemContent from "@/components/system-content"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function EatoSystemsPage({ searchParams }: { searchParams: { system?: string } }) {
  const selectedSystem = searchParams.system

  // If a system is selected, show the system details
  if (selectedSystem) {
    return (
      <>
        <Navbar />
        <Suspense
          fallback={
            <div className="min-h-screen pt-24 pb-16 container mx-auto px-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Loading system details...</p>
              </div>
            </div>
          }
        >
          <SystemContent systemSlug={selectedSystem} />
        </Suspense>
      </>
    )
  }

  // If no system is selected, show the hero and systems list
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <EatoSystemsHero />
        <SystemsListSection />
      </div>
    </>
  )
}

function EatoSystemsHero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const systemStats = [
    {
      number: "12",
      label: "Systems",
      description: "Integrated agricultural layers",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      number: "∞",
      label: "Scalable",
      description: "Infinite growth potential",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "Open",
      label: "Source",
      description: "Collaborative development",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "Global",
      label: "Impact",
      description: "Worldwide transformation",
      icon: <TreePine className="w-6 h-6" />,
    },
  ]

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <Image
          src="/images/global-systems-network.png"
          alt="Global EatoSystems Network"
          fill
          className="object-cover opacity-20"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=800&width=1200&text=Global%20Network`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Network className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              Comprehensive System Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-green-300 break-words">
              EatoSystems
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/90 break-words">
              Complete Ecosystem
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Explore our comprehensive suite of 12 interconnected systems designed to transform the global food ecosystem
            — from cultural foundations to regenerative governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("systems-grid")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Systems <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Link href="/eatosystems/compare">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-10 py-5 text-xl rounded-full"
                >
                  Compare Systems
                </Button>
              </Link>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {systemStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-white/80 break-words">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SystemsListSection() {
  return (
    <section id="systems-grid" className="py-16 sm:py-20 md:py-24 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 px-4 sm:px-0">
            <span className="gradient-text from-primary to-accent-orange break-words">System Architecture</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0 break-words">
            Each system represents a critical layer in our regenerative food ecosystem, working together to create
            sustainable transformation.
          </p>
        </motion.div>

        <SystemsList />

        <motion.div
          className="mt-12 sm:mt-16 text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/eatosystems/compare"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white rounded-full px-6 sm:px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto max-w-xs sm:max-w-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="break-words">Compare All Systems</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function SystemsList() {
  const systems = Object.entries(systemsData).map(([slug, system]) => ({
    ...system,
    slug,
  }))

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {systems.map((system) => {
        // Get layer-specific styling
        const layerStyles = getLayerStyles(system.layer)

        // Get the appropriate icon for the system layer
        const LayerIcon = getLayerIcon(system.layer)

        return (
          <motion.div
            key={system.slug}
            variants={itemVariants}
            className="border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-500 rounded-xl overflow-hidden system-card group"
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="p-4 sm:p-6 md:p-8 relative">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className={`text-base sm:text-lg md:text-xl font-mono ${layerStyles.textAccent} font-semibold break-words`}
                >
                  {system.version}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                  <span className={`gradient-text ${layerStyles.gradientText} break-words`}>{system.name}</span>
                </div>
              </div>

              <div
                className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full ${layerStyles.bgLight} gap-1 sm:gap-2 mb-3 sm:mb-4`}
              >
                <LayerIcon className={`h-3 w-3 sm:h-4 sm:w-4 ${layerStyles.textAccent} flex-shrink-0`} />
                <span className={`text-xs sm:text-sm font-medium ${layerStyles.textAccent} break-words`}>
                  {system.layer}
                </span>
              </div>

              <Link href={`/${system.slug}`} onClick={() => window.scrollTo(0, 0)}>
                <div className="mt-4 mb-4 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className={`absolute inset-0 ${layerStyles.bgGradientImage} z-0`}></div>
                  <Image
                    src={`/images/systems/${system.slug.toLowerCase()}-${getSystemLayer(system.slug)}.png`}
                    alt={system.name}
                    width={320}
                    height={160}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.src = `/placeholder.svg?height=160&width=320&text=${encodeURIComponent(system.name)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="text-white bg-accent-orange px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium break-words">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base break-words mb-4">
                {system.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <Link
                  href={`/${system.slug}`}
                  className={`${layerStyles.textAccent} hover:${layerStyles.textAccent} font-medium inline-flex items-center text-xs sm:text-sm break-words`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="break-words">Learn more</span>
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                </Link>

                <Link
                  href={`/eatosystems/${system.slug.toLowerCase()}-lab`}
                  className={`inline-flex items-center text-xs sm:text-sm px-3 py-1 rounded-full ${layerStyles.bgLight} hover:${layerStyles.bgLightHover} transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <Code className={`mr-1 h-3 w-3 ${layerStyles.textAccent} flex-shrink-0`} />
                  <span className={`${layerStyles.textAccent} break-words`}>Developer Lab</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// Helper function to get layer-specific styling
function getLayerStyles(layer: string) {
  const layerStyleMap: Record<string, any> = {
    SOIL: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      gradientText: "from-green-600 to-emerald-500",
      bgGradientImage: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    },
    SEED: {
      bgLight: "bg-yellow-50",
      bgLightHover: "bg-yellow-100",
      textAccent: "text-yellow-600",
      gradientText: "from-yellow-600 to-amber-500",
      bgGradientImage: "bg-gradient-to-r from-yellow-500/10 to-amber-500/10",
    },
    POLLINATION: {
      bgLight: "bg-pink-50",
      bgLightHover: "bg-pink-100",
      textAccent: "text-pink-600",
      gradientText: "from-pink-600 to-rose-500",
      bgGradientImage: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    },
    ROOT: {
      bgLight: "bg-purple-50",
      bgLightHover: "bg-purple-100",
      textAccent: "text-purple-600",
      gradientText: "from-purple-600 to-indigo-500",
      bgGradientImage: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10",
    },
    SPROUT: {
      bgLight: "bg-blue-50",
      bgLightHover: "bg-blue-100",
      textAccent: "text-blue-600",
      gradientText: "from-blue-600 to-sky-500",
      bgGradientImage: "bg-gradient-to-r from-blue-500/10 to-sky-500/10",
    },
    FLOW: {
      bgLight: "bg-teal-50",
      bgLightHover: "bg-teal-100",
      textAccent: "text-teal-600",
      gradientText: "from-teal-600 to-cyan-500",
      bgGradientImage: "bg-gradient-to-r from-teal-500/10 to-cyan-500/10",
    },
    MYCELIUM: {
      bgLight: "bg-violet-50",
      bgLightHover: "bg-violet-100",
      textAccent: "text-violet-600",
      gradientText: "from-violet-600 to-purple-500",
      bgGradientImage: "bg-gradient-to-r from-violet-500/10 to-purple-500/10",
    },
    CROP: {
      bgLight: "bg-amber-50",
      bgLightHover: "bg-amber-100",
      textAccent: "text-amber-600",
      gradientText: "from-amber-600 to-orange-500",
      bgGradientImage: "bg-gradient-to-r from-amber-500/10 to-orange-500/10",
    },
    HARVEST: {
      bgLight: "bg-orange-50",
      bgLightHover: "bg-orange-100",
      textAccent: "text-orange-600",
      gradientText: "from-orange-600 to-amber-500",
      bgGradientImage: "bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    },
    REGENERATION: {
      bgLight: "bg-emerald-50",
      bgLightHover: "bg-emerald-100",
      textAccent: "text-emerald-600",
      gradientText: "from-emerald-600 to-green-500",
      bgGradientImage: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
    },
    CANOPY: {
      bgLight: "bg-red-50",
      bgLightHover: "bg-red-100",
      textAccent: "text-red-600",
      gradientText: "from-red-600 to-rose-500",
      bgGradientImage: "bg-gradient-to-r from-red-500/10 to-rose-500/10",
    },
    SANCTUARY: {
      bgLight: "bg-indigo-50",
      bgLightHover: "bg-indigo-100",
      textAccent: "text-indigo-600",
      gradientText: "from-indigo-600 to-blue-500",
      bgGradientImage: "bg-gradient-to-r from-indigo-500/10 to-blue-500/10",
    },
  }

  return layerStyleMap[layer] || layerStyleMap["SOIL"]
}

// Helper function to get the appropriate icon for the system layer
function getLayerIcon(layer: string) {
  switch (layer) {
    case "SOIL":
      return Leaf
    case "SEED":
      return Sprout
    case "POLLINATION":
      return Zap
    case "ROOT":
      return Network
    case "SPROUT":
      return Sprout
    case "FLOW":
      return Globe
    case "MYCELIUM":
      return Network
    case "CROP":
      return Leaf
    case "HARVEST":
      return Leaf
    case "REGENERATION":
      return Sprout
    case "CANOPY":
      return Globe
    case "SANCTUARY":
      return Leaf
    default:
      return Leaf
  }
}

// Helper function to get the layer for a system
function getSystemLayer(systemSlug: string): string {
  const layerMap: Record<string, string> = {
    eatoglobal: "soil",
    eatome: "soil",
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
