import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoSections from "../UI/TwoSection";
import SectionReverse from "../Section/Basic/SectionReverse";
import { useRouter } from "next/router";
import Section from "../Section/Basic/Section";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import SliderGeneral from "../UI/Slider/SliderGeneral";
import ReactMarkdown from "react-markdown";
import useScreenSize from "../../hooks/useScreenSize";
const NosotrosPage = ({ data }) => {

  const router = useRouter();
  const { slug, lang } = router.query
  const { componentDynamics } = data;
  const { screenSize } = useScreenSize()

  const componentMap = {
    titleBasic: "TitleBasic"
  };

  const ComponentDynamicsRenderer = ({ componentDynamics }) => {

    const renderedComponents = componentDynamics.reduce((acc, elemento, index) => {
      if (elemento?.nameComponent === "titleBasic") {
        const component = (
          <HeaderComponets
            key={index}
            src="/images/fondo1.png"
            classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-5"}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            {elemento.Titulo}
          </HeaderComponets>
        );
        return [...acc, component];
      }

      if (elemento?.typeSlider === "slider_img_destacada") {
        const sliderImagenes = elemento?.imagenes.data.map(element => {
          const url = element.attributes.url
          return `${url}`
        })

        const component = (
          <section className="container-section sm:py-10 my-5">
            <section className="grid-2">
              <SliderThree>
                {sliderImagenes.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={image} alt={"natural"} />
                    </div>
                  );
                })}
              </SliderThree>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo p-5 "}
              >
                <ReactMarkdown
                  className="sm:py-10 m-5 saltoLinea2">{elemento.Content}</ReactMarkdown>
              </BasicSection>
            </section>
          </section>
        );
        return [...acc, component];
      }
      if (elemento.typeSection === "section1") {
        const component = (
          <TwoColumnGrid backgroundImage={`${elemento?.background?.data?.attributes?.url}`}>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              widthContent="70%"
              alignItems={"center"}
              justifyContent={"center"}
              classNameContent={" font-min sm:py-10"}
            >
              <ReactMarkdown className="py-10 saltoLinea2">{elemento.content}</ReactMarkdown>
              {/* <ButtonView
                className={" backgroundSecondary m-0 manropeFont p-5"}
                link={`${lang}/${elemento?.btn?.url}`}
              >
                {elemento?.btn?.label}
              </ButtonView> */}
            </BasicSection>

            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo lg:p-10 lg:m-10 "}
              styleWrapper={{ "padding": "90px" }}
              title={""}
              alignItems="center"
              justifyContent={"flex-start"}
              classNameContent={"fuentesParrafo lg:p-10 lg:m-10"}
            >
              <img src={`${elemento?.imgBasicContent?.data?.attributes?.url}`} />
            </BasicSection>
          </TwoColumnGrid>)
        return [...acc, component];
      }
      if (elemento?.label === "youtube") {

        const component = (<section className="section OneImg">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={elemento?.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>)

        return [...acc, component];
      }
      if (elemento?.typeSection === "section11") {

        const abousUs = elemento?.imagenWithContentBasic
          .slice(0, 2)
          .map((element, index) => {
            return (
              <section className="" key={index}>
                <HeaderComponets
                  alignment={`${screenSize <= 1024 ? "center" : "start"}`}
                  src="/images/fondo1.png"
                  classNameText={"colorSecondary chelseaFont"}
                  classNameSection={"centerElement"}
                >
                  {element.label}
                </HeaderComponets>
                <ReactMarkdown className="py-5">{element.content}</ReactMarkdown>
              </section>
            );
          });
        const component = (
          <section className="container-section sm:py-10 my-5">
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10 flex-vision"}
            >
              <section className="w-50 p-5">
                {abousUs}
              </section>
              <section className="w-50 p-5">
                <section className="">
                  <HeaderComponets
                    alignment={`${screenSize <= 1024 ? "center" : "start"}`}
                    src="/images/fondo1.png"
                    classNameText={"colorSecondary chelseaFont"}
                    classNameSection={"centerElement"}
                  >
                    {elemento.imagenWithContentBasic[2]?.label}
                  </HeaderComponets>
                  <ReactMarkdown className="py-5 saltoLinea2">{elemento?.imagenWithContentBasic[2]?.content}</ReactMarkdown>
                </section>
              </section>
            </BasicSection>
          </section>)

        return [...acc, component];
      }
      if (elemento?.typeSection === "section10") {
        const component = (<TwoSections
          backgroundImage={`${elemento?.background?.data?.attributes?.url}`}
          title1={elemento?.imagenWithContentBasic[0]?.label}
          children1={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde px-10 m-10"
              }
              title=""
              imageSrc={`${elemento?.imagenWithContentBasic[0]?.img?.data[0]?.attributes?.url}`}
              content={

                <ReactMarkdown>{elemento?.imagenWithContentBasic[0]?.content}</ReactMarkdown>

              }
            />
          }
          title2={elemento?.imagenWithContentBasic[1]?.label}
          children2={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde py-10 my-10"
              }
              title=""
              imageSrc={`${elemento?.imagenWithContentBasic[1]?.img?.data[0]?.attributes?.url}`}
              content={
                <ReactMarkdown>{elemento?.imagenWithContentBasic[1]?.content}</ReactMarkdown>
              }
            />
          }
        />)
        return [...acc, component];
      }
      if (elemento.typeSection === "section9") {
        const sliderReconocimiento = elemento?.imagenWithContentBasic?.map(element => {
          return (<Section
            positionTitle={"start"}
            contentClassName="contentSectionEnd px-10 px-10"
            titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
            title=""
            imageSrc={`${element.img.data[0]?.attributes.url}`}
            content={
              <ReactMarkdown>{element.content}</ReactMarkdown>
            }
          />)
        })
        const component = (<section className="container-section sm:py-10 my-5">
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorVerde chelseaFont pt-10 mt-10 font-responsive"}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            Reconocimiento
          </HeaderComponets>
          <SliderGeneral slides={sliderReconocimiento} themeColor="#96C473" />
        </section>)
        return [...acc, component];
      }
      return acc;
    }, []);
    return <div>{renderedComponents}</div>;
  };

  return (
    <Main titlePage={"Nosotros"}>
      <div className="container">
        {ComponentDynamicsRenderer(data)}
      </div>
    </Main>
  );
};

export default NosotrosPage;
