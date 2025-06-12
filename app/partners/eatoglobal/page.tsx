import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EatoGlobalPartnerPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <ScrollToTop />
      <Navbar />

      {/* Back to Partners */}
      <div className="pt-24 pb-4">
        <div className="container mx-auto px-4">
          <Link href="/partners" className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Partners
          </Link>
        </div>
      </div>

      {/* System Badge */}
      <div className="container mx-auto px-4 mb-6">
        <div className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200">
          System v0.1
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  EatoGlobal <span className="text-green-600">Partners</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8">The SOIL of EatoSystems</p>

                {/* Navigation Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Human Intelligence
                  </div>
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Cultural Knowledge
                  </div>
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Living Archive
                  </div>
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    System Foundation
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    EatoGlobal is the SOIL of EatoSystems — the living foundation where human intelligence meets the
                    system. It is where human knowledge, culture, and lived experiences are gathered, preserved, and
                    activated to power the future of global food systems. Every system begins with a story. EatoGlobal
                    captures those stories — in text, audio, and video — creating a living cultural layer that feeds
                    EatoAI, EatoAgents, and EatoSystems with the collective intelligence of farmers, chefs, elders,
                    innovators, and communities worldwide. EatoGlobal transforms human insight into system intelligence,
                    enabling EatoSystems to learn from the past, adapt in the present, and build for the future.
                  </p>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
                  Partner with EatoGlobal
                </Button>
              </div>

              <div className="relative">
                <img
                  src="/images/systems/eatoglobal-soil.png"
                  alt="EatoGlobal Neural Network"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Culinary Partner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Ideal Culinary Partner
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">René Redzepi & Noma Projects</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While not yet formal partners, we've identified visionaries who perfectly align with EatoGlobal's
                mission and would be ideal collaborators in building our cultural foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">About René Redzepi</h3>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p className="mb-4">
                    René Redzepi is the chef and co-owner of Noma in Copenhagen, Denmark, recognized as one of the
                    world's most influential restaurants. Through Noma Projects, he explores new frontiers in food,
                    focusing on sustainability, seasonality, and locality.
                  </p>
                  <p>
                    As an ideal culinary partner for EatoGlobal, René would bring his innovative approach to food and
                    deep understanding of ingredients to help build the cultural foundation of EatoSystems. His work has
                    revolutionized how we think about food origins, preparation, and the stories behind our food, making
                    him a perfect fit for our mission of capturing and preserving food knowledge and traditions.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-800">Key Initiatives</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <p className="text-gray-600">Capturing and preserving culinary traditions and knowledge</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <p className="text-gray-600">
                        Creating educational resources on food origins and cultural significance
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <p className="text-gray-600">Developing the foundation for the future EatoGlobal App</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <p className="text-gray-600">Building a global network of food knowledge contributors</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                    Visit Noma Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/rene-redzepi-portrait.png"
                  alt="René Redzepi"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EatoGlobal Framework Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">EatoGlobal Framework</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive system for capturing, preserving, and activating global food knowledge to power the
                future of sustainable food systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Human Knowledge */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Human Knowledge</h3>
                <p className="text-gray-600 mb-6">
                  Collecting and preserving the food stories, practices, and traditions that define our relationship
                  with food across cultures and generations.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Cultural food traditions and practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Indigenous knowledge systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Generational wisdom transfer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>Regional cooking techniques</span>
                  </li>
                </ul>
              </div>

              {/* Open Collaboration */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Open Collaboration</h3>
                <p className="text-gray-600 mb-6">
                  Empowering contributors from around the world to co-create sustainable food solutions through
                  storytelling, design, technology, and innovation.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Global contributor network</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Open-source development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Cross-cultural exchange</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Collaborative innovation</span>
                  </li>
                </ul>
              </div>

              {/* Global Action */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Global Action</h3>
                <p className="text-gray-600 mb-6">
                  Uniting diverse voices to shape national EatoTeams, contribute to open-source development, and support
                  the growth of intelligent, inclusive food systems.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>National EatoTeam formation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Regional initiative leadership</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Policy advocacy and change</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Sustainable system implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Framework Process */}
            <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">How EatoGlobal Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Gather</h4>
                  <p className="text-sm text-gray-600">
                    Collect stories, practices, and knowledge from global food communities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Preserve</h4>
                  <p className="text-sm text-gray-600">Archive and organize cultural knowledge in accessible formats</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Connect</h4>
                  <p className="text-sm text-gray-600">Link knowledge holders with innovators and system builders</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Activate</h4>
                  <p className="text-sm text-gray-600">
                    Transform insights into intelligent systems and sustainable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Partner with EatoGlobal</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're actively seeking founding partners who share our vision for building the cultural foundation of
              global food systems.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg">
              Apply to Partner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
