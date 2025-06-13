"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoFoundationRoadmapPage() {
  const system = {
    slug: "eatofoundation",
    name: "EatoFoundation",
    layer: "SANCTUARY",
    version: "v10.0",
    description:
      "The philanthropic arm that ensures equitable access to EatoSystems technology and supports community-led food initiatives worldwide.",
    launchDate: "March 2028",
    quarter: "Q1 2028",
  }

  const milestones = [
    {
      title: "Foundation Framework Design",
      date: "July 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Development of the core foundation framework and principles.",
    },
    {
      title: "Equity Access Protocol",
      date: "September 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Establishment of protocols for ensuring equitable access to technology.",
    },
    {
      title: "Community Grants Program Beta",
      date: "November 2027",
      quarter: "Q4 2027",
      status: "upcoming",
      description: "Beta launch of the community grants program.",
    },
    {
      title: "Global Partnership Network",
      date: "January 2028",
      quarter: "Q1 2028",
      status: "upcoming",
      description: "Development of the global partnership network for community support.",
    },
    {
      title: "Global Launch",
      date: "March 2028",
      quarter: "Q1 2028",
      status: "upcoming",
      description: "Official launch of EatoFoundation as the philanthropic arm of the ecosystem.",
    },
    {
      title: "First Grant Cycle",
      date: "May 2028",
      quarter: "Q2 2028",
      status: "upcoming",
      description: "First comprehensive grant cycle supporting community-led food initiatives.",
    },
  ]

  const contributionAreas = [
    {
      title: "Equity Systems",
      description: "Develop frameworks and tools for ensuring equitable access to technology.",
      icon: "Users",
      skills: ["Equity Design", "Accessibility", "Inclusive Development", "Community Engagement"],
    },
    {
      title: "Grant Management Tools",
      description: "Build tools that enable effective management of community grants.",
      icon: "Code",
      skills: ["Grant Systems", "Impact Assessment", "Reporting Tools", "Community Feedback"],
    },
    {
      title: "Partnership Networks",
      description: "Create systems for building and managing global partnership networks.",
      icon: "Rocket",
      skills: ["Network Design", "Collaboration Tools", "Knowledge Sharing", "Community Building"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Foundation Model",
      description: "Learn about the philanthropic framework for the EatoSystems ecosystem.",
      link: "/eatofoundation",
    },
    {
      title: "Join Developer Community",
      description: "Connect with other developers working on equity and access systems.",
      link: "/contribute",
    },
    {
      title: "View System Integration",
      description: "See how EatoFoundation integrates with other EatoSystems components.",
      link: "/eatosystems/compare",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatofoundation-sanctuary.png"
      layerImage="/images/systems/eatofoundation-sanctuary.png"
      nextSteps={nextSteps}
    />
  )
}
