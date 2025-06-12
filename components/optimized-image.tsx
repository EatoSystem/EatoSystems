"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition?: string
  quality?: number
  loading?: "lazy" | "eager"
  placeholder?: "blur" | "empty"
  sizes?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  objectFit = "cover",
  objectPosition = "center",
  quality = 75,
  loading = "lazy",
  placeholder = "empty",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" style={{ width, height }} />
      )}
      <Image
        src={hasError ? "/placeholder.svg" : src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{ objectFit: objectFit, objectPosition: objectPosition }}
        quality={quality}
        loading={loading}
        placeholder={placeholder}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

export default OptimizedImage
