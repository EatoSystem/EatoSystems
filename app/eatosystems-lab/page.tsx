"use client"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, GitBranch, Rocket, Users, Zap, Globe, Database, Shield } from "lucide-react"
import Link from "next/link"

export default function EatoSystemsLabPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-3 mb-6 border border-orange-200">
                <Code className="w-5 h-5 mr-2 text-orange-600" />
                <span className="text-orange-800 font-semibold">Developer Laboratory</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  EatoSystems Lab
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                The comprehensive development environment for building, testing, and deploying full-stack food systems
                at national scale. Connect all layers into living infrastructure.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 px-4 py-2">
                  <span className="font-mono mr-2">v8.0</span>
                  HARVEST Layer
                </Badge>
                <Badge variant="outline" className="bg-amber-50 border-amber-200 text-amber-700 px-4 py-2">
                  Full-Stack Integration
                </Badge>
                <Badge variant="outline" className="bg-yellow-50 border-yellow-200 text-yellow-700 px-4 py-2">
                  National Scale
                </Badge>
              </div>
            </div>

            {/* Quick Start Section */}
            <Card className="mb-12 border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-2xl">
                  <Rocket className="w-6 h-6 mr-3" />
                  Quick Start Guide
                </CardTitle>
                <CardDescription className="text-orange-100">
                  Get started with EatoSystems development in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Installation</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 text-sm">
                        npm install @eatosystems/core
                        <br />
                        npm install @eatosystems/integration
                        <br />
                        npm install @eatosystems/deployment
                      </code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Install the core EatoSystems packages for full-stack development
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Initialize Project</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 text-sm">
                        eatosystems init my-food-system
                        <br />
                        cd my-food-system
                        <br />
                        eatosystems dev
                      </code>
                    </div>
                    <p className="text-gray-600 text-sm">Create and run your first EatoSystems implementation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Database className="w-5 h-5 mr-2" />
                    Systems Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Frameworks and protocols that enable all EatoSystems components to work together as a cohesive
                    whole.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">
                      import {`{ SystemsIntegrator }`} from '@eatosystems/core'
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Globe className="w-5 h-5 mr-2" />
                    Implementation Blueprints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Detailed guides for adapting and implementing EatoSystems in diverse contexts and at different
                    scales.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">eatosystems blueprint generate --region=national</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Users className="w-5 h-5 mr-2" />
                    Cross-Sector Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Platforms and processes that facilitate cooperation between government, business, civil society, and
                    communities.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">{`{ CollaborationHub }`} from '@eatosystems/social'</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Shield className="w-5 h-5 mr-2" />
                    Resilient Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Physical and digital systems designed for durability, adaptability, and regeneration over time.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">eatosystems infrastructure deploy --resilient</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Zap className="w-5 h-5 mr-2" />
                    Real-time Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Advanced monitoring and analytics for tracking system performance and impact across all layers.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">eatosystems monitor --dashboard=national</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <GitBranch className="w-5 h-5 mr-2" />
                    Version Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive versioning system for managing complex food system implementations and updates.
                  </p>
                  <div className="bg-gray-50 rounded p-3">
                    <code className="text-sm text-gray-700">git clone eatosystems/national-template</code>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Phases */}
            <Card className="mb-12 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700">Implementation Phases</CardTitle>
                <CardDescription>Step-by-step approach to deploying EatoSystems at national scale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Pilot Regions</h4>
                      <p className="text-gray-600">
                        Testing full-stack implementation in select regions and communities
                      </p>
                      <div className="bg-gray-50 rounded p-3 mt-2">
                        <code className="text-sm text-gray-700">
                          eatosystems pilot init --region="pilot-region" --scale=community
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">National Adaptation</h4>
                      <p className="text-gray-600">
                        Working with countries to adapt EatoSystems to their specific contexts
                      </p>
                      <div className="bg-gray-50 rounded p-3 mt-2">
                        <code className="text-sm text-gray-700">
                          eatosystems adapt --country="target-country" --customize=true
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Global Network</h4>
                      <p className="text-gray-600">Connecting implemented systems into a global learning network</p>
                      <div className="bg-gray-50 rounded p-3 mt-2">
                        <code className="text-sm text-gray-700">
                          eatosystems network connect --global --share-learnings=true
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Documentation */}
            <Card className="mb-12 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-700">API Documentation</CardTitle>
                <CardDescription>Core APIs for EatoSystems integration and development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Systems Integration API</h4>
                    <div className="bg-gray-900 rounded-lg p-4 text-sm">
                      <pre className="text-green-400">
                        {`// Initialize EatoSystems integration
import { EatoSystems } from '@eatosystems/core'

const systems = new EatoSystems({
  region: 'national',
  layers: ['all'],
  integration: 'full-stack'
})

// Connect all system layers
await systems.connect([
  'eatox', 'eatoagent', 'eatoindex', // Changed 'eatoxyz' to 'eatox'
  'eatoverse', 'eatobotics', 'eatotransit',
  'eatoai', 'eatofund', 'eatogov',
  'eatosecure', 'eatofoundation'
])

// Deploy integrated system
await systems.deploy()`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Monitoring & Analytics</h4>
                    <div className="bg-gray-900 rounded-lg p-4 text-sm">
                      <pre className="text-green-400">
                        {`// Monitor system performance
import { Monitor } from '@eatosystems/analytics'

const monitor = new Monitor({
  scope: 'national',
  metrics: ['impact', 'efficiency', 'resilience']
})

// Get real-time system health
const health = await monitor.getSystemHealth()

// Generate impact reports
const report = await monitor.generateReport({
  period: 'monthly',
  format: 'comprehensive'
})`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources and Links */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Development Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/docs/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">📚 Full Documentation</div>
                      <div className="text-sm text-orange-600">Complete guide to EatoSystems development</div>
                    </Link>
                    <Link
                      href="/examples/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">💡 Code Examples</div>
                      <div className="text-sm text-orange-600">Sample implementations and use cases</div>
                    </Link>
                    <Link
                      href="/tutorials/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">🎓 Tutorials</div>
                      <div className="text-sm text-orange-600">Step-by-step learning materials</div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Community & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/community/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">👥 Developer Community</div>
                      <div className="text-sm text-orange-600">Connect with other EatoSystems developers</div>
                    </Link>
                    <Link
                      href="/support/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">🛠️ Technical Support</div>
                      <div className="text-sm text-orange-600">Get help with implementation challenges</div>
                    </Link>
                    <Link
                      href="/contribute/eatosystems"
                      className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <div className="font-medium text-orange-800">🤝 Contribute</div>
                      <div className="text-sm text-orange-600">Help improve EatoSystems for everyone</div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Build the Future of Food?</h3>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  Join the global movement to create regenerative food systems at national scale. Start building with
                  EatoSystems today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                    Start Building Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
