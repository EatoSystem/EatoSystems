"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { systemsData } from "@/lib/systems-data"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Code, Leaf, Sprout, Zap, Network, Globe, Users, BookOpen, Activity, Map, Share2, Clock } from "lucide-react"

export default function SystemContent({ systemSlug }: { systemSlug: string }) {
  // Get the system data
  const system = systemsData[systemSlug as keyof typeof systemsData]
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // If the system doesn't exist, return 404
  if (!system) {
    notFound()
  }

  const { content } = system

  // Get layer-specific styling with green-orange theme
  const layerStyles = getLayerStyles(system.layer)

  // Get the appropriate icon for the system layer
  const LayerIcon = getLayerIcon(system.layer)

  // Split overview into paragraphs
  const overviewParagraphs = content.overview.split("\n\n")

  // Cycle through features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev + 1) % content.features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [content.features.length])

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
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
  }, [controls])

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

  // Calculate a progress percentage based on the system version
  const getProgressPercentage = () => {
    // All systems start at 0% as we prepare for launch
    return 0
  }

  const progressPercentage = getProgressPercentage()

  // Get system status based on version
  const getSystemStatus = () => {
    return { label: "Planned", color: "text-gray-600", bg: "bg-gray-100", icon: Clock }
  }

  const systemStatus = getSystemStatus()
  const StatusIcon = systemStatus.icon

  return (
    <>
      <ScrollToTop />

      {/* System Vitality Metrics */}
      <section className="py-8 sm:py-10 md:py-12 bg-gray-50 border-y border-gray-100" id="system-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${layerStyles.bgLight}`}>
                    <Activity className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${layerStyles.textAccent}`} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{progressPercentage}%</div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">System Maturity</div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${layerStyles.bgLight}`}>
                    <Users className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${layerStyles.textAccent}`} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  {Math.floor(progressPercentage * 3.5)}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Contributors</div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${layerStyles.bgLight}`}>
                    <Map className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${layerStyles.textAccent}`} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  {Math.floor(progressPercentage / 10)}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Active Regions</div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${layerStyles.bgLight}`}>
                    <Share2 className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ${layerStyles.textAccent}`} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                  {Math.floor(progressPercentage / 12) + 2}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">System Connections</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${layerStyles.bgLight} flex items-center justify-center mr-3`}
                >
                  <span className={`${layerStyles.textAccent} text-sm sm:text-base`}>01</span>
                </span>
                <span className="break-words">Overview</span>
              </h2>

              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-slate-600">
                {overviewParagraphs.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="mb-4 sm:mb-6 leading-relaxed break-words"
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
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${layerStyles.bgLight} flex items-center justify-center mr-3`}
                >
                  <span className={`${layerStyles.textAccent} text-sm sm:text-base`}>02</span>
                </span>
                <span className="break-words">About the {system.name} Lab</span>
              </h2>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <motion.div
                      className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ${layerStyles.bgLight} flex items-center justify-center`}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    >
                      <Users size={32} className={`sm:w-10 sm:h-10 md:w-12 md:h-12 ${layerStyles.textAccent}`} />
                    </motion.div>
                  </div>
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">
                      Collaborative Development Hub
                    </h3>
                    <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base break-words">
                      The {system.name} Lab is a collaborative space where developers, researchers, designers, and
                      domain experts come together to build and enhance the {system.name} system. Join our global
                      community in creating solutions that transform the food ecosystem.
                    </p>
                    <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base break-words">
                      Whether you're a seasoned developer or just starting out, there are many ways to contribute to the
                      evolution of {system.name}.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Link
                        href={`/${systemSlug}-lab`}
                        className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg ${layerStyles.bgAccent} text-white hover:${layerStyles.bgAccentHover} transition-all duration-300 text-sm sm:text-base`}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <BookOpen className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="break-words">Visit the {system.name} Lab</span>
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
      <section className="py-16 sm:py-18 md:py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full opacity-5"
            initial={{ scale: 0.8, opacity: 0.05 }}
            animate={{ scale: 1.2, opacity: 0.1 }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
            style={{ backgroundColor: layerStyles.textAccent }}
          ></motion.div>

          <motion.div
            className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-5"
            initial={{ scale: 1, opacity: 0.05 }}
            animate={{ scale: 1.5, opacity: 0.1 }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
            style={{ backgroundColor: layerStyles.textAccent }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${layerStyles.bgLight} inline-flex items-center justify-center mr-3 ${layerStyles.textAccent}`}
                >
                  <span className="text-sm sm:text-base">03</span>
                </span>
                <span className="break-words">Key Features</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto break-words">
                Discover the powerful capabilities that make {system.name} a transformative component of the EatoSystems
                ecosystem.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group relative overflow-hidden cursor-pointer ${
                    activeFeatureIndex === index ? `ring-2 ${layerStyles.ringAccent}` : ""
                  }`}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setActiveFeatureIndex(index)}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 ${layerStyles.bgAccent}`}></div>

                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg ${layerStyles.bgLight} flex items-center justify-center mb-4 sm:mb-6 group-hover:${layerStyles.bgLightHover} transition-colors duration-300`}
                    >
                      <span className={`text-lg sm:text-xl md:text-2xl font-bold ${layerStyles.textAccent}`}>
                        {index + 1}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 break-words">{feature.title}</h3>
                      <span
                        className={`px-2.5 py-0.5 text-xs rounded-full ${layerStyles.bgLight} ${layerStyles.textAccent} w-fit`}
                      >
                        Core
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base break-words">{feature.description}</p>
                  </div>

                  {/* Animated corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-bl-full bg-gray-50 -mr-4 sm:-mr-6 -mt-4 sm:-mt-6 transition-all duration-300 group-hover:bg-gray-100"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline Section */}
      <section className="py-16 sm:py-18 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12 sm:mb-14 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${layerStyles.bgLight} inline-flex items-center justify-center mr-3 ${layerStyles.textAccent}`}
                >
                  <span className="text-sm sm:text-base">04</span>
                </span>
                <span className="break-words">Implementation Roadmap</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl break-words">
                The strategic approach to bringing {system.name} to life across global food systems.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12 relative">
                {content.implementation.map((step, index) => {
                  const isEven = index % 2 === 0
                  // All steps are now "planned"
                  const status = "planned"

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className={`flex items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""} relative`}
                    >
                      {/* Timeline node */}
                      <div className="absolute left-4 md:left-1/2 md:transform md:translate-x-[-50%] z-20 flex items-center justify-center">
                        <motion.div
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base bg-gray-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          {index + 1}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div
                        className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-8 lg:pr-16" : "md:pl-8 lg:pl-16"}`}
                      >
                        <motion.div
                          className="p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-gray-300"
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-3 gap-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 break-words">
                              {step.step}
                            </h3>
                            <span className="px-2.5 py-0.5 text-xs rounded-full w-fit bg-gray-100 text-gray-800">
                              Planned
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs sm:text-sm md:text-base break-words">
                            {step.description}
                          </p>
                        </motion.div>
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
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${layerStyles.bgLight} inline-flex items-center justify-center mr-3 ${layerStyles.textAccent}`}
                >
                  <span className="text-sm sm:text-base">05</span>
                </span>
                <span className="break-words">Current Status</span>
              </h2>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
                <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base break-words">{content.status}</p>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 break-words">Launch Readiness</span>
                      <span className={`text-sm font-medium ${layerStyles.textAccent}`}>0%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full ${layerStyles.bgAccent}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 1, delay: 0.9 }}
                      ></motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Phase</div>
                      <div className="font-medium text-sm sm:text-base break-words">Pre-Launch</div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Launch Timeline</div>
                      <div className="font-medium text-sm sm:text-base break-words">Coming Soon</div>
                    </motion.div>
                    <motion.div
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">Current Focus</div>
                      <div className="font-medium text-sm sm:text-base break-words">Framework Ready</div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Button
                      className={`${layerStyles.bgAccent} hover:${layerStyles.bgAccentHover} text-white rounded-lg px-4 sm:px-6 py-2 sm:py-2.5 shadow-sm transition-all duration-300 text-sm sm:text-base w-full sm:w-auto`}
                    >
                      <span className="break-words">Get Involved</span>
                    </Button>

                    <Link
                      href={`/${systemSlug}-lab`}
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg border border-gray-200 hover:border-orange-500/50 hover:bg-gray-50 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <Code className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${layerStyles.textAccent} flex-shrink-0`} />
                      <span className={`${layerStyles.textAccent} break-words`}>Join Developer Lab</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get layer-specific styling with green-orange theme
function getLayerStyles(layer: string) {
  const layerStyleMap: Record<string, any> = {
    SOIL: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      bgAccent: "bg-gradient-to-r from-green-600 to-orange-500",
      bgAccentHover: "from-green-700 to-orange-600",
      ringAccent: "ring-green-600/30",
      borderAccent: "border-l-green-600",
    },
    SEED: {
      bgLight: "bg-yellow-50",
      bgLightHover: "bg-yellow-100",
      textAccent: "text-orange-600",
      bgAccent: "bg-gradient-to-r from-orange-500 to-yellow-500",
      bgAccentHover: "from-orange-600 to-yellow-600",
      ringAccent: "ring-orange-600/30",
      borderAccent: "border-l-orange-600",
    },
    POLLINATION: {
      bgLight: "bg-orange-50",
      bgLightHover: "bg-orange-100",
      textAccent: "text-orange-600",
      bgAccent: "bg-gradient-to-r from-orange-500 to-yellow-500",
      bgAccentHover: "from-orange-600 to-yellow-600",
      ringAccent: "ring-orange-600/30",
      borderAccent: "border-l-orange-600",
    },
    ROOT: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      bgAccent: "bg-gradient-to-r from-green-600 to-orange-500",
      bgAccentHover: "from-green-700 to-orange-600",
      ringAccent: "ring-green-600/30",
      borderAccent: "border-l-green-600",
    },
    SPROUT: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      bgAccent: "bg-gradient-to-r from-green-600 to-orange-500",
      bgAccentHover: "from-green-700 to-orange-600",
      ringAccent: "ring-green-600/30",
      borderAccent: "border-l-green-600",
    },
    FLOW: {
      bgLight: "bg-orange-50",
      bgLightHover: "bg-orange-100",
      textAccent: "text-orange-600",
      bgAccent: "bg-gradient-to-r from-orange-500 to-yellow-500",
      bgAccentHover: "from-orange-600 to-yellow-600",
      ringAccent: "ring-orange-600/30",
      borderAccent: "border-l-orange-600",
    },
    MYCELIUM: {
      bgLight: "bg-yellow-50",
      bgLightHover: "bg-yellow-100",
      textAccent: "text-yellow-600",
      bgAccent: "bg-gradient-to-r from-yellow-500 to-orange-500",
      bgAccentHover: "from-yellow-600 to-orange-600",
      ringAccent: "ring-yellow-600/30",
      borderAccent: "border-l-yellow-600",
    },
    CROP: {
      bgLight: "bg-orange-50",
      bgLightHover: "bg-orange-100",
      textAccent: "text-orange-600",
      bgAccent: "bg-gradient-to-r from-orange-500 to-yellow-500",
      bgAccentHover: "from-orange-600 to-yellow-600",
      ringAccent: "ring-orange-600/30",
      borderAccent: "border-l-orange-600",
    },
    HARVEST: {
      bgLight: "bg-yellow-50",
      bgLightHover: "bg-yellow-100",
      textAccent: "text-yellow-600",
      bgAccent: "bg-gradient-to-r from-yellow-500 to-orange-500",
      bgAccentHover: "from-yellow-600 to-orange-600",
      ringAccent: "ring-yellow-600/30",
      borderAccent: "border-l-yellow-600",
    },
    REGENERATION: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      bgAccent: "bg-gradient-to-r from-green-600 to-orange-500",
      bgAccentHover: "from-green-700 to-orange-600",
      ringAccent: "ring-green-600/30",
      borderAccent: "border-l-green-600",
    },
    CANOPY: {
      bgLight: "bg-orange-50",
      bgLightHover: "bg-orange-100",
      textAccent: "text-orange-600",
      bgAccent: "bg-gradient-to-r from-orange-500 to-yellow-500",
      bgAccentHover: "from-orange-600 to-yellow-600",
      ringAccent: "ring-orange-600/30",
      borderAccent: "border-l-orange-600",
    },
    SANCTUARY: {
      bgLight: "bg-green-50",
      bgLightHover: "bg-green-100",
      textAccent: "text-green-600",
      bgAccent: "bg-gradient-to-r from-green-600 to-orange-500",
      bgAccentHover: "from-green-700 to-orange-600",
      ringAccent: "ring-green-600/30",
      borderAccent: "border-l-green-600",
    },
  }

  return layerStyleMap[layer] || layerStyleMap["SOIL"]
}

// Helper function to get the appropriate icon for the system layer
function getLayerIcon(layer: string) {
  switch (layer) {
    case "SOIL":
      return Leaf
    case "SEED":
      return Sprout
    case "POLLINATION":
      return Zap
    case "ROOT":
      return Network
    case "SPROUT":
      return Sprout
    case "FLOW":
      return Globe
    case "MYCELIUM":
      return Network
    case "CROP":
      return Leaf
    case "HARVEST":
      return Leaf
    case "REGENERATION":
      return Sprout
    case "CANOPY":
      return Globe
    case "SANCTUARY":
      return Leaf
    default:
      return Leaf
  }
}
