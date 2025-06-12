"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  organization: string
  quote: string
  videoThumbnail: string
  transcript: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Organic Farmer",
    organization: "Sunshine Farms",
    quote: "EatoSystems has transformed how we think about sustainable agriculture.",
    videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Farmer+Testimonial",
    transcript:
      "When we first implemented EatoBotics on our farm, we saw a 40% reduction in water usage while increasing yields by 25%. The soil health metrics have improved dramatically, and we're seeing biodiversity return to our land. This isn't just about growing food—it's about regenerating ecosystems.",
  },
  {
    id: 2,
    name: "Dr. James Chen",
    role: "Food Systems Researcher",
    organization: "Global Sustainability Institute",
    quote: "The data-driven approach of EatoIndex is revolutionizing how we value food.",
    videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Researcher+Testimonial",
    transcript:
      "What makes EatoSystems unique is how it integrates cultural wisdom with cutting-edge technology. The EatoIndex has given us a framework to properly value regenerative practices, creating financial incentives that align with ecological health. We're seeing capital flow toward truly sustainable enterprises for the first time.",
  },
  {
    id: 3,
    name: "Minister Amara Okafor",
    role: "Secretary of Agriculture",
    organization: "Republic of Ghana",
    quote: "Implementing EatoSystems nationally has strengthened our food sovereignty.",
    videoThumbnail: "/placeholder.svg?height=720&width=1280&text=Government+Testimonial",
    transcript:
      "Working with EatoSystems to develop our national food strategy has been transformative. The EatoVerse simulations allowed us to test policies before implementation, saving resources and improving outcomes. Our farmers are more prosperous, our citizens have better access to nutritious food, and our environment is healing.",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent-orange/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 display-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Voices of Change
          </h2>
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Hear from the farmers, researchers, and leaders transforming our global food system.
          </p>
        </div>

        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="relative">
            {/* Video testimonial */}
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="video-testimonial aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={currentTestimonial.videoThumbnail || "/placeholder.svg"}
                alt={`${currentTestimonial.name} testimonial`}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-accent-orange flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Transcript overlay */}
              <div className="video-transcript">
                <p className="text-lg font-medium mb-2 break-words">{currentTestimonial.quote}</p>
                <p className="text-sm opacity-90 break-words">{currentTestimonial.transcript}</p>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Testimonial info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">{currentTestimonial.name}</h3>
            <p className="text-accent-orange font-medium break-words">{currentTestimonial.role}</p>
            <p className="text-slate-600 break-words">{currentTestimonial.organization}</p>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-accent-orange w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
