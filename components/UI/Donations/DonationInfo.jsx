import React from "react";

const DonationInfo = ({ newElement }) => {
  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">Resumen de Donaciones</h2>
      <p>
        <span className="font-semibold">Nombre:</span> {newElement.nombre}
      </p>
      <p>
        <span className="font-semibold">Correo:</span> {newElement.correo}
      </p>
      <p>
        <span className="font-semibold">Monto Total:</span> ${newElement.monto.toFixed(2)}
      </p>
      <p>
        <span className="font-semibold">Donaciones Seleccionadas:</span>
        <ul>
          {newElement.donacion.map((donacion, index) => (
            <li key={index}>{donacion}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default DonationInfo;
