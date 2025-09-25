export default function HoldingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250803_1225_Bees%20and%20Data_simple_compose_01k1qtv0j7fgba7pjyh3t56fhr-RQJjdLFTrNHOQJoloz9mhthI1fCtSt.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">EatoSystems</h1>
        <p className="text-xl md:text-2xl text-white/90 font-light">Launching Soon</p>
      </div>
    </div>
  )
}
