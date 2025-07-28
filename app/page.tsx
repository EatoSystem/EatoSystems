"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SystemsSection from "@/components/systems-section"
import JoinSection from "@/components/join-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
import InfiniteBrandSection from "@/components/infinite-brand-section"
import TransitionSection from "@/components/transition-section"

export default function Home() {
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

  return (
    <main className="min-h-screen fade-in overflow-x-hidden">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <TransitionSection />
      <InfiniteBrandSection />
      <SystemsSection />
      <JoinSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
