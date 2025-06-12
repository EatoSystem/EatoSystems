import Image from "next/image"

export default function ContributePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600 opacity-90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/collaborative-agri-coding.png"
            alt="Contribute to EatoSystems - Collaborative agricultural technology development"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            Contribute to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
              EatoSystems
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join developers, designers, and innovators building the future of regenerative agriculture
          </p>
        </div>
      </section>
    </main>
  )
}
