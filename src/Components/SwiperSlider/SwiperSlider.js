// این کامپوننت مربوط به اسلایدر های موجود در صفحه 
// index 
// هستش

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function SwiperSlider({ children }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {/* در اینجا اون قسمت از کدی که باید روی دیتا بیس مپ زده شه برای رندر
        کردن هر آیتم از اسلایدر رو بصورت چیلدرن بهش دادم */}
        {children}
      </Swiper>
    </>
  );
}
