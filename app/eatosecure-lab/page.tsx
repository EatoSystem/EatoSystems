"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  Server,
  Github,
  Shield,
  BarChart4,
  Map,
  AlertCircle,
  Package,
} from "lucide-react"

export default function EatoSecureLabPage() {
  return (
    <SystemLabTemplate
      systemName="Secure"
      systemPurpose="global food security and resilience"
      systemDescription="EatoSecure is the global food security program that ensures every individual on earth has secure, sustained access to nutritious food. It creates a comprehensive safety net that addresses both immediate food needs and long-term food system resilience."
      accentColor="#DC2626"
      secondaryColor="#EF4444"
      systemMaturity="Alpha"
      systemSlug="eatosecure"
      collaborationImage="/soil-health-prediction-dashboard.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the technical requirements, security standards, and success metrics for global food security.",
          icon: <Shield size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate climate, agricultural, economic, and social data to create comprehensive early warning systems.",
          icon: <BarChart4 size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop early warning systems, community food reserves, and resilience planning tools with diverse input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test security systems with vulnerable communities, gather feedback, and refine based on real-world performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the system to create a global safety net that ensures food security for all people worldwide.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for early warning systems, food reserve management, and resilience planning.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the security platforms with global reach and critical infrastructure reliability.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to early warning algorithms, reserve management systems, and resilience planning tools through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Security Experts",
          description:
            "Design robust, multi-layered security systems that ensure food access during disruptions and crises.",
          icon: <Shield size={24} />,
          link: "#",
        },
        {
          name: "Climate Scientists",
          description:
            "Develop predictive models that anticipate climate-related disruptions to food systems and enable proactive intervention.",
          icon: <AlertCircle size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex security systems accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for early warning systems, reserve management, and resilience planning.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building food security and resilience interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on security frameworks, early warning systems, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Early Warning System",
          description: "Access the predictive platform for identifying potential food shortages before they occur.",
          icon: <AlertCircle size={24} />,
          link: "#",
          buttonText: "Explore System",
        },
        {
          title: "Reserve Management",
          description: "Tools for designing and managing decentralized food reserve networks for communities.",
          icon: <Package size={24} />,
          link: "#",
          buttonText: "Access Tools",
        },
        {
          title: "Vulnerability Mapping",
          description:
            "Geographic information systems for identifying regions and populations at risk of food insecurity.",
          icon: <Map size={24} />,
          link: "#",
          buttonText: "View Maps",
        },
      ]}
    />
  )
}
