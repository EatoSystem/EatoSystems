import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  image: string
  gradient?: string
  imageAlt?: string
}

export default function PageHeader({
  title,
  description,
  image,
  gradient = "from-green-600 to-green-800",
  imageAlt = "Header image",
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl mb-8 sm:mb-12 md:mb-16 mt-16 sm:mt-20 md:mt-24">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90 z-10`} />
      <div className="absolute inset-0">
        <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
      </div>
      <div className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight break-words">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed break-words">
          {description}
        </p>
      </div>

      {/* Decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-10 right-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/10 backdrop-blur-sm z-10"></div>
      <div className="hidden sm:block absolute bottom-10 left-10 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm z-10"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-white/5 backdrop-blur-sm z-10"></div>
    </div>
  )
}
