"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { systemsData } from "@/lib/systems-data"
import { ArrowRight, Sparkles, Zap, Calendar, Eye } from "lucide-react"

interface SystemProps {
  version: string
  name: string
  layer: string
  description: string
  slug: string
  index: number
}

function SystemCard({ version, name, layer, description, slug, index }: SystemProps) {
  const [isFlipped, setIsFlipped] = useState(false)
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

  const getLayerColor = (layer: string) => {
    const colorMap: Record<string, string> = {
      SOIL: "bg-gradient-to-br from-green-500 to-emerald-600",
      SEED: "bg-gradient-to-br from-yellow-500 to-amber-600",
      POLLINATION: "bg-gradient-to-br from-pink-500 to-rose-600",
      ROOT: "bg-gradient-to-br from-purple-500 to-indigo-600",
      SPROUT: "bg-gradient-to-br from-blue-500 to-sky-600",
      FLOW: "bg-gradient-to-br from-teal-500 to-cyan-600",
      MYCELIUM: "bg-gradient-to-br from-violet-500 to-purple-600",
      CROP: "bg-gradient-to-br from-amber-500 to-orange-600",
      HARVEST: "bg-gradient-to-br from-orange-500 to-red-600",
      REGENERATION: "bg-gradient-to-br from-emerald-500 to-green-600",
      CANOPY: "bg-gradient-to-br from-red-500 to-rose-600",
      SANCTUARY: "bg-gradient-to-br from-indigo-500 to-blue-600",
    }
    return colorMap[layer] || "bg-gradient-to-br from-green-500 to-emerald-600"
  }

  const getKeyFocus = (layer: string) => {
    const focusMap: Record<string, string[]> = {
      SOIL: ["Foundation", "Global Scale"],
      SEED: ["AI Agents", "Automation"],
      POLLINATION: ["Data Index", "Analytics"],
      ROOT: ["Metaverse", "Virtual Reality"],
      SPROUT: ["Robotics", "Automation"],
      FLOW: ["Logistics", "Supply Chain"],
      MYCELIUM: ["AI/ML", "Intelligence"],
      CROP: ["Funding", "Investment"],
      HARVEST: ["Integration", "Ecosystem"],
      REGENERATION: ["Governance", "Policy"],
      CANOPY: ["Security", "Protection"],
      SANCTUARY: ["Foundation", "Support"],
    }
    return focusMap[layer] || ["Innovation", "Technology"]
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative h-[28rem] w-full cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {!isFlipped ? (
          // Front of card
          <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="relative h-full">
              {!imageError ? (
                <Image
                  src={getSystemImage(slug) || "/placeholder.svg"}
                  alt={`${name} - ${layer} layer`}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                    <p className="text-gray-600 font-medium">{name}</p>
                  </div>
                </div>
              )}

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white bg-black/50">
                <div>
                  <div className="text-sm font-mono opacity-90 mb-2">{version}</div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{name}</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                    {layer}
                  </div>
                  <p className="text-sm leading-relaxed opacity-90 line-clamp-4">{description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <Sparkles className="w-6 h-6" />
                  <div className="text-sm opacity-75">Click to explore</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Back of card
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg ${getLayerColor(layer)}`}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold text-sm uppercase tracking-wide">{layer} Layer</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">{name}</h3>
                <div className="text-xs font-mono opacity-80 mb-4">{version}</div>

                {/* Key features */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wide opacity-80 mb-2">Key Focus</div>
                  <div className="flex flex-wrap gap-2">
                    {getKeyFocus(layer).map((focus, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 rounded text-xs">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/${slug}`}
                    className="block bg-white/25 hover:bg-white/35 rounded-lg px-3 py-2 text-center font-medium transition-all duration-300 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      System
                    </span>
                  </Link>
                  <Link
                    href={`/eatosystems/${slug}-lab`}
                    className="block bg-white/25 hover:bg-white/35 rounded-lg px-3 py-2 text-center font-medium transition-all duration-300 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="flex items-center justify-center gap-1">
                      <Zap className="w-3 h-3" />
                      Lab
                    </span>
                  </Link>
                </div>

                {/* Roadmap link */}
                <Link
                  href={`/roadmap/${slug}`}
                  className="flex items-center justify-center gap-2 bg-white/30 hover:bg-white/40 rounded-full px-4 py-2 font-semibold transition-all duration-300 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar className="w-4 h-4" />
                  View Roadmap <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}
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

  const systems = Object.entries(systemsData).map(([slug, system]) => ({
    ...system,
    slug,
  }))

  console.log("Systems data:", systems) // Debug log

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-8 border border-green-200">
            <Sparkles className="w-5 h-5 mr-2 text-green-600" />
            <span className="text-gray-800 font-semibold">Interactive Systems</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
              12 EatoSystems
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            From Soil to Sanctuary — Click each card to explore our interconnected ecosystem
          </p>

          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span className="animate-pulse">👆</span>
            <span>Click cards to flip and explore</span>
          </div>
        </div>

        {/* Systems Grid */}
        {systems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {systems.map((system, index) => (
              <div
                key={system.slug}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <SystemCard
                  version={system.version}
                  name={system.name}
                  layer={system.layer}
                  description={system.description}
                  slug={system.slug}
                  index={index}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Loading systems...</p>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
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
