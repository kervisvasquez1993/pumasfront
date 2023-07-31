import React from "react";
import HomePage from "../../../components/Pages/HomePage";
import { useRouter } from "next/router";
import NosotrosPage from "../../../components/Pages/NosotrosPage";
import { ApiBackend } from "../../../apis/ApiBackend";
import SantuarioPage from "../../../components/Pages/SantuarioPage";
import CentroDeRescate from "../../../components/Pages/CentroDeRescate";
import BlogPage from "../../../components/Pages/BlogPage";
import ProgramaPage from "../../../components/Pages/ProgramaPage";

const Page = ({ page }) => {
  const router = useRouter();
  console.log(page);
  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  if (!page) {
    return <div>Página no encontrada</div>;
  }

  const renderContent = () => {
    if (page.contentType === "component") {
      switch (page.slug) {
        case "inicio":
          return <HomePage />;
        case "nosotros":
          return <NosotrosPage />;
        case "santuario":
          return <SantuarioPage />;
        case "centro-de-rescate":
          return <CentroDeRescate />;
        case "blog":
          return <BlogPage />;
        case "programas":
          return <ProgramaPage />;
        default:
          return null;
      }
    } else if (page.contentType === "text") {
      return <p>{page.name}</p>;
    } else {
      return null;
    }
  };

  return <div>{renderContent()}</div>;
};

const langAll = () => {
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

export const getStaticProps = async ({ params }) => {
  const { lang, slug } = params;
  const getLangAll = await langAll();
  const languages = getLangAll.data;
  const menu = [];
  for (const language of languages) {
    const menusResponse = await getMenus(language.code);
    const menus = menusResponse.data.data;
    menus.forEach((element) => {
      menu.push({
        lang: element.attributes.locale,
        slug: element.attributes.slug,
        name: element.attributes.nombre,
        contentType: "component",
      });
    });
  }
  console.log(menu);
  const page = menu.find((page) => page.lang === lang && page.slug === slug);
  if (!page) return { notFound: true };
  return {
    props: { page: { ...page } },
  };
};

export const getStaticPaths = async () => {
  const lang = await langAll();
  const languages = lang.data;
  const result = [];
  for (const language of languages) {
    const menusResponse = await getMenus(language.code);
    const menus = menusResponse.data.data;
    menus.forEach((element) => {
      result.push({
        params: {
          lang: element.attributes.locale,
          slug: element.attributes.slug,
          name: element.attributes.nombre,
        },
      });
    });
  }

  return {
    paths: result,
    fallback: true,
  };
};

export default Page;
