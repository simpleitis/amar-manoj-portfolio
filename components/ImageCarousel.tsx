'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import SwiperType from 'swiper'

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState<
    SwiperType | null | undefined
  >()

  const images = [
    '/work1.jpeg',
    '/work2.jpeg',
    '/work3.jpeg',
    '/work4.jpeg',
    '/work5.jpeg',
    '/work6.jpeg',
    '/work7.jpeg',
    '/work8.jpeg',
    '/work9.jpeg',
    '/work10.jpeg',
  ]

  return (
    <section className="min-h-screen bg-black py-12">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[650px] w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image}
                  alt={image}
                  width={650}
                  height={1000}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image}
                  alt={image}
                  width={1000}
                  height={1000}
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
