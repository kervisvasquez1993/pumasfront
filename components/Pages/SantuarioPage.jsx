// SantuarioPage.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Tooltip } from 'react-tooltip'
import Main from "../../Layout/Main/Main";
import BasicSection from "../Section/Basic/BasicSection";
import HeaderComponets from "../UI/HeaderComponents/HeaderComponets";
import ButtonView from "../../views/ButtonView";
import TwoColumnGrid from "../Section/Basic/TwoColumnGrid";
import MapWithBackground from "../UI/MapWithBackground";
import useModelo from "../../hooks/useModelo";
import CanvasElement from "../UI/CanvasElement";
import Modal from "../UI/Modal";

import usePages from "../../hooks/usePages";
import SlidetWithContent from "../Section/Slider/SliderWithContent";

import useScreenSize from "../../hooks/useScreenSize";
import Loader from "../UI/Loader";


const SantuarioPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query
  const { componentDynamics } = data;
  const { modeloList } = useModelo();
  const { screenSize } = useScreenSize()

  if (!data) {
    return <Loader />;
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

  const ComponentDynamicsRenderer = ({ componentDynamics }) => {

    const renderedComponents = componentDynamics.reduce((acc, elemento, index) => {

      if (elemento?.nameComponent === "titleBasic") {
        const component = (<HeaderComponets
          src="/images/fondo1.png"
          classNameText={"font-responsive colorPrimary chelseaFont pt-10 mt-10 "}
          alignment={`${screenSize <= 1024 ? "center" : "start"}`}
        >
          {elemento.Titulo}
        </HeaderComponets>)
        return [...acc, component];
      }
      if (elemento?.typeSlider === "slider_img_destacada") {
        const imgSlider = elemento?.imagenes?.data.map(img => {
          return {
            url: `${img?.attributes?.url}`
          }
        })

        const component = (<section className="container-section lg:p-10 lg:m-5"><SlidetWithContent images={imgSlider} content={elemento.Content} title={elemento.title} /></section>)
        return [...acc, component];
      }
      if (elemento?.typeSection === "section3") {

        const component = (<TwoColumnGrid backgroundImage={elemento.background?.data?.attributes.url}>
          <HeaderComponets
            alignment="center"
            src="/images/fondo1.png"
            classNameText={"font-responsive colorSecondary chelseaFont lg:px-10 mx-10"}
            classNameSection={"centerElement"}
          >
            {elemento.title}
          </HeaderComponets>
          <BasicSection
            classNameTitle={""}
            classNameWrapper={"setionStyleTwo"}
            title={""}
            alignItems={"center"}
            justifyContent={"center"}
            width={`${screenSize <= 1024 ? "100%" : "75%"}`}
            classNameContent={`${screenSize <= 1024 ? "align-vertical-center-horizontal-center" : "align-vertical-center-horizontal-start"} fuentesParrafo  p-5 lg:p-10 lg:m-10`}

          >
            <ReactMarkdown className="py-10">{elemento.content}</ReactMarkdown>
            <ButtonView
              className={" backgroundSecondary m-0 manropeFont p-5"}
              link={`${lang}/${elemento?.btn?.url}`}
            >
              {elemento?.btn?.label}
            </ButtonView>
          </BasicSection>
        </TwoColumnGrid>
        )
        return [...acc, component];
      }
      if (elemento?.typeSection === "section7") {
        const component = (<>
          <HeaderComponets
            alignment="center"
            src="/images/fondo1.png"
            classNameText={"program-title fuenteTitulo colorVerde p-10 m-10 font-responsive"}
            classNameSection={"centerElement"}
          >
            {elemento.title}

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
            <ReactMarkdown className="py-10">{elemento?.content}</ReactMarkdown>
          </BasicSection>
          <div className="container-sant ">

          <div className="icons-container sm:py-10 sm:my-10">
            {elemento.imagenWithContentBasic.map((element, index) => {
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
                    <ReactMarkdown className="fuentesParrafo p-5">
                      {element.content}
                    </ReactMarkdown>
                  </div>
                </div>)
            })}
          </div>
        </div>
          </>)
        return [...acc, component];
      }
      return acc;
    }, []);
    return <div>{renderedComponents}</div>;
  };
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
                <CanvasElement key={id} x={x} y={y} width={withModels}>
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

      <div className="container">
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
        {ComponentDynamicsRenderer(data)}
      </div>
    </Main>
  );
};

export default SantuarioPage;
