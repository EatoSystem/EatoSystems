import { systemsData } from "@/lib/systems-data"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"

export default function CompareSystemsPage({ searchParams }: { searchParams: { systems?: string } }) {
  // Get the systems to compare from the query parameters
  const systemsToCompare = searchParams.systems ? searchParams.systems.split(",") : []

  // If no systems are selected, show a message
  if (systemsToCompare.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Systems", href: "/eatosystems" }, { label: "Compare" }]} />

          <h1 className="text-4xl font-bold mb-8 text-center">Compare EatoSystems</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Select systems to compare their features, implementation stages, and more.
          </p>

          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Select Systems to Compare</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(systemsData).map(([slug, system]) => (
                <Link
                  key={slug}
                  href={`/eatosystems/compare?systems=${slug}`}
                  className="bg-white p-4 rounded-lg border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="font-mono text-brand-600 text-sm mb-1">{system.version}</div>
                  <div className="font-bold text-gray-800">{system.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Get the data for the selected systems
  const selectedSystems = systemsToCompare
    .map((slug) => {
      const system = systemsData[slug as keyof typeof systemsData]
      return system ? { ...system, slug } : null
    })
    .filter(Boolean) as ((typeof systemsData)[keyof typeof systemsData] & { slug: string })[]

  // If no valid systems are found, show an error message
  if (selectedSystems.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Systems", href: "/eatosystems" }, { label: "Compare" }]} />

          <h1 className="text-4xl font-bold mb-8 text-center">Invalid Systems</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            The systems you selected are not valid. Please try again.
          </p>

          <div className="flex justify-center">
            <Link href="/eatosystems/compare" className="text-brand-600 hover:text-brand-700 font-medium">
              Back to Compare
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Systems", href: "/eatosystems" }, { label: "Compare" }]} />

        <h1 className="text-4xl font-bold mb-8 text-center">System Comparison</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Compare the features, implementation stages, and more of the selected systems.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left border-b border-gray-200 w-1/4"></th>
                {selectedSystems.map((system) => (
                  <th key={system.slug} className="p-4 text-center border-b border-gray-200">
                    <div className="font-mono text-brand-600 text-sm mb-1">{system.version}</div>
                    <div className="font-bold text-gray-800">{system.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Layer</td>
                {selectedSystems.map((system) => (
                  <td key={system.slug} className="p-4 text-center border-b border-gray-200">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-brand-700 text-sm font-medium">
                      {system.layer}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Description</td>
                {selectedSystems.map((system) => (
                  <td key={system.slug} className="p-4 text-center border-b border-gray-200">
                    {system.description}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Key Features</td>
                {selectedSystems.map((system) => (
                  <td key={system.slug} className="p-4 border-b border-gray-200">
                    <ul className="list-disc pl-5 space-y-2">
                      {system.content.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature.title}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Implementation Stage</td>
                {selectedSystems.map((system) => (
                  <td key={system.slug} className="p-4 text-center border-b border-gray-200">
                    {system.content.status.split(".")[0]}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-gray-700 border-b border-gray-200">Actions</td>
                {selectedSystems.map((system) => (
                  <td key={system.slug} className="p-4 text-center border-b border-gray-200">
                    <Link href={`/${system.slug}`}>
                      <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                        View Details
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add more systems to compare */}
        <div className="mt-12 text-center">
          <Link
            href="/eatosystems/compare"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white rounded-full px-8 py-3 font-medium transition-all duration-300"
          >
            Compare Different Systems
          </Link>
        </div>
      </div>
    </div>
  )
}
