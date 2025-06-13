"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoIndexRoadmapPage() {
  const system = {
    slug: "eatoindex",
    name: "EatoIndex",
    layer: "POLLINATION",
    version: "v2.0",
    description:
      "A real-time financial index that ranks and funds food based on health, community, and environmental value — aligning capital with regeneration.",
    launchDate: "March 2026",
    quarter: "Q1 2026",
  }

  const milestones = [
    {
      title: "Metrics Framework Development",
      date: "July 2025",
      quarter: "Q3 2025",
      status: "upcoming",
      description:
        "Development of comprehensive metrics for measuring food system impacts across health, community, and environment.",
    },
    {
      title: "Data Collection System",
      date: "September 2025",
      quarter: "Q3 2025",
      status: "upcoming",
      description: "Launch of systems for collecting and verifying data on food production and distribution impacts.",
    },
    {
      title: "Index Algorithm Beta",
      date: "November 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "Beta release of the core algorithm for ranking food based on comprehensive impact metrics.",
    },
    {
      title: "Investment Platform Prototype",
      date: "January 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Prototype of the platform connecting investors with regenerative food enterprises.",
    },
    {
      title: "Global Launch",
      date: "March 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Official launch of EatoIndex with real-time ranking and investment capabilities.",
    },
    {
      title: "Consumer Interface Release",
      date: "May 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "Release of consumer-facing tools for making informed food purchasing decisions.",
    },
  ]

  const contributionAreas = [
    {
      title: "Metrics Development",
      description: "Help develop and refine comprehensive metrics for measuring the true impact of food systems.",
      icon: "Code",
      skills: ["Data Science", "Environmental Science", "Public Health", "Economics", "Social Impact Assessment"],
    },
    {
      title: "Financial Platform Engineering",
      description: "Build the technical infrastructure for the impact investment platform and financial mechanisms.",
      icon: "Server",
      skills: ["Financial Engineering", "Blockchain", "Smart Contracts", "API Development", "Security"],
    },
    {
      title: "Verification Systems",
      description: "Develop systems for verifying claims and ensuring data integrity across the index.",
      icon: "Users",
      skills: ["Audit Systems", "Remote Sensing", "IoT Integration", "Supply Chain Verification"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore the Metrics Framework",
      description: "Learn about the comprehensive metrics being developed to measure food system impacts.",
      link: "/eatoindex",
    },
    {
      title: "Join the Development Team",
      description: "Contribute to the technical development of the EatoIndex platform and algorithms.",
      link: "/contribute/github",
    },
    {
      title: "Pilot Program Application",
      description: "Apply to participate in pilot programs testing EatoIndex in specific markets or sectors.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatoindex-pollination.png"
      layerImage="/images/systems/eatoindex-pollination.png"
      nextSteps={nextSteps}
    />
  )
}
