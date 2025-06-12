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
  Heart,
  Book,
  Network,
  Lightbulb,
  Compass,
} from "lucide-react"

export default function EatoGlobalLabPage() {
  return (
    <SystemLabTemplate
      systemName="Global"
      systemPurpose="connecting local food systems into a global network"
      systemDescription="EatoGlobal is the connective tissue that links local food systems into a resilient global network. It creates pathways for knowledge sharing, resource exchange, and collaborative problem-solving across borders, enabling local solutions to scale globally while preserving cultural diversity and ecological adaptation."
      accentColor="#3B82F6"
      secondaryColor="#60A5FA"
      systemMaturity="Alpha"
      systemSlug="eatoglobal"
      collaborationImage="/images/global-network-earth.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Connection Principles",
          description:
            "Establish the ethical frameworks, technical standards, and success metrics for global food system connectivity.",
          icon: <Heart size={20} />,
        },
        {
          title: "Knowledge & Resource Mapping",
          description:
            "Map existing food systems, knowledge networks, and resource flows to identify connection opportunities.",
          icon: <Compass size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop connection protocols, knowledge exchange platforms, and collaborative tools with diverse global input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test connection frameworks with diverse communities, gather feedback, and refine based on real-world experience.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the network to connect food systems worldwide while preserving local autonomy and cultural diversity.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for global collaboration, knowledge exchange, and network visualization.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the global platforms with worldwide reach and localized adaptations for diverse communities.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to connection protocols, knowledge exchange systems, and collaboration tools through open source development.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Network Specialists",
          description:
            "Design resilient, adaptive network architectures that connect diverse food systems while preserving autonomy.",
          icon: <Network size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Study global food system dynamics and develop frameworks for effective cross-cultural collaboration.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Innovators",
          description:
            "Develop creative solutions for bridging gaps between diverse food systems and enabling global cooperation.",
          icon: <Lightbulb size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for connection protocols, knowledge exchange systems, and collaboration tools.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building globally accessible and culturally appropriate interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on connection frameworks, collaboration protocols, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Network Visualization",
          description: "Tools for mapping and visualizing global food system connections and resource flows.",
          icon: <Network size={24} />,
          link: "#",
          buttonText: "Explore Tools",
        },
        {
          title: "Knowledge Exchange",
          description: "Platforms for sharing insights, practices, and innovations across diverse food cultures.",
          icon: <Book size={24} />,
          link: "#",
          buttonText: "Browse Platform",
        },
      ]}
    />
  )
}
