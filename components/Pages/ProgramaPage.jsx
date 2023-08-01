import React from "react";
import Main from "../../Layout/Main/Main";

const ProgramaPage = () => {
  return (
    <Main>
      <div className="container">
        <div className="container-program">
          {/* TODO:manejar titulo responsive */}
          <h3 className="program-title fuenteTitulo colorPrimary my-10 py-10">
            Programa de conservacion y manejo de la fauna silvestre
          </h3>
          <div className="grid-2">
            <div className="about-program_text fuentesParrafo py10">
              <p className="mb-10 py-10">
                Nuestro Programa de Conservación y Manejo de la Fauna Silvestre
                consiste en el rescate, rehabilitación, liberación y en brindar
                calidad de vida de los animales silvestres que se reciben por
                parte del personal de diversas Áreas de Conservación (SINAC),
                ICE, Bomberos, Fuerza Pública o personas particulares. ​{" "}
              </p>
              <p>
                Durante los ultimos 5 años, se ha recibido un promedio anual de
                225 animales silvestres de 58 especies. A través de los años el
                ingreso de animales ha ido en aumento, llegando a los 300
                rescates en el año 2019. Entre las especies se pueden citar
                psitácidos (loras y pericos), primates (mono congo, mono
                carablanca y mono araña), felinos (principalmente manigordos,
                cauceles y yaguarundis), otros mamíferos (pizotes, mapaches,
                zorros pelones, puercoespines, armadillos, etc.) y otras aves
                (búhos, lechuzas, gavilanes, tucanes,). La mayoría de estos
                animales provienen de la provincia de Guanacaste y la Zona
                Norte; sin embargo, en algunas ocasiones pueden llegar del resto
                del país. (Reducir texto)
              </p>
            </div>
            <div className="program__imagen">
              <img src="/images/imgsantuario.png" alt="imagen santuario" />
            </div>
          </div>
        </div>
        <div className="container-edu ">
          <div className="grid-2">
            <div>
              <h3 className="edu-title fuenteTitulo colorSecondary">EDUCACIÓN AMBIENTAL</h3>
              <p className="fuentesParrafo">
                Nuestro Programa de Educación Ambiental (PEA) se desarrolla en
                el área de El Santuario y su objetivo es educar a los visitantes
                acerca de las amenazas que enfrentan los animales silvestres de
                Costa Rica, de esta manera utilizamos la educación ambiental
                como una herramienta de conservación.
              </p>
            </div>
            <div className="edu_text  ">
              <h3 className="price-title colorSecondary">Precio</h3>
              <li>Guarderias, preecolar y primaria : 1000$</li>
              <li>Secundaria y educacion Superiror : 2000$</li>
              <li>Profesores : 2000$</li>
              <li>Padres de familia : 3000$</li>

              <button className="edu-button">Reservar Recorrido</button>
            </div>
          </div>
          <div className="edu-icons-container py-10 my-10">
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
