"use client"

import type React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  MapPin,
  Globe,
  Brain,
  DollarSign,
  Network,
  Bot,
  Truck,
  Zap,
  Sprout,
  Puzzle,
  Building,
  Shield,
  TreePine,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

const hackathons = [
  {
    id: 1,
    version: "v0.1",
    title: "EatoGlobal",
    system: "eatoglobal",
    layer: "SOIL",
    icon: Globe,
    city: "Copenhagen",
    date: "September 2025",
    image: "/images/systems/eatoglobal-soil.png",
    description:
      "The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where anyone can contribute, co-create, and help build the future of food.",
    participants: "1000+ global contributors",
    website: "https://eatoglobal.com",
    systemPage: "/eatoglobal",
  },
  {
    id: 2,
    version: "v1.0",
    title: "EatoAgent",
    system: "eatoagent",
    layer: "SEED",
    icon: Brain,
    city: "Berlin",
    date: "October 2025",
    image: "/images/systems/eatoagent-seed.png",
    description:
      "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions.",
    participants: "800+ AI developers",
    website: "https://eatoagent.com",
    systemPage: "/eatoagent",
  },
  {
    id: 3,
    version: "v2.0",
    title: "EatoIndex",
    system: "eatoindex",
    layer: "POLLINATION",
    icon: DollarSign,
    city: "New York",
    date: "November 2025",
    image: "/images/systems/eatoindex-pollination.png",
    description:
      "A real-time financial index that ranks and funds food based on health, community, and environmental value — aligning capital with regeneration.",
    participants: "1200+ fintech developers",
    website: "https://eatoindex.com",
    systemPage: "/eatoindex",
  },
  {
    id: 4,
    version: "v3.0",
    title: "EatoVerse",
    system: "eatoverse",
    layer: "ROOT",
    icon: Network,
    city: "Dubai",
    date: "December 2025",
    image: "/images/systems/eatoverse-root.png",
    description:
      "The digital twin of our food future — where national systems are prototyped in virtual environments before real-world rollout.",
    participants: "900+ metaverse developers",
    website: "https://eatoverse.com",
    systemPage: "/eatoverse",
  },
  {
    id: 5,
    version: "v4.0",
    title: "EatoBotics",
    system: "eatobotics",
    layer: "SPROUT",
    icon: Bot,
    city: "Tokyo",
    date: "January 2026",
    image: "/images/systems/eatobotics-sprout.png",
    description:
      "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration.",
    participants: "750+ robotics engineers",
    website: "https://eatobotics.com",
    systemPage: "/eatobotics",
  },
  {
    id: 6,
    version: "v5.0",
    title: "EatoTransit",
    system: "eatotransit",
    layer: "FLOW",
    icon: Truck,
    city: "Detroit",
    date: "February 2026",
    image: "/images/systems/eatotransit-flow.png",
    description:
      "A clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem.",
    participants: "650+ logistics developers",
    website: "https://eatotransit.com",
    systemPage: "/eatotransit",
  },
  {
    id: 7,
    version: "v6.0",
    title: "EatoAI",
    system: "eatoai",
    layer: "MYCELIUM",
    icon: Zap,
    city: "Paris",
    date: "March 2026",
    image: "/images/systems/eatoai-mycelium.png",
    description:
      "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time.",
    participants: "1100+ AI researchers",
    website: "https://eatoai.com",
    systemPage: "/eatoai",
  },
  {
    id: 8,
    version: "v7.0",
    title: "EatoFund",
    system: "eatofund",
    layer: "CROP",
    icon: Sprout,
    city: "London",
    date: "April 2026",
    image: "/images/systems/eatofund-crop.png",
    description:
      "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world.",
    participants: "950+ fintech innovators",
    website: "https://eatofund.com",
    systemPage: "/eatofund",
  },
  {
    id: 9,
    version: "v8.0",
    title: "EatoSystem",
    system: "eatosystem",
    layer: "HARVEST",
    icon: Puzzle,
    city: "Amsterdam",
    date: "May 2026",
    image: "/images/systems/eatosystem-harvest.png",
    description:
      "The full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure.",
    participants: "1300+ system architects",
    website: "https://eatosystem.com",
    systemPage: "/eatosystem",
  },
  {
    id: 10,
    version: "v9.0",
    title: "EatoGov",
    system: "eatogov",
    layer: "REGENERATION",
    icon: Building,
    city: "Singapore",
    date: "June 2026",
    image: "/images/systems/eatogov-regeneration.png",
    description:
      "The governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure.",
    participants: "800+ policy developers",
    website: "https://eatogov.com",
    systemPage: "/eatogov",
  },
  {
    id: 11,
    version: "v10.0",
    title: "EatoSecure",
    system: "eatosecure",
    layer: "CANOPY",
    icon: Shield,
    city: "Rome",
    date: "July 2026",
    image: "/images/systems/eatosecure-canopy.png",
    description:
      "The global food security program that ensures every individual on earth will have secure, sustained access to food.",
    participants: "1000+ security experts",
    website: "https://eatosecure.com",
    systemPage: "/eatosecure",
  },
  {
    id: 12,
    version: "v11.0",
    title: "EatoFoundation",
    system: "eatofoundation",
    layer: "SANCTUARY",
    icon: TreePine,
    city: "Geneva",
    date: "September 2026",
    image: "/images/systems/eatofoundation-sanctuary.png",
    description:
      "The global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations.",
    participants: "1500+ foundation builders",
    website: "https://eatofoundation.com",
    systemPage: "/eatofoundation",
  },
]

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

