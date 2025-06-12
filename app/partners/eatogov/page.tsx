import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Users, Building } from "lucide-react"

export default function EatoGovPartnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-r from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <Link href="/partners" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Partners
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                System 9
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                EatoGov <span className="text-blue-600">Partners</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">Food Policy & Governance</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Food Policy
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Governance</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Regulation</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Local Food Systems
                </span>
              </div>

              <p className="text-gray-600 mb-8">
                EatoGov focuses on food policy and governance, led by Chef Kobus van der Merwe of Wolfgat. This system
                works to develop and implement effective food policies that support sustainable, equitable, and
                resilient food systems at local, regional, and global levels.
              </p>

              <Link href="#become-partner">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
                  Partner with EatoGov
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/systems/eatogov-regeneration.png"
                  alt="EatoGov System"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Primary Culinary Partner
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kobus van der Merwe & Wolfgat</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/kobus-van-der-merwe-portrait.png"
                alt="Kobus van der Merwe"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">About Kobus van der Merwe</h3>
              <p className="text-gray-600 mb-6">
                Kobus van der Merwe is the chef and owner of Wolfgat, a small restaurant in Paternoster, South Africa
                that was named Restaurant of the Year at the World Restaurant Awards. His approach to cooking celebrates
                local, indigenous ingredients and the unique terroir of the West Coast of South Africa.
              </p>

              <p className="text-gray-600 mb-6">
                As the primary culinary partner for EatoGov, Kobus brings his deep understanding of local food systems,
                indigenous knowledge, and sustainable practices. His work at Wolfgat demonstrates how small-scale,
                locally-focused food operations can thrive while preserving cultural heritage and environmental
                integrity.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                  <span className="text-gray-600">Local food policy frameworks for small communities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <span className="text-gray-600">Indigenous food sovereignty initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                  <span className="text-gray-600">Regulatory frameworks for sustainable wild food harvesting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-700 font-bold">4</span>
                  </div>
                  <span className="text-gray-600">Community-based governance models for food systems</span>
                </li>
              </ul>

              <a
                href="https://wolfgat.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit Wolfgat →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Supporting Partners
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">EatoGov Ecosystem</h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our supporting partners help amplify the impact of EatoGov across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Government Agencies</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Policy Organizations</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Indigenous Communities</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section id="become-partner" className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with EatoGov</h2>
            <p className="text-lg text-gray-700 mb-10">
              Join us in developing effective food policies and governance models. If your organization is aligned with
              our mission, we invite you to connect with us.
            </p>
            <Link href="#contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                Apply to Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
