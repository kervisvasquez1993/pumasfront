import React, { useEffect } from "react";
import Main from "../../../Layout/Main/Main";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import { useRouter } from "next/router";
import {
  getAllDonations,
  getTypeDonations,
  langAll,
} from "../../../apis/ApiBackend";
import useDonations from "../../../hooks/useDonations";
import TwoColumnGrid from "../../../components/Section/Basic/TwoColumnGrid";
import StepByStepComponent from "../../../components/UI/StepByStepComponent";
import HeaderComponents from "../../../components/UI/HeaderComponents/HeaderComponets";
import SliderTwo from "../../../components/UI/Slider/SliderTwo";
import useScreenSize from "../../../hooks/useScreenSize";

const Donations = ({ result, typeDonationSchemes, filtro, }) => {

  const { screenSize } = useScreenSize()
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
            <p className="py-5">
            </p>
          </BasicSection>
        </TwoColumnGrid>
        <div>
          <StepByStepComponent
            typeDonations={typeDonationSchemes}
            filtro={filtro}
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


export async function getServerSideProps(context) {
  const { params, query } = context;
  const lang = params.lang;
  const parametros = query?.params;
  console.log(params, "parametros")
  let isLoading = true;
  const [donationsResponse, typeDonationsResponse] = await Promise.all([
    getAllDonations(lang),
    getTypeDonations(lang),
  ]);

  const donations = donationsResponse.data.data;
  const typeDonations = typeDonationsResponse.data.data;
  const result = donations.map((element) => ({
    id: element.id,
    monto: element.attributes.monto,
    donacion: element.attributes.donacion,
    locale: element.attributes.locale,
    imgSrc: element.attributes.imgSrc,
    modelos: element.attributes.modelos,
    tipo_de_donacions: element.attributes.tipo_de_donacions,
  }));

  const typeDonationSchemes = typeDonations.map((element) => ({
    id: element.id,
    titulo: element.attributes.titulo,
    beneficio: element.attributes.Beneficio,
    descripcion: element.attributes.descripcion,
    slug: element.attributes.slug,
    imagen: element.attributes.imagen,
    locale: element.attributes.locale,
  }));

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

  const filteredResults = parametros ? filterBySlug(result, parametros) : [];

  isLoading = false;

  return {
    props: {
      filtro: filteredResults,
      typeDonationSchemes,
      isLoading,
    },
  };

}
