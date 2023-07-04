import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./style.module.css";
import ImgComponent from "../ImgComponent/ImgComponents";

SwiperCore.use([Navigation]);

const SliderTwo = () => {
    const backgroundColor = "#fffdf6"
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
    <div className="swiper-container" style={{"background" : backgroundColor}}>
      <div className="swiper-navigation">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
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
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca1.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca2.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca3.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca4.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca5.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca5.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImgComponent imageUrl={"/images/marca5.png"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTwo;
