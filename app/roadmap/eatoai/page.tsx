"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoAIRoadmapPage() {
  const system = {
    slug: "eatoai",
    name: "EatoAI",
    layer: "MYCELIUM",
    version: "v6.0",
    description:
      "The decentralized intelligence layer — learning, adapting, and coordinating the global food system in real time.",
    launchDate: "March 2027",
    quarter: "Q1 2027",
  }

  const milestones = [
    {
      title: "Federated Learning Framework",
      date: "July 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Development of the framework for privacy-preserving distributed AI learning.",
    },
    {
      title: "Adaptive Coordination System Alpha",
      date: "September 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Alpha release of systems for balancing supply and demand across regions.",
    },
    {
      title: "Open-Source AI Models",
      date: "November 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Release of the first suite of transparent, auditable AI models for food systems.",
    },
    {
      title: "Collective Intelligence Platform Beta",
      date: "January 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Beta release of tools combining human wisdom with machine learning for complex challenges.",
    },
    {
      title: "Global Launch",
      date: "March 2027",
      quarter: "Q1 2027",
      status: "upcoming",
      description: "Official launch of EatoAI as the decentralized intelligence layer of the ecosystem.",
    },
    {
      title: "Cross-System Integration",
      date: "May 2027",
      quarter: "Q2 2027",
      status: "upcoming",
      description: "Integration of EatoAI with other EatoSystems components for enhanced coordination.",
    },
  ]

  const contributionAreas = [
    {
      title: "Federated Learning Development",
      description: "Build distributed AI systems that learn from local data while preserving privacy and autonomy.",
      icon: "Code",
      skills: ["Federated Learning", "Privacy-Preserving AI", "Distributed Systems", "Edge Computing", "Cryptography"],
    },
    {
      title: "Coordination Systems Engineering",
      description: "Develop systems that help balance supply and demand across regions for food security.",
      icon: "Server",
      skills: ["Systems Engineering", "Optimization Algorithms", "Real-time Analytics", "Network Theory"],
    },
    {
      title: "Collective Intelligence Design",
      description: "Create tools that effectively combine human wisdom with machine learning capabilities.",
      icon: "Users",
      skills: ["Human-AI Collaboration", "Interface Design", "Knowledge Management", "Decision Support Systems"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore AI Capabilities",
      description: "Learn about the decentralized intelligence capabilities being developed for EatoAI.",
      link: "/eatoai",
    },
    {
      title: "Contribute to Development",
      description: "Join the team developing the AI models and distributed learning systems.",
      link: "/contribute/huggingface",
    },
    {
      title: "Pilot Program Application",
      description: "Apply to participate in pilot programs testing EatoAI in specific contexts or applications.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatoai-mycelium.png"
      layerImage="/images/systems/eatoai-mycelium.png"
      nextSteps={nextSteps}
    />
  )
}
