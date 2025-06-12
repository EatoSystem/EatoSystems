import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Partners | EatoSystems",
  description:
    "Discover the world-class culinary leaders and explore partnership opportunities across all 12 EatoSystems.",
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
