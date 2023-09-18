import React from 'react';
// import backgroundImg from './ruta/de/la/imagen/fondo.jpg'; // Ruta de la imagen de fondo

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url("/images/foooterBackround.png")`, backgroundSize : "100% 100%", backgroundSize : "cover" }} className='footer-wrapper'>
      <div className="footer center" >
        <div className="footer-block">
          <h2 className='chelseaFont  font-size-24 color-white'>Contacto</h2>
          <ul className='py-5 color-white'>
            <li className="manropeFont font-size-20">laspumascr@gmail.com</li>
            <li className="manropeFont font-size-20">Boletería: +506 2669-6019</li>
            <li className="manropeFont font-size-20">Reservas: +506 8479-7025</li>
            <li className="manropeFont font-size-20">Oficina: +506 2669-6044</li>
            
          </ul>
        </div>
        <div className="footer-block ">
          <h2 className='chelseaFont  font-size-24 color-white'>Dirección</h2>
          <p className='py-5 manropeFont font-size-20 color-white'><span className='fontBold'> Cañas, Guanacaste.</span> A 4.5 km. de Cañas en dirección hacia Liberia, sobre la Carretera Interamericana Norte, entrada a mano derecha. </p>
        </div>
        <div className="footer-block color-white">
          <h2 className='chelseaFont  font-size-20 color-white'>Horario</h2>
          <ul className='py-5 manropeFont font-size-20'>
            <li>Lunes a Domingo</li>
            <li>De 8:00am a 9:00am</li>
            <li>Incluso Feriado</li>
          </ul>
        </div>
      </div>
      <div className='w-10vw'>
        <img src="/images/logo-blanco.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
