import styles from "./Menu.module.css";
import logo from "../../public/image/LogoBlanco.png";

const Menu = ({ items }) => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.logoSection}>
                {/* Código para el logo */}
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.scheduleSection}>
                {/* Código para mostrar el horario */}
                <p>Hasta las 4:00 PM</p>
            </div>
            <div className={styles.navigationSection}>
                <ItemMenu items={items} />
            </div>
        </div>
    );
};

export default Menu;
