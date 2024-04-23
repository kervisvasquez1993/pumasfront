import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./style.module.css";
import ImgComponent from "../ImgComponent/ImgComponents";
import usePatocinadores from "../../../hooks/usePatrocinadores";
import { Loader } from "@react-three/drei";

SwiperCore.use([Navigation]);

const SliderTwo = () => {
  const backgroundColor = "#fffdf6";
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5); // Valor predeterminado para pantallas mayores a 1200px
  const { patrocinadores, loading } = usePatocinadores();
  if (loading) <Loader />;
  const dataPatrocidores = patrocinadores?.map((patrocindador, index) => {
    return (
      <SwiperSlide key={index}>
        {/* <ImgComponent imageUrl={patrocindador?.attributes?.logo?.data?.attributes?.formats?.small?.url} /> */}
        <ImgComponent
          imageUrl={patrocindador?.attributes?.logo?.data?.attributes?.url}
        />
      </SwiperSlide>
    );
  });
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
    <div
      className="swiper-container py-10 my-10 center"
      style={{ background: backgroundColor }}
    >
      <div className="swiper-navigation">
        <button
          className="swiper-button-prev hidden md:block"
          onClick={handlePrev}
        ></button>
        <button
          className="swiper-button-next hidden md:block"
          onClick={handleNext}
        ></button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        lazy={true}
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
        {dataPatrocidores}
      </Swiper>
    </div>
  );
};

export default SliderTwo;
