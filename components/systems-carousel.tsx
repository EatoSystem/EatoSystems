"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { systemsData } from "@/lib/systems-data"

const SystemsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({})

  const systems = useMemo(() => Object.values(systemsData), [])

  // Map system names to their image paths
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

  return null
}

export default SystemsCarousel
