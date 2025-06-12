"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Sparkles, Send, ArrowRight, CheckCircle2, Lightbulb, Users, Globe, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeedEatoIQ() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    insightType: "",
    insight: "",
    region: "",
    tags: [],
    name: "",
    email: "",
    sharePublicly: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [encouragementIndex, setEncouragementIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const encouragements = [
    "Your knowledge is a superpower! 🚀",
    "You're helping build a better food system! 🌱",
    "Your insight could help millions! ✨",
    "You're a knowledge hero! 🦸",
    "Together we're changing the world! 🌍",
    "Your perspective matters! 💡",
    "This is how we build the future! 🔮",
  ]

  // Rotate encouragement messages
  useEffect(() => {
    const interval = setInterval(() => {
      setEncouragementIndex((prev) => (prev + 1) % encouragements.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Neural network background animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.offsetWidth
        canvas.height = containerRef.current.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Neural network nodes
    const nodes: { x: number; y: number; connections: number[] }[] = []
    const nodeCount = 50

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
      })
    }

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount)
        if (target !== i && !node.connections.includes(target)) {
          node.connections.push(target)
        }
      }
    })

    // Animation
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"
      ctx.lineWidth = 0.5

      nodes.forEach((node, i) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex]
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()
        })
      })

      // Draw nodes
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Move nodes slightly
      nodes.forEach((node) => {
        node.x += (Math.random() - 0.5) * 0.5
        node.y += (Math.random() - 0.5) * 0.5

        // Keep within bounds
        if (node.x < 0) node.x = 0
        if (node.x > canvas.width) node.x = canvas.width
        if (node.y < 0) node.y = 0
        if (node.y > canvas.height) node.y = canvas.height
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit form
      console.log("Form submitted:", formData)
      setIsSubmitted(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "insight" && !isTyping && value.length > 0) {
      setIsTyping(true)
    }

    if (name === "insight" && isTyping && value.length === 0) {
      setIsTyping(false)
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const insightTypes = [
    {
      id: "agricultural",
      name: "Agricultural Practices",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Farming techniques, crop management, soil health",
    },
    {
      id: "community",
      name: "Community Systems",
      icon: <Users className="h-6 w-6" />,
      description: "Local food networks, community gardens, education",
    },
    {
      id: "global",
      name: "Global Solutions",
      icon: <Globe className="h-6 w-6" />,
      description: "Supply chains, policy recommendations, trade systems",
    },
    {
      id: "innovation",
      name: "Technological Innovation",
      icon: <Rocket className="h-6 w-6" />,
      description: "New tools, software solutions, automation ideas",
    },
  ]

  if (isSubmitted) {
    return (
      <div
        ref={containerRef}
        className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-green-600 to-orange-600"
      >
        {/* Background canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Background image with higher opacity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/agricultural-ai-visualization.png"
            alt="Neural network visualization"
            fill
            className="object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 to-orange-600/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8"
          >
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
          >
            Thank You, Knowledge Hero!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 text-center max-w-2xl mb-8"
          >
            Your insight has been submitted to the EatoIQ system. It will help shape the future of sustainable food
            systems around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-white/30 max-w-2xl w-full mb-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">What happens next?</h3>
            <ul className="space-y-4">
              {[
                "Our team will review your submission",
                "Your insight will be processed by EatoIQ",
                "It may be incorporated into our knowledge base",
                "You might be contacted for further collaboration",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/eatoiq">
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-6 text-lg rounded-full">
                <Brain className="mr-2 h-5 w-5" />
                Explore EatoIQ
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-6 text-lg rounded-full">
                Return Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-green-600 to-orange-600"
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background image with higher opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agricultural-ai-visualization.png"
          alt="Neural network visualization"
          fill
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 to-orange-600/60"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-white/30">
              <Brain className="h-6 w-6 mr-2 text-orange-200" />
              <span className="text-white font-semibold text-lg">Feed EatoIQ</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Your Knowledge
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                Changes Everything
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Share your insights to help build a more sustainable and equitable food system for everyone.
            </p>

            {/* Encouragement message */}
            <motion.div
              key={encouragementIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-yellow-200 text-xl font-medium"
            >
              {encouragements[encouragementIndex]}
            </motion.div>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center max-w-md mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold ${
                      step === i
                        ? "bg-white text-primary"
                        : step > i
                          ? "bg-green-500 text-white"
                          : "bg-white/30 text-white"
                    }`}
                  >
                    {step > i ? <CheckCircle2 className="h-6 w-6" /> : i}
                  </div>
                  <span className="text-white/80 text-sm mt-1">
                    {i === 1 ? "Your Superpower" : i === 2 ? "Your Insight" : "About You"}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-white/30 mt-4 rounded-full max-w-md mx-auto">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/30">
              {/* Step 1: Insight Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">What's your knowledge superpower?</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {insightTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.insightType === type.id
                            ? "bg-white border-2 border-yellow-300 shadow-lg transform scale-105"
                            : "bg-white/30 border border-white/50 hover:bg-white/40"
                        }`}
                        onClick={() => handleSelectChange("insightType", type.id)}
                      >
                        <div className="flex items-center mb-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                              formData.insightType === type.id
                                ? "bg-green-100 text-green-600"
                                : "bg-white/30 text-white"
                            }`}
                          >
                            {type.icon}
                          </div>
                          <h3
                            className={`text-lg font-medium ${
                              formData.insightType === type.id ? "text-primary" : "text-white"
                            }`}
                          >
                            {type.name}
                          </h3>
                        </div>
                        <p
                          className={`text-sm ${formData.insightType === type.id ? "text-gray-600" : "text-white/80"}`}
                        >
                          {type.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Insight Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">Share your valuable insight</h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="insight" className="text-white text-base sm:text-lg mb-2 block">
                        Your Knowledge Contribution
                      </Label>
                      <Textarea
                        id="insight"
                        name="insight"
                        placeholder="Share your insight, idea, or knowledge here. Be as detailed as possible!"
                        value={formData.insight}
                        onChange={handleInputChange}
                        className="min-h-[150px] sm:min-h-[200px] bg-white/80 border-white/50 text-gray-800 placeholder:text-gray-500 text-sm sm:text-base"
                        required
                      />

                      {/* Typing encouragement */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-yellow-200 flex items-center"
                        >
                          <Sparkles className="h-4 w-4 mr-1" />
                          <span>Amazing! Your knowledge is making a difference!</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="region" className="text-white text-lg mb-2 block">
                        Relevant Region
                      </Label>
                      <Select value={formData.region} onValueChange={(value) => handleSelectChange("region", value)}>
                        <SelectTrigger className="bg-white/80 border-white/50 text-gray-800">
                          <SelectValue placeholder="Select a region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="global">Global</SelectItem>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="south-america">South America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Personal Info */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">About you</h2>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white text-lg mb-2 block">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/80 border-white/50 text-gray-800 placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white text-lg mb-2 block">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/80 border-white/50 text-gray-800 placeholder:text-gray-500"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="sharePublicly"
                        checked={formData.sharePublicly}
                        onCheckedChange={(checked) => handleCheckboxChange("sharePublicly", checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="sharePublicly" className="text-white">
                        I'm happy to be credited for my contribution and contacted for follow-up
                      </Label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="bg-white/30 text-white hover:bg-white/40 px-6 py-6 text-lg rounded-full w-full sm:w-auto"
                  >
                    Back
                  </Button>
                )}

                <Button
                  type="submit"
                  className={`${
                    step === 3 ? "bg-green-500 hover:bg-green-600" : "bg-white hover:bg-gray-100"
                  } text-${step === 3 ? "white" : "primary"} px-4 sm:px-6 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full w-full sm:w-auto`}
                >
                  {step === 3 ? (
                    <>
                      <span className="break-words">Submit Insight</span>
                      <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    </>
                  ) : (
                    <>
                      <span className="break-words">Continue</span>
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
