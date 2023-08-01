import React from 'react';
// import backgroundImg from './ruta/de/la/imagen/fondo.jpg'; // Ruta de la imagen de fondo

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url("/images/foooterBackround.png")` }}>
      <div className="footer" >
        <div className="footer-block">
          <h2>Contacto</h2>
          <ul>
            <li>laspumascr@gmail.com</li>
            <li>Boletería: +506 2669-6019</li>
            <li>Reservas: +506 8479-7025</li>
            <li>Oficina: +506 2669-6044</li>
            <div className="social">
              <li><a href="#">F</a></li>
              <li><a href="#">I</a></li>
            </div>
          </ul>
        </div>
        <div className="footer-block">
          <h2>Dirección</h2>
          <p>Cañas, Guanacaste. A 4.5 km. de Cañas en dirección hacia Liberia, sobre la Carretera Interamericana Norte, entrada a mano derecha. </p>
        </div>
        <div className="footer-block">
          <h2>Horario</h2>
          <ul>
            <li>Lunes a Domingo</li>
            <li>De 8:00am a 9:00am</li>
            <li>Incluso Feriado</li>
          </ul>
        </div>
      </div>
      <div>
        <img src="logo.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
