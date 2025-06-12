"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Globe, TreePine, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const impactStats = [
    {
      number: "12",
      label: "Systems",
      description: "Specialized agricultural systems",
      icon: <Building2 className="w-6 h-6" />,
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/40",
      shadowColor: "shadow-green-500/30",
      iconColor: "text-green-300",
    },
    {
      number: "Global",
      label: "Network",
      description: "Worldwide regenerative agriculture",
      icon: <Globe className="w-6 h-6" />,
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-400/40",
      shadowColor: "shadow-emerald-500/30",
      iconColor: "text-emerald-300",
    },
    {
      number: "∞",
      label: "Impact",
      description: "Unlimited potential for change",
      icon: <TreePine className="w-6 h-6" />,
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-400/40",
      shadowColor: "shadow-yellow-500/30",
      iconColor: "text-yellow-300",
    },
    {
      number: "Open",
      label: "Source",
      description: "Collaborative development",
      icon: <Rocket className="w-6 h-6" />,
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/40",
      shadowColor: "shadow-orange-500/30",
      iconColor: "text-orange-300",
    },
  ]

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background with globe network image and green to orange overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/global-network-earth.png"
          alt="Global Regenerative Food Systems Network"
          fill
          className="object-cover opacity-100"
          priority
          quality={100}
          sizes="100vw"
          style={{
            filter: "contrast(1.05) saturate(1.1) brightness(1.0)",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Enhanced Green to orange gradient overlay - more prominent */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-green-400/20 to-orange-500/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600/25 via-emerald-500/15 to-orange-500/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-green-400/20 via-orange-400/25 to-orange-600/30"></div>

        {/* Additional green to orange transitions - more saturated */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/25 via-emerald-400/15 to-orange-500/25"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-600/25 via-orange-400/20 to-green-400/20"></div>

        {/* Enhanced radial gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15)_0%,rgba(249,115,22,0.12)_50%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(249,115,22,0.20)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(34,197,94,0.15)_0%,transparent_45%)]"></div>

        {/* Vibrant color accent overlays */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/20 via-transparent to-green-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/15 via-yellow-500/12 to-orange-600/20"></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/3 to-transparent"></div>
      </div>

      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-20 md:py-24 lg:py-32 pt-24 sm:pt-20 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Enhanced badge with earth-green accent */}
          <div className="inline-flex items-center bg-black/50 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 md:mb-10 border border-green-500/60 shadow-2xl shadow-green-600/25">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-300 flex-shrink-0 drop-shadow-lg" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
              Regenerative Food Systems
            </span>
          </div>

          {/* Main Title with earth-green glow */}
          <h1 className="font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold drop-shadow-lg">
              EatoSystems
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-white/90 mt-2 sm:mt-3 drop-shadow-md">
              From Soil to Sanctuary
            </span>
          </h1>

          {/* Description with earth-toned glow */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed text-white/95 drop-shadow-md font-medium px-2 sm:px-0">
            Building the world's first regenerative food system, one that begins with knowledge and cultures then grows
            into infrastructure, finance, robotics, AI, governance, and global trust.
          </p>

          {/* Enhanced Action Buttons with earth-green accents */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <Link href="/support" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-gray-100 text-green-700 hover:from-gray-100 hover:to-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto border-2 border-white"
              >
                <span className="break-words">Support the Mission</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </Link>

            <Link href="/start-building" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-orange-400 hover:from-orange-600 hover:to-orange-700 hover:border-orange-500 px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full w-full sm:w-auto transition-all duration-300 shadow-2xl shadow-orange-500/30 hover:shadow-[0_0_30px_rgba(255,165,0,0.6)]"
              >
                <span>Start Building</span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Impact Stats with varied colors matching /eatosystems style */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 ${stat.bgColor} backdrop-blur-md rounded-2xl flex items-center justify-center text-white border-2 ${stat.borderColor} shadow-xl ${stat.shadowColor} transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                >
                  <div className={stat.iconColor}>{stat.icon}</div>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_0_12px_rgba(255,255,255,0.15),_2px_2px_6px_rgb(0_0_0_/_90%)] transition-all duration-300 group-hover:scale-105">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-wide">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] max-w-[200px] mx-auto break-words">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
