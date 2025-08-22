"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ArrowRight, Shield, Globe, Users, TreePine, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoFoundationPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % capabilities.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const capabilities = [
    {
      title: "Community Empowerment",
      description:
        "Supporting local communities with resources, training, and technology to build resilient food systems from the ground up.",
      icon: <Heart className="w-12 h-12" />,
      color: "from-teal-500 to-cyan-500",
      image: "/images/eatofoundation-sanctuary.png",
    },
    {
      title: "Research Innovation",
      description:
        "Funding breakthrough research in sustainable agriculture, climate adaptation, and food security technologies.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-cyan-500 to-blue-500",
      image: "/images/eatofoundation-sanctuary.png",
    },
    {
      title: "Global Impact Programs",
      description:
        "Large-scale initiatives addressing food security challenges and promoting sustainable agricultural practices worldwide.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-blue-500 to-teal-500",
      image: "/images/eatofoundation-sanctuary.png",
    },
    {
      title: "Technology Access",
      description:
        "Making EatoSystems technologies accessible to underserved communities through partnerships and subsidized programs.",
      icon: <Users className="w-12 h-12" />,
      color: "from-teal-600 to-cyan-600",
      image: "/images/eatofoundation-sanctuary.png",
    },
  ]

  const stats = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "25+",
      label: "Countries",
      description: "Global reach",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "100K+",
      label: "Lives",
      description: "Impact goal",
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      value: "SANCTUARY",
      label: "Layer",
      description: "Protection system",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "2025",
      label: "Launch",
      description: "Foundation start",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section - Updated to match EatoSystems structure with autumn forest background and blue-green filter */}
      <section
        ref={sectionRef}
        className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
      >
        {/* Background with autumn forest stream image */}
        <div className="absolute inset-0">
          <Image
            src="/images/eatofoundation-sanctuary.png"
            alt="Autumn forest stream sanctuary"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/70 to-cyan-500/70"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-teal-400/30 animate-pulse"></div>

          {/* Flowing organic shapes with blue-green tones */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/40 to-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-teal-400/40 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Flowing wave animation with blue-green gradients */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z"
                fill="url(#gradient1)"
                fillOpacity="0.4"
                animate={{
                  d: [
                    "M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z",
                    "M0 350C400 250 800 450 1200 350C1600 250 1920 450 1920 350V1080H0V350Z",
                    "M0 300C400 200 800 400 1200 300C1600 200 1920 400 1920 300V1080H0V300Z",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z"
                fill="url(#gradient2)"
                fillOpacity="0.3"
                animate={{
                  d: [
                    "M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z",
                    "M0 450C400 350 800 550 1200 450C1600 350 1920 550 1920 450V1080H0V450Z",
                    "M0 500C400 400 800 600 1200 500C1600 400 1920 600 1920 500V1080H0V500Z",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0891B2" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-10"
          >
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center pt-4 sm:pt-8"
            >
              <div className="inline-flex items-center bg-white/25 backdrop-blur-md rounded-full px-4 sm:px-8 py-2 sm:py-4 border border-white/30 shadow-lg">
                <TreePine className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-200" />
                <span className="text-white font-semibold text-xs sm:text-base uppercase tracking-wider drop-shadow-lg">
                  SANCTUARY LAYER • FOUNDATION SYSTEM
                </span>
              </div>
            </motion.div>

            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 sm:space-y-6"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-snug drop-shadow-2xl">
                <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-300 flex-shrink-0" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-teal-100 to-blue-200">
                    EatoFoundation
                  </span>
                </div>
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-white drop-shadow-lg">
                Philanthropic Foundation
              </h2>
            </motion.div>

            {/* Description paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl mx-auto px-2 drop-shadow-lg"
            >
              A global philanthropic foundation dedicated to advancing sustainable agriculture, supporting food security
              initiatives, and empowering communities worldwide through the sanctuary of protection and nurturing.
            </motion.p>

            {/* Glass morphism description card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto px-2"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/30 shadow-2xl">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light drop-shadow-lg">
                  We're building the sanctuary that protects and nurtures vulnerable communities and food systems — one
                  program, one partnership, and one life-changing initiative at a time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            >
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-w-[200px]"
                onClick={() => {
                  document.getElementById("capabilities-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>Explore Programs</span>
                <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </motion.div>

            {/* Feature cards - Updated with blue-green color scheme */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pt-6 sm:pt-8 px-2"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/30 shadow-lg">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  Community Empowerment
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed drop-shadow-lg">
                  Supporting local communities with resources, training, and technology to build resilient food systems.
                </p>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/30 shadow-lg">
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  Global Impact
                </h3>
                <p className="text-sm sm:text-base text-white leading-relaxed drop-shadow-lg">
                  Creating systemic change through collaborative international efforts and strategic partnerships.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities-section" className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
              Foundation Programs
            </h2>
            <p className="text-2xl text-teal-700 max-w-4xl mx-auto">
              Comprehensive philanthropic programs designed to create lasting change in global food systems through
              community empowerment, research innovation, and strategic partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={capability.image || "/placeholder.svg"}
                    alt={capability.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${capability.color} opacity-80`}></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-lg text-white/90 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
              Foundation Impact
            </h2>
            <p className="text-2xl text-blue-700 max-w-4xl mx-auto">
              Building the sanctuary infrastructure that protects and nurtures vulnerable communities and food systems
              through strategic philanthropic initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-teal-600 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/eatofoundation-sanctuary.png"
            alt="Autumn forest stream sanctuary"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/85 via-cyan-600/85 to-blue-600/85"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-8 text-white">Understanding EatoFoundation</h2>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The philanthropic sanctuary that protects and nurtures vulnerable communities and food systems through
                strategic programs and global partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">What is EatoFoundation?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    EatoFoundation is the philanthropic heart of the EatoSystems ecosystem, creating sanctuary spaces
                    where sustainable agriculture can flourish and communities can thrive. Like a protective canopy in
                    nature, it provides shelter and nurturing for vulnerable food systems.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    By Q2 2025, EatoFoundation will provide comprehensive support through community empowerment,
                    research funding, and global impact programs.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Why Philanthropic Foundation?</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Traditional agricultural development often lacks the sustained support and protection needed for
                    long-term success. We're building a sanctuary foundation that provides ongoing nurturing and
                    protection for vulnerable communities and food systems.
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed">
                    This allows us to create lasting change through strategic partnerships, innovative programs, and
                    community-driven solutions that address root causes of food insecurity.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">The Vision for 2025</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    By launch, EatoFoundation will be the definitive sanctuary for global food security, providing:
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 mr-3 mt-1 text-cyan-300 flex-shrink-0" />
                      <span>25+ countries with active community programs</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-3 mt-1 text-cyan-300 flex-shrink-0" />
                      <span>Breakthrough research funding in sustainable agriculture</span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 mr-3 mt-1 text-cyan-300 flex-shrink-0" />
                      <span>Global impact programs reaching 100K+ lives</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-1 text-cyan-300 flex-shrink-0" />
                      <span>Technology access for underserved communities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Building the Sanctuary</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    EatoFoundation represents more than just philanthropy - it's the sanctuary that protects and
                    nurtures the future of food security. Every program will create lasting change, every partnership
                    will strengthen communities, every initiative will build resilience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      {/*
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1 max-w-md">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "overview" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "features" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => setActiveTab("roadmap")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "roadmap" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Impact
              </button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Overview Section */}
      {/*
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                    Building Sustainable Food Systems for All
                  </span>
                </h2>

                <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                  <p className="text-xl leading-relaxed">
                    EatoFoundation serves as the philanthropic heart of the EatoSystems ecosystem, dedicated to creating
                    lasting change in global food systems through strategic partnerships, innovative programs, and
                    community-driven solutions.
                  </p>

                  <p>
                    As the <strong>SANCTUARY</strong> layer of EatoSystems, EatoFoundation provides protection and
                    nurturing for vulnerable communities and food systems. Like a sanctuary in nature, it creates safe
                    spaces where sustainable agriculture can flourish and communities can thrive.
                  </p>

                  <p>
                    EatoFoundation enables <strong>community empowerment</strong> — providing resources, training, and
                    technology to build resilient food systems from the ground up. It drives{" "}
                    <strong>research innovation</strong> — funding breakthrough discoveries in sustainable agriculture
                    and food security technologies.
                  </p>

                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
                    <p className="text-emerald-800 font-medium mb-2">Your Role in Global Impact</p>
                    <p className="text-emerald-700">
                      Whether you're a philanthropist, researcher, community leader, or passionate advocate —
                      EatoFoundation provides pathways to create meaningful change in global food systems and support
                      communities in need.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Foundation Pillars</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Community Empowerment</h4>
                      <p className="text-gray-600">
                        Supporting local communities with resources, training, and technology to build resilient food
                        systems from the ground up.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-teal-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Research Innovation</h4>
                      <p className="text-gray-600">
                        Funding breakthrough research in sustainable agriculture, climate adaptation, and food security
                        technologies.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-cyan-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Global Impact</h4>
                      <p className="text-gray-600">
                        Creating systemic change through collaborative international efforts and strategic partnerships.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Technology Access</h4>
                      <p className="text-gray-600">
                        Making advanced agricultural technologies accessible to underserved communities worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
      */}

      {/* Features Section */}
      {/*
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                  Foundation Programs
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive philanthropic programs designed to create lasting change in global food systems and
                empower communities worldwide.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Feature List */}
      {/*
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-white border-2 border-pink-200 shadow-lg"
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
                */}

      {/* Feature Visualization */}
      {/*
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
                      src="/images/eatosecure-canopy.png"
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
      {/*
                  <div className="flex justify-center mt-6 space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeFeature === index ? "bg-red-600" : "bg-gray-300"
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
      */}

      {/* Roadmap Section */}
      {/*
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                  Impact Timeline
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Key milestones in the establishment and growth of EatoFoundation as the philanthropic foundation
                supporting global food security initiatives.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
      {/*
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-pink-500 transform md:-translate-x-px"></div>

                {roadmapMilestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex items-start mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      {/* Timeline dot */}
      {/*
                      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-red-500 rounded-full z-10"></div>

                      {/* Content card */}
      {/*
                      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-l-red-500">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-red-600">{milestone.title}</h3>
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
                                      <CheckCircle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
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
              <Link href="/roadmap/eatofoundation">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Detailed Impact Plan
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
      */}

      {/* Lab & Development Section */}
      {/*
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                  Join Our Mission
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Contribute to global food security through philanthropic programs, research initiatives, and community
                empowerment projects.
              </p>
            </motion.div>

            {/* Contribution Areas */}
      {/*
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
                  <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500"></div>
                  <div className="p-6">
                    <div className="w-12 h-12 mb-4 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-red-600">{area.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.skills.map((skill, i) => (
                        <span key={i} className="inline-block px-2 py-1 rounded-full text-xs bg-red-50 text-red-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            */}

      {/* Lab Access Cards */}
      {/*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-xl border border-red-100"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">EatoFoundation Lab</h3>
                <p className="text-gray-600 mb-6">
                  Access our research platform, explore impact data, and collaborate on philanthropic initiatives in
                  sustainable agriculture and food security.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Impact Research Tools
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Program Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Partnership Network
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Grant Management
                  </div>
                </div>
                <Link href="/eatofoundation-lab">
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Code className="mr-2 h-5 w-5" />
                    Enter Foundation Lab
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Impact Reports</h3>
                <p className="text-gray-600 mb-6">
                  Access detailed reports on our programs, global impact metrics, and comprehensive guides for
                  implementing sustainable food security initiatives.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Annual Impact Reports
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Program Case Studies
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Best Practices Guide
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                    Community Stories
                  </div>
                </div>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Impact Reports
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/*
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Create Global Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoFoundation community and help create lasting change in global food systems. Together, we can
              build a more sustainable and equitable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/eatosystems">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Explore All Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      */}

      <Footer />
    </>
  )
}
