"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Brain, Network, Zap, ArrowRight, Code, Calendar, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoAIPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Intelligent Food Systems",
      description:
        "AI-powered systems that optimize food production, distribution, and consumption through advanced machine learning and predictive analytics.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Neural Network Agriculture",
      description:
        "Deep learning models that analyze crop patterns, soil conditions, and environmental factors to maximize yield and sustainability.",
      icon: <Network className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Predictive Analytics",
      description:
        "Advanced forecasting systems that predict market trends, weather patterns, and crop performance for optimal decision-making.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Automated Processing",
      description:
        "Intelligent automation systems that streamline food processing, quality control, and supply chain management.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
  ]

  const roadmapMilestones = [
    {
      title: "AI Platform Launch",
      date: "June 2026",
      status: "upcoming" as const,
      description:
        "Launch of the core EatoAI platform with basic machine learning capabilities and agricultural data processing.",
    },
    {
      title: "Neural Network Integration",
      date: "September 2026",
      status: "upcoming" as const,
      description:
        "Integration of advanced neural networks for crop prediction and yield optimization across global farming systems.",
    },
    {
      title: "Predictive Analytics Suite",
      date: "December 2026",
      status: "upcoming" as const,
      description: "Deployment of comprehensive predictive analytics for market forecasting and resource optimization.",
    },
    {
      title: "Global AI Network",
      date: "March 2027",
      status: "upcoming" as const,
      description:
        "Establishment of global AI network connecting agricultural systems worldwide for collective intelligence.",
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
          <Image
            src="/images/systems/eatoai-mycelium.png"
            alt="EatoAI Intelligence System"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
              <Brain className="w-6 h-6 mr-3 text-violet-200" />
              <span className="text-white font-semibold text-lg">MYCELIUM Layer • AI Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-300">
                EatoAI
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">v1.0</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Advanced artificial intelligence systems that power intelligent food networks, predictive agriculture, and
              automated decision-making for sustainable food systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                onClick={() => {
                  document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore AI Systems <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Link href="/eatosystems/eatoai-lab">
                <Button
                  size="lg"
                  className="bg-violet-600 text-white border-violet-600 hover:bg-violet-700 px-10 py-5 text-xl rounded-full"
                >
                  <Code className="mr-3 h-6 w-6" />
                  Developer Lab
                </Button>
              </Link>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Jun</div>
                <div className="text-lg font-semibold text-white mb-2">2026</div>
                <div className="text-sm text-white/80">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">1000+</div>
                <div className="text-lg font-semibold text-white mb-2">AI Models</div>
                <div className="text-sm text-white/80">Pre-trained</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Network className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Neural</div>
                <div className="text-lg font-semibold text-white mb-2">Networks</div>
                <div className="text-sm text-white/80">Advanced</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">MYCEL</div>
                <div className="text-lg font-semibold text-white mb-2">Layer</div>
                <div className="text-sm text-white/80">Intelligence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="gradient-text from-violet-600 to-purple-500">AI-Powered Intelligence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              EatoAI delivers advanced artificial intelligence solutions that transform food systems through machine
              learning, neural networks, and predictive analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-violet-50 border-2 border-violet-200 shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mr-4`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-20`}></div>
                <Image
                  src="/images/systems/eatoai-mycelium.png"
                  alt={features[activeFeature].title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h4 className="text-white text-xl font-bold mb-2">{features[activeFeature].title}</h4>
                  <p className="text-white/90 text-sm">{features[activeFeature].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Intelligent Food Systems?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the EatoAI community and help create the next generation of AI-powered agricultural solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-building">
                <Button
                  size="lg"
                  className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Start Building <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/eatosystems">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
                >
                  Explore All Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
