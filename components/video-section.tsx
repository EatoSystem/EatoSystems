"use client"

// Replace the text section with an image-based section

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function ImageSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

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

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="rounded-3xl overflow-hidden shadow-lg natural-shadow border border-gray-100">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=EatoSystems+Overview"
                alt="EatoSystems Overview"
                width={1280}
                height={720}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Introducing EatoSystems</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EatoSystems represents a revolutionary approach to global food systems, addressing the entire food
              ecosystem with sustainability and regeneration at its core.
            </p>
          </div>
        </div>
      </div>

      {/* Organic shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 organic-shape opacity-10"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 organic-shape opacity-10"
        style={{ animationDelay: "-7s" }}
      ></div>
    </section>
  )
}
