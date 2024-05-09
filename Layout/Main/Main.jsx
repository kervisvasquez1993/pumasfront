import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../../components/UI/Navbar/NavBar";
import style from "./style.module.css";
import useMenu from "../../hooks/useMenu";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import useLocale from "../../hooks/useLocales";

const Main = ({ children, titlePage, data }) => {
  const { menuData, loading, footerData } = useMenu();
  const { langAllContext } = useLocale();
  const { query } = useRouter();
  const { lang, slug } = query;
  const [stateMenu, setStateMenu] = useState(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    if (!loading && menuData && lang) {
      const currentLanguageMenu = menuData;
      setStateMenu(currentLanguageMenu || null);
      localStorage.setItem("menuData", JSON.stringify(menuData));
    }
  }, [lang, loading, menuData]);

  useEffect(() => {
    const storedMenuData = localStorage.getItem("menuData");
    if (!menuData && storedMenuData) {
      setStateMenu(JSON.parse(storedMenuData) || null);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
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

  useEffect(() => {
    if (data?.meta) {
      setMeta(data.meta);
    }
  }, [data]);

  const headerClassName = `${style.headerMenu} ${
    isHeaderSticky ? "stickyHeader" : ""
  }`;
  const shouldApplyHeaderStyle = slug !== "home" && slug !== "inicio";

  const headerClassNameInicio = `${
    isHeaderSticky ? style.headerMenu + " stickyHeader" : ""
  }`;

  return (
    <>
      <Head>
        <title>{meta?.title || "Título por defecto"}</title>
      </Head>
      <Head>
        <meta
          name="description"
          content={meta?.description || "Descripción por defecto"}
        />
      </Head>
      <Head>
        <meta
          name="keywords"
          content={meta?.keywords || "Palabras clave por defecto"}
        />
      </Head>
      <Head>
        <meta name="author" content={meta?.authors || "Autor por defecto"} />
      </Head>
      <Head>
        <meta
          property="og:title"
          content={meta?.ogTitle || "Título OG por defecto"}
        />
      </Head>
      <Head>
        <meta
          property="og:description"
          content={meta?.ogDescription || "Descripción OG por defecto"}
        />
      </Head>
      <Head>
        <meta
          property="og:image"
          content={
            meta?.ogImage?.data?.attributes?.url ||
            "URL de imagen OG por defecto"
          }
        />
      </Head>
      <Head>
        <meta property="og:url" content={meta?.ogUrl || "URL OG por defecto"} />
      </Head>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header
        className={`${
          shouldApplyHeaderStyle ? headerClassName : headerClassNameInicio
        } `}
      >
        <Navbar items={stateMenu} />
      </header>
      <main className="maxWidthBody">{children}</main>
      <Analytics />
      <Footer items={footerData} />
    </>
  );
};

export default Main;
