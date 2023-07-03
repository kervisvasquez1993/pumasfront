import { useEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import BannerComponents from "../../components/UI/Banner/BannerComponents";
import GeneralComponents from "../../components/UI/GeneralComponet/GeneralComponents";
import HeaderComponets from "../../components/UI/HeaderComponents/HeaderComponets";
import Slider from "../../components/UI/Slider/SliderComponts";
import Map from "../../components/UI/Map/index";
import { api } from "../../helpers/apiBackend";
import MapSection from "../../components/Section/Map/MapSection";
// api
// import dynamic from 'next/dynamic';
// const test = dynamic(() => import("../../components/UI/Map/MapLocations"), { ssr: false });
// import {MapLocations} from "../../components/UI/Map/MapLocations";
// import Map from "../../components/UI/Map/Map";
const LangPage = ({ lang }) => {
  console.log(lang.code, "lang");

  return (
    <Main>
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents />

      <HeaderComponets
        src="/images/fondo1.png"
        classNameText={"py-5 colorPrimary"}
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
        src="/images/fondo1.png"
        classNameText={"py-5 colorSecondary"}
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
        classNameText={"py-5 colorVerde"}
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
        classNameText={"py-5 colorPrimary"}
        alignment="start"
      >
        NOTICIAS Y BLOG
      </HeaderComponets>
      <Slider srcBackgroundColor={"/images/fondo1.png"} />
      <MapSection />
    </Main>
  );
};

export default LangPage;
const getLangs = async () => {
  const data = [
    {
      id: 1,
      name: "English (en)",
      code: "en",
      createdAt: "2023-06-20T15:13:26.235Z",
      updatedAt: "2023-06-20T15:13:26.235Z",
      isDefault: false,
    },
    {
      id: 2,
      name: "Spanish (es)",
      code: "es",
      createdAt: "2023-06-22T18:17:52.442Z",
      updatedAt: "2023-06-22T19:00:35.298Z",
      isDefault: true,
    },
  ];
  const token =
    "ce0133fe5330488e9cc3e4477911858698e315cf287470843d0c8c8bdce21358013013c78c6817f643218c3076015b2a17bd60926c4921f080911e5c17f2dca90346bc1bdfa8311fcd105bd7f439440f2bb94d5231639f8351d33a7be5372a3796cfc92500c9fa46ac236114ef2e282f4de45e290bc167540bbb8dfa7323681a";

  try {
    const response = await fetch("http://localhost:1337/api/pages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Error en la solicitud:", response.status);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }

  return data;
};
export const getStaticProps = async ({ params }) => {
  const paramId = params.lang;
  console.log(process.env.URL_BASE, "process.env.URL_BASE");
  console.log(paramId, "paramId");
  const langs = await getLangs();
  // const lang =
  const lang = langs.find((lang) => lang.code === paramId);
  if (!lang) return { notFound: true };
  return {
    props: { lang },
  };
};

export const getStaticPaths = async () => {
  const langs = await getLangs();
  const code = langs.map((lang) => lang.code);
  const paths = code.map((path) => ({ params: { lang: path } }));
  // console.log(langs, "langs");
  return {
    paths,
    // fallback: "blocking ,
    fallback: true,
  };
};
