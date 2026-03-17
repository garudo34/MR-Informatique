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
    <div className="relative w-full max-w-md mx-auto h-[300px] sm:h-[380px] rounded-xl shadow-xl overflow-hidden">
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
            <div className="relative w-full h-full">
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
