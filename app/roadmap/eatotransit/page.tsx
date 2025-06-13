"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoTransitRoadmapPage() {
  const system = {
    slug: "eatotransit",
    name: "EatoTransit",
    layer: "FLOW",
    version: "v5.0",
    description:
      "A clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem.",
    launchDate: "December 2026",
    quarter: "Q4 2026",
  }

  const milestones = [
    {
      title: "Clean Logistics Framework",
      date: "April 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "Development of the framework for clean energy-powered food logistics.",
    },
    {
      title: "Blockchain Traceability System Beta",
      date: "June 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "Beta release of the blockchain-based system for food traceability.",
    },
    {
      title: "Regional Food Network Prototype",
      date: "August 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Prototype of decentralized distribution systems for regional food connections.",
    },
    {
      title: "Waste Reduction Technology Beta",
      date: "October 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Beta release of systems for minimizing food waste through improved logistics.",
    },
    {
      title: "Global Launch",
      date: "December 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Official launch of EatoTransit with integrated logistics and traceability capabilities.",
    },
    {
      title: "Cross-Border Protocol Release",
      date: "February 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Release of protocols for sustainable cross-border food movement and traceability.",
    },
  ]

  const contributionAreas = [
    {
      title: "Clean Logistics Engineering",
      description: "Design and implement clean energy-powered transportation and storage systems for food.",
      icon: "Server",
      skills: [
        "Sustainable Transportation",
        "Clean Energy",
        "Cold Chain",
        "Logistics Optimization",
        "Infrastructure Design",
      ],
    },
    {
      title: "Traceability Systems Development",
      description: "Build secure, transparent tracking systems that enable verification of food origin and practices.",
      icon: "Code",
      skills: ["Blockchain", "Supply Chain", "Data Security", "API Development", "Mobile Applications"],
    },
    {
      title: "Regional Network Design",
      description: "Help design and implement decentralized distribution systems that prioritize local connections.",
      icon: "Users",
      skills: ["Network Design", "Community Engagement", "Local Food Systems", "Distribution Planning"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore the Transit Framework",
      description: "Learn about the clean logistics and traceability framework being developed for EatoTransit.",
      link: "/eatotransit",
    },
    {
      title: "Contribute to Development",
      description: "Join the team developing the technical infrastructure for sustainable food logistics.",
      link: "/contribute/github",
    },
    {
      title: "Pilot Program Application",
      description: "Apply to participate in pilot programs testing EatoTransit in specific regions or supply chains.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatotransit-flow.png"
      layerImage="/images/systems/eatotransit-flow.png"
      nextSteps={nextSteps}
    />
  )
}
