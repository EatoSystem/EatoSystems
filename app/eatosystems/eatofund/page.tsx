"use client"

export default function EatoFundPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">EatoFund System</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-xl overflow-hidden shadow-lg">
            <h2 className="p-4 font-bold">Original Path</h2>
            <p className="px-4 pb-4 font-mono text-sm">/images/systems/eatofund-crop.png</p>
            <img
              src="/images/systems/eatofund-crop.png"
              alt="EatoFund System"
              className="w-full h-auto"
              onError={(e) => {
                console.error("Failed to load EatoFund image from systems folder")
                e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=EatoFund"
              }}
            />
          </div>

          <div className="border rounded-xl overflow-hidden shadow-lg">
            <h2 className="p-4 font-bold">Alternative Image</h2>
            <p className="px-4 pb-4 font-mono text-sm">/sustainable-food-collaboration.png</p>
            <img
              src="/sustainable-food-collaboration.png"
              alt="Alternative Image"
              className="w-full h-auto"
              onError={(e) => {
                console.error("Failed to load alternative image")
                e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Alternative"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
