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
const NosotrosPage = ({ data }) => {

  const router = useRouter();
  const { slug, lang } = router.query
  const { componentDynamics } = data;

  const [primerElemet, secundarioElement, tercerElment, cuartoElement, quintoElemet, sextoElement, septimoElemento] = componentDynamics;
  console.log(septimoElemento, "secundarioElement");
  const sliderImagenes = secundarioElement?.imagenes.data.map(element => {
    const url = element.attributes.url
    return `http://localhost:1337${url}`
  })
  const abousUs = quintoElemet.imagenWithContentBasic.map((element, index) => {
    return (<section className="w-50 p-5" key={index}><HeaderComponets
      alignment="start"
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
      imageSrc={`http://localhost:1337${element.img.data[0].attributes.url}`}
      content={
        <ReactMarkdown>{element.content}</ReactMarkdown>
      }
    />)
  })


  const slides = [

    <Section
      positionTitle={"start"}
      contentClassName="contentSectionEnd px-10 px-10"
      titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
      title=""
      imageSrc="/images/junta-directiva.png"
      content={
        <section>
          <section className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sint
            accusamus autem veritatis! Maiores architecto harum, praesentium
            reprehenderit cumque assumenda modi provident sit, quis, saepe
            possimus? Cumque nostrum rerum fuga magni. Neque.
          </section>
          <h3 className="chelseaFont fontSize24">Miembros:</h3>
          <ul>
            <li className="puntos py-1">Miembro1</li>
            <li className="puntos py-1">Miembro2</li>
            <li className="puntos py-1">Miembro3</li>
            <li className="puntos py-1">Miembro4</li>
            <li className="puntos py-1">Miembro5</li>
          </ul>
        </section>
      }
    />,
    <Section
      positionTitle={"start"}
      contentClassName="contentSectionEnd px-10 px-10"
      titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
      title=""
      imageSrc="/images/junta-directiva.png"
      content={
        <section>
          <section className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sint
            accusamus autem veritatis! Maiores architecto harum, praesentium
            reprehenderit cumque assumenda modi provident sit, quis, saepe
            possimus? Cumque nostrum rerum fuga magni. Neque.
          </section>
          <h3 className="chelseaFont fontSize24">Miembros:</h3>
          <ul>
            <li className="puntos py-1">Miembro1</li>
            <li className="puntos py-1">Miembro2</li>
            <li className="puntos py-1">Miembro3</li>
            <li className="puntos py-1">Miembro4</li>
            <li className="puntos py-1">Miembro5</li>
          </ul>
        </section>
      }
    />,
    <Section
      positionTitle={"start"}
      contentClassName="contentSectionEnd px-10 px-10"
      titleClassName={"program-title fuenteTitulo colorVerde py-10 my-10"}
      title=""
      imageSrc="/images/junta-directiva.png"
      content={
        <section>
          <section className="py-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sint
            accusamus autem veritatis! Maiores architecto harum, praesentium
            reprehenderit cumque assumenda modi provident sit, quis, saepe
            possimus? Cumque nostrum rerum fuga magni. Neque.
          </section>
          <h3 className="chelseaFont fontSize24">Miembros:</h3>
          <ul>
            <li className="puntos py-1">Miembro1</li>
            <li className="puntos py-1">Miembro2</li>
            <li className="puntos py-1">Miembro3</li>
            <li className="puntos py-1">Miembro4</li>
            <li className="puntos py-1">Miembro5</li>
          </ul>
        </section>
      }
    />,
  ];

  return (
    <Main titlePage={"Nosotros"}>
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
          alignment="start"
        >
          {primerElemet.Titulo}
        </HeaderComponets>
        <section className="container-section py-10 my-5">
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
              classNameContent={"fuentesParrafo py-10"}
            >
              <ReactMarkdown className="py-10">{secundarioElement.Content}</ReactMarkdown>
            </BasicSection>
          </section>
        </section>
        <TwoColumnGrid backgroundImage={`http://localhost:1337${tercerElment.background.data.attributes.url}`}>
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            widthContent="50%"
            alignItems={"center"}
            justifyContent={"center"}
            classNameContent={"fuentesParrafo py-10"}
          >
            <ReactMarkdown className="py-10">{tercerElment.content}</ReactMarkdown>
            <ButtonView
              className={" backgroundSecondary m-0 manropeFont p-5"}
              link={`${lang}/${tercerElment.btn.url}`}
            >
              {tercerElment.btn.label}
            </ButtonView>
          </BasicSection>

          <HeaderComponets
            alignment="start"
            src="/images/fondo1.png"
            classNameText={"colorSecondary chelseaFont"}
            classNameSection={"center"}
          >
            <img src={`http://localhost:1337${tercerElment.imgBasicContent.data.attributes.url}`} />
          </HeaderComponets>
        </TwoColumnGrid>
        <section className="section OneImg">
          <img src={`http://localhost:1337${cuartoElement.img.data[0].attributes.url}`} />
        </section>
        <section className="container-section py-10 my-5">

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
          backgroundImage={`http://localhost:1337${sextoElement.background.data.attributes.url}`}
          title1={sextoElement.imagenWithContentBasic[0].label}
          children1={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde px-10 m-10"
              }
              title=""
              imageSrc={`http://localhost:1337${sextoElement.imagenWithContentBasic[0].img.data[0].attributes.url}`}
              content={

                <ReactMarkdown>{sextoElement.imagenWithContentBasic[0].content}</ReactMarkdown>

              }
            />
          }
          title2={sextoElement.imagenWithContentBasic[1].label}
          children2={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde py-10 my-10"
              }
              title=""
              imageSrc={`http://localhost:1337${sextoElement.imagenWithContentBasic[1].img.data[0].attributes.url}`}
              content={
                <ReactMarkdown>{sextoElement.imagenWithContentBasic[1].content}</ReactMarkdown>
              }
            />
          }
        />

        <section className="container-section py-10 my-5">
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorVerde chelseaFont pt-10 mt-10 "}
            alignment="start"
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
