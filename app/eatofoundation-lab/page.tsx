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
  Clock,
  Landmark,
  Leaf,
  Shield,
} from "lucide-react"

export default function EatoFoundationLabPage() {
  return (
    <SystemLabTemplate
      systemName="Foundation"
      systemPurpose="long-term stewardship of the Eatosystem"
      systemDescription="The EatoFoundation is the global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations. It ensures that the system remains true to its core values over time, creating structures that can endure beyond individual lifetimes and political cycles."
      accentColor="#059669"
      secondaryColor="#10B981"
      systemMaturity="Alpha"
      systemSlug="eatofoundation"
      collaborationImage="/community-collaboration.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Principles",
          description:
            "Establish the ethical principles, governance structures, and success metrics for intergenerational stewardship.",
          icon: <Heart size={20} />,
        },
        {
          title: "Open Research & Knowledge Integration",
          description:
            "Integrate diverse governance models, cultural wisdom, and long-term thinking into adaptable frameworks.",
          icon: <BookOpen size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop intergenerational governance, mission protection, and knowledge preservation systems with diverse input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test governance models with early partners, gather feedback, and refine based on real-world implementation.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the foundation to create a global stewardship network that spans cultures, borders, and generations.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for knowledge preservation, governance visualization, and intergenerational communication.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the foundation platforms with long-term stability and intergenerational accessibility.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to governance frameworks, knowledge preservation systems, and mission protection through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Governance Experts",
          description:
            "Design robust, adaptable governance structures that can maintain integrity and purpose across generations.",
          icon: <Landmark size={24} />,
          link: "#",
        },
        {
          name: "Cultural Stewards",
          description:
            "Integrate diverse cultural approaches to long-term thinking, stewardship, and intergenerational responsibility.",
          icon: <Leaf size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex governance systems accessible across generations and cultures.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for governance frameworks, knowledge preservation, and mission protection.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building intergenerational interfaces and systems.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on governance frameworks, knowledge preservation, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Governance Framework",
          description: "Access adaptable governance models designed for intergenerational stewardship and integrity.",
          icon: <Landmark size={24} />,
          link: "#",
          buttonText: "Explore Framework",
        },
        {
          title: "Knowledge Vault",
          description: "Tools and systems for preserving and transmitting critical knowledge across generations.",
          icon: <Clock size={24} />,
          link: "#",
          buttonText: "Access Vault",
        },
        {
          title: "Mission Protection",
          description: "Legal and financial mechanisms that safeguard the core values and objectives of EatoSystems.",
          icon: <Shield size={24} />,
          link: "#",
          buttonText: "View Protections",
        },
      ]}
    />
  )
}
