import type React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface System {
  id: number
  name: string
  description: string
  image: string
}

interface SystemsCarouselProps {
  systems: System[]
}

const SystemsCarousel: React.FC<SystemsCarouselProps> = ({ systems }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {systems.map((system, index) => (
        <SwiperSlide key={system.id}>
          <div className="relative h-64 w-full">
            <Image
              src={system.image || "/placeholder.svg"}
              alt={system.name}
              layout="fill"
              objectFit="cover"
              priority={index < 3}
              quality={80}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index > 2 ? "lazy" : "eager"}
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold">{system.name}</h3>
            <p className="text-gray-600">{system.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SystemsCarousel
