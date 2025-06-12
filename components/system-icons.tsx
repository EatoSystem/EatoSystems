import {
  Users,
  Database,
  LineChart,
  BarChart3,
  Brain,
  Leaf,
  Globe,
  Building,
  Shield,
  BookOpen,
  Network,
  Briefcase,
  FileText,
  Lightbulb,
} from "lucide-react"

export const SystemIcons = {
  // EatoGlobal icons
  culturalKnowledge: <BookOpen className="text-[#3B8C6E]" size={24} />,
  communityStorytelling: <Users className="text-[#3B8C6E]" size={24} />,
  knowledgeTransfer: <Network className="text-[#3B8C6E]" size={24} />,
  culturalDesign: <Lightbulb className="text-[#3B8C6E]" size={24} />,

  // EatoIndex icons
  trueCost: <BarChart3 className="text-[#D9822B]" size={24} />,
  impactInvestment: <Briefcase className="text-[#D9822B]" size={24} />,
  consumerTransparency: <FileText className="text-[#D9822B]" size={24} />,
  regenerativeCertification: <Shield className="text-[#D9822B]" size={24} />,

  // EatoAI icons
  federatedLearning: <Brain className="text-[#6366F1]" size={24} />,
  adaptiveCoordination: <Network className="text-[#6366F1]" size={24} />,
  transparentAlgorithms: <Database className="text-[#6366F1]" size={24} />,
  collectiveIntelligence: <Globe className="text-[#6366F1]" size={24} />,

  // EatoFund icons
  blendedFinance: <LineChart className="text-[#0891B2]" size={24} />,
  communityOwnership: <Building className="text-[#0891B2]" size={24} />,
  regenerativeReturns: <Leaf className="text-[#0891B2]" size={24} />,
  globalLocalNetworks: <Globe className="text-[#0891B2]" size={24} />,
}
