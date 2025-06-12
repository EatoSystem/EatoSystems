import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Building, Award, Globe, Users } from "lucide-react"

export default function BecomeAPartnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-r from-green-50 to-blue-50 relative overflow-hidden">
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
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                Partnership Program
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Us in Building the <span className="text-green-600">Future of Food</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">
                Partner with EatoSystems to transform global food systems through innovation, collaboration, and
                sustainable practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#application">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
                    Apply Now
                  </Button>
                </a>
                <a href="#partnership-types">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-6 py-2"
                  >
                    Explore Partnership Types
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/global-partners-hero.png"
                  alt="Global Partnership Network"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With EatoSystems?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Joining the EatoSystems network offers unique opportunities to collaborate with visionaries, access
              cutting-edge technology, and make a meaningful impact on global food systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M7 10h10"></path>
                  <path d="M7 14h10"></path>
                  <path d="M12 10v8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Global Network</h3>
              <p className="text-gray-600 mb-4">
                Connect with world-class culinary innovators, technology leaders, and sustainability experts across our
                12 integrated systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Access to global food system leaders</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Cross-system collaboration opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Knowledge sharing across disciplines</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation Access</h3>
              <p className="text-gray-600 mb-4">
                Gain early access to cutting-edge technologies, research findings, and system innovations being
                developed across the EatoSystems ecosystem.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Early technology adoption</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Co-development opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Research collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="M3 6l9 4 9-4"></path>
                  <path d="M3 10l9 4 9-4"></path>
                  <path d="M3 14l9 4 9-4"></path>
                  <path d="M3 18l9 4 9-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Meaningful Impact</h3>
              <p className="text-gray-600 mb-4">
                Be part of transformative solutions that address global food challenges and create lasting positive
                change for communities worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Contribute to sustainable food systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Support community resilience</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Drive positive environmental outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Types</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer multiple ways to engage with EatoSystems, each designed to leverage your unique strengths and
              align with your organizational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Culinary Partners</h3>
              <p className="text-gray-600 mb-4">
                Chefs, restaurants, and culinary innovators who bring expertise, creativity, and cultural knowledge to
                our systems.
              </p>
              <Link href="#culinary-partners">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">
                Businesses and organizations that provide resources, technology, distribution networks, and funding.
              </p>
              <Link href="#corporate-partners">
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Institutional Partners</h3>
              <p className="text-gray-600 mb-4">
                Universities, research organizations, and NGOs that contribute knowledge, research, and global networks.
              </p>
              <Link href="#institutional-partners">
                <Button
                  variant="outline"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Partners</h3>
              <p className="text-gray-600 mb-4">
                Local organizations and community groups that implement solutions and provide grassroots insights.
              </p>
              <Link href="#community-partners">
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our partnership process is designed to ensure alignment, mutual benefit, and long-term success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-green-600">1</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Initial Inquiry</h3>
                    <p className="text-gray-600 mb-4">
                      Submit your expression of interest through our application form. We'll review your organization's
                      alignment with our mission and values.
                    </p>
                    <div className="flex items-center text-green-600">
                      <span className="font-medium">Timeframe: 1-2 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Exploratory Discussion</h3>
                    <p className="text-gray-600 mb-4">
                      We'll schedule a call to discuss your organization, interests, and potential areas of
                      collaboration. This is an opportunity to explore mutual benefits and alignment.
                    </p>
                    <div className="flex items-center text-green-600">
                      <span className="font-medium">Timeframe: 2-3 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-green-600">3</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Partnership Proposal</h3>
                    <p className="text-gray-600 mb-4">
                      Based on our discussions, we'll develop a tailored partnership proposal outlining specific
                      collaboration opportunities, expectations, and benefits.
                    </p>
                    <div className="flex items-center text-green-600">
                      <span className="font-medium">Timeframe: 3-4 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-green-600">4</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Agreement & Onboarding</h3>
                    <p className="text-gray-600 mb-4">
                      Once we've aligned on the partnership structure, we'll formalize our agreement and begin the
                      onboarding process to integrate you into the EatoSystems ecosystem.
                    </p>
                    <div className="flex items-center text-green-600">
                      <span className="font-medium">Timeframe: 4-6 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center z-10">
                      <span className="text-xl font-bold text-green-600">5</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2">Collaboration & Growth</h3>
                    <p className="text-gray-600 mb-4">
                      Begin active collaboration on projects and initiatives. We'll establish regular check-ins to
                      ensure the partnership continues to evolve and create value.
                    </p>
                    <div className="flex items-center text-green-600">
                      <span className="font-medium">Timeframe: Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Application</h2>
              <p className="text-lg text-gray-700">
                Ready to explore a partnership with EatoSystems? Complete the form below to start the conversation.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Name*
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-1">
                  Partnership Type*
                </label>
                <select
                  id="partnershipType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Partnership Type</option>
                  <option value="culinary">Culinary Partner</option>
                  <option value="corporate">Corporate Partner</option>
                  <option value="institutional">Institutional Partner</option>
                  <option value="community">Community Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="systems" className="block text-sm font-medium text-gray-700 mb-1">
                  EatoSystems of Interest (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="eatome" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatome" className="ml-2 text-sm text-gray-700">
                      EatoMe
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatoagent" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatoagent" className="ml-2 text-sm text-gray-700">
                      EatoAgent
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatoindex" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatoindex" className="ml-2 text-sm text-gray-700">
                      EatoIndex
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatoverse" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatoverse" className="ml-2 text-sm text-gray-700">
                      EatoVerse
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatobotics" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatobotics" className="ml-2 text-sm text-gray-700">
                      EatoBotics
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatotransit" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatotransit" className="ml-2 text-sm text-gray-700">
                      EatoTransit
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatoai" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatoai" className="ml-2 text-sm text-gray-700">
                      EatoAI
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatofund" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatofund" className="ml-2 text-sm text-gray-700">
                      EatoFund
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatosystem" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatosystem" className="ml-2 text-sm text-gray-700">
                      EatoSystem
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatogov" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatogov" className="ml-2 text-sm text-gray-700">
                      EatoGov
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatosecure" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatosecure" className="ml-2 text-sm text-gray-700">
                      EatoSecure
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="eatofoundation" className="h-4 w-4 text-green-600" />
                    <label htmlFor="eatofoundation" className="ml-2 text-sm text-gray-700">
                      EatoFoundation
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Why are you interested in partnering with EatoSystems?*
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                ></textarea>
              </div>

              <div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3">
                  Submit Application
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about partnering with EatoSystems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What is the minimum commitment period for partnerships?</h3>
                <p className="text-gray-600">
                  We typically structure partnerships with an initial one-year commitment, with options to renew. This
                  allows enough time to establish meaningful collaboration while providing flexibility for both parties.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Are there financial requirements for becoming a partner?</h3>
                <p className="text-gray-600">
                  Financial commitments vary by partnership type and level of engagement. Some partnerships involve
                  financial investment, while others focus on in-kind contributions, knowledge sharing, or resource
                  allocation. We work with each partner to determine the most appropriate structure.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How are partnerships structured legally?</h3>
                <p className="text-gray-600">
                  Partnerships are formalized through a Partnership Agreement that outlines roles, responsibilities,
                  expectations, and benefits. Depending on the nature of the collaboration, we may also establish
                  specific agreements for intellectual property, data sharing, or joint ventures.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Can we partner with multiple EatoSystems?</h3>
                <p className="text-gray-600">
                  Yes, many partners engage with multiple systems based on their interests and capabilities. Our
                  integrated approach encourages cross-system collaboration to maximize impact and innovation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What support does EatoSystems provide to partners?</h3>
                <p className="text-gray-600">
                  Partners receive dedicated support from our team, including regular check-ins, access to resources and
                  tools, connection to other partners, and opportunities to participate in events and initiatives. We're
                  committed to ensuring each partnership creates mutual value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Food Systems Together?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in building a more sustainable, equitable, and resilient global food ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#application">
              <Button className="bg-white hover:bg-gray-100 text-green-600 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                Apply Now
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-green-500 rounded-full px-8 py-6 text-lg w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
