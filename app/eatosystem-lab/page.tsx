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
  Layers,
  Map,
  Building,
  Network,
  Workflow,
} from "lucide-react"

export default function EatoSystemLabPage() {
  return (
    <SystemLabTemplate
      systemName="System"
      systemPurpose="full-stack rollout of Eato-powered food systems at the national level"
      systemDescription="EatoSystem represents the full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure. It provides a blueprint for comprehensive implementation that can be adapted to diverse contexts while maintaining core principles and standards."
      accentColor="#F59E0B"
      secondaryColor="#FBBF24"
      systemMaturity="Alpha"
      systemSlug="eatosystem"
      collaborationImage="/futuristic-agricultural-interface.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the integration principles, technical requirements, and success metrics for full-stack implementation.",
          icon: <Layers size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate diverse datasets, research findings, and local knowledge to create comprehensive implementation blueprints.",
          icon: <Map size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop integration frameworks, implementation blueprints, and cross-sector collaboration platforms with diverse input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test full-stack implementations in select regions, gather feedback, and refine based on real-world performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the system to support national implementations worldwide while maintaining local adaptation and sovereignty.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for system visualization, implementation planning, and cross-sector collaboration.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the integration platforms with global reach and localized adaptations for diverse contexts.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to integration frameworks, implementation blueprints, and collaboration tools through open source development.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Systems Architects",
          description:
            "Design robust, adaptable frameworks for integrating all EatoSystems components into cohesive wholes.",
          icon: <Building size={24} />,
          link: "#",
        },
        {
          name: "Implementation Experts",
          description:
            "Develop detailed blueprints for adapting and implementing EatoSystems in diverse contexts and scales.",
          icon: <Workflow size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex system integration accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for integration frameworks, implementation blueprints, and collaboration tools.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building system integration and implementation interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on integration frameworks, implementation methodologies, and cross-system coordination.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Integration Framework",
          description: "Access the frameworks and protocols that enable all EatoSystems components to work together.",
          icon: <Network size={24} />,
          link: "#",
          buttonText: "Explore Framework",
        },
        {
          title: "Implementation Blueprints",
          description: "Detailed guides for adapting and implementing EatoSystems in diverse contexts and scales.",
          icon: <Map size={24} />,
          link: "#",
          buttonText: "View Blueprints",
        },
        {
          title: "Collaboration Platform",
          description: "Tools and processes that facilitate cooperation between government, business, and communities.",
          icon: <Users size={24} />,
          link: "#",
          buttonText: "Access Platform",
        },
      ]}
    />
  )
}
