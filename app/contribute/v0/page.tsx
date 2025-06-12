"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Code,
  Sparkles,
  Zap,
  Layers,
  Bot,
  Database,
  BarChart,
  Leaf,
  Brain,
  Globe,
  Cpu,
  Network,
  Users,
  Lock,
  Cloud,
} from "lucide-react"
import PageHeader from "@/components/page-header"
import FeatureGrid from "@/components/feature-grid"
import ProjectShowcase from "@/components/project-showcase"
import CTASection from "@/components/cta-section"
import GettingStarted from "@/components/getting-started"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function V0ContributePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Code size={24} />,
      title: "AI-Powered Development",
      description:
        "Leverage v0's AI capabilities to rapidly prototype and build components for all 12 EatoSystems with minimal effort.",
      accentColor: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Visual Design",
      description:
        "Create beautiful, responsive interfaces for EatoSystems applications with v0's design capabilities.",
      accentColor: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Zap size={24} />,
      title: "Rapid Prototyping",
      description:
        "Quickly test and iterate on ideas for EatoSystems components before committing to full development.",
      accentColor: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Layers size={24} />,
      title: "Component Library",
      description: "Build and share reusable components that can be used across multiple EatoSystems applications.",
      accentColor: "bg-purple-50 text-purple-600",
    },
  ]

  const projects = [
    {
      title: "EatoIndex Dashboard",
      description: "An interactive dashboard for visualizing agricultural sustainability metrics.",
      image: "/agricultural-sustainability-dashboard.png",
      link: "#",
      buttonText: "View Project",
    },
    {
      title: "EatoMe Food Tracker",
      description:
        "A personal food tracking application that helps users understand the environmental impact of their food choices.",
      image: "/placeholder.svg?height=400&width=600&query=personal+food+tracking+app+with+environmental+metrics",
      link: "#",
      buttonText: "View Project",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Sign up for v0",
      description: "Create a v0 account to start building EatoSystems components with AI assistance.",
      buttonText: "Sign up",
      buttonLink: "https://v0.dev",
      isExternal: true,
    },
    {
      number: 2,
      title: "Choose an EatoSystem",
      description: "Select one of the 12 EatoSystems that aligns with your interests and skills.",
      buttonText: "Explore EatoSystems",
      buttonLink: "/eato-systems",
      isExternal: false,
    },
    {
      number: 3,
      title: "Generate Your First Component",
      description:
        "Use v0 to generate your first component for your chosen EatoSystem, such as a dashboard, form, or visualization.",
      buttonText: "Component Guide",
      buttonLink: "#",
      isExternal: false,
    },
    {
      number: 4,
      title: "Share Your Creation",
      description: "Submit your component to the EatoSystems repository for review and integration.",
      buttonText: "Submission Guide",
      buttonLink: "#",
      isExternal: false,
    },
  ]

  const v0SystemContributions = [
    {
      system: "EatoMe",
      icon: <Leaf size={24} className="text-green-600" />,
      description: "Design and build personal food tracking and soil monitoring interfaces.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Personal Food Dashboard",
          description: "Create interactive dashboards for tracking personal food consumption and environmental impact.",
          link: "#",
        },
        {
          title: "Soil Monitoring Interface",
          description: "Design user interfaces for visualizing soil health data from sensors and other sources.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAI",
      icon: <Brain size={24} className="text-purple-600" />,
      description: "Build interfaces for AI model interaction and visualization.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "AI Model Dashboard",
          description: "Create dashboards for interacting with and visualizing outputs from agricultural AI models.",
          link: "#",
        },
        {
          title: "Prediction Visualization",
          description: "Design interfaces for visualizing predictions from crop yield and disease detection models.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoIndex",
      icon: <BarChart size={24} className="text-blue-600" />,
      description: "Create data visualization interfaces for agricultural sustainability metrics.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Metrics Dashboard",
          description: "Build interactive dashboards for visualizing agricultural sustainability metrics.",
          link: "#",
        },
        {
          title: "Comparative Analysis Tools",
          description: "Design interfaces for comparing sustainability metrics across different agricultural systems.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFund",
      icon: <Database size={24} className="text-emerald-600" />,
      description: "Design financial interfaces for agricultural investments and funding.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Investment Platform",
          description: "Create user interfaces for agricultural investment platforms and funding portals.",
          link: "#",
        },
        {
          title: "Financial Dashboard",
          description: "Design dashboards for tracking financial metrics and investment performance.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoVerse",
      icon: <Globe size={24} className="text-indigo-600" />,
      description: "Build immersive digital interfaces for agricultural education and visualization.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Digital Twin Interface",
          description: "Create interfaces for interacting with digital twins of agricultural systems.",
          link: "#",
        },
        {
          title: "Educational Experiences",
          description: "Design immersive educational experiences for learning about sustainable agriculture.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoBotics",
      icon: <Cpu size={24} className="text-red-600" />,
      description: "Design control interfaces for agricultural robotics and automation.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Robotics Control Panel",
          description: "Create control interfaces for monitoring and managing agricultural robots.",
          link: "#",
        },
        {
          title: "Automation Dashboard",
          description: "Design dashboards for monitoring automated agricultural systems and processes.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoTransit",
      icon: <Network size={24} className="text-orange-600" />,
      description: "Build logistics and supply chain management interfaces.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Logistics Dashboard",
          description: "Create dashboards for tracking agricultural products through the supply chain.",
          link: "#",
        },
        {
          title: "Route Optimization Interface",
          description: "Design interfaces for optimizing transportation routes for agricultural products.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoGov",
      icon: <Users size={24} className="text-cyan-600" />,
      description: "Design governance and policy management interfaces for agricultural communities.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Governance Platform",
          description: "Create interfaces for community governance and decision-making processes.",
          link: "#",
        },
        {
          title: "Policy Management Dashboard",
          description: "Design dashboards for creating and managing agricultural policies and regulations.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSecure",
      icon: <Lock size={24} className="text-gray-600" />,
      description: "Build security and data protection interfaces for agricultural information.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Security Dashboard",
          description: "Create dashboards for monitoring and managing agricultural data security.",
          link: "#",
        },
        {
          title: "Access Control Interface",
          description: "Design interfaces for managing access to sensitive agricultural data and systems.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFoundation",
      icon: <Cloud size={24} className="text-teal-600" />,
      description: "Design community and educational interfaces for sustainable agriculture.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Community Platform",
          description: "Create interfaces for connecting and engaging agricultural communities.",
          link: "#",
        },
        {
          title: "Educational Portal",
          description: "Design portals for accessing and sharing agricultural knowledge and resources.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAgent",
      icon: <Bot size={24} className="text-pink-600" />,
      description: "Build interfaces for autonomous agent systems in agriculture.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Agent Monitoring Dashboard",
          description: "Create dashboards for monitoring and managing autonomous agricultural agents.",
          link: "#",
        },
        {
          title: "Agent Configuration Interface",
          description: "Design interfaces for configuring and deploying agricultural agents.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSystem",
      icon: <Code size={24} className="text-amber-600" />,
      description: "Design integration and system management interfaces for all EatoSystems.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "System Integration Dashboard",
          description: "Create dashboards for monitoring and managing integrations between EatoSystems components.",
          link: "#",
        },
        {
          title: "System Health Monitor",
          description: "Design interfaces for monitoring the health and performance of all EatoSystems components.",
          link: "#",
        },
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4">
      <PageHeader
        title="Contribute with v0"
        description="Use AI-powered design and development to build interfaces for all 12 EatoSystems."
        image="/placeholder.svg?height=600&width=1200&query=AI+powered+interface+design+with+colorful+visualization"
        gradient="from-purple-500 to-purple-600"
      />

      <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Development for EatoSystems</h2>
          <p className="text-gray-600 mb-6">
            v0 enables you to rapidly design and build beautiful, functional interfaces for all 12 EatoSystems with the
            power of AI, accelerating development and enabling innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              <Link href="https://v0.dev" target="_blank" className="flex items-center">
                <span>Try v0</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="#getting-started" className="flex items-center">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 bg-purple-50 p-12 rounded-xl flex items-center justify-center">
          <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" rx="60" fill="#F3E8FF" />
            <path d="M60 30L90 45V75L60 90L30 75V45L60 30Z" fill="#A855F7" fillOpacity="0.8" />
            <circle cx="60" cy="60" r="15" fill="#F3E8FF" />
          </svg>
        </div>
      </div>

      {/* Contribution Paths Section */}
      <SystemContributionPaths
        title="Contribution Paths for Each EatoSystem"
        description="Discover specific ways to contribute to each of the 12 EatoSystems using v0's AI-powered design and development capabilities."
        systems={v0SystemContributions}
        platform="v0"
      />

      <FeatureGrid features={features} />

      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl transform rotate-1"></div>
        <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200 z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Design with AI, Build with Purpose</h2>
              <p className="text-gray-600 mb-4">
                v0 combines the power of AI with your creativity to design and build interfaces for EatoSystems that are
                both beautiful and functional. design and build interfaces for EatoSystems that are both beautiful and
                functional.
              </p>
              <p className="text-gray-600 mb-6">
                By contributing to the EatoSystems ecosystem with v0, you're helping to create intuitive, accessible
                interfaces that make sustainable agriculture more approachable for everyone.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&query=AI+powered+interface+design+for+agriculture"
                alt="AI-powered interface design"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Code size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
            <p className="text-white/90 mb-4">
              Use v0 to quickly prototype interfaces for any EatoSystem, allowing you to test ideas and gather feedback
              before committing to full development.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-purple-600">
              <Link href="#" className="flex items-center">
                <span>Learn More</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Sparkles size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Beautiful Interfaces</h3>
            <p className="text-white/90 mb-4">
              Create visually stunning interfaces that make complex agricultural data accessible and engaging for users
              of all EatoSystems.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-green-600">
              <Link href="#" className="flex items-center">
                <span>See Examples</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ProjectShowcase
        title="Featured Projects"
        description="Explore these example projects built with v0 for the EatoSystems platform."
        projects={projects}
        background="bg-purple-50"
      />

      <GettingStarted
        title="Getting Started"
        steps={steps}
        decorativeElement={
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="currentColor" />
          </svg>
        }
      />

      <CTASection
        title="Ready to Build with AI?"
        description="Join our community of designers and developers building the future of sustainable food systems with v0."
        buttonText="Get Started with v0"
        buttonLink="https://v0.dev"
        isExternal={true}
        gradient="from-purple-500 to-purple-600"
      />
    </div>
  )
}
