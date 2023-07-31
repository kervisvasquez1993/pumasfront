import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";
import style from "./style.module.css";
import useMenu from "../../hooks/useMenu";
import { useRouter } from "next/router";

const Main = ({ children, titlePage }) => {
  const { menuData, loading } = useMenu();
  const { query } = useRouter();
  const { lang } = query;
  const [stateMenu, setStateMenu] = useState(null);

  useEffect(() => {
    if (!loading && menuData && lang) {
      const currentLanguageMenu = menuData.find(
        (element) => element.lang === lang
      );
      setStateMenu(currentLanguageMenu || null);

      // Almacena menuData en localStorage cuando está disponible
      localStorage.setItem("menuData", JSON.stringify(menuData));
    }
  }, [lang, loading, menuData]);

  // Al cargar el componente, comprueba si hay menuData almacenado en localStorage y úsalo si está disponible
  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (!menuData && storedMenuData) {
      setStateMenu(JSON.parse(storedMenuData).find((element) => element.lang === lang) || null);
    }
  }, []);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  stateMenu && console.log(stateMenu.data)

  return (
    <>
      <Head>
        <title>{`Pumas - ${titlePage}`}</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={`${style.headerMenu}`}>
        {isMobile ? (
          <MobileMenu
            logo="/images/LogoBlanco.png"
            navigationItems={stateMenu}
          />
        ) : (
          <Menu items={stateMenu} />
        )}
      </header>
      <main className="maxWidthBody">{children}</main>
      <Footer items={""} />
    </>
  );
};

export default Main;
