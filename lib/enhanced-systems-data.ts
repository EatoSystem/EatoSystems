import { SystemIcons } from "@/components/system-icons"
import { systemsData } from "@/lib/systems-data"

// Enhanced system data with icons and additional metadata
export const enhancedSystemsData = {
  eatoglobal: {
    ...systemsData.eatoglobal,
    slug: "eatoglobal",
    progressPercentage: 35,
    accentColor: "#3B8C6E",
    content: {
      ...systemsData.eatoglobal.content,
      features: [
        {
          title: "Global Knowledge Network",
          description:
            "A worldwide platform where diverse voices contribute real-world knowledge, traditions, and practices, building the collective intelligence that powers all EatoSystems.",
          icon: SystemIcons.culturalKnowledge,
        },
        {
          title: "Living Collaboration Hub",
          description:
            "A continuously expanding space for global contributors to co-create, share stories, and build sustainable food solutions together.",
          icon: SystemIcons.communityStorytelling,
        },
        {
          title: "System Intelligence Foundation",
          description:
            "All contributions feed the learning and evolution of EatoAI and EatoSystems, supporting more intelligent, human-informed food system solutions.",
          icon: SystemIcons.knowledgeTransfer,
        },
        {
          title: "The EatoGlobal App",
          description:
            "A personalized platform that empowers individuals and communities worldwide to contribute their knowledge, skills, and stories to the global food transformation.",
          icon: SystemIcons.culturalDesign,
        },
      ],
      implementation: [
        {
          ...systemsData.eatoglobal.content.implementation[0],
          status: "completed",
        },
        {
          ...systemsData.eatoglobal.content.implementation[1],
          status: "in-progress",
        },
        {
          ...systemsData.eatoglobal.content.implementation[2],
          status: "planned",
        },
      ],
    },
  },

  eatoindex: {
    ...systemsData.eatoindex,
    slug: "eatoindex",
    progressPercentage: 45,
    accentColor: "#D9822B",
    content: {
      ...systemsData.eatoindex.content,
      features: [
        {
          ...systemsData.eatoindex.content.features[0],
          icon: SystemIcons.trueCost,
        },
        {
          ...systemsData.eatoindex.content.features[1],
          icon: SystemIcons.impactInvestment,
        },
        {
          ...systemsData.eatoindex.content.features[2],
          icon: SystemIcons.consumerTransparency,
        },
        {
          ...systemsData.eatoindex.content.features[3],
          icon: SystemIcons.regenerativeCertification,
        },
      ],
      implementation: [
        {
          ...systemsData.eatoindex.content.implementation[0],
          status: "completed",
        },
        {
          ...systemsData.eatoindex.content.implementation[1],
          status: "in-progress",
        },
        {
          ...systemsData.eatoindex.content.implementation[2],
          status: "planned",
        },
      ],
    },
  },

  eatoai: {
    ...systemsData.eatoai,
    slug: "eatoai",
    progressPercentage: 60,
    accentColor: "#6366F1",
    content: {
      ...systemsData.eatoai.content,
      features: [
        {
          ...systemsData.eatoai.content.features[0],
          icon: SystemIcons.federatedLearning,
        },
        {
          ...systemsData.eatoai.content.features[1],
          icon: SystemIcons.adaptiveCoordination,
        },
        {
          ...systemsData.eatoai.content.features[2],
          icon: SystemIcons.transparentAlgorithms,
        },
        {
          ...systemsData.eatoai.content.features[3],
          icon: SystemIcons.collectiveIntelligence,
        },
      ],
      implementation: [
        {
          ...systemsData.eatoai.content.implementation[0],
          status: "completed",
        },
        {
          ...systemsData.eatoai.content.implementation[1],
          status: "in-progress",
        },
        {
          ...systemsData.eatoai.content.implementation[2],
          status: "planned",
        },
      ],
    },
  },

  eatofund: {
    ...systemsData.eatofund,
    slug: "eatofund",
    progressPercentage: 50,
    accentColor: "#0891B2",
    content: {
      ...systemsData.eatofund.content,
      features: [
        {
          ...systemsData.eatofund.content.features[0],
          icon: SystemIcons.blendedFinance,
        },
        {
          ...systemsData.eatofund.content.features[1],
          icon: SystemIcons.communityOwnership,
        },
        {
          ...systemsData.eatofund.content.features[2],
          icon: SystemIcons.regenerativeReturns,
        },
        {
          ...systemsData.eatofund.content.features[3],
          icon: SystemIcons.globalLocalNetworks,
        },
      ],
      implementation: [
        {
          ...systemsData.eatofund.content.implementation[0],
          status: "completed",
        },
        {
          ...systemsData.eatofund.content.implementation[1],
          status: "in-progress",
        },
        {
          ...systemsData.eatofund.content.implementation[2],
          status: "planned",
        },
      ],
    },
  },
}
