import React, { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { ApiBackend, langAll,getFooter, getWhatsapp } from "../apis/ApiBackend";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [langsInfo, setLangsInfo] = useState([]);
  const [whatsapp, SetWhatsapp] = useState({});
  const router = useRouter();
  const { asPath } = router;
  const [, idioma] = asPath.split('/');
  console.log(idioma,"idioma")

  useEffect(() => {
    const handleRouteChange = (url) => {
      const [, idioma] = url.split('/');
    };


    router.events.on('routeChangeComplete', handleRouteChange);

    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [asPath]);
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
    const whatsapp = await getWhatsapp(language)
    const responseWhatsapp = whatsapp.data?.data[0]?.attributes
    SetWhatsapp(responseWhatsapp)
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
  useEffect(() => {
    (async () => {
      try {
        getLangContext()
        const menuData = await getMenuData();
        console.log("test desde menu")
        setMenuData(menuData);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <MenuContext.Provider value={{ loading, menuData, footerData, whatsapp }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
