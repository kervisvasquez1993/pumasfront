// SantuarioPage.js
import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import SanctuarySection from "../Section/Santuario/SanctuarySection";
import RouteSection from "../Section/Santuario/RouteSection";
import RulesSection from "../Section/Santuario/RulesSection";
import SliderThree from "../UI/Slider/SliderThree";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import MapWithBackground from "../UI/MapWithBackground";
import useModelo from "../../hooks/useModelo";
import CanvasElement from "../UI/CanvasElement";
import Modal from "../UI/Modal";
import CanvasModel from "../Canvas/CanvasModel";
import { Puma } from "../Models/Puma";
import { Chucuyo } from "../Models/Chucuyo";
import { MonoCaraBlanca } from "../Models/MonoCaraBlanca";
import { LoroCopeteNegro } from "../Models/LoroCopeteNegro";
import { LoroCopeteRojo } from "../Models/LoroCopeteRoja";
import { MonoArana } from "../Models/MonoArana";
import { LoroNucaAmarilla } from "../Models/LoroNucaAmarilla";
import { Jaguar } from "../Models/Jaguar";
import { Manigordo } from "../Models/Manigordo";
import { Yagurandi } from "../Models/Yagurandi";
import { LapaRoja } from "../Models/LapaRoja";
import { TortugaRoja } from "../Models/TortugaRoja";
import { TortugaNegra } from "../Models/TortigaNegra";
import { TortugaResbaladora } from "../Models/TortugaResbaladora";
import { TortugaCandado } from "../Models/TortugaCandado";
import { Grison } from "../Models/Grison";
import { Saino } from "../Models/Saino";
import { OsoPerezosoDeDedos } from "../Models/OsoPerezosoDeDedos";

const SantuarioPage = () => {
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];
  const { modeloList } = useModelo();
  const [stateModal, setStateModal] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const hearlessChange = (data) => {
    setStateModal(data);
    setOpenModal(true);
    console.log(data);
  };

  const handleCloseModal = () => {
    setStateModal(null);
    setOpenModal(false);
  };

  return (
    <Main titlePage={"Santuario"}>
      <MapWithBackground backgroundImage={"/images/mapa.jpg"}>
        {modeloList?.map((models) => {
          const { ubicacionX, ubicacionY, srcModelo } = models;
          const x = parseInt(ubicacionX);
          const y = parseInt(ubicacionY);
          return (
            <CanvasElement
              key={srcModelo}
              x={x}
              y={y}
              className={"sizeModelsSantuario"}
            >
              <img
                src={srcModelo}
                alt=""
                onClick={() => hearlessChange(models)}
              />
            </CanvasElement>
          );
        })}
      </MapWithBackground>
      <Modal
        showModal={openModal}
        setShowModal={setOpenModal}
        data={stateModal}
        title={"Model Information"}
        body={
          <p className="my-4 text-slate-500 text-lg leading-relaxed">
            {stateModal ? stateModal.srcModelo : ""}
          </p>
        }
      />

      <div className="container">
        <HeaderComponets
          src="/images/fondo1.png"
          classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
          alignment="start"
        >
          Nuestro Santuario
        </HeaderComponets>
        {/* MODELO DE PUMAS COMO PRUEBA */}
        <section className="container-section py-10 my-5">
          <CanvasModel
            intensity={1.6}
            positionX={4}
            positionY={4}
            positionZ={10}
          >
            <Puma />
          </CanvasModel>
          <CanvasModel
            intensity={15.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <Chucuyo />
          </CanvasModel>
          <CanvasModel
            intensity={3.6}
            positionX={4}
            positionY={4}
            positionZ={60}
          >
            <MonoCaraBlanca />
          </CanvasModel>
          <CanvasModel
            intensity={3.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <LoroCopeteNegro/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <LoroCopeteRojo/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={50}
          >
            <MonoArana/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <LoroNucaAmarilla/>
          </CanvasModel>
          <CanvasModel
            intensity={10.6}
            positionX={4}
            positionY={4}
            positionZ={10}
          >
            <Manigordo/>
          </CanvasModel>
          <CanvasModel
            intensity={10.6}
            positionX={4}
            positionY={4}
            positionZ={10}
          >
            <Yagurandi/>
          </CanvasModel>
          <CanvasModel
            intensity={5.6}
            positionX={4}
            positionY={4}
            positionZ={5}
          >
            <LapaRoja/>
          </CanvasModel>
          <CanvasModel
            intensity={5.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <TortugaRoja/>
          </CanvasModel>
          <CanvasModel
            intensity={5.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <TortugaNegra/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <TortugaResbaladora/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <TortugaCandado/>
          </CanvasModel>
          <CanvasModel
            intensity={10.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <Grison/>
          </CanvasModel>
          <CanvasModel
            intensity={10.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <Saino/>
          </CanvasModel>
          <CanvasModel
            intensity={2.6}
            positionX={4}
            positionY={4}
            positionZ={1}
          >
            <OsoPerezosoDeDedos/>
          </CanvasModel>
        </section>
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
            classNameContent={
              "fuentesParrafo align-vertical-center-horizontal-start py-10 my-10"
            }
          >
            <p className="py-5">
              En este recorrido aprenderás sobre los animales silvestres que
              viven de forma permanente en el Santuario: conocerás su
              comportamiento, historia natural, ecología y descubrirás la razón
              por la que no pudieron ser devueltos a la naturaleza. El recorrido
              guiado no tiene ningún costo económico adicional, pero está sujeto
              a disponibilidad.
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
