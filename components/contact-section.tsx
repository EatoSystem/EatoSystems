"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-green-50"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent-orange/5 to-transparent rounded-tr-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-green-50 to-orange-50 border border-green-100 text-primary text-sm font-medium mb-6">
            Contact Us
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-slate-600">
            Have questions about EatoSystems or want to learn more about how you can get involved?
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              <p className="text-slate-600 mb-8">
                Reach out to us using the form or contact information below. We're excited to hear from you and explore
                how we can work together.
              </p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mt-1 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1 break-words">Location</h4>
                    <p className="text-slate-600 break-words">123 Regenerative Way, Sustainable City, SC 12345</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mt-1 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-slate-600">info@eatosystems.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 mt-1 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
              </div>

              {/* World map illustration */}
              {/* <div className="mt-12 opacity-70">
                <svg viewBox="0 0 256 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M128 0C57.308 0 0 28.654 0 64s57.308 64 128 64c70.692 0 128-28.654 128-64S198.692 0 128 0zm-7.98 12.516c-1.98 1.32-3.96 2.64-5.94 4.62-1.98 1.98-3.3 4.62-3.96 7.26-.66 2.64-.66 5.28 0 7.92.66 2.64 1.98 5.28 3.96 7.26 1.98 1.98 4.62 3.3 7.26 3.96 2.64.66 5.28.66 7.92 0 2.64-.66 5.28-1.98 7.26-3.96 1.98-1.98 3.3-4.62 3.96-7.26.66-2.64.66-5.28 0-7.92-.66-2.64-1.98-5.28-3.96-7.26-1.98-1.98-4.62-3.3-7.26-3.96-2.64-.66-5.28-.66-7.92 0-2.64.66-5.28 1.98-7.26 3.96zm-33.66 7.92c-1.32.66-2.64 1.32-3.96 2.64-1.32 1.32-1.98 2.64-2.64 3.96-.66 1.32-.66 2.64 0 3.96.66 1.32 1.32 2.64 2.64 3.96 1.32 1.32 2.64 1.98 3.96 2.64 1.32.66 2.64.66 3.96 0 1.32-.66 2.64-1.32 3.96-2.64 1.32-1.32 1.98-2.64 2.64-3.96.66-1.32.66-2.64 0-3.96-.66-1.32-1.32-2.64-2.64-3.96-1.32-1.32-2.64-1.98-3.96-2.64-1.32-.66-2.64-.66-3.96 0zm67.32 0c-1.32.66-2.64 1.32-3.96 2.64-1.32 1.32-1.98 2.64-2.64 3.96-.66 1.32-.66 2.64 0 3.96.66 1.32 1.32 2.64 2.64 3.96 1.32 1.32 2.64 1.98 3.96 2.64 1.32.66 2.64.66 3.96 0 1.32-.66 2.64-1.32 3.96-2.64 1.32-1.32 1.98-2.64 2.64-3.96.66-1.32.66-2.64 0-3.96-.66-1.32-1.32-2.64-2.64-3.96-1.32-1.32-2.64-1.98-3.96-2.64-1.32-.66-2.64-.66-3.96 0zm-33.66 33.66c-1.98 1.32-3.96 2.64-5.94 4.62-1.98 1.98-3.3 4.62-3.96 7.26-.66 2.64-.66 5.28 0 7.92.66 2.64 1.98 5.28 3.96 7.26 1.98 1.98 4.62 3.3 7.26 3.96 2.64.66 5.28.66 7.92 0 2.64-.66 5.28-1.98 7.26-3.96 1.98-1.98 3.3-4.62 3.96-7.26.66-2.64.66-5.28 0-7.92-.66-2.64-1.98-5.28-3.96-7.26-1.98-1.98-4.62-3.3-7.26-3.96-2.64-.66-5.28-.66-7.92 0-2.64.66-5.28 1.98-7.26 3.96zm-33.66 7.92c-1.32.66-2.64 1.32-3.96 2.64-1.32 1.32-1.98 2.64-2.64 3.96-.66 1.32-.66 2.64 0 3.96.66 1.32 1.32 2.64 2.64 3.96 1.32 1.32 2.64 1.98 3.96 2.64 1.32.66 2.64.66 3.96 0 1.32-.66 2.64-1.32 3.96-2.64 1.32-1.32 1.98-2.64 2.64-3.96.66-1.32.66-2.64 0-3.96-.66-1.32-1.32-2.64-2.64-3.96-1.32-1.32-2.64-1.98-3.96-2.64-1.32-.66-2.64-.66-3.96 0zm67.32 0c-1.32.66-2.64 1.32-3.96 2.64-1.32 1.32-1.98 2.64-2.64 3.96-.66 1.32-.66 2.64 0 3.96.66 1.32 1.32 2.64 2.64 3.96 1.32 1.32 2.64 1.98 3.96 2.64 1.32.66 2.64.66 3.96 0 1.32-.66 2.64-1.32 3.96-2.64 1.32-1.32 1.98-2.64 2.64-3.96.66-1.32.66-2.64 0-3.96-.66-1.32-1.32-2.64-2.64-3.96-1.32-1.32-2.64-1.98-3.96-2.64-1.32-.66-2.64-.66-3.96 0z"
      fill="#2F8F2F"
      fillOpacity=".2"
    />
  </svg>
</div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="premium-card p-8 rounded-3xl shadow-xl bg-white border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-gray-200 focus:border-primary rounded-xl py-4 sm:py-6 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-gray-200 focus:border-primary rounded-xl py-4 sm:py-6 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="border-gray-200 focus:border-primary rounded-xl py-4 sm:py-6 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="border-gray-200 focus:border-primary rounded-xl text-sm sm:text-base"
                    />
                  </div>

                  <div className="transform hover:scale-102 active:scale-98 transition-transform">
                    <Button className="w-full premium-btn bg-primary hover:bg-primary/90 text-white rounded-xl py-4 sm:py-6 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="break-words">Send Message</span>
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
