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
const ApoyanosPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query
  const { screenSize } = useScreenSize()
  const { componentDynamics } = data;
  const [firstElement, secondElement, threeElement, fourElement, quintoElmento, sextoElemento] = componentDynamics
  const imagenes = sextoElemento?.imagenWithContentBasic.map(elemento => {
    return elemento.img?.data[0]?.attributes.url

  })

  // console.log(sextoElemento, "sextoElemento")

  const elementDonar = threeElement.imagenWithContentBasic?.map((element, index) => {

    return (<section key={index}>
      <h3 className="colorSecondary chelseaFont">
        {element.label}
      </h3>

      <section>
        <ReactMarkdown>{element.content}</ReactMarkdown>
      </section>
    </section>)
  })

  return (
    <Main titlePage={data.title}>
      <div className="container">
        <section className="container-section py-10 my-5">
          <section className={ `${screenSize >= 1024 ? "grid-2" : ""}` }>
           
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 font-responsive"}
                alignment={`${screenSize <= 1024 ? "center" : "start"}`}
              >
                {secondElement.title}
              </HeaderComponets>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                alignItems="center"
                classNameContent={"fuentesParrafo px-10 mx-10"}
              >
                <ReactMarkdown className="py-10">{secondElement.content}</ReactMarkdown>
                <ButtonView
                  className={" backgroundPrimary m-0 manropeFont p-5"}
                  link={`${lang}/${secondElement?.btn?.url}`}
                >
                  {secondElement.btn.label}
                </ButtonView>
              </BasicSection>
            </section>
            <section className="px-5">
              <HeaderComponets
                src=""
                classNameText={"font-responsive colorSecondary chelseaFont pt-10 mt-10 "}
                alignment={`${screenSize <= 1024 ? "center" : "center"}`}
              >
                {threeElement.title}
              </HeaderComponets>
              <section className="grid-2 px-5">
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
            {sextoElemento.title}
          </HeaderComponets>
          <section className={ `${screenSize >= 1024 ? "grid-2" : ""}` }>
            <section>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo py-10"}
              >
                <div className="header-apoyanos">
                  <img src="/images/amazon.png" alt="" />
                <h3 className="colorVerde chelseaFont">{quintoElmento.title}</h3>
                </div>
               
                <ReactMarkdown className="py-10">{quintoElmento.content}</ReactMarkdown>
                {/* amazon */}
                <Link
                  className={" backgroundVerde m-0 manropeFont p-5 btnPrimary py-2 "}
                  href={quintoElmento.btn.url}
                >
                  {quintoElmento.btn.label}
                </Link>
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
            {secondElement.title}
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
              <ReactMarkdown className="py-10">{sextoElemento.content}</ReactMarkdown>
              <Link className={`backgroundPrimary m-0 px-10 manropeFont py-10 btnPrimary py-2  `} href={`${sextoElemento.btn.url}`}>
                   {sextoElemento?.btn?.label}
              </Link>
               
               
              
             
            </BasicSection>
          </section>
        </section>
      </div>
    </Main>
  );
};

export default ApoyanosPage;
