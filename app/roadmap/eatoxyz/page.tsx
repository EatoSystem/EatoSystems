"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoXYZRoadmapPage() {
  const system = {
    slug: "eatoxyz",
    name: "EatoXYZ",
    layer: "SOIL",
    version: "v0.1",
    description:
      "The knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement where anyone can contribute, co-create, and help build the future of food.",
    launchDate: "September 2025",
    quarter: "Q3 2025",
  }

  const milestones = [
    {
      title: "Community Platform Alpha",
      date: "January 2025",
      quarter: "Q1 2025",
      status: "upcoming",
      description: "Launch of the initial community platform for global contributor onboarding and collaboration.",
    },
    {
      title: "Knowledge Repository Framework",
      date: "March 2025",
      quarter: "Q1 2025",
      status: "upcoming",
      description:
        "Development of the framework for collecting and preserving food stories, practices, and traditions.",
    },
    {
      title: "Regional EatoTeams Pilot",
      date: "May 2025",
      quarter: "Q2 2025",
      status: "upcoming",
      description: "Initial pilot program for regional EatoTeams in select locations worldwide.",
    },
    {
      title: "Cultural Preservation Tools",
      date: "July 2025",
      quarter: "Q3 2025",
      status: "upcoming",
      description: "Release of tools for documenting and preserving traditional food knowledge and practices.",
    },
    {
      title: "Global Launch",
      date: "September 2025",
      quarter: "Q3 2025",
      status: "upcoming",
      description: "Official launch of EatoXYZ as the foundation layer of the EatoSystems framework.",
    },
    {
      title: "First Global Summit",
      date: "November 2025",
      quarter: "Q4 2025",
      status: "upcoming",
      description: "First global gathering of EatoXYZ contributors and regional EatoTeams.",
    },
  ]

  const contributionAreas = [
    {
      title: "Cultural Documentation",
      description:
        "Help document and preserve traditional food knowledge, stories, and practices from diverse cultures worldwide.",
      icon: "Users",
      skills: ["Anthropology", "Ethnography", "Storytelling", "Language", "Cultural Studies"],
    },
    {
      title: "Community Platform Development",
      description: "Build and enhance the digital platforms that enable global collaboration and knowledge sharing.",
      icon: "Code",
      skills: ["Web Development", "UX Design", "Community Management", "Content Strategy"],
    },
    {
      title: "Regional Coordination",
      description: "Help establish and coordinate regional EatoTeams that adapt global solutions to local contexts.",
      icon: "Users",
      skills: ["Community Building", "Project Management", "Cultural Facilitation", "Languages"],
    },
  ]

  const nextSteps = [
    {
      title: "Join the Community",
      description: "Become part of the global EatoXYZ community and start contributing your knowledge and skills.",
      link: "/contribute/community",
    },
    {
      title: "Explore the Knowledge Base",
      description: "Access the growing repository of food stories, practices, and traditions from around the world.",
      link: "/eatoxyz",
    },
    {
      title: "Start a Regional EatoTeam",
      description: "Learn how to establish an EatoTeam in your region to adapt global solutions to local needs.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatoglobal-soil.png"
      layerImage="/images/systems/eatoglobal-soil.png"
      nextSteps={nextSteps}
    />
  )
}
