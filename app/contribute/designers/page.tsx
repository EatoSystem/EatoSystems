import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Figma,
  PenTool,
  Layout,
  Eye,
  Sprout,
  Database,
  Network,
  BarChart,
  Brain,
  Cpu,
  Shield,
  Heart,
  Compass,
  Zap,
  Globe,
} from "lucide-react"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function DesignersContributePage() {
  const systemContributions = [
    {
      system: "EatoMe",
      icon: <Sprout className="text-green-600" size={24} />,
      description: "Design interfaces and visualizations for soil health monitoring and management.",
      paths: [
        {
          title: "Soil Health Dashboard",
          description: "Design intuitive dashboards for farmers to monitor and understand soil health data.",
          link: "#",
        },
        {
          title: "Mobile Field Interface",
          description: "Create mobile interfaces for in-field soil health data collection and visualization.",
          link: "#",
        },
        {
          title: "Data Visualization",
          description: "Develop visualizations that make complex soil health data accessible and actionable.",
          link: "#",
        },
      ],
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
    },
    {
      system: "EatoAI",
      icon: <Brain className="text-purple-600" size={24} />,
      description: "Design interfaces for AI-powered agricultural tools and visualizations.",
      paths: [
        {
          title: "AI Recommendation Interface",
          description: "Design interfaces that present AI recommendations in clear, actionable formats.",
          link: "#",
        },
        {
          title: "Model Explainability",
          description: "Create visualizations that help users understand how AI models make decisions.",
          link: "#",
        },
        {
          title: "Data Collection Tools",
          description: "Design interfaces for collecting and labeling agricultural data for AI training.",
          link: "#",
        },
      ],
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
    },
    {
      system: "EatoFund",
      icon: <BarChart className="text-blue-600" size={24} />,
      description: "Design financial tools and visualizations for sustainable agriculture funding.",
      paths: [
        {
          title: "Financial Dashboard",
          description: "Create dashboards that help farmers track financial performance and funding opportunities.",
          link: "#",
        },
        {
          title: "Impact Visualization",
          description: "Design visualizations that communicate the impact of investments in sustainable agriculture.",
          link: "#",
        },
        {
          title: "Funding Application Interface",
          description: "Design user-friendly interfaces for applying for grants and other funding opportunities.",
          link: "#",
        },
      ],
      accentColor: "bg-blue-50",
      bgColor: "bg-blue-50/50",
    },
    {
      system: "EatoBotics",
      icon: <Cpu className="text-orange-600" size={24} />,
      description: "Design interfaces for agricultural robotics and automation systems.",
      paths: [
        {
          title: "Robot Control Interface",
          description: "Design intuitive interfaces for controlling and monitoring agricultural robots.",
          link: "#",
        },
        {
          title: "Field Mapping Tools",
          description: "Create interfaces for mapping and planning robotic operations in agricultural fields.",
          link: "#",
        },
        {
          title: "Maintenance Dashboard",
          description: "Design dashboards for monitoring robot health and scheduling maintenance.",
          link: "#",
        },
      ],
      accentColor: "bg-orange-50",
      bgColor: "bg-orange-50/50",
    },
    {
      system: "EatoIndex",
      icon: <Database className="text-emerald-600" size={24} />,
      description: "Design interfaces and visualizations for agricultural sustainability metrics and indices.",
      paths: [
        {
          title: "Sustainability Dashboard",
          description: "Create dashboards that visualize sustainability metrics across different dimensions.",
          link: "#",
        },
        {
          title: "Comparative Visualization",
          description: "Design tools for comparing sustainability performance across farms, regions, or products.",
          link: "#",
        },
        {
          title: "Data Collection Forms",
          description: "Design user-friendly forms for collecting sustainability data from diverse stakeholders.",
          link: "#",
        },
      ],
      accentColor: "bg-emerald-50",
      bgColor: "bg-emerald-50/50",
    },
    {
      system: "EatoVerse",
      icon: <Globe className="text-indigo-600" size={24} />,
      description: "Design interfaces and visualizations for digital twins and simulations of food systems.",
      paths: [
        {
          title: "Simulation Interface",
          description: "Design interfaces for interacting with and configuring food system simulations.",
          link: "#",
        },
        {
          title: "3D Visualization",
          description: "Create 3D visualizations of food system components and their interactions.",
          link: "#",
        },
        {
          title: "Scenario Planning Tools",
          description: "Design interfaces for creating and comparing different food system scenarios.",
          link: "#",
        },
      ],
      accentColor: "bg-indigo-50",
      bgColor: "bg-indigo-50/50",
    },
    {
      system: "EatoTransit",
      icon: <Compass className="text-cyan-600" size={24} />,
      description: "Design interfaces and visualizations for sustainable food transportation and logistics.",
      paths: [
        {
          title: "Logistics Dashboard",
          description: "Create dashboards for tracking and optimizing food transportation and logistics.",
          link: "#",
        },
        {
          title: "Route Optimization Interface",
          description: "Design interfaces for planning and optimizing food distribution routes.",
          link: "#",
        },
        {
          title: "Carbon Footprint Visualization",
          description:
            "Create visualizations that communicate the carbon footprint of different transportation options.",
          link: "#",
        },
      ],
      accentColor: "bg-cyan-50",
      bgColor: "bg-cyan-50/50",
    },
    {
      system: "EatoGov",
      icon: <Shield className="text-red-600" size={24} />,
      description: "Design interfaces for governance and policy tools related to sustainable food systems.",
      paths: [
        {
          title: "Policy Dashboard",
          description: "Create dashboards that visualize the impact of different policies on food systems.",
          link: "#",
        },
        {
          title: "Stakeholder Engagement Tools",
          description:
            "Design interfaces for facilitating engagement between policymakers and food system stakeholders.",
          link: "#",
        },
        {
          title: "Regulatory Compliance Interface",
          description: "Design tools that help food system actors understand and comply with regulations.",
          link: "#",
        },
      ],
      accentColor: "bg-red-50",
      bgColor: "bg-red-50/50",
    },
    {
      system: "EatoSecure",
      icon: <Shield className="text-amber-600" size={24} />,
      description: "Design interfaces and visualizations for food system security and resilience.",
      paths: [
        {
          title: "Risk Assessment Dashboard",
          description: "Create dashboards for assessing and visualizing risks to food system security.",
          link: "#",
        },
        {
          title: "Early Warning System",
          description:
            "Design interfaces for early warning systems that alert users to potential food system disruptions.",
          link: "#",
        },
        {
          title: "Resilience Planning Tools",
          description: "Design interfaces for planning and strengthening food system resilience.",
          link: "#",
        },
      ],
      accentColor: "bg-amber-50",
      bgColor: "bg-amber-50/50",
    },
    {
      system: "EatoFoundation",
      icon: <Heart className="text-pink-600" size={24} />,
      description: "Design core components and visual identity for the EatoSystems platform.",
      paths: [
        {
          title: "Design System",
          description: "Contribute to the EatoSystems design system, including components, patterns, and guidelines.",
          link: "/style-guide",
        },
        {
          title: "Visual Identity",
          description: "Help develop and refine the visual identity of EatoSystems and its components.",
          link: "#",
        },
        {
          title: "Documentation Design",
          description: "Design clear and accessible documentation for EatoSystems components and tools.",
          link: "#",
        },
      ],
      accentColor: "bg-pink-50",
      bgColor: "bg-pink-50/50",
    },
    {
      system: "EatoAgent",
      icon: <Zap className="text-yellow-600" size={24} />,
      description: "Design interfaces for autonomous agents in agricultural systems.",
      paths: [
        {
          title: "Agent Configuration Interface",
          description: "Design interfaces for configuring and deploying autonomous agents in agricultural settings.",
          link: "#",
        },
        {
          title: "Agent Monitoring Dashboard",
          description: "Create dashboards for monitoring the performance and status of agricultural agents.",
          link: "#",
        },
        {
          title: "Agent-Human Interaction",
          description: "Design interfaces for effective communication between autonomous agents and human users.",
          link: "#",
        },
      ],
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
    },
    {
      system: "EatoSystem",
      icon: <Network className="text-teal-600" size={24} />,
      description: "Design interfaces that integrate multiple EatoSystems components into cohesive solutions.",
      paths: [
        {
          title: "Integrated Dashboard",
          description: "Create dashboards that bring together data and functionality from multiple EatoSystems.",
          link: "#",
        },
        {
          title: "System Visualization",
          description:
            "Design visualizations that help users understand the relationships between different EatoSystems.",
          link: "#",
        },
        {
          title: "User Journey Mapping",
          description: "Map and design user journeys that span multiple EatoSystems components.",
          link: "#",
        },
      ],
      accentColor: "bg-teal-50",
      bgColor: "bg-teal-50/50",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Design with Us</h1>
        <p className="text-xl text-gray-600 mb-6">
          Create intuitive interfaces and data visualizations that make complex systems accessible to diverse
          stakeholders.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="https://www.figma.com" target="_blank" className="flex items-center">
              <Figma size={18} className="mr-2" />
              <span>Open Figma</span>
              <ExternalLink size={16} className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="#getting-started" scroll={true} className="flex items-center">
              <span>Get Started</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden mb-12 border border-gray-200">
        <Image
          src="/futuristic-agricultural-interface.png"
          alt="EatoSystems Design System"
          width={1200}
          height={400}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Layout size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Interface Design</h3>
          <p className="text-gray-600">
            Design intuitive and accessible interfaces for EatoSystems applications, from mobile apps for farmers to
            dashboards for policy makers.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <PenTool size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visual Identity</h3>
          <p className="text-gray-600">
            Contribute to the evolving visual language of EatoSystems, helping to communicate complex concepts through
            clear and compelling visuals.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
          <p className="text-gray-600">
            Create clear and insightful visualizations that help users understand complex data about food systems,
            environmental impacts, and agricultural practices.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Eye size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">User Research</h3>
          <p className="text-gray-600">
            Conduct research with diverse stakeholders to ensure EatoSystems tools are accessible, useful, and meet the
            needs of users across the food system.
          </p>
        </div>
      </div>

      <SystemContributionPaths
        title="Design Contribution Paths for Each EatoSystem"
        description="Find design opportunities for each of the 12 EatoSystems"
        systems={systemContributions}
        platform="Design"
      />

      <div id="getting-started" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Explore the Design System</h4>
                <p className="text-gray-600 mb-2">
                  Familiarize yourself with the EatoSystems design system, including components, patterns, and visual
                  language.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="/style-guide" scroll={true} className="flex items-center">
                    <span>View Design System</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Join the Design Community</h4>
                <p className="text-gray-600 mb-2">
                  Connect with other designers working on EatoSystems to share ideas, get feedback, and collaborate.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="/contribute/community" scroll={true} className="flex items-center">
                    <span>Join Community</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Access Design Files</h4>
                <p className="text-gray-600 mb-2">
                  Get access to the EatoSystems Figma workspace to view and contribute to design files.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Request Access</span>
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Submit Your First Design</h4>
                <p className="text-gray-600 mb-2">
                  Create and submit your first design contribution to the EatoSystems platform.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Submission Guidelines</span>
                  </Link>
                </Button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Design Projects</h2>
        <p className="text-gray-600 mb-6">Explore these example design projects for the EatoSystems platform.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/agricultural-sustainability-dashboard.png"
                alt="Farmer Mobile App"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Farmer Mobile App</h3>
              <p className="text-gray-600 mb-4">
                A mobile application designed for farmers to track soil health, crop performance, and connect with
                markets.
              </p>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>View Project</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 relative">
              <Image src="/react-code-generation.png" alt="Food System Dashboard" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Food System Dashboard</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive dashboard for visualizing and analyzing food system data at regional and global scales.
              </p>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>View Project</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Design the Future?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of designers creating intuitive and impactful interfaces for sustainable food systems.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Link href="#" className="flex items-center">
            <span>Start Designing</span>
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
