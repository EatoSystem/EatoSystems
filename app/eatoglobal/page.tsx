"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Globe,
  Users,
  ArrowRight,
  Code,
  Calendar,
  CheckCircle,
  Clock,
  BookOpen,
  Sparkles,
  Network,
  Heart,
  Zap,
  Lightbulb,
  TreePine,
  Sprout,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoGlobalPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "roadmap">("overview")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Global Knowledge Network",
      description:
        "A worldwide platform where diverse voices contribute real-world knowledge, traditions, and practices, building the collective intelligence that powers all EatoSystems.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      details:
        "Connect with food communities across 195+ countries, sharing traditional knowledge and innovative practices that strengthen global food security.",
    },
    {
      title: "Living Collaboration Hub",
      description:
        "A continuously expanding space for global contributors to co-create, share stories, and build sustainable food solutions together.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      details:
        "Real-time collaboration tools enable communities to work together on food system challenges, from local gardens to national policy.",
    },
    {
      title: "System Intelligence Foundation",
      description:
        "All contributions feed the learning and evolution of EatoAI and EatoSystems, supporting more intelligent, human-informed food system solutions.",
      icon: <Network className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      details:
        "Every story, practice, and innovation shared becomes part of the collective intelligence that guides sustainable food transformation.",
    },
    {
      title: "Cultural Preservation & Innovation",
      description:
        "Programs that honor traditional food knowledge while fostering innovation, ensuring wisdom is preserved and evolved for future generations.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600",
      details:
        "Bridge ancient wisdom with modern technology, preserving cultural food heritage while enabling sustainable innovation.",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Global Foundation Launch",
      date: "Q3 2025",
      quarter: "September 2025",
      status: "upcoming" as const,
      description:
        "Launch the foundational platform with community hubs in 25 countries, enabling knowledge sharing and cultural exchange across diverse food systems.",
      deliverables: ["Community Platform", "Knowledge Repository", "Cultural Exchange Tools"],
    },
    {
      title: "Network Expansion & Integration",
      date: "Q4 2025",
      quarter: "December 2025",
      status: "upcoming" as const,
      description:
        "Expand to 50+ countries with integrated storytelling tools, local language support, and community-driven governance structures.",
      deliverables: ["Multi-language Support", "Governance Framework", "Storytelling Platform"],
    },
    {
      title: "AI Integration & Intelligence Layer",
      date: "Q1 2026",
      quarter: "March 2026",
      status: "upcoming" as const,
      description:
        "Integrate with EatoAI to create intelligent knowledge synthesis, enabling communities to access relevant insights and best practices.",
      deliverables: ["AI Knowledge Synthesis", "Smart Recommendations", "Pattern Recognition"],
    },
    {
      title: "Global Impact & Scaling",
      date: "Q2 2026",
      quarter: "June 2026",
      status: "upcoming" as const,
      description:
        "Achieve global scale with 100+ countries, established impact metrics, and integration with all EatoSystems components.",
      deliverables: ["Global Coverage", "Impact Metrics", "System Integration"],
    },
  ]

  const contributionAreas = [
    {
      title: "Community Building",
      description: "Help establish and grow local EatoGlobal communities worldwide",
      icon: <Users className="w-6 h-6" />,
      skills: ["Community Management", "Cultural Sensitivity", "Event Organization"],
    },
    {
      title: "Knowledge Curation",
      description: "Collect, organize, and preserve traditional and innovative food knowledge",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Research", "Documentation", "Cultural Anthropology"],
    },
    {
      title: "Platform Development",
      description: "Build and maintain the technical infrastructure for global collaboration",
      icon: <Code className="w-6 h-6" />,
      skills: ["Full-Stack Development", "API Design", "Database Management"],
    },
    {
      title: "Storytelling & Content",
      description: "Create compelling narratives that connect communities and inspire action",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["Content Creation", "Video Production", "Narrative Design"],
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600">
          <Image
            src="/images/systems/eatoglobal-soil.png"
            alt="EatoGlobal Global Network"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* System Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
              <TreePine className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-green-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                SOIL Layer • Foundation System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-emerald-200 to-blue-300">
                  EatoGlobal
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                The Foundation Layer
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where
              anyone can contribute, co-create, and help build the future of food.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Features <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </Button>
              </div>

              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Link href="/eatoglobal-lab">
                  <Button
                    size="lg"
                    className="bg-green-600 text-white border-green-600 hover:bg-green-700 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl rounded-full w-full sm:w-auto"
                  >
                    <Code className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    Developer Lab
                  </Button>
                </Link>
              </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q3</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch Date</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Countries</div>
                <div className="text-sm sm:text-base text-white/80">Global Reach</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Communities</div>
                <div className="text-sm sm:text-base text-white/80">Target Reach</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">SOIL</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Layer</div>
                <div className="text-sm sm:text-base text-white/80">Foundation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1 max-w-md">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "overview" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "features" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "roadmap" ? "bg-white text-green-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {activeTab === "overview" && (
        <section id="overview-section" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                    The Foundation of Global Food Transformation
                  </span>
                </h2>

                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed">
                    EatoGlobal is the knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide
                    movement where anyone can contribute, co-create, and help build the future of food.
                  </p>

                  <p>
                    It is the <strong>SOIL</strong> of EatoSystems — where every system begins with a story, a skill, or
                    a spark of intention. EatoGlobal brings together human knowledge, collecting and preserving the food
                    stories, practices, and traditions that define our relationship with food across cultures and
                    generations.
                  </p>

                  <p>
                    It empowers <strong>open collaboration</strong> — enabling contributors from around the world to
                    co-create sustainable food solutions through storytelling, design, technology, and innovation. And
                    it drives <strong>global action</strong> — uniting diverse voices to shape national EatoTeams,
                    contribute to open-source development, and support the growth of intelligent, inclusive food
                    systems.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                    <p className="text-green-800 font-medium mb-2">Your Role in the Global Movement</p>
                    <p className="text-green-700">
                      Whether you're a farmer, developer, designer, chef, storyteller, student, or someone passionate
                      about the future of food — EatoGlobal is your place to participate. Your knowledge, your culture,
                      your skills, your story — they all feed the system.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Core Principles</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Global Inclusivity</h4>
                      <p className="text-gray-600">
                        Every voice matters. We create spaces where diverse perspectives from all cultures and
                        communities can contribute to food system solutions.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Cultural Preservation</h4>
                      <p className="text-gray-600">
                        We honor traditional knowledge while fostering innovation, ensuring wisdom is preserved and
                        evolved for future generations.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Network className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Collective Intelligence</h4>
                      <p className="text-gray-600">
                        Individual contributions combine to create system-wide intelligence that guides sustainable food
                        transformation.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Action-Oriented</h4>
                      <p className="text-gray-600">
                        We don't just collect knowledge — we transform it into actionable solutions that create
                        real-world impact.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {activeTab === "features" && (
        <section id="features-section" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Core Capabilities
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                EatoGlobal provides the foundational infrastructure for global food system transformation through
                community-driven initiatives and regenerative practices.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Feature List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-white border-2 border-green-200 shadow-lg"
                          : "bg-white/50 hover:bg-white border border-gray-100"
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4 flex-shrink-0`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <p className="text-gray-700 text-sm">{feature.details}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Feature Visualization */}
                <div className="relative">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20`}
                    ></div>
                    <Image
                      src="/images/systems/eatoglobal-soil.png"
                      alt={features[activeFeature].title}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                          {features[activeFeature].icon}
                        </div>
                        <h4 className="text-white text-xl font-bold">{features[activeFeature].title}</h4>
                      </div>
                      <p className="text-white/90 text-sm">{features[activeFeature].details}</p>
                    </div>
                  </motion.div>

                  {/* Feature Indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeFeature === index ? "bg-green-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap Section */}
      {activeTab === "roadmap" && (
        <section id="roadmap-section" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Development Roadmap
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key milestones in the development and global deployment of EatoGlobal as the foundation layer of the
                EatoSystems ecosystem.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500 transform md:-translate-x-px"></div>

                {roadmapMilestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-start mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-green-500 rounded-full z-10"></div>

                      {/* Content card */}
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-l-green-500">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-green-600">{milestone.title}</h3>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {milestone.date}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="text-lg font-semibold text-gray-800 mb-2">{milestone.quarter}</div>
                              <p className="text-gray-600 mb-4">{milestone.description}</p>

                              <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-gray-700">Key Deliverables:</h4>
                                <ul className="space-y-1">
                                  {milestone.deliverables.map((deliverable, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-orange-500 mr-2" />
                              <span className="text-sm text-orange-600 capitalize">{milestone.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/roadmap/eatoglobal">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Detailed Roadmap
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lab & Development Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  Join the Development
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Contribute to the future of global food systems through collaborative development, community building,
                and knowledge sharing.
              </p>
            </motion.div>

            {/* Contribution Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contributionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 mb-4 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-green-600">{area.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 rounded-full text-xs bg-green-50 text-green-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Lab Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">EatoGlobal Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access development resources, APIs, and collaborative tools to build applications on the EatoGlobal
                  platform. Join our global community of developers creating sustainable food solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Open Source Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Global API Access
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Community Support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Knowledge Repository
                  </div>
                </div>
                <Link href="/eatoglobal-lab">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Code className="mr-2 h-5 w-5" />
                    Enter Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Documentation Hub</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive guides, tutorials, and documentation to help you understand and implement EatoGlobal
                  solutions in your community or organization.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Implementation Guides
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Best Practices
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Case Studies
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                    Community Stories
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Summary Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                  EatoGlobal Roadmap
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Follow our journey as we build the foundation layer of the global food system transformation, from
                initial launch to worldwide impact.
              </p>
            </motion.div>

            {/* Roadmap Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {roadmapMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {milestone.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{milestone.description}</p>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-orange-600 capitalize">{milestone.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Roadmap CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Explore the Complete Roadmap</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get detailed insights into our development timeline, key milestones, technical specifications, and how
                you can contribute to each phase of EatoGlobal's evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roadmap/eatoglobal">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calendar className="mr-2 h-5 w-5" />
                    View Full Roadmap
                  </Button>
                </Link>
                <Link href="/roadmap">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8 py-3 font-medium"
                  >
                    All System Roadmaps
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Global Food Systems?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoGlobal community and help build the foundation for sustainable food systems worldwide. Your
              knowledge, culture, and skills can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Contributing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/eatosystems">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
                >
                  Explore All Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
