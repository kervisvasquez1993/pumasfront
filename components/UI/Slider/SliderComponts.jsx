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
import CardComponent from "../Card/CardComponents";

export default function Slider({srcBackgroundColor = ""}) {
    const [swiperRef, setSwiperRef] = useState(null);
    const backgroundImageStyle = {
        backgroundImage: `url(${srcBackgroundColor})`,
    };
    return (
        <section style={backgroundImageStyle}>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3.6}
                centeredSlides={false}
                spaceBetween={60}
                // pagination={{
                //     type: "fraction",
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                // style={{ backgroundColor: "red" }}
            >
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent
                        description={
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat natus fugiat tenetur."
                        }
                        title={"test"}
                        imageUrl={"/images/nigre.png"}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
