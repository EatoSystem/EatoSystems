"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Globe, Sparkles, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Define the pillar type
export type Pillar = {
  title: string
  layer: string
  description: string
  examples: Array<{
    name: string
    icon?: string
    flag?: string
    description: string
  }>
  color: string
  bgColor: string
  textColor: string
  gradient: string
  image: string
}

const pillarsData: Pillar[] = [
  {
    title: "Place",
    layer: "",
    description:
      "Transform any location into a regenerative ecosystem through place-based food systems that honor local culture and environment.",
    examples: [
      {
        name: "EatoIreland",
        flag: "🇮🇪",
        description: "Regenerative Irish agriculture connecting ancient wisdom with modern innovation",
      },
      { name: "EatoUSA", flag: "🇺🇸", description: "Sustainable American farming from coast to coast" },
      { name: "EatoBrazil", flag: "🇧🇷", description: "Amazonian food systems protecting biodiversity" },
      { name: "EatoJapan", flag: "🇯🇵", description: "Traditional Japanese farming meets cutting-edge technology" },
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/20 to-emerald-500/20",
    textColor: "text-green-600",
    gradient: "from-green-600 to-emerald-500",
    image: "/images/place-pillar.png",
  },
  {
    title: "Produce",
    layer: "",
    description:
      "Optimize every crop and ingredient for maximum health, community, and environmental impact through regenerative growing practices.",
    examples: [
      { name: "EatoTomato", icon: "🍅", description: "Nutrient-dense heirloom varieties grown in living soil" },
      { name: "EatoBeetroot", icon: "🥕", description: "Soil-regenerating root vegetables that heal the earth" },
      { name: "EatoBeef", icon: "🥩", description: "Grass-fed regenerative livestock supporting biodiversity" },
      { name: "EatoKale", icon: "🥬", description: "Superfood greens optimized for maximum nutrition" },
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/20",
    textColor: "text-orange-600",
    gradient: "from-orange-600 to-red-500",
    image: "/images/produce-pillar.png",
  },
  {
    title: "Products",
    layer: "",
    description:
      "Create premium offerings that heal people and planet while building thriving communities through ethical production and distribution.",
    examples: [
      { name: "EatoHoney", icon: "🍯", description: "Pollinator-supporting raw honey from regenerative apiaries" },
      { name: "EatoButter", icon: "🧈", description: "Grass-fed artisan dairy from happy, healthy cows" },
      { name: "EatoPesto", icon: "🌿", description: "Wild-foraged herb blends celebrating local ecosystems" },
      { name: "EatoChocolate", icon: "🍫", description: "Ethically sourced cacao supporting farmer communities" },
    ],
    color: "from-yellow-500 to-amber-600",
    bgColor: "from-yellow-500/20 to-amber-500/20",
    textColor: "text-amber-600",
    gradient: "from-amber-600 to-orange-500",
    image: "/images/products-pillar.png",
  },
  {
    title: "People",
    layer: "",
    description:
      "Empower individuals and communities through personalized food systems and collaborative networks that strengthen human connections.",
    examples: [
      { name: "EatoMe", icon: "👤", description: "Personal nutrition optimization based on your unique biology" },
      { name: "EatoTeam", icon: "👥", description: "Collaborative food systems for organizations and communities" },
      {
        name: "EatoProducer",
        icon: "👨‍🌾",
        description: "Regenerative farmer networks sharing knowledge and resources",
      },
      { name: "EatoChef", icon: "👨‍🍳", description: "Culinary professionals creating regenerative cuisine" },
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-violet-600",
    gradient: "from-violet-600 to-purple-500",
    image: "/images/people-pillar.png",
  },
]

export default function InfiniteBrandPage() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <InfiniteBrandHero />
        <InfiniteBrandPillars selectedPillar={selectedPillar} setSelectedPillar={setSelectedPillar} />
        <Footer />
      </div>
    </>
  )
}

function InfiniteBrandHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-orange-600 to-purple-600">
        <Image
          src="/images/infinite-brand-hero.jpeg"
          alt="Infinite Brand Landscape"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-yellow-200 flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words">
              The Brand of Infinite Value
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="text-white break-words">The Brand of Infinite Value</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Eato + A Word = Health Value + Community Value + Environmental Value
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light break-words px-4 sm:px-0">
            Every application of Eato creates value that compounds infinitely. From{" "}
            <span className="text-green-300 font-semibold">EatoIreland</span> transforming nations to{" "}
            <span className="text-orange-300 font-semibold">EatoTomato</span> nourishing families to{" "}
            <span className="text-blue-300 font-semibold">EatoMe</span> optimizing individuals - each word becomes a
            regenerative force for healing our world.
          </p>

          {/* Formula Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                ∞
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Applications
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Infinite possibilities</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                195
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Countries
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Global potential</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                3
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 break-words">
                Value Types
              </div>
              <div className="text-xs sm:text-sm text-white/80 break-words">Health, Community, Environment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfiniteBrandPillars({
  selectedPillar,
  setSelectedPillar,
}: {
  selectedPillar: string | null
  setSelectedPillar: (pillar: string | null) => void
}) {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section id="infinite-pillars" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-purple-600">
              Four Pillars of Impact
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From places to produce, products to people — discover how the Eato prefix transforms every aspect of our
            food systems into regenerative value.
          </p>
        </motion.div>

        {/* Staggered Layout */}
        <div className="mt-12">
          {pillarsData.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={`flex flex-col md:flex-row items-center py-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animationVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image */}
              <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <Image
                    src={pillar.image || "/placeholder.svg"}
                    alt={pillar.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 px-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{pillar.description}</p>

                {/* Examples */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Examples</h4>
                  <ul>
                    {pillar.examples.slice(0, 3).map((example) => (
                      <li key={example.name} className="mb-1">
                        <span className="font-medium text-gray-800">{example.name}</span> -{" "}
                        <span className="text-gray-600">{example.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
