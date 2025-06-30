import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Users, Building } from "lucide-react"
import { notFound } from "next/navigation"

// Define the system data
const systemsData = {
  eatome: {
    number: "v0.1",
    name: "EatoMe",
    tagline: "Personal Action & Daily Eating",
    launchDate: "September 2025",
    quarter: "Q3 2025",
    description:
      "EatoMe focuses on personal action and daily eating choices, empowering individuals to make conscious decisions about their food. Led by René Redzepi through Noma Projects, this system explores how individual choices can collectively transform our food systems.",
    tags: ["Personal Nutrition", "Daily Choices", "Sustainable Eating", "Food Education"],
    color: "green",
    image: "/images/systems/eatome-soil.png",
    chef: {
      name: "René Redzepi",
      organization: "Noma Projects",
      image: "/rene-redzepi-portrait.png",
      bio: "René Redzepi is the chef and co-owner of Noma in Copenhagen, Denmark, recognized as one of the world's most influential restaurants. Through Noma Projects, he explores new frontiers in food, focusing on sustainability, seasonality, and locality.",
      contribution:
        "As the primary culinary partner for EatoMe, René brings his innovative approach to food and deep understanding of ingredients to help individuals make better daily food choices. His work has revolutionized how we think about food origins and preparation.",
      initiatives: [
        "Developing sustainable daily eating practices",
        "Creating educational resources on food origins",
        "Exploring fermentation and preservation techniques",
        "Promoting seasonal and local ingredient sourcing",
      ],
      website: "https://noma.dk/projects",
    },
  },
  eatoagent: {
    number: "v1.0",
    name: "EatoAgent",
    tagline: "AI & System Optimization",
    launchDate: "December 2025",
    quarter: "Q4 2025",
    description:
      "EatoAgent leverages artificial intelligence to optimize food systems, creating more efficient and sustainable processes. Led by Gaggan Anand, this system explores how technology can enhance every aspect of our food ecosystem.",
    tags: ["Artificial Intelligence", "System Optimization", "Food Technology", "Data Analytics"],
    color: "yellow",
    image: "/images/systems/eatoagent-seed.png",
    chef: {
      name: "Gaggan Anand",
      organization: "Gaggan",
      image: "/gaggan-anand-portrait.png",
      bio: "Gaggan Anand is a revolutionary chef known for his progressive Indian cuisine and innovative culinary techniques. His restaurant in Bangkok has been recognized as one of Asia's best, known for pushing boundaries and redefining food experiences.",
      contribution:
        "As the primary culinary partner for EatoAgent, Gaggan brings his forward-thinking approach and technological curiosity to the development of AI-driven food systems. His work combines traditional flavors with cutting-edge techniques.",
      initiatives: [
        "Developing AI-powered recipe optimization",
        "Creating intelligent food waste reduction systems",
        "Exploring data-driven culinary innovation",
        "Implementing smart supply chain optimization",
      ],
      website: "https://www.gaggananand.com",
    },
  },
  eatoindex: {
    number: "v2.0",
    name: "EatoIndex",
    tagline: "Global Food Quality Ranking",
    launchDate: "March 2026",
    quarter: "Q1 2026",
    description:
      "EatoIndex establishes global standards for food quality, creating transparent ranking systems that promote excellence and sustainability. Led by Virgilio Martínez through Central and Mater Iniciativa, this system connects biodiversity with culinary innovation.",
    tags: ["Food Quality", "Global Standards", "Transparency", "Certification"],
    color: "pink",
    image: "/images/systems/eatoindex-pollination.png",
    chef: {
      name: "Virgilio Martínez",
      organization: "Central / Mater Iniciativa",
      image: "/chef-virgilio-martinez-portrait.png",
      bio: "Virgilio Martínez is a Peruvian chef and restaurateur known for his work at Central in Lima, consistently ranked among the world's best restaurants. Through Mater Iniciativa, he researches and documents Peru's indigenous ingredients and traditional food systems.",
      contribution:
        "As the primary culinary partner for EatoIndex, Virgilio brings his deep understanding of biodiversity and ecosystems to the development of global food quality standards. His work bridges traditional knowledge with modern culinary innovation.",
      initiatives: [
        "Developing ecosystem-based quality metrics",
        "Creating transparent food origin tracking systems",
        "Documenting indigenous food knowledge and practices",
        "Establishing biodiversity preservation standards",
      ],
      website: "https://centralrestaurante.com.pe/en/mater-iniciativa/",
    },
  },
  eatoverse: {
    number: "v3.0",
    name: "EatoVerse",
    tagline: "Virtual Food System Training",
    launchDate: "June 2026",
    quarter: "Q2 2026",
    description:
      "EatoVerse creates immersive virtual environments for food system training and education. Led by Dan Barber through Blue Hill and Stone Barns Center, this system bridges the gap between theory and practice in sustainable agriculture.",
    tags: ["Virtual Training", "Digital Education", "Simulation", "Knowledge Transfer"],
    color: "purple",
    image: "/images/systems/eatoverse-root.png",
    chef: {
      name: "Dan Barber",
      organization: "Blue Hill / Stone Barns",
      image: "/dan-barber-portrait.png",
      bio: "Dan Barber is a chef, author, and co-owner of Blue Hill restaurants in New York. He is also the co-founder of Stone Barns Center for Food and Agriculture, a nonprofit farm and education center that advances sustainable agriculture through research and training.",
      contribution:
        "As the primary culinary partner for EatoVerse, Dan brings his deep understanding of agricultural systems and farm-to-table practices to the development of virtual training environments. His work connects farming, cooking, and education in innovative ways.",
      initiatives: [
        "Creating virtual farm-to-table training simulations",
        "Developing digital agricultural education resources",
        "Building virtual seed-to-plate knowledge systems",
        "Implementing immersive sustainable farming simulations",
      ],
      website: "https://www.stonebarnscenter.org/",
    },
  },
  eatobotics: {
    number: "v4.0",
    name: "EatoBotics",
    tagline: "Robotics & Automation",
    launchDate: "September 2026",
    quarter: "Q3 2026",
    description:
      "EatoBotics develops robotic and automated solutions for sustainable food production and processing. Led by Andoni Luis Aduriz through Mugaritz, this system explores how technology can enhance precision, efficiency, and creativity in food systems.",
    tags: ["Robotics", "Automation", "Precision Agriculture", "Food Technology"],
    color: "blue",
    image: "/images/systems/eatobotics-sprout.png",
    chef: {
      name: "Andoni Luis Aduriz",
      organization: "Mugaritz",
      image: "/andoni-luis-aduriz-portrait.png",
      bio: "Andoni Luis Aduriz is a Spanish chef known for his innovative approach at Mugaritz, a restaurant that blends culinary art with scientific research. His work is characterized by creativity, precision, and a deep respect for nature and technology.",
      contribution:
        "As the primary culinary partner for EatoBotics, Andoni brings his experimental mindset and technical expertise to the development of robotic and automated food systems. His work explores the intersection of culinary tradition and technological innovation.",
      initiatives: [
        "Developing precision farming robotics",
        "Creating automated food processing systems",
        "Exploring robotic culinary techniques",
        "Implementing smart harvesting technologies",
      ],
      website: "https://www.mugaritz.com/",
    },
  },
  eatotransit: {
    number: "v5.0",
    name: "EatoTransit",
    tagline: "Sustainable Food Logistics",
    launchDate: "December 2026",
    quarter: "Q4 2026",
    description:
      "EatoTransit focuses on sustainable food logistics and transportation systems. Led by Bertrand Grébaut of Septime, this system develops efficient, low-impact methods for moving food from farm to table while minimizing waste and environmental impact.",
    tags: ["Logistics", "Supply Chain", "Transportation", "Distribution"],
    color: "teal",
    image: "/images/systems/eatotransit-flow.png",
    chef: {
      name: "Bertrand Grébaut",
      organization: "Septime",
      image: "/bertrand-grebaut-portrait.png",
      bio: "Bertrand Grébaut is a French chef and owner of Septime in Paris, known for its sustainable approach to fine dining. His restaurant emphasizes local sourcing, minimal waste, and ethical supply chains while maintaining exceptional culinary standards.",
      contribution:
        "As the primary culinary partner for EatoTransit, Bertrand brings his expertise in sustainable sourcing and local food networks to the development of efficient food logistics systems. His work demonstrates how restaurants can operate with minimal environmental impact.",
      initiatives: [
        "Developing low-carbon food transportation networks",
        "Creating efficient urban food distribution systems",
        "Optimizing local food supply chains",
        "Implementing sustainable packaging solutions",
      ],
      website: "https://www.septime-charonne.fr/",
    },
  },
  eatoai: {
    number: "v6.0",
    name: "EatoAI",
    tagline: "Artificial Intelligence & Food Innovation",
    launchDate: "March 2027",
    quarter: "Q1 2027",
    description:
      "EatoAI explores the intersection of artificial intelligence and culinary innovation, led by Chef Ben Shewry of Attica. This system pioneers new approaches to flavor prediction, recipe development, and sustainable food practices through advanced AI technologies.",
    tags: ["AI Innovation", "Food Science", "Culinary Research", "Flavor Prediction"],
    color: "purple",
    image: "/images/systems/eatoai-mycelium.png",
    chef: {
      name: "Ben Shewry",
      organization: "Attica",
      image: "/ben-shewry-portrait.png",
      bio: "Ben Shewry is the acclaimed chef and owner of Attica, one of Australia's most celebrated restaurants. Known for his innovative approach to native ingredients and sustainable practices, Shewry has pioneered a unique culinary philosophy that bridges indigenous knowledge with modern techniques.",
      contribution:
        "As the primary culinary partner for EatoAI, Ben brings his deep understanding of flavor combinations, ingredient relationships, and sustainable food systems to inform AI-driven culinary innovation. His work at Attica has redefined how we understand Australian cuisine and indigenous ingredients.",
      initiatives: [
        "AI-driven flavor pairing and recipe development",
        "Machine learning for sustainable ingredient substitution",
        "Predictive modeling for seasonal menu planning",
        "AI systems for indigenous ingredient preservation and documentation",
      ],
      website: "https://attica.com.au",
    },
  },
  eatofund: {
    number: "v7.0",
    name: "EatoFund",
    tagline: "Sustainable Food Investment & Financing",
    launchDate: "June 2027",
    quarter: "Q2 2027",
    description:
      "EatoFund focuses on sustainable food investment and financing, led by Chef Enrique Olvera of Pujol. This system creates innovative financial models to support sustainable food businesses, culinary entrepreneurs, and community food initiatives.",
    tags: ["Impact Investing", "Food Startups", "Sustainable Finance", "Culinary Ventures"],
    color: "green",
    image: "/images/systems/eatofund-crop.png",
    chef: {
      name: "Enrique Olvera",
      organization: "Pujol",
      image: "/enrique-olvera-portrait.png",
      bio: "Enrique Olvera is the renowned chef and owner of Pujol in Mexico City, consistently ranked among the world's best restaurants. He is celebrated for his innovative approach to Mexican cuisine, combining traditional techniques with modern creativity while supporting local producers and sustainable practices.",
      contribution:
        "As the primary culinary partner for EatoFund, Enrique brings his entrepreneurial vision and commitment to supporting local food systems. His work has created economic opportunities throughout Mexico's food supply chain while preserving culinary heritage.",
      initiatives: [
        "Micro-financing for small-scale food producers",
        "Investment fund for sustainable food startups",
        "Culinary incubator for indigenous food entrepreneurs",
        "Financial literacy programs for food business owners",
      ],
      website: "https://pujol.com.mx",
    },
  },
  eatosystem: {
    number: "v8.0",
    name: "EatoSystem",
    tagline: "Food Waste Reduction & Circular Economy",
    launchDate: "September 2027",
    quarter: "Q3 2027",
    description:
      "EatoSystem focuses on food waste reduction and circular economy principles, led by Chef Massimo Bottura through Food for Soul. This system pioneers innovative approaches to food recovery, waste reduction, and creating value from underutilized ingredients.",
    tags: ["Food Recovery", "Circular Economy", "Waste Reduction", "Upcycled Food"],
    color: "amber",
    image: "/images/systems/eatosystem-harvest.png",
    chef: {
      name: "Massimo Bottura",
      organization: "Food for Soul",
      image: "/massimo-bottura-portrait.png",
      bio: "Massimo Bottura is the visionary chef behind Osteria Francescana, a three-Michelin-star restaurant in Modena, Italy. He is also the founder of Food for Soul, a non-profit organization that fights food waste through social inclusion and community empowerment.",
      contribution:
        "As the primary culinary partner for EatoSystem, Massimo brings his revolutionary approach to food waste and circular economy principles. His Refettorio projects around the world have transformed surplus ingredients into delicious meals for vulnerable communities while changing perceptions about food waste.",
      initiatives: [
        "Global network of community kitchens using surplus food",
        "Culinary training programs focused on full ingredient utilization",
        "Food recovery systems connecting surplus with need",
        "Advocacy for policy changes to reduce food waste",
      ],
      website: "https://www.foodforsoul.it",
    },
  },
  eatogov: {
    number: "v9.0",
    name: "EatoGov",
    tagline: "Food Policy & Governance",
    launchDate: "December 2027",
    quarter: "Q4 2027",
    description:
      "EatoGov focuses on food policy and governance, led by Chef Kobus van der Merwe of Wolfgat. This system works to develop and implement effective food policies that support sustainable, equitable, and resilient food systems at local, regional, and global levels.",
    tags: ["Food Policy", "Governance", "Regulation", "Local Food Systems"],
    color: "blue",
    image: "/images/systems/eatogov-regeneration.png",
    chef: {
      name: "Kobus van der Merwe",
      organization: "Wolfgat",
      image: "/kobus-van-der-merwe-portrait.png",
      bio: "Kobus van der Merwe is the chef and owner of Wolfgat, a small restaurant in Paternoster, South Africa that was named Restaurant of the Year at the World Restaurant Awards. His approach to cooking celebrates local, indigenous ingredients and the unique terroir of the West Coast of South Africa.",
      contribution:
        "As the primary culinary partner for EatoGov, Kobus brings his deep understanding of local food systems, indigenous knowledge, and sustainable practices. His work at Wolfgat demonstrates how small-scale, locally-focused food operations can thrive while preserving cultural heritage and environmental integrity.",
      initiatives: [
        "Local food policy frameworks for small communities",
        "Indigenous food sovereignty initiatives",
        "Regulatory frameworks for sustainable wild food harvesting",
        "Community-based governance models for food systems",
      ],
      website: "https://wolfgat.co.za",
    },
  },
  eatosecure: {
    number: "v10.0",
    name: "EatoSecure",
    tagline: "Global Food Security & Disaster Response",
    launchDate: "March 2028",
    quarter: "Q1 2028",
    description:
      "EatoSecure focuses on global food security and disaster response, led by Chef José Andrés through his work with World Central Kitchen. This system has pioneered innovative approaches to emergency food relief and community resilience.",
    tags: ["Disaster Response", "Food Security", "Emergency Relief", "Community Resilience"],
    color: "red",
    image: "/images/systems/eatosecure-canopy.png",
    chef: {
      name: "José Andrés",
      organization: "World Central Kitchen",
      image: "/jose-andres-headshot.png",
      bio: "Chef José Andrés is an internationally recognized culinary innovator, New York Times bestselling author, educator, humanitarian, and founder of World Central Kitchen (WCK).",
      contribution:
        "As the primary culinary partner for EatoSecure, José brings unparalleled expertise in mobilizing resources and coordinating rapid response to food crises worldwide. His work with World Central Kitchen has transformed how we approach disaster relief and food security.",
      initiatives: [
        "Rapid deployment of food relief in disaster zones",
        "Training local communities in emergency food preparation",
        "Developing resilient food infrastructure in vulnerable regions",
        "Advocating for policy changes to improve global food security",
      ],
      website: "https://wck.org",
    },
  },
  eatofoundation: {
    number: "v11.0",
    name: "EatoFoundation",
    tagline: "Biodiversity Conservation & Culinary Heritage",
    launchDate: "June 2028",
    quarter: "Q2 2028",
    description:
      "EatoFoundation focuses on biodiversity conservation and culinary heritage preservation, led by Chef Eelke Plasmeijer of Locavore. This system works to protect and celebrate the rich diversity of food cultures, ingredients, and traditional knowledge that form the foundation of sustainable food systems.",
    tags: ["Biodiversity", "Conservation", "Culinary Heritage", "Indigenous Knowledge"],
    color: "teal",
    image: "/images/systems/eatofoundation-sanctuary.png",
    chef: {
      name: "Eelke Plasmeijer",
      organization: "Locavore",
      image: "/eelke-plasmeijer-portrait.png",
      bio: "Eelke Plasmeijer is the co-founder and chef of Locavore in Bali, Indonesia, a restaurant dedicated to showcasing local, sustainable ingredients and traditional culinary techniques. His work celebrates Indonesia's rich biodiversity and culinary heritage while supporting local farmers, fishers, and food artisans.",
      contribution:
        "As the primary culinary partner for EatoFoundation, Eelke brings his deep commitment to biodiversity conservation and cultural preservation. His work at Locavore has created a model for how restaurants can serve as catalysts for protecting and celebrating local food systems.",
      initiatives: [
        "Seed banks for indigenous crop varieties",
        "Documentation of traditional culinary knowledge",
        "Support for small-scale farmers preserving heirloom varieties",
        "Educational programs on biodiversity and culinary heritage",
      ],
      website: "https://locavorebali.com",
    },
  },
}

