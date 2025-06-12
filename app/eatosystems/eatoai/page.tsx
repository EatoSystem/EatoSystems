export default function EatoAIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">EatoAI System</h1>

        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <p className="font-mono text-sm">Image path: /images/systems/eatoai-mycelium.png</p>
        </div>

        <div className="max-w-2xl mx-auto border rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/systems/eatoai-mycelium.png"
            alt="EatoAI System"
            className="w-full h-auto"
            onError={(e) => {
              console.error("Failed to load EatoAI image")
              e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=EatoAI"
            }}
          />
        </div>
      </div>
    </div>
  )
}
