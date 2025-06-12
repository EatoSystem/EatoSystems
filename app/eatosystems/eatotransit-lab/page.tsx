"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import { Globe, Code, Users, FileCode, Figma, Server, Github, Truck, BarChart4, Map, Zap, Link } from "lucide-react"

export default function EatoTransitLabPage() {
  return (
    <SystemLabTemplate
      systemName="Transit"
      systemPurpose="clean energy logistics and traceability for food systems"
      systemDescription="EatoTransit is a clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem. It ensures transparency in the supply chain while minimizing environmental impact through advanced tracking technologies and clean transportation solutions."
      accentColor="#0EA5E9"
      secondaryColor="#38BDF8"
      systemMaturity="Alpha"
      systemSlug="eatotransit"
      collaborationImage="/food-supply-chain.png"
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the technical requirements, environmental standards, and success metrics for clean logistics and traceability.",
          icon: <Truck size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate transportation, energy, and supply chain data to create comprehensive logistics and traceability models.",
          icon: <BarChart4 size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop blockchain traceability systems, clean energy logistics networks, and waste reduction technologies with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test logistics and traceability systems with early partners, gather feedback, and refine based on real-world performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the system to connect diverse food networks worldwide with clean, transparent logistics infrastructure.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for logistics management, traceability systems, and supply chain visualization.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the logistics and traceability platforms with global reach and real-time capabilities.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to blockchain systems, logistics algorithms, and clean energy integration through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Logistics Experts",
          description:
            "Design efficient, sustainable logistics networks that minimize environmental impact while ensuring food quality.",
          icon: <Truck size={24} />,
          link: "#",
        },
        {
          name: "Clean Energy Engineers",
          description:
            "Develop and integrate renewable energy solutions for transportation, storage, and distribution systems.",
          icon: <Zap size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces that make complex supply chains transparent and accessible to all stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for blockchain traceability, logistics algorithms, and clean energy integration.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building logistics and traceability interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on blockchain standards, logistics protocols, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Traceability Framework",
          description: "Access the blockchain-based framework for transparent, verifiable supply chain tracking.",
          icon: <Link size={24} />,
          link: "#",
          buttonText: "Explore Framework",
        },
        {
          title: "Logistics Simulator",
          description: "Test and optimize logistics networks in a simulated environment before real-world deployment.",
          icon: <Map size={24} />,
          link: "#",
          buttonText: "Launch Simulator",
        },
      ]}
    />
  )
}
