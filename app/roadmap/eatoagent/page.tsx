"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoAgentRoadmapPage() {
  const system = {
    slug: "eatoagent",
    name: "EatoAgent",
    layer: "SEED",
    version: "v1.0",
    description:
      "Modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions.",
    launchDate: "December 2025",
    quarter: "Q4 2025",
  }

  const milestones = [
    {
      title: "Agent Framework Design",
      date: "April 2025",
      quarter: "Q2 2025",
      status: "upcoming",
      description: "Development of the core framework for modular AI agents with privacy and transparency by design.",
    },
    {
      title: "Nutrition Agent Beta",
      date: "June 2025",
      quarter: "Q2 2025",
      status: "upcoming",
      description: "Beta release of the personalized nutrition guidance agent for individual users.",
    },
    {
      title: "Farm Management Agent Beta",
      date: "August 2025",
      quarter: "Q3 2025",
      status: "upcoming",
      description: "Beta release of the farm management assistant for agricultural optimization.",
    },
    {
      title: "Supply Chain Agent Beta",
      date: "October 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "Beta release of the supply chain optimizer for food businesses.",
    },
    {
      title: "Global Launch",
      date: "December 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "Official launch of EatoAgent with the first suite of AI agents for food system optimization.",
    },
    {
      title: "Community Agent Release",
      date: "February 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Release of the community food planning agent for local food system design.",
    },
  ]

  const contributionAreas = [
    {
      title: "AI Development",
      description:
        "Build and train AI models that can provide personalized recommendations while respecting privacy and autonomy.",
      icon: "Code",
      skills: ["Machine Learning", "Natural Language Processing", "Privacy-Preserving AI", "Explainable AI"],
    },
    {
      title: "Domain Expertise Integration",
      description:
        "Help integrate specialized knowledge in nutrition, agriculture, supply chain, and community planning.",
      icon: "Server",
      skills: ["Nutrition Science", "Agricultural Science", "Supply Chain Management", "Community Planning"],
    },
    {
      title: "User Experience Design",
      description: "Create intuitive interfaces for different user types to interact with AI agents effectively.",
      icon: "Users",
      skills: ["UX/UI Design", "Interaction Design", "Accessibility", "User Research"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Agent Prototypes",
      description: "Test early versions of EatoAgent modules and provide feedback to improve their functionality.",
      link: "/eatoagent-lab",
    },
    {
      title: "Contribute to Development",
      description: "Join the development team working on various aspects of the EatoAgent ecosystem.",
      link: "/contribute/github",
    },
    {
      title: "Integrate with Your Projects",
      description: "Learn how to integrate EatoAgent capabilities into your own food system projects.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatoagent-seed.png"
      layerImage="/images/systems/eatoagent-seed.png"
      nextSteps={nextSteps}
    />
  )
}
