import { systemsData } from "@/lib/systems-data"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoSecurePage() {
  const system = systemsData.eatosecure

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 z-0">
          <img
            src="/images/systems/eatosecure-canopy.png"
            alt={`${system.name} background`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `/placeholder.svg?height=400&width=400&text=EatoSecure`
            }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-accent-orange text-sm font-medium mb-6">
                {system.layer}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800">
                <span className="gradient-text">{system.name}</span>
                <span className="block mt-4 text-xl md:text-2xl font-mono text-accent-orange">{system.version}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
                {system.description}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-orange/10 z-0"></div>
              <img
                src="/images/systems/eatosecure-canopy.png"
                alt={system.name}
                className="w-full h-auto object-cover relative z-10"
                onError={(e) => {
                  e.currentTarget.src = `/placeholder.svg?height=400&width=400&text=EatoSecure`
                }}
              />
            </div>
          </div>
        </div>

        {/* Iconic geometric shapes */}
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-accent-orange opacity-5"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-gray-100 opacity-30"></div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Overview</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              {system.content.overview.split("\n\n").map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {system.content.features.map((feature: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Implementation</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {system.content.implementation.map((step: any, index: number) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-brand-600 text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.step}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mt-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Status</h3>
              <p className="text-slate-600 mb-6">{system.content.status}</p>
              <div className="flex justify-center">
                <Button className="bg-brand-600 hover:bg-brand-700 text-white rounded-full px-6">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="py-8"></div>

      <Footer />
    </>
  )
}
