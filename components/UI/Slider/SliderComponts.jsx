import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CardComponent from "../Card/CardComponents";
import { useRouter } from "next/router";
import Link from "next/link";
import CardComponentHover from "../Card/CardComponentHover";

export default function Slider({ srcBackgroundColor = "", data = {} }) {
  const router = useRouter();
  const { lang } = router.query
  const blogInfo = data.map((e, index) => {
    const resumen = e.attributes.ContentBlog.substring(0, 150)
    return (<SwiperSlide key={index}>
      <CardComponentHover
        url={`/${lang}/blog/${e.id}`}
        description={resumen + " ...... "}
        title={e.attributes.TitleBlog}
        imageUrl={`${e?.attributes?.imgBlog ? e?.attributes?.imgBlog.data[0]?.attributes?.url : "/images/no-img.jpg"}`}
      />
    </SwiperSlide>)
  })
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3.6);
  const backgroundImageStyle = {
    // backgroundImage: `url(${srcBackgroundColor})`,
    minHeight: "50vh",
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      }
      else if (innerWidth < 1220) {
        setSlidesPerView(3);
      }
      else {
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
    // <section style={backgroundImageStyle} className="center">
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={slidesPerView}
      centeredSlides={false}
      spaceBetween={60}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {blogInfo}
    </Swiper>
    // </section>
  );
}
