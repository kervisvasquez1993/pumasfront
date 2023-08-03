import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoSections from "../UI/TwoSection";
import SectionReverse from "../Section/Basic/SectionReverse";
import Section from "../Section/Basic/Section";
import SliderGeneral from "../UI/Slider/SliderGeneral";
const NosotrosPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];

  return (
    <Main>
      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
          alignment="start"
        >
          Nuestro Santuario
        </HeaderComponets>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <SliderThree>
              {images.map((image) => {
                return (
                  <div key={image}>
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
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab,
                mollitia vero accusantium. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus sunt veniam quos. Nisi
                esse quae ullam ab, mollitia vero accusantium.
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                sunt veniam quos. Nisi esse quae ullam ab, mollitia vero
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus sunt veniam quos. Nisi esse quae ullam ab,
                mollitia vero accusantium. Lorem ipsum dolor sit amet
              </p>
            </BasicSection>
          </section>
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10"}
            >
              <p className="py-5">
                En este recorrido aprenderás sobre los animales silvestres que
                viven de forma permanente en el Santuario: conocerás su
                comportamiento, historia natural, ecología y descubrirás la
                razón por la que no pudieron ser devueltos a la naturaleza. El
                recorrido guiado no tiene ningún costo económico adicional, pero
                está sujeto a disponibilidad.
              </p>
              <p className="py-5 fontBold ">
                ¡Sera un gusto mostrarte nuestro santuario!
              </p>
              <ButtonView
                className={" backgroundSecondary m-0 manropeFont p-5"}
                link={""}
              >
                Reserva tu recorrido
              </ButtonView>
            </BasicSection>
            <HeaderComponets
              alignment="start"
              src="/images/fondo1.png"
              classNameText={"colorSecondary chelseaFont"}
              classNameSection={"centerElement"}
            >
              <img src="/images/logo_fundacion1.png" />
            </HeaderComponets>
          </section>
        </section>
        <section className="section OneImg">
          <img src="/images/video.png" />
        </section>
        <section className="container-section py-10 my-5">
          <section className="grid-2">
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10"}
            >
              <section>
                <HeaderComponets
                  alignment="start"
                  src="/images/fondo1.png"
                  classNameText={"colorSecondary chelseaFont"}
                  classNameSection={"centerElement"}
                >
                  MISIÓN
                </HeaderComponets>
                <p className="py-5">
                  En este recorrido aprenderás sobre los animales silvestres que
                  viven de forma permanente en el Santuario: conocerás su
                  comportamiento, historia natural, ecología y descubrirás la
                  razón por la que no pudieron ser devueltos a la naturaleza. El
                  recorrido guiado no tiene ningún costo económico adicional,
                  pero está sujeto a disponibilidad.
                </p>
              </section>
              <section>
                <HeaderComponets
                  alignment="start"
                  src="/images/fondo1.png"
                  classNameText={"colorSecondary chelseaFont"}
                  classNameSection={"centerElement"}
                >
                  VISIÓN
                </HeaderComponets>
                <p className="py-5">
                  En este recorrido aprenderás sobre los animales silvestres que
                  viven de forma permanente en el Santuario: conocerás su
                  comportamiento, historia natural, ecología y descubrirás la
                  razón por la que no pudieron ser devueltos a la naturaleza. El
                  recorrido guiado no tiene ningún costo económico adicional,
                  pero está sujeto a disponibilidad.
                </p>
              </section>
            </BasicSection>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              classNameContent={"fuentesParrafo py-10"}
            >
              <HeaderComponets
                alignment="start"
                src="/images/fondo1.png"
                classNameText={"colorSecondary chelseaFont"}
                classNameSection={"centerElement"}
              >
                OBJETIVOS
              </HeaderComponets>
              <p className="py-5">
                En este recorrido aprenderás sobre los animales silvestres que
                viven de forma permanente en el Santuario: conocerás su
                comportamiento, historia natural, ecología y descubrirás la
                razón por la que no pudieron ser devueltos a la naturaleza. El
                recorrido guiado no tiene ningún costo económico adicional, pero
                está sujeto a disponibilidad.
              </p>
              <p className="py-5">
                En este recorrido aprenderás sobre los animales silvestres que
                viven de forma permanente en el Santuario: conocerás su
                comportamiento, historia natural, ecología y descubrirás la
                razón por la que no pudieron ser devueltos a la naturaleza. El
                recorrido guiado no tiene ningún costo económico adicional, pero
                está sujeto a disponibilidad.
              </p>
            </BasicSection>
          </section>
        </section>
        <TwoSections
          title1={"Junta Directiva"}
          children1={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde py-10 my-10"
              }
              title=""
              imageSrc="/images/junta-directiva.png"
              content={
                <section>
                  <section className="py-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vel sint accusamus autem veritatis! Maiores architecto
                    harum, praesentium reprehenderit cumque assumenda modi
                    provident sit, quis, saepe possimus? Cumque nostrum rerum
                    fuga magni. Neque.
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
            />
          }
          title2={"Personal"}
          children2={
            <Section
              positionTitle={"start"}
              contentClassName="contentSectionEnd px-10 px-10"
              titleClassName={
                "program-title fuenteTitulo colorVerde py-10 my-10"
              }
              title=""
              imageSrc="/images/junta-directiva.png"
              content={
                <section>
                  <section className="py-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vel sint accusamus autem veritatis! Maiores architecto
                    harum, praesentium reprehenderit cumque assumenda modi
                    provident sit, quis, saepe possimus? Cumque nostrum rerum
                    fuga magni. Neque.
                  </section>
                  <h3 className="chelseaFont fontSize24">Miembros:</h3>
                  <ul>
                  <li className="puntos py-1">Miembro3</li>
                    <li className="puntos py-1">Miembro4</li>
                    <li className="puntos py-1">Miembro5</li>
                  </ul>
                </section>
              }
            />
          }
        />

        <SliderGeneral/>
      </div>
    </Main>
  );
};

export default NosotrosPage;
