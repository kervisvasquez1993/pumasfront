import React from 'react';

const EmailTemplate = ({ nombre, correo, monto, donacion, typeSponsorship, nombreEspecie, donacionesHuella, tiempo_de_donacion, categoriaPatrocinio }) => {
    return (
        <div>
            <h3>Validar donación, estos son los datos de la donación.</h3>
            <p>Nombre: {nombre}</p>
            <p>Correo: {correo}</p>
            <p>Tiempo de donación: {tiempo_de_donacion}</p>
            <p>Categoría de patrocinio: {categoriaPatrocinio}</p>
            <p>Tipo de patrocinio: ${typeSponsorship}</p>
            <p>Nombre de especie: {nombreEspecie}</p>
            <p>Monto: {monto}$</p>
            <p>Donación: {donacion}</p>
            <p>Donaciones de huella: {donacionesHuella ? donacionesHuella.join(', ') : ''}</p>
        </div>
    );
}

export default EmailTemplate;
