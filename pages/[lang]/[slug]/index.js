import React, { useEffect } from "react";
import HomePage from "../../../components/Pages/HomePage";
import { useRouter } from "next/router";
import NosotrosPage from "../../../components/Pages/NosotrosPage";
import { getAllModels, getBlog, getMenus, getModelGQ, getPageWithComponents, getPagesGQ, langAll } from "../../../apis/ApiBackend";
import SantuarioPage from "../../../components/Pages/SantuarioPage";
import CentroDeRescate from "../../../components/Pages/CentroDeRescate";
import BlogPage from "../../../components/Pages/BlogPage";
import ProgramaPage from "../../../components/Pages/ProgramaPage";
import ApoyanosPage from "../../../components/Pages/ApoyanosPage";
import useModelo from "../../../hooks/useModelo";
import usePages from "../../../hooks/usePages";

const Page = ({ page, models, blogsPage, modelsGQ }) => {
    console.log(modelsGQ,"response") 
  const router = useRouter();
  const { hearlessChangInfo } = useModelo();
  const { updateData } = usePages();
console.log(page)
  const { slug, lang } = router.query
  console.log(page)

  useEffect(() => {
    updateData(page)

    models && hearlessChangInfo(modelsGQ);

  }, [page]);
  // models && console.log(models, "modelos");
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
          return <HomePage data={page} />;
        case "nosotros":
          return <NosotrosPage data={page} />;
        case "santuario":
          return <SantuarioPage data={page} />;
        case "centro-de-rescate":
          return <CentroDeRescate data={page} />;
        case "blog":
          return <BlogPage data={page} blogData={blogsPage} />;
        case "programas":
          return <ProgramaPage data={page} />;
        case "apoyanos":
          return <ApoyanosPage data={page} />;
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
  const pagesResponse = await getPagesGQ(lang)
  const pages = pagesResponse.data.pages
  const languages = getLangAll.data;
  const dataPages = pages.data;
  const modelsGQResponse = await getModelGQ(lang)
  const modelsGQ = modelsGQResponse.data.modelos
  const updatePage = dataPages.map(page => {
    return {
      id: page.id,
      title: page.attributes.title,
      slug: page.attributes.slug,
      componentDynamics: page.attributes.DynamicComponent,
      locales: lang,
      contentType: "component",
    }
  })
  const page = updatePage.find((page) => page.locales === lang && page.slug === slug);
  const models = {};
  const blogsPage = {}
  console.log(page.slug, "slug")
  if (page.slug === "santuario") {
    for (const language of languages) {
      const modelsResponse = await getAllModels(language.code);
      models[language.code] = modelsResponse.data;
    }
    return {
      props: { page: { ...page }, models, modelsGQ},
    };
  }
  if (page.slug === "blog") {
    for (const language of languages) {
      const blogs = await getBlog(language.code);
      blogsPage["blog"] = blogs.data;
    }

    return {
      props: { page: { ...page }, blogsPage },
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
