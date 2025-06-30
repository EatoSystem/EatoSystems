interface SystemImageProps {
  slug: string
  layer: string
  name: string
  className?: string
  priority?: boolean
  description?: string
}

export function SystemImage({
  slug,
  layer,
  name,
  className = "w-full h-full object-cover",
  priority = false,
  description,
}: SystemImageProps) {
  // Convert layer to lowercase and remove any spaces
  const formattedLayer = layer.toLowerCase().replace(/\s+/g, "")

  // Construct the image path
  const imagePath = `/images/systems/${slug.toLowerCase()}-${formattedLayer}.png`
  const placeholderPath = `/placeholder.svg?height=400&width=400&text=${name}`

  // Enhanced alt text based on system and layer
  const getSystemAltText = (systemName: string, layerName: string) => {
    const altTextMap: Record<string, string> = {
      [`${slug}-${formattedLayer}`]: getDetailedAltText(systemName, layerName),
    }
    return (
      altTextMap[`${slug}-${formattedLayer}`] ||
      `${systemName} system representing the ${layerName} layer of regenerative food technology`
    )
  }

  const getDetailedAltText = (systemName: string, layerName: string) => {
    const systemAltMap: Record<string, string> = {
      "eatoglobal-soil":
        "Rich, dark fertile soil with visible organic matter representing the foundational knowledge and cultural collaboration layer",
      "eatoagent-seed":
        "A sprouting seed breaking through soil, symbolizing AI agents that grow intelligent food system decisions",
      "eatoindex-pollination":
        "Bee pollinating a flower in close-up detail, illustrating the financial index connecting and funding regenerative systems",
      "eatoverse-root": "Complex underground root network system showing interconnected digital twin infrastructure",
      "eatobotics-sprout":
        "Fresh green sprout emerging from rich soil, representing regenerative robotics supporting sustainable agriculture",
      "eatotransit-flow":
        "Clear flowing stream or river representing clean energy logistics moving food with integrity",
      "eatoai-mycelium":
        "Intricate mycelium fungal network underground showing decentralized AI intelligence coordination",
      "eatofund-crop": "Mature, abundant crop field ready for harvest representing regenerative capital financing",
      "eatosystem-harvest":
        "Bountiful harvest scene with diverse crops showing full-stack national food system implementation",
      "eatogov-regeneration":
        "Forest landscape in various stages of regeneration illustrating governance enabling public infrastructure",
      "eatosecure-canopy":
        "Protective forest canopy from below showing global food security ensuring sustained nutrition access",
      "eatofoundation-sanctuary":
        "Pristine natural sanctuary landscape symbolizing trust safeguarding system integrity for future generations",
    }
    return systemAltMap[`${slug}-${formattedLayer}`] || `${systemName} - ${layerName} layer visualization`
  }

  const altText = getSystemAltText(name, layer)

  return (
    <img
      src={imagePath || "/placeholder.svg"}
      alt={altText}
      className={`${className} transition-opacity duration-300`}
      loading={priority ? "eager" : "lazy"}
      onError={(e) => {
        // Fallback if image doesn't load
        const target = e.currentTarget
        target.onerror = null
        target.src = placeholderPath
        target.alt = `Placeholder for ${name} - ${layer} layer system (original image unavailable)`
      }}
      {...(description && { "aria-describedby": `system-img-desc-${slug}` })}
      role="img"
    />
  )
}
