import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItemSlider from "./ItemSlider";

const SliderThree = ({ children }) => {
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
      showArrows={false}
      itemWidth={500}
      itemHeight={400} 
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {children}
    </Carousel>
  );
};

export default SliderThree;
