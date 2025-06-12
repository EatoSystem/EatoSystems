import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { ReactNode } from "react"

interface StepProps {
  number: number
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  isExternal?: boolean
}

interface GettingStartedProps {
  title: string
  steps: StepProps[]
  decorativeElement?: ReactNode
}

export function Step({ number, title, description, buttonText, buttonLink, isExternal = false }: StepProps) {
  return (
    <li className="flex gap-4 group">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600 font-semibold group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 mb-2">{description}</p>
        {buttonText && buttonLink && (
          <Button variant="outline" size="sm">
            <Link href={buttonLink} target={isExternal ? "_blank" : undefined} className="flex items-center">
              <span>{buttonText}</span>
              {isExternal && <ExternalLink size={14} className="ml-1" />}
            </Link>
          </Button>
        )}
      </div>
    </li>
  )
}

export default function GettingStarted({ title, steps, decorativeElement }: GettingStartedProps) {
  return (
    <div id="getting-started" className="mb-16">
      <div className="flex items-center mb-6">
        <div className="h-px flex-grow bg-gray-200"></div>
        <h2 className="text-3xl font-bold px-4">{title}</h2>
        <div className="h-px flex-grow bg-gray-200"></div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          {decorativeElement || (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="5" fill="currentColor" />
              <circle cx="30" cy="10" r="5" fill="currentColor" />
              <circle cx="50" cy="10" r="5" fill="currentColor" />
              <circle cx="70" cy="10" r="5" fill="currentColor" />
              <circle cx="90" cy="10" r="5" fill="currentColor" />
              <circle cx="10" cy="30" r="5" fill="currentColor" />
              <circle cx="30" cy="30" r="5" fill="currentColor" />
              <circle cx="50" cy="30" r="5" fill="currentColor" />
              <circle cx="70" cy="30" r="5" fill="currentColor" />
              <circle cx="90" cy="30" r="5" fill="currentColor" />
              <circle cx="10" cy="50" r="5" fill="currentColor" />
              <circle cx="30" cy="50" r="5" fill="currentColor" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <circle cx="70" cy="50" r="5" fill="currentColor" />
              <circle cx="90" cy="50" r="5" fill="currentColor" />
              <circle cx="10" cy="70" r="5" fill="currentColor" />
              <circle cx="30" cy="70" r="5" fill="currentColor" />
              <circle cx="50" cy="70" r="5" fill="currentColor" />
              <circle cx="70" cy="70" r="5" fill="currentColor" />
              <circle cx="90" cy="70" r="5" fill="currentColor" />
              <circle cx="10" cy="90" r="5" fill="currentColor" />
              <circle cx="30" cy="90" r="5" fill="currentColor" />
              <circle cx="50" cy="90" r="5" fill="currentColor" />
              <circle cx="70" cy="90" r="5" fill="currentColor" />
              <circle cx="90" cy="90" r="5" fill="currentColor" />
            </svg>
          )}
        </div>

        <ol className="space-y-8 relative z-10">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </ol>
      </div>
    </div>
  )
}
