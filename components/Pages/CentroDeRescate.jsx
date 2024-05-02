import React, { useLayoutEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import Section from "../Section/Basic/Section";
import SectionReverse from "../Section/Basic/SectionReverse";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import ButtonView from "../../views/ButtonView";
import CardBasic from "../Section/CardBasic";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import usePages from "../../hooks/usePages";
import { cookies } from "next/dist/client/components/headers";
import SlidetWithContent from "../Section/Slider/SliderWithContent";
import ReactMarkdown from "react-markdown";
import useScreenSize from "../../hooks/useScreenSize";
import Loader from "../UI/Loader";
import { useRouter } from "next/router";
import { obtenerFrase } from "../../lang/traducciones";
import Head from "next/head";

const CentroDeRescate = ({ data }) => {
  const router = useRouter();
  const [dynamicComponents, setDynamicComponents] = useState([]);
  const { slug, lang } = router.query
  const { componentDynamics,title } = data;
  const { screenSize } = useScreenSize()
  const conoceMas = obtenerFrase(lang, "conoceMas");
  if (!componentDynamics) {
    return <Loader />;
  }
 
  useLayoutEffect(() => {
    const ComponentDynamicsRenderer = ({ componentDynamics }) => {

      const renderedComponents = componentDynamics.reduce((acc, elemento, index) => {
  
        if (elemento?.typeSlider === "slider_img_destacada") {
          const imgSlider = elemento?.imagenes?.data?.map(img => {
            return {
              url: `${img.attributes.url}`
            }
          })
          const component = (<SlidetWithContent images={imgSlider} content={elemento.Content} title={elemento.title} key={index} />)
          return [...acc, component];
        }
        if (elemento?.nameComponent === "titleBasic") {
          const component = (<HeaderComponets
            key={index}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
            src="/images/fondo1.png"
            classNameText={"font-responsive program-title fuenteTitulo colorPrimary py-10 my-10"}
            classNameSection={"centerElement"}
          >
            {elemento.Titulo}
          </HeaderComponets>)
          return [...acc, component];
        }
        if (elemento?.typeSection === "section7") {
          let section = []
          const iteradorElement = elemento?.imagenWithContentBasic?.forEach((item, index) => {
            const value = index % 2
            if (value === 0) {
              const addSection = (<SectionReverse
                positionTitle={`${screenSize <= 1024 ? "center" : "start"}`}
                titleClassName={"program-title fuenteTitulo colorPrimary font-responsive "}
                title={`${item?.label}`}
                imageSrc={
                  item?.img.data[0]?.attributes?.url ||
                  "URL_PREDETERMINADA"
                }
                contentClassName={"contentSectionReserveEnd"}
                content={`${item?.content}`}
              />)
  
              section.push(addSection)
            }
            if (value === 1) {
              const addSection = (<Section
                positionTitle={`${screenSize <= 1024 ? "center" : "end"}`}
                contentClassName="contentSectionEnd sm:px-10 sm:px-10"
                titleClassName={"program-title fuenteTitulo colorVerde py-5 sm:py-10 sm:my-10 font-responsive"}
                title={`${item?.label}`}
                imageSrc={`${item?.img.data[0]?.attributes.url}`}
                content={`${item?.content}`}
              />)
              section.push(addSection)
            }
  
          })
          const component = (<section style={{ backgroundImage: `url("/images/Vector5.png")`, backgroundSize: "contain", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
            {section}
  
          </section>)
          return [...acc, component];
        }
  
        if (elemento?.typeSection === "section4") {
          const component = (<TwoColumnGrid key={index} backgroundImage={elemento.background?.data?.attributes.url}>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle "}
              title={""}
              classNameContent={
                `${screenSize <= 1024 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start"}  "fuentesParrafo  p-10 my-10"`
  
              }
              width={`${screenSize <= 1024 ? "100%" : "80%"}`}
  
  
  
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
            >
              <ReactMarkdown className="highlight py-10 fuentesParrafo">
                {elemento.content}
              </ReactMarkdown>
              <ButtonView
                className={" backgroundSecondary m-0 manropeFont py-10"}
                link={`${lang}/${elemento?.btn?.url}`}
              >
                {conoceMas}
              </ButtonView>
            </BasicSection>
            <section className="centrar-elementob pt-5">
              <HeaderComponets
                classNameText={" colorSecondary chelseaFont font-responsive"}
                alignment={`${screenSize <= 1024 ? "center" : "end"}`}
                width="100%"
              >
                {elemento.title}
              </HeaderComponets>
              <CardBasic imgSrc={elemento.imgBasicContent?.data?.attributes.url} />
            </section>
          </TwoColumnGrid>)
          return [...acc, component];
        }
        return acc;
      }, []);
      setDynamicComponents(renderedComponents)
    };
    ComponentDynamicsRenderer(data)

  }, [data, lang]) 
  

  return (
    <Main titlePage={title}>
     <Head>
        <title> {data?.meta?.title}</title>
        <meta name="description" content={data?.meta?.description} />
        <meta name="keywords" content={data?.meta?.keywords} />
        <meta name="author" content={data?.meta?.authors} />
        <meta property="og:title" content={data?.meta?.ogTitle} />
        <meta property="og:description" content={data?.meta?.ogDescription} />
        <meta property="og:image" content={data?.meta?.ogImage?.data?.attributes?.url} />
        <meta property="og:url" content={data?.meta?.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        {dynamicComponents}
      </div>
    </Main>
  );
};

export default CentroDeRescate;
