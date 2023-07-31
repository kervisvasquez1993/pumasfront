import React from "react";

const ReservaRecorrido = () => {
  return (
    <div className="container-rout">
      <div className="grid-2">
        <h3 className="rout-title">Reserva tu recorrido</h3>
        <div className="rout_text">
          <p>
            En este recorrido aprenderás sobre los animales silvestres que viven
            de forma permanente en el Santuario: conocerás su comportamiento,
            historia natural, ecología y descubrirás la razón por la que no
            pudieron ser devueltos a la naturaleza. El recorrido guiado no tiene
            ningún costo económico adicional, pero está sujeto a disponibilidad.
          </p>

          <p>
            <b>¡Será un gusto mostrarte nuestro Santuario!</b>
          </p>
          <button className="route-button">Reservar Recorrido</button>
        </div>
      </div>
    </div>
  );
};

export default ReservaRecorrido;
