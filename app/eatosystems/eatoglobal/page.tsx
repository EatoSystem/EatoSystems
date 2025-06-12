export default function EatoGlobalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">EatoGlobal System - The SOIL of EatoSystems</h1>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <p className="text-lg mb-4">
            EatoGlobal is the knowledge, cultural, and collaborative foundation of the EatoSystem — a worldwide movement
            where anyone can contribute, co-create, and help build the future of food.
          </p>
          <p className="text-lg mb-4">
            It is the SOIL of EatoSystems — where every system begins with a story, a skill, or a spark of intention.
            EatoGlobal brings together human knowledge, open collaboration, and global action to create sustainable food
            solutions.
          </p>
          <p className="text-lg">
            Whether you're a farmer, developer, designer, chef, storyteller, student, or someone passionate about the
            future of food — EatoGlobal is your place to participate. Your knowledge, your culture, your skills, your
            story — they all feed the system.
          </p>
        </div>

        <div className="max-w-2xl mx-auto border rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/systems/eatoglobal-soil.png"
            alt="EatoGlobal System"
            className="w-full h-auto"
            onError={(e) => {
              console.error("Failed to load EatoGlobal image")
              e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=EatoGlobal"
            }}
          />
        </div>
      </div>
    </div>
  )
}
