import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

interface SystemLayoutProps {
  children: React.ReactNode
  system: {
    version: string
    name: string
    layer: string
    description: string
    heroImage?: string
  }
}

export default function SystemLayout({ children, system }: SystemLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-brand-700 text-sm font-medium mb-4">
                {system.layer}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                {system.name}
                <span className="block mt-2 text-xl md:text-2xl font-mono text-accent-orange">{system.version}</span>
              </h1>
              <p className="text-xl text-slate-600 mt-6 mb-8 leading-relaxed">{system.description}</p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={system.heroImage || `/placeholder.svg?height=600&width=800&text=${system.name}`}
                alt={system.name}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main>{children}</main>

      {/* Next/Prev System Navigation */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/#systems" className="text-brand-600 hover:text-brand-700 font-medium">
              View All Systems
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
