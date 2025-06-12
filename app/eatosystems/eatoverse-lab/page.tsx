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
  Layers,
  Map,
  Laptop,
  Building,
  CuboidIcon as Cube,
} from "lucide-react"

export default function EatoVerseLabPage() {
  return (
    <SystemLabTemplate
      systemName="Verse"
      systemPurpose="digital twin technology for food system simulation and design"
      systemDescription="EatoVerse serves as the digital twin of our food future. National systems are prototyped in virtual environments before real-world rollout, allowing for testing, iteration, and community feedback without real-world consequences."
      accentColor="#8B5CF6"
      secondaryColor="#A78BFA"
      systemMaturity="Alpha"
      collaborationImage="/digital-root-food.png"
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the technical requirements, simulation parameters, and success metrics for digital twin technology.",
          icon: <Cube size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate environmental, social, economic, and agricultural data to create comprehensive simulation models.",
          icon: <Layers size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop immersive environments, participatory design tools, and scenario planning systems with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test simulations with diverse stakeholders, gather feedback, and refine based on user experience and accuracy.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the platform to model diverse food systems worldwide and connect virtual prototypes to real-world implementation.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for immersive environments, participatory design tools, and data visualization.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the simulation platforms with global reach and high-performance computing capabilities.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to simulation engines, modeling frameworks, and visualization tools through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "3D Artists",
          description:
            "Create immersive environments, visual assets, and interactive elements for the digital twin platform.",
          icon: <Cube size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Develop and validate models that accurately represent complex food system dynamics and interactions.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex simulations accessible to diverse stakeholders and communities.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description: "Access the core codebase for simulation engines, modeling frameworks, and visualization tools.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components, 3D assets, and design patterns for building immersive digital environments.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on simulation frameworks, modeling standards, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Simulation Platform",
          description: "Access the development environment for creating and testing digital twin simulations.",
          icon: <Laptop size={24} />,
          link: "#",
          buttonText: "Launch Platform",
        },
        {
          title: "Model Library",
          description: "Library of pre-built components, scenarios, and templates for food system simulation.",
          icon: <Building size={24} />,
          link: "#",
          buttonText: "Explore Library",
        },
        {
          title: "Geospatial Tools",
          description: "Tools for integrating real-world geographic data into digital twin simulations.",
          icon: <Map size={24} />,
          link: "#",
          buttonText: "Access Tools",
        },
      ]}
      collaborationStats={{
        countries: 38,
        contributors: 276,
        projects: 47,
      }}
    />
  )
}
