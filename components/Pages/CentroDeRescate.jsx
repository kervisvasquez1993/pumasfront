import React from "react";
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

const CentroDeRescate = ({ data }) => {
  const { componentDynamics } = data;
  const { screenSize } = useScreenSize()
  if (!componentDynamics) {
    return <Loader />;
  }
  const [firstSection, secondSection, thirdSection, fourthSection] = componentDynamics;
  console.log(firstSection, secondSection, thirdSection, fourthSection)
  const { imagenes } = firstSection
  const imgSlider = imagenes?.data?.map(img => {
    return {
      url: `${img.attributes.url}`
    }
  })
  const { imagenWithContentBasic } = thirdSection
  const { background, colorTitle, title, content } = fourthSection


  return (
    <Main titlePage={"Centro de Rescate"}>
      <div className="container">
        <section style={{ backgroundImage: `url("/images/background-rigth.png")`, backgroundPosition: "left", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <SlidetWithContent images={imgSlider} content={firstSection.Content} title={firstSection.title} />
          <HeaderComponets
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
            src="/images/fondo1.png"
            classNameText={"program-title fuenteTitulo colorPrimary py-10 my-10"}
            classNameSection={"centerElement"}
          >
            {secondSection.Titulo}
          </HeaderComponets>
        </section>
        <section style={{ backgroundImage: `url("/images/Vector5.png")`, backgroundSize: "contain", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
          <SectionReverse
            positionTitle={`${screenSize <= 1024 ? "center" : "start"}`}
            titleClassName={"program-title fuenteTitulo colorPrimary "}
            title={`${imagenWithContentBasic[0]?.label}`}
            imageSrc={
              imagenWithContentBasic[0]?.img.data[0]?.attributes?.url ||
              "URL_PREDETERMINADA"
            }
            contentClassName={"contentSectionReserveEnd"}
            content={`${imagenWithContentBasic[0]?.content}`}
          />
        <section style={{ backgroundImage: `url("/images/background-left.png")`, backgroundPosition: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <Section
            positionTitle={`${screenSize <= 1024 ? "center" : "end"}`}
            contentClassName="contentSectionEnd px-10 px-10"
            titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
            title={`${imagenWithContentBasic[1]?.label}`}
            imageSrc={`${imagenWithContentBasic[1]?.img.data[0]?.attributes.url}`}
            content={`${imagenWithContentBasic[1]?.content}`}
          />
          <SectionReverse
            positionTitle={`${screenSize <= 1024 ? "center" : "start"}`}
            titleClassName={"program-title fuenteTitulo colorPrimary py-10 my-10"}
            title={`${imagenWithContentBasic[2]?.label}`}
            imageSrc={`${imagenWithContentBasic[2]?.img.data[0]?.attributes.url}`}
            contentClassName={"contentSectionReserveEnd"}
            content={`${imagenWithContentBasic[2]?.content}`}
          />
          </section>
          <section style={{ backgroundImage: `url("/images/background-rigth.png")`, backgroundPosition: "left", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <Section
            positionTitle={`${screenSize <= 1024 ? "center" : "end"}`}
            contentClassName="contentSectionEnd px-10 px-10"
            titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
            title={`${imagenWithContentBasic[3]?.label}`}
            imageSrc={`${imagenWithContentBasic[4]?.img.data[0]?.attributes.url}`}
            content={`${imagenWithContentBasic[3]?.content}`}
          />

          <SectionReverse
            positionTitle={`${screenSize <= 1024 ? "center" : "start"}`}
            titleClassName={"program-title fuenteTitulo colorPrimary py-10 my-10"}
            title={`${imagenWithContentBasic[4]?.label}`}
            imageSrc={`${imagenWithContentBasic[4]?.img.data[0]?.attributes.url}`}
            contentClassName={"contentSectionReserveEnd"}
            content={`${imagenWithContentBasic[4]?.content}`}

          />
          </section>
          <TwoColumnGrid backgroundImage={fourthSection.background?.data?.attributes.url}>
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
              <ReactMarkdown className="py-10">
                {fourthSection.content}
              </ReactMarkdown>
              <ButtonView
                className={" backgroundSecondary m-0 manropeFont py-10"}
                link={""}
              >
                Conoce Más
              </ButtonView>
            </BasicSection>
            <section className="centrar-elemento">
              <HeaderComponets
                classNameText={" colorSecondary chelseaFont"}
                alignment={`${screenSize <= 1024 ? "center" : "end"}`}
                width="100%"
              >
                {fourthSection.title}
              </HeaderComponets>
              <CardBasic imgSrc={fourthSection.imgBasicContent?.data?.attributes.url} />
            </section>
          </TwoColumnGrid>
        </section>
      </div>
    </Main>
  );
};

export default CentroDeRescate;
