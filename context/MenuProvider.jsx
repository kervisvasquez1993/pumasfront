import React, { createContext, useEffect, useState } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);

  const lang = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await ApiBackend("api/i18n/locales", config);
    return response.data;
  };

  const getMenus = async (language) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        locale: language,
      },
    };
    const response = await ApiBackend("api/menus", config);
    return response.data.data;
  };

  const fetchMenusByLanguage = async (languages) => {
    const menuData = [];

    for (const language of languages) {
      const menu = await getMenus(language.code);
      menuData.push({ lang: language.code, data: menu });
    }

    return menuData;
  };

  const getMenuData = async () => {
    const languages = await lang();
    const menuData = await fetchMenusByLanguage(languages);
    return menuData;
  };

  useEffect(() => {
    (async () => {
      try {
        // Obtener datos de la API
        const menuData = await getMenuData();

        // Actualizar el estado con los datos obtenidos de la API
        setMenuData(menuData);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MenuContext.Provider value={{ loading, menuData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
