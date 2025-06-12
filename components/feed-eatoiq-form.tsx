"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Lightbulb,
  Sprout,
  Users,
  Building,
  Gamepad2,
  BarChart3,
  CheckCircle,
  ArrowLeft,
  Camera,
  Upload,
  ArrowRight,
  Zap,
  Heart,
  Target,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import NeuralNetworkCanvas from "./eatoiq-fallback"

const insightTypes = [
  {
    id: "idea",
    name: "💡 Breakthrough Idea",
    icon: Lightbulb,
    description: "Share a game-changing concept",
    placeholder: "I have an idea that could revolutionize how we grow food...",
    encouragement: "Your innovative thinking could spark the next agricultural revolution!",
    color: "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-300 hover:border-yellow-400",
    iconColor: "text-yellow-600",
  },
  {
    id: "observation",
    name: "🌱 Field Wisdom",
    icon: Sprout,
    description: "Share what you've witnessed firsthand",
    placeholder: "I've noticed something interesting about how crops respond to...",
    encouragement: "Your real-world observations are invaluable to farmers worldwide!",
    color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 hover:border-green-400",
    iconColor: "text-green-600",
  },
  {
    id: "community",
    name: "🤝 Community Knowledge",
    icon: Users,
    description: "Share traditional wisdom and practices",
    placeholder: "In our community, we've always done this amazing thing...",
    encouragement: "Your cultural knowledge preserves wisdom for future generations!",
    color: "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-400",
    iconColor: "text-blue-600",
  },
  {
    id: "enterprise",
    name: "🏢 Business Innovation",
    icon: Building,
    description: "Share sustainable business practices",
    placeholder: "Our company discovered a way to make farming more sustainable by...",
    encouragement: "Your business insights help scale sustainable practices globally!",
    color: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-300 hover:border-purple-400",
    iconColor: "text-purple-600",
  },
  {
    id: "minecraft",
    name: "🎮 Creative Vision",
    icon: Gamepad2,
    description: "Share innovative designs and models",
    placeholder: "I designed this amazing agricultural system that could work in real life...",
    encouragement: "Your creative designs inspire real-world implementations!",
    color: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-300 hover:border-orange-400",
    iconColor: "text-orange-600",
  },
  {
    id: "data",
    name: "📊 Research Insights",
    icon: BarChart3,
    description: "Share scientific findings and data",
    placeholder: "Our research shows that when we implement this approach...",
    encouragement: "Your research accelerates scientific progress for everyone!",
    color: "bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-300 hover:border-indigo-400",
    iconColor: "text-indigo-600",
  },
]

const regions = [
  "🌍 Global",
  "🇺🇸 North America",
  "🇧🇷 South America",
  "🇪🇺 Europe",
  "🌍 Africa",
  "🌏 Asia",
  "🇦🇺 Oceania",
  "🇮🇪 Ireland",
  "🇯🇵 Japan",
  "🇰🇪 Kenya",
  "🇺🇸 USA",
  "🇧🇷 Brazil",
  "🇮🇳 India",
  "🇦🇺 Australia",
  "🌐 Other",
]

const encouragingMessages = [
  "Your insight could help feed millions! 🌾",
  "You're contributing to global food security! 🌍",
  "Your knowledge matters to farmers worldwide! 👨‍🌾",
  "You're helping build a sustainable future! 🌱",
  "Your experience could solve real problems! ⚡",
]

