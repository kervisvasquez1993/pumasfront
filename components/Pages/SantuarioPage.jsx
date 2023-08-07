// SantuarioPage.js
import React from "react";
import Main from "../../Layout/Main/Main";
import SanctuarySection from "../Section/Santuario/SanctuarySection";
import RouteSection from "../Section/Santuario/RouteSection";
import RulesSection from "../Section/Santuario/RulesSection";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";

const SantuarioPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  return (
    <Main titlePage={"Santuario"}>
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
        <TwoColumnGrid backgroundImage="/images/mask-background.png">
            <HeaderComponets
              alignment="center"
              src="/images/fondo1.png"
              classNameText={"colorSecondary chelseaFont"}
              classNameSection={"centerElement"}
            >
              Reserva tu recorrido Guiado
            </HeaderComponets>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              alignItems={"center"}
              justifyContent={"center"}
              width="60%"
              classNameContent={"fuentesParrafo align-vertical-center-horizontal-start py-10 my-10"}
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
            </TwoColumnGrid>
        <div className="container-edu ">
          <div>
            <h3 className="program-title fuenteTitulo colorVerde">
              REGLAS Y RECOMENDACIONES
            </h3>
            <p className="fuentesParrafo py-10 my-10 width-30">
              Si vas a venir de visita a nuestro Santuario, acá te mostramos
              nuestras reglas. Además, cuando nos visités te recomendamos traer
              bloqueador, repelente e hidratación.
            </p>
          </div>

          <div className="icons-container py-10 my-10">
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/hand1.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  No tocar, no molestar ni alimentar a los animales.
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/pallet.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  Respetar las barandas de seguridad
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/bolt.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  No usar flash fotos cuando tomes fotos o videos
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/paw.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  No ingresar con mascotas a instalaciones
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/smoking.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  No usar flash fotos cuando tomes fotos o videos
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/burger.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  No usar flash fotos cuando tomes fotos o videos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SantuarioPage;
