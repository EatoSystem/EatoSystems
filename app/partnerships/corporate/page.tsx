"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Building,
  BarChart3,
  Zap,
  Cpu,
  Cloud,
  Database,
  Network,
  Users,
  Lightbulb,
  Heart,
} from "lucide-react"

export default function CorporatePartnersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/corporate-sustainable-agriculture.png"
            alt="Corporate partnerships in sustainable agriculture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-8 md:mb-0 md:pr-6 lg:pr-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-200 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base">Technology & Corporate Partnerships</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Corporate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-green-200 to-blue-300">
                  Collaboration
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-2xl leading-relaxed mb-6 sm:mb-8">
                Our mission is for global corporations like Google, Microsoft, and NVIDIA to support EatoSystems.
                Partner with us to build the regenerative agriculture platform that will enable 12 specialized systems
                to transform global food systems and create lasting environmental impact.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white border-none px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <Link href="#collaboration-opportunities" className="flex items-center justify-center w-full">
                    <span className="truncate">Explore Collaboration</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <Link href="#contact" className="flex items-center justify-center w-full">
                    <span className="truncate">Schedule Call</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Partnership Value Drivers</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Technology integration & innovation",
                  "Global sustainability leadership",
                  "Knowledge sharing & collaboration",
                  "Network expansion & partnerships",
                  "Environmental impact at scale",
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

      {/* Target Corporations Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Technology Leaders We're Seeking
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for visionary technology corporations to join us in building the world's first comprehensive
              regenerative agriculture platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
            {[
              {
                category: "Cloud & Infrastructure",
                companies: ["Google Cloud", "Microsoft Azure", "Amazon AWS"],
                icon: <Cloud className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />,
                contribution: "Cloud infrastructure, data processing, global scaling capabilities",
                systems: ["EatoAI", "EatoSystem", "EatoIndex"],
              },
              {
                category: "AI & Machine Learning",
                companies: ["NVIDIA", "OpenAI", "Anthropic"],
                icon: <Cpu className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />,
                contribution: "AI models, GPU computing, machine learning expertise",
                systems: ["EatoAgent", "EatoAI", "EatoBotics"],
              },
              {
                category: "Enterprise Technology",
                companies: ["Salesforce", "Oracle", "SAP"],
                icon: <Database className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
                contribution: "Enterprise systems, CRM integration, business intelligence",
                systems: ["EatoIndex", "EatoTransit", "EatoSecure"],
              },
              {
                category: "Hardware & IoT",
                companies: ["Intel", "Qualcomm", "Cisco"],
                icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500" />,
                contribution: "IoT sensors, edge computing, connectivity solutions",
                systems: ["EatoBotics", "EatoSecure", "EatoSystem"],
              },
              {
                category: "Social & Collaboration",
                companies: ["Meta", "Slack", "Zoom"],
                icon: <Network className="h-10 w-10 sm:h-12 sm:w-12 text-teal-500" />,
                contribution: "Collaboration platforms, social networks, communication tools",
                systems: ["EatoCultures", "EatoVerse", "EatoFoundation"],
              },
              {
                category: "Financial Technology",
                companies: ["PayPal", "Stripe", "Square"],
                icon: <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />,
                contribution: "Payment processing, financial infrastructure, blockchain",
                systems: ["EatoFund", "EatoTransit", "EatoIndex"],
              },
            ].map((sector, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6">{sector.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 break-words">
                  {sector.category}
                </h3>
                <div className="mb-3 sm:mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Target Companies:</div>
                  <div className="text-sm text-blue-600 font-medium break-words">{sector.companies.join(", ")}</div>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm break-words">{sector.contribution}</p>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Relevant Systems:</div>
                  <div className="text-sm text-gray-500 break-words">{sector.systems.join(", ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities Section */}
      <section id="collaboration-opportunities" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Collaboration Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways for technology corporations to add value and support EatoSystems development through
              strategic collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Cpu className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />,
                title: "Technology Contribution",
                description:
                  "Provide cutting-edge technology, APIs, infrastructure, and technical expertise to accelerate platform development.",
                examples: [
                  "Cloud computing resources",
                  "AI/ML model access",
                  "API integrations",
                  "Technical consulting",
                ],
                value: "Technology & Infrastructure",
              },
              {
                icon: <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />,
                title: "Financial Support",
                description:
                  "Strategic funding to support platform development, research initiatives, and global deployment of regenerative agriculture systems.",
                examples: ["Development funding", "Research grants", "Deployment support", "Infrastructure investment"],
                value: "Financial Contribution",
              },
              {
                icon: <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />,
                title: "Knowledge Sharing",
                description:
                  "Share expertise, research, best practices, and industry insights to enhance platform capabilities and effectiveness.",
                examples: ["Technical expertise", "Industry research", "Best practices", "Innovation insights"],
                value: "Intellectual Capital",
              },
              {
                icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />,
                title: "Network Access",
                description:
                  "Leverage corporate networks, partnerships, and customer bases to accelerate platform adoption and global reach.",
                examples: ["Customer introductions", "Partner networks", "Distribution channels", "Market access"],
                value: "Network & Reach",
              },
              {
                icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
                title: "Strategic Collaboration",
                description:
                  "Joint development projects, co-innovation initiatives, and strategic partnerships to build next-generation solutions.",
                examples: ["Joint R&D projects", "Co-innovation labs", "Pilot programs", "Strategic alliances"],
                value: "Collaborative Innovation",
              },
              {
                icon: <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-teal-500" />,
                title: "Global Implementation",
                description:
                  "Support worldwide deployment through international networks, local expertise, and regional implementation capabilities.",
                examples: ["Global deployment", "Local partnerships", "Regional expertise", "Implementation support"],
                value: "Global Scaling",
              },
            ].map((opportunity, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6">{opportunity.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 break-words">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base break-words">{opportunity.description}</p>
                <div className="mb-3 sm:mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Examples:</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.examples.map((example, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="break-words">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="text-sm font-medium text-blue-600 break-words">{opportunity.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Partnership Tiers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible partnership models designed to align with your corporation's capabilities and strategic
              objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Strategic Technology Partner */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 sm:p-8 border border-blue-200">
              <div className="bg-blue-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Cpu className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Strategic Technology Partner</h3>
              <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">$5M+ value contribution</p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Comprehensive technology partnership with deep integration, co-development, and strategic collaboration.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Technology platform integration",
                  "Joint innovation projects",
                  "Executive partnership committee",
                  "Global co-marketing opportunities",
                  "Priority access to new systems",
                  "Strategic advisory role",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-3">
                <span className="truncate">Explore Strategic Partnership</span>
              </Button>
            </div>

            {/* Innovation Collaborator */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-xl p-6 sm:p-8 border border-green-200 transform scale-105">
              <div className="bg-green-500 text-white text-xs font-bold uppercase py-1 px-2 sm:px-3 rounded-full inline-block mb-3 sm:mb-4">
                Most Popular
              </div>
              <div className="bg-green-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Innovation Collaborator</h3>
              <p className="text-green-700 font-medium mb-2 text-sm sm:text-base">$1M-$5M value contribution</p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Focused collaboration on specific technologies and innovation initiatives with targeted system
                integration.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Targeted technology contribution",
                  "Co-development opportunities",
                  "Knowledge sharing programs",
                  "Network collaboration",
                  "Pilot program participation",
                  "Innovation lab access",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base py-3">
                <span className="truncate">Explore Innovation Partnership</span>
              </Button>
            </div>

            {/* Supporting Partner */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-6 sm:p-8 border border-purple-200">
              <div className="bg-purple-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Supporting Partner</h3>
              <p className="text-purple-700 font-medium mb-2 text-sm sm:text-base">$250K-$1M value contribution</p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Foundational partnership with specific contributions and collaboration opportunities to support platform
                development.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {[
                  "Specific technology contribution",
                  "Financial support",
                  "Network access",
                  "Knowledge sharing",
                  "Implementation support",
                  "Partnership recognition",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-sm sm:text-base py-3">
                <span className="truncate">Explore Supporting Partnership</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Global Transformation Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in creating the world's most comprehensive regenerative agriculture platform with measurable
              global impact.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {[
                {
                  value: "12",
                  label: "Specialized Systems",
                  description: "Comprehensive platform covering all aspects of regenerative agriculture",
                },
                {
                  value: "195",
                  label: "Countries Targeted",
                  description: "Global deployment across all nations for maximum impact",
                },
                {
                  value: "2B+",
                  label: "People Impacted",
                  description: "Transforming food systems for billions worldwide",
                },
                {
                  value: "$10T",
                  label: "Market Opportunity",
                  description: "Total addressable market for regenerative agriculture transformation",
                },
              ].map((metric, i) => (
                <div key={i} className="text-center bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-base sm:text-lg font-semibold text-gray-800 mb-1 break-words">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600 break-words">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                The 12 EatoSystems Platform
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
                  <div key={i} className="bg-white p-2 sm:p-3 rounded-lg shadow-sm text-center">
                    <div className="text-sm font-medium text-gray-800 break-words">{system}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Start Your Corporate Partnership
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10">
              Connect with our corporate partnerships team to explore how your corporation can contribute to and benefit
              from the EatoSystems platform.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-white/90 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 text-sm sm:text-base"
                      placeholder="Your title"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 text-sm sm:text-base"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-1">
                      Corporation
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 text-sm sm:text-base"
                      placeholder="Corporation name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-white/90 mb-1">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-sm sm:text-base"
                    >
                      <option value="" className="bg-blue-800">
                        Select sector
                      </option>
                      <option value="technology" className="bg-blue-800">
                        Technology
                      </option>
                      <option value="cloud-infrastructure" className="bg-blue-800">
                        Cloud & Infrastructure
                      </option>
                      <option value="ai-ml" className="bg-blue-800">
                        AI & Machine Learning
                      </option>
                      <option value="enterprise-software" className="bg-blue-800">
                        Enterprise Software
                      </option>
                      <option value="hardware-iot" className="bg-blue-800">
                        Hardware & IoT
                      </option>
                      <option value="fintech" className="bg-blue-800">
                        Financial Technology
                      </option>
                      <option value="other" className="bg-blue-800">
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-sm sm:text-base"
                    >
                      <option value="" className="bg-blue-800">
                        Select type
                      </option>
                      <option value="strategic-technology" className="bg-blue-800">
                        Strategic Technology Partner
                      </option>
                      <option value="innovation-collaborator" className="bg-blue-800">
                        Innovation Collaborator
                      </option>
                      <option value="supporting-partner" className="bg-blue-800">
                        Supporting Partner
                      </option>
                      <option value="exploring" className="bg-blue-800">
                        Still exploring
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contribution" className="block text-sm font-medium text-white/90 mb-1">
                    Potential Contributions
                  </label>
                  <textarea
                    id="contribution"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/60 text-sm sm:text-base"
                    placeholder="Describe how your corporation could contribute (technology, funding, knowledge, networks, etc.)"
                  ></textarea>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg py-3 sm:py-4"
                >
                  <span className="truncate">Schedule Partnership Discussion</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
