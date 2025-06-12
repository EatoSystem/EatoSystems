"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Users, BookOpen } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Define the types for our system data
interface SystemFeature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ImplementationStep {
  step: string
  description: string
  status?: "completed" | "in-progress" | "planned"
}

interface SystemPageProps {
  system: {
    slug: string
    version: string
    name: string
    layer: string
    description: string
    content: {
      overview: string
      features: SystemFeature[]
      implementation: ImplementationStep[]
      status: string
    }
    accentColor?: string
    progressPercentage?: number
    icon?: React.ReactNode
  }
}

export default function SystemPageTemplate({ system }: SystemPageProps) {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Default accent color if not provided
  const accentColor = system.accentColor || "#2F8F2F"
  const progressPercentage = system.progressPercentage || 25

  // Split overview into paragraphs
  const overviewParagraphs = system.content.overview.split("\n\n")

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Get the correct image path based on the system slug
  const getSystemImagePath = () => {
    const imageMap: Record<string, string> = {
      eatome: "/images/systems/eatome-soil.png",
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

    return imageMap[system.slug] || `/placeholder.svg?height=400&width=400&text=${system.slug}`
  }

  const imagePath = getSystemImagePath()

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="pt-32 pb-20 bg-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={imagePath || "/placeholder.svg"}
            alt={`${system.name} background`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `/placeholder.svg?height=400&width=400&text=${system.slug}`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium mb-6">
                  <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: accentColor }}></span>
                  <span className="uppercase tracking-wider text-gray-600">{system.layer}</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
                  <span className="gradient-text">{system.name}</span>
                  <span className="block mt-3 text-xl md:text-2xl font-mono text-accent-orange">{system.version}</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mt-6 leading-relaxed">{system.description}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 sm:px-6 py-2 sm:py-2.5 shadow-sm transition-all duration-300 transform hover:translate-y-[-2px] text-sm sm:text-base">
                    <span className="break-words">Learn More</span>
                  </Button>

                  <Link
                    href={`/eato-systems/${system.slug.toLowerCase()}-lab`}
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <Code className="mr-2 h-3 w-3 sm:h-4 sm:w-4" style={{ color: accentColor }} />
                    <span className="break-words" style={{ color: accentColor }}>
                      Developer Lab
                    </span>
                  </Link>

                  <Link
                    href="/eato-systems"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium px-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View All Systems
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
                  <div className="relative z-10 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: accentColor }}></div>

                    {/* System Image */}
                    <div className="flex justify-center items-center h-64 md:h-80 mb-4">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={imagePath || "/placeholder.svg"}
                          alt={system.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `/placeholder.svg?height=400&width=400&text=${system.slug}`
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="text-sm text-gray-500 uppercase tracking-wider">System {system.version}</div>
                      <div className="mt-2 text-lg font-medium">{system.layer} Layer</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary">01</span>
                </span>
                Overview
              </h2>

              <div className="prose prose-lg max-w-none text-slate-600">
                {overviewParagraphs.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="mb-6 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Lab Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary">02</span>
                </span>
                About the {system.name} Lab
              </h2>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center">
                      <Users size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-4">Collaborative Development Hub</h3>
                    <p className="text-slate-600 mb-4">
                      The {system.name} Lab is a collaborative space where developers, researchers, designers, and
                      domain experts come together to build and enhance the {system.name} system. Join our global
                      community in creating solutions that transform the food ecosystem.
                    </p>
                    <p className="text-slate-600 mb-6">
                      Whether you're a seasoned developer or just starting out, there are many ways to contribute to the
                      evolution of {system.name}.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/eato-systems/${system.slug.toLowerCase()}-lab`}
                        className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>Visit the {system.name} Lab</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                <span className="w-10 h-10 rounded-full bg-primary/10 inline-flex items-center justify-center mr-3 text-primary">
                  03
                </span>
                Key Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover the powerful capabilities that make {system.name} a transformative component of the EatoSystems
                ecosystem.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {system.content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: accentColor }}></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                      {feature.icon || <span className="text-2xl font-bold text-primary">{index + 1}</span>}
                    </div>

                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                      <span className="ml-3 px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary">Core</span>
                    </div>

                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                <span className="w-10 h-10 rounded-full bg-primary/10 inline-flex items-center justify-center mr-3 text-primary">
                  04
                </span>
                Implementation Roadmap
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                The strategic approach to bringing {system.name} to life across global food systems.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-200 transform md:translate-x-[-0.5px] hidden md:block"></div>

              <div className="space-y-12 md:space-y-0 relative">
                {system.content.implementation.map((step, index) => {
                  const isEven = index % 2 === 0
                  const status = step.status || (index === 0 ? "completed" : index === 1 ? "in-progress" : "planned")

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className={`md:flex items-center md:h-48 ${isEven ? "md:flex-row-reverse" : ""}`}
                    >
                      {/* Timeline node */}
                      <div className="md:absolute md:left-1/2 md:transform md:translate-x-[-50%] z-20 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            status === "completed"
                              ? "bg-green-500"
                              : status === "in-progress"
                                ? "bg-blue-500"
                                : "bg-gray-300"
                          }`}
                        >
                          {index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`md:w-1/2 p-6 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                        <div
                          className={`p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ${
                            status === "completed"
                              ? "border-l-4 border-l-green-500"
                              : status === "in-progress"
                                ? "border-l-4 border-l-blue-500"
                                : "border-l-4 border-l-gray-300"
                          }`}
                        >
                          <div className="flex items-center mb-3">
                            <h3 className="text-xl font-bold text-gray-800 mr-3">{step.step}</h3>
                            <span
                              className={`px-2.5 py-0.5 text-xs rounded-full ${
                                status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : status === "in-progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {status === "completed"
                                ? "Completed"
                                : status === "in-progress"
                                  ? "In Progress"
                                  : "Planned"}
                            </span>
                          </div>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                <span className="w-10 h-10 rounded-full bg-primary/10 inline-flex items-center justify-center mr-3 text-primary">
                  05
                </span>
                Current Status
              </h2>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <p className="text-slate-600 mb-8">{system.content.status}</p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Implementation Progress</span>
                      <span className="text-sm font-medium text-primary">{progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${progressPercentage}%`,
                          backgroundColor: accentColor,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Phase</div>
                      <div className="font-medium text-sm sm:text-base break-words">Development</div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Target Completion</div>
                      <div className="font-medium text-sm sm:text-base break-words">2025-2027</div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Current Focus</div>
                      <div className="font-medium text-sm sm:text-base break-words">Pilot Programs</div>
                    </motion.div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-2.5 shadow-sm transition-all duration-300">
                      Get Involved
                    </Button>

                    <Link
                      href={`/eato-systems/${system.slug.toLowerCase()}-lab`}
                      className="inline-flex items-center px-6 py-2.5 rounded-lg border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-all duration-300"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Code className="mr-2 h-4 w-4" style={{ color: accentColor }} />
                      <span style={{ color: accentColor }}>Join Developer Lab</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Systems Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Related Systems</h2>
              <p className="text-xl text-slate-600">
                Explore other components of the EatoSystems ecosystem that work together with {system.name}.
              </p>
            </motion.div>

            <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex-shrink-0 w-64">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                    <div className="h-32 bg-gray-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">System Icon</div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-gray-500 mb-1">v{item}.0</div>
                      <h3 className="font-bold text-gray-800 mb-2">Related System {item}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        A brief description of how this system connects with {system.name}.
                      </p>
                      <Link
                        href="#"
                        className="text-primary text-sm font-medium hover:underline"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
