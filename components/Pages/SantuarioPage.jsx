// SantuarioPage.js
import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import MapWithBackground from "../UI/MapWithBackground";
import useModelo from "../../hooks/useModelo";
import CanvasElement from "../UI/CanvasElement";
import Modal from "../UI/Modal";
import { Tooltip } from 'react-tooltip'
import usePages from "../../hooks/usePages";
import SlidetWithContent from "../Section/Slider/SliderWithContent";
import ReactMarkdown from "react-markdown";
import useScreenSize from "../../hooks/useScreenSize";

const SantuarioPage = ({ data }) => {

  const { componentDynamics } = data;
  const { modeloList } = useModelo();
  const { screenSize } = useScreenSize()

  if (!data) {
    return "cargando...";
  }

  const [stateModal, setStateModal] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const hearlessChange = (data) => {
    setStateModal(data);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setStateModal(null);
    setOpenModal(false);
  };

  const [firstElement, secondElement, thirdElement, fourthElement] = componentDynamics
  const { imagenes } = secondElement
  const imgSlider = imagenes?.data.map(img => {
    return {
      url: `${img?.attributes?.url}`
    }
  })

  return (
    <Main titlePage={"Santuario"}>
      <section>
        <MapWithBackground backgroundImage={"/images/mapa.jpg"}>
          {modeloList
            ?.slice() // Hacemos una copia del array para no modificar el original
            .sort((a, b) => a.id - b.id)
            .map((models) => {
              const { ubicacionX, ubicacionY, srcModelo, id } = models;
              const x = parseInt(ubicacionX);
              const y = parseInt(ubicacionY);
              const withModels = models.componente ? "100px" : "50px";
              return (
                <CanvasElement key={id} x={x} y={y} className={" "} width={withModels}>
                  <img
                    src={srcModelo}
                    key={id}
                    alt={srcModelo}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={models.nombre}
                    onClick={() => models.componente && hearlessChange(models)}
                  />
                  <Tooltip id="my-tooltip" />
                </CanvasElement>
              );
            })}
        </MapWithBackground>
      </section>
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
        <section style={{ backgroundImage: `url("/images/background-left.png")`, backgroundPosition: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <HeaderComponets
            src="/images/fondo1.png"
            classNameText={"colorPrimary chelseaFont pt-10 mt-10 "}
            alignment={`${screenSize <= 1024 ? "center" : "start"}`}
          >
            {firstElement.Titulo}
          </HeaderComponets>


          <section className="container-section p-10 m-5">
            <SlidetWithContent images={imgSlider} content={secondElement.Content} title={secondElement.title} />
          </section>
        </section>
        <section style={{ backgroundImage: `url("/images/background-rigth.png")`, backgroundPosition: "left", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <TwoColumnGrid backgroundImage={thirdElement.background?.data?.attributes.url}>
            <HeaderComponets
              alignment="center"
              src="/images/fondo1.png"
              classNameText={"colorSecondary chelseaFont px-10 mx-10"}
              classNameSection={"centerElement"}
            >
              {thirdElement.title}
            </HeaderComponets>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              alignItems={"center"}
              justifyContent={"center"}
              width={`${screenSize <= 1024 ? "100%" : "75%"}`}
              classNameContent={`${screenSize <= 1024 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start"} fuentesParrafo  p-10 m-10`}

            >
              <ReactMarkdown className="py-10">{thirdElement.content}</ReactMarkdown>
              <ButtonView
                className={" backgroundSecondary m-0 manropeFont p-5"}
                link={""}
              >
                Reserva tu recorrido
              </ButtonView>
            </BasicSection>
          </TwoColumnGrid>
        
        
       
            <HeaderComponets
              alignment="center"
              src="/images/fondo1.png"
              classNameText={"program-title fuenteTitulo colorVerde p-10 m-10"}
              classNameSection={"centerElement"}
            >
              {fourthElement.title}

            </HeaderComponets>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo"}
              title={""}
              alignItems={"center"}
              justifyContent={"center"}
              width={`${screenSize <= 1024 ? "100%" : "40%"}`}
              classNameContent={
                "fuentesParrafo align-vertical-center-horizontal-start px-10 mx-10"
              }
            >
              <ReactMarkdown className="py-10">{fourthElement?.content}</ReactMarkdown>
            </BasicSection>

            </section>
          <div className="container-edu ">

          <div className="icons-container py-10 my-10">

            {fourthElement.imagenWithContentBasic.map((element, index) => {

              return (
                <div className="icon-flex-2" key={index}>
                  <div className="icons__imagen">
                    {element.img?.data[0]?.attributes?.url && (
                      <img
                        src={element.img.data[0].attributes.url}
                        alt="imagen santuario"
                      />
                    )}
                  </div>
                  <div className="icons_text">
                    <ReactMarkdown className="fuentesParrafo ">
                      {element.content}
                    </ReactMarkdown>
                  </div>
                </div>)
            })}



          </div>
        </div>
      </div>
    </Main>
  );
};

export default SantuarioPage;
