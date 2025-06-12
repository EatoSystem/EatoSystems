"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  BarChart3,
  LineChart,
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  BookOpen,
  Server,
  Github,
  TrendingUp,
  Scale,
  Eye,
} from "lucide-react"

export default function EatoIndexLabPage() {
  return (
    <SystemLabTemplate
      systemName="Index"
      systemPurpose="financial metrics that value health, community, and environmental impact"
      systemDescription="EatoIndex is a real-time financial index that ranks and funds food based on health, community, and environmental value. It aligns capital with regeneration by creating transparent metrics that investors, consumers, and producers can use to make informed decisions."
      accentColor="#D9822B"
      secondaryColor="#F59E0B"
      systemMaturity="Beta"
      systemSlug="eatoindex"
      collaborationImage="/agricultural-sustainability-dashboard.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Metrics",
          description:
            "Establish the key indicators and measurement frameworks for true cost accounting in food systems.",
          icon: <Scale size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate environmental, social, health, and financial data to create comprehensive valuation models.",
          icon: <BarChart3 size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop transparent rating systems, verification mechanisms, and market interfaces with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test metrics and platforms with early partners, gather feedback, and refine based on real-world outcomes.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the index to influence mainstream markets and create new standards for food valuation worldwide.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for index visualization, impact dashboards, and consumer transparency tools.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description: "Deploy and scale the real-time index platforms with global reach and localized adaptations.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to valuation algorithms, verification systems, and data integration through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Data Scientists",
          description: "Develop and refine models that accurately capture the full value and impact of food systems.",
          icon: <TrendingUp size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Advance methodologies for measuring environmental, social, and health impacts in standardized ways.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex impact data accessible to consumers, investors, and producers.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for valuation algorithms, verification systems, and consumer interfaces.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building impact visualization and transparency tools.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on metrics frameworks, data standards, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Metrics Framework",
          description: "Access open-source valuation models, impact assessment tools, and verification standards.",
          icon: <LineChart size={24} />,
          link: "#",
          buttonText: "Explore Framework",
        },
        {
          title: "Transparency Tools",
          description: "Tools for making impact data accessible and meaningful to consumers, investors, and producers.",
          icon: <Eye size={24} />,
          link: "#",
          buttonText: "View Tools",
        },
      ]}
    />
  )
}
