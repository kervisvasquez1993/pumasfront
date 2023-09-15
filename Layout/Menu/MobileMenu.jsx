import React, { useState } from "react";
import MenuHamburguesaIcons from "../../components/Icons/MenuHamburguesaIcons";
import ItemMenu from "../../views/ItemMenu";
import CloseIcon from "../../components/Icons/CloseIcon";
import style from "./style.module.css"

const MobileMenu = ({ logo, navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.mobilWrapper}>
      <img src={logo} alt="Logo" />
      
      <div onClick={handleToggleMenu}>{<MenuHamburguesaIcons />}</div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75">
          <div className="top-0 right-0 p-4">
            <button onClick={handleToggleMenu}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col text-white">
            {<ItemMenu items={navigationItems} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
