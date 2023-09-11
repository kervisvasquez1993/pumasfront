import React from "react";
import Main from "../../Layout/Main/Main";
import usePages from "../../hooks/usePages";
import BasicSectionFull from "../Section/Basic/BasicSectionFull";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const ProgramaPage = ({ data }) => {

  const { title, componentDynamics } = data;
  const [firstElement, secondElement, thirdElement, fourthElement, fifthElement] = componentDynamics
  const url = firstElement?.imgBasicContent?.data?.attributes?.url
  const { precios } = thirdElement
  const preciosData = precios.data.map((precio, index) => {
    return (<li key={index}>{precio?.attributes?.title} : {precio?.attributes?.value}</li>)

  })
  const { imagenWithContentBasic } = secondElement
  const contentEducation = imagenWithContentBasic.map((element, index) => {
    return (<div className="icon-flex-2" key={index}>
      <div className="icons__imagen">
        <img src={element?.img?.data[0]?.attributes?.url} alt="imagen santuario" />
      </div>
      <div className="icons_text">
        <ReactMarkdown className="fuentesParrafo">{element.content}</ReactMarkdown>
      </div>
    </div>)
  });

  const materialEducativo = fifthElement.material_educativos.data?.map((elemento, index) => {
    return (<div className="dowloads" key={index}>
      <div className="materials__imagen">
        <img src={elemento?.attributes?.imgFile?.data?.attributes?.url} alt="imagen santuario" />
      </div>
      <div className="wrapperTitleCard">
        <h2 className="materials_text manropeFont colorSecondary">{elemento?.attributes.title}</h2>
        <Link href={elemento?.attributes?.file?.data?.attributes?.url} className="manropeFont fontSize28" download>Libro de Actividades</Link>
      </div>
    </div>)
  })

  return (
    <Main titlePage={title}>
      <div className="container">
        <section style={{ backgroundImage: `url("/images/background-rigth.png")`, backgroundPosition: "left", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <BasicSectionFull imageUrl={url} title={firstElement?.title} content={firstElement.content} ></BasicSectionFull>
        </section>
        <div className="container-edu backgroundProgrmar p-10 my-10">
          <div className="grid-2">
            <div>
              <h3 className="edu-title fuenteTitulo colorSecondary">{secondElement.title}</h3>
              <ReactMarkdown className="fuentesParrafo">{secondElement.content}</ReactMarkdown>

            </div>
            <div className="edu_text  ">
              <h3 className="price-title colorSecondary">Precios</h3>
              {preciosData}
              <button className="edu-button">Reservar Recorrido</button>
            </div>
          </div>
          <div className="edu-icons-container py-10 my-10">
            {contentEducation}
          </div>
        </div>
        <section style={{ backgroundImage: `url("/images/background-left.png")`, backgroundPosition: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat", }} className='backgrounLeft'>
          <div className="container-materials-edu">
            <h3 className="materials-edu-title fuenteTitulo colorSecondary p-10">{fourthElement.title}</h3>

            <div className="materials-edu_text fuentesParrafo ">
              <ReactMarkdown>{fourthElement.content}</ReactMarkdown>
            </div>
            <div className="dowloads-container">
              {materialEducativo}
            </div>
          </div>
        </section>
      </div>

    </Main>

  );
};

export default ProgramaPage;
