interface DirectSystemImageProps {
  slug: string
  className?: string
}

export function DirectSystemImage({ slug, className = "w-full h-full object-cover" }: DirectSystemImageProps) {
  // Map each system slug to its specific image URL
  const getSystemImageUrl = (systemSlug: string): string => {
    const imageMap: Record<string, string> = {
      eatoglobal: "/images/systems/eatoglobal-soil.png",
      eatocultures: "/images/systems/eatocultures-soil.png",
      eatoagent: "/images/systems/eatoagent-seed.png",
      eatoindex: "/images/systems/eatoindex-pollination.png",
      eatoverse: "/images/systems/eatoverse-root.png",
      eatobotics: "/images/systems/eatobotics-sprout.png",
      eatotransit: "/images/systems/eatotransit-flow.png",
      eatoai: "/images/systems/eatoai-mycelium.png",
      eatofund: "/images/systems/eatofund-crop.png",
      eatosystem: "/images/systems/eatosystem-harvest.png",
      eatogov: "/images/systems/eatogov-regeneration.png",
      eatosecure: "/images/systems/eatosecure-canopy.png",
      eatofoundation: "/images/systems/eatofoundation-sanctuary.png",
    }

    return imageMap[systemSlug] || `/placeholder.svg?height=400&width=400&text=${systemSlug}`
  }

  return (
    <img
      src={getSystemImageUrl(slug) || "/placeholder.svg"}
      alt={`${slug} system`}
      className={className}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement
        // Fallback if image doesn't load
        target.src = `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(slug)}`
      }}
    />
  )
}
