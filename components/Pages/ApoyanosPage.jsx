import React from "react";
import Main from "../../Layout/Main/Main";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import SliderThree from "../UI/Slider/SliderThree";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import useScreenSize from "../../hooks/useScreenSize";
import Link from "next/link";
import Head from "next/head";
const ApoyanosPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query
  const { screenSize } = useScreenSize()
  const { componentDynamics } = data;
  const secction1 = componentDynamics.find(element => element.typeSection == "section1")
  const secction2 = componentDynamics.find(element => element.typeSection == "section2")
  const section3 = componentDynamics.find(element => element.typeSection == "section3")
  const section4 = componentDynamics.find(element => element.typeSection == "section4")
  const imagenes = section4?.imagenWithContentBasic.map(elemento => {
    return elemento.img?.data[0]?.attributes.url
  })
  const elementDonar = secction2?.imagenWithContentBasic?.map((element, index) => {
    return (<section key={index}>
      <h3 className="colorSecondary chelseaFont">
        {element?.label}
      </h3>

      <section>
        <ReactMarkdown>{element?.content}</ReactMarkdown>
      </section>
    </section>)
  })
  return (
    <Main titlePage={data.title} data={data}>
      <div className="container">
        <section className="container-section py-10 my-5">
          <section className={`${screenSize >= 1024 ? "grid-2" : ""}`}>

            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 font-responsive"}
                alignment={`${screenSize <= 1024 ? "center" : "start"}`}
              >
                {secction1.title}
              </HeaderComponets>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                alignItems="center"
                classNameContent={"fuentesParrafo px-10 mx-10 saltoLinea2"}
              >
                <ReactMarkdown className="py-10">{secction1?.content}</ReactMarkdown>
                <ButtonView
                  blank={true}
                  className={" backgroundPrimary m-0 manropeFont p-5"}
                  link={`${lang}/${secction1?.btn?.url}`}
                >
                  {secction1?.btn?.label}
                </ButtonView>
              </BasicSection>
            </section>
            <section className="px-5">
              <HeaderComponets
                src=""
                classNameText={"font-responsive colorSecondary chelseaFont pt-10 mt-10 "}
                alignment={`${screenSize <= 1024 ? "center" : "center"}`}
              >
                {secction2?.title}
              </HeaderComponets>
              <section className="grid-2 px-5 saltoLinea2">
                {elementDonar}
              </section>
            </section>
          </section>
        </section>
        <section className="container-section p-10 m-5">
          {/* content 2  */}
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorVerde chelseaFont font-responsive"}
            classNameSection={"py-5 my-5"}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            {section3?.title}
          </HeaderComponets>
          <section className={`${screenSize >= 1024 ? "grid-2" : ""}`}>
            <section>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo"}
              >

                

                <ReactMarkdown className="pb-5">{section3?.content}</ReactMarkdown>
                {/* amazon */}
                <div style={{display : "flex", flexWrap : "wrap"}}>
                {
                  section3?.imagenWithContentBasic?.map((element, index) => {
                    return (
                    <Link
                      className={" backgroundVerde m-2 manropeFont p-5 btnPrimary py-2 "}
                      href={element?.url}
                      target="_blank"
                      key={index}
                    >
                      {element?.label}
                    </Link>
                    )
                  })
                }
                </div>
                
              </BasicSection>
            </section>
            <section></section>
          </section>
        </section>
        <section className="container-section py-10 m-5">
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 font-responsive"}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            {section4.title}
          </HeaderComponets>
          <section className="grid-2 lg:px-10 mx-10">
            <SliderThree>
              {imagenes.map((image, index) => {

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
              classNameContent={"fuentesParrafo py-10"}
            >
              <ReactMarkdown className="py-10 saltoLinea2">{section4?.content}</ReactMarkdown>
              




            </BasicSection>
          </section>
        </section>
      </div>
    </Main>
  );
};

export default ApoyanosPage;

