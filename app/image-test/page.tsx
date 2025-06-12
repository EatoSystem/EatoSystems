"use client"

export default function ImageTestPage() {
  const systemImages = [
    { name: "EatoMe", path: "/images/systems/eatome-soil.png" },
    { name: "EatoAgent", path: "/images/systems/eatoagent-seed.png" },
    { name: "EatoIndex", path: "/images/systems/eatoindex-pollination.png" },
    { name: "EatoVerse", path: "/images/systems/eatoverse-root.png" },
    { name: "EatoBotics", path: "/images/systems/eatobotics-sprout.png" },
    { name: "EatoTransit", path: "/images/systems/eatotransit-flow.png" },
    { name: "EatoAI", path: "/images/systems/eatoai-mycelium.png" },
    { name: "EatoFund", path: "/images/systems/eatofund-crop.png" },
    { name: "EatoSystem", path: "/images/systems/eatosystem-harvest.png" },
    { name: "EatoGov", path: "/images/systems/eatogov-regeneration.png" },
    { name: "EatoSecure", path: "/images/systems/eatosecure-canopy.png" },
    { name: "EatoFoundation", path: "/images/systems/eatofoundation-sanctuary.png" },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">System Images Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {systemImages.map((system, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-bold mb-2">{system.name}</h2>
            <p className="text-sm text-gray-500 mb-4">Path: {system.path}</p>

            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={system.path || "/placeholder.svg"}
                alt={`${system.name} image`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
