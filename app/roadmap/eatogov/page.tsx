"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoGovRoadmapPage() {
  const system = {
    slug: "eatogov",
    name: "EatoGov",
    layer: "REGENERATION",
    version: "v9.0",
    description: "The governance framework that enables democratic decision-making across the EatoSystems ecosystem.",
    launchDate: "December 2027",
    quarter: "Q4 2027",
  }

  const milestones = [
    {
      title: "Governance Framework Design",
      date: "April 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Development of the core governance framework and principles.",
    },
    {
      title: "Participatory Decision Protocol",
      date: "June 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Establishment of protocols for inclusive decision-making across the ecosystem.",
    },
    {
      title: "Regional Councils Beta",
      date: "August 2027",
      quarter: "Q3 2027",
      status: "upcoming",
      description: "Beta launch of the regional governance councils structure.",
    },
    {
      title: "Cross-System Policy Engine",
      date: "October 2027",
      quarter: "Q4 2027",
      status: "upcoming",
      description: "Development of the policy engine for implementing governance decisions.",
    },
    {
      title: "Global Launch",
      date: "December 2027",
      quarter: "Q4 2027",
      status: "upcoming",
      description: "Official launch of EatoGov as the governance framework for the ecosystem.",
    },
    {
      title: "First Global Assembly",
      date: "February 2028",
      quarter: "Q1 2028",
      status: "upcoming",
      description: "First global assembly of regional councils and stakeholders.",
    },
  ]

  const contributionAreas = [
    {
      title: "Governance Systems",
      description: "Develop frameworks and tools for democratic decision-making across the ecosystem.",
      icon: "Users",
      skills: ["Governance Design", "Voting Systems", "Consensus Mechanisms", "Policy Development"],
    },
    {
      title: "Participatory Tools",
      description: "Build tools that enable inclusive participation in governance processes.",
      icon: "Code",
      skills: ["UX/UI Design", "Accessibility", "Multilingual Support", "Deliberation Tools"],
    },
    {
      title: "Policy Implementation",
      description: "Create systems for implementing and monitoring governance decisions.",
      icon: "Server",
      skills: ["Policy Frameworks", "Compliance Systems", "Impact Assessment", "Monitoring & Evaluation"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Governance Model",
      description: "Learn about the governance framework for the EatoSystems ecosystem.",
      link: "/eatogov",
    },
    {
      title: "Join Developer Community",
      description: "Connect with other developers working on governance systems.",
      link: "/contribute",
    },
    {
      title: "View System Integration",
      description: "See how EatoGov integrates with other EatoSystems components.",
      link: "/eatosystems/compare",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatogov-regeneration.png"
      layerImage="/images/systems/eatogov-regeneration.png"
      nextSteps={nextSteps}
    />
  )
}
