import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "EatoSystems - Sustainable Food Systems",
  description: "Building sustainable food systems for a better future",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//blob.v0.dev" />
        <link rel="preconnect" href="https://blob.v0.dev" crossOrigin="anonymous" />
        <link rel="preload" href="/images/eatosystems-logo.png" as="image" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
