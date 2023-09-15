import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

export default function NavigationSlider({ slides }) {
  return (
    <Swiper navigation={true} modules={Navigation} className="mySwiper santurarioSwipper">
      {slides?.map((slide, index) => {
        const { url } = slide;
        return (
          <SwiperSlide key={index}>
            <img src={url} alt={url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
