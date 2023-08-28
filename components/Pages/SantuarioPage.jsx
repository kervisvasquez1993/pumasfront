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

const SantuarioPage = () => {

  const { dynamicsComponent } = usePages();
  if (!dynamicsComponent) {
    return "cargando...";
  }
  const { modeloList } = useModelo();
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

  console.log(dynamicsComponent)
  const [firstElement, secondElement, thirdElement, fourthElement, fifthElement] = dynamicsComponent
  const { imagenes } = secondElement
  const imgSlider = imagenes.data.map(img => {
    return {
      url: `http://localhost:1337${img.attributes.url}`
    }
  })
  console.log(fourthElement)
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
              className={" "}
            >
              <img
                src={srcModelo}
                key={srcModelo}
                alt={srcModelo}
                data-tooltip-id="my-tooltip" data-tooltip-content={models.nombre}
                onClick={() => hearlessChange(models)}
              />
              <Tooltip id="my-tooltip" />
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
          {firstElement.Titulo}
        </HeaderComponets>


        <section className="container-section py-10 my-5">
          <SlidetWithContent images={imgSlider} content={secondElement.Content} title={secondElement.title} />

        </section>
        <TwoColumnGrid backgroundImage={"http://localhost:1337" + thirdElement.background.data.attributes.url}>
          <HeaderComponets
            alignment="center"
            src="/images/fondo1.png"
            classNameText={"colorSecondary chelseaFont"}
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
            width="60%"
            classNameContent={
              "fuentesParrafo align-vertical-center-horizontal-start py-10 my-10"
            }
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
        <div className="container-edu ">
          <div>
            <h3 className="program-title fuenteTitulo colorVerde">
              {fourthElement.title}
            </h3>
            <ReactMarkdown className="fuentesParrafo py-10 my-10 width-30">{fourthElement.content}</ReactMarkdown>
          </div>

          <div className="icons-container py-10 my-10">

            {fourthElement.imagenWithContentBasic.map(element => {
              return (
                <div className="icon-flex-2" key={element.id}>
                  <div className="icons__imagen">
                    <img src={"http://localhost:1337" + element.img.data[0].attributes.url} alt="imagen santuario" />
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
