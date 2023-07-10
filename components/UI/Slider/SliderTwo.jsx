import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "./style.module.css";
import ImgComponent from "../ImgComponent/ImgComponents";

SwiperCore.use([Navigation]);

const SliderTwo = () => {
  const backgroundColor = "#fffdf6";
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5); // Valor predeterminado para pantallas mayores a 1200px

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 1199) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 991) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Ejecutar la función una vez al cargar la página

    window.addEventListener("resize", handleResize); // Agregar el evento de redimensionamiento

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="swiper-container" style={{ background: backgroundColor }}>
      <div className="swiper-navigation">
        <button className="swiper-button-prev" onClick={handlePrev}></button>
        <button className="swiper-button-next" onClick={handleNext}></button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
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
