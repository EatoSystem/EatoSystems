"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, CheckCircle, ArrowRight, Rocket, Users, Code, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import JoinSection from "@/components/join-section"
import Footer from "@/components/footer"

// Define the milestone type
export type Milestone = {
  title: string
  date: string
  quarter: string
  status: "completed" | "in-progress" | "upcoming"
  description: string
}

// Define the contribution area type
export type ContributionArea = {
  title: string
  description: string
  icon: string // Name of the Lucide icon
  skills: string[]
}

// Define the props for the SystemRoadmapTemplate component
export type SystemRoadmapTemplateProps = {
  system: {
    slug: string
    name: string
    layer: string
    version: string
    description: string
    launchDate: string
    quarter: string
  }
  milestones: Milestone[]
  contributionAreas: ContributionArea[]
  heroImage: string
  layerImage: string
  nextSteps: {
    title: string
    description: string
    link: string
  }[]
}

// Helper function to get layer-specific styling
function getLayerStyles(layer: string) {
  const layerStyleMap: Record<string, any> = {
    SOIL: {
      bgLight: "bg-green-50",
      textAccent: "text-green-600",
      gradientText: "from-green-600 to-emerald-500",
      bgGradient: "bg-gradient-to-r from-green-600 to-emerald-500",
      bgGradientLight: "bg-gradient-to-r from-green-50 to-emerald-50",
      bgGradientImage: "bg-gradient-to-r from-green-500/90 to-emerald-500/90",
    },
    SEED: {
      bgLight: "bg-yellow-50",
      textAccent: "text-yellow-600",
      gradientText: "from-yellow-600 to-amber-500",
      bgGradient: "bg-gradient-to-r from-yellow-600 to-amber-500",
      bgGradientLight: "bg-gradient-to-r from-yellow-50 to-amber-50",
      bgGradientImage: "bg-gradient-to-r from-yellow-500/90 to-amber-500/90",
    },
    POLLINATION: {
      bgLight: "bg-pink-50",
      textAccent: "text-pink-600",
      gradientText: "from-pink-600 to-rose-500",
      bgGradient: "bg-gradient-to-r from-pink-600 to-rose-500",
      bgGradientLight: "bg-gradient-to-r from-pink-50 to-rose-50",
      bgGradientImage: "bg-gradient-to-r from-pink-500/90 to-rose-500/90",
    },
    ROOT: {
      bgLight: "bg-purple-50",
      textAccent: "text-purple-600",
      gradientText: "from-purple-600 to-indigo-500",
      bgGradient: "bg-gradient-to-r from-purple-600 to-indigo-500",
      bgGradientLight: "bg-gradient-to-r from-purple-50 to-indigo-50",
      bgGradientImage: "bg-gradient-to-r from-purple-500/90 to-indigo-500/90",
    },
    SPROUT: {
      bgLight: "bg-blue-50",
      textAccent: "text-blue-600",
      gradientText: "from-blue-600 to-sky-500",
      bgGradient: "bg-gradient-to-r from-blue-600 to-sky-500",
      bgGradientLight: "bg-gradient-to-r from-blue-50 to-sky-50",
      bgGradientImage: "bg-gradient-to-r from-blue-500/90 to-sky-500/90",
    },
    FLOW: {
      bgLight: "bg-teal-50",
      textAccent: "text-teal-600",
      gradientText: "from-teal-600 to-cyan-500",
      bgGradient: "bg-gradient-to-r from-teal-600 to-cyan-500",
      bgGradientLight: "bg-gradient-to-r from-teal-50 to-cyan-50",
      bgGradientImage: "bg-gradient-to-r from-teal-500/90 to-cyan-500/90",
    },
    MYCELIUM: {
      bgLight: "bg-violet-50",
      textAccent: "text-violet-600",
      gradientText: "from-violet-600 to-purple-500",
      bgGradient: "bg-gradient-to-r from-violet-600 to-purple-500",
      bgGradientLight: "bg-gradient-to-r from-violet-50 to-purple-50",
      bgGradientImage: "bg-gradient-to-r from-violet-500/90 to-purple-500/90",
    },
    CROP: {
      bgLight: "bg-amber-50",
      textAccent: "text-amber-600",
      gradientText: "from-amber-600 to-orange-500",
      bgGradient: "bg-gradient-to-r from-amber-600 to-orange-500",
      bgGradientLight: "bg-gradient-to-r from-amber-50 to-orange-50",
      bgGradientImage: "bg-gradient-to-r from-amber-500/90 to-orange-500/90",
    },
    HARVEST: {
      bgLight: "bg-orange-50",
      textAccent: "text-orange-600",
      gradientText: "from-orange-600 to-amber-500",
      bgGradient: "bg-gradient-to-r from-orange-600 to-amber-500",
      bgGradientLight: "bg-gradient-to-r from-orange-50 to-amber-50",
      bgGradientImage: "bg-gradient-to-r from-orange-500/90 to-amber-500/90",
    },
    REGENERATION: {
      bgLight: "bg-emerald-50",
      textAccent: "text-emerald-600",
      gradientText: "from-emerald-600 to-green-500",
      bgGradient: "bg-gradient-to-r from-emerald-600 to-green-500",
      bgGradientLight: "bg-gradient-to-r from-emerald-50 to-green-50",
      bgGradientImage: "bg-gradient-to-r from-emerald-500/90 to-green-500/90",
    },
    CANOPY: {
      bgLight: "bg-red-50",
      textAccent: "text-red-600",
      gradientText: "from-red-600 to-rose-500",
      bgGradient: "bg-gradient-to-r from-red-600 to-rose-500",
      bgGradientLight: "bg-gradient-to-r from-red-50 to-rose-50",
      bgGradientImage: "bg-gradient-to-r from-red-500/90 to-rose-500/90",
    },
    SANCTUARY: {
      bgLight: "bg-indigo-50",
      textAccent: "text-indigo-600",
      gradientText: "from-indigo-600 to-blue-500",
      bgGradient: "bg-gradient-to-r from-indigo-600 to-blue-500",
      bgGradientLight: "bg-gradient-to-r from-indigo-50 to-blue-50",
      bgGradientImage: "bg-gradient-to-r from-indigo-500/90 to-blue-500/90",
    },
  }

  return layerStyleMap[layer] || layerStyleMap["SOIL"]
}

