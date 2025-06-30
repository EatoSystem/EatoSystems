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
  description?: string
  ariaLabel?: string
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
  description,
  ariaLabel,
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

  // Enhanced alt text for accessibility
  const enhancedAlt = alt || `Image with dimensions ${width}x${height}`
  const fallbackAlt = `Placeholder image - ${alt || "content not available"}`

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      role="img"
      aria-label={ariaLabel || enhancedAlt}
      {...(description && { "aria-describedby": `img-desc-${src.replace(/[^a-zA-Z0-9]/g, "")}` })}
    >
      {/* Loading skeleton with accessibility */}
      {isLoading && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"
          style={{ width, height }}
          role="status"
          aria-label="Image loading"
        />
      )}

      {/* Main image */}
      <Image
        src={hasError ? "/placeholder.svg" : src || "/placeholder.svg"}
        alt={hasError ? fallbackAlt : enhancedAlt}
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
        {...(hasError && { "aria-describedby": "image-error-message" })}
      />

      {/* Hidden description for screen readers */}
      {description && (
        <span id={`img-desc-${src.replace(/[^a-zA-Z0-9]/g, "")}`} className="sr-only">
          {description}
        </span>
      )}

      {/* Error message for screen readers */}
      {hasError && (
        <span id="image-error-message" className="sr-only">
          Image failed to load. Showing placeholder instead.
        </span>
      )}
    </div>
  )
}

export default OptimizedImage
