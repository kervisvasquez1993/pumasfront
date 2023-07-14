import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemSlider from "./ItemSlider";

const SliderThree = ({ children }) => {
  // children
  //     <div>
  //     <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide 1" />
  //     <p className="legend">Legend 1</p>
  //   </div>
  const onChange = (index, item) => {
    console.log(`Slide changed to index ${index}`);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked item at index ${index}`);
  };

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumbnail at index ${index}`);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <ItemSlider
        srcImg={"https://swiperjs.com/demos/images/nature-1.jpg"}
        altImg={"example"}
        name={"nature1"}
      />
      <ItemSlider
        srcImg={"https://swiperjs.com/demos/images/nature-2.jpg"}
        altImg={"example"}
        name={"nature2"}
      />
      <ItemSlider
        srcImg={"https://swiperjs.com/demos/images/nature-3.jpg"}
        altImg={"example"}
        name={"nature3"}
      />
      <ItemSlider
        srcImg={"https://swiperjs.com/demos/images/nature-4.jpg"}
        altImg={"example"}
        name={"nature4"}
      />
    </Carousel>
  );
};

export default SliderThree;
