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
  Building,
  Scale,
  FileText,
  UsersIcon,
  Landmark,
} from "lucide-react"

export default function EatoGovLabPage() {
  return (
    <SystemLabTemplate
      systemName="Gov"
      systemPurpose="governance and licensing for public food infrastructure"
      systemDescription="EatoGov is the governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure. It creates frameworks for policy integration and public-private partnerships, bridging the gap between innovative food system solutions and existing governance structures."
      accentColor="#7C3AED"
      secondaryColor="#8B5CF6"
      systemMaturity="Alpha"
      systemSlug="eatogov"
      collaborationImage="/agricultural-sustainability-dashboard.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Principles",
          description:
            "Establish the governance principles, policy frameworks, and success metrics for public food infrastructure.",
          icon: <Scale size={20} />,
        },
        {
          title: "Open Research & Policy Integration",
          description:
            "Integrate diverse governance models, policy research, and regulatory frameworks into adaptable templates.",
          icon: <FileText size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop policy frameworks, democratic governance structures, and licensing systems with diverse stakeholder input.",
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
            "Expand the governance frameworks to support diverse political systems and regulatory environments worldwide.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for policy development, governance visualization, and public engagement tools.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the governance platforms with secure, compliant infrastructure for public institutions.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to policy frameworks, governance models, and licensing systems through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Policy Experts",
          description:
            "Develop adaptable policy frameworks that can be implemented across diverse regulatory environments.",
          icon: <FileText size={24} />,
          link: "#",
        },
        {
          name: "Governance Specialists",
          description:
            "Design democratic, inclusive governance structures that ensure accountability and broad participation.",
          icon: <UsersIcon size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex governance systems accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description: "Access the core codebase for policy frameworks, governance models, and licensing systems.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description: "Explore the UI components and design patterns for building governance and policy interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on governance frameworks, policy development, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Policy Templates",
          description: "Access adaptable policy frameworks that can be customized for diverse regulatory environments.",
          icon: <FileText size={24} />,
          link: "#",
          buttonText: "Explore Templates",
        },
        {
          title: "Governance Simulator",
          description: "Test governance models and policy impacts in a simulated environment before implementation.",
          icon: <Building size={24} />,
          link: "#",
          buttonText: "Launch Simulator",
        },
        {
          title: "Public Commons Framework",
          description: "Tools and models for managing food-related resources as public goods that benefit all.",
          icon: <Landmark size={24} />,
          link: "#",
          buttonText: "Access Framework",
        },
      ]}
    />
  )
}
