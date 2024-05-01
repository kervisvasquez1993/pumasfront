// SantuarioPage.js
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Tooltip } from "react-tooltip";
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
import { getModelGQ } from "../../apis/ApiBackend";
import Head from "next/head";

const SantuarioPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query;
  const [dynamicComponents, setDynamicComponents] = useState([]);
  const { componentDynamics, title } = data;

  const { modeloList, hearlessChangInfo } = useModelo();
  const [isLoading, setIsLoading] = useState(false);
  const { screenSize } = useScreenSize();

  const currentVersion = 2;

  const storeData = (lang, data) => {
    if (lang) {
      const dataToStore = {
        data,
        timestamp: new Date().getTime(),
        version: currentVersion,
      };
      localStorage.setItem(`modelData_${lang}`, JSON.stringify(dataToStore));
    }
  };

  const retrieveData = (lang) => {
    if (lang) {
      const storedData = localStorage.getItem(`modelData_${lang}`);
      if (storedData) {
        const { data, timestamp, version } = JSON.parse(storedData);
        const tenMinutes = 8 * 60 * 60 * 1000;
        if (
          new Date().getTime() - timestamp < tenMinutes &&
          version === currentVersion
        ) {
          return data;
        }
      }
    }
    return null;
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let data = retrieveData(lang);
      if (!data) {
        const response = await getModelGQ(lang);
        data = response?.data?.modelos;
        storeData(lang, data);
      }
      hearlessChangInfo(data);
      setIsLoading(false);
    };

    fetchData();
  }, [lang]);

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
  if (!componentDynamics) {
    return <Loader />;
  }

  useLayoutEffect(() => {
    const ComponentDynamicsRenderer = ({ componentDynamics }) => {
      const renderedComponents = componentDynamics.reduce(
        (acc, elemento, index) => {
          if (elemento?.nameComponent === "titleBasic") {
            const component = (
              <HeaderComponets
                src="/images/fondo1.png"
                classNameText={
                  "font-responsive colorPrimary chelseaFont pt-10 mt-10 "
                }
                alignment={`${screenSize <= 1024 ? "center" : "start"}`}
              >
                {elemento.Titulo}
              </HeaderComponets>
            );
            return [...acc, component];
          }
          if (elemento?.typeSlider === "slider_img_destacada") {
            const imgSlider = elemento?.imagenes?.data.map((img) => {
              return {
                url: `${img?.attributes?.url}`,
              };
            });

            const component = (
              <section className="container-section lg:p-10 lg:m-5">
                <SlidetWithContent
                  images={imgSlider}
                  content={elemento.Content}
                  title={elemento.title}
                />
              </section>
            );
            return [...acc, component];
          }
          if (elemento?.typeSection === "section3") {
            const component = (
              <TwoColumnGrid
                backgroundImage={elemento.background?.data?.attributes.url}
              >
                <HeaderComponets
                  alignment="center"
                  src="/images/fondo1.png"
                  classNameText={
                    "font-responsive colorSecondary chelseaFont lg:px-10 mx-10"
                  }
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
                  classNameContent={`${
                    screenSize <= 1024
                      ? "align-vertical-center-horizontal-center"
                      : "align-vertical-center-horizontal-start"
                  } fuentesParrafo  p-5 lg:p-10 lg:m-10`}
                >
                  <ReactMarkdown className="py-10">
                    {elemento.content}
                  </ReactMarkdown>
                  <ButtonView
                    blank={true}
                    className={" backgroundSecondary m-0 manropeFont p-5"}
                    link={`${lang}/${elemento?.btn?.url}`}
                  >
                    {elemento?.btn?.label}
                  </ButtonView>
                </BasicSection>
              </TwoColumnGrid>
            );
            return [...acc, component];
          }
          if (elemento?.typeSection === "section7") {
            const component = (
              <>
                <HeaderComponets
                  alignment="center"
                  src="/images/fondo1.png"
                  classNameText={
                    "program-title fuenteTitulo colorVerde p-10 m-10 font-responsive"
                  }
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
                  <ReactMarkdown className="py-10">
                    {elemento?.content}
                  </ReactMarkdown>
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
                            <ReactMarkdown className="fuentesParrafo icon-w">
                              {element.content}
                            </ReactMarkdown>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
            return [...acc, component];
          }
          return acc;
        },
        []
      );
      setDynamicComponents(renderedComponents);
    };
    ComponentDynamicsRenderer(data);
  }, [data, lang]);
  // console.log(modeloList, "modeloList");
  return (
    <Main titlePage={title}>
      <Head>
        <title> {data?.meta?.title}</title>
        <meta name="description" content={data?.meta?.description} />
        <meta name="keywords" content={data?.meta?.keywords} />
        <meta name="author" content={data?.meta?.authors} />
        <meta property="og:title" content={data?.meta?.ogTitle} />
        <meta property="og:description" content={data?.meta?.ogDescription} />
        <meta property="og:url" content={data?.meta?.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        <MapWithBackground backgroundImage={"/images/mapa1.jpeg"}>
          {isLoading ? (
            <div className="flex items-center justify-center h-full w-full">
              <Loader />
            </div>
          ) : (
            modeloList
              ?.slice()
              .sort((a, b) => a.id - b.id)
              .map((models) => {
                const { ubicacionX, ubicacionY, srcModelo, id } = models;
                const x = parseInt(ubicacionX);
                const y = parseInt(ubicacionY);
                const withModels = models.componente ? "70px" : "40px";
                return (
                  <CanvasElement key={id} x={x} y={y} width={withModels}>
                    <img
                      src={srcModelo}
                      key={id}
                      alt={srcModelo}
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={models.nombre}
                      onClick={() =>
                        models.componente && hearlessChange(models)
                      }
                      loading="lazy"
                    />
                    <Tooltip id="my-tooltip" />
                  </CanvasElement>
                );
              })
          )}
        </MapWithBackground>
      </section>

      <div className="container max-h-90vh overflow-y-auto">
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
        {dynamicComponents}
      </div>
    </Main>
  );
};
// test
export default SantuarioPage;
