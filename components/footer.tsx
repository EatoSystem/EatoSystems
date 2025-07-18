"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              EatoSystems
            </h3>
            <p className="text-gray-300 text-sm">
              Transforming global food systems through innovative technology and sustainable practices.
            </p>
          </div>

          {/* Systems */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Systems</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/eatoai" className="text-gray-300 hover:text-green-400 transition-colors">
                  EatoAI
                </Link>
              </li>
              <li>
                <Link href="/eatobotics" className="text-gray-300 hover:text-green-400 transition-colors">
                  EatoBotics
                </Link>
              </li>
              <li>
                <Link href="/eatofund" className="text-gray-300 hover:text-green-400 transition-colors">
                  EatoFund
                </Link>
              </li>
              <li>
                <Link href="/eatoglobal" className="text-gray-300 hover:text-green-400 transition-colors">
                  EatoGlobal
                </Link>
              </li>
              <li>
                <Link href="/eatosecure" className="text-gray-300 hover:text-green-400 transition-colors">
                  EatoSecure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/eatoteam" className="text-gray-300 hover:text-green-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-300 hover:text-green-400 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <a
                  href="mailto:info@eatosystems.com"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  info@eatosystems.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 EatoSystems. All rights reserved. Building the future of sustainable food systems.
          </p>
        </div>
      </div>
    </footer>
  )
}
