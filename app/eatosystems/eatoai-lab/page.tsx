"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  Brain,
  Database,
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  BookOpen,
  Server,
  Github,
  BrainCircuit,
} from "lucide-react"

export default function EatoAILabPage() {
  return (
    <SystemLabTemplate
      systemName="AI"
      systemPurpose="decentralized intelligence for global food systems"
      systemDescription="EatoAI forms the decentralized intelligence layer of our system, learning, adapting, and coordinating the global food system in real time. It processes data from across the ecosystem to identify patterns and opportunities for improvement while preserving privacy and autonomy."
      accentColor="#6366F1"
      secondaryColor="#818CF8"
      systemMaturity="Beta"
      systemSlug="eatoai"
      collaborationImage="/ai-crop-disease-visualization.png"
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the ethical principles, technical requirements, and success metrics for the decentralized intelligence layer.",
          icon: <Brain size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate diverse datasets and research findings while ensuring privacy, security, and ethical use of information.",
          icon: <Database size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop the federated learning systems, transparent algorithms, and coordination mechanisms with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Deploy early versions in controlled environments, gather feedback, and iterate based on real-world performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the system to connect diverse food networks worldwide while maintaining local autonomy and control.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build frontend interfaces for data visualization, system monitoring, and user interaction with the AI layer.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the distributed components of EatoAI with optimized edge functions and serverless architecture.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to core algorithms, privacy-preserving techniques, and system architecture through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Hugging Face",
          description:
            "Develop and fine-tune open models for agricultural forecasting, supply chain optimization, and ecosystem monitoring.",
          icon: <BrainCircuit size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Advance the science of federated learning, differential privacy, and collective intelligence for food systems.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces and data visualizations that make complex AI systems accessible to diverse stakeholders.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description: "Access the core codebase, contribute to development, and track issues and feature requests.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components, design patterns, and visual language for building consistent EatoAI interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description: "Comprehensive guides, API references, and tutorials for working with the EatoAI platform.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Model Hub",
          description:
            "Access pre-trained models, datasets, and tools for developing AI applications for food systems.",
          icon: <BrainCircuit size={24} />,
          link: "#",
          buttonText: "Explore Models",
        },
        {
          title: "Demo Environment",
          description: "Test your integrations and experiment with EatoAI capabilities in a sandboxed environment.",
          icon: <Server size={24} />,
          link: "#",
          buttonText: "Launch Demo",
        },
      ]}
    />
  )
}