// Helper function to get icon component
function getIconComponent(iconName: string) {
  const icons: Record<string, JSX.Element> = {
    Code: <Code className="w-6 h-6" />,
    Server: <Server className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
    Calendar: <Calendar className="w-6 h-6" />,
    Clock: <Clock className="w-6 h-6" />,
    // Add more icons as needed
  }

  return icons[iconName] || <Code className="w-6 h-6" />
}

export default function SystemRoadmapTemplate({
  system,
  milestones,
  contributionAreas,
  heroImage,
  layerImage,
  nextSteps,
}: SystemRoadmapTemplateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const layerStyles = getLayerStyles(system.layer)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background with image overlay */}
          <div className={`absolute inset-0 ${layerStyles.bgGradientImage}`}>
            <Image
              src={heroImage || "/placeholder.svg"}
              alt={`${system.name} Roadmap`}
              fill
              className="object-cover opacity-30"
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
                <Calendar className="w-6 h-6 mr-3 text-white" />
                <span className="text-white font-semibold text-lg">{system.quarter} Launch</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  {system.name}
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90">Development Roadmap</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
                {system.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <div className="transform hover:scale-105 active:scale-95 transition-transform">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                    onClick={() => {
                      document.getElementById("system-timeline")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View Timeline <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </div>

                <div className="transform hover:scale-105 active:scale-95 transition-transform">
                  <Link href={`/${system.slug}`}>
                    <Button
                      size="lg"
                      className={`${layerStyles.bgGradient} text-white hover:opacity-90 px-10 py-5 text-xl rounded-full`}
                    >
                      Explore {system.name}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Launch Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                    {system.launchDate.split(" ")[0]}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{system.launchDate.split(" ")[1]}</div>
                  <div className="text-sm text-white/80">Launch Date</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{system.version}</div>
                  <div className="text-lg font-semibold text-white mb-2">Version</div>
                  <div className="text-sm text-white/80">Release</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{milestones.length}</div>
                  <div className="text-lg font-semibold text-white mb-2">Milestones</div>
                  <div className="text-sm text-white/80">Development Phases</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{contributionAreas.length}</div>
                  <div className="text-lg font-semibold text-white mb-2">Areas</div>
                  <div className="text-sm text-white/80">For Contribution</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="system-timeline" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${layerStyles.gradientText}`}>
                  Development Timeline
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key milestones in the development and implementation of {system.name}.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b ${layerStyles.gradientText}`}
                ></div>

                {milestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0

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
                        className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 ${
                          milestone.status === "completed"
                            ? "border-green-500"
                            : milestone.status === "in-progress"
                              ? "border-blue-500"
                              : `border-${layerStyles.textAccent.split("-")[1]}-500`
                        } rounded-full z-10`}
                      ></div>

                      {/* Content card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                        <div
                          className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105`}
                        >
                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className={`text-2xl font-bold text-${layerStyles.textAccent.split("-")[1]}-600`}>
                                {milestone.title}
                              </h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {milestone.quarter}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-lg font-semibold text-gray-800 mb-2">{milestone.date}</div>
                              <p className="text-gray-600">{milestone.description}</p>
                            </div>

                            <div className="flex items-center">
                              {milestone.status === "completed" ? (
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              ) : milestone.status === "in-progress" ? (
                                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                              ) : (
                                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                              )}
                              <span
                                className={`text-sm ${
                                  milestone.status === "completed"
                                    ? "text-green-600"
                                    : milestone.status === "in-progress"
                                      ? "text-blue-600"
                                      : "text-gray-600"
                                } capitalize`}
                              >
                                {milestone.status.replace("-", " ")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Start Building Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className={`inline-flex items-center ${layerStyles.bgLight} rounded-full px-6 py-2 mb-6`}>
                <Code className={`w-5 h-5 mr-2 ${layerStyles.textAccent}`} />
                <span className={`font-semibold ${layerStyles.textAccent}`}>Developer Opportunities</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange">
                  Start Building
                </span>
                <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${layerStyles.gradientText}`}>
                  With {system.name}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join a global community of developers, designers, and innovators creating the future of sustainable food
                systems through {system.name}.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contributionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className={`h-2 ${layerStyles.bgGradient}`}></div>
                  <div className="p-6">
                    <div className="w-14 h-14 mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIconComponent(area.icon)}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`inline-block px-3 py-1 rounded-full text-sm ${layerStyles.bgLight} ${layerStyles.textAccent}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link
                href={`/${system.slug}-lab`}
                className={`inline-block ${layerStyles.bgGradient} text-white rounded-full px-8 py-3 font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
              >
                Explore Developer Lab
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className={`py-24 ${layerStyles.bgGradientLight}`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${layerStyles.gradientText}`}>
                  Next Steps
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Continue your journey with {system.name} through these resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
                >
                  <h3 className={`text-xl font-bold mb-3 ${layerStyles.textAccent}`}>{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Link
                    href={step.link}
                    className={`inline-flex items-center ${layerStyles.textAccent} hover:underline`}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Link
                href="/roadmap"
                className="inline-block bg-white text-gray-800 border border-gray-300 rounded-full px-8 py-3 font-medium transition-all duration-300 hover:bg-gray-50"
              >
                Back to Main Roadmap
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Join Section */}
        <JoinSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
