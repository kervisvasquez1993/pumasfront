import React from "react";
import Main from "../../Layout/Main/Main";
import SliderThree from "../UI/Slider/SliderThree";
import ItemSlider from "../UI/Slider/SliderThree/ItemSlider";
import SectionSliderContent from "../UI/SectionSliderContent";
import GeneralComponents from "../UI/GeneralComponet/GeneralComponents";

const NosotrosPage = () => {
  return (
    <Main>
      <SectionSliderContent />
      <GeneralComponents
        reverseOrder={true}
        // srcBackgroundColor="/images/logo_fundacion1.png"
        imageSrc="/images/logo_fundacion1.png"
        // image2Src="/images/modelo3d.png"
       
      />
    </Main>
  );
};

export default NosotrosPage;
