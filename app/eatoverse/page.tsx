"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  HeadsetIcon as VrHeadset,
  ArrowRight,
  Code,
  Calendar,
  BookOpen,
  Users,
  Monitor,
  Globe,
  Sprout,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"

export default function EatoVersePage() {
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
      title: "Immersive Virtual Environments",
      description:
        "Photorealistic virtual farms and agricultural landscapes with accurate physics, weather patterns, and seasonal changes for authentic learning experiences.",
      icon: <VrHeadset className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      details:
        "Advanced VR technology creates lifelike agricultural environments where users can experience farming without real-world constraints.",
    },
    {
      title: "Collaborative Research Spaces",
      description:
        "Multi-user virtual laboratories where global teams can conduct agricultural research, share findings, and collaborate on innovative solutions.",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      details:
        "Virtual collaboration tools enable researchers worldwide to work together in shared agricultural research environments.",
    },
    {
      title: "Educational Simulations",
      description:
        "Interactive training programs and educational modules that allow students and professionals to learn agricultural techniques in risk-free virtual environments.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      details:
        "Comprehensive educational content covers everything from basic farming to advanced agricultural technologies.",
    },
    {
      title: "Real-Time Agricultural Modeling",
      description:
        "Advanced simulation engines that model crop growth, soil dynamics, weather impacts, and agricultural machinery operations with scientific accuracy.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-600",
      details:
        "Scientific modeling provides accurate simulations of agricultural processes for research and education purposes.",
    },
  ]

  const roadmapMilestones = [
    {
      title: "Virtual Platform Foundation",
      date: "Q2 2025",
      quarter: "June 2025",
      status: "upcoming" as const,
      description:
        "Launch core virtual reality infrastructure with basic environmental rendering and fundamental physics simulation systems.",
      deliverables: ["VR Infrastructure", "Physics Engine", "Environmental Rendering"],
    },
    {
      title: "Educational Content Creation",
      date: "Q3 2025",
      quarter: "September 2025",
      status: "upcoming" as const,
      description:
        "Deploy comprehensive agricultural education modules, training simulations, and interactive learning experiences.",
      deliverables: ["Educational Modules", "Training Simulations", "Interactive Learning"],
    },
    {
      title: "Multi-User Collaboration",
      date: "Q4 2025",
      quarter: "December 2025",
      status: "upcoming" as const,
      description: "Enable multi-user capabilities with global server infrastructure and collaborative research tools.",
      deliverables: ["Multi-user Platform", "Global Infrastructure", "Collaboration Tools"],
    },
    {
      title: "Advanced Simulation Engine",
      date: "Q1 2026",
      quarter: "March 2026",
      status: "upcoming" as const,
      description:
        "Deploy advanced agricultural modeling with scientific accuracy and real-time simulation capabilities.",
      deliverables: ["Scientific Modeling", "Real-time Simulation", "Advanced Analytics"],
    },
  ]

  const contributionAreas = [
    {
      title: "VR Development",
      description: "Build immersive virtual reality experiences for agricultural education",
      icon: <VrHeadset className="w-6 h-6" />,
      skills: ["Unity/Unreal", "VR Development", "3D Modeling"],
    },
    {
      title: "Educational Content",
      description: "Create comprehensive agricultural training modules and simulations",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Instructional Design", "Content Creation", "Agricultural Science"],
    },
    {
      title: "Simulation Engineering",
      description: "Develop accurate agricultural modeling and physics systems",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Physics Simulation", "Scientific Modeling", "Game Development"],
    },
    {
      title: "Collaboration Platform",
      description: "Build multi-user systems for global research collaboration",
      icon: <Users className="w-6 h-6" />,
      skills: ["Networking", "Real-time Systems", "User Experience"],
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
          <Image
            src="/images/systems/eatoverse-root.png"
            alt="EatoVerse Virtual Reality"
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
              <Sprout className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-purple-200" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                ROOT Layer • Virtual Reality System
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                <VrHeadset className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-300 flex-shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-300">
                  EatoVerse
                </span>
              </div>
              <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 font-light">
                Virtual Agricultural Universe
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-white/90 font-light">
              The immersive virtual universe where agricultural innovation meets digital reality, enabling collaborative
              research, education, and experimentation in virtual environments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                  onClick={() => {
                    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Features <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </Button>
              </div>

              <div className="transform hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto">
                <Link href="/eatoverse-lab">
                  <Button
                    size="lg"
                    className="bg-purple-600 text-white border-purple-600 hover:bg-purple-700 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl rounded-full w-full sm:w-auto"
                  >
                    <Code className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    Virtual Lab
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
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">Q2</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">2025</div>
                <div className="text-sm sm:text-base text-white/80">Launch Date</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Environments</div>
                <div className="text-sm sm:text-base text-white/80">Virtual Farms</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
                <div className="text-base sm:text-lg text-white/90 mb-1">Users</div>
                <div className="text-sm sm:text-base text-white/80">Concurrent</div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">ROOT</div>
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
                  activeTab === "overview" ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "features" ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "roadmap" ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                    The Virtual Reality Foundation of Agriculture
                  </span>
                </h2>

                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed">
                    EatoVerse creates immersive virtual environments where agricultural professionals, researchers, and
                    students can collaborate, experiment, and learn in digital agricultural worlds.
                  </p>

                  <p>
                    As the <strong>ROOT</strong> layer of EatoSystems, EatoVerse provides the foundational virtual
                    infrastructure where all agricultural innovation begins. Like roots that anchor and nourish a plant,
                    EatoVerse anchors learning and research in immersive virtual experiences.
                  </p>

                  <p>
                    EatoVerse enables <strong>risk-free experimentation</strong> — virtual environments where users can
                    test new farming techniques, explore different crop varieties, and experiment with agricultural
                    technologies without real-world consequences. It provides <strong>global collaboration</strong> —
                    shared virtual spaces where researchers and educators from around the world can work together.
                  </p>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
                    <p className="text-purple-800 font-medium mb-2">Your Role in Virtual Agriculture</p>
                    <p className="text-purple-700">
                      Whether you're a VR developer, educational content creator, agricultural researcher, or technology
                      enthusiast — EatoVerse provides the platform to build immersive experiences that transform how we
                      learn about and practice agriculture.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Core Virtual Capabilities</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <VrHeadset className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Immersive Environments</h4>
                      <p className="text-gray-600">
                        Photorealistic virtual farms with accurate physics, weather patterns, and seasonal changes.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Global Collaboration</h4>
                      <p className="text-gray-600">
                        Multi-user virtual laboratories for worldwide agricultural research and education.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Educational Simulations</h4>
                      <p className="text-gray-600">
                        Interactive training programs for learning agricultural techniques in risk-free environments.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                        <Monitor className="w-6 h-6 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Scientific Modeling</h4>
                      <p className="text-gray-600">
                        Advanced simulation engines with accurate crop growth, soil dynamics, and weather modeling.
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
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                    Virtual Reality Features
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Explore the cutting-edge capabilities that make EatoVerse the premier platform for virtual
                  agricultural experiences.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                      index === 0
                        ? "border-purple-500"
                        : index === 1
                          ? "border-indigo-500"
                          : index === 2
                            ? "border-blue-500"
                            : "border-cyan-500"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${feature.color} text-white`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <p className="text-sm text-gray-500 italic">{feature.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap Section */}
      {activeTab === "roadmap" && (
        <section id="roadmap-section" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                    Development Roadmap
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Our strategic plan for building the world's most advanced virtual agricultural platform.
                </p>
              </motion.div>

              <div className="space-y-8">
                {roadmapMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                          {milestone.date.split(" ")[0]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {milestone.quarter}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{milestone.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {milestone.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contribution Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Virtual Agriculture Revolution</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Help us build the future of agricultural education and research through immersive virtual reality
                experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contributionAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-white">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{area.title}</h3>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">{area.description}</p>
                  <div className="space-y-1">
                    {area.skills.map((skill, idx) => (
                      <span key={idx} className="inline-block text-xs text-white/70 mr-2">
                        • {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/contribute">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  Start Contributing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
