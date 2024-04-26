import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import Loader from "../Loader";

export default function NavigationSlider({ slides }) {
  return (
    <Swiper
      navigation={true}
      modules={Navigation}
      className="mySwiper santurarioSwipper"
    >
      {slides?.map((slide, index) => {
        const { url } = slide;
        const [isLoaded, setIsLoaded] = useState(false);

        return (
          <SwiperSlide key={index}>
            {!isLoaded && (
              <div className="flex items-center justify-center h-full">
                <Loader />
              </div>
            )}
            <img
              src={url}
              alt={url}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`conte border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-[500px] w-[500px] object-contain ${isLoaded ? "" : "hidden"
                }`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
