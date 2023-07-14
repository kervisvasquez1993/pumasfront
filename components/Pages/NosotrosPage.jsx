import React from "react";
import Main from "../../Layout/Main/Main";
import SliderThree from "../UI/Slider/SliderThree";

const NosotrosPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
  ];

  return (
    <Main>
      <SliderThree slidesToScroll={4} images={images} />;
    </Main>
  );
};

export default NosotrosPage;
