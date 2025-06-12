"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  BookOpen,
  Server,
  Github,
  Bot,
  Cpu,
  Network,
  MessageCircle,
  Zap,
} from "lucide-react"

export default function EatoAgentLabPage() {
  return (
    <SystemLabTemplate
      systemName="Agent"
      systemPurpose="autonomous agents that coordinate and optimize food systems"
      systemDescription="EatoAgent is a network of autonomous agents that coordinate and optimize food systems at every scale. These intelligent agents work collaboratively with humans and other systems to monitor, analyze, and improve food production, distribution, and consumption, creating a more efficient and sustainable global food network."
      accentColor="#0D9488"
      secondaryColor="#14B8A6"
      systemMaturity="Alpha"
      systemSlug="eatoagent"
      collaborationImage="/ai-agriculture-seed.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Agent Architecture",
          description:
            "Establish the technical requirements, ethical principles, and success metrics for autonomous food system agents.",
          icon: <Bot size={20} />,
        },
        {
          title: "Data & Knowledge Integration",
          description:
            "Integrate diverse datasets, domain knowledge, and system models to create comprehensive agent understanding.",
          icon: <Cpu size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop agent frameworks, coordination protocols, and human-agent interfaces with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test agents in controlled environments, gather feedback, and refine based on real-world performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the agent network to support food systems worldwide while maintaining local adaptation and control.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for agent configuration, monitoring, and human-agent collaboration.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description: "Deploy and scale the agent infrastructure with global reach and edge computing capabilities.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to agent frameworks, coordination protocols, and system integration through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "AI Researchers",
          description:
            "Develop advanced agent architectures, learning algorithms, and coordination mechanisms for food systems.",
          icon: <Zap size={24} />,
          link: "#",
        },
        {
          name: "Domain Experts",
          description:
            "Provide specialized knowledge in agriculture, logistics, nutrition, and other food system domains.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex agent systems accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description: "Access the core codebase for agent frameworks, coordination protocols, and system integration.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description: "Explore the UI components and design patterns for building agent interfaces and dashboards.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on agent architecture, coordination protocols, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Agent Framework",
          description: "Access the development toolkit for creating and deploying specialized food system agents.",
          icon: <Bot size={24} />,
          link: "#",
          buttonText: "Explore Framework",
        },
        {
          title: "Coordination Network",
          description: "Tools for enabling effective collaboration between multiple agents and human operators.",
          icon: <Network size={24} />,
          link: "#",
          buttonText: "Access Network",
        },
        {
          title: "Simulation Environment",
          description: "Test agent behavior and performance in a virtual food system environment.",
          icon: <MessageCircle size={24} />,
          link: "#",
          buttonText: "Launch Simulator",
        },
      ]}
    />
  )
}
