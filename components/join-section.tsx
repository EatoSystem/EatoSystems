"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Figma, Github, Server, Users, FileCode, Bot, Map, Shield, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function JoinSection() {
  const [activeTab, setActiveTab] = useState("contribute")
  const router = useRouter()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  // Function to handle navigation and ensure scroll to top
  const handleNavigation = (e, href) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <section ref={sectionRef} id="join" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/eatosecure-forest-canopy.png"
          alt="Forest Canopy - Looking up through sustainable growth and natural innovation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-orange-600/90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-orange-200 flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              Join Our Community
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight text-white">
            <span className="break-words">Start</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 break-words">
              Building
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-white/90 break-words">
              EatoSystems            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Join a global community of developers, designers, and innovators creating the future of sustainable food
            systems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center mt-6 sm:mt-10 space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 px-4 sm:px-0">
            <button
              onClick={() => setActiveTab("contribute")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 w-full sm:w-auto ${
                activeTab === "contribute"
                  ? "bg-white text-primary shadow-lg transform -translate-y-1"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <span className="break-words">Ways to Contribute</span>
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 w-full sm:w-auto ${
                activeTab === "resources"
                  ? "bg-white text-primary shadow-lg transform -translate-y-1"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <span className="break-words">Developer Resources</span>
            </button>
          </div>
        </motion.div>

        {/* Keep the existing tab content sections unchanged */}
        {activeTab === "contribute" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            <ContributionCard
              icon={<Code size={20} className="sm:w-6 sm:h-6" />}
              title="v0.dev"
              description="Design and build interfaces for data visualization, system monitoring, and user interaction with the EatoSystems platform."
              link="/contribute/v0"
              router={router}
              delay={0.1}
              isVisible={isVisible}
            />
            <ContributionCard
              icon={<Server size={20} className="sm:w-6 sm:h-6" />}
              title="Vercel"
              description="Deploy and scale the distributed components of EatoSystems with optimized edge functions and serverless architecture."
              link="/contribute/vercel"
              router={router}
              delay={0.2}
              isVisible={isVisible}
            />
            <ContributionCard
              icon={<Github size={20} className="sm:w-6 sm:h-6" />}
              title="GitHub"
              description="Contribute to core algorithms, privacy-preserving techniques, and system architecture through open source collaboration."
              link="/contribute/github"
              router={router}
              delay={0.3}
              isVisible={isVisible}
            />
            <ContributionCard
              icon={<Bot size={20} className="sm:w-6 sm:h-6" />}
              title="Hugging Face"
              description="Access and contribute to open-source models for regenerative agriculture, food systems analysis, and environmental monitoring."
              link="/contribute/huggingface"
              router={router}
              delay={0.4}
              isVisible={isVisible}
            />
            <ContributionCard
              icon={<Users size={20} className="sm:w-6 sm:h-6" />}
              title="Community"
              description="Join working groups, participate in discussions, and help shape the future of global food systems."
              link="/contribute/community"
              router={router}
              delay={0.5}
              isVisible={isVisible}
            />
            <ContributionCard
              icon={<Figma size={20} className="sm:w-6 sm:h-6" />}
              title="Designers"
              description="Create intuitive interfaces and data visualizations that make complex systems accessible to diverse stakeholders."
              link="/contribute/designers"
              router={router}
              delay={0.6}
              isVisible={isVisible}
            />
          </motion.div>
        )}

        {activeTab === "resources" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            <ResourceCard
              icon={<Github size={20} className="sm:w-6 sm:h-6" />}
              title="GitHub Repository"
              description="Access the core codebase, contribute to development, and track issues and feature requests."
              buttonText="View Repository"
              link="#"
              router={router}
              delay={0.1}
              isVisible={isVisible}
            />
            <ResourceCard
              icon={<Figma size={20} className="sm:w-6 sm:h-6" />}
              title="Design System"
              description="Explore the UI components, design patterns, and visual language for building consistent EatoSystems interfaces."
              buttonText="Open Figma"
              link="#"
              router={router}
              delay={0.2}
              isVisible={isVisible}
            />
            <ResourceCard
              icon={<FileCode size={20} className="sm:w-6 sm:h-6" />}
              title="Documentation"
              description="Comprehensive guides, API references, and tutorials for working with the EatoSystems platform."
              buttonText="Read Docs"
              link="#"
              router={router}
              delay={0.3}
              isVisible={isVisible}
            />
            <ResourceCard
              icon={<Map size={20} className="sm:w-6 sm:h-6" />}
              title="Implementation Blueprints"
              description="Detailed guides for adapting and implementing EatoSystems in diverse contexts and scales."
              buttonText="View Blueprints"
              link="#"
              router={router}
              delay={0.4}
              isVisible={isVisible}
            />
            <ResourceCard
              icon={<Shield size={20} className="sm:w-6 sm:h-6" />}
              title="Security Framework"
              description="Tools and standards for ensuring data privacy, system integrity, and sustainable security practices."
              buttonText="Explore Framework"
              link="#"
              router={router}
              delay={0.5}
              isVisible={isVisible}
            />
            <ResourceCard
              icon={<Server size={20} className="sm:w-6 sm:h-6" />}
              title="Demo Environment"
              description="Test your integrations and experiment with EatoSystems capabilities in a sandboxed environment."
              buttonText="Launch Demo"
              link="#"
              router={router}
              delay={0.6}
              isVisible={isVisible}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-10 px-4 sm:px-0">
            <a
              href="/start-building"
              onClick={(e) => handleNavigation(e, "/start-building")}
              className="inline-flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <span className="break-words">Start Building</span>
              <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContributionCard({ icon, title, description, link, router, delay, isVisible }) {
  const handleClick = (e) => {
    e.preventDefault()
    router.push(link)
    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group overflow-hidden relative"
    >
      {/* Decorative gradient */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800 break-words">{title}</h3>
      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base break-words">{description}</p>
      <a
        href={link}
        onClick={handleClick}
        className="text-primary font-medium hover:text-primary-dark inline-flex items-center group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base"
      >
        <span className="break-words">Learn more</span>
        <svg
          className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:ml-3 transition-all duration-300 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  )
}

function ResourceCard({ icon, title, description, buttonText, link, router, delay, isVisible }) {
  const handleClick = (e) => {
    if (link.startsWith("#")) return
    e.preventDefault()
    router.push(link)
    window.scrollTo(0, 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group overflow-hidden relative"
    >
      {/* Decorative gradient */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent-orange/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800 break-words">{title}</h3>
      <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base break-words">{description}</p>
      <a
        href={link}
        onClick={handleClick}
        className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300 group-hover:shadow-md text-sm sm:text-base w-full sm:w-auto"
      >
        <span className="break-words">{buttonText}</span>
      </a>
    </motion.div>
  )
}
