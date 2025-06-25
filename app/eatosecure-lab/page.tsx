"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Globe,
  Shield,
  BarChart4,
  Users,
  AlertCircle,
  Code,
  FileCode,
  Figma,
  Server,
  Github,
  ArrowRight,
  Rocket,
  Calendar,
  CheckCircle,
  Play,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Map,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoSecureLabPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % frameworkSteps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const frameworkSteps = [
    {
      title: "Define Core Objectives",
      description:
        "Establish the technical requirements, security standards, and success metrics for global food security.",
      icon: <Shield size={20} />,
      status: "planning",
    },
    {
      title: "Open Data & Research Integration",
      description:
        "Integrate climate, agricultural, economic, and social data to create comprehensive early warning systems.",
      icon: <BarChart4 size={20} />,
      status: "planning",
    },
    {
      title: "Design & Build in Public",
      description:
        "Develop early warning systems, community food reserves, and resilience planning tools with diverse input.",
      icon: <Code size={20} />,
      status: "upcoming",
    },
    {
      title: "Pilot & Feedback Loop",
      description:
        "Test security systems with vulnerable communities, gather feedback, and refine based on real-world performance.",
      icon: <Users size={20} />,
      status: "upcoming",
    },
    {
      title: "Scale & Global Deployment",
      description:
        "Expand the system to create a global safety net that ensures food security for all people worldwide.",
      icon: <Globe size={20} />,
      status: "upcoming",
    },
  ]

  const contributionGroups = [
    {
      name: "Security Architects",
      description:
        "Design robust, multi-layered security systems that ensure food access during disruptions and crises.",
      icon: <Shield size={24} />,
      link: "/contribute/security-research",
      color: "from-red-500 to-rose-600",
    },
    {
      name: "v0.dev Builders",
      description:
        "Design and build interfaces for early warning systems, food reserve management, and resilience planning.",
      icon: <Code size={24} />,
      link: "/contribute/v0",
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Climate Scientists",
      description:
        "Develop predictive models that anticipate climate-related disruptions to food systems and enable proactive intervention.",
      icon: <AlertCircle size={24} />,
      link: "/contribute/experts",
      color: "from-pink-500 to-fuchsia-600",
    },
    {
      name: "GitHub Contributors",
      description:
        "Contribute to early warning algorithms, reserve management systems, and resilience planning tools through open source collaboration.",
      icon: <Github size={24} />,
      link: "/contribute/github",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      name: "Vercel Deployers",
      description: "Deploy and scale the security platforms with global reach and critical infrastructure reliability.",
      icon: <Server size={24} />,
      link: "/contribute/vercel",
      color: "from-purple-500 to-violet-600",
    },
    {
      name: "UX Designers",
      description: "Create intuitive interfaces that make complex security systems accessible to diverse stakeholders.",
      icon: <Figma size={24} />,
      link: "/contribute/designers",
      color: "from-violet-500 to-indigo-600",
    },
  ]

  const devResources = [
    {
      title: "Security Framework SDK",
      description:
        "Complete development toolkit for creating and deploying food security systems with pre-built security components.",
      icon: <Shield size={24} />,
      link: "#",
      buttonText: "Get SDK",
      category: "development",
    },
    {
      title: "GitHub Repository",
      description: "Access the core codebase for early warning systems, reserve management, and resilience planning.",
      icon: <Github size={24} />,
      link: "#",
      buttonText: "View Repository",
      category: "development",
    },
    {
      title: "API Documentation",
      description:
        "Comprehensive guides on security frameworks, early warning systems, and integration with other EatoSystems.",
      icon: <FileCode size={24} />,
      link: "#",
      buttonText: "Read Docs",
      category: "development",
    },
    {
      title: "Early Warning System",
      description: "Access the predictive platform for identifying potential food shortages before they occur.",
      icon: <AlertCircle size={24} />,
      link: "#",
      buttonText: "Explore System",
      category: "development",
    },
    {
      title: "Security UI Kit",
      description:
        "UI components and design patterns specifically designed for food security and resilience interfaces.",
      icon: <Figma size={24} />,
      link: "#",
      buttonText: "Download Kit",
      category: "design",
    },
    {
      title: "Vulnerability Mapping",
      description: "Geographic information systems for identifying regions and populations at risk of food insecurity.",
      icon: <Map size={24} />,
      link: "#",
      buttonText: "View Maps",
      category: "development",
    },
  ]

  const labStats = [
    {
      number: "Alpha",
      label: "Development Stage",
      description: "Early research & prototyping",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "Q4 2026",
      label: "Target Launch",
      description: "Global security deployment",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "5",
      label: "Framework Steps",
      description: "Systematic development approach",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "67+",
      label: "Countries",
      description: "Global security network",
      icon: <Globe className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600">
            <Image
              src="/images/systems/eatosecure-canopy.png"
              alt="EatoSecure Laboratory"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
                <Shield className="w-6 h-6 mr-3 text-red-200" />
                <span className="text-white font-semibold text-lg">EatoSecure Research Laboratory</span>
                <Badge className="ml-3 bg-orange-500 text-white border-0">Alpha</Badge>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-rose-200 to-pink-300">
                  EatoSecure
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">Laboratory</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
                Building global food security and resilience systems. Join our research community developing security
                frameworks that ensure no one goes hungry.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  Join Research Lab <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Link href="/eatosecure">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-10 py-5 text-xl rounded-full"
                  >
                    View System Details
                  </Button>
                </Link>
              </div>

              {/* Lab Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {labStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                    <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                    <div className="text-sm text-white/80">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Framework Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="gradient-text from-red-600 to-rose-500">Research Framework</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our systematic approach to developing global food security systems
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Progress indicator */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">Research Progress</span>
                  <span className="text-sm font-medium text-gray-600">
                    Step {activeStep + 1} of {frameworkSteps.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / frameworkSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Framework Steps */}
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-rose-500 to-pink-500"></div>

                {frameworkSteps.map((step, index) => {
                  const isLeft = index % 2 === 0
                  const isActive = index === activeStep
                  const isCompleted = index < activeStep

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                          isCompleted ? "bg-green-500" : isActive ? "bg-red-500" : "bg-gray-300"
                        }`}
                      ></div>

                      {/* Content card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                        <Card
                          className={`transition-all duration-300 ${
                            isActive ? "shadow-xl border-red-200 scale-105" : "shadow-lg hover:shadow-xl"
                          }`}
                        >
                          <CardContent className="p-8">
                            <div className="flex items-center mb-4">
                              <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                                  isCompleted ? "bg-green-500" : isActive ? "bg-red-500" : "bg-gray-400"
                                } text-white`}
                              >
                                {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.icon}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                                <Badge
                                  variant="outline"
                                  className={`mt-1 ${
                                    isCompleted
                                      ? "border-green-500 text-green-600"
                                      : isActive
                                        ? "border-red-500 text-red-600"
                                        : "border-gray-400 text-gray-600"
                                  }`}
                                >
                                  {isCompleted ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            {isActive && (
                              <div className="mt-4 flex gap-2">
                                <Button size="sm" className="bg-red-500 hover:bg-red-600">
                                  <Play className="w-4 h-4 mr-2" />
                                  Get Involved
                                </Button>
                                <Button size="sm" variant="outline">
                                  Learn More
                                </Button>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Groups Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="gradient-text from-red-600 to-rose-500">Join Our Research Community</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Collaborate with security experts, developers, and climate scientists from around the world
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {contributionGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${group.color}`}></div>
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-gray-600">{group.icon}</div>
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-800">{group.name}</h4>
                      <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                      <Link
                        href={group.link}
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                      >
                        Join Research Group
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="gradient-text from-red-600 to-rose-500">Development Resources</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to start building and contributing to EatoSecure
              </p>
            </motion.div>

            <Tabs defaultValue="development" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
                <TabsTrigger value="development" className="flex items-center gap-2 text-lg py-3">
                  <Code className="w-5 h-5" />
                  Development Tools
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2 text-lg py-3">
                  <Figma className="w-5 h-5" />
                  Design Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="development">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {devResources
                    .filter((r) => r.category === "development")
                    .map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                          <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-red-600">{resource.icon}</div>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-800">{resource.title}</h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                            <Link
                              href={resource.link}
                              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
                            >
                              {resource.buttonText}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {devResources
                    .filter((r) => r.category === "design")
                    .map((resource, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                          <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                              <div className="text-orange-600">{resource.icon}</div>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-gray-800">{resource.title}</h4>
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
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-gradient-to-r from-red-600 to-rose-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 mr-2 text-red-200" />
                <span className="text-white font-semibold">Ready to Secure Food for All?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the EatoSecure Research Lab</h2>

              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Be part of the global community building security systems that ensure no one goes hungry. Your expertise
                can help create resilient food networks that protect vulnerable populations.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  Start Contributing Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Link href="/roadmap/eatosecure">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-10 py-5 text-xl rounded-full"
                  >
                    View Development Roadmap
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
