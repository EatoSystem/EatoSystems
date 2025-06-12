"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ExternalLink,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Beaker,
  Zap,
  Layers,
  Code,
  Palette,
  Smartphone,
  Figma,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

interface SystemLabProps {
  systemName?: string
  systemPurpose?: string
  systemDescription?: string
  systemSlug?: string
  accentColor?: string
  secondaryColor?: string
  frameworkSteps?: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
  contributionGroups?: Array<{
    name: string
    description: string
    icon: React.ReactNode
    link: string
  }>
  devResources?: Array<{
    title: string
    description: string
    icon: React.ReactNode
    link: string
    buttonText: string
  }>
  designResources?: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
  systemMaturity?: "Alpha" | "Beta" | "Pilot"
  collaborationStats?: {
    countries: number
    contributors: number
    projects: number
  }
  collaborationImage?: string
  children?: React.ReactNode
}

export default function SystemLabTemplate({
  systemName = "System",
  systemPurpose = "Purpose",
  systemDescription = "Description",
  systemSlug = "system",
  frameworkSteps = [],
  contributionGroups = [],
  devResources = [],
  designResources = [],
  systemMaturity = "Alpha",
  collaborationStats = {
    countries: 42,
    contributors: 387,
    projects: 56,
  },
  collaborationImage = "/collaborative-agri-coding.png",
  children,
}: SystemLabProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState<"development" | "design">("development")
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

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (frameworkSteps.length > 0) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % frameworkSteps.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [frameworkSteps.length])

  const getMaturityColor = () => {
    return systemMaturity === "Alpha" ? "#f97316" : systemMaturity === "Beta" ? "#3b82f6" : "#10b981"
  }

  const getMaturityPercentage = () => {
    return systemMaturity === "Alpha" ? "35%" : systemMaturity === "Beta" ? "65%" : "85%"
  }

  const getSystemImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      eatocultures: "soil",
      eatoagent: "seed",
      eatoindex: "pollination",
      eatoverse: "root",
      eatobotics: "sprout",
      eatoai: "mycelium",
      eatofund: "crop",
      eatosystem: "harvest",
      eatogov: "regeneration",
      eatotransit: "flow",
      eatofoundation: "sanctuary",
      eatosecure: "canopy",
    }
    return imageMap[slug] || "soil"
  }

  // Default design resources if none provided
  const defaultDesignResources = [
    {
      title: "Design System",
      description: "Access our comprehensive design system with components, patterns, and guidelines.",
      icon: <Palette className="w-6 h-6" />,
      link: "/design-system",
      buttonText: "View Design System",
    },
    {
      title: "Figma Templates",
      description: "Ready-to-use Figma templates and UI kits for rapid prototyping.",
      icon: <Figma className="w-6 h-6" />,
      link: "/figma-templates",
      buttonText: "Get Templates",
    },
    {
      title: "Mobile Designs",
      description: "Mobile-first design patterns and responsive layouts for agricultural apps.",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/mobile-designs",
      buttonText: "View Designs",
    },
  ]

  const finalDesignResources = designResources.length > 0 ? designResources : defaultDesignResources

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Same style as systems pages */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with same gradient as systems pages */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
          <Image
            src={`/images/systems/${systemSlug.replace("-lab", "")}-${getSystemImage(systemSlug.replace("-lab", ""))}.png`}
            alt={`${systemName} Background`}
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              const cleanSlug = systemSlug.replace("-lab", "")
              target.src = `/images/systems/${cleanSlug}-${getSystemImage(cleanSlug)}.png`
            }}
          />
        </div>

        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Lab Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
              <Beaker className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide break-words">
                Innovation Lab
              </span>
              <span
                className="ml-2 sm:ml-3 px-2 py-1 text-xs rounded-full text-white"
                style={{ backgroundColor: getMaturityColor() }}
              >
                {systemMaturity}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
                  Eato{systemName}
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light break-words">
                Advanced Research Laboratory
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
              Co-developing the future of {systemPurpose}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto">
                  <span className="break-words">Join the Lab</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                </Button>
              </div>
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("lab-content")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="break-words">Explore Framework</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Content */}
      <section id="lab-content" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 break-words">
                    {collaborationStats.countries}+
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Countries</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 break-words">
                    {collaborationStats.contributors}+
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Contributors</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 break-words">
                    {collaborationStats.projects}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Projects</div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-bold break-words" style={{ color: getMaturityColor() }}>
                    {systemMaturity}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">Stage</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: getMaturityPercentage(),
                      backgroundColor: getMaturityColor(),
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 break-words">
                About the Laboratory
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 break-words max-w-4xl mx-auto">
                {systemDescription}
              </p>
              <p className="text-base sm:text-lg text-gray-600 break-words max-w-4xl mx-auto">
                We're opening the development of Eato{systemName} to global communities of developers, researchers,
                designers, and domain experts.
              </p>
            </div>

            {/* Development & Design Tabs */}
            <div className="mb-12 sm:mb-16">
              <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-8 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
                <button
                  onClick={() => setActiveTab("development")}
                  className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base break-words ${
                    activeTab === "development"
                      ? "bg-white text-green-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  Development
                </button>
                <button
                  onClick={() => setActiveTab("design")}
                  className={`flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base break-words ${
                    activeTab === "design" ? "bg-white text-orange-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  Design
                </button>
              </div>

              {/* Development Resources */}
              {activeTab === "development" && devResources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 break-words">
                    Development Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {devResources.map((resource, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                          {resource.icon}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{resource.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">
                          {resource.description}
                        </p>
                        <Link
                          href={resource.link}
                          className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base break-words"
                        >
                          <span className="break-words">{resource.buttonText}</span>
                          <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Design Resources */}
              {activeTab === "design" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 break-words">
                    Design Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {finalDesignResources.map((resource, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-3 sm:mb-4">
                          {resource.icon}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{resource.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">
                          {resource.description}
                        </p>
                        <Link
                          href={resource.link}
                          className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base break-words"
                        >
                          <span className="break-words">{resource.buttonText}</span>
                          <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Framework Steps */}
            {frameworkSteps.length > 0 && (
              <div className="mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 break-words">
                  Development Framework
                </h2>
                <div className="bg-white rounded-xl shadow-lg border p-4 sm:p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-3 sm:space-y-4">
                      {frameworkSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`p-3 sm:p-4 rounded-lg cursor-pointer transition-all ${
                            activeStep === index ? "bg-green-50 border-l-4 border-green-600" : "bg-gray-50"
                          }`}
                          onClick={() => setActiveStep(index)}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base ${
                                activeStep === index ? "bg-green-600 text-white" : "bg-gray-300"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <h3 className="font-bold text-sm sm:text-base break-words">{step.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-l pl-4 sm:pl-8">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center mr-3 sm:mr-4">
                          {frameworkSteps[activeStep]?.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold break-words">
                          {frameworkSteps[activeStep]?.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 break-words">
                        {frameworkSteps[activeStep]?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contribution Groups */}
            {contributionGroups.length > 0 && (
              <div className="mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 break-words">
                  Contribution Opportunities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {contributionGroups.map((group, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 sm:p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                        {group.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">{group.name}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 break-words">{group.description}</p>
                      <Link
                        href={group.link}
                        className="text-green-600 font-medium flex items-center text-sm sm:text-base break-words"
                      >
                        <span className="break-words">Contribute</span>
                        <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-green-600 to-orange-500 text-white p-8 sm:p-10 md:p-12 rounded-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 break-words">
                Join Our Research Initiative
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 break-words">
                Join our global community building the future of {systemPurpose}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-full">
                  <span className="break-words">Start Building</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full"
                >
                  <span className="break-words">Join Research Team</span>
                </Button>
              </div>
            </div>

            {children && <div className="mt-12 sm:mt-16">{children}</div>}
          </div>
        </div>
      </section>
    </div>
  )
}
