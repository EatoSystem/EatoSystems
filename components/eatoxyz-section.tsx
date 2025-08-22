"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EatoXYZSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const spaces = [
    {
      title: "Kitchen",
      layer: "COLLABORATION",
      description:
        "Weekly gatherings where we cook and collaborate with guests from around the world, both in-person and online.",
      tagline: "Cook & Collaborate",
      image: "/images/eatoxyz-kitchen-collaborative.jpeg",
      layerColor: "from-green-500/20 to-emerald-500/20",
      layerTextColor: "text-green-600",
      layerGradient: "from-green-600 to-emerald-500",
    },
    {
      title: "Studio",
      layer: "CREATION",
      description: "Creative content production space where we document, design, and share the EatoSystem story.",
      tagline: "Design & Amplify",
      image: "/images/eatoxyz-studio-creative.jpeg",
      layerColor: "from-blue-500/20 to-sky-500/20",
      layerTextColor: "text-blue-600",
      layerGradient: "from-blue-600 to-sky-500",
    },
    {
      title: "Lab",
      layer: "INNOVATION",
      description: "Innovation hub where we develop systems, test ideas, and build the future of food technology.",
      tagline: "Innovate & Develop",
      image: "/images/eatoxyz-lab-collaborative.jpeg",
      layerColor: "from-orange-500/20 to-amber-500/20",
      layerTextColor: "text-orange-600",
      layerGradient: "from-orange-600 to-amber-500",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent-orange/10 rounded-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700">EatoSystem Headquarters</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">
                EatoX
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">Kitchen, Studio, and Lab</p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The headquarters of the EatoSystem where everything develops. Each week we meet guests in our kitchen or
              online to cook and collaborate, create content in the Studio, and develop systems and ideas in the Lab.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-orange mx-auto mt-8"></div>
          </div>

          {/* Three Spaces Grid - System Card Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {spaces.map((space, index) => (
              <motion.div
                key={space.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white shadow-lg h-full overflow-hidden">
                  <CardContent className="p-0">
                    {/* Image and System Info */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={space.image || "/placeholder.svg"}
                        alt={`${space.title} - ${space.tagline}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`} />

                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-white/90 ${space.layerTextColor} font-medium backdrop-blur-sm`}>
                          {space.layer}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-10">
                      <div className="mb-8">
                        <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">
                          {space.title}
                        </h3>
                        <p className="text-gray-600 font-medium italic text-xl">{space.tagline}</p>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">{space.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/12 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/12 w-2 h-2 bg-accent-orange/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-gray-300 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-gray-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </section>
  )
}
