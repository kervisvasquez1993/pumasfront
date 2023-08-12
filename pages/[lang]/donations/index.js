import React from "react";
import Main from "../../../Layout/Main/Main";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import { useRouter } from "next/router";
import { getAllDonations, langAll } from "../../../apis/ApiBackend";
import useDonations from "../../../hooks/useDonations";
import TwoColumnGrid from "../../../components/Section/Basic/TwoColumnGrid";
import StepByStepComponent from "../../../components/UI/StepByStepComponent";

const Donations = ({ result }) => {
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
          <StepByStepComponent></StepByStepComponent>

          
        </div>
      </div>
    </Main>
  );
};

export default Donations;

export const getStaticProps = async () => {
  let result = [];
  const getLangAll = await langAll();
  const languages = getLangAll.data;
  for (const language of languages) {
    const response = await getAllDonations(language.code);
    const results = response.data.data;
    results.forEach((element) => {
      console.log(element.attributes.modelos.data, "modelos");
      result.push({
        id: element.id,
        monto: element.attributes.monto,
        donacion: element.attributes.donacion,
        locale: element.attributes.locale,
        imgSrc: element.attributes.imgSrc,
        modelos: element.attributes.modelos,
      });
    });
  }
  console.log(result);

  return {
    props: {
      result,
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
