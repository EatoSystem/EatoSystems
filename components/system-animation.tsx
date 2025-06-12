"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface SystemAnimationProps {
  children: React.ReactNode
  delay?: number
  className?: string
  threshold?: number
}

export function FadeIn({ children, delay = 0, className = "", threshold = 0.1 }: SystemAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "50px", amount: threshold })
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, delay = 0, className = "", threshold = 0.1 }: SystemAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "50px", amount: threshold })
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className = "", threshold = 0.1 }: SystemAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "50px", amount: threshold })
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
