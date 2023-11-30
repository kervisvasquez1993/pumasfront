import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Main from "../../../Layout/Main/Main";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import {
  getAllDonations,
  getFooter,
  getTypeDonations,
  getWhatsapp,
  langAll,
} from "../../../apis/ApiBackend";
import useDonations from "../../../hooks/useDonations";
import TwoColumnGrid from "../../../components/Section/Basic/TwoColumnGrid";
import StepByStepComponent from "../../../components/UI/StepByStepComponent";
import HeaderComponents from "../../../components/UI/HeaderComponents/HeaderComponets";
import SliderTwo from "../../../components/UI/Slider/SliderTwo";
import useScreenSize from "../../../hooks/useScreenSize";
import useMenu from "../../../hooks/useMenu";

const Donations = ({ typeDonationSchemes, result, whatsapp, footer }) => {
  const [isInitialRender, setisInitialRender] = useState(true);
  const { screenSize } = useScreenSize();
  const [filter, setFilter] = useState("");
  const { query, asPath, push } = useRouter();
  const { loadedFooter, loadedWhatsapp } = useMenu();
  loadedFooter(footer);
  loadedWhatsapp(whatsapp);
  console.log(typeDonationSchemes, "typeDonationSchemes")

  useEffect(() => {
    const data = filterBySlug(result, query.params);
    setFilter(data);
  }, [query.params]);

  const filterBySlug = (arr, slug) => {
    return arr?.filter((item) => {
      const modelos = item.modelos.data;
      const tipoDonaciones = item.tipo_de_donacions.data;
      return (
        modelos.some((modelo) => modelo.attributes.slug === slug) ||
        tipoDonaciones.some((tipo) => tipo.attributes.slug === slug)
      );
    });
  };
  return (
    <Main titlePage={"Donación"}>
      <div className="container">
        <TwoColumnGrid>
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            classNameContent={"fuentesParrafo p-10"}
          >
            <p className="py-5"></p>
          </BasicSection>
        </TwoColumnGrid>
        <div>
          <StepByStepComponent
            typeDonations={typeDonationSchemes}
            filtro={filter}
          />
        </div>
        <HeaderComponents
          src="/images/fondo1.png"
          classNameText={"py-5 colorVerde chelseaFont font-responsive"}
          alignment={`${screenSize <= 1200 ? "center" : "start"}`}
        >
          PATROCINADORES
        </HeaderComponents>
        <SliderTwo />
      </div>
    </Main>
  );
};

export default Donations;

export async function getStaticProps(context) {
  const { params, query } = context;
  const lang = params.lang;
  const parametros = query?.params;
  let isLoading = true;
  const [donationsResponse, typeDonationsResponse, whatsappResponse,footerResponse] =
    await Promise.all([
      getAllDonations(lang),
      getTypeDonations(lang),
      getWhatsapp(lang),
      getFooter(lang)
    ]);

  const donations = donationsResponse.data.data;
  const typeDonations = typeDonationsResponse.data.data;
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo
  const result = donations.map((element) => ({
    id: element.id,
    monto: element.attributes.monto,
    donacion: element.attributes.donacion,
    locale: element.attributes.locale,
    imgSrc: element.attributes.imgSrc,
    modelos: element.attributes.modelos,
    tipo_de_donacions: element.attributes.tipo_de_donacions,
  }));

  const typeDonationSchemes = typeDonations.map((element) => {
    return {
      id: element.id,
      titulo: element.attributes.titulo,
      beneficio: element.attributes.Beneficio,
      descripcion: element.attributes.descripcion,
      slug: element.attributes.slug,
      imagen: element.attributes.imagen,
      locale: element.attributes.locale,
      donaciones: element.attributes?.donaciones,
    };
  });

  isLoading = false;

  return {
    props: {
      typeDonationSchemes,
      result,
      isLoading,
      whatsapp,
      footer
    },
  };
}

export const getStaticPaths = async () => {
  const locales = await langAll();
  const languages = locales;
  const lang = [];
  for (const language of languages) {
    lang.push({ params: { lang: language.attributes.code } });
  }
  return {
    paths: lang,
    fallback: true,
  };
};