export default function HackathonPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])
  const [email, setEmail] = useState("")

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-green-500 to-orange-500 text-white border-0 text-lg font-medium">
            Hackathon Series
          </Badge>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent leading-tight">
            EatoSystems
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-gray-800">
            12 SYSTEMS • 12 CITIES • 12 MONTHS • 12 HACKATHONS
          </h2>

          <div className="flex items-center justify-center mb-12">
            <Globe className="w-16 h-16 text-green-600 mr-4" />
            <div className="text-left">
              <p className="text-xl font-semibold text-gray-800">Global Initiative</p>
              <p className="text-gray-600">Building regenerative food systems worldwide</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white px-8 py-4 text-lg"
            >
              Apply to Join
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg bg-transparent"
            >
              Partner with Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg bg-transparent"
            >
              View Timeline
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About the Series</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The EatoSystems Hackathon Series is a global initiative accelerating the development of a regenerative food
            system. Each month, a new city hosts a hackathon focused on one of the twelve interconnected systems —
            building everything from decentralized AI to food security infrastructure.
          </p>
        </div>
      </section>

      {/* Hackathons Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-green-100 to-orange-100 text-green-700 border-green-200 text-base font-semibold">
              Interactive Hackathons
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
                The 12 Hackathons
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From Soil to Sanctuary — Click each card to explore hackathon details and apply to participate in building
              the future of food.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-green-500 via-orange-500 to-green-500" />

            {hackathons.map((hackathon, index) => {
              const IconComponent = hackathon.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={hackathon.id}
                  className={`relative flex items-center mb-16 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-orange-500 rounded-full shadow-lg z-10" />

                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white shadow-lg">
                      <CardContent className="p-0">
                        {/* Image and System Info */}
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${layerColors[hackathon.layer as keyof typeof layerColors]}`}
                          />
                          <Image
                            src={hackathon.image || "/placeholder.svg"}
                            alt={hackathon.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              className={`bg-white/90 ${layerTextColors[hackathon.layer as keyof typeof layerTextColors]} font-medium`}
                            >
                              {hackathon.layer}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-white/90 border-gray-200 text-gray-600 font-mono">
                              {hackathon.version}
                            </Badge>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <div className="mb-4">
                            <h3
                              className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${layerGradients[hackathon.layer as keyof typeof layerGradients]}`}
                            >
                              {hackathon.title}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">{hackathon.city}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{hackathon.date}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-6 leading-relaxed">{hackathon.description}</p>

                          <div className="flex justify-center mb-4">
                            <Button
                              className={`bg-gradient-to-r ${layerGradients[hackathon.layer as keyof typeof layerGradients]} text-white hover:shadow-lg px-6 py-2`}
                            >
                              <Sparkles className="w-4 h-4 mr-2" />
                              Apply Now
                            </Button>
                          </div>

                          <div className="text-center">
                            <a
                              href={hackathon.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 hover:underline"
                            >
                              Visit {hackathon.title}.com <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          {/* Expandable Content */}
                          {expandedCards.includes(hackathon.id) && (
                            <div className="border-t pt-6 mt-6 space-y-4">
                              <p className="text-gray-600 leading-relaxed">
                                Join developers, innovators, and food system experts in {hackathon.city} to build{" "}
                                {hackathon.title} - a key component of the regenerative food ecosystem.
                              </p>

                              <div className="text-center py-4">
                                <div className="text-2xl font-bold text-gray-900">{hackathon.participants}</div>
                                <div className="text-sm text-gray-600">Expected Participants</div>
                              </div>

                              <div className="flex gap-3 justify-center pt-4">
                                <Button
                                  size="sm"
                                  className={`bg-gradient-to-r ${layerGradients[hackathon.layer as keyof typeof layerGradients]} text-white hover:shadow-lg`}
                                >
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  Apply for Hackathon
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                  <a
                                    href={hackathon.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    Visit Website <ExternalLink className="w-3 h-3" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          )}

                          {/* Toggle Button */}
                          <div className="flex justify-center mt-4">
                            <button
                              onClick={() => toggleCard(hackathon.id)}
                              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 font-medium"
                            >
                              {expandedCards.includes(hackathon.id) ? (
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
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Join the Movement</h2>
          <p className="text-xl mb-12 opacity-90">
            Be part of building the future of food systems. Apply for upcoming hackathons, partner with us, or sign up
            for early access.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Apply to Join</h3>
                <p className="text-white/80">Join developers and innovators building regenerative food systems</p>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="text-center">
                <Building className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Partner with Us</h3>
                <p className="text-white/80">Sponsor a city or collaborate on system development</p>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6">
              <div className="text-center">
                <TreePine className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Early Access</h3>
                <p className="text-white/80">Get updates and volunteer opportunities</p>
              </div>
            </Card>
          </div>

          {/* Email Signup Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-white/80">Get notified about hackathon applications and updates</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-white text-sm font-medium mb-2">
                  I'm interested in
                </label>
                <select id="interest" className="w-full p-2 rounded-md bg-white/20 border border-white/30 text-white">
                  <option value="">Select your interest</option>
                  <option value="participating">Participating in hackathons</option>
                  <option value="partnering">Partnering/Sponsoring</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="updates">General updates</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-white text-green-600 hover:bg-gray-100">
                Join the Movement
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}
