import React from "react";

const DonationInfo = ({ newElement }) => {
  const { nombre, correo, monto, donacion } = newElement;

  return (
    <div className="border p-4 rounded mb-4 flex-column">
      <h2 className="text-lg font-semibold mb-2">Resumen de Donaciones</h2>
      <p>
        <span className="font-semibold">Nombre:</span> {nombre}
      </p>
      <p>
        <span className="font-semibold">Correo:</span> {correo}
      </p>
      <p>
        <span className="font-semibold">Monto Total:</span> ${monto.toFixed(2)}
      </p>
      <div>
        <span className="font-semibold">Donaciones Seleccionadas:</span>
        <ul>
          {donacion.map((donacionItem, index) => (
            <li key={index}>{donacionItem}</li>
          ))}
        </ul>
      </div>
      <a
        className="backgroundPrimary m-0 manropeFont p-5 btnPrimary py-2"
        href="https://www.paypal.com/donate/?hosted_button_id=ARGVAJFC5LA9W&amount=50.00"
      >
        Donar
      </a>
    </div>
  );
};

export default DonationInfo;
