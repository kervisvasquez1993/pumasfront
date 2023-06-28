import logo from "../../public/image/LogoBlanco.png";
import ItemMenu from "../../views/ItemMenu";

const Menu = ({ items }) => {
    return (
        <div className="flex  backgroundSecondary justify-between items-center ">
            <div className="px-5">
                {/* Código para el logo */}
                <img src={logo} alt="Logo" />
            </div>
            <div className="">
                {/* Código para mostrar el horario */}
                <p className="p-10">Hasta las 4:00 PM</p>
            </div>
            <div>
                <ItemMenu items={items} />
            </div>
        </div>
    );
};

export default Menu;
