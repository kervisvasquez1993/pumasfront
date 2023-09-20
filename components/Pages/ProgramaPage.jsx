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

const ProgramaPage = ({ data }) => {
  const router = useRouter();
  const { slug, lang } = router.query
  const { title, componentDynamics } = data;
  const [firstElement, secondElement, thirdElement, fourthElement, fifthElement] = componentDynamics
  const url = firstElement?.imgBasicContent?.data?.attributes?.url
  const { precios } = thirdElement
  const preciosData = precios.data.map((precio, index) => {
    return (<li key={index}>{precio?.attributes?.title} : {precio?.attributes?.value}</li>)

  })
  const { imagenWithContentBasic } = secondElement
  const contentEducation = imagenWithContentBasic.map((element, index) => {
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

  const materialEducativo = fifthElement.material_educativos.data?.map((elemento, index) => {
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
            src={elemento?.attributes?.imgFile?.data?.attributes?.url}
            alt="imagen santuario"
          />
          {isHovered && (
            <Link className="download-button" href={elemento?.attributes?.file?.data?.attributes?.url} download>Descargar</Link>
          )}
        </div>
        <div className="wrapperTitleCard">
          <h2 className="materials_text2 manropeFont colorSecondary font-bold">
            {elemento?.attributes.title}
          </h2>
        </div>
      </div>)
  })
  console.log(firstElement?.imagenWithContentBasic[0], "firstElement")
  const animales = firstElement?.imagenWithContentBasic?.map((element, index) => {
    console.log(element?.img?.data[0].attributes.url, "element?.img?.data?.attributes?.url")
    return (
      <SwiperSlide key={index} className="wrapperSliderCustom">
        {/* <CardComponent
        description={"tets"}
        title={element.title}
        imageUrl={element?.img?.data[0].attributes.url}
      /> */}
      </SwiperSlide>
    )
  })
  return (
    <Main titlePage={title}>
      <div className="container">
        {/* <BasicSectionFull imageUrl={url} title={firstElement?.title} content={firstElement.content} ></BasicSectionFull> */}
        <div className="container-program">
          <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
            {firstElement?.title}
          </h3>
          <div className="grid-2 px-5">
            <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 ">
              <ReactMarkdown>{firstElement?.content}</ReactMarkdown>
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
                imgSrc={firstElement?.imagenWithContentBasic[0].img.data[0].attributes.url}
                title={firstElement?.imagenWithContentBasic[0].label}
                subtitle={firstElement?.imagenWithContentBasic[0].subtitle}
              />

            {/* </div> */}
          </div>
        </div>
        <div className="container-edu backgroundProgrmar p-10 my-10">
          <div className="grid-2 px-8">
            <div>
              <h3 className="edu-title fuenteTitulo titleGreen">{secondElement.title}</h3>
              <ReactMarkdown className="fuentesParrafo">{secondElement.content}</ReactMarkdown>
            </div>
            <div className="edu_text">
              <h3 className="px-5 price-title titleGreen">Precios</h3>
              {preciosData}
             
              <ButtonView
                className={"edu-button"}
                link={`${lang}/${secondElement?.btn?.url}`}
              >
                Reserva tu recorrido
              </ButtonView>
            </div>
          </div>
          <div className="edu-icons-container py-10 my-10">
            {contentEducation}
          </div>
        </div>

        <div className="container-materials-edu">
          <h3 className="materials-edu-title fuenteTitulo colorSecondary p-10">{fourthElement.title}</h3>
          <div className="materials-edu_text fuentesParrafo px-10">
            <ReactMarkdown>{fourthElement.content}</ReactMarkdown>
          </div>
          <div className="dowloads-container my-5">
            {materialEducativo}
          </div>
        </div>

      </div>


    </Main>

  );
};

export default ProgramaPage;
