"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoSystemRoadmapPage() {
  const system = {
    slug: "eatosystem",
    name: "EatoSystem",
    layer: "HARVEST",
    version: "v8.0",
    description:
      "The integrated platform that connects all EatoSystems components into a unified ecosystem for sustainable food production.",
    launchDate: "September 2027",
    quarter: "Q3 2027",
  }

  const milestones = [
    {
      title: "System Integration Framework",
      date: "January 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Development of the core framework for integrating all EatoSystems components.",
    },
    {
      title: "Cross-System Data Protocol",
      date: "March 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Establishment of standardized protocols for data exchange between systems.",
    },
    {
      title: "Unified Dashboard Beta",
      date: "May 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Beta release of the unified dashboard for monitoring all connected systems.",
    },
    {
      title: "Ecosystem Orchestration Engine",
      date: "July 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Development of the orchestration engine that coordinates system interactions.",
    },
    {
      title: "Global Launch",
      date: "September 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Official launch of EatoSystem as the unified platform for the ecosystem.",
    },
    {
      title: "First Regional Deployment",
      date: "November 2027",
      quarter: "Q4 2027",
      status: "upcoming",
      description: "First full regional deployment integrating all EatoSystems components.",
    },
  ]

  const contributionAreas = [
    {
      title: "System Integration",
      description: "Develop integration frameworks and APIs that connect different EatoSystems components.",
      icon: "Server",
      skills: ["API Development", "System Architecture", "Integration Patterns", "Microservices"],
    },
    {
      title: "Unified Dashboard",
      description: "Build visualization and monitoring tools for the entire ecosystem.",
      icon: "Code",
      skills: ["Data Visualization", "UX/UI Design", "Real-time Monitoring", "Dashboard Development"],
    },
    {
      title: "Ecosystem Orchestration",
      description: "Create systems for coordinating and optimizing interactions between components.",
      icon: "Rocket",
      skills: ["Workflow Automation", "Event-driven Architecture", "System Optimization", "Distributed Systems"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore System Architecture",
      description: "Learn about the architecture that connects all EatoSystems components.",
      link: "/eatosystem",
    },
    {
      title: "Join Developer Community",
      description: "Connect with other developers working on system integration.",
      link: "/contribute",
    },
    {
      title: "View System Comparison",
      description: "See how all EatoSystems components work together.",
      link: "/eatosystems/compare",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatosystem-harvest.png"
      layerImage="/images/systems/eatosystem-harvest.png"
      nextSteps={nextSteps}
    />
  )
}
