"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Eye, ExternalLink, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SystemProps {
  version: string
  name: string
  layer: string
  description: string
  slug: string
  index: number
  isVisible: boolean
  launchDate: string
  quarter: string
  city: string
  participants: string
  website: string
}

function SystemCard({
  version,
  name,
  layer,
  description,
  slug,
  index,
  isVisible,
  launchDate,
  quarter,
  city,
  participants,
  website,
}: SystemProps) {
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const [imageError, setImageError] = useState(false)

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  const getSystemImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      eatoglobal: "/images/systems/eatoglobal-soil.png",
      eatoagent: "/images/systems/eatoagent-seed.png",
      eatoindex: "/images/systems/eatoindex-pollination.png",
      eatoverse: "/images/systems/eatoverse-root.png",
      eatobotics: "/images/systems/eatobotics-sprout.png",
      eatotransit: "/images/systems/eatotransit-flow.png",
      eatoai: "/images/systems/eatoai-mycelium.png",
      eatofund: "/images/systems/eatofund-crop.png",
      eatosystem: "/images/systems/eatosystem-harvest.png",
      eatogov: "/images/systems/eatogov-regeneration.png",
      eatosecure: "/images/systems/eatosecure-canopy.png",
      eatofoundation: "/images/systems/eatofoundation-sanctuary.png",
    }
    return imageMap[slug] || `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(name)}`
  }

  const getSystemAltText = (name: string, layer: string) => {
    const altTextMap: Record<string, string> = {
      eatoglobal: "Rich fertile soil representing the foundational knowledge and cultural layer of EatoGlobal system",
      eatoagent: "Sprouting seed symbolizing the AI agent technology that grows intelligent food decisions",
      eatoindex:
        "Bee pollination process illustrating the financial index that connects and funds regenerative food systems",
      eatoverse: "Deep root network showing the digital twin infrastructure connecting virtual and real food systems",
      eatobotics:
        "Green sprout emerging from soil representing regenerative robotics supporting sustainable agriculture",
      eatotransit: "Flowing water stream depicting clean energy logistics moving food with integrity across systems",
      eatoai: "Mycelium network underground showing the decentralized AI intelligence coordinating global food systems",
      eatofund: "Mature crop field representing the regenerative capital engine financing sustainable food innovation",
      eatosystem: "Abundant harvest scene showing the full-stack national food system implementation",
      eatogov: "Forest regeneration landscape illustrating governance systems enabling public food infrastructure",
      eatosecure: "Protective forest canopy representing global food security ensuring sustained access to nutrition",
      eatofoundation:
        "Pristine natural sanctuary symbolizing the trust safeguarding EatoSystem integrity for future generations",
    }
    return (
      altTextMap[name.toLowerCase().replace("eato", "eato")] ||
      `${name} - ${layer} layer system visualization representing sustainable food technology`
    )
  }

  const layerColors = {
    SOIL: "from-green-500/20 to-emerald-500/20",
    SEED: "from-yellow-500/20 to-amber-500/20",
    POLLINATION: "from-pink-500/20 to-rose-500/20",
    ROOT: "from-purple-500/20 to-indigo-500/20",
    SPROUT: "from-blue-500/20 to-sky-500/20",
    FLOW: "from-teal-500/20 to-cyan-500/20",
    MYCELIUM: "from-violet-500/20 to-purple-500/20",
    CROP: "from-amber-500/20 to-orange-500/20",
    HARVEST: "from-orange-500/20 to-amber-500/20",
    REGENERATION: "from-emerald-500/20 to-green-500/20",
    CANOPY: "from-red-500/20 to-rose-500/20",
    SANCTUARY: "from-indigo-500/20 to-blue-500/20",
  }

  const layerTextColors = {
    SOIL: "text-green-600",
    SEED: "text-yellow-600",
    POLLINATION: "text-pink-600",
    ROOT: "text-purple-600",
    SPROUT: "text-blue-600",
    FLOW: "text-teal-600",
    MYCELIUM: "text-violet-600",
    CROP: "text-amber-600",
    HARVEST: "text-orange-600",
    REGENERATION: "text-emerald-600",
    CANOPY: "text-red-600",
    SANCTUARY: "text-indigo-600",
  }

  const layerGradients = {
    SOIL: "from-green-600 to-emerald-500",
    SEED: "from-yellow-600 to-amber-500",
    POLLINATION: "from-pink-600 to-rose-500",
    ROOT: "from-purple-600 to-indigo-500",
    SPROUT: "from-blue-600 to-sky-500",
    FLOW: "from-teal-600 to-cyan-500",
    MYCELIUM: "from-violet-600 to-purple-500",
    CROP: "from-amber-600 to-orange-500",
    HARVEST: "from-orange-600 to-amber-500",
    REGENERATION: "from-emerald-600 to-green-500",
    CANOPY: "from-red-600 to-rose-500",
    SANCTUARY: "from-indigo-600 to-blue-500",
  }

  const systemAltText = getSystemAltText(name, layer)
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex items-center mb-16 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full shadow-lg z-10" />

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white shadow-lg">
          <CardContent className="p-0">
            {/* Image and System Info */}
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${layerColors[layer as keyof typeof layerColors]}`} />
              {!imageError ? (
                <Image
                  src={getSystemImage(slug) || "/placeholder.svg"}
                  alt={systemAltText}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 mx-auto mb-2 text-gray-500" />
                    <p className="text-gray-600 font-medium">{name}</p>
                  </div>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <Badge className={`bg-white/90 ${layerTextColors[layer as keyof typeof layerTextColors]} font-medium`}>
                  {layer}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 border-gray-200 text-gray-600 font-mono">
                  {version}
                </Badge>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3
                  className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${layerGradients[layer as keyof typeof layerGradients]}`}
                >
                  {name}
                </h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{quarter}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

              <div className="flex justify-center mb-4">
                <Link href="/apply-hackathon">
                  <Button
                    className={`bg-gradient-to-r ${layerGradients[layer as keyof typeof layerGradients]} text-white hover:shadow-lg px-6 py-2`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Apply for Hackathon
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 hover:underline"
                >
                  Visit {name}.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Expandable Content */}
              {expandedCards.includes(index) && (
                <div className="border-t pt-6 mt-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Join developers, innovators, and food system experts in {city} to build {name} - a key component of
                    the regenerative food ecosystem.
                  </p>

                  <div className="text-center py-4">
                    <div className="text-2xl font-bold text-gray-900">{participants}</div>
                    <div className="text-sm text-gray-600">Expected Participants</div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Link href="/apply-hackathon">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${layerGradients[layer as keyof typeof layerGradients]} text-white hover:shadow-lg`}
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Apply for Hackathon
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Toggle Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
                >
                  {expandedCards.includes(index) ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Learn More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Empty space for alternating layout */}
      <div className="w-5/12" />
    </div>
  )
}

export default function SystemsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const systems = [
    {
      version: "v0.1",
      name: "EatoGlobal",
      layer: "SOIL",
      description:
        "The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where anyone can contribute, co-create, and help build the future of food.",
      slug: "eatoglobal",
      launchDate: "September 2025",
      quarter: "September 2025",
      city: "Copenhagen",
      participants: "1000+ global contributors",
      website: "https://eatoglobal.com",
    },
    {
      version: "v1.0",
      name: "EatoAgent",
      layer: "SEED",
      description:
        "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions.",
      slug: "eatoagent",
      launchDate: "October 2025",
      quarter: "October 2025",
      city: "Berlin",
      participants: "800+ AI developers",
      website: "https://eatoagent.com",
    },
    {
      version: "v2.0",
      name: "EatoIndex",
      layer: "POLLINATION",
      description:
        "A real-time financial index that ranks and funds food based on health, community, and environmental value — aligning capital with regeneration.",
      slug: "eatoindex",
      launchDate: "November 2025",
      quarter: "November 2025",
      city: "New York",
      participants: "1200+ fintech developers",
      website: "https://eatoindex.com",
    },
    {
      version: "v3.0",
      name: "EatoVerse",
      layer: "ROOT",
      description:
        "The digital twin of our food future — where national systems are prototyped in virtual environments before real-world rollout.",
      slug: "eatoverse",
      launchDate: "December 2025",
      quarter: "December 2025",
      city: "Dubai",
      participants: "900+ metaverse developers",
      website: "https://eatoverse.com",
    },
    {
      version: "v4.0",
      name: "EatoBotics",
      layer: "SPROUT",
      description:
        "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration.",
      slug: "eatobotics",
      launchDate: "January 2026",
      quarter: "January 2026",
      city: "Tokyo",
      participants: "750+ robotics engineers",
      website: "https://eatobotics.com",
    },
    {
      version: "v5.0",
      name: "EatoTransit",
      layer: "FLOW",
      description:
        "A clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem.",
      slug: "eatotransit",
      launchDate: "February 2026",
      quarter: "February 2026",
      city: "Detroit",
      participants: "650+ logistics developers",
      website: "https://eatotransit.com",
    },
    {
      version: "v6.0",
      name: "EatoAI",
      layer: "MYCELIUM",
      description:
        "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time.",
      slug: "eatoai",
      launchDate: "March 2026",
      quarter: "March 2026",
      city: "Paris",
      participants: "1100+ AI researchers",
      website: "https://eatoai.com",
    },
    {
      version: "v7.0",
      name: "EatoFund",
      layer: "CROP",
      description:
        "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world.",
      slug: "eatofund",
      launchDate: "April 2026",
      quarter: "April 2026",
      city: "London",
      participants: "950+ fintech innovators",
      website: "https://eatofund.com",
    },
    {
      version: "v8.0",
      name: "EatoSystem",
      layer: "HARVEST",
      description:
        "The full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure.",
      slug: "eatosystem",
      launchDate: "May 2026",
      quarter: "May 2026",
      city: "Amsterdam",
      participants: "1300+ system architects",
      website: "https://eatosystem.com",
    },
    {
      version: "v9.0",
      name: "EatoGov",
      layer: "REGENERATION",
      description:
        "The governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure.",
      slug: "eatogov",
      launchDate: "June 2026",
      quarter: "June 2026",
      city: "Singapore",
      participants: "800+ policy developers",
      website: "https://eatogov.com",
    },
    {
      version: "v10.0",
      name: "EatoSecure",
      layer: "CANOPY",
      description:
        "The global food security program that ensures every individual on earth will have secure, sustained access to food.",
      slug: "eatosecure",
      launchDate: "July 2026",
      quarter: "July 2026",
      city: "Rome",
      participants: "1000+ security experts",
      website: "https://eatosecure.com",
    },
    {
      version: "v11.0",
      name: "EatoFoundation",
      layer: "SANCTUARY",
      description:
        "The global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations.",
      slug: "eatofoundation",
      launchDate: "September 2026",
      quarter: "September 2026",
      city: "Geneva",
      participants: "1500+ foundation builders",
      website: "https://eatofoundation.com",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white overflow-x-hidden"
      aria-labelledby="systems-section-title"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-green-200">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-800 font-semibold text-sm sm:text-base break-words">
              Interactive Systems & Hackathons
            </span>
          </div>
          <h2
            id="systems-section-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 px-4 sm:px-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600 break-words">
              12 EatoSystems & Hackathons
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 sm:px-0 break-words">
            From Soil to Sanctuary — Explore our interconnected ecosystem of regenerative food systems and join the
            global hackathon series.
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="relative">
            <div
              className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-green-500 via-orange-500 to-green-500"
              aria-hidden="true"
            />
            {systems.map((system, index) => (
              <SystemCard
                key={system.slug}
                version={system.version}
                name={system.name}
                layer={system.layer}
                description={system.description}
                slug={system.slug}
                index={index}
                isVisible={isVisible}
                launchDate={system.launchDate}
                quarter={system.quarter}
                city={system.city}
                participants={system.participants}
                website={system.website}
              />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eatosystems">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-full font-semibold text-base sm:text-lg hover:from-green-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                aria-label="Navigate to explore all EatoSystems in detail"
              >
                <span className="flex items-center justify-center gap-2 break-words">
                  Explore All Systems <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                </span>
              </button>
            </Link>
            <Link href="/hack">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-full font-semibold text-base sm:text-lg hover:from-orange-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                aria-label="Navigate to hackathon series page"
              >
                <span className="flex items-center justify-center gap-2 break-words">
                  Join Hackathons <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
