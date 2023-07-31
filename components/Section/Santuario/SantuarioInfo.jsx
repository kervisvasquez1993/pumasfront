import React from "react";

const SantuarioInfo = () => {
  return (
    <div className="container-sactuary">
      <h3 className="sanctuary-title">Nuestro Santuario</h3>
      <div className="grid-2">
        <div className="sanctuary__imagen">
          <img src="imgsantuario.png" alt="imagen santuario" />
        </div>
        <div className="about-sanctuary_text">
          <p>
            Nuestro Santuario está completamente abierto al público. Aquí es
            donde permanecen los animales que no pudieron ser liberados
            nuevamente a la naturaleza por diversas razones, por ejemplo,
            animales que tienen lesiones físicas que no les permiten valerse
            por sí mismos o que fueron mantenidos ilegalmente como mascotas y
            se acostumbraron a vivir con las personas.
          </p>
          <p>
            Cada animal tiene un recinto ambientado naturalmente y cada uno de
            ellos tiene una historia detrás de su rescate que explica el por qué
            deben vivir en cautiverio.
          </p>
          <p>
            Estos animales son utilizados como parte de nuestro Programa de
            Educación Ambiental, para enseñar a las personas sobre la vida
            silvestre y las amenazas que enfrentan como la pérdida de hábitat,
            la caza y la tenencia ilegal.
            <a href="#">¡Conocé más de nuestro Programa de Educación Ambiental acá!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SantuarioInfo;
