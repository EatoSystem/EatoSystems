"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Beaker,
  Code,
  Palette,
  Network,
  Award,
  BookOpen,
  TrendingUp,
  Play,
  ChevronDown,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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
    link: string
    buttonText: string
  }>
  systemMaturity?: "Alpha" | "Beta" | "Pilot"
  collaborationStats?: {
    countries: number
    contributors: number
    projects: number
  }
  collaborationImage?: string
  globalExperts?: Array<{
    name: string
    title: string
    organization: string
    image: string
    contribution: string
  }>
  researchInitiatives?: Array<{
    title: string
    description: string
    lead: string
    participants: number
    status: "Active" | "Planning" | "Completed"
  }>
  localImplementations?: Array<{
    location: string
    project: string
    impact: string
    participants: number
  }>
  children?: React.ReactNode
}

export default function SystemLabTemplate({
  systemName = "System",
  systemPurpose = "Purpose",
  systemDescription = "Description",
  systemSlug = "system",
  accentColor = "#16A34A",
  secondaryColor = "#22C55E",
  frameworkSteps = [],
  contributionGroups = [],
  devResources = [],
  designResources = [],
  systemMaturity = "Alpha",
  collaborationStats = {
    countries: 0,
    contributors: 0,
    projects: 0,
  },
  collaborationImage = "/collaborative-agri-coding.png",
  globalExperts = [],
  researchInitiatives = [],
  localImplementations = [],
  children,
}: SystemLabProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: true })

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

  const getSystemImage = (slug: string) => {
    const imageMap: { [key: string]: string } = {
      eatocultures: "soil",
      eatoglobal: "soil",
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

  // Default data for missing props
  const defaultResearchInitiatives = [
    {
      title: "Global Food System Modeling",
      description: "Planning comprehensive models of global food systems using AI and machine learning",
      lead: "Dr. Sarah Chen, MIT",
      participants: 0,
      status: "Planning" as const,
    },
    {
      title: "Regenerative Agriculture Protocols",
      description: "Developing standardized protocols for regenerative farming practices worldwide",
      lead: "Prof. James Rodriguez, Stanford",
      participants: 0,
      status: "Planning" as const,
    },
    {
      title: "Community Food Security Networks",
      description: "Building resilient local food networks in vulnerable communities",
      lead: "Dr. Amara Okafor, UN WFP",
      participants: 0,
      status: "Planning" as const,
    },
  ]

  const finalResearchInitiatives = researchInitiatives.length > 0 ? researchInitiatives : defaultResearchInitiatives

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${secondaryColor})` }}
        >
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
              target.src = "/images/global-network-earth.png"
            }}
          />
        </div>

        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
              <Beaker className="w-6 h-6 mr-3" />
              <span className="text-white font-semibold text-lg uppercase tracking-wide">
                Launching Global Innovation Laboratory
              </span>
              <Badge className="ml-3 text-white border-white/30" style={{ backgroundColor: getMaturityColor() }}>
                {systemMaturity}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-3">
                <Sparkles className="w-8 h-8 text-orange-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                  Eato{systemName}
                </span>
              </div>
              <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl text-white/90 font-light">
                Research & Development Lab
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              {systemDescription} Launching Soon - Now Recruiting Founding Members
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full">
                Become a Founding Member
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-10 py-5 text-xl rounded-full"
              >
                Learn About the Vision
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{collaborationStats.countries}</div>
                <div className="text-white/80">Countries Interested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{collaborationStats.contributors}</div>
                <div className="text-white/80">Researchers Committed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{collaborationStats.projects}</div>
                <div className="text-white/80">Planned Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{finalResearchInitiatives.length}</div>
                <div className="text-white/80">Launch Initiatives</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Streamlined */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-green-800 font-semibold">Welcome to the Future of {systemPurpose}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Join the Global Innovation Network
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The Eato{systemName} Laboratory is where breakthrough ideas become reality. We're building the future of{" "}
                {systemPurpose} through collaborative research, open innovation, and community-driven development.
              </p>
            </motion.div>

            {/* Impact Stats Dashboard */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Impact Scale
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold mb-2">{isStatsInView ? collaborationStats.countries : 0}</div>
                  <p className="text-green-100">Countries ready to participate in research initiatives</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Network className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Global Network
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold mb-2">{isStatsInView ? collaborationStats.contributors : 0}</div>
                  <p className="text-blue-100">Researchers, developers, and domain experts ready to collaborate</p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 text-white border-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Planned Projects
                    </Badge>
                  </div>
                  <div className="text-4xl font-bold mb-2">{isStatsInView ? collaborationStats.projects : 0}</div>
                  <p className="text-orange-100">Research projects and implementations planned for launch</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Research Framework - Mobile-First Redesign */}
            {frameworkSteps && frameworkSteps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6">
                    <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                    <span className="text-orange-800 font-semibold">Research Methodology</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                    Our Research Framework
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A systematic approach to developing breakthrough solutions for {systemPurpose}
                  </p>
                </div>

                {/* Mobile-First Accordion Design */}
                <div className="max-w-4xl mx-auto">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Framework Progress</span>
                      <span className="text-sm font-medium text-gray-600">
                        {Math.round(((activeStep + 1) / frameworkSteps.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          backgroundColor: accentColor,
                          width: `${((activeStep + 1) / frameworkSteps.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Step Navigation Dots */}
                  <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                      {frameworkSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeStep
                              ? "scale-125 shadow-lg"
                              : index <= activeStep
                                ? "bg-gray-400"
                                : "bg-gray-200"
                          }`}
                          style={{
                            backgroundColor: index === activeStep ? accentColor : undefined,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Framework Steps */}
                  <div className="space-y-4">
                    {frameworkSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                          index === activeStep
                            ? "bg-white shadow-2xl border-2 scale-[1.02]"
                            : index < activeStep
                              ? "bg-green-50 border border-green-200"
                              : "bg-gray-50 border border-gray-200"
                        }`}
                        style={{
                          borderColor: index === activeStep ? accentColor : undefined,
                        }}
                      >
                        {/* Step Header */}
                        <div
                          className="p-6 cursor-pointer"
                          onClick={() => {
                            setActiveStep(index)
                            setExpandedStep(expandedStep === index ? null : index)
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              {/* Step Icon */}
                              <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold transition-all duration-300 ${
                                  index === activeStep
                                    ? "shadow-lg scale-110"
                                    : index < activeStep
                                      ? "bg-green-500"
                                      : "bg-gray-400"
                                }`}
                                style={{
                                  backgroundColor: index === activeStep ? accentColor : undefined,
                                }}
                              >
                                {index < activeStep ? (
                                  <CheckCircle className="w-6 h-6" />
                                ) : (
                                  <span className="text-sm">{index + 1}</span>
                                )}
                              </div>

                              {/* Step Content */}
                              <div className="flex-1">
                                <h4 className="text-lg md:text-xl font-bold mb-1">{step.title}</h4>
                                <p className="text-sm text-gray-600">
                                  {index === activeStep
                                    ? "Currently active"
                                    : index < activeStep
                                      ? "Completed"
                                      : "Upcoming"}
                                </p>
                              </div>
                            </div>

                            {/* Expand Icon */}
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                expandedStep === index || index === activeStep ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>

                        {/* Step Details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedStep === index || index === activeStep ? "auto" : 0,
                            opacity: expandedStep === index || index === activeStep ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pl-16">
                              <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white"
                                style={{ backgroundColor: `${accentColor}20` }}
                              >
                                <div style={{ color: accentColor }}>{step.icon}</div>
                              </div>
                              <p className="text-gray-600 text-base leading-relaxed mb-6">{step.description}</p>
                              <div className="flex flex-col sm:flex-row gap-3">
                                <Button size="sm" style={{ backgroundColor: accentColor }} className="text-white">
                                  <Play className="w-4 h-4 mr-2" />
                                  Get Started
                                </Button>
                                <Button variant="outline" size="sm">
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  Learn More
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Connection Line */}
                        {index < frameworkSteps.length - 1 && (
                          <div className="absolute left-12 bottom-0 w-0.5 h-4 bg-gray-300 transform translate-y-full"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Framework Summary */}
                  <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-4">Ready to Start Your Research Journey?</h4>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our framework guides you through each phase of research and development, ensuring systematic
                        progress toward breakthrough solutions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" style={{ backgroundColor: accentColor }} className="text-white">
                          <Play className="w-5 h-5 mr-2" />
                          Begin Framework
                        </Button>
                        <Button variant="outline" size="lg">
                          <BookOpen className="w-5 h-5 mr-2" />
                          Download Guide
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Ways to Contribute */}
            {contributionGroups && contributionGroups.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Ways to Contribute</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Join our diverse community of innovators, researchers, and changemakers
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {contributionGroups.map((group, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                        <CardContent className="p-8">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${accentColor}20` }}
                          >
                            <div style={{ color: accentColor }}>{group.icon}</div>
                          </div>
                          <h4 className="text-xl font-bold mb-3">{group.name}</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                          <Link
                            href={group.link}
                            className="inline-flex items-center font-semibold hover:underline"
                            style={{ color: accentColor }}
                          >
                            Become Founding Member
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Development Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Development Resources</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Everything you need to start building and contributing to Eato{systemName}
                </p>
              </div>

              <Tabs defaultValue="development" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-2 rounded-xl">
                  <TabsTrigger value="development" className="flex items-center gap-2 text-lg py-3">
                    <Code className="w-5 h-5" />
                    Development Tools
                  </TabsTrigger>
                  <TabsTrigger value="design" className="flex items-center gap-2 text-lg py-3">
                    <Palette className="w-5 h-5" />
                    Design Resources
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="development">
                  {devResources && devResources.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {devResources.map((resource, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8">
                              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-blue-600">{resource.icon}</div>
                              </div>
                              <h4 className="text-xl font-bold mb-3">{resource.title}</h4>
                              <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                              <Link
                                href={resource.link}
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                              >
                                {resource.buttonText}
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="design">
                  {designResources && designResources.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {designResources.map((resource, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8">
                              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-orange-600">{resource.icon}</div>
                              </div>
                              <h4 className="text-xl font-bold mb-3">{resource.title}</h4>
                              <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                              <Link
                                href={resource.link}
                                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-semibold"
                              >
                                {resource.buttonText}
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>

            {children && <div className="mt-16">{children}</div>}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
