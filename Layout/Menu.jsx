import React from 'react';
import logo from 'ruta/al/logo.png';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.logoSection}>
        {/* Código para el logo */}
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.scheduleSection}>
        {/* Código para mostrar el horario */}
        <p>Horario: 9:00 AM - 5:00 PM</p>
      </div>
      <div className={styles.navigationSection}>
        {/* Código para el menú de navegación */}
        <ul className={`${styles.menuList} flex gap-4`}>
          <li>
            <a className={styles.menuItem} href="/">Inicio</a>
          </li>
          <li>
            <a className={styles.menuItem} href="/servicios">Servicios</a>
          </li>
          <li>
            <a className={styles.menuItem} href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
