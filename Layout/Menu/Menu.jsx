// import logo from "../../public/image/LogoBlanco.png";
import ItemMenu from "../../views/ItemMenu";
import styles from "./style.module.css"

const Menu = ({ items }) => {
    return (
        <div className={`flex  justify-between items-center ${styles.menuContainer}`}>
            <div className="px-5">
                <img src="/images/LogoBlanco.png" alt="Logo" />
            </div>
            <div className="">
                <p className="p-10">Hasta las 4:00 PM</p>
            </div>
            <div>
                <ItemMenu items={items} />
            </div>
        </div>
    );
};

export default Menu;
