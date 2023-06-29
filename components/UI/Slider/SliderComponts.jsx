import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    
    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={60}
                // pagination={{
                //     type: "fraction",
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <SwiperSlide>Slide 10</SwiperSlide>
                <SwiperSlide>Slide 11</SwiperSlide>
                <SwiperSlide>Slide 12</SwiperSlide>
            </Swiper>
        </>
    );
}
