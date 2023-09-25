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
  console.log(filtro)
  // console.log(filterArray,"filter")
  // console.log(typeDonationSchemes,"typeDonationSchemes")
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
              El Centro de Rescate y Santuario Las Pumas es financiado y administrado por la Fundación Hagnauer, la cual es una organización sin fines de lucro que obtiene sus ingresos principalmente de las visitas de turistas al Santuario. Lamentablemente, los ingresos económicos no son suficientes para sustentar la totalidad de los gastos. Por esta razón, creamos un sistema de apadrinamiento en el que VOS podés ser parte de nuestros aliados para que continuemos con nuestra labor de rescate, rehabilitación y liberación de los animales silvestres; así como el desarrollo de la educación ambiental.
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
          classNameText={"py-5 colorVerde chelseaFont"}
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
  let isLoading = true;

  try {
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

    isLoading = false; // Cambiamos el estado a "false" para indicar que la carga ha terminado

    return {
      props: {
        filtro: filteredResults,
        typeDonationSchemes,
        isLoading, // Pasamos el estado de carga como prop
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    isLoading = false; // En caso de error, cambiamos el estado a "false"
    return {
      props: {
        filtro: [],
        typeDonationSchemes: [],
        isLoading, // Pasamos el estado de carga como prop
      },
    };
  }
}