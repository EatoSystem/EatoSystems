"use client"

import { useState, useEffect, useRef } from "react"
import { systemsData } from "@/lib/systems-data"
import { motion } from "framer-motion"

export default function SystemMap() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
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

  // Sort systems by version number
  const sortedSystems = [...systems].sort((a, b) => {
    const versionA = Number.parseFloat(a.version.replace("v", ""))
    const versionB = Number.parseFloat(b.version.replace("v", ""))
    return versionA - versionB
  })

  return (
    <section ref={sectionRef} id="system-map" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white via-gray-50/50 to-white"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-orange/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 display-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            The EatoSystems Ecosystem
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Explore our interconnected systems designed to transform the global food ecosystem from soil to sanctuary.
          </p>
        </div>

        <div
          className={`system-map transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          {sortedSystems.map((system, index) => {
            // Calculate size and position based on index
            const size = 100 - index * 8 // Decreasing size for inner circles
            const delay = index * 0.1

            return (
              <motion.div
                key={system.slug}
                className={`system-map-layer ${activeSystem === system.slug ? "z-20" : ""}`}
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  backgroundColor: activeSystem === system.slug ? "rgba(217, 130, 43, 0.1)" : "rgba(47, 143, 47, 0.05)",
                  border: `2px solid ${activeSystem === system.slug ? "#D9822B" : "rgba(47, 143, 47, 0.2)"}`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.8,
                  transition: { delay: delay, duration: 0.5 },
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveSystem(system.slug === activeSystem ? null : system.slug)}
              >
                {activeSystem === system.slug ? (
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl max-w-md">
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-mono text-accent-orange mr-2">{system.version}</span>
                      <h3 className="text-2xl font-bold">{system.name}</h3>
                    </div>
                    <p className="text-slate-600">{system.description}</p>
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <div className="inline-block mb-2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <span className="text-accent-orange font-mono font-bold">{system.version.replace("v", "")}</span>
                    </div>
                    <div className="font-medium text-gray-800">{system.name}</div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p
            className={`text-lg max-w-2xl mx-auto text-slate-600 mb-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Click on each layer to learn more about our integrated systems, from cultural foundations to global
            governance.
          </p>
        </div>
      </div>
    </section>
  )
}
