"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CheckCircle2, User, Code, Lightbulb } from "lucide-react"

export default function RegisterSkillsPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-600">
        <Image
          src="/images/eatosecure-forest-canopy.png"
          alt="Forest Canopy - Looking up through sustainable growth and natural innovation"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/30">
                <User className="w-6 h-6 mr-3 text-orange-200" />
                <span className="text-white font-semibold text-lg">Register Your Skills</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
                Join Our
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-300">
                  Community
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90 font-light">
                Share your skills and interests to get matched with the perfect EatoSystems projects for you.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center h-10 w-10 rounded-full ${
                      step >= i
                        ? "bg-white/20 backdrop-blur-sm border border-white/30 text-white"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white/60"
                    }`}
                  >
                    {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                  </div>
                ))}
              </div>
              <div className="w-full bg-white/20 backdrop-blur-sm h-2 rounded-full border border-white/30">
                <div
                  className="bg-gradient-to-r from-yellow-200 to-orange-200 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs sm:text-sm text-white/80">
                <span className="break-words">Personal Info</span>
                <span className="break-words">Skills & Expertise</span>
                <span className="break-words">Interests</span>
                <span className="break-words">Review</span>
              </div>
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6 p-8">
                  <User className="h-6 w-6 text-orange-200 mr-2" />
                  <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
                </div>

                <div className="space-y-4 sm:space-y-6 p-6 sm:p-8">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-3 sm:px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500"
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Short Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500"
                      placeholder="Tell us a bit about yourself and your background"
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={nextStep}
                      className="bg-primary text-white hover:bg-primary/90 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                      <span className="break-words">Next Step</span>
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Skills & Expertise */}
            {step === 2 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6 p-8">
                  <Code className="h-6 w-6 text-orange-200 mr-2" />
                  <h1 className="text-2xl font-bold text-gray-900">Skills & Expertise</h1>
                </div>

                <div className="space-y-6 p-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Professional Background</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Software Development",
                        "Data Science",
                        "Agriculture",
                        "Research",
                        "Design",
                        "Policy",
                        "Business",
                        "Education",
                        "Community Organizing",
                      ].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <input
                            type="checkbox"
                            id={skill.replace(/\s+/g, "-").toLowerCase()}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                          />
                          <label
                            htmlFor={skill.replace(/\s+/g, "-").toLowerCase()}
                            className="ml-2 block text-sm text-gray-700"
                          >
                            {skill}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="technicalSkills" className="block text-sm font-medium text-gray-700 mb-1">
                      Technical Skills
                    </label>
                    <input
                      type="text"
                      id="technicalSkills"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500"
                      placeholder="e.g., Python, React, Data Analysis, GIS, etc."
                    />
                    <p className="text-xs text-gray-600 mt-1">Separate skills with commas</p>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    >
                      <option value="" className="bg-gray-800">
                        Select experience level
                      </option>
                      <option value="0-1" className="bg-gray-800">
                        Less than 1 year
                      </option>
                      <option value="1-3" className="bg-gray-800">
                        1-3 years
                      </option>
                      <option value="3-5" className="bg-gray-800">
                        3-5 years
                      </option>
                      <option value="5-10" className="bg-gray-800">
                        5-10 years
                      </option>
                      <option value="10+" className="bg-gray-800">
                        10+ years
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder-gray-500"
                      placeholder="https://"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      className="bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Interests */}
            {step === 3 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6 p-8">
                  <Lightbulb className="h-6 w-6 text-orange-200 mr-2" />
                  <h1 className="text-2xl font-bold text-gray-900">Interests & Preferences</h1>
                </div>

                <div className="space-y-6 p-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">EatoSystems of Interest</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "EatoMe",
                        "EatoAI",
                        "EatoIndex",
                        "EatoVerse",
                        "EatoBotics",
                        "EatoTransit",
                        "EatoFund",
                        "EatoGov",
                        "EatoSecure",
                        "EatoFoundation",
                        "EatoAgent",
                        "EatoSystem",
                      ].map((system) => (
                        <div key={system} className="flex items-center">
                          <input
                            type="checkbox"
                            id={system.toLowerCase()}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                          />
                          <label htmlFor={system.toLowerCase()} className="ml-2 block text-sm text-gray-700">
                            {system}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Interest</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Sustainable Agriculture",
                        "Food Security",
                        "Supply Chain",
                        "Climate Resilience",
                        "Community Systems",
                        "Urban Farming",
                        "Food Policy",
                        "Nutrition",
                        "Food Waste",
                        "Regenerative Practices",
                        "Food Justice",
                        "Technology Innovation",
                      ].map((area) => (
                        <div key={area} className="flex items-center">
                          <input
                            type="checkbox"
                            id={area.replace(/\s+/g, "-").toLowerCase()}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                          />
                          <label
                            htmlFor={area.replace(/\s+/g, "-").toLowerCase()}
                            className="ml-2 block text-sm text-gray-700"
                          >
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contribution" className="block text-sm font-medium text-gray-700 mb-1">
                      How Would You Like to Contribute?
                    </label>
                    <select
                      id="contribution"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    >
                      <option value="" className="bg-gray-800">
                        Select your preferred contribution method
                      </option>
                      <option value="code" className="bg-gray-800">
                        Contributing Code
                      </option>
                      <option value="research" className="bg-gray-800">
                        Conducting Research
                      </option>
                      <option value="design" className="bg-gray-800">
                        Design & UX
                      </option>
                      <option value="documentation" className="bg-gray-800">
                        Documentation & Content
                      </option>
                      <option value="community" className="bg-gray-800">
                        Community Building
                      </option>
                      <option value="testing" className="bg-gray-800">
                        Testing & Quality Assurance
                      </option>
                      <option value="mentoring" className="bg-gray-800">
                        Mentoring & Education
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
                    >
                      <option value="" className="bg-gray-800">
                        Select your availability
                      </option>
                      <option value="full-time" className="bg-gray-800">
                        Full-time
                      </option>
                      <option value="part-time" className="bg-gray-800">
                        Part-time
                      </option>
                      <option value="weekends" className="bg-gray-800">
                        Weekends only
                      </option>
                      <option value="occasional" className="bg-gray-800">
                        Occasional contributor
                      </option>
                    </select>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      className="bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl">
                <div className="flex items-center mb-6 p-8">
                  <CheckCircle2 className="h-6 w-6 text-orange-200 mr-2" />
                  <h1 className="text-2xl font-bold text-gray-900">Review & Submit</h1>
                </div>

                <div className="space-y-6 p-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold mb-3 text-white">Almost there!</h2>
                    <p className="text-white/90">
                      Please review your information before submitting. Once submitted, you'll receive a confirmation
                      email with next steps to get started with EatoSystems.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Terms & Conditions</label>
                    <div className="flex items-start mt-2">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-700">
                          I agree to the{" "}
                          <a href="#" className="text-orange-200 hover:text-orange-100 hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-orange-200 hover:text-orange-100 hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Communications</label>
                    <div className="flex items-start mt-2">
                      <div className="flex items-center h-5">
                        <input
                          id="newsletter"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="text-gray-700">
                          I would like to receive updates about EatoSystems projects, events, and opportunities
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={prevStep}
                      className="bg-gray-100 border border-gray-300 text-gray-900 hover:bg-gray-200 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button className="bg-gradient-to-r from-yellow-200 to-orange-200 hover:from-yellow-300 hover:to-orange-300 text-gray-900 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold">
                      Submit Registration
                      <CheckCircle2 className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message (Hidden until submission) */}
            {false && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl text-center">
                <div className="h-20 w-20 rounded-full bg-green-100/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-green-300/30">
                  <CheckCircle2 className="h-10 w-10 text-green-300" />
                </div>
                <h1 className="text-2xl font-bold mb-4 text-gray-900">Registration Successful!</h1>
                <p className="text-gray-700 mb-6">
                  Thank you for registering with EatoSystems. We've sent a confirmation email with next steps to get
                  started.
                </p>
                <div className="flex justify-center">
                  <Link href="/eatosystems">
                    <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                      Explore EatoSystems
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
