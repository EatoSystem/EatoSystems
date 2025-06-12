import type { ReactNode } from "react"

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
  accentColor?: string
}

interface FeatureGridProps {
  features: FeatureProps[]
  columns?: 2 | 3 | 4
  withBackground?: boolean
}

export function Feature({ icon, title, description, accentColor = "bg-green-100 text-green-600" }: FeatureProps) {
  const [bgColor, textColor] = accentColor.split(" ")

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group hover:scale-105">
      <div
        className={`absolute top-0 right-0 w-24 h-24 ${bgColor} opacity-20 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right`}
      ></div>

      <div
        className={`w-12 h-12 ${bgColor} ${textColor} rounded-lg flex items-center justify-center mb-4 relative z-10 shadow-md`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 relative z-10 text-gray-800">{title}</h3>
      <p className="text-gray-600 relative z-10 leading-relaxed">{description}</p>
    </div>
  )
}

export default function FeatureGrid({ features, columns = 3, withBackground = false }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div
      className={`${withBackground ? "bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-inner" : ""} mb-16`}
    >
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  )
}
