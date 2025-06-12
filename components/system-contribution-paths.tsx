import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ContributionPath {
  title: string
  description: string
  link?: string
}

interface SystemContributionProps {
  system: string
  icon: ReactNode
  description: string
  paths: ContributionPath[]
  accentColor: string
  bgColor: string
}

interface SystemContributionPathsProps {
  title: string
  description: string
  systems: SystemContributionProps[]
  platform: string
}

export function SystemContributionPaths({ title, description, systems, platform }: SystemContributionPathsProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((system, index) => (
          <div key={index} className={`${system.bgColor} p-6 rounded-xl border border-gray-100 shadow-sm`}>
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 ${system.accentColor} rounded-lg flex items-center justify-center flex-shrink-0 mb-4`}
              >
                {system.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{system.system}</h3>
                <p className="text-gray-600 mb-4">{system.description}</p>

                <div className="space-y-3">
                  {system.paths.map((path, pathIndex) => (
                    <div key={pathIndex} className="bg-white/80 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-800">{path.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{path.description}</p>
                      {path.link && (
                        <Link
                          href={path.link}
                          className="text-sm font-medium inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          Learn more <ArrowRight size={14} className="ml-1" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
