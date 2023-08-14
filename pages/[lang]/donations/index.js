import React from "react";
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
  console.log(filterArray);
  console.log(params, "params");

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
          <StepByStepComponent typeDonations={typeDonationSchemes} />
        </div>
      </div>
    </Main>
  );
};

export default Donations;

export const getStaticProps = async () => {
  const getLangAll = await langAll();
  const languages = getLangAll.data;

  const requests = languages.map(async (language) => {
    const [response, typeDonations] = await Promise.all([
      getAllDonations(language.code),
      getTypeDonations(language.code),
    ]);

    const typeDonationsResponse = typeDonations.data.data;
    const results = response.data.data;

    const result = results.map((element) => ({
      id: element.id,
      monto: element.attributes.monto,
      donacion: element.attributes.donacion,
      locale: element.attributes.locale,
      imgSrc: element.attributes.imgSrc,
      modelos: element.attributes.modelos,
    }));

    const typeDonationSchemes = typeDonationsResponse.map((element) => ({
      id: element.id,
      titulo: element.attributes.titulo,
      beneficio: element.attributes.Beneficio,
      descripcion : element.attributes.descripcion,
      slug: element.attributes.slug,
      imagen: element.attributes.imagen,
      locale: element.attributes.locale,
    }));

    return { result, typeDonationSchemes };
  });

  const results = await Promise.all(requests);

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
