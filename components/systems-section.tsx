"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Calendar, Eye, Circle } from "lucide-react"

interface SystemProps {
  version: string
  name: string
  layer: string
  description: string
  slug: string
  index: number
  isVisible: boolean
}

function SystemCard({ version, name, layer, description, slug, index, isVisible }: SystemProps) {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null)
  const [imageError, setImageError] = useState(false)

  const getSystemImage = (slug: string) => {
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

    return imageMap[slug] || `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(name)}`
  }

  const getLayerStyles = (layer: string) => {
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

  const layerStyles = getLayerStyles(layer)
  const isLeft = index % 2 === 0

  return (
    <div
      className={`relative flex items-center mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-600 ${
        isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full z-10"></div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <div
          className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 ${
            selectedSystem === slug ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() => setSelectedSystem(selectedSystem === slug ? null : slug)}
        >
          {/* System image */}
          <div className="relative h-48 overflow-hidden">
            <div className={`absolute inset-0 ${layerStyles.bgGradientImage} z-0`}></div>
            {!imageError ? (
              <Image
                src={getSystemImage(slug) || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105 relative z-10"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative z-10">
                <div className="text-center">
                  <Eye className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                  <p className="text-gray-600 font-medium">{name}</p>
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 z-20">
              <div className={`inline-flex items-center px-3 py-1 rounded-full ${layerStyles.bgLight} gap-2`}>
                <span className={`text-sm font-medium ${layerStyles.textAccent}`}>{layer}</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-mono font-semibold text-gray-800">{version}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${layerStyles.gradientText}`}
              >
                {name}
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>2025-2028</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Circle className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm text-gray-600">Active Development</span>
              </div>
              <div className="flex gap-2 items-center">
                <Link
                  href={`/${slug}`}
                  className={`inline-flex items-center text-sm ${layerStyles.textAccent} hover:underline`}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.scrollTo(0, 0)
                  }}
                >
                  System Details <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href={`/roadmap/${slug}`}
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
            {selectedSystem === slug && (
              <div className="mt-4 pt-4 border-t border-gray-200 transition-all duration-300">
                <p className="text-gray-600 mb-4">
                  Explore the comprehensive capabilities and development roadmap for {name}.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Link href={`/${slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <button
                      className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 bg-gradient-to-r ${layerStyles.gradientText.replace("from-", "from-").replace("to-", "to-")} hover:shadow-lg`}
                    >
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        View Details
                      </span>
                    </button>
                  </Link>
                  <Link href={`/eatosystems/${slug}-lab`} onClick={() => window.scrollTo(0, 0)}>
                    <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Developer Lab
                      </span>
                    </button>
                  </Link>
                  <Link href={`/roadmap/${slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        System Roadmap
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SystemsSection() {
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

  const systems = [
    {
      version: "v0.1",
      name: "EatoGlobal",
      layer: "SOIL",
      description:
        "The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where anyone can contribute, co-create, and help build the future of food.",
      slug: "eatoglobal",
    },
    {
      version: "v1.0",
      name: "EatoAgent",
      layer: "SEED",
      description:
        "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions.",
      slug: "eatoagent",
    },
    {
      version: "v2.0",
      name: "EatoIndex",
      layer: "POLLINATION",
      description:
        "A real-time financial index that ranks and funds food based on health, community, and environmental value — aligning capital with regeneration.",
      slug: "eatoindex",
    },
    {
      version: "v3.0",
      name: "EatoVerse",
      layer: "ROOT",
      description:
        "The digital twin of our food future — where national systems are prototyped in virtual environments before real-world rollout.",
      slug: "eatoverse",
    },
    {
      version: "v4.0",
      name: "EatoBotics",
      layer: "SPROUT",
      description:
        "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration.",
      slug: "eatobotics",
    },
    {
      version: "v5.0",
      name: "EatoTransit",
      layer: "FLOW",
      description:
        "A clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem.",
      slug: "eatotransit",
    },
    {
      version: "v6.0",
      name: "EatoAI",
      layer: "MYCELIUM",
      description:
        "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time.",
      slug: "eatoai",
    },
    {
      version: "v7.0",
      name: "EatoFund",
      layer: "CROP",
      description:
        "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world.",
      slug: "eatofund",
    },
    {
      version: "v8.0",
      name: "EatoSystem",
      layer: "HARVEST",
      description:
        "The full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure.",
      slug: "eatosystem",
    },
    {
      version: "v9.0",
      name: "EatoGov",
      layer: "REGENERATION",
      description:
        "The governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure.",
      slug: "eatogov",
    },
    {
      version: "v10.0",
      name: "EatoSecure",
      layer: "CANOPY",
      description:
        "The global food security program that ensures every individual on earth will have secure, sustained access to food.",
      slug: "eatosecure",
    },
    {
      version: "v11.0",
      name: "EatoFoundation",
      layer: "SANCTUARY",
      description:
        "The global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations.",
      slug: "eatofoundation",
    },
  ]

  // Debug log to check if systems are loading
  console.log("SystemsSection - Systems loaded:", systems.length, systems)

  return (
    <section ref={sectionRef} id="systems" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Timeline Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-orange-500 to-green-500"></div>

            {systems && systems.length > 0 ? (
              systems.map((system, index) => (
                <SystemCard
                  key={system.slug}
                  version={system.version}
                  name={system.name}
                  layer={system.layer}
                  description={system.description}
                  slug={system.slug}
                  index={index}
                  isVisible={isVisible}
                />
              ))
            ) : (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-500 text-lg">Loading EatoSystems...</p>
                <p className="text-gray-400 text-sm mt-2">If this persists, please refresh the page</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="/eatosystems">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Explore All Systems <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
