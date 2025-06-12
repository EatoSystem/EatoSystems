"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  Cpu,
  Leaf,
  Sprout,
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  Server,
  Github,
  Bot,
  Microscope,
  Cog,
} from "lucide-react"

export default function EatoBoticsLabPage() {
  return (
    <SystemLabTemplate
      systemName="Botics"
      systemPurpose="regenerative robotics and intelligent tools for sustainable agriculture"
      systemDescription="EatoBotics develops regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration. These technologies work in harmony with natural systems rather than against them, designed with regeneration as the primary goal."
      accentColor="#16A34A"
      secondaryColor="#22C55E"
      systemMaturity="Beta"
      systemSlug="eatobotics"
      collaborationImage="/robotic-sprout.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the ecological principles, technical requirements, and success metrics for regenerative robotics.",
          icon: <Leaf size={20} />,
        },
        {
          title: "Open Data & Research Integration",
          description:
            "Integrate ecological research, soil science, and agricultural knowledge into technical specifications.",
          icon: <Microscope size={20} />,
        },
        {
          title: "Design & Build in Public",
          description: "Develop hardware designs, control systems, and ecological interfaces with community input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test prototypes in diverse agricultural settings, gather feedback, and iterate based on field performance.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Create open manufacturing networks and distribution systems to make regenerative tools accessible worldwide.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for robot control, monitoring systems, and data visualization tools.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the cloud infrastructure for robot coordination, data processing, and system management.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to hardware designs, control software, and system architecture through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Hardware Engineers",
          description:
            "Design and prototype physical components, sensors, and mechanical systems for regenerative robotics.",
          icon: <Cog size={24} />,
          link: "#",
        },
        {
          name: "Ecologists",
          description: "Ensure robotic systems work in harmony with natural ecosystems and support biodiversity.",
          icon: <Sprout size={24} />,
          link: "#",
        },
        {
          name: "Designers",
          description:
            "Create intuitive interfaces and physical designs that make complex robotic systems accessible to farmers.",
          icon: <Figma size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description: "Access hardware designs, control software, and system architecture for EatoBotics systems.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components, physical design patterns, and visual language for EatoBotics interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description: "Comprehensive guides on hardware specifications, software APIs, and integration protocols.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Simulation Environment",
          description:
            "Test robotic systems and ecological interactions in a virtual environment before physical prototyping.",
          icon: <Bot size={24} />,
          link: "#",
          buttonText: "Launch Simulator",
        },
        {
          title: "Hardware Kits",
          description:
            "Access development kits, sensor packages, and modular components for building and testing prototypes.",
          icon: <Cpu size={24} />,
          link: "#",
          buttonText: "Order Kits",
        },
      ]}
    />
  )
}
