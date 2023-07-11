import React from "react";
import Main from "../../Layout/Main/Main";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import SliderTwo from "../UI/Slider/SliderTwo";
import MapSection from "../Section/Map/MapSection";
import Slider from "../UI/Slider/SliderComponts";
import BannerComponents from "../UI/Banner/BannerComponents";
import GeneralComponents from "../UI/GeneralComponet/GeneralComponents";

const HomePage = () => {
  return (
    <Main>
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents />

      <HeaderComponets
        src="/images/fondo1.png"
        classNameText={"py-5 colorPrimary chelseaFont"}
        alignment="start"
      >
        CENTRO DE RESCATE Y SANTUARIO LAS PUMAS
      </HeaderComponets>
      <GeneralComponents
        infoBTN={"Conoce más"}
        colorBTN={"backgroundPrimary"}
        reverseOrder={false}
        srcBackgroundColor="/images/fondo1.png"
        imageSrc="/images/venado.png"
        image2Src="/images/modelo3d.png"
        paragraphText={
          "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
        }
      />
      <HeaderComponets
        src=""
        classNameText={"py-5 colorSecondary chelseaFont"}
        alignment="end"
      >
        ¡CONOCE NUESTRO SANTUARIO VIRTUAL!
      </HeaderComponets>

      <GeneralComponents
        infoBTN={"Visita virtual"}
        colorBTN={"backgroundGris"}
        reverseOrder={true}
        srcBackgroundColor="/images/fondo1.png"
        imageSrc="/images/section2.png"
        paragraphText={
          "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
        }
      />
      <HeaderComponets
        src="/images/fondo1.png"
        classNameText={"py-5 colorVerde chelseaFont"}
        alignment="start"
      >
        NO ME SAQUES DE MI HÁBITAT
      </HeaderComponets>
      <GeneralComponents
        infoBTN={"Ver más Programas"}
        colorBTN={"backgroundVerde"}
        reverseOrder={false}
        srcBackgroundColor="/images/fondo1.png"
        imageSrc="/images/nigre.png"
        image2Src="/images/modelo3d.png"
        paragraphText={
          "In the example below, we use the font Inter from next/font/google (you can use any font from Google or Local Fonts). Load your font with the variable option to define your CSS variable name and assign it to inter."
        }
      />
      <HeaderComponets
        src="/images/fondo1.png"
        classNameText={"py-5 colorPrimary chelseaFont"}
        alignment="start"
      >
        NOTICIAS Y BLOG
      </HeaderComponets>
      <Slider srcBackgroundColor={"/images/fondo1.png"} />
      <MapSection />
      <HeaderComponets
        src="/images/fondo1.png"
        classNameText={"py-5 colorVerde chelseaFont"}
        alignment="start"
      >
        PATROCINADORES
      </HeaderComponets>
      <SliderTwo />
    </Main>
  );
};

export default HomePage;
