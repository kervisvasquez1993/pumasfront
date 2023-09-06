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
        "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`
      },
    };
    const response = await ApiBackend("api/i18n/locales", config);
    return response.data;
  };

  const getMenus = async (language) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 5cb67cace7cc00d222d3dfee88a4bf2d145b14d586b2be114fbea9ced2712b4e87d8c910c3a6995229a3db140cca57106a676ce4db525e550c81fdf5c08d191764cf62603fe154f4e85bee1e7480a5d9b1530978f61b7194a6fc7d912933bfa6e3f2454772a6429605e2616be2f38d5f29214baacab29df5c248613518724439`,

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
