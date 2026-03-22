'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

type ImageItem = {
  src: string
  alt: string
}

type ImageSliderProps = {
  images: ImageItem[]
  className?: string
}

export default function ImageSlider({ images, className }: ImageSliderProps) {
  return (
    <div className="relative mx-auto h-75 w-full max-w-md overflow-hidden rounded-xl shadow-xl sm:h-95">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0} // optimise LCP
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
