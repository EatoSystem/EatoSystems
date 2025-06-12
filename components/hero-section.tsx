import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Amazing Website</h1>
        <p className="text-lg text-gray-700 mb-8">Discover the best products and services we have to offer.</p>
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={1200}
          height={600}
          className="rounded-lg shadow-md mx-auto"
          priority={true}
          quality={85}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="mt-8">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4">
            Learn More
          </a>
          <a href="#" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
            Get Started
          </a>
        </div>
        <link rel="preload" href="/images/hero-image.jpg" as="image" />
      </div>
    </section>
  )
}

export default HeroSection
