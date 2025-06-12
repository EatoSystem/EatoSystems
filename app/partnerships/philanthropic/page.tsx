"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  BarChart3,
  Zap,
  Users,
  Lightbulb,
  Shield,
  Target,
  Leaf,
} from "lucide-react"

export default function PhilanthropicPartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/diverse-community-sustainable-agriculture.png"
            alt="Philanthropic partnerships in sustainable agriculture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-6 lg:pr-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-200 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">
                  Philanthropic & Foundation Partnerships
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Philanthropic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-blue-200 to-green-300">
                  Impact
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl leading-relaxed mb-6 sm:mb-8">
                Our mission is for global philanthropists like Jeff Bezos, Steve Ballmer, and leading foundations to
                support EatoSystems. Partner with us to build the regenerative agriculture platform that will enable 12
                specialized systems to transform global food systems and create lasting environmental impact.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white border-none px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <Link href="#impact-opportunities" className="flex items-center justify-center w-full">
                    <span className="truncate">Explore Impact</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <Link href="#contact" className="flex items-center justify-center w-full">
                    <span className="truncate">Schedule Discussion</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Philanthropic Impact Drivers</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Global food security transformation",
                  "Climate change mitigation at scale",
                  "Rural community empowerment",
                  "Sustainable development acceleration",
                  "Environmental restoration impact",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-white/90 text-sm sm:text-base break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Philanthropists Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Philanthropic Leaders We're Seeking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for visionary philanthropists and foundations to join us in building the world's first
              comprehensive regenerative agriculture platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                category: "Technology Philanthropists",
                leaders: ["Jeff Bezos", "Bill Gates", "Mark Zuckerberg"],
                icon: <Zap className="h-12 w-12 text-blue-500" />,
                contribution: "Technology expertise, innovation funding, global scaling capabilities",
                systems: ["EatoAI", "EatoAgent", "EatoBotics"],
              },
              {
                category: "Climate & Environment",
                leaders: ["Michael Bloomberg", "Tom Steyer", "Laurene Powell Jobs"],
                icon: <Leaf className="h-12 w-12 text-green-500" />,
                contribution: "Climate solutions funding, environmental expertise, policy influence",
                systems: ["EatoSystem", "EatoSecure", "EatoFoundation"],
              },
              {
                category: "Global Health & Development",
                leaders: ["Melinda French Gates", "MacKenzie Scott", "Pierre Omidyar"],
                icon: <Globe className="h-12 w-12 text-purple-500" />,
                contribution: "Global development expertise, health systems knowledge, community networks",
                systems: ["EatoVerse", "EatoCultures", "EatoGov"],
              },
              {
                category: "Business & Finance",
                leaders: ["Steve Ballmer", "Warren Buffett", "Ray Dalio"],
                icon: <BarChart3 className="h-12 w-12 text-orange-500" />,
                contribution: "Financial systems expertise, business networks, scaling strategies",
                systems: ["EatoFund", "EatoIndex", "EatoTransit"],
              },
              {
                category: "Education & Knowledge",
                leaders: ["Priscilla Chan", "Reed Hastings", "John Arnold"],
                icon: <Lightbulb className="h-12 w-12 text-teal-500" />,
                contribution: "Educational platforms, knowledge systems, research funding",
                systems: ["EatoAgent", "EatoVerse", "EatoCultures"],
              },
              {
                category: "Social Impact",
                leaders: ["Oprah Winfrey", "George Soros", "Charles Koch"],
                icon: <Users className="h-12 w-12 text-red-500" />,
                contribution: "Social networks, community engagement, advocacy platforms",
                systems: ["EatoCultures", "EatoFoundation", "EatoGov"],
              },
            ].map((sector, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{sector.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{sector.category}</h3>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Target Philanthropists:</div>
                  <div className="text-sm text-blue-600 font-medium">{sector.leaders.join(", ")}</div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{sector.contribution}</p>
                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Relevant Systems:</div>
                  <div className="text-sm text-gray-500">{sector.systems.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Opportunities Section */}
      <section id="impact-opportunities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Impact Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways for philanthropists to create transformative impact and support EatoSystems development
              through strategic giving and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Heart className="h-12 w-12 text-red-500" />,
                title: "Strategic Funding",
                description:
                  "Provide transformative funding to accelerate platform development, research initiatives, and global deployment of regenerative agriculture systems.",
                examples: ["Platform development", "Research grants", "Global deployment", "Innovation funding"],
                value: "Financial Impact",
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
                title: "Knowledge & Expertise",
                description:
                  "Share deep expertise, research insights, and best practices to enhance platform capabilities and global effectiveness.",
                examples: ["Domain expertise", "Research insights", "Best practices", "Strategic guidance"],
                value: "Intellectual Capital",
              },
              {
                icon: <Users className="h-12 w-12 text-green-500" />,
                title: "Network Access",
                description:
                  "Leverage philanthropic networks, partnerships, and global connections to accelerate platform adoption and impact.",
                examples: ["Philanthropic networks", "Global partnerships", "Community access", "Advocacy platforms"],
                value: "Network & Reach",
              },
              {
                icon: <Globe className="h-12 w-12 text-blue-500" />,
                title: "Global Implementation",
                description:
                  "Support worldwide deployment through international networks, local expertise, and regional implementation capabilities.",
                examples: ["Global deployment", "Local partnerships", "Regional expertise", "Implementation support"],
                value: "Global Scaling",
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-500" />,
                title: "Policy & Advocacy",
                description:
                  "Influence policy development, regulatory frameworks, and advocacy initiatives to create systemic change.",
                examples: ["Policy influence", "Regulatory support", "Advocacy campaigns", "Systemic change"],
                value: "Policy Impact",
              },
              {
                icon: <Target className="h-12 w-12 text-teal-500" />,
                title: "Innovation Collaboration",
                description:
                  "Collaborate on cutting-edge research, innovation initiatives, and breakthrough solutions for global challenges.",
                examples: [
                  "Research collaboration",
                  "Innovation labs",
                  "Breakthrough solutions",
                  "Technology transfer",
                ],
                value: "Innovation Impact",
              },
            ].map((opportunity, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{opportunity.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Examples:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.examples.map((example, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-blue-600">{opportunity.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Philanthropic Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible philanthropic models designed to align with your giving priorities and impact objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Transformational Philanthropist */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 border border-green-200">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transformational Philanthropist</h3>
              <p className="text-green-700 font-medium mb-2">$50M+ contribution</p>
              <p className="text-gray-600 mb-6">
                Comprehensive philanthropic partnership with global impact, strategic collaboration, and
                transformational change.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Global platform transformation",
                  "Strategic advisory role",
                  "Executive partnership committee",
                  "Global co-advocacy opportunities",
                  "Priority access to all systems",
                  "Legacy impact recognition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                Explore Transformational Impact
              </Button>
            </div>

            {/* Catalytic Philanthropist */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-xl p-8 border border-blue-200 transform scale-105">
              <div className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
                Most Impactful
              </div>
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Catalytic Philanthropist</h3>
              <p className="text-blue-700 font-medium mb-2">$10M-$50M contribution</p>
              <p className="text-gray-600 mb-6">
                Focused philanthropic partnership with significant impact, strategic collaboration, and catalytic change
                across multiple systems.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-system impact funding",
                  "Strategic collaboration",
                  "Knowledge sharing programs",
                  "Network collaboration",
                  "Innovation lab access",
                  "Impact measurement partnership",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Explore Catalytic Partnership</Button>
            </div>

            {/* Impact Philanthropist */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 border border-purple-200">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Impact Philanthropist</h3>
              <p className="text-purple-700 font-medium mb-2">$1M-$10M contribution</p>
              <p className="text-gray-600 mb-6">
                Foundational philanthropic partnership with targeted impact, specific system support, and meaningful
                change creation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Targeted system funding",
                  "Specific impact focus",
                  "Network access",
                  "Knowledge sharing",
                  "Implementation support",
                  "Impact recognition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                Explore Impact Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Global Transformation Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in creating the world's most comprehensive regenerative agriculture platform with measurable
              global impact for humanity and the planet.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  value: "2B+",
                  label: "People Impacted",
                  description: "Transforming food systems for billions worldwide",
                },
                {
                  value: "500M",
                  label: "Farmers Supported",
                  description: "Empowering smallholder farmers globally",
                },
                {
                  value: "100M",
                  label: "Hectares Restored",
                  description: "Regenerating degraded agricultural land",
                },
                {
                  value: "50%",
                  label: "Emission Reduction",
                  description: "Reducing agricultural carbon footprint",
                },
              ].map((metric, i) => (
                <div key={i} className="text-center bg-gray-50 p-6 rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The 12 EatoSystems Platform</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "EatoCultures",
                  "EatoAgent",
                  "EatoIndex",
                  "EatoVerse",
                  "EatoBotics",
                  "EatoAI",
                  "EatoFund",
                  "EatoSystem",
                  "EatoGov",
                  "EatoTransit",
                  "EatoSecure",
                  "EatoFoundation",
                ].map((system, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-medium text-gray-800">{system}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Start Your Philanthropic Partnership</h2>
            <p className="text-xl text-white/90 mb-10">
              Connect with our philanthropic partnerships team to explore how your giving can create transformative
              global impact through the EatoSystems platform.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-white/90 mb-1">
                      Role/Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60"
                      placeholder="Your role"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60"
                      placeholder="your.email@foundation.org"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-white/90 mb-1">
                      Organization/Foundation
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60"
                      placeholder="Foundation or organization name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="focus-area" className="block text-sm font-medium text-white/90 mb-1">
                      Primary Focus Area
                    </label>
                    <select
                      id="focus-area"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
                    >
                      <option value="" className="bg-green-800">
                        Select focus area
                      </option>
                      <option value="climate-environment" className="bg-green-800">
                        Climate & Environment
                      </option>
                      <option value="global-health" className="bg-green-800">
                        Global Health & Development
                      </option>
                      <option value="education" className="bg-green-800">
                        Education & Knowledge
                      </option>
                      <option value="social-impact" className="bg-green-800">
                        Social Impact
                      </option>
                      <option value="technology" className="bg-green-800">
                        Technology & Innovation
                      </option>
                      <option value="other" className="bg-green-800">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="partnership-type" className="block text-sm font-medium text-white/90 mb-1">
                      Partnership Interest
                    </label>
                    <select
                      id="partnership-type"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white"
                    >
                      <option value="" className="bg-green-800">
                        Select type
                      </option>
                      <option value="transformational" className="bg-green-800">
                        Transformational Philanthropist
                      </option>
                      <option value="catalytic" className="bg-green-800">
                        Catalytic Philanthropist
                      </option>
                      <option value="impact" className="bg-green-800">
                        Impact Philanthropist
                      </option>
                      <option value="exploring" className="bg-green-800">
                        Still exploring
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="impact-goals" className="block text-sm font-medium text-white/90 mb-1">
                    Impact Goals & Interests
                  </label>
                  <textarea
                    id="impact-goals"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-white/60"
                    placeholder="Describe your philanthropic goals and how EatoSystems aligns with your mission"
                  ></textarea>
                </div>
                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Schedule Impact Discussion
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
