"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { systemsData } from "@/lib/systems-data"
import Image from "next/image"

const SystemsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({})

  const systems = useMemo(() => Object.values(systemsData), [])

  // Map system names to their image paths - move this before the useEffect
  const getSystemImagePath = useCallback((system) => {
    const systemKey = system.name.toLowerCase().replace(/eato/, "")

    const imageMap = {
      global: `/images/systems/eatoglobal-soil.png`,
      cultures: `/images/systems/eatocultures-soil.png`,
      agent: `/images/systems/eatoagent-seed.png`,
      index: `/images/systems/eatoindex-pollination.png`,
      verse: `/images/systems/eatoverse-root.png`,
      botics: `/images/systems/eatobotics-sprout.png`,
      ai: `/images/systems/eatoai-mycelium.png`,
      fund: `/images/systems/eatofund-crop.png`,
      system: `/images/systems/eatosystem-harvest.png`,
      gov: `/images/systems/eatogov-regeneration.png`,
      secure: `/images/systems/eatosecure-canopy.png`,
      foundation: `/images/systems/eatofoundation-sanctuary.png`,
      transit: `/images/systems/eatotransit-flow.png`,
    }

    return imageMap[systemKey] || `/placeholder.svg?height=400&width=800&query=${system.name}`
  }, [])

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadPromises = systems.map((system, index) => {
          return new Promise<void>((resolve) => {
            const img = document.createElement("img")
            img.onload = () => {
              setImageLoadStates((prev) => ({ ...prev, [index]: true }))
              resolve()
            }
            img.onerror = () => {
              setImageLoadStates((prev) => ({ ...prev, [index]: true }))
              resolve()
            }
            img.src = getSystemImagePath(system)
          })
        })

        await Promise.all(loadPromises)
      } catch (error) {
        console.warn("Error preloading images:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (systems.length > 0) {
      preloadImages()
    } else {
      setIsLoading(false)
    }
  }, [systems, getSystemImagePath])

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % systems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [systems.length, isAutoPlaying, isLoading])

  // Pause auto-play on user interaction
  const handleUserInteraction = useCallback(() => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      handleUserInteraction()
      setCurrentIndex(index)
    },
    [handleUserInteraction],
  )

  // Gradient text style for system names
  const gradientTextStyle = useMemo(
    () => ({
      background: "linear-gradient(90deg, #22c55e 0%, #f97316 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
    }),
    [],
  )

  if (isLoading) {
    return (
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-8">
        <div className="relative h-[500px] md:h-[600px] w-full">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
            <div className="relative w-full h-[400px] md:h-[500px] bg-gray-200 animate-pulse" />
            <div className="text-center mt-6 max-w-2xl mx-auto px-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-8">
      <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Image container with crossfade effect */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 overflow-hidden">
          {systems.map((system, index) => (
            <div
              key={system.name}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={getSystemImagePath(system) || "/placeholder.svg"}
                alt={`${system.name}`}
                fill
                className="object-cover shadow-lg"
                sizes="100vw"
                priority={index < 3} // Prioritize first 3 images
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* Text content with fade transition */}
        <div className="relative mt-6">
          {systems.map((system, index) => (
            <div
              key={`text-${system.name}`}
              className={`absolute inset-0 text-center max-w-4xl mx-auto px-4 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10 transform translate-y-0"
                  : "opacity-0 z-0 transform translate-y-4"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                <span style={gradientTextStyle}>{system.name}</span>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{system.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-4 space-x-2 px-2 px-[px]nn px-2 px-0nnnnnx.5xpx].5.5">
        {systems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 my-2 my-[px] py-2 py-0 py-2 py-0 space-x-3 space-x-3 space-x-2 space-x-5 ${
              index === currentIndex ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SystemsCarousel
