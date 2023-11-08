import React, { useState } from "react";
import Main from "../../Layout/Main/Main";
import usePages from "../../hooks/usePages";
import BasicSectionFull from "../Section/Basic/BasicSectionFull";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CardBasic from "../Section/CardBasic";
import CardComponent from "../UI/Card/CardComponents";
import ButtonView from "../../views/ButtonView";
import { useRouter } from "next/router";

const ProgramaPage = ({ data, material }) => {

  const router = useRouter();
  const { slug, lang } = router.query
  const { title, componentDynamics } = data;
  const [firstElement, secondElement, thirdElement, fourthElement, fifthElement] = componentDynamics

  const ComponentDynamicsRenderer = ({ componentDynamics }) => {

    const renderedComponents = componentDynamics.reduce((acc, elemento, index) => {
      if (elemento?.typeSection === "section2") {
        const component = (<div className="container-program">
          <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
            {elemento?.title}
          </h3>
          <div className="grid-2 px-5">
            <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2">
              <ReactMarkdown>{elemento?.content}</ReactMarkdown>
            </div>
            {/* <div className="program__imagen lg:p-10"> */}
            {/* <Swiper
                  // onSwiper={true}
                  slidesPerView={1}
                  centeredSlides={false}
                  spaceBetween={60}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper sliderCustom"
                >
                  {animales}
                </Swiper> */}
            <CardBasic
              showMask={true}
              maskSrc={"/images/mask.png"}
              iconSrc={"/images/modelo3d.png"}
              imgSrc={elemento?.imagenWithContentBasic[0].img.data[0].attributes.url}
              title={elemento?.imagenWithContentBasic[0].label}
              subtitle={elemento?.imagenWithContentBasic[0].subtitle}
            />

        
          </div>
        </div>)
        return [...acc, component];
      }

      if (elemento?.typeSection === "section8") {


        const contentEducation = elemento.imagenWithContentBasic.map((element, index) => {
          return (
            <div className="icon-flex-2" key={index}>
              <div className="icons__imagen2">
                <img src={element?.img?.data[0]?.attributes?.url} alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <ReactMarkdown className="fuentesParrafo">{element.content}</ReactMarkdown>
              </div>
            </div>)
        });
        const component = (<div className="container-edu backgroundProgrmar p-10 my-10">
          <div className="grid-2 px-8">
            <div>
              <h3 className="edu-title fuenteTitulo titleGreen">{elemento.title}</h3>
              <ReactMarkdown className="fuentesParrafo">{elemento.content}</ReactMarkdown>
            </div>
            <div className="edu_text">
              <ButtonView
                className={"edu-button"}
                link={`${lang}/${elemento?.btn?.url}`}
              >
                Reserva tu recorrido
              </ButtonView>
            </div>
          </div>
          <div className="edu-icons-container py-10 my-10">
            {contentEducation}
          </div>
        </div>)
        return [...acc, component];
      }

      if (elemento.typeSection === "section5") {
        const component = (<div className="container-materials-edu">
          <h3 className="materials-edu-title fuenteTitulo colorSecondary p-10">{elemento.title}</h3>
          <div className="materials-edu_text fuentesParrafo px-10">
            <ReactMarkdown>{elemento.content}</ReactMarkdown>
          </div>
          <div className="dowloads-container my-5">
            {materialEducativo}
          </div>
        </div>)
        return [...acc, component];
      }


      return acc;
    }, []);
    return <div>{renderedComponents}</div>;
  };

  const { precios } = thirdElement
  const preciosData = precios?.data?.map((precio, index) => {
    return (<li key={index}>{precio?.attributes?.title} : {precio?.attributes?.value}</li>)
  })
  const materialEducativo = material?.map((elemento, index) => {
    const [isHovered, setIsHovered] = useState(false);

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
          <img
            src={elemento?.imgFile?.url}
            alt="imagen santuario"
          />
          {isHovered && (
            <Link className="download-button" href={elemento?.file?.url} download>Descargar</Link>
          )}
        </div>
        <div className="wrapperTitleCard">
          <h2 className="materials_text2 manropeFont colorSecondary font-bold">
            {elemento?.title}
          </h2>
        </div>
      </div>)
  })

  return (
    <Main titlePage={title}>
      <div className="container">
        {ComponentDynamicsRenderer(data)}
      </div>
    </Main>

  );
};

export default ProgramaPage;
