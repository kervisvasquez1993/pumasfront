import { useEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import BannerComponents from "../../components/UI/Banner/BannerComponents";
import GeneralComponents from "../../components/UI/GeneralComponet/GeneralComponents";
import HeaderComponets from "../../components/UI/HeaderComponents/HeaderComponets";
import Slider from "../../components/UI/Slider/SliderComponts";
import Map from "../../components/UI/Map/index";
import { api } from "../../helpers/apiBackend";
import MapSection from "../../components/Section/Map/MapSection";
import SliderTwo from "../../components/UI/Slider/SliderTwo";
import { ApiBackend } from "../../apis/ApiBackend";

// api
// import dynamic from 'next/dynamic';
// const test = dynamic(() => import("../../components/UI/Map/MapLocations"), { ssr: false });
// import {MapLocations} from "../../components/UI/Map/MapLocations";
// import Map from "../../components/UI/Map/Map";
const LangPage = ({ lang }) => {
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

export default LangPage;
const lang = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return ApiBackend("api/i18n/locales", config);
};

export const getStaticProps = async ({ params }) => {
  const paramId = params.lang;
  const langResponse = await lang();
  const languages = langResponse.data;
  const language = languages.find((lang) => lang.code === paramId);
  if (!language) return { notFound: true };
  return {
    props: { language },
  };
};

export const getStaticPaths = async () => {
  const langResponse = await lang();
  const languages = langResponse.data;
  const code = languages.map((lang) => lang.code);
  const paths = code.map((path) => ({ params: { lang: path } }));
  return {
    paths,
    // fallback: "blocking ,
    fallback: true,
  };
};
