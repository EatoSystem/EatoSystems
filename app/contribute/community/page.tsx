import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Users,
  MessageSquare,
  Calendar,
  Globe,
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
} from "lucide-react"
import { SystemContributionPaths } from "@/components/system-contribution-paths"

export default function CommunityContributePage() {
  const systemContributions = [
    {
      system: "EatoMe",
      icon: <Sprout className="text-green-600" size={24} />,
      description:
        "Join the soil health community to collaborate on monitoring and improving soil health across different agricultural contexts.",
      paths: [
        {
          title: "Soil Health Working Group",
          description: "Contribute to discussions and research on soil health monitoring and regenerative practices.",
          link: "#working-groups",
        },
        {
          title: "Regional Field Testing",
          description: "Participate in regional field testing of soil health monitoring tools and methodologies.",
          link: "#",
        },
        {
          title: "Educational Resources",
          description: "Help develop educational resources about soil health for farmers and land managers.",
          link: "#",
        },
      ],
      accentColor: "bg-green-50",
      bgColor: "bg-green-50/50",
    },
    {
      system: "EatoAI",
      icon: <Brain className="text-purple-600" size={24} />,
      description: "Collaborate on AI applications for sustainable agriculture and food systems.",
      paths: [
        {
          title: "AI Ethics Discussion Group",
          description: "Participate in discussions about ethical considerations in agricultural AI applications.",
          link: "#",
        },
        {
          title: "Data Collection Initiatives",
          description: "Join community efforts to collect and label agricultural data for AI training.",
          link: "#",
        },
        {
          title: "AI Tool Testing",
          description: "Help test and provide feedback on AI tools for farmers and food producers.",
          link: "#",
        },
      ],
      accentColor: "bg-purple-50",
      bgColor: "bg-purple-50/50",
    },
    {
      system: "EatoFund",
      icon: <BarChart className="text-blue-600" size={24} />,
      description:
        "Engage with the community focused on financial tools and funding mechanisms for sustainable agriculture.",
      paths: [
        {
          title: "Financial Literacy Group",
          description: "Help develop resources to improve financial literacy among farmers and food producers.",
          link: "#",
        },
        {
          title: "Impact Investment Forum",
          description: "Participate in discussions about impact investment in sustainable food systems.",
          link: "#",
        },
        {
          title: "Grant Writing Workshops",
          description: "Join or lead workshops on grant writing for sustainable agriculture projects.",
          link: "#",
        },
      ],
      accentColor: "bg-blue-50",
      bgColor: "bg-blue-50/50",
    },
    {
      system: "EatoBotics",
      icon: <Cpu className="text-orange-600" size={24} />,
      description: "Join the robotics and automation community focused on sustainable agricultural technologies.",
      paths: [
        {
          title: "Open Hardware Group",
          description: "Collaborate on open-source hardware designs for agricultural robotics.",
          link: "#",
        },
        {
          title: "Field Testing Network",
          description: "Participate in field testing of robotic systems in different agricultural contexts.",
          link: "#",
        },
        {
          title: "Accessibility Initiatives",
          description: "Work on making robotic tools accessible to small-scale farmers worldwide.",
          link: "#",
        },
      ],
      accentColor: "bg-orange-50",
      bgColor: "bg-orange-50/50",
    },
    {
      system: "EatoIndex",
      icon: <Database className="text-emerald-600" size={24} />,
      description: "Collaborate on data standards and metrics for measuring and tracking sustainable food systems.",
      paths: [
        {
          title: "Standards Working Group",
          description: "Contribute to the development of data standards for agricultural sustainability metrics.",
          link: "#",
        },
        {
          title: "Regional Data Collection",
          description: "Organize or participate in regional data collection initiatives.",
          link: "#",
        },
        {
          title: "Data Visualization Community",
          description: "Collaborate on effective ways to visualize complex food system data.",
          link: "#",
        },
      ],
      accentColor: "bg-emerald-50",
      bgColor: "bg-emerald-50/50",
    },
    {
      system: "EatoVerse",
      icon: <Globe className="text-indigo-600" size={24} />,
      description: "Join the digital twin and simulation community focused on modeling food systems.",
      paths: [
        {
          title: "Simulation Validation Group",
          description: "Help validate simulation models against real-world data and scenarios.",
          link: "#",
        },
        {
          title: "Educational Simulations",
          description: "Develop educational simulations to help people understand complex food systems.",
          link: "#",
        },
        {
          title: "Participatory Modeling",
          description: "Facilitate participatory modeling sessions with diverse stakeholders.",
          link: "#",
        },
      ],
      accentColor: "bg-indigo-50",
      bgColor: "bg-indigo-50/50",
    },
    {
      system: "EatoTransit",
      icon: <Compass className="text-cyan-600" size={24} />,
      description: "Engage with the community focused on sustainable food transportation and logistics.",
      paths: [
        {
          title: "Local Food Networks",
          description: "Help develop and strengthen local food distribution networks in your region.",
          link: "#",
        },
        {
          title: "Carbon Reduction Initiatives",
          description: "Participate in projects focused on reducing carbon emissions in food transportation.",
          link: "#",
        },
        {
          title: "Last-Mile Solutions",
          description: "Collaborate on innovative last-mile delivery solutions for food products.",
          link: "#",
        },
      ],
      accentColor: "bg-cyan-50",
      bgColor: "bg-cyan-50/50",
    },
    {
      system: "EatoGov",
      icon: <Shield className="text-red-600" size={24} />,
      description: "Join the governance and policy community focused on enabling sustainable food systems.",
      paths: [
        {
          title: "Policy Working Group",
          description: "Contribute to discussions and research on policies that support sustainable food systems.",
          link: "#",
        },
        {
          title: "Stakeholder Engagement",
          description: "Help facilitate engagement between policymakers and food system stakeholders.",
          link: "#",
        },
        {
          title: "Regulatory Frameworks",
          description: "Collaborate on developing regulatory frameworks that enable innovation in food systems.",
          link: "#",
        },
      ],
      accentColor: "bg-red-50",
      bgColor: "bg-red-50/50",
    },
    {
      system: "EatoSecure",
      icon: <Shield className="text-amber-600" size={24} />,
      description: "Collaborate on security and resilience in food systems.",
      paths: [
        {
          title: "Food Security Network",
          description: "Join regional networks focused on improving food security and resilience.",
          link: "#",
        },
        {
          title: "Crisis Response Planning",
          description: "Contribute to community planning for food system resilience during crises.",
          link: "#",
        },
        {
          title: "Security Standards Group",
          description: "Help develop security standards and best practices for food system technologies.",
          link: "#",
        },
      ],
      accentColor: "bg-amber-50",
      bgColor: "bg-amber-50/50",
    },
    {
      system: "EatoFoundation",
      icon: <Heart className="text-pink-600" size={24} />,
      description: "Engage with the community focused on the core infrastructure of sustainable food systems.",
      paths: [
        {
          title: "Core Infrastructure Group",
          description: "Contribute to discussions and development of core food system infrastructure.",
          link: "#",
        },
        {
          title: "Documentation Team",
          description: "Help create and maintain documentation for EatoSystems components.",
          link: "#",
        },
        {
          title: "Onboarding Initiatives",
          description: "Develop resources to help new community members get involved with EatoSystems.",
          link: "#",
        },
      ],
      accentColor: "bg-pink-50",
      bgColor: "bg-pink-50/50",
    },
    {
      system: "EatoAgent",
      icon: <Zap className="text-yellow-600" size={24} />,
      description: "Join the community focused on autonomous agents for sustainable agriculture.",
      paths: [
        {
          title: "Agent Design Group",
          description: "Collaborate on designing autonomous agents for various agricultural contexts.",
          link: "#",
        },
        {
          title: "Field Testing Network",
          description: "Participate in field testing of agent systems in different agricultural settings.",
          link: "#",
        },
        {
          title: "Agent Ethics Forum",
          description: "Engage in discussions about ethical considerations in agricultural agent deployment.",
          link: "#",
        },
      ],
      accentColor: "bg-yellow-50",
      bgColor: "bg-yellow-50/50",
    },
    {
      system: "EatoSystem",
      icon: <Network className="text-teal-600" size={24} />,
      description: "Collaborate on the integration and interoperability of all EatoSystems components.",
      paths: [
        {
          title: "Systems Integration Group",
          description: "Work on integrating different EatoSystems components into cohesive solutions.",
          link: "#",
        },
        {
          title: "Interoperability Standards",
          description: "Help develop standards for interoperability between different systems.",
          link: "#",
        },
        {
          title: "Cross-System Use Cases",
          description: "Develop and document use cases that span multiple EatoSystems.",
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
        <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
        <p className="text-xl text-gray-600 mb-6">
          Join working groups, participate in discussions, and help shape the future of global food systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Link href="#" className="flex items-center">
              <span>Join Discord</span>
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
          src="/sustainable-food-collaboration.png"
          alt="EatoSystems Community"
          width={1200}
          height={400}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Working Groups</h3>
          <p className="text-gray-600">
            Join specialized working groups focused on specific aspects of the EatoSystems platform, from soil health
            monitoring to supply chain transparency.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
          <p className="text-gray-600">
            Participate in ongoing discussions about the future of food systems, technical challenges, and
            implementation strategies.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Calendar size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Events & Workshops</h3>
          <p className="text-gray-600">
            Attend virtual and in-person events, workshops, and hackathons focused on building and implementing
            EatoSystems solutions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Regional Chapters</h3>
          <p className="text-gray-600">
            Connect with EatoSystems contributors in your region to collaborate on locally relevant implementations and
            adaptations.
          </p>
        </div>
      </div>

      <SystemContributionPaths
        title="Contribution Paths for Each EatoSystem"
        description="Find community contribution opportunities for each of the 12 EatoSystems"
        systems={systemContributions}
        platform="Community"
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
                <h4 className="text-lg font-semibold mb-1">Join Our Discord</h4>
                <p className="text-gray-600 mb-2">
                  Connect with the EatoSystems community on Discord to participate in discussions and get help.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Join Discord</span>
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
                <h4 className="text-lg font-semibold mb-1">Introduce Yourself</h4>
                <p className="text-gray-600 mb-2">
                  Share your background, interests, and what brought you to EatoSystems in the introductions channel.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>Community Guidelines</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Join Working Groups</h4>
                <p className="text-gray-600 mb-2">
                  Browse and join working groups that align with your interests and expertise.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#working-groups" scroll={true} className="flex items-center">
                    <span>Browse Working Groups</span>
                  </Link>
                </Button>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Attend Community Calls</h4>
                <p className="text-gray-600 mb-2">
                  Join our regular community calls to stay updated on the latest developments and connect with other
                  members.
                </p>
                <Button variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <span>View Calendar</span>
                  </Link>
                </Button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div id="working-groups" className="bg-green-50 p-8 rounded-xl mb-16">
        <h2 className="text-3xl font-bold mb-4">Active Working Groups</h2>
        <p className="text-gray-600 mb-6">
          Join these specialized groups working on different aspects of the EatoSystems platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/soil-health-dashboard.png"
                alt="Soil Health Monitoring Working Group"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Soil Health Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Developing standards and tools for monitoring and improving soil health across different agricultural
                contexts.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Members: 45</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>Active discussions: 12</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>Join Group</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 bg-gray-200 relative">
              <Image
                src="/food-supply-chain.png"
                alt="Supply Chain Transparency Working Group"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Supply Chain Transparency</h3>
              <p className="text-gray-600 mb-4">
                Building tools and standards for tracking and verifying food products from farm to table.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center mr-4">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Members: 38</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  <span>Active discussions: 9</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Link href="#" className="flex items-center">
                  <span>Join Group</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Community?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with a global network of innovators building the future of sustainable food systems.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Link href="#" className="flex items-center">
            <span>Join Our Community</span>
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
