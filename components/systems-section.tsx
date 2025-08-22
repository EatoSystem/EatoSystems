"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const systemsData = [
  {
    name: "EatoX", // Changed from EatoXYZ to EatoX
    layer: "SOIL",
    image: "/images/systems/eatocultures-soil.png",
    color: "from-amber-600 to-orange-500",
    description: "Kitchen, Studio, & Lab - the knowledge, cultural, and collaborative foundation of the EatoSystems",
    quarter: "September 2025",
    website: "EatoHQ.com", // Changed from EatoXYZ.com to EatoHQ.com
  },
  {
    name: "EatoAgent",
    layer: "SEED",
    image: "/images/systems/eatoagent-seed.png",
    color: "from-green-600 to-emerald-500",
    description:
      "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food decisions",
    quarter: "October 2025",
    website: "EatoAgent.com",
  },
  {
    name: "EatoIndex",
    layer: "POLLINATION",
    image: "/images/systems/eatoindex-pollination.png",
    color: "from-yellow-500 to-amber-500",
    description:
      "A real-time financial index that ranks and funds food based on health, community, and environmental value",
    quarter: "November 2025",
    website: "EatoIndex.com",
  },
  {
    name: "EatoVerse",
    layer: "ROOT",
    image: "/images/systems/eatoverse-root.png",
    color: "from-purple-600 to-indigo-500",
    description: "The digital twin of our food future — where national systems are prototyped in virtual environments",
    quarter: "December 2025",
    website: "EatoVerse.com",
  },
  {
    name: "EatoBotics",
    layer: "SPROUT",
    image: "/images/systems/eatobotics-sprout.png",
    color: "from-green-500 to-teal-500",
    description:
      "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration",
    quarter: "January 2026",
    website: "EatoBotics.com",
  },
  {
    name: "EatoTransit",
    layer: "FLOW",
    image: "/images/systems/eatotransit-flow.png",
    color: "from-blue-500 to-cyan-500",
    description:
      "A clean energy-powered logistics and traceability system moving food with integrity across the EatoSystems",
    quarter: "February 2026",
    website: "EatoTransit.com",
  },
  {
    name: "EatoAI",
    layer: "MYCELIUM",
    image: "/images/systems/eatoai-mycelium.png",
    color: "from-indigo-600 to-purple-500",
    description:
      "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time",
    quarter: "March 2026",
    website: "EatoAI.com",
  },
  {
    name: "EatoFund",
    layer: "CROP",
    image: "/images/systems/eatofund-crop.png",
    color: "from-orange-500 to-red-500",
    description:
      "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world",
    quarter: "April 2026",
    website: "EatoFund.com",
  },
  {
    name: "EatoSystems",
    layer: "HARVEST",
    image: "/images/systems/eatosystem-harvest.png",
    color: "from-red-500 to-pink-500",
    description:
      "The full-stack rollout of EatoSystems-powered food systems at the national level, connecting all layers",
    quarter: "May 2026",
    website: "EatoSystems.com",
  },
  {
    name: "EatoGov",
    layer: "REGENERATION",
    image: "/images/systems/eatogov-regeneration.png",
    color: "from-teal-500 to-green-500",
    description:
      "The governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure",
    quarter: "June 2026",
    website: "EatoGov.com",
  },
  {
    name: "EatoSecure",
    layer: "CANOPY",
    image: "/images/systems/eatosecure-canopy.png",
    color: "from-emerald-600 to-green-600",
    description:
      "The global food security program that ensures every individual on earth will have secure, sustained access to food",
    quarter: "July 2026",
    website: "EatoSecure.com",
  },
  {
    name: "EatoFoundation",
    layer: "SANCTUARY",
    image: "/images/systems/eatofoundation-sanctuary.png",
    color: "from-slate-600 to-gray-600",
    description:
      "The global trust that safeguards the mission, model, and long-term integrity of the EatoSystems for future generations",
    quarter: "September 2026",
    website: "EatoFoundation.com", // Updated domain from EatoFoundation.org to EatoFoundation.com
  },
]

export default function SystemsSection() {
  const [currentSystemIndex, setCurrentSystemIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSystemIndex((prevIndex) => (prevIndex + 1) % systemsData.length)
    }, 8000) // Slowed down from 6000ms to 8000ms for smoother transitions

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentSystem = systemsData[currentSystemIndex]

  const nextSystem = () => {
    setIsAutoPlaying(false)
    setCurrentSystemIndex((prevIndex) => (prevIndex + 1) % systemsData.length)
  }

  const prevSystem = () => {
    setIsAutoPlaying(false)
    setCurrentSystemIndex((prevIndex) => (prevIndex - 1 + systemsData.length) % systemsData.length)
  }

  const goToSystem = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSystemIndex(index)
  }

  return (
    <section id="systems" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              12 Systems
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Our interconnected ecosystem of agricultural innovation systems works together to create sustainable
            solutions for global food security. Each system addresses specific challenges while contributing to the
            greater whole.
          </p>
        </motion.div>

        {/* Main System Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSystemIndex}
              initial={{ opacity: 0, x: 50 }} // Reduced x from 100 to 50 for smoother entrance
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }} // Reduced x from -100 to -50 for smoother exit
              transition={{ duration: 0.8, ease: "easeInOut" }} // Increased duration from 0.6 to 0.8 for cleaner transitions
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-white">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentSystem.color} opacity-10`} />
                      <Image
                        src={currentSystem.image || "/placeholder.svg"}
                        alt={`${currentSystem.name} - ${currentSystem.layer} layer`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={currentSystemIndex === 0}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=400&width=600"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className={`mb-4 bg-gradient-to-r ${currentSystem.color} text-white border-none px-4 py-2 text-sm font-semibold`}
                        >
                          {currentSystem.layer}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-orange-500 drop-shadow-sm">
                            {currentSystem.name}
                          </span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentSystem.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-6">
                          <span className="font-medium">Launch: {currentSystem.quarter}</span>
                        </div>
                        <div className="mb-6">
                          <a
                            href={`https://${currentSystem.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors duration-200" // Changed from blue to orange for web address links
                          >
                            <span className="font-medium">{currentSystem.website}</span>
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>

                      {/* Navigation Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={prevSystem} className="p-2 bg-transparent">
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={nextSystem} className="p-2 bg-transparent">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                        <span className="text-sm text-gray-500">
                          {currentSystemIndex + 1} of {systemsData.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* System Grid Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 max-w-4xl mx-auto">
          {systemsData.map((system, index) => (
            <motion.button
              key={system.name}
              onClick={() => goToSystem(index)}
              className={`relative p-3 rounded-lg transition-all duration-300 ${
                index === currentSystemIndex
                  ? "ring-2 ring-orange-500 bg-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full aspect-square rounded-md overflow-hidden mb-2">
                <Image
                  src={system.image || "/placeholder.svg"}
                  alt={system.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=80&width=80"
                  }}
                />
              </div>
              <div className="text-xs font-medium text-gray-700 truncate">{system.name}</div>
              <div className="text-xs text-gray-500 truncate">{system.layer}</div>
            </motion.button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {systemsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSystem(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSystemIndex ? "bg-orange-500 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
