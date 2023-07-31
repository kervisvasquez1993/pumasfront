import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import MobileMenu from "../Menu/MobileMenu";
import style from "./style.module.css";
import useMenu from "../../hooks/useMenu";
import { useRouter } from "next/router";

const Main = ({ children }) => {
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
    }
  }, [lang, loading, menuData]);
 
  const dataMenu = [
    { name: "Nosotros", url: "/es/nosotros" },
    { name: "Centro de Rescate", url: "/es/rescate" },
    { name: "Santuario", url: "/es/santuario" },
    { name: "Programas", url: "/es/programas" },
    { name: "Blog", url: "/es/blog" },
    { name: "Apoyanos", url: "/es/apoyanos" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
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
        <title>Título de tu página</title>
        <meta name="description" content="Descripción de tu página" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={`${style.headerMenu}`}>
        {isMobile ? (
          <MobileMenu
            logo="/images/LogoBlanco.png"
            navigationItems={dataMenu}
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
