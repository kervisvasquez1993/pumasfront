import React from 'react';

const EmailTemplate = ({ nombre, correo, monto, donacion }) => {
    return (
        <div>
            <h3>Validar donación y estos son los datos de la donación.</h3>
            <p>Nombre: {nombre}</p>
            <p>Correo: {correo}</p>
            <p>Monto: {monto}$</p>
            <p>Donación: {donacion.join(', ')}</p>
        </div>
    );
}

export default EmailTemplate;
