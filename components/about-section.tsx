"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

const AboutSection: React.FC = () => {
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
          className="object-cover opacity-30"
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
          <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/40">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-orange-100 flex-shrink-0" />
            <span className="text-gray-50 font-semibold text-sm sm:text-base md:text-lg break-words">
              A Regenerative Operating System
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 break-words drop-shadow-2xl">
              About EatoSystem
            </span>
          </h2>

          <div className="max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-50 font-light break-words drop-shadow-2xl">
              Spanning from individual knowledge and behaviour to global infrastructure, EatoSystem is designed to
              transform how food is produced, moved, financed, and governed.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-50 font-medium break-words drop-shadow-2xl">
              This is not just a vision. It's a living architecture — designed for rollout at the national and global
              level through EatoSystem.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-50 font-medium break-words drop-shadow-2xl">
              Eato means to Eat Optimal for Health, Community, and the Environment.
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
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 mb-1 sm:mb-2 md:mb-3 break-words drop-shadow-2xl">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-50 mb-1 sm:mb-2 break-words drop-shadow-lg">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-100 break-words drop-shadow-lg">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
