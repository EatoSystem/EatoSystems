"use client"

import { useEffect, useRef } from "react"

interface NeuralNetworkCanvasProps {
  className?: string
}

export default function NeuralNetworkCanvas({ className = "w-full h-full" }: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      connections: Node[]
      vx: number
      vy: number
      pulsePhase: number
      pulseSpeed: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.connections = []
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.pulsePhase = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.03 + Math.random() * 0.02
      }

      update() {
        // Move node
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
          this.vx *= -1
        }
        if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
          this.vy *= -1
        }

        // Update pulse
        this.pulsePhase += this.pulseSpeed
        if (this.pulsePhase > Math.PI * 2) {
          this.pulsePhase = 0
        }
      }

      draw() {
        if (!ctx) return

        // Draw node with pulse effect
        const pulseScale = 0.2 * Math.sin(this.pulsePhase) + 1
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * pulseScale)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      drawConnections() {
        if (!ctx) return

        this.connections.forEach((node) => {
          // Calculate distance
          const dx = this.x - node.x
          const dy = this.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections within a certain range
          if (distance < 150) {
            // Opacity based on distance
            const opacity = 1 - distance / 150

            // Draw connection
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(node.x, node.y)
            ctx.strokeStyle = `rgba(120, 180, 120, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      }
    }

    // Create nodes
    const nodeCount = Math.floor(canvas.width / 40)
    const nodes: Node[] = []

    // Create green and orange nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = 3 + Math.random() * 5

      // Alternate between green and orange with different intensities
      const color =
        i % 3 === 0
          ? `rgba(236, 88, 0, ${0.5 + Math.random() * 0.5})` // Orange
          : `rgba(22, 163, 74, ${0.5 + Math.random() * 0.5})` // Green

      nodes.push(new Node(x, y, radius, color))
    }

    // Connect nodes
    nodes.forEach((node) => {
      // Connect to 2-5 random nodes
      const connectionCount = 2 + Math.floor(Math.random() * 4)
      for (let i = 0; i < connectionCount; i++) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)]
        if (randomNode !== node && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode)
        }
      }
    })

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      nodes.forEach((node) => {
        node.drawConnections()
      })

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
