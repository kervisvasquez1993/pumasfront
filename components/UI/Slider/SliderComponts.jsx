import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CardComponent from "../Card/CardComponents";

export default function Slider({ srcBackgroundColor = "" }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3.6);
  const backgroundImageStyle = {
    backgroundImage: `url(${srcBackgroundColor})`,
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3.6);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section style={backgroundImageStyle}>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={60}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
            title="test"
            imageUrl="/images/nigre.png"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
