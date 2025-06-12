"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { systemsData } from "@/lib/systems-data"
import {
  Code,
  Palette,
  Brain,
  BookOpen,
  Users,
  Building,
  Github,
  ExternalLink,
  Layers,
  Recycle,
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  Network,
  Leaf,
} from "lucide-react"

export default function EatoTeamPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const principles = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular",
      description: "Build components that connect and scale across the entire EatoSystem ecosystem.",
      accentColor: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "Open-source",
      description: "Everything we build is transparent, accessible, and owned by the global community.",
      accentColor: "bg-green-100 text-green-600",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-supported",
      description: "Leverage AI tools like v0.dev and Hugging Face to accelerate regenerative innovation.",
      accentColor: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Regenerative by design",
      description: "Every system we create restores and enhances natural and social capital.",
      accentColor: "bg-orange-100 text-orange-600",
    },
  ]

  const contributionWays = [
    {
      title: "Developer",
      description: "Build the future of food systems with React, Next.js, and AI-powered development tools.",
      cta: "Start on GitHub",
      link: "https://github.com/eatosystems",
      icon: <Code className="w-6 h-6" />,
      accentColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "Designer",
      description: "Create beautiful, accessible interfaces that make regenerative food systems intuitive.",
      cta: "Join Design Sprint",
      link: "/contribute/designers",
      icon: <Palette className="w-6 h-6" />,
      accentColor: "bg-pink-100 text-pink-600",
    },
    {
      title: "AI Contributor",
      description: "Train models, share datasets, and build intelligent systems on Hugging Face.",
      cta: "Share Models",
      link: "/contribute/huggingface",
      icon: <Brain className="w-6 h-6" />,
      accentColor: "bg-purple-100 text-purple-600",
    },
    {
      title: "Knowledge Hero",
      description: "Share your expertise in farming, nutrition, culture, or food systems.",
      cta: "Share Insight",
      link: "/feed-eatoiq",
      icon: <BookOpen className="w-6 h-6" />,
      accentColor: "bg-green-100 text-green-600",
    },
    {
      title: "Youth Builder",
      description: "Lead the next generation of food system innovators in your school or community.",
      cta: "Start Youth Team",
      link: "/contribute/community",
      icon: <Users className="w-6 h-6" />,
      accentColor: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Partner",
      description: "Bring EatoSystems to your organization, region, or enterprise.",
      cta: "Become Partner",
      link: "/partners/become-a-partner",
      icon: <Building className="w-6 h-6" />,
      accentColor: "bg-orange-100 text-orange-600",
    },
  ]

  const openTools = [
    {
      name: "v0.dev",
      description: "AI-powered UI generation",
      icon: "🤖",
      link: "https://v0.dev",
    },
    {
      name: "Vercel",
      description: "Deployment & hosting",
      icon: "▲",
      link: "https://vercel.com",
    },
    {
      name: "GitHub",
      description: "Code collaboration",
      icon: "🐙",
      link: "https://github.com",
    },
    {
      name: "Hugging Face",
      description: "AI models & datasets",
      icon: "🤗",
      link: "https://huggingface.co",
    },
    {
      name: "Notion",
      description: "Knowledge management",
      icon: "📝",
      link: "https://notion.so",
    },
  ]

  const faqs = [
    {
      question: "Do I need to code?",
      answer:
        "Not at all! EatoTeams welcome contributors from all backgrounds. Whether you're a farmer, designer, storyteller, student, or community organizer, there's a meaningful way for you to contribute to regenerating our food systems.",
    },
    {
      question: "Can I start a local EatoTeam?",
      answer:
        "Local EatoTeams are essential for adapting global solutions to community needs. We provide frameworks, tools, and support to help you establish and grow a team in your region.",
    },
    {
      question: "How are contributors recognized?",
      answer:
        "Contributors are recognized through our open contribution system, including GitHub profiles, community showcases, and opportunities to lead projects. Outstanding contributors may be invited to join core teams or advisory roles.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "We use modern, open-source technologies including React, Next.js, TypeScript, Tailwind CSS, and AI tools like v0.dev. All our code is open-source and designed to be accessible to developers of all skill levels.",
    },
    {
      question: "Is there a way to work full-time with Eato?",
      answer:
        "Yes! As EatoSystems grows, we're creating full-time opportunities for exceptional contributors. Many team members start as volunteers and grow into leadership roles as the ecosystem expands.",
    },
    {
      question: "How do I get started today?",
      answer:
        "The easiest way is to explore our GitHub repositories, join our community discussions, or contribute knowledge through our EatoIQ platform. Every contribution, no matter how small, helps build the future of food.",
    },
  ]

  // Get layer-specific styling
  const getLayerStyles = (layer: string) => {
    const layerStyleMap: Record<string, any> = {
      SOIL: {
        bgLight: "bg-green-50",
        bgLightHover: "bg-green-100",
        textAccent: "text-green-600",
        gradientText: "from-green-600 to-emerald-500",
        bgGradient: "from-green-500 to-emerald-600",
      },
      SEED: {
        bgLight: "bg-yellow-50",
        bgLightHover: "bg-yellow-100",
        textAccent: "text-yellow-600",
        gradientText: "from-yellow-600 to-amber-500",
        bgGradient: "from-yellow-500 to-amber-600",
      },
      POLLINATION: {
        bgLight: "bg-pink-50",
        bgLightHover: "bg-pink-100",
        textAccent: "text-pink-600",
        gradientText: "from-pink-600 to-rose-500",
        bgGradient: "from-pink-500 to-rose-600",
      },
      ROOT: {
        bgLight: "bg-purple-50",
        bgLightHover: "bg-purple-100",
        textAccent: "text-purple-600",
        gradientText: "from-purple-600 to-indigo-500",
        bgGradient: "from-purple-500 to-indigo-600",
      },
      SPROUT: {
        bgLight: "bg-blue-50",
        bgLightHover: "bg-blue-100",
        textAccent: "text-blue-600",
        gradientText: "from-blue-600 to-sky-500",
        bgGradient: "from-blue-500 to-sky-600",
      },
      FLOW: {
        bgLight: "bg-teal-50",
        bgLightHover: "bg-teal-100",
        textAccent: "text-teal-600",
        gradientText: "from-teal-600 to-cyan-500",
        bgGradient: "from-teal-500 to-cyan-600",
      },
      MYCELIUM: {
        bgLight: "bg-violet-50",
        bgLightHover: "bg-violet-100",
        textAccent: "text-violet-600",
        gradientText: "from-violet-600 to-purple-500",
        bgGradient: "from-violet-500 to-purple-600",
      },
      CROP: {
        bgLight: "bg-amber-50",
        bgLightHover: "bg-amber-100",
        textAccent: "text-amber-600",
        gradientText: "from-amber-600 to-orange-500",
        bgGradient: "from-amber-500 to-orange-600",
      },
      HARVEST: {
        bgLight: "bg-orange-50",
        bgLightHover: "bg-orange-100",
        textAccent: "text-orange-600",
        gradientText: "from-orange-600 to-amber-500",
        bgGradient: "from-orange-500 to-red-600",
      },
      REGENERATION: {
        bgLight: "bg-emerald-50",
        bgLightHover: "bg-emerald-100",
        textAccent: "text-emerald-600",
        gradientText: "from-emerald-600 to-green-500",
        bgGradient: "from-emerald-500 to-green-600",
      },
      CANOPY: {
        bgLight: "bg-red-50",
        bgLightHover: "bg-red-100",
        textAccent: "text-red-600",
        gradientText: "from-red-600 to-rose-500",
        bgGradient: "from-red-500 to-rose-600",
      },
      SANCTUARY: {
        bgLight: "bg-indigo-50",
        bgLightHover: "bg-indigo-100",
        textAccent: "text-indigo-600",
        gradientText: "from-indigo-600 to-blue-500",
        bgGradient: "from-indigo-500 to-blue-600",
      },
    }

    return layerStyleMap[layer] || layerStyleMap["SOIL"]
  }

  // Helper function to get the appropriate icon for the system layer
  const getLayerIcon = (layer: string) => {
    switch (layer) {
      case "SOIL":
        return Leaf
      case "SEED":
        return Sparkles
      case "POLLINATION":
        return Zap
      case "ROOT":
        return Network
      case "SPROUT":
        return Sparkles
      case "FLOW":
        return Globe
      case "MYCELIUM":
        return Network
      case "CROP":
        return Leaf
      case "HARVEST":
        return Leaf
      case "REGENERATION":
        return Sparkles
      case "CANOPY":
        return Globe
      case "SANCTUARY":
        return Leaf
      default:
        return Leaf
    }
  }

  // Create the EatoTeams array from systemsData
  const eatoTeams = Object.entries(systemsData).map(([slug, system]) => {
    const LayerIcon = getLayerIcon(system.layer)
    const layerStyles = getLayerStyles(system.layer)

    return {
      systemName: system.name,
      phase: system.layer,
      teamName: `Team ${system.layer.charAt(0)}${system.layer.slice(1).toLowerCase()}`,
      description: system.description,
      image: `/images/systems/${slug.toLowerCase()}-${system.layer.toLowerCase()}.png`.replace(/\s+/g, "-"),
      slug: slug,
      icon: <LayerIcon className={`h-5 w-5 ${layerStyles.textAccent}`} />,
      styles: layerStyles,
    }
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background with image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
          <Image
            src="/images/global-systems-network.png"
            alt="Global EatoSystems Network"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
              <Network className="w-6 h-6 mr-3 text-blue-200" />
              <span className="text-white font-semibold text-lg">Global Contributor Network</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 drop-shadow-2xl">
                EatoTeam
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">
                Building the regenerative operating system
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              The global network building the regenerative operating system for food, community, and planet. Join us to
              regenerate the world from the soil up using open tools like v0.dev, Vercel, GitHub, and Hugging Face.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <div className="transform hover:scale-105 active:scale-95 transition-transform">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  <Link href="https://v0.dev" target="_blank" className="flex items-center">
                    Start Building with v0.dev <ExternalLink className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="transform hover:scale-105 active:scale-95 transition-transform">
                <Link href="/eatosystems">
                  <Button
                    size="lg"
                    className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 px-10 py-5 text-xl rounded-full"
                  >
                    Explore EatoSystems
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* First Team: EatoSystems Web Team */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl mb-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="relative z-10 px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-gray-800 font-medium">Featured Team</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                    EatoSystems Web Team
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  The founding team that built this website and the digital infrastructure for all 12 EatoSystems. Using
                  v0.dev, Next.js, and Vercel, we've created an open-source platform that showcases the entire
                  EatoSystems ecosystem and enables global collaboration.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Next.js</Badge>
                  <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">TypeScript</Badge>
                  <Badge className="bg-cyan-100 text-cyan-600 hover:bg-cyan-200">Tailwind CSS</Badge>
                  <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200">v0.dev</Badge>
                  <Badge className="bg-black text-white hover:bg-gray-800">Vercel</Badge>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="https://github.com/eatosystems/website" target="_blank" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/react-code-generation.png"
                    alt="EatoSystems Web Development"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2">
                      <Sparkles className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Built with v0.dev</h4>
                      <p className="text-sm text-gray-600">AI-assisted development for regenerative systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is EatoTeam */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">What is EatoTeam?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  EatoTeam is the contributor framework for building the 12 EatoSystems. We organize global,
                  system-level, regional, and local teams to collaborate on regenerative food solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every team works together to create modular, open-source systems that can be adapted and deployed
                  worldwide while respecting local food cultures and sovereignty. From developers to farmers, designers
                  to community organizers — everyone has a role in building our regenerative future.
                </p>
              </motion.div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div
                      className={`w-12 h-12 ${principle.accentColor} rounded-lg flex items-center justify-center mb-4`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Contribute */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-8 border border-green-200">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              <span className="text-gray-800 font-semibold">Join the Movement</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-green-600">
                Ways to Contribute
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every skill, every perspective, every contribution matters in building regenerative food systems.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributionWays.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 ${way.accentColor} rounded-lg flex items-center justify-center mb-4`}>
                      {way.icon}
                    </div>
                    <CardTitle className="text-xl">{way.title}</CardTitle>
                    <CardDescription className="text-gray-600">{way.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Link href={way.link} target={way.link.startsWith("http") ? "_blank" : undefined}>
                        {way.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Explore the 12 EatoTeams */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-8 border border-green-200">
                <Sparkles className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-gray-800 font-semibold">Interactive Teams</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
                  The 12 EatoTeams
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join specialized teams working on each layer of the EatoSystems framework — from soil to sanctuary.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eatoTeams.map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={team.image || "/placeholder.svg"}
                        alt={`${team.systemName} team`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.onerror = null
                          target.src = `/placeholder.svg?height=200&width=300&text=${team.systemName}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          {team.icon}
                          <Badge className="bg-white/20 text-white hover:bg-white/30">{team.phase}</Badge>
                        </div>
                        <h3 className="text-xl font-bold">{team.systemName}</h3>
                        <p className="text-sm opacity-90">{team.teamName}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{team.description}</p>
                      <Button className={`w-full bg-gradient-to-r ${team.styles.bgGradient} hover:opacity-90`}>
                        <Link href={`/eatosystems/${team.slug.toLowerCase()}`}>Join this Team</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by Open Tools */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Powered by Open Tools</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              EatoTeams use open, regenerative infrastructure to build systems that scale.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {openTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link href={tool.link} target="_blank">
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="font-semibold mb-2">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Manifesto Teaser */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                  "We are not just developers. We are regenerators."
                </blockquote>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/manifesto">
                    Read the Manifesto <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Start Building CTA */}
        <section className="py-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600">
            <Image
              src="/collaborative-agri-coding.png"
              alt="Collaborative Development"
              fill
              className="object-cover mix-blend-overlay opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Join the team regenerating the future</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Whether you're here to code, design, teach, farm, or build — there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="https://github.com/eatosystems" target="_blank" className="flex items-center">
                  <Github className="mr-2 h-5 w-5" /> View Tasks on GitHub
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                <Link href="/contribute/community">Join Community</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                <Link href="/feed-eatoiq">Submit Knowledge</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about joining EatoTeam.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  )
}
