import React from 'react';

const ContactForm = ({ nombre, email, fecha, hora = "", cantidadAdultos = "", cantidadNinos = "", descripcion = "", requiereGuia }) => {
    return (
        <div>
            <h2>Reservación</h2>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Requiere Guia:</strong> {requiereGuia}</p>
            {hora && <p><strong>Hora:</strong> {hora}</p>}
            {cantidadAdultos && <p><strong>Cantidad de Adultos:</strong> {cantidadAdultos}</p>}
            {cantidadNinos && <p><strong>Cantidad de Niños:</strong> {cantidadNinos}</p>}
            {descripcion && <p><strong>Descripción:</strong> {descripcion}</p>}
        </div>
    )
}

export default ContactForm;
