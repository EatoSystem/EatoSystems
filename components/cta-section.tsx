import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  isExternal?: boolean
  gradient?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  isExternal = false,
  gradient = "from-green-500 to-emerald-600",
}: CTASectionProps) {
  return (
    <div className="text-center mb-16 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl transform -skew-y-2 shadow-2xl`}></div>

      <div className="relative z-10 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{title}</h2>
        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">{description}</p>
        <Button className="bg-white hover:bg-gray-100 text-green-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <Link href={buttonLink} target={isExternal ? "_blank" : undefined} className="flex items-center">
            <span>{buttonText}</span>
            {isExternal && <ExternalLink size={16} className="ml-2" />}
          </Link>
        </Button>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/20 rounded-full shadow-lg"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/20 rounded-full shadow-lg"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-orange-300/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}
