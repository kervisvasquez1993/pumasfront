import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  getAllModels,
  getBlog,
  getMenus,
  getModelGQ,
  getPageWithComponents,
  getPagesGQ,
  langAll,
  getFooter,
  getMaterialEducativo,
  getWhatsapp,
} from "../../apis/ApiBackend";
import usePages from "../../hooks/usePages";
import Loader from "../../components/UI/Loader";
import useMenu from "../../hooks/useMenu";
import Main from "../../Layout/Main/Main";
import ReactMarkdown from "react-markdown";
import useScreenSize from "../../hooks/useScreenSize";
import BannerComponents from "../../components/UI/Banner/BannerComponents";
import HeaderComponents from "../../components/UI/HeaderComponents/HeaderComponets";
import TwoColumnGrid from "../../components/Section/Basic/TwoColumnGrid";
import CardBasic from "../../components/Section/CardBasic";
import BasicSection from "../../components/Section/Basic/BasicSection";
import ButtonView from "../../views/ButtonView";
import Link from "next/link";
import Slider from "../../components/UI/Slider/SliderComponts";
import { obtenerFrase } from "../../lang/traducciones";
import SliderTwo from "../../components/UI/Slider/SliderTwo";
import Map from "../../components/UI/Map";
import Head from "next/head";

const Page = ({ page, footer, whatsapp, menus, meta }) => {
  const router = useRouter();
  const { updateData } = usePages();
  const { lang } = router.query;
  const patrocinadores = obtenerFrase(lang, "patrocinadores");
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu();
  console.log(meta, "meta");
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
    updateMenuLoader(menus, lang);
  }, [lang]);
  useEffect(() => {
    updateData(page);
  }, [page]);

  console.log(page, "page");
  if (router.isFallback) {
    return <Loader />;
  }

  if (!page) {
    return <div>Página no encontrada</div>;
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="og:title" content={meta.ogTitle} />
        <meta name="og:description" content={meta.ogDescription} />
        <meta name="og:image" content={meta.ogImage} />
        <meta name="og:url" content={meta.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>hola</h2>
    </>
  );
};

const transformPages = (dataPages, lang) => {
  return dataPages.map((page) => {
    return {
      id: page.id,
      title: page.attributes.title,
      slug: page.attributes.slug,
      componentDynamics: page?.attributes?.DynamicComponent,
      locales: lang,
      banner: page?.attributes?.banner,
      contentType: "component",
      meta: page?.attributes?.meta,
    };
  });
};

export const getStaticProps = async ({ params }) => {
  try {
    const { lang, slug } = params;

    const [pagesResponse, footerResponse, whatsappResponse, menusResponse] =
      await Promise.all([
        getPagesGQ(lang),
        getFooter(lang),
        getWhatsapp(lang),
        getMenus(lang),
      ]);

    const menus = menusResponse.data.data;
    const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;
    const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
    const pages = pagesResponse?.data?.pages;
    const updatePage = transformPages(pages?.data, lang);
    const homeSlug = lang === "es" ? "nosotros" : "history";
    const page = updatePage.find((page) => page.slug === homeSlug);
    if (!page) return { notFound: true };
    const meta = {
      title: page?.meta?.title,
      keywords: page?.meta?.keywords,
      author: page?.meta?.author,
      ogTitle: page?.meta?.title,
      ogDescription: page?.meta?.description,
      ogImage: page?.meta?.ogImage?.data?.attributes?.url,
      ogUrl: page?.meta?.ogUrl,
    };
    return {
      props: {
        page: { ...page },
        footer,
        whatsapp,
        menus,
        meta,
      },
      revalidate: 10,
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
  const result = [];
  for (const language of languages) {
    const menusResponse = await getMenus(language.attributes.code);
    const pages = await getPagesGQ(language.attributes.code);
    const menus = menusResponse.data.data;
    menus.forEach((element) => {
      if (element.attributes.slug === "blog") {
        return;
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
