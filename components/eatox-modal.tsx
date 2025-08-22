"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Bot, Send as Seed } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EatoXModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EatoXModal({ isOpen, onClose }: EatoXModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                <Image
                  src="/images/systems/eatoagent-seed.png"
                  alt="EatoAgent AI Orchestration"
                  fill
                  className="object-cover opacity-30"
                  priority
                  sizes="100vw"
                />
              </div>

              <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-8 sm:mb-10 md:mb-12 border border-white/40">
                    <Seed className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 text-blue-100" />
                    <span className="text-gray-50 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                      SEED Layer • Agent System
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-relaxed tracking-tight">
                    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-2 px-4">
                      <Bot className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-200 flex-shrink-0 drop-shadow-lg" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-200 whitespace-nowrap py-2 leading-normal drop-shadow-2xl">
                        EatoAgent
                      </span>
                    </div>
                    <span className="block mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-50 font-light leading-relaxed drop-shadow-2xl">
                      AI Agent Orchestration
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed text-gray-50 font-light drop-shadow-2xl">
                    Intelligent AI agents that automate, optimize, and orchestrate every aspect of the food system —
                    from seed to plate.
                  </p>

                  {/* Development Notice */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-50 font-medium mb-4 drop-shadow-lg">
                      EatoAgent is currently in development as part of the EatoSystem
                    </p>
                    <p className="text-base text-gray-100 drop-shadow-lg">
                      This specialized AI orchestration platform is being developed as part of the comprehensive
                      EatoSystem. Click continue to explore the main EatoSystem site while EatoAgent is being finalized.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 md:mb-20">
                    <Button
                      size="lg"
                      onClick={onClose}
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full w-full sm:w-auto"
                    >
                      Continue to EatoSystem
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
