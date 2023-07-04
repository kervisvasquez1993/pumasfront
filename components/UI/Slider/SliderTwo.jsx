import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./style.module.css";

SwiperCore.use([Navigation]);

const SliderTwo = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="swiper-container">
      <div className="swiper-navigation">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={false}
        history={{
          key: "slide",
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={setSwiper}
      >
        <SwiperSlide data-history="1">Slide 1</SwiperSlide>
        <SwiperSlide data-history="Slide 2">Slide 2</SwiperSlide>
        <SwiperSlide data-history="3">Slide 3</SwiperSlide>
        <SwiperSlide data-history="Slide 4">Slide 4</SwiperSlide>
        <SwiperSlide data-history="5">Slide 5</SwiperSlide>
        <SwiperSlide data-history="Slide 6">Slide 6</SwiperSlide>
        <SwiperSlide data-history="7">Slide 7</SwiperSlide>
        <SwiperSlide data-history="Slide 8">Slide 8</SwiperSlide>
        <SwiperSlide data-history="9">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTwo;
