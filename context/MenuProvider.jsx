import React, { createContext, useEffect, useState } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState(
    () => JSON.parse(localStorage.getItem("menuData")) || []
  );

  const lang = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return ApiBackend("api/i18n/locales", config);
  };

  const getMenus = (language) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        locale: language,
      },
    };
    return ApiBackend("api/menus", config);
  };

  const fetchMenusByLanguage = async (languages) => {
    const menuData = [];

    for (const language of languages) {
      const menusResponse = await getMenus(language.code);
      const menu = menusResponse.data.data;

      menuData.push({ lang: language.code, data: menu });
    }

    return menuData;
  };

  const getMenuData = async () => {
    const langResponse = await lang();
    const languages = langResponse.data;

    const menuData = await fetchMenusByLanguage(languages);

    return menuData;
  };

  useEffect(() => {
    (async () => {
      try {
        let storedMenuData = JSON.parse(localStorage.getItem("menuData"));
        let menuData = [];

        // Obtener datos del localStorage si están disponibles
        if (storedMenuData) {
          setMenuData(storedMenuData);
          setLoading(false);
          return;
        }

        // Obtener datos de la API
        menuData = await getMenuData();

        // Almacenar en el localStorage
        localStorage.setItem("menuData", JSON.stringify(menuData));

        setMenuData(menuData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <MenuContext.Provider value={{ loading, menuData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
