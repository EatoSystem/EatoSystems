"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SystemsSection from "@/components/systems-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
import InfiniteBrandSection from "@/components/infinite-brand-section"
import TokonomicsHeroSection from "@/components/tokonomics-hero-section"
import EatoXYZSection from "@/components/eatoxyz-section"
import EatoAIModal from "@/components/eatoai-modal"
import EatoSystemsModal from "@/components/eatosystems-modal"

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  // Smooth scroll implementation
  useEffect(() => {
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

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  useEffect(() => {
    // Show modal after a short delay to ensure smooth page load
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen fade-in overflow-x-hidden">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <EatoXYZSection />
      <InfiniteBrandSection />
      <SystemsSection />
      <TokonomicsHeroSection />
      <Footer />

      <EatoAIModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <EatoSystemsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  )
}
