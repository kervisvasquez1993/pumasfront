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
  const [primerElemet, secundarioElement, tercerElment, cuartoElement, quintoElemet, sextoElement, septimoElemento] = componentDynamics;
  const sliderImagenes = secundarioElement?.imagenes.data.map(element => {
    const url = element.attributes.url
    return `${url}`
  })
  const abousUs = quintoElemet.imagenWithContentBasic.map((element, index) => {
    return (<section className="w-50 p-5" key={index}>
      <HeaderComponets
        alignment={`${screenSize <= 1024 ? "center" : "start"}`}
        src="/images/fondo1.png"
        classNameText={"colorSecondary chelseaFont"}
        classNameSection={"centerElement"}
      >
        {element.label}
      </HeaderComponets>
      <ReactMarkdown className="py-5">{
        element.content
      }</ReactMarkdown>
    </ section>)
  })

  const sliderReconocimiento = septimoElemento.imagenWithContentBasic.map(element => {
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



  return (
    <Main titlePage={"Nosotros"}>
      <div className="container">

        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-5"}
          alignment={`${screenSize <= 1024 ? "center" : "start"}`}
        >
          {primerElemet.Titulo}
        </HeaderComponets>
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
              classNameContent={"fuentesParrafo p-5 sm:p-10"}
            >
              <ReactMarkdown className="sm:py-10 m-5">{secundarioElement.Content}</ReactMarkdown>
            </BasicSection>
          </section>
        </section>

        <TwoColumnGrid backgroundImage={`${tercerElment?.background?.data?.attributes?.url}`}>
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            widthContent="70%"
            alignItems={"center"}
            justifyContent={"center"}
            classNameContent={" font-min sm:py-10"}
          >
            <ReactMarkdown className="py-10">{tercerElment.content}</ReactMarkdown>
            <ButtonView
              className={" backgroundSecondary m-0 manropeFont p-5"}
              link={`${lang}/${tercerElment?.btn?.url}`}
            >
              {tercerElment.btn.label}
            </ButtonView>
          </BasicSection>

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo sm:p-10 sm:m-10 "}
            styleWrapper={{ "padding": "90px" }}
            title={""}
            alignItems="center"
            justifyContent={"flex-start"}
            classNameContent={"fuentesParrafo sm:p-10 sm:m-10"}
          >
            <img src={`${tercerElment?.imgBasicContent?.data?.attributes?.url}`} />
          </BasicSection>
        </TwoColumnGrid>


        {/* <section className="section OneImg ">
          <video controls >
            <source src={cuartoElement?.img?.data[0]?.attributes?.url} type="video/mp4" />
            Tu navegador no admite la reproducción de videos.
          </video>
        </section> */}
        <section className="section OneImg">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vr3FNq5djxs"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        <section className="container-section sm:py-10 my-5">

          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            classNameContent={"fuentesParrafo py-10 flex-vision"}
          >
            {abousUs}
          </BasicSection>


        </section>


        <TwoSections
          backgroundImage={`${sextoElement?.background?.data?.attributes?.url}`}
          title1={sextoElement?.imagenWithContentBasic[0]?.label}
          children1={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde px-10 m-10"
              }
              title=""
              imageSrc={`${sextoElement?.imagenWithContentBasic[0]?.img?.data[0]?.attributes?.url}`}
              content={

                <ReactMarkdown>{sextoElement?.imagenWithContentBasic[0]?.content}</ReactMarkdown>

              }
            />
          }
          title2={sextoElement?.imagenWithContentBasic[1]?.label}
          children2={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde py-10 my-10"
              }
              title=""
              imageSrc={`${sextoElement?.imagenWithContentBasic[1]?.img?.data[0]?.attributes?.url}`}
              content={
                <ReactMarkdown>{sextoElement?.imagenWithContentBasic[1]?.content}</ReactMarkdown>
              }
            />
          }
        />



        <section className="container-section sm:py-10 my-5">
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorVerde chelseaFont pt-10 mt-10 font-responsive"}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            Reconocimiento
          </HeaderComponets>
          <SliderGeneral slides={sliderReconocimiento} themeColor="#96C473" />;
        </section>

      </div>
    </Main>
  );
};

export default NosotrosPage;
