"use client"

import SystemLabTemplate from "@/components/system-lab-template"
import {
  Globe,
  Code,
  Users,
  FileCode,
  Figma,
  BookOpen,
  Server,
  Github,
  Heart,
  MessageCircle,
  Mic,
  Camera,
  Book,
} from "lucide-react"

export default function EatoCulturesLabPage() {
  return (
    <SystemLabTemplate
      systemName="Cultures"
      systemPurpose="the SOIL of EatoSystems — the living foundation where human intelligence feeds the system"
      systemDescription="EatoCultures is where human knowledge, culture, and lived experiences are gathered, preserved, and activated to power the future of global food systems. Every system begins with a story. EatoCultures captures those stories — in text, audio, and video — creating a living cultural layer that feeds Eato AI, Eato Agents, and EatoSystems with the collective intelligence of farmers, chefs, elders, innovators, and communities worldwide. EatoCultures transforms human insight into system intelligence, enabling Eato to learn from the past, adapt in the present, and build for the future."
      accentColor="#3B8C6E"
      secondaryColor="#4DA892"
      systemMaturity="Beta"
      systemSlug="eatocultures"
      collaborationImage="/images/organic-produce-field.png"
      collaborationStats={{
        countries: 0,
        contributors: 0,
        projects: 0,
      }}
      frameworkSteps={[
        {
          title: "Define Core Objectives",
          description:
            "Establish the cultural principles, ethical frameworks, and success metrics for knowledge preservation and sharing.",
          icon: <Heart size={20} />,
        },
        {
          title: "Knowledge & Experience Collection",
          description:
            "Gather diverse cultural traditions, indigenous knowledge, and lived experiences into accessible formats.",
          icon: <Book size={20} />,
        },
        {
          title: "Design & Build in Public",
          description:
            "Develop storytelling platforms, knowledge repositories, and community engagement tools with diverse input.",
          icon: <Code size={20} />,
        },
        {
          title: "Pilot & Feedback Loop",
          description:
            "Test platforms with diverse communities, gather feedback, and refine based on cultural appropriateness and accessibility.",
          icon: <Users size={20} />,
        },
        {
          title: "Scale & Global Deployment",
          description:
            "Expand the platform to connect diverse food cultures worldwide while preserving local autonomy and ownership.",
          icon: <Globe size={20} />,
        },
      ]}
      contributionGroups={[
        {
          name: "v0.dev",
          description:
            "Design and build interfaces for storytelling platforms, knowledge repositories, and community engagement tools.",
          icon: <Code size={24} />,
          link: "#",
        },
        {
          name: "Vercel",
          description:
            "Deploy and scale the cultural platforms with global reach and localized adaptations for diverse communities.",
          icon: <Server size={24} />,
          link: "#",
        },
        {
          name: "GitHub",
          description:
            "Contribute to knowledge management systems, storytelling tools, and community platforms through open source collaboration.",
          icon: <Github size={24} />,
          link: "#",
        },
        {
          name: "Cultural Experts",
          description:
            "Share traditional knowledge, cultural practices, and lived experiences to inform system development.",
          icon: <MessageCircle size={24} />,
          link: "#",
        },
        {
          name: "Researchers",
          description:
            "Document and analyze diverse food traditions and practices to inform system design and implementation.",
          icon: <BookOpen size={24} />,
          link: "#",
        },
        {
          name: "Media Creators",
          description:
            "Develop audio, video, and interactive content to capture and share food stories and cultural knowledge.",
          icon: <Camera size={24} />,
          link: "#",
        },
      ]}
      devResources={[
        {
          title: "GitHub Repository",
          description:
            "Access the core codebase for knowledge management systems, storytelling tools, and community platforms.",
          icon: <Github size={24} />,
          link: "#",
          buttonText: "View Repository",
        },
        {
          title: "Design System",
          description:
            "Explore the UI components and design patterns for building culturally appropriate and accessible interfaces.",
          icon: <Figma size={24} />,
          link: "#",
          buttonText: "Open Figma",
        },
        {
          title: "Documentation",
          description:
            "Comprehensive guides on cultural protocols, ethical frameworks, and integration with other EatoSystems.",
          icon: <FileCode size={24} />,
          link: "#",
          buttonText: "Read Docs",
        },
        {
          title: "Storytelling Tools",
          description: "Tools for capturing, preserving, and sharing food stories and cultural knowledge.",
          icon: <Mic size={24} />,
          link: "#",
          buttonText: "Explore Tools",
        },
        {
          title: "Knowledge Repository",
          description: "Access the growing library of food traditions, practices, and cultural wisdom.",
          icon: <Book size={24} />,
          link: "#",
          buttonText: "Browse Repository",
        },
      ]}
    />
  )
}
