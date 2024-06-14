import React, { useEffect } from "react";
import Head from 'next/head'
import Main from "../../Layout/Main/Main";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import SliderTwo from "../UI/Slider/SliderTwo";
import Slider from "../UI/Slider/SliderComponts";
import BannerComponents from "../UI/Banner/BannerComponents";
import GeneralComponents from "../UI/GeneralComponet/GeneralComponents";
import BasicSection from "../Section/Basic/BasicSection";
import ButtonView from "../../views/ButtonView";
import CardBasic from "../Section/CardBasic";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import Map from "../UI/Map";
import { slide as Menu } from "react-burger-menu";
import MenuBurger from "../UI/MenuBurguer";
import useScreenSize from "../../hooks/useScreenSize";
import PaypalForm from "../Section/PaypalForm";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { obtenerFrase } from "../../lang/traducciones";
import Link from "next/link";

const HomePage = ({ data }) => {
  //console.log(data, "data")
  const router = useRouter();
  const { lang } = router.query;
  const patrocinadores = obtenerFrase(lang, "patrocinadores");
  useEffect(() => {
    const targetId = window.location.hash.substring(1);
    console.log(targetId);
    if (targetId) {
      // Encuentra el elemento con el ID deseado
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Realiza el scroll al elemento
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  const { componentDynamics, banner } = data;
  const section1 = componentDynamics.find(
    (element) => element.typeSection == "section1"
  );
  const section2 = componentDynamics.find(
    (element) => element.typeSection == "section2"
  );
  const section3 = componentDynamics.find(
    (element) => element.typeSection == "section3"
  );
  const section4 = componentDynamics.find(
    (element) => element.typeSection == "section4"
  );
  const blogs = componentDynamics.find((element) => element.blogs != undefined);
  const titles = componentDynamics.filter(
    (element) => element.nameComponent == "titleBasic"
  );

  const horarios = section4?.imagenWithContentBasic?.map((element, index) => {
    return (
      <section className="py-5" key={index}>
        <h4 className="chelseaFont colorSecondary font-size-24">
          {element?.label}
        </h4>
        <div>
          <ReactMarkdown className="py-1 saltoLinea2">
            {element?.content}
          </ReactMarkdown>
        </div>
      </section>
    );
  });
  const { screenSize } = useScreenSize();
  console.log(data)
  return (
    <Main titlePage={data?.meta?.title} data={data}>
     
      {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
      <BannerComponents data={banner} />

      <div className="container">
        <HeaderComponets
          classNameText={"mt-10 p-5 colorPrimary chelseaFont font-responsive"}
          alignment={`${screenSize <= 900 ? "center" : "start"}`}
          width={`${screenSize <= 900 ? "100%" : "70%"}`}
        >
          {titles[0]?.Titulo}
        </HeaderComponets>
        <TwoColumnGrid>
          <CardBasic
            showMask={true}
            maskSrc={"/images/mask.png"}
            iconSrc={section1?.imgModelBasic?.data?.attributes?.url}
            imgSrc={section1?.imgBasicContent?.data?.attributes?.url}
            title={section1?.title}
            subtitle={section1?.subTitle}
          />

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={` fuentesParrafo  ${
              screenSize <= 1200
                ? "align-vertical-center-horizontal-center"
                : "align-vertical-center-horizontal-start "
            } p-5 lg:p-10`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
          >
            <ReactMarkdown className="py-5">{section1?.content}</ReactMarkdown>
            <ButtonView
              className={" backgroundPrimary m-0 manropeFont p-5"}
              link={lang + "/" + section1?.btn.url}
            >
              {section1?.btn.label}
            </ButtonView>
          </BasicSection>
        </TwoColumnGrid>

        <HeaderComponets
          classNameText={
            " lg:py-10 py-5 colorSecondary chelseaFont font-responsive"
          }
          alignment="end"
          width="100%"
        >
          {section2?.title}
        </HeaderComponets>
        <TwoColumnGrid backgroundImage="/images/mask-background.png">
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle "}
            title={""}
            classNameContent={` fuentesParrafo  ${
              screenSize <= 1200
                ? "align-vertical-center-horizontal-center"
                : "align-vertical-center-horizontal-start "
            } lg:p-10 lg:m-10 md:p-5 md:m-5 sm:p-5 sm:m-5`}
            width={"100%"}
            widthContent="100%"
            alignItems={"center"}
            alignment={`${screenSize <= 1200 ? "center" : "end"}`}
            styleWrapper={{ height: "100%" }}
            styleContent={{ height: "100%" }}
          >
            <ReactMarkdown className="sm:m-lg:py-5 md:py-5 m-responsive highlight">
              {section2?.content}
            </ReactMarkdown>
            <ButtonView
              className={" backgroundGris m-0 mt-5 manropeFont py-10"}
              link={lang + "/" + section2?.btn.url}
            >
              {section2?.btn.label}
            </ButtonView>
          </BasicSection>

          <Link href={`/${lang + "/" + section2?.btn.url}`}>
            <CardBasic
              imgSrc={section2?.imgBasicContent?.data?.attributes.url}
            />
          </Link>
        </TwoColumnGrid>

       <section className="py-20">
        <HeaderComponets
          classNameText={"px-10  titleGreen chelseaFont font-responsive"}
          alignment={`${screenSize <= 1200 ? "center" : "start"}`}
          width={`${screenSize <= 1200 ? "100%" : "60%"}`}
        >
          {titles[1]?.Titulo}
        </HeaderComponets>
        <TwoColumnGrid>
          <CardBasic
            
            maskSrc={"/images/mask.png"}
            iconSrc={section3?.imgModelBasic?.data?.attributes?.url}
            imgSrc={section3?.imgBasicContent.data.attributes.url}
            title={section3?.title}
            subtitle={section3?.subTitle}
          />

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={` fuentesParrafo  ${
              screenSize <= 1200
                ? "align-vertical-center-horizontal-center"
                : "align-vertical-center-horizontal-start "
            } p-5 sm:p-5 sm:m-5`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
            // styleContent={{height: "100%"}}
          >
            <span id="material"></span>
            <ReactMarkdown className="py-5">{section3?.content}</ReactMarkdown>
            {
              section3?.btn?.fileLabel?.data?.attributes?.url && ( <Link
                className={" buttonGreen m-0 manropeFont p-5 btnPrimary py-2"}
                href={section3?.btn?.fileLabel?.data?.attributes?.url || ""}
                target="_blank"
              >
                {section3?.btn.label}
              </Link>)
              
            }
           
          </BasicSection>
        </TwoColumnGrid>
        </section>
        <HeaderComponets
          classNameText={"py-10 colorPrimary chelseaFont font-responsive"}
          alignment={`${screenSize <= 1200 ? "center" : "start"}`}
          width={`${screenSize <= 1200 ? "100%" : "70%"}`}
        >
          {titles[2]?.Titulo}
        </HeaderComponets>

        <Slider data={blogs?.blogs?.data} />

        <TwoColumnGrid>
          <Map />
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyle"}
            title={""}
            classNameContent={` fuentesParrafo  ${
              screenSize <= 1200
                ? "align-vertical-center-horizontal-center"
                : "align-vertical-center-horizontal-start "
            }`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
            alignItems={"center"}
            justifyContent={"center"}
            styleWrapper={{ height: "100%" }}
          >
            {horarios}
          </BasicSection>
        </TwoColumnGrid>

        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"py-5 colorVerde chelseaFont font-responsive"}
          alignment={`${screenSize <= 1200 ? "center" : "start"}`}
        >
          {patrocinadores}
        </HeaderComponets>
        <SliderTwo />
      </div>
    </Main>
  );
};

export default HomePage;
