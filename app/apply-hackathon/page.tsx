"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin, Users, Mail, Phone, MessageCircle, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const systems = [
  {
    name: "EatoGlobal",
    layer: "SOIL",
    city: "Copenhagen",
    date: "September 2025",
    description: "The knowledge, cultural, and collaborative foundation of the EatoSystem",
    gradient: "from-green-600 to-emerald-500",
    participants: "1000+ global contributors",
  },
  {
    name: "EatoAgent",
    layer: "SEED",
    city: "Berlin",
    date: "October 2025",
    description: "Modular AI agents for optimizing food and process decisions",
    gradient: "from-yellow-600 to-amber-500",
    participants: "800+ AI developers",
  },
  {
    name: "EatoIndex",
    layer: "POLLINATION",
    city: "New York",
    date: "November 2025",
    description: "Real-time financial index ranking and funding regenerative food",
    gradient: "from-pink-600 to-rose-500",
    participants: "1200+ fintech developers",
  },
  {
    name: "EatoVerse",
    layer: "ROOT",
    city: "Dubai",
    date: "December 2025",
    description: "Digital twin of our food future for virtual prototyping",
    gradient: "from-purple-600 to-indigo-500",
    participants: "900+ metaverse developers",
  },
  {
    name: "EatoBotics",
    layer: "SPROUT",
    city: "Tokyo",
    date: "January 2026",
    description: "Regenerative robotics supporting soil health and food production",
    gradient: "from-blue-600 to-sky-500",
    participants: "750+ robotics engineers",
  },
  {
    name: "EatoTransit",
    layer: "FLOW",
    city: "Detroit",
    date: "February 2026",
    description: "Clean energy logistics moving food with integrity",
    gradient: "from-teal-600 to-cyan-500",
    participants: "650+ logistics developers",
  },
  {
    name: "EatoAI",
    layer: "MYCELIUM",
    city: "Paris",
    date: "March 2026",
    description: "Decentralized intelligence coordinating global food systems",
    gradient: "from-violet-600 to-purple-500",
    participants: "1100+ AI researchers",
  },
  {
    name: "EatoFund",
    layer: "CROP",
    city: "London",
    date: "April 2026",
    description: "Regenerative capital engine financing sustainable innovation",
    gradient: "from-amber-600 to-orange-500",
    participants: "950+ fintech innovators",
  },
  {
    name: "EatoSystem",
    layer: "HARVEST",
    city: "Amsterdam",
    date: "May 2026",
    description: "Full-stack national food system implementation",
    gradient: "from-orange-600 to-amber-500",
    participants: "1300+ system architects",
  },
  {
    name: "EatoGov",
    layer: "REGENERATION",
    city: "Singapore",
    date: "June 2026",
    description: "Governance layer enabling public food infrastructure",
    gradient: "from-emerald-600 to-green-500",
    participants: "800+ policy developers",
  },
  {
    name: "EatoSecure",
    layer: "CANOPY",
    city: "Rome",
    date: "July 2026",
    description: "Global food security ensuring sustained access to nutrition",
    gradient: "from-red-600 to-rose-500",
    participants: "1000+ security experts",
  },
  {
    name: "EatoFoundation",
    layer: "SANCTUARY",
    city: "Geneva",
    date: "September 2026",
    description: "Global trust safeguarding EatoSystem integrity",
    gradient: "from-indigo-600 to-blue-500",
    participants: "1500+ foundation builders",
  },
]

const skills = [
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "AI/Machine Learning",
  "Blockchain",
  "Data Science",
  "DevOps",
  "UI/UX Design",
  "Product Management",
  "Business Development",
  "Marketing",
  "Agriculture/Food Science",
  "Sustainability",
  "Finance/FinTech",
  "Robotics",
  "IoT",
  "Cybersecurity",
  "Policy/Governance",
]

