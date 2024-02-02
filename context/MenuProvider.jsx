import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  ApiBackend,
  langAll,
  getFooter,
  getWhatsapp,
} from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState(null);
  const [footerData, setFooterData] = useState([]);
  const [langsInfo, setLangsInfo] = useState([]);
  const [whatsapp, SetWhatsapp] = useState({});
  const router = useRouter();
  const { asPath } = router;
  useEffect(() => {
    const handleRouteChange = (url) => {
      const [, idioma] = url.split("/");
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [asPath]);
  const updateMenuLoader = (data, lang) => {
    setMenuData({ lang, data: data });
  };
  const loadedFooter = (ruta) => {
    setFooterData(ruta);
  };
  const loadedWhatsapp = (ruta) => {
    SetWhatsapp(ruta);
  };
  const getLangContext = async () => {
    const languages = await langAll();
    setLangsInfo(languages);
  };
  useEffect(() => {
    (async () => {
      try {
        getLangContext();
        // setMenuData(pruebaMenu);
        setLoading(false);
      } catch (error) {
        //console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        loading,
        menuData,
        whatsapp,
        footerData,
        setFooterData,
        setMenuData,
        loadedFooter,
        loadedWhatsapp,
        updateMenuLoader
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
