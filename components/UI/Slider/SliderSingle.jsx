import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

const containerStyle = {
    width: "100%", // El contenedor ocupa el ancho completo del padre
    maxWidth: "800px", // Cambia este valor según tus preferencias
    margin: "0 auto", // Centra el contenedor horizontalmente
    heigth: "auto"
};

export default function SliderSingle({ slidesData = [] }) {
    return (
        <section className="p-10 m-10 wrapperElementoSlider">
            <div style={containerStyle}>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    spaceBetween={20} // Espacio entre las imágenes
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {slidesData?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div style={{ maxWidth: "100%" }}>
                                <Image
                                    src={slide.attributes.url}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"

                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
