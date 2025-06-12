"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Users,
  Globe,
  DollarSign,
  Briefcase,
  Target,
  Award,
  TreePine,
  ArrowRight,
  Building2,
  Zap,
  Rocket,
} from "lucide-react"

export default function SupportPage() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("monthly")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const donationAmounts = [20, 40, 75, 200, 400, 800]

  // EatoSystems funding data - Starting fresh for launch
  const eatoSystemsData = {
    name: "EatoSystems",
    description: "Building the world's first comprehensive regenerative food system",
    raised: 0,
    goal: 10000000,
    supporters: 0,
    countries: 0,
    launchDate: "Coming Soon",
  }

  const impactAreas = [
    {
      title: "Platform Development",
      description:
        "Support the development of the core EatoSystems platform that will serve as the foundation for connecting farmers, researchers, and communities worldwide.",
      icon: <Target className="w-8 h-8" />,
      percentage: 40,
      color: "from-green-500 to-green-600",
      examples: [
        "Core platform architecture",
        "User interface development",
        "System integrations",
        "Data infrastructure",
      ],
    },
    {
      title: "Research & Innovation",
      description:
        "Fund cutting-edge research in regenerative agriculture, AI systems, and sustainable food technologies that will power future specialized systems.",
      icon: <Zap className="w-8 h-8" />,
      percentage: 20,
      color: "from-orange-500 to-orange-600",
      examples: ["Regenerative farming research", "AI algorithm development", "Technology innovation"],
    },
    {
      title: "Community & Partnerships",
      description:
        "Build relationships with farmers, organizations, and partners while creating educational content and support programs.",
      icon: <Users className="w-8 h-8" />,
      percentage: 20,
      color: "from-green-600 to-green-700",
      examples: ["Partner network building", "Farmer education programs", "Community outreach"],
    },
    {
      title: "Operations & Team",
      description:
        "Ensure sustainable operations, team growth, and strategic development to prepare for launching specialized systems.",
      icon: <Building2 className="w-8 h-8" />,
      percentage: 10,
      color: "from-orange-600 to-orange-700",
      examples: ["Team expansion", "Operational infrastructure", "Strategic planning"],
    },
  ]

  const milestones = [
    {
      amount: 1000000,
      title: "Platform Launch",
      description: "Launch EatoSystems platform with core features and initial partnerships",
      status: "upcoming",
    },
    {
      amount: 3000000,
      title: "Global Network",
      description: "Expand to 25 countries with 5,000 farmers and key partnerships",
      status: "upcoming",
    },
    {
      amount: 6000000,
      title: "Advanced Features",
      description: "Deploy AI systems, advanced analytics, and specialized tools",
      status: "upcoming",
    },
    {
      amount: 10000000,
      title: "Specialized Systems Ready",
      description: "EatoSystems fully operational, ready to launch 12 specialized systems",
      status: "upcoming",
    },
  ]

  const impactStats = [
    {
      number: "Launch",
      label: "Phase",
      description: "Getting ready to transform agriculture",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "12",
      label: "Future Systems",
      description: "Specialized systems planned for launch",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      number: "Global",
      label: "Reach",
      description: "Worldwide regenerative agriculture network",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "∞",
      label: "Potential",
      description: "Unlimited impact on food systems",
      icon: <TreePine className="w-6 h-6" />,
    },
  ]

  const calculateProgress = (raised, goal) => {
    return Math.round((raised / goal) * 100)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      notation: amount >= 1000000 ? "compact" : "standard",
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
          <Image
            src="/diverse-community-sustainable-agriculture.png"
            alt="Support EatoSystems - Diverse community working together in sustainable agriculture"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 text-center text-white">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 mb-8 sm:mb-12 border border-white/30">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-200" />
              <span className="text-white font-semibold text-base sm:text-lg">Support Our Mission</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              Support
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                EatoSystems
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/90">
                Today
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Support EatoSystems—the comprehensive platform that connects farmers, researchers, and communities
              worldwide. Your support helps us build and expand the operational foundation that enables 12 specialized
              systems to transform agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("support-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Become a Supporter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-green-600 border-white hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-5 text-lg rounded-full w-full sm:w-auto"
                onClick={() => {
                  document.getElementById("corporate-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Corporate Partnership
              </Button>
            </div>

            {/* Launch Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Launch Progress */}
      <section id="support-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Support Our Mission</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Be part of building and expanding EatoSystems. Your support helps us grow the platform that enables
              specialized systems to transform agriculture worldwide.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-2xl overflow-hidden rounded-3xl">
            <CardHeader className="text-center bg-gradient-to-r from-green-600 to-orange-600 text-white p-12">
              <CardTitle className="text-4xl mb-3">Support EatoSystems</CardTitle>
              <CardDescription className="text-green-100 text-xl">
                Be a supporter of the regenerative agriculture platform
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4 sm:p-8 md:p-12">
              {/* Donation Type Toggle */}
              <div className="mb-6 sm:mb-10">
                <div className="flex bg-gray-100 rounded-xl p-1 sm:p-2 mb-4 sm:mb-6">
                  <Button
                    variant={donationType === "monthly" ? "default" : "ghost"}
                    onClick={() => setDonationType("monthly")}
                    className="flex-1 py-3 sm:py-4 text-sm sm:text-lg rounded-lg px-2 sm:px-4"
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="truncate">Monthly Support</span>
                  </Button>
                  <Button
                    variant={donationType === "one-time" ? "default" : "ghost"}
                    onClick={() => setDonationType("one-time")}
                    className="flex-1 py-3 sm:py-4 text-sm sm:text-lg rounded-lg px-2 sm:px-4"
                  >
                    <span className="truncate">One-time Gift</span>
                  </Button>
                </div>
                {donationType === "monthly" && (
                  <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-700 font-semibold text-lg">
                      🌱 Monthly supporters receive exclusive updates and early platform access
                    </p>
                  </div>
                )}
              </div>

              {/* Amount Selection */}
              <div className="mb-6 sm:mb-10">
                <label className="block text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                  Select Your Support Amount
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={`h-12 sm:h-16 text-lg sm:text-xl font-semibold rounded-xl ${
                        selectedAmount === amount
                          ? "bg-gradient-to-r from-green-600 to-orange-600 text-white"
                          : "border-green-300 text-green-700 hover:bg-green-50"
                      }`}
                    >
                      €{amount}
                    </Button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className="pl-10 h-12 sm:h-16 text-lg border-green-300 focus:border-green-500 rounded-xl"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  <Input
                    placeholder="First Name"
                    className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                  />
                  <Input
                    placeholder="Last Name"
                    className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                />
                <Input
                  placeholder="Organization (Optional)"
                  className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
                <span className="truncate">
                  Support €{customAmount || selectedAmount} {donationType === "monthly" ? "Monthly" : "Now"}
                </span>
              </Button>

              <p className="text-sm text-gray-500 mt-4 sm:mt-6 text-center">
                🔒 Secure processing • Tax-deductible • Cancel anytime • supporter benefits
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section id="corporate-section" className="py-24 bg-white">
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden min-h-[600px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/corporate-partnership-sanctuary.png"
              alt="Corporate Partnership - Serene autumn forest sanctuary with flowing stream, representing sustainable partnership and natural harmony"
              fill
              className="object-cover"
            />
          </div>

          {/* Green to Orange Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-green-700/85 to-orange-600/90"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-green-500/30"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="mb-8 sm:mb-12">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
                  <Briefcase className="w-5 h-5 mr-3 text-orange-200" />
                  <span className="text-white font-semibold">Partnership Opportunities</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Philanthropic &
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                    Corporate Partnerships
                  </span>
                </h2>

                <p className="text-xl sm:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                  Join foundations, corporations, and philanthropic organizations in supporting EatoSystems. Partner
                  with us to build the regenerative agriculture platform that will enable 12 specialized systems to
                  transform global food systems and create lasting environmental impact.
                </p>
              </div>

              {/* Partnership Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">Partnership Recognition</h4>
                  <p className="text-white/90 leading-relaxed">
                    Be recognized as a key partner alongside leading foundations and corporations driving agricultural
                    transformation
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">Systems Impact</h4>
                  <p className="text-white/90 leading-relaxed">
                    Support the platform launch that enables transformative agricultural systems worldwide
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">Stakeholder Engagement</h4>
                  <p className="text-white/90 leading-relaxed">
                    Unite your stakeholders around meaningful platform development and measurable impact
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">Global Transformation</h4>
                  <p className="text-white/90 leading-relaxed">
                    Support the platform that will transform food systems across the entire world
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-green-600 px-4 sm:px-12 py-4 sm:py-6 text-base sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/partnerships")}
              >
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span className="truncate">Partnership Opportunities</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Get in Touch</h2>
            <p className="text-2xl text-gray-600">
              Have questions about becoming a supporter of EatoSystems? We'd love to hear from you.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-0 shadow-2xl overflow-hidden rounded-3xl">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  <Input
                    placeholder="Your Name"
                    className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                  />
                </div>
                <Input
                  placeholder="Organization"
                  className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                />
                <Input
                  placeholder="Subject"
                  className="h-12 sm:h-14 text-lg border-green-300 focus:border-green-500 rounded-xl"
                />
                <Textarea
                  placeholder="Tell us about your interest in becoming a supporter of EatoSystems..."
                  rows={4}
                  className="border-green-300 focus:border-green-500 text-lg rounded-xl"
                />
                <Button className="w-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 py-4 text-xl rounded-xl">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
