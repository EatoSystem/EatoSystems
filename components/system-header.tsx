import { systemsData } from "@/lib/systems-data"

interface SystemHeaderProps {
  systemSlug: string
}

export default function SystemHeader({ systemSlug }: SystemHeaderProps) {
  const system = systemsData[systemSlug as keyof typeof systemsData]

  if (!system) return null

  return (
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-accent-orange text-sm font-medium mb-6">
        {system.layer}
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800">
        <span className="gradient-text">{system.name}</span>
        <span className="block mt-4 text-xl md:text-2xl font-mono text-accent-orange">{system.version}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">{system.description}</p>
    </div>
  )
}
