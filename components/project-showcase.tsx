import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  image: string
  link: string
  buttonText?: string
  imageAlt?: string
}

interface ProjectShowcaseProps {
  title: string
  description?: string
  projects: ProjectProps[]
  background?: string
}

export function Project({
  title,
  description,
  image,
  link,
  buttonText = "View Project",
  imageAlt = "Project image",
}: ProjectProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" size="sm">
          <Link href={link} className="flex items-center">
            <span>{buttonText}</span>
            {link.startsWith("http") && <ExternalLink size={14} className="ml-1" />}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function ProjectShowcase({
  title,
  description,
  projects,
  background = "bg-green-50",
}: ProjectShowcaseProps) {
  return (
    <div className={`${background} p-8 rounded-xl mb-16 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-gray-600 mb-6 max-w-3xl">{description}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
