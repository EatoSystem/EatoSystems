"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Users, Globe, Lightbulb, Sparkles } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SystemsSection from "@/components/systems-section"
import JoinSection from "@/components/join-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const knowledgeSectionRef = useRef<HTMLDivElement>(null)

  // Smooth scroll implementation
  useEffect(() => {
    setIsVisible(true)

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = target.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    // Intersection observer for knowledge section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (knowledgeSectionRef.current) {
      observer.observe(knowledgeSectionRef.current)
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="min-h-screen fade-in">
      <HeroSection />
      <SectionDivider />
      <AboutSection />

      {/* Knowledge Sharing Section */}
      <section ref={knowledgeSectionRef} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background with more visible image */}
        <div className="absolute inset-0">
          <Image
            src="/agricultural-ai-visualization.png"
            alt="Neural network visualization of agricultural knowledge"
            fill
            className="object-cover opacity-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-orange-600/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/50 shadow-lg">
              <Brain className="w-5 h-5 mr-2 text-primary" />
              <span className="text-primary font-bold text-lg">Share Your Knowledge</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white font-bold drop-shadow-2xl shadow-black/80">
              Your Knowledge
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300 drop-shadow-2xl">
                Changes Everything
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white font-bold drop-shadow-2xl shadow-black/80">
              Join our community of knowledge heroes making a difference in global food systems. Your insights help
              build a more sustainable future for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <KnowledgeCard
                icon={<Lightbulb className="w-8 h-8" />}
                title="Share Insights"
                description="Contribute your unique knowledge and perspectives to help solve global food challenges"
                delay={0.1}
                isVisible={isVisible}
              />
              <KnowledgeCard
                icon={<Users className="w-8 h-8" />}
                title="Join Community"
                description="Connect with experts, farmers, scientists, and changemakers from around the world"
                delay={0.2}
                isVisible={isVisible}
              />
              <KnowledgeCard
                icon={<Globe className="w-8 h-8" />}
                title="Create Impact"
                description="See how your contributions directly influence sustainable food system development"
                delay={0.3}
                isVisible={isVisible}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center items-center"
            >
              <Link href="/feed-eatoiq">
                <button className="px-8 py-4 bg-white text-primary rounded-full font-medium text-lg flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                  <Sparkles className="w-5 h-5" />
                  <span>Share Your Knowledge</span>
                  <ArrowRight className="ml-1 w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SystemsSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function KnowledgeCard({ icon, title, description, delay, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-white font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white font-bold drop-shadow-md">{title}</h3>
      <p className="text-white font-bold leading-relaxed drop-shadow-md">{description}</p>
    </motion.div>
  )
}