// Helper function to get color classes
function getColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; text: string; gradient: string; hover: string }> = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      gradient: "from-green-50 to-teal-50",
      hover: "hover:bg-green-700",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      gradient: "from-yellow-50 to-amber-50",
      hover: "hover:bg-yellow-700",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      gradient: "from-pink-50 to-rose-50",
      hover: "hover:bg-pink-700",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      gradient: "from-purple-50 to-indigo-50",
      hover: "hover:bg-purple-700",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      gradient: "from-blue-50 to-cyan-50",
      hover: "hover:bg-blue-700",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      gradient: "from-teal-50 to-emerald-50",
      hover: "hover:bg-teal-700",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      gradient: "from-amber-50 to-yellow-50",
      hover: "hover:bg-amber-700",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      gradient: "from-red-50 to-orange-50",
      hover: "hover:bg-red-700",
    },
  }

  return colorMap[color] || colorMap.blue
}

export default function SystemPartnerPage({ params }: { params: { system: string } }) {
  const system = systemsData[params.system as keyof typeof systemsData]

  // If system doesn't exist, return 404
  if (!system) {
    notFound()
  }

  const colors = getColorClasses(system.color)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 md:px-0 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <Link href="/partners" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Partners
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div
                className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-6`}
              >
                System {system.number}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {system.name} <span className={colors.text}>Partners</span>
              </h1>

              <p className="text-xl text-gray-700 mb-8">{system.tagline}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {system.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 mb-8">{system.description}</p>

              <Link href="#become-partner">
                <Button className={`bg-${system.color}-600 ${colors.hover} text-white rounded-full px-6 py-2`}>
                  Partner with {system.name}
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={system.image || "/placeholder.svg"}
                  alt={`${system.name} System`}
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-6`}>
              Primary Culinary Partner
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {system.chef.name} & {system.chef.organization}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <Image
                src={system.chef.image || "/placeholder.svg"}
                alt={system.chef.name}
                width={500}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">About {system.chef.name}</h3>
              <p className="text-gray-600 mb-6">{system.chef.bio}</p>

              <p className="text-gray-600 mb-6">{system.chef.contribution}</p>

              <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
              <ul className="space-y-3 mb-6">
                {system.chef.initiatives.map((initiative, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center mr-3 mt-1`}>
                      <span className={colors.text + " font-bold"}>{index + 1}</span>
                    </div>
                    <span className="text-gray-600">{initiative}</span>
                  </li>
                ))}
              </ul>

              <a
                href={system.chef.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.text} hover:${colors.text} font-medium`}
              >
                Visit {system.chef.organization} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <div className={`inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-6`}>
              Supporting Partners
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">{system.name} Ecosystem</h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our supporting partners help amplify the impact of {system.name} across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Institutional Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Partners</h3>
              <p className="text-gray-600 mb-4">To be announced</p>
              <div className="h-20 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <span className="text-gray-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section id="become-partner" className={`py-20 bg-gradient-to-r ${colors.gradient}`}>
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with {system.name}</h2>
            <p className="text-lg text-gray-700 mb-10">
              Join us in building the future of food systems. If your organization is aligned with our mission, we
              invite you to connect with us.
            </p>
            <Link href="/partners/become-a-partner">
              <Button className={`bg-${system.color}-600 ${colors.hover} text-white rounded-full px-8 py-6 text-lg`}>
                Apply to Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
