"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Users,
  Zap,
  Globe,
  MessageSquare,
  Lightbulb,
  Database,
  ArrowRight,
  Activity,
  MapPin,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// Import the fallback component
import NeuralNetworkCanvas from "./eatoiq-fallback"

export default function EatoIQSection() {
  const [currentInsight, setCurrentInsight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Rotate insights every 3 seconds
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % globalInsights.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const globalInsights = [
    { location: "Brazil", flag: "🇧🇷", insight: "Solar-powered aquaponics could work in schools", time: "2 min ago" },
    {
      location: "Kenya",
      flag: "🇰🇪",
      insight: "Drought-resistant sorghum varieties showing 40% better yields",
      time: "5 min ago",
    },
    {
      location: "Ireland",
      flag: "🇮🇪",
      insight: "Seaweed fertilizer reducing chemical inputs by 60%",
      time: "8 min ago",
    },
    {
      location: "Japan",
      flag: "🇯🇵",
      insight: "Vertical farming robots increasing efficiency by 35%",
      time: "12 min ago",
    },
    { location: "USA", flag: "🇺🇸", insight: "Regenerative grazing restoring soil carbon levels", time: "15 min ago" },
  ]

  const regionalData = [
    {
      region: "Ireland",
      flag: "🇮🇪",
      submissions: 247,
      impactfulIdea: "Seaweed-based soil enhancement",
      bgColor: "from-emerald-50 to-green-100",
      borderColor: "border-emerald-200",
    },
    {
      region: "Japan",
      flag: "🇯🇵",
      submissions: 189,
      impactfulIdea: "AI-powered crop disease detection",
      bgColor: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
    },
    {
      region: "Kenya",
      flag: "🇰🇪",
      submissions: 312,
      impactfulIdea: "Mobile water conservation system",
      bgColor: "from-orange-50 to-amber-100",
      borderColor: "border-orange-200",
    },
    {
      region: "USA",
      flag: "🇺🇸",
      submissions: 156,
      impactfulIdea: "Carbon credit marketplace for farms",
      bgColor: "from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
    },
  ]

  const workflowSteps = [
    {
      title: "We Collect",
      description: "Gathering insights from farmers, researchers, communities, and AI systems worldwide",
      icon: <Database className="w-8 h-8" />,
      items: ["Community Feedback", "Research Data", "Minecraft Builds", "Enterprise Insights", "Produce Analytics"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "We Digest",
      description: "Processing and analyzing patterns to extract actionable intelligence",
      icon: <Brain className="w-8 h-8" />,
      items: ["Pattern Recognition", "Idea Clustering", "Impact Analysis", "AI Processing", "Knowledge Synthesis"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "We Act",
      description: "Implementing changes and improvements across the global food system",
      icon: <Zap className="w-8 h-8" />,
      items: ["Policy Updates", "Product Changes", "Farm Improvements", "System Optimization", "Global Coordination"],
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-6 border border-green-200">
            <Brain className="w-5 h-5 mr-2 text-green-600" />
            <span className="text-green-800 font-semibold">Intelligence Engine</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-orange-600 bg-clip-text text-transparent">
            EatoIQ
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4">
            The Brain of the Eatosystem
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Powered by People. Accelerated by AI. Always Learning.
          </p>

          {/* Neural Network Visual */}
          <div className="relative w-full max-w-2xl mx-auto mb-8 h-64 md:h-80">
            <div className="absolute inset-0 z-10">
              <Image
                src="/images/eatoiq-neural-network.png"
                alt="EatoIQ Neural Network"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  // Hide the image if it fails to load
                  e.currentTarget.style.display = "none"
                }}
              />
            </div>
            {/* Fallback canvas animation */}
            <div className="absolute inset-0">
              <NeuralNetworkCanvas />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full">
              <Activity className="w-5 h-5 mr-2" />
              Explore How It Learns
            </Button>
            <Link href="/feed-eatoiq">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Feed EatoIQ
              </Button>
            </Link>
          </div>
        </div>

        {/* How EatoIQ Works */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How EatoIQ Works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color}`} />
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 mx-auto`}
                  >
                    {step.icon}
                  </div>

                  <h4 className="text-2xl font-bold text-center mb-4 text-gray-800">{step.title}</h4>

                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{step.description}</p>

                  <div className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Insight Feed */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Global Insight Feed</h3>
            <p className="text-lg text-gray-600">Real-time intelligence from our global community</p>
          </div>

          <Card className="bg-gradient-to-r from-green-600 to-orange-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Live Insights</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  <Activity className="w-4 h-4 mr-1" />
                  Live
                </Badge>
              </div>

              <div className="space-y-4">
                {globalInsights.slice(currentInsight, currentInsight + 3).map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="text-2xl">{insight.flag}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">{insight.location}</span>
                        <span className="text-sm opacity-75">{insight.time}</span>
                      </div>
                      <p className="text-white/90">{insight.insight}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  See More Global Insights
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Learning Snapshots */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Regional Learning Snapshots</h3>
            <p className="text-lg text-gray-600">How different regions are contributing to global food intelligence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalData.map((region, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${region.bgColor} border ${region.borderColor} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-2 block">{region.flag}</span>
                    <h4 className="text-xl font-bold text-gray-800">{region.region}</h4>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">This month:</span>
                      <Badge variant="secondary" className="bg-white/70">
                        {region.submissions} submissions
                      </Badge>
                    </div>

                    <div>
                      <span className="text-sm text-gray-600 block mb-1">Most impactful:</span>
                      <p className="text-sm font-medium text-gray-800">{region.impactfulIdea}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    View Region
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feed EatoIQ CTA */}
        <Card className="bg-gradient-to-r from-green-600 via-green-700 to-orange-600 text-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-orange-200" />

            <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Ideas Power the System</h3>

            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              EatoIQ learns from you. Share what you see, know, and imagine to help build a better food future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/feed-eatoiq">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Feed EatoIQ
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full"
              >
                <Users className="w-5 h-5 mr-2" />
                Join the Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
