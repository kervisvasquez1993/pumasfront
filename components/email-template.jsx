import React from 'react';

const EmailTemplate = ({ nombre, correo, monto, donacion, typeSponsorship, nombreEspecie, donacionesHuella }) => {
    return (
        <div>
            <h3>Validar donación, estos son los datos de la donación.</h3>
            <p>Nombre: {nombre}</p>
            <p>Correo: {correo}</p>
            <p>Tipo de patrocinio: {typeSponsorship}</p>
            <p>Noombre de especie: {nombreEspecie}</p>
            <p>Monto: {monto}$</p>
            {/* <p>Donación: {donacion.join(', ')}</p> */}
            <p>Donación: {donacion}</p>
            <p>Donaciones de huella: {donacionesHuella.join(', ')}</p>
        </div>
    );
}

export default EmailTemplate;
