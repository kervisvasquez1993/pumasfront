import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Main from "../../../Layout/Main/Main";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import {
  getAllDonations,
  getDonationInfo,
  getFooter,
  getModelGQ,
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
import { obtenerFrase } from "../../../lang/traducciones";
import ReactMarkdown from "react-markdown";
import FormDonations from "../../../components/Section/FormDonations";

const Donations = ({
  typeDonationSchemes,
  result,
  whatsapp,
  footer,
  donationInfo,
  modelsGQ
}) => {
  const [isInitialRender, setisInitialRender] = useState(true);
  const { screenSize } = useScreenSize();
  const [filter, setFilter] = useState("");
  const { query } = useRouter();
  const { loadedFooter, loadedWhatsapp } = useMenu();
  const { lang } = query;
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
  }, [lang]);
  const donations = obtenerFrase(query.lang, "patrocinadores");
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
      <div className="container-program">
        
      </div>

      <div className="container">
      <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
          {donationInfo[0]?.attributes?.title}
        </h3>
        <div className="grid-2 px-5">
          <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2">
            <ReactMarkdown>
              {donationInfo[0]?.attributes?.description}
            </ReactMarkdown>
          </div>
        </div>
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
          {/* <StepByStepComponent
            typeDonations={typeDonationSchemes}
            filtro={filter}
          /> */}
          <FormDonations typeDonations={typeDonationSchemes} result={result} modelos={modelsGQ} />
        </div>
        <HeaderComponents
          src="/images/fondo1.png"
          classNameText={"py-5 colorVerde chelseaFont font-responsive"}
          alignment={`${screenSize <= 1200 ? "center" : "start"}`}
        >
          {donations}
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
  const [
    donationsResponse,
    typeDonationsResponse,
    whatsappResponse,
    footerResponse,
    donationInfoResponse,
    modelsGQResponse,
  ] = await Promise.all([
    getAllDonations(lang),
    getTypeDonations(lang),
    getWhatsapp(lang),
    getFooter(lang),
    getDonationInfo(lang),
    getModelGQ(lang)
  ]);

  const donations = donationsResponse.data.data;
  const typeDonations = typeDonationsResponse.data.data;
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const donationInfo = donationInfoResponse?.data?.data;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;
  const modelsGQ = modelsGQResponse?.data?.modelos;
  // console.log(modelsGQ, "modelsGQ")
  const result = donations.map((element) => ({
    id: element.id,
    monto: element.attributes.monto,
    donacion: element.attributes.donacion,
    locale: element.attributes.locale,
    imgSrc: element.attributes.imgSrc,
    modelos: element.attributes.modelos,
    tipo_de_donacions: element.attributes.tipo_de_donacions,
  }));
  // console.log(result, "result")
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
  // console.log(result, "result");
  return {
    props: {
      typeDonationSchemes,
      result,
      isLoading,
      whatsapp,
      modelsGQ,
      footer,
      donationInfo,
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
