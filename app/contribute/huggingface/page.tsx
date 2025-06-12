"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Bot,
  Database,
  BarChart,
  Leaf,
  Brain,
  Share2,
  Globe,
  Cpu,
  Network,
  Users,
  Lock,
  Cloud,
  Code,
} from "lucide-react"
import PageHeader from "@/components/page-header"
import FeatureGrid from "@/components/feature-grid"
import ProjectShowcase from "@/components/project-showcase"
import CTASection from "@/components/cta-section"
import GettingStarted from "@/components/getting-started"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function HuggingFaceContributePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: <Bot size={24} />,
      title: "AI Models",
      description:
        "Access and contribute to state-of-the-art AI models specifically trained for agricultural applications, including crop disease detection and yield prediction.",
      accentColor: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: <Database size={24} />,
      title: "Datasets",
      description:
        "Contribute to and utilize standardized datasets for training and evaluating models across diverse agricultural contexts and ecosystems.",
      accentColor: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: <BarChart size={24} />,
      title: "Analytics Tools",
      description:
        "Develop and share tools for analyzing agricultural data, from soil health metrics to supply chain optimization.",
      accentColor: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: <Leaf size={24} />,
      title: "Regenerative Agriculture",
      description:
        "Build models and tools specifically designed to support and advance regenerative agricultural practices and outcomes.",
      accentColor: "bg-yellow-50 text-yellow-600",
    },
  ]

  const projects = [
    {
      title: "Crop Disease Detection",
      description: "A computer vision model trained to identify and diagnose common crop diseases from images.",
      image: "/ai-crop-disease-visualization.png",
      link: "#",
      buttonText: "View Model",
    },
    {
      title: "Soil Health Predictor",
      description:
        "A machine learning model that predicts soil health metrics based on environmental and management factors.",
      image: "/soil-health-prediction-dashboard.png",
      link: "#",
      buttonText: "View Model",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Create a Hugging Face Account",
      description: "Sign up for a Hugging Face account to access and contribute to models and datasets.",
      buttonText: "Sign up",
      buttonLink: "https://huggingface.co/join",
      isExternal: true,
    },
    {
      number: 2,
      title: "Explore EatoSystems Models",
      description: "Browse the EatoSystems organization on Hugging Face to discover existing models and datasets.",
      buttonText: "Browse Models",
      buttonLink: "#",
      isExternal: true,
    },
    {
      number: 3,
      title: "Set Up Your Development Environment",
      description:
        "Configure your local environment with the necessary tools and libraries for working with Hugging Face models.",
      buttonText: "Setup Guide",
      buttonLink: "#",
    },
    {
      number: 4,
      title: "Contribute Your First Model or Dataset",
      description: "Follow our guide to contribute your first model or dataset to the EatoSystems collection.",
      buttonText: "Contribution Guide",
      buttonLink: "#",
    },
  ]

  const huggingfaceSystemContributions = [
    {
      system: "EatoMe",
      icon: <Leaf size={24} className="text-green-600" />,
      description: "Develop AI models for personal food tracking and soil health monitoring.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Nutritional Analysis Model",
          description:
            "Create models that can analyze food images to determine nutritional content and sustainability metrics.",
          link: "#",
        },
        {
          title: "Soil Health Dataset",
          description:
            "Contribute to datasets for training models that can assess soil health from images or sensor data.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAI",
      icon: <Brain size={24} className="text-purple-600" />,
      description: "Build core AI models for agricultural optimization and decision support.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Crop Disease Detection",
          description: "Develop computer vision models for identifying plant diseases from images.",
          link: "#",
        },
        {
          title: "Yield Prediction Models",
          description: "Create machine learning models that predict crop yields based on environmental factors.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoIndex",
      icon: <BarChart size={24} className="text-blue-600" />,
      description: "Develop models for analyzing and predicting agricultural sustainability metrics.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Carbon Sequestration Models",
          description: "Build models that predict carbon sequestration potential of different agricultural practices.",
          link: "#",
        },
        {
          title: "Sustainability Metrics Dataset",
          description: "Contribute to datasets for training models to assess agricultural sustainability.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFund",
      icon: <Database size={24} className="text-emerald-600" />,
      description: "Create models for financial analysis and risk assessment in agricultural investments.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Investment Risk Models",
          description: "Develop models that assess risk factors for agricultural investments.",
          link: "#",
        },
        {
          title: "Financial Forecasting",
          description: "Create models that predict financial outcomes for agricultural projects.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoVerse",
      icon: <Globe size={24} className="text-indigo-600" />,
      description: "Build models for creating and enhancing digital twins of agricultural systems.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Digital Twin Generation",
          description: "Develop models that can generate digital representations of physical agricultural systems.",
          link: "#",
        },
        {
          title: "Environmental Simulation",
          description: "Create models that simulate environmental conditions and their effects on agriculture.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoBotics",
      icon: <Cpu size={24} className="text-red-600" />,
      description: "Develop AI models for agricultural robotics and automation systems.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Computer Vision for Robotics",
          description:
            "Build computer vision models for robotic navigation and object recognition in agricultural settings.",
          link: "#",
        },
        {
          title: "Robotic Control Models",
          description: "Develop reinforcement learning models for optimizing robotic control in agriculture.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoTransit",
      icon: <Network size={24} className="text-orange-600" />,
      description: "Create models for optimizing agricultural logistics and supply chain management.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Route Optimization",
          description: "Develop models that optimize transportation routes for agricultural products.",
          link: "#",
        },
        {
          title: "Supply Chain Prediction",
          description: "Create models that predict supply chain disruptions and optimize inventory management.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoGov",
      icon: <Users size={24} className="text-cyan-600" />,
      description: "Build models for policy analysis and governance in agricultural communities.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Policy Impact Models",
          description: "Develop models that predict the impacts of different agricultural policies.",
          link: "#",
        },
        {
          title: "Community Decision Support",
          description: "Create models that support community decision-making processes.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSecure",
      icon: <Lock size={24} className="text-gray-600" />,
      description: "Develop models for enhancing security and data protection in agricultural systems.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Anomaly Detection",
          description: "Build models that detect unusual patterns or security threats in agricultural data.",
          link: "#",
        },
        {
          title: "Privacy-Preserving ML",
          description: "Develop privacy-preserving machine learning techniques for sensitive agricultural data.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFoundation",
      icon: <Cloud size={24} className="text-teal-600" />,
      description: "Create models for educational purposes and community building in sustainable agriculture.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Educational AI Models",
          description: "Develop models that support agricultural education and knowledge sharing.",
          link: "#",
        },
        {
          title: "Community Resource Allocation",
          description: "Create models that optimize the allocation of resources within agricultural communities.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAgent",
      icon: <Bot size={24} className="text-pink-600" />,
      description: "Build AI agents for autonomous decision-making in agricultural operations.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "Autonomous Agent Models",
          description: "Develop models for autonomous decision-making in agricultural contexts.",
          link: "#",
        },
        {
          title: "Multi-Agent Coordination",
          description: "Create models that enable coordination between multiple agricultural agents.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSystem",
      icon: <Code size={24} className="text-amber-600" />,
      description: "Develop models for system integration and optimization across all EatoSystems.",
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
      paths: [
        {
          title: "System Integration Models",
          description: "Build models that optimize the integration of different EatoSystems components.",
          link: "#",
        },
        {
          title: "Cross-System Optimization",
          description: "Develop models that optimize performance across multiple EatoSystems.",
          link: "#",
        },
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4">
      <PageHeader
        title="Contribute with Hugging Face"
        description="Access and contribute to open-source models for regenerative agriculture, food systems analysis, and environmental monitoring."
        image="/agricultural-ai-visualization.png"
        gradient="from-yellow-500 to-yellow-600"
      />

      <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Harness the Power of AI for Agriculture</h2>
          <p className="text-gray-600 mb-6">
            Hugging Face provides a platform for accessing and contributing to state-of-the-art AI models that can help
            solve critical challenges in sustainable agriculture and food systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Link href="https://huggingface.co" target="_blank" className="flex items-center">
                <span>Visit Hugging Face</span>
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
        <div className="md:w-1/2 bg-yellow-50 p-12 rounded-xl flex items-center justify-center">
          <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40 100C51.0457 100 60 91.0457 60 80C60 68.9543 51.0457 60 40 60C28.9543 60 20 68.9543 20 80C20 91.0457 28.9543 100 40 100Z"
              fill="#FFD21E"
            />
            <path
              d="M80 100C91.0457 100 100 91.0457 100 80C100 68.9543 91.0457 60 80 60C68.9543 60 60 68.9543 60 80C60 91.0457 68.9543 100 80 100Z"
              fill="#FFD21E"
            />
            <path
              d="M40 60C51.0457 60 60 51.0457 60 40C60 28.9543 51.0457 20 40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60Z"
              fill="#FFD21E"
            />
            <path
              d="M80 60C91.0457 60 100 51.0457 100 40C100 28.9543 91.0457 20 80 20C68.9543 20 60 28.9543 60 40C60 51.0457 68.9543 60 80 60Z"
              fill="#FFD21E"
            />
          </svg>
        </div>
      </div>

      {/* Contribution Paths Section */}
      <SystemContributionPaths
        title="Contribution Paths for Each EatoSystem"
        description="Discover specific ways to contribute to each of the 12 EatoSystems using Hugging Face's AI platform."
        systems={huggingfaceSystemContributions}
        platform="Hugging Face"
      />

      <FeatureGrid features={features} />

      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl transform rotate-1"></div>
        <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200 z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Collaborative AI Development</h2>
              <p className="text-gray-600 mb-4">
                Hugging Face's collaborative platform makes it easy to share, discover, and build upon AI models and
                datasets specifically tailored for agricultural applications.
              </p>
              <p className="text-gray-600 mb-6">
                By contributing to the EatoSystems collection on Hugging Face, you're helping to build a comprehensive
                ecosystem of AI tools for sustainable food systems.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/collaborative-ai-agriculture.png"
                alt="Collaborative AI development"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Brain size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pre-trained Models</h3>
            <p className="text-white/90 mb-4">
              Access a growing collection of pre-trained models specifically designed for agricultural applications,
              from crop disease detection to yield prediction.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-yellow-600">
              <Link href="#" className="flex items-center">
                <span>Explore Models</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <Share2 size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Datasets & Fine-tuning</h3>
            <p className="text-white/90 mb-4">
              Contribute to and utilize standardized datasets for training and fine-tuning models across diverse
              agricultural contexts and ecosystems.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-green-600">
              <Link href="#" className="flex items-center">
                <span>Explore Datasets</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ProjectShowcase
        title="Featured Models"
        description="Explore these example models developed for the EatoSystems platform."
        projects={projects}
        background="bg-yellow-50"
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
        description="Join our community of AI researchers and practitioners building the future of sustainable food systems."
        buttonText="Get Started with Hugging Face"
        buttonLink="https://huggingface.co"
        isExternal={true}
        gradient="from-yellow-500 to-yellow-600"
      />
    </div>
  )
}
