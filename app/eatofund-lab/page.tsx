"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  LineChart,
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  BookOpen,
  Server,
  Github,
  BarChart3,
  Briefcase,
  DollarSign,
} from "lucide-react"

export default function EatoFundLabPage() {
  return (
    <SystemLabTemplate
      systemName="Fund"
      systemPurpose="regenerative capital for sustainable food systems"
      systemDescription="EatoFund is the regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world. It creates new financial models that prioritize long-term sustainability over short-term profits, aligning financial incentives with ecological and social well-being."
      accentColor="#0891B2"
      secondaryColor="#06B6D4"
      systemMaturity="Alpha"
      systemSlug="eatofund"
      collaborationImage="/pollination-financials.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the principles, metrics, and success criteria for regenerative capital allocation and returns.",
          icon: <DollarSign size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate financial, ecological, and social data to create comprehensive impact assessment frameworks.",
          icon: <BarChart3 size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop blended finance models, community ownership structures, and transparent investment mechanisms.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test financial instruments with early partners, gather feedback, and refine based on real-world outcomes.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description: "Expand the capital network to connect investors with regenerative enterprises worldwide.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description: "Build interfaces for investment platforms, impact dashboards, and financial tracking tools.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale financial platforms with secure, compliant infrastructure for global transactions.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description: "Contribute to financial models, smart contracts, and transparent accounting systems.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Financial Experts",
          description: "Design innovative financial instruments that align returns with regenerative outcomes.",
          icon: <Briefcase size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Develop metrics and methodologies for valuing ecological and social returns alongside financial ones.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make regenerative investing accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for financial models, impact assessment tools, and investment platforms.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building financial interfaces and dashboards.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on financial models, impact metrics, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Financial Models",
          description: "Access open-source financial models, valuation frameworks, and impact assessment tools.",
          icon: <LineChart size={24} />,
          link: "#",
          buttonText: "Explore Models",
        },
        {
          title: "Sandbox Environment",
          description: "Test investment mechanisms and financial flows in a simulated environment.",
          icon: <Server size={24} />,
          link: "#",
          buttonText: "Launch Sandbox",
        },
      ]}
    />
  )
}
