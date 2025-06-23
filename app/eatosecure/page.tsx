"use client"

import { Suspense } from "react"
import { systemsData } from "@/lib/systems-data"
import SystemContent from "@/components/system-content"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SystemHeroSection from "@/components/system-hero-section"

export default function EatoSecurePage() {
  const systemData = systemsData.eatosecure

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <SystemHeroSection systemSlug="eatosecure" systemData={systemData} />
        <Suspense
          fallback={
            <div className="min-h-screen pt-24 pb-16 container mx-auto px-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Loading system details...</p>
              </div>
            </div>
          }
        >
          <SystemContent systemSlug="eatosecure" />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}
