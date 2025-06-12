"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  GitBranch,
  GitPullRequest,
  Code,
  Check,
  Users,
  Leaf,
  Brain,
  BarChart,
  Database,
  Globe,
  Cpu,
  Network,
  Lock,
  Cloud,
  Bot,
} from "lucide-react"
import PageHeader from "@/components/page-header"
import FeatureGrid from "@/components/feature-grid"
import ProjectShowcase from "@/components/project-showcase"
import CTASection from "@/components/cta-section"
import GettingStarted from "@/components/getting-started"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function GitHubContributePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Code size={24} />,
      title: "Open Source Development",
      description:
        "Contribute code to the core repositories for all 12 EatoSystems, from frontend interfaces to backend services.",
      accentColor: "bg-green-50 text-green-600",
    },
    {
      icon: <GitBranch size={24} />,
      title: "Collaborative Workflow",
      description:
        "Work with a global community of developers using GitHub's collaborative features to build better systems together.",
      accentColor: "bg-green-50 text-green-600",
    },
    {
      icon: <GitPullRequest size={24} />,
      title: "Code Review",
      description:
        "Participate in code reviews to ensure high-quality, secure, and efficient implementations across all EatoSystems.",
      accentColor: "bg-green-50 text-green-600",
    },
    {
      icon: <Check size={24} />,
      title: "Continuous Integration",
      description: "Leverage GitHub Actions for automated testing and deployment of EatoSystems components.",
      accentColor: "bg-green-50 text-green-600",
    },
  ]

  const projects = [
    {
      title: "EatoIndex Core",
      description: "The core repository for the EatoIndex system, containing APIs and data processing services.",
      image: "/placeholder.svg?height=400&width=600&query=github+repository+code+visualization",
      link: "#",
      buttonText: "View Repository",
    },
    {
      title: "EatoMe Frontend",
      description:
        "The frontend application for the EatoMe system, providing personal food tracking and soil monitoring interfaces.",
      image: "/placeholder.svg?height=400&width=600&query=react+application+code+visualization",
      link: "#",
      buttonText: "View Repository",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Fork the Repository",
      description: "Fork the EatoSystems repository to your GitHub account to start contributing.",
      buttonText: "GitHub Repository",
      buttonLink: "https://github.com",
      isExternal: true,
    },
    {
      number: 2,
      title: "Set Up Your Development Environment",
      description: "Configure your local environment with the necessary tools and dependencies.",
      buttonText: "Setup Guide",
      buttonLink: "#",
      isExternal: false,
    },
    {
      number: 3,
      title: "Choose an Issue to Work On",
      description: "Browse open issues and find one that matches your skills and interests.",
      buttonText: "Issue Tracker",
      buttonLink: "#",
      isExternal: false,
    },
    {
      number: 4,
      title: "Submit a Pull Request",
      description: "Make your changes and submit a pull request for review and integration.",
      buttonText: "PR Guide",
      buttonLink: "#",
      isExternal: false,
    },
  ]

  const githubSystemContributions = [
    {
      system: "EatoMe",
      icon: <Leaf size={24} className="text-green-600" />,
      description: "Develop personal food tracking and soil monitoring applications.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Frontend Development",
          description: "Contribute to the React-based frontend for personal food tracking and visualization.",
          link: "#",
        },
        {
          title: "Soil Monitoring API",
          description: "Develop APIs for collecting and processing soil health data from various sources.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAI",
      icon: <Brain size={24} className="text-purple-600" />,
      description: "Build AI models and inference engines for agricultural optimization.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Model Development",
          description: "Contribute to machine learning models for crop yield prediction and disease detection.",
          link: "#",
        },
        {
          title: "Inference API",
          description: "Develop APIs for serving AI models and processing agricultural data.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoIndex",
      icon: <BarChart size={24} className="text-blue-600" />,
      description: "Develop data visualization and metrics tracking for agricultural sustainability.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Metrics Engine",
          description:
            "Contribute to the core engine for calculating and tracking agricultural sustainability metrics.",
          link: "#",
        },
        {
          title: "Visualization Components",
          description: "Develop data visualization components for displaying agricultural metrics.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFund",
      icon: <Database size={24} className="text-emerald-600" />,
      description: "Build financial platforms and payment processing for agricultural investments.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Investment Platform",
          description: "Contribute to the platform for managing agricultural investments and funding.",
          link: "#",
        },
        {
          title: "Payment Processing",
          description: "Develop secure payment processing systems for agricultural transactions.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoVerse",
      icon: <Globe size={24} className="text-indigo-600" />,
      description: "Create immersive digital experiences for agricultural education and visualization.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Digital Twin Development",
          description: "Contribute to the development of digital twins for agricultural systems.",
          link: "#",
        },
        {
          title: "Interactive Experiences",
          description: "Develop interactive web experiences for agricultural education and visualization.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoBotics",
      icon: <Cpu size={24} className="text-red-600" />,
      description: "Develop control systems and interfaces for agricultural robotics.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Robotics Control",
          description: "Contribute to control systems for agricultural robots and automation.",
          link: "#",
        },
        {
          title: "Sensor Integration",
          description: "Develop integrations for various sensors used in agricultural robotics.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoTransit",
      icon: <Network size={24} className="text-orange-600" />,
      description: "Build logistics and supply chain management systems for agricultural products.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Logistics Tracking",
          description: "Contribute to systems for tracking agricultural products through the supply chain.",
          link: "#",
        },
        {
          title: "Route Optimization",
          description: "Develop algorithms for optimizing transportation routes for agricultural products.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoGov",
      icon: <Users size={24} className="text-cyan-600" />,
      description: "Develop governance platforms and policy management for agricultural communities.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Governance Platform",
          description: "Contribute to platforms for community governance and decision-making.",
          link: "#",
        },
        {
          title: "Policy Management",
          description: "Develop systems for creating and managing agricultural policies and regulations.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSecure",
      icon: <Lock size={24} className="text-gray-600" />,
      description: "Build security systems and data protection for agricultural information.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Security Infrastructure",
          description: "Contribute to the security infrastructure for protecting agricultural data.",
          link: "#",
        },
        {
          title: "Access Control",
          description: "Develop systems for managing access to sensitive agricultural data and systems.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFoundation",
      icon: <Cloud size={24} className="text-teal-600" />,
      description: "Create community platforms and educational resources for sustainable agriculture.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Community Platform",
          description: "Contribute to platforms for connecting and engaging agricultural communities.",
          link: "#",
        },
        {
          title: "Educational Resources",
          description: "Develop systems for sharing and accessing agricultural knowledge and resources.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAgent",
      icon: <Bot size={24} className="text-pink-600" />,
      description: "Develop autonomous agent systems for agricultural operations.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Agent Framework",
          description: "Contribute to the framework for developing and deploying agricultural agents.",
          link: "#",
        },
        {
          title: "Agent Communication",
          description: "Develop systems for communication between agricultural agents and other systems.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSystem",
      icon: <Code size={24} className="text-amber-600" />,
      description: "Build integration platforms and system management for all EatoSystems.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "System Integration",
          description: "Contribute to systems for integrating and managing all EatoSystems components.",
          link: "#",
        },
        {
          title: "API Gateway",
          description: "Develop API gateways for routing and managing requests across EatoSystems.",
          link: "#",
        },
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4">
      <PageHeader
        title="Contribute with GitHub"
        description="Join our open-source community and contribute code to build the future of sustainable food systems."
        image="/placeholder.svg?height=600&width=1200&query=collaborative+coding+on+github+with+multiple+developers"
        gradient="from-green-500 to-green-600"
      />

      <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Open Source Development for EatoSystems</h2>
          <p className="text-gray-600 mb-6">
            GitHub provides the collaborative platform where developers from around the world come together to build the
            12 EatoSystems that will transform our global food system.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://github.com" target="_blank" className="flex items-center">
                <span>Visit GitHub</span>
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
        <div className="md:w-1/2 bg-green-50 p-12 rounded-xl flex items-center justify-center">
          <Github size={120} className="text-green-600" />
        </div>
      </div>

      {/* Contribution Paths Section */}
      <SystemContributionPaths
        title="Contribution Paths for Each EatoSystem"
        description="Discover specific ways to contribute to each of the 12 EatoSystems through GitHub's collaborative development platform."
        systems={githubSystemContributions}
        platform="GitHub"
      />

      <FeatureGrid features={features} />

      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 rounded-xl transform rotate-1"></div>
        <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200 z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Collaborative Development</h2>
              <p className="text-gray-600 mb-4">
                GitHub's collaborative features make it easy for developers around the world to work together on
                building the EatoSystems platform, from code contributions to issue tracking and project management.
              </p>
              <p className="text-gray-600 mb-6">
                By contributing to the EatoSystems repositories on GitHub, you're helping to build a more sustainable
                and resilient global food system through open-source collaboration.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&query=github+pull+request+review+process"
                alt="GitHub collaboration"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Code size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Code Contributions</h3>
            <p className="text-white/90 mb-4">
              Contribute code to any of the 12 EatoSystems repositories, from fixing bugs to implementing new features
              that advance sustainable agriculture.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-green-600">
              <Link href="#" className="flex items-center">
                <span>Contribution Guide</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Users size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Collaboration</h3>
            <p className="text-white/90 mb-4">
              Join a global community of developers working together to build the future of sustainable food systems
              through open-source collaboration.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-blue-600">
              <Link href="#" className="flex items-center">
                <span>Join Community</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ProjectShowcase
        title="Featured Repositories"
        description="Explore these example repositories from the EatoSystems GitHub organization."
        projects={projects}
        background="bg-green-50"
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
        title="Ready to Contribute?"
        description="Join our community of developers building the future of sustainable food systems through open-source collaboration."
        buttonText="Start Contributing"
        buttonLink="https://github.com"
        isExternal={true}
        gradient="from-green-500 to-green-600"
      />
    </div>
  )
}
