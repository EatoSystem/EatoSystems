interface SystemImageProps {
  slug: string
  layer: string
  name: string
  className?: string
  priority?: boolean
}

export function SystemImage({
  slug,
  layer,
  name,
  className = "w-full h-full object-cover",
  priority = false,
}: SystemImageProps) {
  // Convert layer to lowercase and remove any spaces
  const formattedLayer = layer.toLowerCase().replace(/\s+/g, "")

  // Construct the image path
  const imagePath = `/images/systems/${slug.toLowerCase()}-${formattedLayer}.png`
  const placeholderPath = `/placeholder.svg?height=400&width=400&text=${name}`

  return (
    <img
      src={imagePath || "/placeholder.svg"}
      alt={`${name} - ${layer} Layer`}
      className={`${className} transition-opacity duration-300`}
      loading={priority ? "eager" : "lazy"}
      onError={(e) => {
        // Fallback if image doesn't load
        e.currentTarget.src = placeholderPath
      }}
    />
  )
}
