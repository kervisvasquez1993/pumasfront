import React from "react";
import Main from "../../../Layout/Main/Main";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import { useRouter } from "next/router";
import { getAllDonations, langAll } from "../../../apis/ApiBackend";

const Donations = ({ donaciones }) => {
  console.log(donaciones)
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <Main titlePage={"Donación"}>
      <div className="container">
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
            vero accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab, mollitia
            vero accusantium.
          </p>
        </BasicSection>
      </div>
    </Main>
  );
};

export default Donations;

export const getStaticProps = async () => {
  try {
    const donacions = [];
    const getLangAll = await langAll();
    const languages = getLangAll.data;
    for (const language of languages) {
      const donacionesResponse = await getAllDonations(language.code);
      const donaciones = donacionesResponse.data.data;
      
    }
    

    return {
      props: {
        donaciones: "donaciones",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        donaciones: [],
      },
    };
  }
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
