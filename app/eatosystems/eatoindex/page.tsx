export default function EatoIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">EatoIndex System</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded-xl overflow-hidden shadow-lg">
            <h2 className="p-4 font-bold">Original Path</h2>
            <p className="px-4 pb-4 font-mono text-sm">/images/systems/eatoindex-pollination.png</p>
            <img
              src="/images/systems/eatoindex-pollination.png"
              alt="EatoIndex System"
              className="w-full h-auto"
              onError={(e) => {
                console.error("Failed to load EatoIndex image from systems folder")
                e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=EatoIndex"
              }}
            />
          </div>

          <div className="border rounded-xl overflow-hidden shadow-lg">
            <h2 className="p-4 font-bold">Root Public Image</h2>
            <p className="px-4 pb-4 font-mono text-sm">/eatoindex-pollination.png</p>
            <img
              src="/eatoindex-pollination.png"
              alt="Root Public Image"
              className="w-full h-auto"
              onError={(e) => {
                console.error("Failed to load root public image")
                e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Root"
              }}
            />
          </div>

          <div className="border rounded-xl overflow-hidden shadow-lg">
            <h2 className="p-4 font-bold">Known Working Image</h2>
            <p className="px-4 pb-4 font-mono text-sm">/images/global-network-earth.png</p>
            <img
              src="/images/global-network-earth.png"
              alt="Known Working Image"
              className="w-full h-auto"
              onError={(e) => {
                console.error("Failed to load known working image")
                e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Known"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
