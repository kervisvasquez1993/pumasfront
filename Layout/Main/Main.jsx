import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";
import style from "./style.module.css";
import useMenu from "../../hooks/useMenu";
import { useRouter } from "next/router";
import MenuBurger from "../../components/UI/MenuBurguer";
import Navbar from "../../components/UI/Navbar/NavBar";
import useLocale from "../../hooks/useLocales";

const Main = ({ children, titlePage }) => {
  const { menuData, loading } = useMenu();
  const { langAllContext } = useLocale()
  console.log(langAllContext)
  const { query } = useRouter();
  const { lang, slug } = query;
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

  // Cargar menuData desde localStorage si no está disponible desde la API
  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (!menuData && storedMenuData) {
      setStateMenu(
        JSON.parse(storedMenuData).find((element) => element.lang === lang) ||
        null
      );
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldApplyHeaderStyle = slug !== "inicio";
  return (
    <>
      <Head>
        <title>{`Pumas - ${titlePage}`}</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header
        className={`${shouldApplyHeaderStyle ? style.headerMenu : ""}`}
      >
        <Navbar items={stateMenu} />
      </header>
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
