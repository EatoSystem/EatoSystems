"use client"

import { useEffect, useRef, useState, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { systemsData } from "@/lib/systems-data"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

interface SystemProps {
  version: string
  name: string
  layer: string
  description: string
  slug: string
  index: number
  isVisible: boolean
}

// Interactive System Card with flip animation
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
    return imageMap[slug] || `/placeholder.svg?height=200&width=300&text=${name}`
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

  return (
    <motion.div
      className={`transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative h-80 w-full perspective-1000 cursor-pointer group"
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
              />

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white bg-black/40">
                <div>
                  <div className="text-sm font-mono opacity-90 mb-2">{version}</div>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{name}</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{layer}</div>
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
            <div
              className={`h-full bg-gradient-to-br ${getLayerColor(layer)} p-6 flex flex-col justify-between text-white`}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">{layer} Layer</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{name}</h3>
                <p className="text-sm leading-relaxed opacity-90 mb-6">{description}</p>
              </div>

              <div className="space-y-3">
                <Link
                  href={`/${slug}`}
                  className="block w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg px-4 py-3 text-center font-medium transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {systems.map((system, index) => (
            <InteractiveSystemCard
              key={system.slug}
              version={system.version}
              name={system.name}
              layer={system.layer}
              description={system.description}
              slug={system.slug}
              index={index}
              isVisible={isVisible}
            />
          ))}
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
