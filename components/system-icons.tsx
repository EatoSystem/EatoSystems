// Create simple SVG icons to replace lucide-react
const createIcon = (path: string, color: string) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
)

export const SystemIcons = {
  // EatoGlobal icons
  culturalKnowledge: createIcon("M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "#3B8C6E"),
  communityStorytelling: createIcon("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "#3B8C6E"),
  knowledgeTransfer: createIcon("M6.5 6.5h11m-11 5h11m-11 5h11", "#3B8C6E"),
  culturalDesign: createIcon("M9 12l2 2 4-4", "#3B8C6E"),

  // EatoIndex icons
  trueCost: createIcon("M18 20V10m-6 10V4m-6 16v-6", "#D9822B"),
  impactInvestment: createIcon("M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", "#D9822B"),
  consumerTransparency: createIcon("M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "#D9822B"),
  regenerativeCertification: createIcon("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "#D9822B"),

  // EatoAI icons
  federatedLearning: createIcon(
    "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-9.29 2.5 2.5 0 0 1 4.44-.44V4.5A2.5 2.5 0 0 1 9.5 2Z",
    "#6366F1",
  ),
  adaptiveCoordination: createIcon("M6.5 6.5h11m-11 5h11m-11 5h11", "#6366F1"),
  transparentAlgorithms: createIcon("M4 6h16M4 12h16M4 18h16", "#6366F1"),
  collectiveIntelligence: createIcon("M21.54 15H17a2 2 0 0 0-2 2v4.54", "#6366F1"),

  // EatoFund icons
  blendedFinance: createIcon("M3 3v18h18", "#0891B2"),
  communityOwnership: createIcon("M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "#0891B2"),
  regenerativeReturns: createIcon("M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3", "#0891B2"),
  globalLocalNetworks: createIcon("M21.54 15H17a2 2 0 0 0-2 2v4.54", "#0891B2"),
}
