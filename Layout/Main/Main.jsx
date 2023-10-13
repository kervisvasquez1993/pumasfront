import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../../components/UI/Navbar/NavBar";
import style from "./style.module.css";
import useMenu from "../../hooks/useMenu";
import { useRouter } from "next/router";
import useLocale from "../../hooks/useLocales";

const Main = ({ children, titlePage }) => {
  const { menuData, loading } = useMenu();
  // console.log(menuData, "data")
  const { langAllContext } = useLocale();
  const { query } = useRouter();
  const { lang, slug } = query;
  const [stateMenu, setStateMenu] = useState(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // Ajusta esto según tu preferencia

      // Si el desplazamiento vertical es mayor o igual al umbral, establece el encabezado como pegajoso
      if (window.scrollY >= threshold) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = `${style.headerMenu} ${isHeaderSticky ? "stickyHeader" : ""
    }`;
  const shouldApplyHeaderStyle = slug !== "inicio";

  const headerClassNameInicio = `${isHeaderSticky ? style.headerMenu + " stickyHeader" : ""
    }`;


  return (
    <>
      <Head>
        <title>{`Pumas - ${titlePage}`}</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={`${shouldApplyHeaderStyle ? headerClassName : headerClassNameInicio} `}>
        <Navbar items={stateMenu} />
      </header>
      <main className="maxWidthBody">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
