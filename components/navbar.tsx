"use client"

import { useState, useEffect, useRef, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, X, Code } from "lucide-react"
import { systemsData } from "@/lib/systems-data"

// Memoize the navbar component to prevent unnecessary re-renders
export default memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false)
  const [labsDropdownOpen, setLabsDropdownOpen] = useState(false)
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false)
  const [systemsDropdownRef] = useState(useRef<HTMLDivElement>(null))
  const [labsDropdownRef] = useState(useRef<HTMLDivElement>(null))
  const [supportDropdownRef] = useState(useRef<HTMLDivElement>(null))

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Don't hide navbar at the very top of the page
      if (currentScrollY <= 10) {
        setScrolled(false)
        lastScrollY = currentScrollY
        return
      }

      // Only update state if we're not already processing a scroll event
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide navbar only when scrolling down and not at the top
          // Show navbar when scrolling up
          if (currentScrollY > lastScrollY) {
            // Scrolling down - hide navbar
            setScrolled(true)
          } else {
            // Scrolling up - show navbar
            setScrolled(false)
          }

          lastScrollY = currentScrollY
          ticking = false
        })

        ticking = true
      }

      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Set initial state
    setScrolled(window.scrollY > 10)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (systemsDropdownRef.current && !systemsDropdownRef.current.contains(event.target as Node)) {
        setSystemsDropdownOpen(false)
      }
      if (labsDropdownRef.current && !labsDropdownRef.current.contains(event.target as Node)) {
        setLabsDropdownOpen(false)
      }
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(event.target as Node)) {
        setSupportDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    // Add or remove class to body when mobile menu is open
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open")
      document.body.style.overflow = "hidden"
    } else {
      document.body.classList.remove("mobile-menu-open")
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.classList.remove("mobile-menu-open")
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const systems = Object.entries(systemsData).map(([slug, system]) => ({
    ...system,
    slug,
  }))

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        } py-3 md:py-4 premium-shadow-sm bg-white`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <div className="h-8 sm:h-10 flex items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent break-words">
                  EatoSystems
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Roadmap Link */}
              <Link
                href="/roadmap"
                className="text-sm lg:text-base text-gray-800 hover:text-primary transition-colors font-medium transform hover:scale-105 active:scale-95 transition-transform break-words"
                onClick={() => window.scrollTo(0, 0)}
              >
                Roadmap
              </Link>

              {/* Systems Dropdown */}
              <div className="relative" ref={systemsDropdownRef}>
                <button
                  onClick={() => {
                    setSystemsDropdownOpen(!systemsDropdownOpen)
                    setLabsDropdownOpen(false)
                    setSupportDropdownOpen(false)
                  }}
                  className="flex items-center text-sm lg:text-base text-gray-800 hover:text-primary transition-colors font-medium transform hover:scale-105 active:scale-95 transition-transform break-words"
                  aria-expanded={systemsDropdownOpen}
                  aria-haspopup="true"
                >
                  Systems
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${systemsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {systemsDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 rounded-xl premium-shadow-sm z-50 overflow-hidden transition-all duration-200 ease-out max-h-96 overflow-y-auto bg-white"
                    style={{
                      opacity: systemsDropdownOpen ? 1 : 0,
                      transform: systemsDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                    }}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/eatosystems"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium break-words"
                        onClick={() => {
                          setSystemsDropdownOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        All Systems
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      {systems.map((system) => (
                        <Link
                          key={system.slug}
                          href={`/${system.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 break-words"
                          onClick={() => {
                            setSystemsDropdownOpen(false)
                            window.scrollTo(0, 0)
                          }}
                        >
                          <span className="font-mono text-accent-orange mr-2">{system.version}</span>
                          {system.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Labs Dropdown */}
              <div className="relative" ref={labsDropdownRef}>
                <button
                  onClick={() => {
                    setLabsDropdownOpen(!labsDropdownOpen)
                    setSystemsDropdownOpen(false)
                    setSupportDropdownOpen(false)
                  }}
                  className="flex items-center text-sm lg:text-base text-gray-800 hover:text-primary transition-colors font-medium transform hover:scale-105 active:scale-95 transition-transform break-words"
                  aria-expanded={labsDropdownOpen}
                  aria-haspopup="true"
                >
                  Labs
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${labsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {labsDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 rounded-xl premium-shadow-sm z-50 overflow-hidden transition-all duration-200 ease-out max-h-96 overflow-y-auto bg-white"
                    style={{
                      opacity: labsDropdownOpen ? 1 : 0,
                      transform: labsDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                    }}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {systems.map((system) => (
                        <Link
                          key={`${system.slug}-lab`}
                          href={`/${system.slug.toLowerCase()}-lab`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 break-words"
                          onClick={() => {
                            setLabsDropdownOpen(false)
                            window.scrollTo(0, 0)
                          }}
                        >
                          <div className="flex items-center">
                            <Code className="h-3 w-3 mr-2 text-accent-orange flex-shrink-0" />
                            <span>{system.name} Lab</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Support Dropdown */}
              <div className="relative" ref={supportDropdownRef}>
                <button
                  onClick={() => {
                    setSupportDropdownOpen(!supportDropdownOpen)
                    setSystemsDropdownOpen(false)
                    setLabsDropdownOpen(false)
                  }}
                  className="flex items-center text-sm lg:text-base text-gray-800 hover:text-primary transition-colors font-medium transform hover:scale-105 active:scale-95 transition-transform break-words"
                  aria-expanded={supportDropdownOpen}
                  aria-haspopup="true"
                >
                  Support
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${supportDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {supportDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 rounded-xl premium-shadow-sm z-50 overflow-hidden transition-all duration-200 ease-out max-h-96 overflow-y-auto bg-white"
                    style={{
                      opacity: supportDropdownOpen ? 1 : 0,
                      transform: supportDropdownOpen ? "translateY(0)" : "translateY(-10px)",
                    }}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/support"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium break-words"
                        onClick={() => {
                          setSupportDropdownOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        Support
                      </Link>
                      <Link
                        href="/partnerships/corporate"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 break-words"
                        onClick={() => {
                          setSupportDropdownOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        Corporate
                      </Link>
                      <Link
                        href="/partnerships/philanthropic"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 break-words"
                        onClick={() => {
                          setSupportDropdownOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        Philanthropic
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="transform hover:scale-105 active:scale-95 transition-transform">
                <Link href="/start-building">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 lg:px-6 py-2 text-sm lg:text-base transition-all duration-300 font-medium">
                    Start Building
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-orange-500 z-[60] transform hover:scale-110 active:scale-90 transition-transform p-2 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-orange-500" />
              ) : (
                <Menu size={24} className="text-orange-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[55] transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[56] shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold gradient-text">Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Mobile Roadmap Link */}
              <Link
                href="/roadmap"
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100 break-words"
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
              >
                Roadmap
              </Link>

              {/* Mobile Systems Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setSystemsDropdownOpen(!systemsDropdownOpen)
                    setLabsDropdownOpen(false)
                    setSupportDropdownOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100"
                  aria-expanded={systemsDropdownOpen}
                  aria-haspopup="true"
                >
                  Systems
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${systemsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    systemsDropdownOpen ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-50 rounded-lg p-2 space-y-1">
                    <Link
                      href="/eatosystems"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded font-medium break-words"
                      onClick={() => {
                        setSystemsDropdownOpen(false)
                        setMobileMenuOpen(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      All Systems
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    {systems.map((system) => (
                      <Link
                        key={system.slug}
                        href={`/${system.slug}`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded break-words"
                        onClick={() => {
                          setSystemsDropdownOpen(false)
                          setMobileMenuOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        <span className="font-mono text-accent-orange mr-2 text-xs">{system.version}</span>
                        {system.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Labs Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setLabsDropdownOpen(!labsDropdownOpen)
                    setSystemsDropdownOpen(false)
                    setSupportDropdownOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100"
                  aria-expanded={labsDropdownOpen}
                  aria-haspopup="true"
                >
                  Labs
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${labsDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    labsDropdownOpen ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-50 rounded-lg p-2 space-y-1">
                    {systems.map((system) => (
                      <Link
                        key={`${system.slug}-lab-mobile`}
                        href={`/${system.slug.toLowerCase()}-lab`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded break-words"
                        onClick={() => {
                          setLabsDropdownOpen(false)
                          setMobileMenuOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        <div className="flex items-center">
                          <Code className="h-3 w-3 mr-2 text-accent-orange flex-shrink-0" />
                          <span>{system.name} Lab</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Support Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setSupportDropdownOpen(!supportDropdownOpen)
                    setSystemsDropdownOpen(false)
                    setLabsDropdownOpen(false)
                  }}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100"
                  aria-expanded={supportDropdownOpen}
                  aria-haspopup="true"
                >
                  Support
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${supportDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    supportDropdownOpen ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-50 rounded-lg p-2 space-y-1">
                    <Link
                      href="/support"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded font-medium break-words"
                      onClick={() => {
                        setSupportDropdownOpen(false)
                        setMobileMenuOpen(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      Support
                    </Link>
                    <Link
                      href="/partnerships/corporate"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded break-words"
                      onClick={() => {
                        setSupportDropdownOpen(false)
                        setMobileMenuOpen(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      Corporate
                    </Link>
                    <Link
                      href="/partnerships/philanthropic"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-white hover:text-primary transition-colors rounded break-words"
                      onClick={() => {
                        setSupportDropdownOpen(false)
                        setMobileMenuOpen(false)
                        window.scrollTo(0, 0)
                      }}
                    >
                      Philanthropic
                    </Link>
                  </div>
                </div>
              </div>

              {/* Direct Links */}
              <Link
                href="/about"
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100 break-words"
                onClick={() => {
                  setMobileMenuOpen(false)
                }}
              >
                About
              </Link>

              <Link
                href="#contact"
                className="block text-gray-800 hover:text-primary transition-colors font-medium py-3 text-base border-b border-gray-100 break-words"
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <div className="pt-6">
                <Link href="/start-building" className="block">
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-base font-medium transition-colors duration-300"
                    onClick={() => {
                      setMobileMenuOpen(false)
                    }}
                  >
                    Start Building
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
})
