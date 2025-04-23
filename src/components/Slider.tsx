'use client';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { ReactNode } from 'react';

export const Slider = ({ children }: { children: ReactNode }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
    >
      <button className="swiper-button-prev-custom absolute left-2 top-1/2 z-10 -translate-y-1/2 text-3xl">
        ←
      </button>
      <button className="swiper-button-next-custom absolute right-2 top-1/2 z-10 -translate-y-1/2 text-3xl">
        →
      </button>
      {children}
    </Swiper>
  );
};