export default function ApplyHackathonPage() {
  const [selectedSystem, setSelectedSystem] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    github: "",
    linkedin: "",
    portfolio: "",
    experience: "",
    skills: [] as string[],
    motivation: "",
    teamPreference: "",
    previousHackathons: "",
    accommodation: false,
    travelSupport: false,
    dietaryRestrictions: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { selectedSystem, ...formData })
    alert("Application submitted successfully! We'll be in touch soon.")
  }

  const selectedSystemData = systems.find((s) => s.name === selectedSystem)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-orange-600/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-6 py-3 mb-8 border border-green-200">
              <Sparkles className="w-5 h-5 mr-2 text-green-600" />
              <span className="text-gray-800 font-semibold">Join the Global Hackathon Series</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
                Apply for EatoSystems
              </span>
              <br />
              Hackathon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join developers, innovators, and food system experts from around the world to build the future of
              regenerative food systems. Choose your hackathon and help create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Selection */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Choose Your Hackathon</CardTitle>
                  <CardDescription>
                    Select the EatoSystem hackathon you'd like to participate in. Each focuses on a different layer of
                    the regenerative food ecosystem.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {systems.map((system) => (
                      <motion.div
                        key={system.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`cursor-pointer transition-all duration-200 ${
                          selectedSystem === system.name ? "ring-2 ring-orange-500" : ""
                        }`}
                        onClick={() => setSelectedSystem(system.name)}
                      >
                        <Card className={`h-full ${selectedSystem === system.name ? "bg-orange-50" : ""}`}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={`bg-gradient-to-r ${system.gradient} text-white`}>{system.layer}</Badge>
                              {selectedSystem === system.name && <CheckCircle2 className="w-5 h-5 text-orange-500" />}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{system.name}</h3>
                            <div className="space-y-1 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{system.city}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{system.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>{system.participants}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">{system.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Application Form</CardTitle>
                  <CardDescription>
                    Tell us about yourself and why you want to participate in this hackathon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            required
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Professional Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Professional Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <Label htmlFor="github">GitHub Profile</Label>
                          <Input
                            id="github"
                            placeholder="https://github.com/username"
                            value={formData.github}
                            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input
                            id="linkedin"
                            placeholder="https://linkedin.com/in/username"
                            value={formData.linkedin}
                            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="portfolio">Portfolio/Website</Label>
                        <Input
                          id="portfolio"
                          placeholder="https://yourportfolio.com"
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">Experience Level *</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => setFormData({ ...formData, experience: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                            <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                            <SelectItem value="senior">Senior (6+ years)</SelectItem>
                            <SelectItem value="expert">Expert/Lead (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Separator />

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Technical Skills</h3>
                      <p className="text-sm text-gray-600 mb-4">Select all skills that apply to you:</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={formData.skills.includes(skill)}
                              onCheckedChange={() => handleSkillToggle(skill)}
                            />
                            <Label htmlFor={skill} className="text-sm">
                              {skill}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Motivation and Team */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Motivation & Team Preferences</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="motivation">Why do you want to participate in this hackathon? *</Label>
                          <Textarea
                            id="motivation"
                            required
                            rows={4}
                            placeholder="Tell us about your motivation, what you hope to achieve, and how you want to contribute to regenerative food systems..."
                            value={formData.motivation}
                            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="teamPreference">Team Preference</Label>
                          <Select
                            value={formData.teamPreference}
                            onValueChange={(value) => setFormData({ ...formData, teamPreference: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="How would you like to participate?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="solo">I prefer to work solo</SelectItem>
                              <SelectItem value="team">I want to join a team</SelectItem>
                              <SelectItem value="lead">I want to lead a team</SelectItem>
                              <SelectItem value="flexible">I'm flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="previousHackathons">Previous Hackathon Experience</Label>
                          <Textarea
                            id="previousHackathons"
                            rows={3}
                            placeholder="Tell us about any previous hackathons you've participated in..."
                            value={formData.previousHackathons}
                            onChange={(e) => setFormData({ ...formData, previousHackathons: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-gray-800">Additional Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="accommodation"
                            checked={formData.accommodation}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, accommodation: checked as boolean })
                            }
                          />
                          <Label htmlFor="accommodation">I need assistance with accommodation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="travelSupport"
                            checked={formData.travelSupport}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, travelSupport: checked as boolean })
                            }
                          />
                          <Label htmlFor="travelSupport">I need travel support/sponsorship</Label>
                        </div>
                        <div>
                          <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies</Label>
                          <Input
                            id="dietaryRestrictions"
                            placeholder="Any dietary restrictions we should know about?"
                            value={formData.dietaryRestrictions}
                            onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                            <Input
                              id="emergencyContact"
                              value={formData.emergencyContact}
                              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                            <Input
                              id="emergencyPhone"
                              type="tel"
                              value={formData.emergencyPhone}
                              onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Submit Button */}
                    <div className="flex justify-center pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-orange-600 text-white hover:from-green-700 hover:to-orange-700 px-8 py-3 text-lg font-semibold"
                        disabled={!selectedSystem}
                      >
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Selected System Preview */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-8"
            >
              {selectedSystemData ? (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Selected Hackathon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Badge className={`bg-gradient-to-r ${selectedSystemData.gradient} text-white mb-2`}>
                          {selectedSystemData.layer}
                        </Badge>
                        <h3 className="text-2xl font-bold text-gray-800">{selectedSystemData.name}</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{selectedSystemData.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span>{selectedSystemData.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span>{selectedSystemData.participants}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{selectedSystemData.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="mb-6">
                  <CardContent className="p-6 text-center">
                    <div className="text-gray-400 mb-2">
                      <Calendar className="w-12 h-12 mx-auto" />
                    </div>
                    <p className="text-gray-600">Select a hackathon to see details here</p>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <a href="mailto:hackathon@eatosystems.com" className="text-sm text-blue-600 hover:underline">
                        hackathon@eatosystems.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Discord Community</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Join our Discord
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
