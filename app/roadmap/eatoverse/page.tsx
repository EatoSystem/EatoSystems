"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoVerseRoadmapPage() {
  const system = {
    slug: "eatoverse",
    name: "EatoVerse",
    layer: "ROOT",
    version: "v3.0",
    description:
      "The digital twin of our food future — where national systems are prototyped in virtual environments before real-world rollout.",
    launchDate: "June 2026",
    quarter: "Q2 2026",
  }

  const milestones = [
    {
      title: "Digital Twin Framework",
      date: "October 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "Development of the core framework for creating digital twins of food systems.",
    },
    {
      title: "Simulation Engine Alpha",
      date: "December 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "Alpha release of the simulation engine for modeling food system dynamics.",
    },
    {
      title: "Participatory Design Tools",
      date: "February 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Release of tools enabling stakeholder participation in virtual food system design.",
    },
    {
      title: "Regional Prototype",
      date: "April 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "First complete regional food system prototype in the EatoVerse environment.",
    },
    {
      title: "Global Launch",
      date: "June 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "Official launch of EatoVerse with capabilities for national system prototyping.",
    },
    {
      title: "Implementation Blueprint System",
      date: "August 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Release of tools for translating virtual prototypes into real-world implementation plans.",
    },
  ]

  const contributionAreas = [
    {
      title: "Digital Twin Development",
      description: "Build advanced models that create accurate virtual representations of real-world food systems.",
      icon: "Code",
      skills: ["3D Modeling", "Simulation", "GIS", "Data Visualization", "Systems Modeling"],
    },
    {
      title: "Participatory Design",
      description: "Create tools and interfaces that enable diverse stakeholders to contribute to food system design.",
      icon: "Users",
      skills: ["UX/UI Design", "Participatory Methods", "Facilitation", "Accessibility", "Game Design"],
    },
    {
      title: "Implementation Planning",
      description: "Develop frameworks for translating virtual prototypes into actionable implementation plans.",
      icon: "Server",
      skills: ["Project Management", "Systems Engineering", "Policy Analysis", "Change Management"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore the EatoVerse Platform",
      description: "Access the EatoVerse environment and explore existing food system prototypes.",
      link: "/eatoverse",
    },
    {
      title: "Contribute to Development",
      description: "Join the team developing the digital twin technology and simulation capabilities.",
      link: "/contribute/github",
    },
    {
      title: "Propose a Prototype Region",
      description: "Suggest a region or food system to be modeled in the EatoVerse environment.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatoverse-root.png"
      layerImage="/images/systems/eatoverse-root.png"
      nextSteps={nextSteps}
    />
  )
}
