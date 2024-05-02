import React, { useEffect, useState } from "react";
import Main from "../../Layout/Main/Main";
import usePages from "../../hooks/usePages";
import BasicSectionFull from "../Section/Basic/BasicSectionFull";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ButtonView from "../../views/ButtonView";
import { useRouter } from "next/router";
import SliderThree from "../UI/Slider/SliderThree";
import { obtenerFrase } from "../../lang/traducciones";
import { useLayoutEffect } from "react";

import Slider from "react-slick";
import Image from "next/image";
import SliderSingle from "../UI/Slider/SliderSingle";
import Head from "next/head";

const ProgramaPage = ({ data, material }) => {
  const router = useRouter();
  const { lang } = router.query;
  const [dynamicComponents, setDynamicComponents] = useState([]);
  const [materialEducativo, setMaterialEducativo] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const descarga = obtenerFrase(lang, "descargar");
  const ver = obtenerFrase(lang, "ver");
  const reserva = obtenerFrase(lang, "ReservaTuRecorrido");
  const { title, componentDynamics } = data;
  // console.log(componentDynamics, "componentDynamics");
  const titulo = data?.componentDynamics?.find(
    (titulo) => titulo.nameComponent === "titleBasic"
  );
  // console.log(titulo);
  const materialSection = data.componentDynamics.find(
    (elemento) => elemento.typeSection == "section5"
  );
  const sliderNew = data.componentDynamics.find(
    (elemento) => elemento.title == "carousel"
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useLayoutEffect(() => {
    const ComponentDynamicsRenderer = ({ componentDynamics }) => {
      const renderedComponents = componentDynamics.reduce((acc, elemento) => {
        if (elemento?.typeSection === "section2") {
          const imgSlider = elemento?.imagenWithContentBasic?.map(
            (item, index) => {
              return {
                url: `${item?.img?.data[0]?.attributes.url}`,
              };
            }
          );

          const component = (
            <div className="container-program">
              <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
                {elemento?.title}
              </h3>
              <div className="grid-2 px-5">
                <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2">
                  <ReactMarkdown className="button">
                    {elemento?.content}
                  </ReactMarkdown>
                </div>

                <SliderThree>
                  {imgSlider?.map((image, index) => (
                    <div key={index}>
                      <img src={image.url} alt={`image-${index}`} />
                    </div>
                  ))}
                </SliderThree>
              </div>
            </div>
          );
          return [...acc, component];
        }

        if (elemento?.typeSection === "section8") {
          const contentEducation = elemento.imagenWithContentBasic.map(
            (element, index) => {
              return (
                <div className="icon-flex-2" key={index}>
                  {element?.img?.data[0]?.attributes?.url && (
                    <div
                      className={
                        element.img.data[0].attributes.url.endsWith(".svg")
                          ? "icons__imagen145"
                          : "icons__imagen2"
                      }
                    >
                      <img
                        src={element.img.data[0].attributes.url}
                        alt="imagen santuario"
                      />
                    </div>
                  )}
                  <div className="icons_text">
                    <ReactMarkdown className="fuentesParrafo">
                      {element.content}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            }
          );

          const component = (
            <div className="container-edu backgroundProgrmar p-10 my-10">
              <div className="grid-2 px-8 flex items-center">
                <div>
                  <h3 className="edu-title fuenteTitulo titleGreen">
                    {elemento.title}
                  </h3>
                  <ReactMarkdown className="fuentesParrafo">
                    {elemento.content}
                  </ReactMarkdown>
                  <ButtonView
                    blank={true}
                    className={"edu-button"}
                    link={`${lang}/${elemento?.btn?.url}`}
                  >
                    {reserva}
                  </ButtonView>
                </div>
                <div className="edu_text">
                  <div>
                    <SliderSingle slidesData={sliderNew?.imagenes?.data} />
                  </div>
                </div>
              </div>
              <div className="p-10 m-5">
                <h6 className="text-3xl">{titulo?.Titulo}</h6>
              </div>
              <div className="edu-icons-container py-10 my-10">
                {contentEducation}
              </div>
            </div>
          );
          return [...acc, component];
        }

        return acc;
      }, []);
      setDynamicComponents(renderedComponents);
    };

    const fetchMaterialEducativo = (material) => {
      const materialData = material?.map((elemento, index) => {
        const handleMouseEnter = () => {
          setIsHovered(true);
        };

        const handleMouseLeave = () => {
          setIsHovered(false);
        };
        return (
          <div
            className="downloads"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="materials__imagen">
              <img src={elemento?.imgFile?.url} alt="imagen santuario" />
              {console.log(elemento, "elemento?.file")}
              <Link
                className="download-button"
                href={
                  elemento?.file?.url?.startsWith("http")
                    ? elemento?.file?.url
                    : elemento?.urlExterna?.startsWith("http")
                    ? elemento?.urlExterna
                    : `https://${elemento?.file?.url || elemento?.urlExterna}`
                }
                target="_blank"
              >
                {elemento?.file?.url || elemento?.urlExterna ? descarga : ver}
              </Link>
            </div>
            <div className="wrapperTitleCard">
              <h2 className="materials_text2 manropeFont colorSecondary font-bold">
                {elemento?.title}
              </h2>
            </div>
          </div>
        );
      });

      setMaterialEducativo(materialData);
    };

    fetchMaterialEducativo(material);
    ComponentDynamicsRenderer(data);
  }, [lang, data, material]);

  return (
    <Main titlePage={title}>
      <Head>
        <title> {data?.meta?.title}</title>
        <meta name="description" content={data?.meta?.description} />
        <meta name="keywords" content={data?.meta?.keywords} />
        <meta name="author" content={data?.meta?.authors} />
        <meta property="og:title" content={data?.meta?.ogTitle} />
        <meta property="og:description" content={data?.meta?.ogDescription} />
        <meta property="og:image" content={data?.meta?.ogImage?.data?.attributes?.url} />
        <meta property="og:url" content={data?.meta?.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        {dynamicComponents}
        <div className="container-materials-edu">
          <h3 className="materials-edu-title fuenteTitulo colorSecondary p-10">
            {materialSection.title}
          </h3>
          <div className="materials-edu_text fuentesParrafo px-10">
            <ReactMarkdown>{materialSection.content}</ReactMarkdown>
          </div>
          <div className="dowloads-container my-5">{materialEducativo}</div>
        </div>
      </div>
    </Main>
  );
};

export default ProgramaPage;
