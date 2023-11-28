import React, { createContext, useEffect, useState } from "react";
import { ApiBackend, langAll,getFooter } from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [langsInfo, setLangsInfo] = useState([]);

  const getLangContext = async ()=> {
    const languages = await langAll();
    setLangsInfo(languages)
  }

  
  const getMenus = async (language) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,

      },
      params: {
        locale: language,
      },
    };
    const footer = await getFooter(language)
    const responsefooter = footer?.data?.data[0]?.attributes?.footerInfo


    setFooterData(responsefooter)
    const response = await ApiBackend("api/menus?sort=rang:asc", config);

    return response.data.data;
  };

  const fetchMenusByLanguage = async (languages) => {
    const menuData = [];

    for (const language of languages) {
      const menu = await getMenus(language.attributes.code);
      menuData.push({ lang: language.attributes.code, data: menu });
    }

    return menuData;
  };

  const getMenuData = async () => {
    const languages = await langAll();
    const menuData = await fetchMenusByLanguage(languages);
    return menuData;
  };
  const getFooterData = async () => {};

  useEffect(() => {
    (async () => {
      try {
        getLangContext()
        
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
    <MenuContext.Provider value={{ loading, menuData, footerData }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
