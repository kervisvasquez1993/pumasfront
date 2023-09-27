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
import Loader from "../../../components/UI/Loader";

const Page = ({ page, blogsPage, modelsGQ }) => {
  const router = useRouter();
  const { hearlessChangInfo } = useModelo();
  const { updateData } = usePages();

  const { slug, lang } = router.query
  // console.log(page)

  useEffect(() => {
    updateData(page)

    modelsGQ && hearlessChangInfo(modelsGQ);

  }, [page]);
  if (router.isFallback) {
    return <Loader />;
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
  try {

    const { lang, slug } = params;
    console.log(lang, "lang")
    const getLangAll = await langAll();
    const pagesResponse = await getPagesGQ(lang)
    const pages = pagesResponse?.data?.pages
    const languages = getLangAll?.data;
    const dataPages = pages?.data;
    const modelsGQResponse = await getModelGQ(lang)
    const modelsGQ = modelsGQResponse?.data?.modelos
    const updatePage = dataPages?.map(page => {
      return {
        id: page.id,
        title: page.attributes.title,
        slug: page.attributes.slug,
        componentDynamics: page?.attributes?.DynamicComponent,
        locales: lang,
        banner: page?.attributes?.banner,
        contentType: "component",
      }
    })
    const page = updatePage.find((page) => page.locales === lang && page.slug === slug);
    const blogsPage = {}
    if (page.slug === "santuario") {

      return {
        props: { page: { ...page }, modelsGQ },
        revalidate: 10
      };
    }
    if (page.slug === "blog") {
      const blog = await getBlog(lang);
      const blogsPage = blog.data;
      return {
        props: { page: { ...page }, blogsPage },
      };

    }
    if (!page) return { notFound: true };
    return {
      props: { page: { ...page } },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { error: "Hubo un error al cargar la página." },
    };
  }
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
