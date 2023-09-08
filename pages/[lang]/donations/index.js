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

const Donations = ({ result, typeDonationSchemes }) => {
  const { loadedDonations, loadedParams, paramsProvider, filterArray } =
    useDonations();
  const router = useRouter();
  const { params } = router.query;
  loadedDonations(result);
  loadedParams(params);
  console.log(filterArray,"filter")
  console.log(typeDonationSchemes,"typeDonationSchemes")
  return (
    <Main titlePage={"Donación"}>
      <div className="container">
        <TwoColumnGrid>
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            classNameContent={"fuentesParrafo py-10"}
          >
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab, mollitia
              vero accusantium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus sunt veniam quos. Nisi esse quae ullam
              ab, mollitia vero accusantium.
            </p>
          </BasicSection>
        </TwoColumnGrid>
        <div>
          <StepByStepComponent
            typeDonations={typeDonationSchemes}
            donationAll={result}
          />
        </div>
      </div>
    </Main>
  );
};

export default Donations;

export const getStaticProps = async ({params}) => {
  const {lang} = params;
    const [response, typeDonations] = await Promise.all([
      getAllDonations(lang),
      getTypeDonations(lang),
    ]);



    
    const typeDonationsResponse = typeDonations.data.data;
    const results = response.data.data;

    console.log(results, "result"); 
   
    
      const result = results.map((element) => (
        {
        id: element.id,
        monto: element.attributes.monto,
        donacion: element.attributes.donacion,
        locale: element.attributes.locale,
        imgSrc: element.attributes.imgSrc,
        modelos: element.attributes.modelos,
        tipo_de_donacions : element.attributes.tipo_de_donacions
      }));
  
      const typeDonationSchemes = typeDonationsResponse.map((element) => ({
        id: element.id,
        titulo: element.attributes.titulo,
        beneficio: element.attributes.Beneficio,
        descripcion: element.attributes.descripcion,
        slug: element.attributes.slug,
        imagen: element.attributes.imagen,
        locale: element.attributes.locale,
      }));
    
    
    return {
      props: {
        result: result,
        typeDonationSchemes: typeDonationSchemes,
      },
    };


  const mergedResult = results.reduce(
    (accumulator, currentValue) => {
      accumulator.result.push(...currentValue.result);
      accumulator.typeDonationSchemes.push(...currentValue.typeDonationSchemes);
      return accumulator;
    },
    { result: [], typeDonationSchemes: [] }
  );
  return {
    props: {
      result: mergedResult.result,
      typeDonationSchemes: mergedResult.typeDonationSchemes,
    },
  };
};

export const getStaticPaths = async () => {
  const locales = await langAll();
  const languages = locales.data;
  const lang = [];
  for (const language of languages) {
    lang.push({ params: { lang: language.code } });
  }
  console.log(lang);
  return {
    paths: lang,
    fallback: true,
  };
};
