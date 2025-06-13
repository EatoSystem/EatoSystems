"use client"

import SystemRoadmapTemplate from "@/components/system-roadmap-template"

export default function EatoBoticsRoadmapPage() {
  const system = {
    slug: "eatobotics",
    name: "EatoBotics",
    layer: "SPROUT",
    version: "v4.0",
    description:
      "Regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration.",
    launchDate: "September 2026",
    quarter: "Q3 2026",
  }

  const milestones = [
    {
      title: "Design Principles Framework",
      date: "January 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Establishment of core design principles for regenerative robotics and tools.",
    },
    {
      title: "Soil Health Monitoring Prototype",
      date: "March 2026",
      quarter: "Q1 2026",
      status: "upcoming",
      description: "Prototype of advanced sensors and analysis tools for real-time soil health monitoring.",
    },
    {
      title: "Precision Agroecology System Beta",
      date: "May 2026",
      quarter: "Q2 2026",
      status: "upcoming",
      description: "Beta release of robotic systems for targeted interventions supporting plant health.",
    },
    {
      title: "Open-Source Hardware Platform",
      date: "July 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Launch of the platform for sharing and adapting regenerative tool designs.",
    },
    {
      title: "Global Launch",
      date: "September 2026",
      quarter: "Q3 2026",
      status: "upcoming",
      description: "Official launch of EatoBotics with the first suite of regenerative tools and systems.",
    },
    {
      title: "Biomimetic Design Library",
      date: "November 2026",
      quarter: "Q4 2026",
      status: "upcoming",
      description: "Release of a comprehensive library of biomimetic designs for agricultural applications.",
    },
  ]

  const contributionAreas = [
    {
      title: "Hardware Development",
      description:
        "Design and build regenerative robotics and tools that support soil health and ecosystem restoration.",
      icon: "Server",
      skills: ["Robotics", "Hardware Engineering", "Sensor Design", "Biomimicry", "Sustainable Materials"],
    },
    {
      title: "Software Systems",
      description:
        "Develop the software that powers regenerative tools and enables them to work in harmony with natural systems.",
      icon: "Code",
      skills: ["Embedded Systems", "Computer Vision", "Machine Learning", "Control Systems", "Edge Computing"],
    },
    {
      title: "Field Testing & Implementation",
      description: "Help test and implement regenerative tools in diverse agricultural contexts worldwide.",
      icon: "Users",
      skills: ["Agricultural Science", "Field Research", "Documentation", "Training", "Community Engagement"],
    },
  ]

  const nextSteps = [
    {
      title: "Explore Prototype Designs",
      description: "Access designs and specifications for regenerative robotics and tools currently in development.",
      link: "/eatobotics",
    },
    {
      title: "Join the Development Team",
      description: "Contribute to the hardware and software development of EatoBotics systems.",
      link: "/contribute/github",
    },
    {
      title: "Become a Field Testing Partner",
      description: "Apply to participate in field testing of EatoBotics prototypes in your agricultural context.",
      link: "/start-building",
    },
  ]

  return (
    <SystemRoadmapTemplate
      system={system}
      milestones={milestones}
      contributionAreas={contributionAreas}
      heroImage="/images/systems/eatobotics-sprout.png"
      layerImage="/images/systems/eatobotics-sprout.png"
      nextSteps={nextSteps}
    />
  )
}
