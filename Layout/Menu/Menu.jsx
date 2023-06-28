import styles from "./style.module.css";
import logo from "../../public/image/LogoBlanco.png";
import ItemMenu from "../../views/ItemMenu";

const Menu = ({ items }) => {
    return (
        <div className={`${styles.menuContainer} d-flex`}>
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