export default function FeedEatoIQForm() {
  const [selectedType, setSelectedType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showEncouragement, setShowEncouragement] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    region: "",
    name: "",
    email: "",
    anonymous: false,
  })

  useEffect(() => {
    setIsVisible(true)

    // Rotate encouraging messages
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % encouragingMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Show encouragement when user starts typing
  useEffect(() => {
    if (formData.description.length > 10 && !showEncouragement) {
      setShowEncouragement(true)
    }
  }, [formData.description, showEncouragement])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const selectedInsightType = insightTypes.find((type) => type.id === selectedType)

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Success Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-orange-600">
            <div className="absolute inset-0 z-0">
              {!imageError && (
                <Image
                  src="/images/eatoiq-neural-network.png"
                  alt="EatoIQ Neural Network"
                  fill
                  className="object-cover opacity-80"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
              <div className="absolute inset-0 opacity-60">
                <NeuralNetworkCanvas />
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/40">
                <CheckCircle className="w-6 h-6 mr-3 text-green-200" />
                <span className="text-white font-bold text-lg">🎉 Your Knowledge is Now Global!</span>
              </div>

              <h1 className="font-bold mb-8 leading-tight tracking-tight">
                <span className="block text-6xl sm:text-7xl md:text-8xl text-white mb-4">Amazing!</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-light text-white/95">
                  You Just Made the World a Little Better
                </span>
              </h1>

              <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/95">
                Your insight is now part of a global intelligence that's helping farmers, researchers, and communities
                worldwide create a more sustainable food future. Thank you for sharing your knowledge! 🌍
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full"
                  asChild
                >
                  <Link href="/eatoiq">
                    <ArrowLeft className="mr-3 h-6 w-6" />
                    Explore EatoIQ
                  </Link>
                </Button>

                <Button
                  size="lg"
                  className="bg-orange-500 text-white border-3 border-orange-400 hover:bg-orange-600 hover:border-orange-500 px-10 py-6 text-xl font-bold rounded-full transition-all duration-300 shadow-2xl"
                  onClick={() => {
                    setIsSubmitted(false)
                    setSelectedType("")
                    setFormData({
                      title: "",
                      description: "",
                      region: "",
                      name: "",
                      email: "",
                      anonymous: false,
                    })
                  }}
                >
                  <Sparkles className="mr-3 h-6 w-6" />
                  Share Another Insight
                </Button>
              </div>

              {/* Celebration Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { number: "500+", label: "Ideas", description: "Turned into reality", icon: "🚀" },
                  { number: "120", label: "Countries", description: "Being helped", icon: "🌍" },
                  { number: "12k+", label: "Heroes", description: "Like you contributing", icon: "⭐" },
                  { number: "15", label: "Policies", description: "Changed for good", icon: "📜" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-white/90 leading-tight">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-orange-600">
          <div className="absolute inset-0 z-0">
            {!imageError && (
              <Image
                src="/images/eatoiq-neural-network.png"
                alt="EatoIQ Neural Network"
                fill
                className="object-cover opacity-90"
                priority
                onError={() => setImageError(true)}
              />
            )}
            <div className="absolute inset-0 opacity-70">
              <NeuralNetworkCanvas />
            </div>
          </div>
          {/* Lighter overlay to make image more visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <Link href="/eatoiq" className="inline-flex items-center text-white/90 hover:text-white mb-8 text-lg">
              <ArrowLeft className="w-5 h-5 mr-2" />← Back to EatoIQ
            </Link>

            <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-8 py-4 mb-10 border border-white/40">
              <Brain className="w-6 h-6 mr-3 text-orange-200" />
              <span className="text-white font-bold text-lg">🧠 Feed the Global Brain</span>
            </div>

            <h1 className="font-bold mb-8 leading-tight tracking-tight">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4">Your Knowledge</span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 mb-4">
                Changes Everything
              </span>
            </h1>

            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/95 font-medium">
              You have insights that could help millions of people eat better, farm smarter, and live sustainably.
              <br />
              <span className="text-yellow-300 font-bold">The world needs what you know! 🌍</span>
            </p>

            {/* Rotating encouraging messages */}
            <div className="mb-12 h-16 flex items-center justify-center">
              <div className="text-2xl font-bold text-yellow-300 animate-pulse">
                {encouragingMessages[currentMessage]}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-orange-400 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-lg"
                  >
                    {["👨‍🌾", "👩‍🔬", "🧑‍💻", "👩‍🌾", "🧑‍🔬"][i]}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center text-white text-sm font-bold border-3 border-white">
                  +12k
                </div>
              </div>
              <span className="text-white/90 ml-4 text-lg font-medium">
                <span className="font-bold text-yellow-300">12,458 knowledge heroes</span> worldwide
              </span>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-12 py-6 text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full border-3 border-yellow-300"
              onClick={() => {
                const formElement = document.getElementById("insight-form")
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Sparkles className="mr-3 h-7 w-7" />🚀 Share My Knowledge Now!
            </Button>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-gray-900">
                You Are a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">
                  Game Changer
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-orange-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium">
                Every insight you share creates ripples of positive change across the planet 🌊
              </p>
            </div>

            {/* Impact Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {[
                {
                  title: "🎯 Your Knowledge",
                  description: "Joins a global intelligence network",
                  icon: <Target className="w-12 h-12" />,
                  color: "text-green-600",
                  bg: "bg-green-100",
                },
                {
                  title: "🧠 AI Magic",
                  description: "Finds patterns and connections worldwide",
                  icon: <Brain className="w-12 h-12" />,
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                },
                {
                  title: "⚡ Real Impact",
                  description: "Solutions reach farmers and communities",
                  icon: <Zap className="w-12 h-12" />,
                  color: "text-orange-600",
                  bg: "bg-orange-100",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`${item.bg} p-6 rounded-full mb-6 ${item.color}`}>{item.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section id="insight-form" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              What's Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-600">
                Superpower
              </span>
              ?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Choose the type of amazing knowledge you want to share with the world 🌟
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Insight Type Selection */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insightTypes.map((type) => {
                  const IconComponent = type.icon
                  return (
                    <Card
                      key={type.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                        selectedType === type.id
                          ? "ring-4 ring-green-500 shadow-2xl scale-105"
                          : "hover:shadow-xl border-gray-200"
                      } ${type.color}`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <CardContent className="p-8">
                        <div className="text-center">
                          <div className={`inline-flex p-4 rounded-2xl bg-white shadow-lg mb-6 ${type.iconColor}`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h4>
                          <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                          {selectedType === type.id && (
                            <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-bold">✨ Selected!</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Form Fields */}
            {selectedType && selectedInsightType && (
              <Card className="shadow-2xl border-2 border-green-200">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl">
                    <div className={`p-4 rounded-2xl bg-white shadow-lg ${selectedInsightType.iconColor}`}>
                      <selectedInsightType.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedInsightType.name}</h3>
                      <p className="text-gray-600 text-lg">{selectedInsightType.encouragement}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <Label htmlFor="title" className="text-xl font-bold text-gray-900 mb-3 block">
                        🎯 Give your insight a catchy title
                      </Label>
                      <Input
                        id="title"
                        placeholder="Make it exciting! What's the big idea?"
                        value={formData.title}
                        onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                        className="text-xl p-6 border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Label htmlFor="description" className="text-xl font-bold text-gray-900 mb-3 block">
                        💭 Tell us all about it! (The more details, the better)
                      </Label>
                      <Textarea
                        id="description"
                        placeholder={selectedInsightType.placeholder}
                        rows={8}
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        className="text-lg p-6 border-2 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                        required
                      />

                      {/* Encouraging feedback */}
                      {showEncouragement && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 animate-bounce">
                          <div className="bg-green-500 text-white p-4 rounded-full shadow-xl">
                            <Sparkles className="h-6 w-6" />
                          </div>
                          <div className="mt-2 w-48 bg-green-500 text-white rounded-lg p-3 shadow-xl">
                            <p className="text-sm font-bold">🎉 This sounds amazing!</p>
                            <p className="text-xs">Keep going - you're helping the world!</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <Label htmlFor="region" className="text-lg font-bold text-gray-900 mb-3 block">
                          🌍 Where in the world?
                        </Label>
                        <Select
                          value={formData.region}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, region: value }))}
                        >
                          <SelectTrigger className="p-6 text-lg border-2 border-gray-300 focus:border-green-500 rounded-xl">
                            <SelectValue placeholder="Choose your region" />
                          </SelectTrigger>
                          <SelectContent>
                            {regions.map((region) => (
                              <SelectItem key={region} value={region.toLowerCase()}>
                                <div className="flex items-center gap-2 text-lg">{region}</div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 p-6 text-lg border-2 border-dashed border-gray-300 hover:border-green-400 hover:bg-green-50 rounded-xl"
                        >
                          <Camera className="h-6 w-6 mr-3" />📸 Add Photos
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 p-6 text-lg border-2 border-dashed border-gray-300 hover:border-green-400 hover:bg-green-50 rounded-xl"
                        >
                          <Upload className="h-6 w-6 mr-3" />📎 Upload Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            {selectedType && (
              <Card className="shadow-xl border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🤝 Want to join our community of changemakers? (Optional but awesome!)
                  </h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-lg font-medium text-gray-900 mb-2 block">
                          👋 What should we call you?
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your awesome name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="p-4 text-lg border-2 border-gray-300 focus:border-green-500 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-lg font-medium text-gray-900 mb-2 block">
                          📧 Your email (for updates on your impact!)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="p-4 text-lg border-2 border-gray-300 focus:border-green-500 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="anonymous"
                        checked={formData.anonymous}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, anonymous: checked as boolean }))
                        }
                        className="w-5 h-5"
                      />
                      <Label htmlFor="anonymous" className="text-lg">
                        🥷 Keep me anonymous (we'll protect your privacy!)
                      </Label>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <Heart className="w-8 h-8 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-xl">🌟 Join Our Amazing Community!</h4>
                          <ul className="text-gray-700 space-y-2 text-lg">
                            <li>• 📈 See how your insight creates real impact</li>
                            <li>• 🤝 Connect with fellow world-changers</li>
                            <li>• 🎉 Get invited to exclusive events</li>
                            <li>• 🏆 Earn recognition for your contributions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            {selectedType && (
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.title || !formData.description}
                  className="bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 hover:from-green-700 hover:via-blue-700 hover:to-orange-700 text-white px-16 py-8 text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 rounded-full border-4 border-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-white mr-4"></div>🚀 Launching
                      Your Knowledge Into the World...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-8 w-8 mr-4" />🌍 Share My Knowledge & Change the World!
                      <ArrowRight className="h-8 w-8 ml-4" />
                    </>
                  )}
                </Button>

                <p className="mt-6 text-gray-600 text-lg">
                  🎯 Your insight could help millions of people! Ready to make history?
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">🌍 Look at This Amazing Impact!</h2>
          <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto font-medium">
            See how knowledge heroes like you are transforming the world, one insight at a time! 🚀
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Ideas Made Real", icon: "🚀", color: "text-green-600" },
              { number: "120", label: "Countries Helped", icon: "🌍", color: "text-blue-600" },
              { number: "12k+", label: "Knowledge Heroes", icon: "⭐", color: "text-purple-600" },
              { number: "15", label: "Policies Changed", icon: "📜", color: "text-orange-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
