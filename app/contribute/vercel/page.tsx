"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Server,
  Globe,
  Zap,
  Clock,
  Workflow,
  Shield,
  Database,
  Leaf,
  Cloud,
  Code,
  BarChart,
  Network,
  Bot,
  Cpu,
  Lock,
  Users,
  Brain,
} from "lucide-react"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function VercelContributePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const vercelSystemContributions = [
    {
      system: "EatoMe",
      icon: <Leaf size={24} className="text-green-600" />,
      description: "Deploy soil monitoring and personal food tracking applications with global reach.",
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
      paths: [
        {
          title: "Soil Monitoring Dashboard",
          description: "Deploy real-time soil monitoring dashboards that visualize data from IoT sensors.",
          link: "#",
        },
        {
          title: "Personal Food Tracking API",
          description: "Build and deploy serverless APIs for tracking personal food consumption and nutrition.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAI",
      icon: <Brain size={24} className="text-purple-600" />,
      description: "Deploy AI inference engines and machine learning models for agricultural optimization.",
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
      paths: [
        {
          title: "Crop Prediction API",
          description: "Deploy serverless functions for crop yield prediction and disease detection.",
          link: "#",
        },
        {
          title: "AI Model Deployment",
          description: "Use Vercel's edge functions to serve machine learning models with low latency.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoIndex",
      icon: <BarChart size={24} className="text-blue-600" />,
      description: "Deploy data visualization dashboards and metrics APIs for agricultural sustainability.",
      accentColor: "bg-blue-50",
      bgColor: "bg-blue-50/50",
      paths: [
        {
          title: "Sustainability Metrics Dashboard",
          description: "Deploy interactive dashboards for visualizing agricultural sustainability metrics.",
          link: "#",
        },
        {
          title: "Real-time Data Processing",
          description: "Build serverless functions for processing and analyzing agricultural data streams.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFund",
      icon: <Database size={24} className="text-emerald-600" />,
      description: "Deploy financial platforms and payment processing systems for agricultural investments.",
      accentColor: "bg-emerald-50",
      bgColor: "bg-emerald-50/50",
      paths: [
        {
          title: "Investment Platform",
          description: "Deploy secure platforms for managing agricultural investments and funding.",
          link: "#",
        },
        {
          title: "Payment Processing API",
          description: "Build serverless APIs for handling transactions and financial operations.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoVerse",
      icon: <Globe size={24} className="text-indigo-600" />,
      description: "Deploy immersive digital experiences and virtual environments for agricultural education.",
      accentColor: "bg-indigo-50",
      bgColor: "bg-indigo-50/50",
      paths: [
        {
          title: "Digital Twin Deployment",
          description: "Deploy digital twin applications that model real-world agricultural systems.",
          link: "#",
        },
        {
          title: "Interactive Learning Environments",
          description: "Build and deploy interactive web applications for agricultural education.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoBotics",
      icon: <Cpu size={24} className="text-red-600" />,
      description: "Deploy control systems and interfaces for agricultural robotics and automation.",
      accentColor: "bg-red-50",
      bgColor: "bg-red-50/50",
      paths: [
        {
          title: "Robotics Control Interface",
          description: "Deploy web interfaces for monitoring and controlling agricultural robots.",
          link: "#",
        },
        {
          title: "Automation System API",
          description: "Build serverless APIs for coordinating automated agricultural systems.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoTransit",
      icon: <Network size={24} className="text-orange-600" />,
      description: "Deploy logistics tracking and supply chain management applications with global reach.",
      accentColor: "bg-orange-50",
      bgColor: "bg-orange-50/50",
      paths: [
        {
          title: "Supply Chain Dashboard",
          description: "Deploy real-time dashboards for tracking agricultural products through the supply chain.",
          link: "#",
        },
        {
          title: "Logistics API",
          description: "Build serverless APIs for optimizing agricultural logistics and transportation.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoGov",
      icon: <Users size={24} className="text-cyan-600" />,
      description: "Deploy governance platforms and policy management systems for agricultural communities.",
      accentColor: "bg-cyan-50",
      bgColor: "bg-cyan-50/50",
      paths: [
        {
          title: "Governance Platform",
          description: "Deploy secure platforms for community governance and decision-making.",
          link: "#",
        },
        {
          title: "Policy Management System",
          description: "Build applications for creating and managing agricultural policies and regulations.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSecure",
      icon: <Lock size={24} className="text-gray-600" />,
      description: "Deploy security systems and data protection services for agricultural information.",
      accentColor: "bg-gray-50",
      bgColor: "bg-gray-50/50",
      paths: [
        {
          title: "Security Monitoring Dashboard",
          description: "Deploy dashboards for monitoring and managing agricultural data security.",
          link: "#",
        },
        {
          title: "Data Protection API",
          description: "Build serverless APIs for securing and protecting sensitive agricultural data.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoFoundation",
      icon: <Cloud size={24} className="text-teal-600" />,
      description: "Deploy community platforms and educational resources for sustainable agriculture.",
      accentColor: "bg-teal-50",
      bgColor: "bg-teal-50/50",
      paths: [
        {
          title: "Community Platform",
          description: "Deploy platforms for connecting and engaging agricultural communities.",
          link: "#",
        },
        {
          title: "Educational Resource Portal",
          description: "Build applications for sharing and accessing agricultural knowledge and resources.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoAgent",
      icon: <Bot size={24} className="text-pink-600" />,
      description: "Deploy autonomous agent systems and coordination services for agricultural operations.",
      accentColor: "bg-pink-50",
      bgColor: "bg-pink-50/50",
      paths: [
        {
          title: "Agent Coordination Dashboard",
          description: "Deploy dashboards for monitoring and managing autonomous agricultural agents.",
          link: "#",
        },
        {
          title: "Agent Communication API",
          description: "Build serverless APIs for facilitating communication between agricultural agents.",
          link: "#",
        },
      ],
    },
    {
      system: "EatoSystem",
      icon: <Code size={24} className="text-amber-600" />,
      description: "Deploy integration platforms and system management tools for connecting all EatoSystems.",
      accentColor: "bg-amber-50",
      bgColor: "bg-amber-50/50",
      paths: [
        {
          title: "System Integration Platform",
          description: "Deploy platforms for integrating and managing all EatoSystems components.",
          link: "#",
        },
        {
          title: "API Gateway",
          description: "Build serverless API gateways for routing and managing requests across EatoSystems.",
          link: "#",
        },
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-90 z-10"></div>
        <Image
          src="/agricultural-data-network.png"
          alt="Vercel global network"
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Deploy with Vercel</h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Deploy and scale the distributed components of all 12 EatoSystems with optimized edge functions and
            serverless architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white hover:bg-gray-100 text-black">
              <Link href="https://vercel.com" target="_blank" className="flex items-center">
                <span>Try Vercel</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="#getting-started" className="flex items-center">
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Contribution Paths Section */}
      <SystemContributionPaths
        title="Contribution Paths for Each EatoSystem"
        description="Discover specific ways to contribute to each of the 12 EatoSystems using Vercel's deployment platform."
        systems={vercelSystemContributions}
        platform="Vercel"
      />

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">How Vercel Empowers EatoSystems Development</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Vercel's serverless platform provides the ideal infrastructure for deploying and scaling all 12 EatoSystems
          globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Serverless Architecture</h3>
            <p className="text-gray-600 mb-4">
              Deploy EatoSystems components as serverless functions that automatically scale based on demand, ensuring
              optimal performance and cost efficiency across all systems.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Auto-scaling APIs for soil monitoring data (EatoMe)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>On-demand processing for AI inference engines (EatoAI)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Cost-efficient infrastructure that scales with usage</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Edge Network</h3>
            <p className="text-gray-600 mb-4">
              Leverage Vercel's global edge network to deliver EatoSystems services with low latency to users around the
              world, critical for real-time agricultural data.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Real-time logistics tracking for food transport (EatoTransit)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Low-latency digital twin experiences (EatoVerse)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Global access to sustainability metrics (EatoIndex)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Deployments</h3>
            <p className="text-gray-600 mb-4">
              Implement continuous integration and deployment pipelines that automatically build, test, and deploy
              updates to all EatoSystems components.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automated deployments from GitHub repositories</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Instant rollbacks if issues are detected</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Continuous delivery for all EatoSystems components</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Preview Environments</h3>
            <p className="text-gray-600 mb-4">
              Create isolated preview environments for testing new features and updates before deploying them to
              production systems across the EatoSystems ecosystem.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Test new governance features safely (EatoGov)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Validate security measures before deployment (EatoSecure)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Share previews with stakeholders for feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Deployment Workflow Section */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl transform rotate-1"></div>
        <div className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-200 z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <Image
                src="/continuous-deployment-pipeline.png"
                alt="Continuous deployment pipeline"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Seamless Deployment for All EatoSystems</h2>
              <p className="text-gray-600 mb-4">
                With Vercel's Git integration, every push to your repository triggers an automatic build and deployment
                process, making it easy to iterate quickly on any EatoSystem component.
              </p>
              <p className="text-gray-600 mb-6">
                This seamless workflow enables rapid development across all 12 EatoSystems, ensuring that innovations
                can be quickly deployed to users worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-semibold mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Push code to your repository</h4>
                    <p className="text-gray-600 text-sm">
                      Updates to any EatoSystem component are automatically detected
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-semibold mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Vercel builds and tests your changes</h4>
                    <p className="text-gray-600 text-sm">Automated testing ensures quality across all EatoSystems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 text-white font-semibold mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Deploy to global edge network</h4>
                    <p className="text-gray-600 text-sm">Your EatoSystem component is instantly available worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-black text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <Workflow size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">CI/CD Integration</h3>
            <p className="text-white/80 mb-4">
              Automate your testing and deployment pipeline to ensure quality and reliability for every update across
              all 12 EatoSystems.
            </p>
            <p className="text-white/80">
              Perfect for coordinating development across distributed teams working on different EatoSystems components.
            </p>
          </div>
        </div>
        <div className="bg-green-600 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="relative z-10">
            <Shield size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-white/80 mb-4">
              Benefit from Vercel's enterprise-grade security features to protect sensitive agricultural data across
              EatoSecure and all other systems.
            </p>
            <p className="text-white/80">
              Critical for maintaining trust and compliance in financial transactions (EatoFund) and governance
              (EatoGov).
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <Zap size={32} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Edge Functions</h3>
            <p className="text-white/80 mb-4">
              Run code at the edge for faster response times and reduced latency for global users of all EatoSystems.
            </p>
            <p className="text-white/80">
              Essential for real-time applications like robotics control (EatoBotics) and logistics tracking
              (EatoTransit).
            </p>
          </div>
        </div>
      </div>

      {/* Featured Deployments */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">EatoSystems Deployments</h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Explore these example EatoSystems components deployed on Vercel, showcasing the platform's capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image
                src="/agricultural-api-dashboard.png"
                alt="EatoIndex API"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">EatoIndex</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EatoIndex API</h3>
              <p className="text-gray-600 mb-4">
                A serverless API for accessing and updating agricultural sustainability metrics and indices, a core
                component of the EatoIndex system.
              </p>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>View Deployment</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300">
            <div className="h-48 bg-gray-200 relative overflow-hidden">
              <Image
                src="/agriculture-ml-inference.png"
                alt="EatoAI Inference Engine"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">EatoAI</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EatoAI Inference Engine</h3>
              <p className="text-gray-600 mb-4">
                A serverless machine learning inference engine for crop yield prediction and optimization, powering the
                predictive capabilities of EatoAI.
              </p>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>View Deployment</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div id="getting-started" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Start Deploying EatoSystems</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Follow these steps to begin deploying components for the 12 EatoSystems using Vercel.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Sign up for Vercel</h4>
                <p className="text-gray-600 mb-2">
                  Create an account on Vercel to access their serverless platform and deployment tools for EatoSystems.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="https://vercel.com/signup" target="_blank" className="flex items-center">
                    <span>Sign up</span>
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Choose an EatoSystem to Support</h4>
                <p className="text-gray-600 mb-2">
                  Select one or more of the 12 EatoSystems where your deployment expertise can make the most impact,
                  based on your interests and skills.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="/eato-systems" className="flex items-center">
                    <span>Explore EatoSystems</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Clone the EatoSystems Repository</h4>
                <p className="text-gray-600 mb-2">
                  Get access to the EatoSystems codebase and clone the repository for your chosen system to your local
                  environment.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="/contribute/github" className="flex items-center">
                    <span>GitHub Instructions</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Configure Your Project</h4>
                <p className="text-gray-600 mb-2">
                  Set up your project with the necessary configuration for Vercel deployment, including environment
                  variables and build settings specific to your EatoSystem.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Configuration Guide</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                5
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Deploy Your First Component</h4>
                <p className="text-gray-600 mb-2">
                  Deploy your first EatoSystem component to Vercel and integrate it with the broader platform ecosystem.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Deployment Guide</span>
                  </Link>
                </Button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-black to-gray-700 rounded-xl p-8 mb-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy the Future of Food Systems?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of developers deploying and scaling the 12 EatoSystems to build a more sustainable and
            resilient global food network.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-black">
            <Link href="https://vercel.com" target="_blank" className="flex items-center">
              <span>Get Started with Vercel</span>
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
