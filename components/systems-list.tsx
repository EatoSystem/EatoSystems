import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { systemsData } from "@/lib/systems-data"

export function SystemsList() {
  const systems = Object.entries(systemsData).map(([slug, system]) => ({
    ...system,
    slug,
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {systems.map((system) => (
        <Card
          key={system.slug}
          className="system-card border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-700 ease-out"
        >
          <CardContent className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="text-xl font-mono text-accent-orange font-semibold">{system.version}</div>
              <div className="text-2xl font-bold text-gray-800">
                <span className="gradient-text">{system.name}</span>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-brand-700 text-sm font-medium mb-4">
              {system.layer}
            </div>

            <Link href={`/${system.slug}`}>
              <div className="mt-4 mb-4 rounded-lg overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-orange/10 z-0"></div>
                <Image
                  src={`/text_placeholder.png?height=160&width=320&text=${system.name}`}
                  alt={system.name}
                  width={320}
                  height={160}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="text-white bg-accent-orange px-4 py-2 rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-600 leading-relaxed">{system.description}</p>

            <div className="mt-4 flex justify-between items-center">
              <Link
                href={`/${system.slug}`}
                className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
