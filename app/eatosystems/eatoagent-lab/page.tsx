import SystemLabTemplate from "@/components/SystemLabTemplate"
import { Code, GitBranch, Rocket, Users, Palette, Monitor, Smartphone } from "lucide-react"

const EatoAgentLabPage = () => {
  const frameworkSteps = [
    {
      title: "Research & Discovery",
      description:
        "Analyze agricultural data patterns and identify opportunities for AI agent optimization in seed management and crop planning.",
      icon: <Code className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Prototype Development",
      description:
        "Build and test AI agent prototypes using machine learning models for seed selection and planting optimization.",
      icon: <GitBranch className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Field Testing",
      description:
        "Deploy agents in controlled agricultural environments to validate performance and gather real-world data.",
      icon: <Rocket className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Community Integration",
      description:
        "Integrate feedback from farmers and agricultural experts to refine agent capabilities and user experience.",
      icon: <Users className="w-6 h-6 text-green-600" />,
    },
  ]

  const contributionGroups = [
    {
      name: "AI Researchers",
      description: "Develop machine learning models for agricultural decision-making and crop optimization.",
      icon: <Code className="w-6 h-6 text-green-600" />,
      link: "/contribute/ai-research",
    },
    {
      name: "Agricultural Experts",
      description: "Provide domain expertise and validate AI agent recommendations in real farming scenarios.",
      icon: <Users className="w-6 h-6 text-green-600" />,
      link: "/contribute/agriculture",
    },
    {
      name: "Data Scientists",
      description: "Analyze agricultural datasets and improve predictive models for seed and crop management.",
      icon: <GitBranch className="w-6 h-6 text-green-600" />,
      link: "/contribute/data-science",
    },
  ]

  const devResources = [
    {
      title: "AI Agent SDK",
      description: "Complete software development kit for building agricultural AI agents with pre-trained models.",
      icon: <Code className="w-6 h-6" />,
      link: "/docs/agent-sdk",
      buttonText: "Get SDK",
    },
    {
      title: "API Documentation",
      description: "Comprehensive API docs for integrating EatoAgent with existing agricultural systems.",
      icon: <GitBranch className="w-6 h-6" />,
      link: "/docs/api",
      buttonText: "View Docs",
    },
    {
      title: "Sample Projects",
      description: "Ready-to-use code examples and templates for common agricultural AI use cases.",
      icon: <Rocket className="w-6 h-6" />,
      link: "/examples",
      buttonText: "Browse Examples",
    },
  ]

  const designResources = [
    {
      title: "Agent Interface Kit",
      description: "UI components and patterns specifically designed for agricultural AI agent interfaces.",
      icon: <Monitor className="w-6 h-6" />,
      link: "/design/agent-ui-kit",
      buttonText: "Download Kit",
    },
    {
      title: "Mobile Agent App",
      description: "Mobile app design templates for farmers to interact with AI agents in the field.",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/design/mobile-templates",
      buttonText: "Get Templates",
    },
    {
      title: "Data Visualization",
      description: "Chart and graph components for displaying agricultural insights and agent recommendations.",
      icon: <Palette className="w-6 h-6" />,
      link: "/design/data-viz",
      buttonText: "View Components",
    },
  ]

  return (
    <SystemLabTemplate
      systemName="Agent"
      systemPurpose="intelligent agricultural decision-making"
      systemDescription="EatoAgent represents the next generation of AI-powered agricultural assistants, providing intelligent recommendations for seed selection, planting optimization, and crop management through advanced machine learning algorithms."
      systemSlug="eatoagent"
      systemMaturity="Beta"
      frameworkSteps={frameworkSteps}
      contributionGroups={contributionGroups}
      devResources={devResources}
      designResources={designResources}
      collaborationStats={{
        countries: 28,
        contributors: 156,
        projects: 23,
      }}
    />
  )
}

export default EatoAgentLabPage
