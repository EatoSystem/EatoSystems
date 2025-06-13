"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoSecureRoadmapPage() {
  const system = {
    slug: "eatosecure",
    name: "EatoSecure",
    layer: "CANOPY",
    version: "v6.0",
    description:
      "The security framework that protects data integrity, privacy, and system resilience across the EatoSystems ecosystem.",
    launchDate: "March 2027",
    quarter: "Q1 2027",
  }

  const milestones = [
    {
      title: "Security Framework Design",
      date: "July 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Development of the core security framework and principles.",
    },
    {
      title: "Data Privacy Protocol",
      date: "September 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Establishment of protocols for data privacy and protection.",
    },
    {
      title: "Distributed Security Network Beta",
      date: "November 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Beta launch of the distributed security network.",
    },
    {
      title: "Resilience Engine",
      date: "January 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Development of the resilience engine for system protection and recovery.",
    },
    {
      title: "Global Launch",
      date: "March 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Official launch of EatoSecure as the security framework for the ecosystem.",
    },
    {
      title: "First Security Audit",
      date: "May 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "First comprehensive security audit of the entire ecosystem.",
    },
  ]

  const contributionAreas = [
    {
      title: "Security Systems",
      description: "Develop frameworks and tools for securing data and systems across the ecosystem.",
      icon: "Server",
      skills: ["Cybersecurity", "Encryption", "Threat Modeling", "Security Architecture"],
    },
    {
      title: "Privacy Tools",
      description: "Build tools that enable data privacy and protection.",
      icon: "Code",
      skills: ["Privacy by Design", "Anonymization", "Consent Management", "Compliance"],
    },
    {
      title: "Resilience Systems",
      description: "Create systems for ensuring system resilience and recovery.",
      icon: "Rocket",
      skills: ["Fault Tolerance", "Disaster Recovery", "Redundancy Design", "System Monitoring"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Security Framework",
      description: "Learn about the security framework for the EatoSystems ecosystem.",
      link: "/eatosecure",
    },
    {
      title: "Join Developer Community",
      description: "Connect with other developers working on security systems.",
      link: "/contribute",
    },
    {
      title: "View System Integration",
      description: "See how EatoSecure integrates with other EatoSystems components.",
      link: "/eatosystems/compare",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatosecure-canopy.png"
      layerImage="/images/systems/eatosecure-canopy.png"
      nextSteps={nextSteps}
    />
  )
}
