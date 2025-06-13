"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoFundRoadmapPage() {
  const system = {
    slug: "eatofund",
    name: "EatoFund",
    layer: "CROP",
    version: "v7.0",
    description:
      "The regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world.",
    launchDate: "June 2027",
    quarter: "Q2 2027",
  }

  const milestones = [
    {
      title: "Blended Finance Models",
      date: "October 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Development of innovative funding structures combining different types of capital.",
    },
    {
      title: "Community Ownership Platform Alpha",
      date: "December 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Alpha release of mechanisms enabling communities to build equity in local food systems.",
    },
    {
      title: "Regenerative Returns Framework",
      date: "February 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Establishment of investment models measuring success based on ecological and social outcomes.",
    },
    {
      title: "Global-Local Network Prototype",
      date: "April 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Prototype of systems connecting global capital with local food enterprises.",
    },
    {
      title: "Global Launch",
      date: "June 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Official launch of EatoFund as the regenerative capital engine of the ecosystem.",
    },
    {
      title: "First Investment Round",
      date: "August 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Completion of the first major investment round for regenerative food enterprises.",
    },
  ]

  const contributionAreas = [
    {
      title: "Financial Innovation",
      description: "Develop new investment vehicles and funding mechanisms aligned with regenerative principles.",
      icon: "Code",
      skills: ["Financial Engineering", "Impact Investment", "Blended Finance", "Tokenization", "Legal Structures"],
    },
    {
      title: "Community Ownership Systems",
      description: "Build platforms and mechanisms that enable communities to build equity in local food systems.",
      icon: "Users",
      skills: ["Cooperative Models", "Community Finance", "Governance Systems", "Participatory Economics"],
    },
    {
      title: "Impact Measurement",
      description: "Create systems for measuring and verifying the regenerative returns of investments.",
      icon: "Server",
      skills: ["Impact Assessment", "Data Analytics", "Monitoring & Evaluation", "Reporting Standards"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Funding Models",
      description: "Learn about the innovative funding structures being developed for regenerative food systems.",
      link: "/eatofund",
    },
    {
      title: "Join Developer Community",
      description: "Connect with other developers working on financial innovation for food systems.",
      link: "/contribute",
    },
    {
      title: "View System Integration",
      description: "See how EatoFund integrates with other EatoSystems components.",
      link: "/eatosystems/compare",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/pollination-financials.png"
      layerImage="/images/systems/eatofund-crop.png"
      nextSteps={nextSteps}
    />
  )
}
