import React, { useEffect } from "react";
import HomePage from "../../../components/Pages/HomePage";
import { useRouter } from "next/router";
import NosotrosPage from "../../../components/Pages/NosotrosPage";
import { getAllModels, getMenus, langAll } from "../../../apis/ApiBackend";
import SantuarioPage from "../../../components/Pages/SantuarioPage";
import CentroDeRescate from "../../../components/Pages/CentroDeRescate";
import BlogPage from "../../../components/Pages/BlogPage";
import ProgramaPage from "../../../components/Pages/ProgramaPage";
import ApoyanosPage from "../../../components/Pages/ApoyanosPage";
import useModelo from "../../../hooks/useModelo";

const Page = ({ page, models }) => {
  const router = useRouter();
  const { hearlessChangInfo } = useModelo();

  useEffect(() => {
    models && hearlessChangInfo(models);
  }, []);
  models && console.log(models);
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
        case "apoyanos":
          return <ApoyanosPage />;
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
  const page = menu.find((page) => page.lang === lang && page.slug === slug);
  const models = {};
  if (page.slug === "santuario") {
    for (const language of languages) {
      const modelsResponse = await getAllModels(language.code);
      models[language.code] = modelsResponse.data;
    }
    return {
      props: { page: { ...page }, models },
    };
  }
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
