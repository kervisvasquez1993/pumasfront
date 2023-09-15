import React from "react";
import SliderThree from "../Slider/SliderThree";
import BasicSection from "../../Section/Basic/BasicSection";
import style from "./style.module.css";
const SectionSliderContent = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];

  return (
    <section className={`${style.wrapperSectionSlider} m-10`}>
      <SliderThree>
        {images.map((image) => {
          return (
            <div key={image}>
              <img src={image} alt={"natural"} />
            </div>
          );
        })}
      </SliderThree>
      <BasicSection
        classNameTitle={"px-10 mx-10"}
        title={"Ejemplo"}
        classNameContent={style.contentWrapper}
      >
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
         
        </p>
      </BasicSection>
    </section>
  );
};

export default SectionSliderContent;
