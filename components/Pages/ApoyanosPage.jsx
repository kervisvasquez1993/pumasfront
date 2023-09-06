import React from "react";
import Main from "../../Layout/Main/Main";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import SliderThree from "../UI/Slider/SliderThree";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
const ApoyanosPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query
  const { componentDynamics } = data;
  const [firstElement, secondElement, threeElement, fourElement, quintoElmento, sextoElemento] = componentDynamics
  const imagenes = sextoElemento?.imagenWithContentBasic.map(elemento => {
    return elemento.img?.data[0]?.attributes.url

  })

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
          <section className="grid-2">
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
                alignment="start"
              >
                {secondElement.title}
              </HeaderComponets>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo py-10"}
              >
                <ReactMarkdown className="py-10">{secondElement.content}</ReactMarkdown>
                <ButtonView
                  className={" backgroundPrimary m-0 manropeFont p-5"}
                  link={`${lang}/${secondElement.btn.url}`}
                >
                  {secondElement.btn.label}
                </ButtonView>
              </BasicSection>
            </section>
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorSecondary chelseaFont pt-10 mt-10 "}
                alignment="start"
              >
                {threeElement.title}
              </HeaderComponets>
              <section className="grid-2">
                {elementDonar}

              </section>
            </section>
          </section>
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <section>
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={"colorVerde chelseaFont pt-10 mt-10 "}
                alignment="start"
              >
                {fourElement.Titulo}
              </HeaderComponets>
              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyleTwo"}
                title={""}
                classNameContent={"fuentesParrafo py-10"}
              >
                <h3 className="colorVerde chelseaFont">{quintoElmento.title}</h3>
                <ReactMarkdown className="py-10">{quintoElmento.content}</ReactMarkdown>
                <ButtonView
                  className={" backgroundVerde m-0 manropeFont p-5"}
                  link={quintoElmento.btn.url}
                >
                  {quintoElmento.btn.label}
                </ButtonView>
              </BasicSection>
            </section>
            <section></section>
          </section>
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
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
              <ButtonView
                className={" backgroundPrimary m-0 px-10 manropeFont py-10"}
                link={""}
              >
                Descargar PDF
              </ButtonView>
            </BasicSection>
          </section>
        </section>
      </div>
    </Main>
  );
};

export default ApoyanosPage;
