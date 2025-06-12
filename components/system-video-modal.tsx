"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SystemImageModalProps {
  isOpen: boolean
  onClose: () => void
  system: {
    name: string
    version: string
  }
}

export default function SystemImageModal({ isOpen, onClose, system }: SystemImageModalProps) {
  // System descriptions
  const getSystemDescription = (name: string) => {
    const descriptions: Record<string, string> = {
      EatoMe:
        "EatoMe forms the cultural foundation of our ecosystem. It's a platform where human knowledge, stories, and lived experiences shape the system. By centering human wisdom and cultural practices, EatoMe ensures that technological solutions remain grounded in real human needs and values.",
      EatoAgent:
        "EatoAgent consists of modular AI agents designed to support individuals, enterprises, and communities in optimizing food and process decisions. These agents learn from user interactions and provide personalized recommendations while respecting privacy and autonomy.",
      EatoIndex:
        "EatoIndex is a real-time financial index that ranks and funds food based on health, community, and environmental value. It aligns capital with regeneration by creating transparent metrics that investors, consumers, and producers can use to make informed decisions.",
      EatoVerse:
        "EatoVerse serves as the digital twin of our food future. National systems are prototyped in virtual environments before real-world rollout, allowing for testing, iteration, and community feedback without real-world consequences.",
      EatoBotics:
        "EatoBotics develops regenerative robotics and intelligent tools built to support soil health, food production, and planetary restoration. These technologies work in harmony with natural systems rather than against them.",
      EatoTransit:
        "EatoTransit is a clean energy-powered logistics and traceability system moving food with integrity across the Eatosystem. It ensures transparency in the supply chain while minimizing environmental impact.",
      EatoAI:
        "EatoAI forms the decentralized intelligence layer of our system, learning, adapting, and coordinating the global food system in real time. It processes data from across the ecosystem to identify patterns and opportunities for improvement.",
      EatoFund:
        "EatoFund is the regenerative capital engine that finances farms, food systems, and Eato-powered innovation around the world. It creates new financial models that prioritize long-term sustainability over short-term profits.",
      EatoSystem:
        "EatoSystem represents the full-stack rollout of Eato-powered food systems at the national level, connecting all layers into a living infrastructure. It provides a blueprint for comprehensive implementation.",
      EatoGov:
        "EatoGov is the governance and licensing layer that enables governments to adopt EatoSystems as public food infrastructure. It creates frameworks for policy integration and public-private partnerships.",
      EatoFoundation:
        "EatoFoundation is the global trust that safeguards the mission, model, and long-term integrity of the Eatosystem for future generations. It ensures that the system remains true to its core values over time.",
    }

    return descriptions[name] || "Detailed information about this system is coming soon."
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white rounded-xl shadow-xl">
        <div className="relative">
          <Image
            src={`/placeholder.svg?height=400&width=800&text=${system.name}+${system.version}`}
            alt={system.name}
            width={800}
            height={400}
            className="w-full object-cover"
          />

          <div className="absolute top-4 right-4 z-10">
            <Button
              onClick={onClose}
              variant="outline"
              size="icon"
              className="bg-white/70 hover:bg-white/90 backdrop-blur-sm border-none text-gray-700 rounded-full w-10 h-10"
            >
              <X size={18} />
            </Button>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold text-gray-800">
              {system.name} <span className="text-accent-orange font-mono">{system.version}</span>
            </DialogTitle>
          </DialogHeader>

          <p className="text-slate-600 mb-6 leading-relaxed">{getSystemDescription(system.name)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="text-md font-medium text-gray-700 mb-2">Implementation Timeline</h4>
              <p className="text-slate-600 text-sm">
                {system.name} is currently in{" "}
                {system.version === "v0.1"
                  ? "early development"
                  : system.version === "v10.0"
                    ? "long-term planning"
                    : "active development"}{" "}
                phase. Full implementation is expected within the next{" "}
                {system.version === "v0.1" ? "1-2" : system.version === "v10.0" ? "10-15" : "3-7"} years.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h4 className="text-md font-medium text-gray-700 mb-2">Key Focus Areas</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Sustainable resource management</li>
                <li>• Community engagement</li>
                <li>• Technology integration</li>
                <li>• Policy development</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
