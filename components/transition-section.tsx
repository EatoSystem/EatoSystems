"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function TransitionSection() {
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="relative">
          {/* Central divider line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Central dot */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          />

          {/* Side dots */}
          <motion.div
            className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-60"
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 0.6 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Subtle text element */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-400 font-light tracking-wider uppercase">From Vision to Reality</p>
        </motion.div>

        {/* Floating geometric shapes for visual interest */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/6 w-1 h-1 bg-green-300 rounded-full opacity-40"
            initial={{ scale: 0, rotate: 0 }}
            animate={isVisible ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-orange-300 rounded-full opacity-40"
            initial={{ scale: 0, rotate: 0 }}
            animate={isVisible ? { scale: 1, rotate: -360 } : { scale: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/12 w-px h-8 bg-gradient-to-b from-green-200 to-transparent opacity-30"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/12 w-px h-8 bg-gradient-to-b from-orange-200 to-transparent opacity-30"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  )
}
