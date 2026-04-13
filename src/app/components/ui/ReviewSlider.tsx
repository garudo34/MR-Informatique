'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import ReviewCard from './ReviewCard'
import 'swiper/css'
import 'swiper/css/pagination'
import { GoogleReview } from '@/lib/types'

type Props = {
  reviews: GoogleReview[]
}

export default function ReviewSlider({ reviews }: Props) {
  return (
    <Swiper
      className="pb-10!"
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      loop
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
