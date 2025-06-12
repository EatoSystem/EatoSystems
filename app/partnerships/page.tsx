import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Leaf,
  Users,
  Zap,
  Target,
  TrendingUp,
  Building2,
  Heart,
  Cpu,
} from "lucide-react"

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-green-800/95 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/corporate-partnership-sanctuary.png"
            alt="Global Technology and Philanthropic Partnerships"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-200 flex-shrink-0" />
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg">
                Global Technology & Philanthropic Alliance
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-green-200 to-blue-300">
                Global Food Systems
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-12 font-medium px-2">
              Join foundations, corporations, and philanthropic organizations in supporting EatoSystems. Partner with us
              to build the regenerative agriculture platform that will enable 12 specialized systems to transform global
              food systems and create lasting environmental impact.
            </p>

            {/* Target Partners Note */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 max-w-4xl mx-auto border border-white/20">
              <p className="text-white/90 text-base sm:text-lg font-medium mb-3 sm:mb-4">
                <strong className="text-white">We seek visionary partners:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Technology Leaders</h4>
                  <p className="text-white/80 text-sm sm:text-base break-words">
                    Google, Microsoft, NVIDIA, Amazon, Apple, Meta, Tesla, and other innovation-driven corporations
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Philanthropic Visionaries</h4>
                  <p className="text-white/80 text-sm sm:text-base break-words">
                    Jeff Bezos, Steve Ballmer, Bill Gates, Elon Musk, and other high-impact philanthropists
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6 justify-center px-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
              >
                <Link href="#partnership-types" className="flex items-center justify-center w-full">
                  <span className="truncate">Explore Partnerships</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl rounded-full w-full sm:w-auto"
              >
                <Link href="#contact" className="flex items-center justify-center w-full">
                  <span className="truncate">Schedule Meeting</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Vision */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
              The $10 Trillion Opportunity
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Agriculture represents the world's largest industry. EatoSystems will revolutionize this sector through
              collaborative partnerships, creating unprecedented value while solving humanity's greatest challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20">
            {[
              {
                icon: <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-blue-500" />,
                number: "$10T",
                label: "Global Agriculture Market",
                description: "Total addressable market opportunity",
              },
              {
                icon: <Users className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />,
                number: "3.5B",
                label: "People in Agriculture",
                description: "Workforce to be transformed",
              },
              {
                icon: <Leaf className="h-12 w-12 sm:h-16 sm:w-16 text-orange-500" />,
                number: "30%",
                label: "Emission Reduction",
                description: "Climate impact potential",
              },
              {
                icon: <TrendingUp className="h-12 w-12 sm:h-16 sm:w-16 text-purple-500" />,
                number: "100x",
                label: "Impact Multiplier",
                description: "For strategic partnerships",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6 flex justify-center">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 break-words">{stat.label}</div>
                <div className="text-sm sm:text-base text-gray-600 break-words">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
              Partnership Types
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Two distinct pathways for creating transformational impact through technology and philanthropy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-7xl mx-auto">
            {/* Corporate Partnerships */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl overflow-hidden border border-blue-200">
              <div className="p-8 sm:p-10">
                <div className="bg-blue-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                  <Cpu className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Corporate Partnerships
                </h3>
                <p className="text-gray-700 text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                  Technology leaders contributing innovation, expertise, and resources to accelerate global food system
                  transformation.
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                    Partnership Contributions:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Technology platforms & infrastructure",
                      "AI/ML expertise & development resources",
                      "Cloud computing & data analytics",
                      "Engineering talent & knowledge sharing",
                      "Global distribution networks",
                      "Research & development collaboration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Target Partners:</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                    Google, Microsoft, NVIDIA, Amazon, Apple, Meta, Tesla, Intel, Salesforce, and other technology
                    innovators
                  </p>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg py-3 sm:py-4">
                  <Link href="/partnerships/corporate" className="w-full text-center">
                    <span className="truncate">Explore Corporate</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Philanthropic Partnerships */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-2xl overflow-hidden border border-green-200">
              <div className="p-8 sm:p-10">
                <div className="bg-green-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Philanthropic Partnerships
                </h3>
                <p className="text-gray-700 text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                  Visionary philanthropists and foundations funding global transformation through regenerative
                  agriculture and sustainable food systems.
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                    Partnership Contributions:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Strategic funding for system development",
                      "Global implementation support",
                      "Community outreach & education",
                      "Policy advocacy & influence",
                      "Network access & partnerships",
                      "Long-term sustainability commitment",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Target Partners:</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 break-words">
                    Jeff Bezos, Steve Ballmer, Bill Gates, Elon Musk, MacKenzie Scott, and other transformational
                    philanthropists
                  </p>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg py-3 sm:py-4">
                  <Link href="/partnerships/philanthropic" className="w-full text-center">
                    <span className="truncate">Explore Philanthropic</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Contribution Tiers */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
              Partnership Contribution Levels
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Flexible partnership structures designed to maximize impact through diverse forms of contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 max-w-7xl mx-auto">
            {/* Catalyst Partner */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <div className="bg-blue-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Catalyst Partner</h3>
              <p className="text-blue-700 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">$10M - $50M Value</p>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Strategic partnership through technology contribution, funding, or combined value delivery for targeted
                system development.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "3-5 EatoSystems co-development",
                  "Technology platform integration",
                  "Dedicated technical collaboration",
                  "Executive advisory participation",
                  "Global implementation support",
                  "Knowledge sharing & training",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg py-3 sm:py-4">
                <span className="truncate">Explore Catalyst</span>
              </Button>
            </div>

            {/* Visionary Partner */}
            <div className="bg-white rounded-3xl shadow-3xl p-8 sm:p-10 border border-gray-200 transform scale-105 z-10">
              <div className="bg-green-500 text-white text-xs font-bold uppercase py-2 px-3 sm:px-4 rounded-full inline-block mb-4 sm:mb-6">
                Recommended for Tech Giants
              </div>
              <div className="bg-green-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Visionary Partner</h3>
              <p className="text-green-700 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">$50M - $250M Value</p>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Comprehensive platform partnership through major technology contribution, funding, or hybrid value
                delivery for global transformation.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Full 12-system platform access",
                  "Global implementation leadership",
                  "Technology co-development rights",
                  "Board advisory representation",
                  "Joint research initiatives",
                  "Global brand collaboration",
                  "Policy influence & development",
                  "Network expansion opportunities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg py-3 sm:py-4">
                <span className="truncate">Explore Visionary</span>
              </Button>
            </div>

            {/* Transformational Partner */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <div className="bg-purple-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Transformational Partner</h3>
              <p className="text-purple-700 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">$250M+ Value</p>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Ultimate partnership for philanthropic visionaries and technology leaders seeking to transform global
                food systems at unprecedented scale.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Platform co-development leadership",
                  "Global foundation collaboration",
                  "Multi-decade impact commitment",
                  "Executive leadership roles",
                  "Legacy recognition opportunities",
                  "Global summit hosting rights",
                  "Policy & regulatory influence",
                  "Humanitarian impact leadership",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-base sm:text-lg py-3 sm:py-4">
                <span className="truncate">Explore Transformational</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration Opportunities */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
              Technology Integration Opportunities
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Leverage your core technologies within the EatoSystems platform for unprecedented global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
            {[
              {
                company: "Cloud & AI Leaders",
                examples: "Google, Microsoft, Amazon",
                icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />,
                opportunities: [
                  "AI/ML model development for agriculture",
                  "Global cloud infrastructure deployment",
                  "Edge computing for farm operations",
                  "Data analytics platform integration",
                ],
                color: "blue",
              },
              {
                company: "Hardware & Semiconductor",
                examples: "NVIDIA, Intel, Apple",
                icon: <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />,
                opportunities: [
                  "Agricultural GPU computing solutions",
                  "IoT sensor network development",
                  "Autonomous farming equipment",
                  "Precision agriculture hardware",
                ],
                color: "green",
              },
              {
                company: "Platform & Software",
                examples: "Meta, Tesla, Salesforce",
                icon: <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
                opportunities: [
                  "Social impact platform development",
                  "Autonomous agricultural systems",
                  "CRM for agricultural stakeholders",
                  "Virtual reality training systems",
                ],
                color: "purple",
              },
            ].map((category, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6">{category.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{category.company}</h3>
                <p className="text-gray-600 font-medium mb-4 sm:mb-6 text-sm sm:text-base break-words">
                  {category.examples}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {category.opportunities.map((opportunity, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle
                        className={`h-4 w-4 sm:h-5 sm:w-5 text-${category.color}-500 mr-2 sm:mr-3 mt-1 flex-shrink-0`}
                      />
                      <span className="text-gray-700 text-sm sm:text-base break-words">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philanthropic Impact Framework */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900">
              Philanthropic Impact Framework
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Create unprecedented global impact through strategic philanthropic contribution to regenerative
              agriculture transformation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              {[
                {
                  title: "Global Food Security",
                  description: "Transform food systems to feed 10 billion people sustainably by 2050",
                  impact: "2.5B people reached",
                  icon: <Users className="h-12 w-12 sm:h-16 sm:w-16 text-blue-500" />,
                },
                {
                  title: "Climate Regeneration",
                  description: "Sequester 50 gigatons of CO2 through regenerative agriculture practices",
                  impact: "50GT CO2 sequestered",
                  icon: <Leaf className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />,
                },
                {
                  title: "Economic Transformation",
                  description: "Create $1 trillion in new economic value for rural communities globally",
                  impact: "$1T economic value",
                  icon: <TrendingUp className="h-12 w-12 sm:h-16 sm:w-16 text-orange-500" />,
                },
                {
                  title: "Technology Democratization",
                  description: "Provide advanced agricultural technology access to 500M smallholder farmers",
                  impact: "500M farmers empowered",
                  icon: <Globe className="h-12 w-12 sm:h-16 sm:w-16 text-purple-500" />,
                },
              ].map((area, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                  <div className="mb-4 sm:mb-6 flex justify-center">{area.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 break-words">{area.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base break-words">
                    {area.description}
                  </p>
                  <div className="text-lg sm:text-xl font-bold text-gray-800">{area.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-900 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Executive Partnership Inquiry
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12">
              Connect directly with our executive team to explore transformational partnership opportunities.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-white/20">
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="name" className="block text-base sm:text-lg font-medium text-white/90 mb-2">
                      Executive Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg placeholder-white/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="title" className="block text-base sm:text-lg font-medium text-white/90 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg placeholder-white/60"
                      placeholder="CEO, CTO, Chief Philanthropy Officer, etc."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label htmlFor="organization" className="block text-base sm:text-lg font-medium text-white/90 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg placeholder-white/60"
                      placeholder="Company or Foundation name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contribution-range"
                      className="block text-base sm:text-lg font-medium text-white/90 mb-2"
                    >
                      Contribution Range
                    </label>
                    <select
                      id="contribution-range"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg"
                    >
                      <option value="" className="bg-blue-800">
                        Select contribution range
                      </option>
                      <option value="10m-50m" className="bg-blue-800">
                        $10M - $50M (Catalyst)
                      </option>
                      <option value="50m-250m" className="bg-blue-800">
                        $50M - $250M (Visionary)
                      </option>
                      <option value="250m+" className="bg-blue-800">
                        $250M+ (Transformational)
                      </option>
                      <option value="technology" className="bg-blue-800">
                        Technology & Expertise
                      </option>
                      <option value="exploring" className="bg-blue-800">
                        Exploring options
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="focus-area" className="block text-base sm:text-lg font-medium text-white/90 mb-2">
                    Primary Interest
                  </label>
                  <select
                    id="focus-area"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg"
                  >
                    <option value="" className="bg-blue-800">
                      Select primary interest
                    </option>
                    <option value="technology-integration" className="bg-blue-800">
                      Technology Integration & Co-development
                    </option>
                    <option value="global-impact" className="bg-blue-800">
                      Global Philanthropic Impact
                    </option>
                    <option value="knowledge-sharing" className="bg-blue-800">
                      Knowledge Sharing & Collaboration
                    </option>
                    <option value="climate-solutions" className="bg-blue-800">
                      Climate Solutions & Sustainability
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-base sm:text-lg font-medium text-white/90 mb-2">
                    Partnership Vision
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-base sm:text-lg placeholder-white/60"
                    placeholder="Describe your organization's vision for transforming global food systems and how you see this partnership creating unprecedented impact through technology, funding, knowledge, or networks"
                  ></textarea>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-lg sm:text-xl py-4 sm:py-6 font-semibold"
                >
                  <span className="truncate">Schedule Executive Meeting</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
