import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Users, Globe, Code, Leaf, Building2 } from "lucide-react"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Start Building | EatoSystems",
  description:
    "Join our global community of developers, researchers, and innovators to build the future of global food security and resilience.",
}

export default function StartBuildingPage() {
  const processSteps = [
    {
      number: "1",
      title: "Register",
      description: "Create your profile and share your skills and interests",
    },
    {
      number: "2",
      title: "Explore",
      description: "Discover EatoSystems and identify opportunities",
    },
    {
      number: "3",
      title: "Collaborate",
      description: "Join projects or propose your own solutions",
    },
    {
      number: "4",
      title: "Build",
      description: "Develop and deploy solutions with our support",
    },
  ]

  const featuredProjects = [
    {
      title: "EatoSystems Website Development",
      description: "Contribute to the main EatoSystems platform, improving user experience and adding new features.",
      icon: <Globe className="h-16 w-16 text-primary/70" />,
      tags: ["Next.js", "React"],
    },
    {
      title: "System Integration APIs",
      description: "Build and maintain APIs that connect all EatoSystems components for seamless data flow.",
      icon: <Code className="h-16 w-16 text-primary/70" />,
      tags: ["API Development", "Integration"],
    },
    {
      title: "Individual System Development",
      description: "Work on specific EatoSystems like EatoAI, EatoIndex, or EatoVerse to enhance their capabilities.",
      icon: <Lightbulb className="h-16 w-16 text-primary/70" />,
      tags: ["System Design", "Innovation"],
    },
  ]

  const faqs = [
    {
      question: "What skills are needed to contribute?",
      answer:
        "We welcome contributors with diverse skills, including software development, data science, agricultural expertise, design, research, policy analysis, and community organizing. All skill levels are welcome.",
    },
    {
      question: "Is there funding available for projects?",
      answer:
        "Yes, EatoSystems provides funding opportunities for promising projects that align with our mission. The funding process typically begins after an initial proof of concept has been developed.",
    },
    {
      question: "How do I find projects to join?",
      answer:
        "After registering, you'll have access to our collaboration platform where you can browse active projects, connect with teams, and express interest in contributing based on your skills and interests.",
    },
    {
      question: "What resources are available for developers?",
      answer:
        "Developers have access to comprehensive documentation, SDKs, APIs, sample code, development environments, and a supportive community of fellow developers. We also provide technical mentorship for specific projects.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
          <Image
            src="/images/global-systems-network.png"
            alt="Global network of sustainable food systems and innovation"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32 text-center text-white">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-white/30">
              <Code className="w-6 h-6 mr-3 text-orange-200" />
              <span className="text-white font-semibold text-lg">Join Our Community</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              Start
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                Building
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90">With EatoSystems</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 font-light">
              Join our global community of developers, researchers, and innovators to build the future of global food
              security and resilience. Together, we're creating technology that transforms agriculture.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link href="/start-building/register">
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  <Code className="w-6 h-6 mr-3" />
                  Register Your Skills
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Code className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Open</div>
                <div className="text-lg font-semibold text-white mb-2">Source</div>
                <div className="text-sm text-white/80">Collaborative development</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">12</div>
                <div className="text-lg font-semibold text-white mb-2">Systems</div>
                <div className="text-sm text-white/80">To build and enhance</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">Global</div>
                <div className="text-lg font-semibold text-white mb-2">Impact</div>
                <div className="text-sm text-white/80">Worldwide collaboration</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">∞</div>
                <div className="text-lg font-semibold text-white mb-2">Community</div>
                <div className="text-sm text-white/80">Growing developer network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Vision for Collaboration</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that the most impactful solutions come from diverse perspectives working together to create
              technologies that are both innovative and sustainable.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-orange-50 p-12 mb-16">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/sustainable-food-collaboration.png"
                alt="Diverse farmers collaborating in sustainable agriculture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg mr-4">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Sustainable Innovation</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    By bringing together developers, researchers, farmers, and policymakers, we create technologies that
                    address real-world challenges while promoting environmental sustainability.
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg mr-4">
                      <Globe className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Global Impact</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Food security is a global challenge that requires global solutions. Our collaborative approach
                    ensures technologies can be adapted and implemented across different regions and contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">How You Can Contribute</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose your path to making an impact on global food security through technology and collaboration.
            </p>
          </div>

          {/* Single Detailed Start Building Card */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-green-500 to-orange-600"></div>
              <CardHeader className="pb-6 p-12">
                <div className="flex items-center gap-8 mb-8">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
                    <Code className="h-12 w-12" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl mb-4">Start Building</CardTitle>
                    <CardDescription className="text-gray-600 text-xl leading-relaxed">
                      Begin your journey with EatoSystems by exploring our documentation, SDKs, and APIs. Get hands-on
                      with our technology and start building solutions that address global food challenges.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-12 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  {/* Left Column - Core Resources */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                      <Globe className="h-6 w-6 mr-3 text-green-600" />
                      Core Resources
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Complete API Access:</span> Full access to all EatoSystems
                          APIs including EatoAI, EatoIndex, EatoVerse, and more
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">SDKs & Libraries:</span> Pre-built software development kits
                          for rapid integration and development
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Documentation Hub:</span> Comprehensive guides, tutorials, and
                          code examples
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Development Environment:</span> Cloud-based development tools
                          and testing environments
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Community & Support */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                      <Users className="h-6 w-6 mr-3 text-green-600" />
                      Community & Support
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Developer Community:</span> Connect with fellow developers,
                          researchers, and agricultural experts
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Technical Mentorship:</span> Get guidance from EatoSystems
                          experts and experienced contributors
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Project Collaboration:</span> Join existing projects or start
                          new initiatives with team support
                        </div>
                      </div>
                      <div className="flex items-start gap-4 text-lg text-gray-700">
                        <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold">Funding Opportunities:</span> Access to grants and resources
                          for promising projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Development Paths */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Choose Your Development Path</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <div className="p-3 rounded-lg bg-green-600 text-white w-fit mb-4">
                        <Code className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Frontend Development</h4>
                      <p className="text-gray-700 mb-4">
                        Build user interfaces and experiences for EatoSystems applications using React, Next.js, and
                        modern web technologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">React</span>
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                      <div className="p-3 rounded-lg bg-orange-600 text-white w-fit mb-4">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Backend & APIs</h4>
                      <p className="text-gray-700 mb-4">
                        Develop robust backend systems, APIs, and data processing pipelines that power EatoSystems
                        infrastructure.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                        <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm">APIs</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-xl p-6 border border-green-200">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-orange-600 text-white w-fit mb-4">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">AI & Data Science</h4>
                      <p className="text-gray-700 mb-4">
                        Work on machine learning models, data analysis, and AI-powered solutions for agricultural
                        challenges.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gradient-to-r from-green-200 to-orange-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                          Python
                        </span>
                        <span className="bg-gradient-to-r from-green-200 to-orange-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                          ML
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                  <Link href="/start-building/register">
                    <Button className="rounded-full bg-gradient-to-r from-green-600 to-orange-600 hover:from-green-700 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <Code className="w-6 h-6 mr-3" />
                      Register Your Skills & Start Building
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </Link>
                  <p className="text-gray-600 mt-4 text-lg">
                    Join our community of developers building the future of food security
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our community in four simple steps and start making an impact on global food security.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-orange-50 p-12">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/eatofoundation-sanctuary.png"
                alt="Flowing stream through natural sanctuary"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-green-600 to-orange-600 flex items-center justify-center mx-auto mb-6 relative shadow-xl">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                      {index < processSteps.length - 1 && (
                        <div className="absolute -right-8 top-1/2 h-1 w-8 bg-gradient-to-r from-green-400 to-orange-400 hidden md:block"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-700 text-lg">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Contribute to the EatoSystems platform and help build the individual systems that will transform global
              food security.
            </p>
          </div>

          {/* Main Featured Project - EatoSystems Website */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-orange-50 p-12">
              <div className="absolute inset-0 opacity-15">
                <Image
                  src="/sustainable-farm-aerial.png"
                  alt="Aerial view of sustainable farm representing the EatoSystems platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-6">
                      <Globe className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-green-800 font-semibold">Core Platform</span>
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-gray-900">EatoSystems Website Development</h3>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      Lead the development of the main EatoSystems platform that serves as the central hub connecting
                      all 12 systems. Build the foundation that enables global collaboration in sustainable agriculture
                      technology.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                        <div className="text-gray-600">Integrated Systems</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
                        <div className="text-gray-600">Global Users</div>
                      </div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Responsive web platform architecture</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>System integration and API management</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>User experience and interface design</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>Global collaboration tools</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Next.js</span>
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">React</span>
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">TypeScript</span>
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                        Tailwind CSS
                      </span>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Code className="w-5 h-5 mr-2" />
                      Start Contributing to Core Platform
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                      <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                        <Image
                          src="/futuristic-agricultural-interface.png"
                          alt="EatoSystems platform interface mockup showing integrated dashboard"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Platform Features You'll Build</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Unified system dashboard</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Cross-system data visualization</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Developer collaboration tools</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Global community features</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All 12 EatoSystems */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Build Individual EatoSystems</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose a specific EatoSystem to develop. Each system has its own website, APIs, and unique functionality
                that contributes to the global food security ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* EatoCultures - SOIL Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatocultures-soil.png"
                    alt="Cultural foundation with diverse food traditions and community knowledge"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">SOIL Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoCultures</h4>
                    <p className="text-white/90 text-sm">Cultural foundation & community knowledge</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build the cultural intelligence platform that captures and preserves food traditions, stories, and
                    community wisdom from around the world.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      Community Platform
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      Content Management
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300"
                  >
                    Build EatoCultures Website
                  </Button>
                </CardContent>
              </Card>

              {/* EatoAgent - SEED Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatoagent-seed.png"
                    alt="AI agents and intelligent systems sprouting like seeds"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">SEED Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoAgent</h4>
                    <p className="text-white/90 text-sm">Modular AI agents for optimization</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Develop intelligent AI agents that help individuals and organizations optimize food decisions with
                    personalized recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">AI/ML</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Agent Framework
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300"
                  >
                    Build EatoAgent System
                  </Button>
                </CardContent>
              </Card>

              {/* EatoIndex - POLLINATION Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatoindex-pollination.png"
                    alt="Financial pollination networks connecting sustainable food systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">POLLINATION Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoIndex</h4>
                    <p className="text-white/90 text-sm">Real-time financial index for food</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Create the financial platform that ranks and funds food based on health, community, and
                    environmental value.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">FinTech</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      Data Analytics
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300"
                  >
                    Build EatoIndex Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoVerse - ROOT Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatoverse-root.png"
                    alt="Digital twin root networks connecting virtual food systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">ROOT Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoVerse</h4>
                    <p className="text-white/90 text-sm">Digital twin of food systems</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build virtual environments where food systems are prototyped and tested before real-world
                    implementation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">VR/AR</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      3D Modeling
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300"
                  >
                    Build EatoVerse Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoBotics - SPROUT Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatobotics-sprout.png"
                    alt="Regenerative robotics sprouting from sustainable soil"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">SPROUT Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoBotics</h4>
                    <p className="text-white/90 text-sm">Regenerative robotics & tools</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Develop robotics and intelligent tools that support soil health, food production, and planetary
                    restoration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">
                      Robotics
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">IoT</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300"
                  >
                    Build EatoBotics System
                  </Button>
                </CardContent>
              </Card>

              {/* EatoTransit - FLOW Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatotransit-flow.png"
                    alt="Clean energy logistics flowing through sustainable supply chains"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">FLOW Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoTransit</h4>
                    <p className="text-white/90 text-sm">Clean energy logistics system</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build clean energy-powered logistics and traceability systems for moving food with integrity across
                    the ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Logistics</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Blockchain</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  >
                    Build EatoTransit Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoAI - MYCELIUM Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatoai-mycelium.png"
                    alt="Decentralized AI networks like mycelium connecting food systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">MYCELIUM Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoAI</h4>
                    <p className="text-white/90 text-sm">Decentralized intelligence layer</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Create the decentralized AI that learns, adapts, and coordinates the global food system in real
                    time.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">AI/ML</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                      Distributed Systems
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300"
                  >
                    Build EatoAI System
                  </Button>
                </CardContent>
              </Card>

              {/* EatoFund - CROP Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatofund-crop.png"
                    alt="Regenerative capital growing like healthy crops"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">CROP Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoFund</h4>
                    <p className="text-white/90 text-sm">Regenerative capital engine</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build the funding platform that finances farms, food systems, and Eato-powered innovation worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">DeFi</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      Investment Platform
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-yellow-600 group-hover:text-white group-hover:border-yellow-600 transition-all duration-300"
                  >
                    Build EatoFund Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoSystem - HARVEST Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatosystem-harvest.png"
                    alt="Full-stack harvest of integrated food systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">HARVEST Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoSystem</h4>
                    <p className="text-white/90 text-sm">Full-stack national rollout</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Develop the comprehensive platform for national-level implementation of all EatoSystems components.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      Systems Integration
                    </span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Enterprise</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300"
                  >
                    Build EatoSystem Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoGov - REGENERATION Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatogov-regeneration.png"
                    alt="Governance systems regenerating sustainable food policy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">REGENERATION Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoGov</h4>
                    <p className="text-white/90 text-sm">Governance & licensing layer</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build governance frameworks that enable governments to adopt EatoSystems as public food
                    infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">GovTech</span>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">
                      Policy Platform
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300"
                  >
                    Build EatoGov Platform
                  </Button>
                </CardContent>
              </Card>

              {/* EatoSecure - CANOPY Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatosecure-canopy.png"
                    alt="Global food security canopy protecting all communities"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">CANOPY Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoSecure</h4>
                    <p className="text-white/90 text-sm">Global food security program</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Create the global program ensuring every individual on earth has secure, sustained access to food.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-medium">
                      Security Systems
                    </span>
                    <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-medium">
                      Global Platform
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 transition-all duration-300"
                  >
                    Build EatoSecure System
                  </Button>
                </CardContent>
              </Card>

              {/* EatoFoundation - SANCTUARY Layer */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src="/images/systems/eatofoundation-sanctuary.png"
                    alt="Sanctuary foundation protecting the mission for future generations"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-600/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/30">
                      <span className="text-white text-sm font-medium">SANCTUARY Layer</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-bold text-white mb-1">EatoFoundation</h4>
                    <p className="text-white/90 text-sm">Global trust & stewardship</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Build the foundation that safeguards the mission and long-term integrity of the Eatosystem for
                    future generations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs font-medium">
                      Foundation Platform
                    </span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-xs font-medium">
                      Governance
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-slate-600 group-hover:text-white group-hover:border-slate-600 transition-all duration-300"
                  >
                    Build EatoFoundation System
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Development Opportunities */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-orange-50 p-12 mb-16">
            <div className="absolute inset-0 opacity-15">
              <Image
                src="/images/global-network-earth.png"
                alt="Global network of interconnected food systems"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Development Opportunities</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Each EatoSystem offers unique development challenges and opportunities to make a real impact on global
                  food security.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">12</div>
                  <div className="text-gray-700 font-medium">Individual Systems</div>
                  <div className="text-gray-500 text-sm mt-1">Each with unique tech stack</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-700 font-medium">Development Areas</div>
                  <div className="text-gray-500 text-sm mt-1">Frontend, backend, AI, blockchain</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                  <div className="text-gray-700 font-medium">Impact Potential</div>
                  <div className="text-gray-500 text-sm mt-1">Global food security transformation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Build the Future of Food?</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Choose the EatoSystem that matches your skills and interests. Whether you're building the core platform
                or developing individual systems, every contribution helps create a more sustainable and secure food
                future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Code className="w-5 h-5 mr-2" />
                  Start with Core Platform
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Choose Your EatoSystem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions about joining our developer community and contributing to EatoSystems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl p-16 text-white overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-5xl font-bold mb-8">Ready to Make an Impact?</h2>
                <p className="text-2xl text-green-100 mb-10 leading-relaxed">
                  The future of global food security depends on collaborative innovation. Join us in building solutions
                  that matter and help transform agriculture through technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/start-building/register">
                    <Button
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                    >
                      <Code className="w-6 h-6 mr-3" />
                      Register Your Skills
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/community-collaboration.png"
                  alt="Natural sanctuary representing the sustainable future we're building together"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  priority={true}
                />
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
