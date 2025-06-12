"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export default function AboutSection() {
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

  const aboutStats = [
    {
      number: "12",
      label: "Integrated Systems",
      description: "Comprehensive agricultural solutions",
    },
    {
      number: "100+",
      label: "Global Partners",
      description: "By 2030 worldwide network",
    },
    {
      number: "∞",
      label: "Regenerative Impact",
      description: "Unlimited healing potential",
    },
    {
      number: "Global",
      label: "Architecture",
      description: "National & international rollout",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
        <Image
          src="/images/organic-produce-field.png"
          alt="Organic Produce Field"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <motion.div
          className="transition-all duration-1000 ease-out"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-orange-200 flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              A Regenerative Operating System
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
              About EatoSystems
            </span>
          </h2>

          <div className="max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-white/90 font-light break-words">
              Spanning from individual knowledge and behaviour to global infrastructure, EatoSystems are designed to
              transform how food is produced, moved, financed, and governed.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-white font-medium break-words">
              This is not just a vision. It's a living architecture — designed for rollout at the national and global
              level.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 md:mb-3 break-words">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-white/80 break-words">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
