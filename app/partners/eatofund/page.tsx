import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Users, Building } from "lucide-react"

export default function EatoFundPartnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-r from-green-50 to-emerald-50 relative overflow-hidden">
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
              <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                System 7
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                EatoFund <span className="text-green-600">Partners</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">Sustainable Food Investment & Financing</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Impact Investing
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Food Startups
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Sustainable Finance
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Culinary Ventures
                </span>
              </div>

              <p className="text-gray-600 mb-8">
                EatoFund focuses on sustainable food investment and financing, led by Chef Enrique Olvera of Pujol. This
                system creates innovative financial models to support sustainable food businesses, culinary
                entrepreneurs, and community food initiatives.
              </p>

              <Link href="#become-partner">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
                  Partner with EatoFund
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/systems/eatofund-crop.png"
                  alt="EatoFund System"
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
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Primary Culinary Partner
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enrique Olvera & Pujol</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src="/enrique-olvera-portrait.png"
                alt="Enrique Olvera"
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">About Enrique Olvera</h3>
              <p className="text-gray-600 mb-6">
                Enrique Olvera is the renowned chef and owner of Pujol in Mexico City, consistently ranked among the
                world's best restaurants. He is celebrated for his innovative approach to Mexican cuisine, combining
                traditional techniques with modern creativity while supporting local producers and sustainable
                practices.
              </p>

              <p className="text-gray-600 mb-6">
                As the primary culinary partner for EatoFund, Enrique brings his entrepreneurial vision and commitment
                to supporting local food systems. His work has created economic opportunities throughout Mexico's food
                supply chain while preserving culinary heritage.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <span className="text-gray-600">Micro-financing for small-scale food producers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <span className="text-gray-600">Investment fund for sustainable food startups</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <span className="text-gray-600">Culinary incubator for indigenous food entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <span className="text-gray-600">Financial literacy programs for food business owners</span>
                </li>
              </ul>

              <a
                href="https://pujol.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Visit Pujol →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              Supporting Partners
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">EatoFund Ecosystem</h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our supporting partners help amplify the impact of EatoFund across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Institutions</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact Investors</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Food Entrepreneurs</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section id="become-partner" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with EatoFund</h2>
            <p className="text-lg text-gray-700 mb-10">
              Join us in creating innovative financial models for sustainable food systems. If your organization is
              aligned with our mission, we invite you to connect with us.
            </p>
            <Link href="#contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg">
                Apply to Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
