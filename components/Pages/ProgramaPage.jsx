import React from "react";
import Main from "../../Layout/Main/Main";
import usePages from "../../hooks/usePages";
import BasicSectionFull from "../Section/Basic/BasicSectionFull";
import ReactMarkdown from "react-markdown";

const ProgramaPage = ({ data }) => {
  console.log(data, "data");
  const { title, componentDynamics } = data;
  const [firstElement, secondElement, thirdElement, fourthElement] = componentDynamics
  const url = "http://localhost:1337" + firstElement.imgBasicContent.data.attributes.url
  const {precios} = thirdElement
  console.log(secondElement, "secondElemento")
const preciosData = precios.data.map(precio=>{
  console.log(precio)
return (<li>{precio.attributes.title} : {precio.attributes.value}</li> )

})
  

  return (
    <Main titlePage={title}>
      <div className="container">
        
        <BasicSectionFull imageUrl={url} title={firstElement?.title} content={firstElement.content} ></BasicSectionFull>
        <div className="container-edu backgroundProgrmar py-10 my-10">
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
          <div className="edu-icons-container">
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/ico_presentacion1.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  Recorrido guiado: nuestra Educadora Ambiental te dará un
                  recorrido guiado para que conozcás a todos nuestros animales.
                  Aprenderás sobre su hábitat, dieta, curiosidades y sobre todo
                  sabrás la razón por la cual fueron rescatados y por qué no
                  pudieron regresar al bosque.
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/ico_guia2.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  Recorrido guiado: nuestra Educadora Ambiental te dará un
                  recorrido guiado para que conozcás a todos nuestros animales.
                  Aprenderás sobre su hábitat, dieta, curiosidades y sobre todo
                  sabrás la razón por la cual fueron rescatados y por qué no
                  pudieron regresar al bosque.
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/ico_granja1.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  Recorrido guiado: nuestra Educadora Ambiental te dará un
                  recorrido guiado para que conozcás a todos nuestros animales.
                  Aprenderás sobre su hábitat, dieta, curiosidades y sobre todo
                  sabrás la razón por la cual fueron rescatados y por qué no
                  pudieron regresar al bosque.
                </p>
              </div>
            </div>
            <div className="icon-flex-2">
              <div className="icons__imagen">
                <img src="/images/ico_arte1.png" alt="imagen santuario" />
              </div>
              <div className="icons_text">
                <p className="fuentesParrafo ">
                  Recorrido guiado: nuestra Educadora Ambiental te dará un
                  recorrido guiado para que conozcás a todos nuestros animales.
                  Aprenderás sobre su hábitat, dieta, curiosidades y sobre todo
                  sabrás la razón por la cual fueron rescatados y por qué no
                  pudieron regresar al bosque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-materials-edu">
          <h3 className="materials-edu-title fuenteTitulo colorSecondary py-10">MATERIALES EDUCATIVOS</h3>

          <div className="materials-edu_text fuentesParrafo ">
            <p>
              Si vas a venir de visita a nuestro Santuario, acá te mostramos
              nuestras reglas. Además, cuando nos visités te recomendamos traer
              bloqueador, repelente e hidratación.
            </p>
          </div>
          <div className="dowloads-container">
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
            <div className="dowloads">
              <div className="materials__imagen">
                <img src="/images/rectangle.png" alt="imagen santuario" />
              </div>
              <div className="wrapperTitleCard">
                <h2 className="materials_text manropeFont colorSecondary">Animales Silvestres de Costa Rica</h2>
                <p className="manropeFont fontSize28">Libro de Actividades</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Main>

  );
};

export default ProgramaPage;
