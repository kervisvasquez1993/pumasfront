import React, { useEffect } from "react";
import HomePage from "../../../components/Pages/HomePage";
import { useRouter } from "next/router";
import NosotrosPage from "../../../components/Pages/NosotrosPage";
import { getAllModels, getBlog, getMenus, getModelGQ, getPageWithComponents, getPagesGQ, langAll, getFooter, getMaterialEducativo } from "../../../apis/ApiBackend";
import SantuarioPage from "../../../components/Pages/SantuarioPage";
import CentroDeRescate from "../../../components/Pages/CentroDeRescate";
import BlogPage from "../../../components/Pages/BlogPage";
import ProgramaPage from "../../../components/Pages/ProgramaPage";
import ApoyanosPage from "../../../components/Pages/ApoyanosPage";
import useModelo from "../../../hooks/useModelo";
import usePages from "../../../hooks/usePages";
import Loader from "../../../components/UI/Loader";

const Page = ({ page, blogsPage, modelsGQ, footer, materialEductivoSort }) => {

  const router = useRouter();
  const { hearlessChangInfo } = useModelo();
  const { updateData } = usePages();

  const { slug, lang } = router.query


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
        case "home":
          return <HomePage data={page} />;
        case "nosotros":
          return <NosotrosPage data={page} />;
        case "history":
          return <NosotrosPage data={page} />;
        case "santuario":
          return <SantuarioPage data={page} />;
        case "sanctuary":
          return <SantuarioPage data={page} />;
        case "centro-de-rescate":
          return <CentroDeRescate data={page} />;
        case "rescue-center":
          return <CentroDeRescate data={page} />;
        case "programas":
          return <ProgramaPage data={page} material={materialEductivoSort} />;
        case "programs":
          return <ProgramaPage data={page} />;
        case "apoyanos":
          return <ApoyanosPage data={page} />;
        case "support-us":
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

    const [pagesResponse, footerResponse, modelsGQResponse, materialEductaivo] = await Promise.all([getPagesGQ(lang), getFooter(lang), getModelGQ(lang), getMaterialEducativo(lang)]);
    const materialEducativodataResponse = materialEductaivo?.data?.data
    const materialEductivoSort = [];
    const footer = footerResponse?.data?.data?.attributes?.footerInfo
    const pages = pagesResponse?.data?.pages
    const dataPages = pages?.data;
    const modelsGQ = modelsGQResponse?.data?.modelos
    materialEducativodataResponse.forEach((item) => {
      const { title, description, subTitle } = item.attributes;
      const imgFile = {
        name: item.attributes.imgFile.data.attributes.name,
        url: item.attributes.imgFile.data.attributes.url,
      };
      const file = {
        name: item.attributes.file.data.attributes.name,
        url: item.attributes.file.data.attributes.url,
      };

      const newItem = { id: item.id, title, description, subTitle, imgFile, file };
      materialEductivoSort.push(newItem);
    });
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
    if (page.slug === "blogs" || page.slug === "publicaciones") {
      const blog = await getBlog(lang);
      const blogsPage = blog.data;
      return {
        props: { page: { ...page }, blogsPage, footer },
      };

    }
    if (!page) return { notFound: true };
    return {
      props: { page: { ...page }, modelsGQ, footer, materialEductivoSort },
      revalidate: 10
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
  const languages = lang;
  console.log(lang, "Languages")
  const result = [];
  for (const language of languages) {
    const menusResponse = await getMenus(language.attributes.code);
    const pages = await getPagesGQ(language.attributes.code)
    
    const menus = menusResponse.data.data;
   
    menus.forEach((element) => {
      // console.log(element, "elemento")
      if(element.attributes.slug === "blog"){
        return 
      }
      result.push({
        params: {
          lang: language.attributes.code,
          slug: element.attributes.slug,
          name: element.attributes.title,
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
