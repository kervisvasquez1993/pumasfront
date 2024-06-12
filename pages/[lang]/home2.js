import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  getMenus,
  getPagesGQ,
  langAll,
  getFooter,
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
  console.log(meta, "meta");
  const router = useRouter();
  const { updateData } = usePages();
  const { lang } = router.query;
  const patrocinadores = obtenerFrase(lang, "patrocinadores");
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu();
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
    updateMenuLoader(menus, lang);
  }, [lang]);
  useEffect(() => {
    updateData(page);
  }, [page]);
  if (router.isFallback) {
    return <Loader />;
  }

  if (!page) {
    return <div>Página no encontrada</div>;
  }

  const { componentDynamics, banner } = page;
  const section1 = componentDynamics.find(
    (element) => element.typeSection == "section1"
  );
  const section2 = componentDynamics.find(
    (element) => element.typeSection == "section2"
  );
  const section3 = componentDynamics.find(
    (element) => element.typeSection == "section3"
  );
  const section4 = componentDynamics.find(
    (element) => element.typeSection == "section4"
  );
  const blogs = componentDynamics.find((element) => element.blogs != undefined);
  const titles = componentDynamics.filter(
    (element) => element.nameComponent == "titleBasic"
  );

  const horarios = section4?.imagenWithContentBasic?.map((element, index) => {
    return (
      <section className="py-5" key={index}>
        <h4 className="chelseaFont colorSecondary font-size-24">
          {element?.label}
        </h4>
        <div>
          <ReactMarkdown className="py-1 saltoLinea2">
            {element?.content}
          </ReactMarkdown>
        </div>
      </section>
    );
  });
  const { screenSize } = useScreenSize();

  return (
    <>
      <Main titlePage={page?.meta?.title} data={page}>
        {/* TODO:PASAR POR PROPS LOS PARAMETROS DEL BANNER */}
        <BannerComponents data={banner} />
        <div className="container">
          {/* <HeaderComponents
        classNameText={"mt-10 p-5 colorPrimary chelseaFont font-responsive"}
        alignment={`${screenSize <= 900 ? "center" : "start"}`}
        width={`${screenSize <= 900 ? "100%" : "70%"}`}
      >
        {titles[0]?.Titulo}
      </HeaderComponets> */}
          <TwoColumnGrid>
            <CardBasic
              showMask={true}
              maskSrc={"/images/mask.png"}
              iconSrc={section1?.imgModelBasic?.data?.attributes?.url}
              imgSrc={section1?.imgBasicContent?.data?.attributes?.url}
              title={section1?.title}
              subtitle={section1?.subTitle}
            />

            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle"}
              title={""}
              classNameContent={` fuentesParrafo  ${
                screenSize <= 1200
                  ? "align-vertical-center-horizontal-center"
                  : "align-vertical-center-horizontal-start "
              } p-5 lg:p-10`}
              width={`${screenSize <= 1200 ? "100%" : "70%"}`}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
              // styleContent={{height: "100%"}}
            >
              <ReactMarkdown className="py-5">
                {section1?.content}
              </ReactMarkdown>
              <ButtonView
                className={" backgroundPrimary m-0 manropeFont p-5"}
                link={lang + "/" + section1?.btn.url}
              >
                {section1?.btn.label}
              </ButtonView>
            </BasicSection>
          </TwoColumnGrid>

          <HeaderComponents
            classNameText={
              " lg:py-10 py-5 colorSecondary chelseaFont font-responsive"
            }
            alignment="end"
            width="100%"
          >
            {section2?.title}
          </HeaderComponents>
          <TwoColumnGrid backgroundImage="/images/mask-background.png">
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle "}
              title={""}
              classNameContent={` fuentesParrafo  ${
                screenSize <= 1200
                  ? "align-vertical-center-horizontal-center"
                  : "align-vertical-center-horizontal-start "
              } lg:p-10 lg:m-10 md:p-5 md:m-5 sm:p-5 sm:m-5`}
              width={"100%"}
              widthContent="100%"
              alignItems={"center"}
              alignment={`${screenSize <= 1200 ? "center" : "end"}`}
              styleWrapper={{ height: "100%" }}
              styleContent={{ height: "100%" }}
            >
              <ReactMarkdown className="sm:m-lg:py-5 md:py-5 m-responsive highlight">
                {section2?.content}
              </ReactMarkdown>
              <ButtonView
                className={" backgroundGris m-0 mt-5 manropeFont py-10"}
                link={lang + "/" + section2?.btn.url}
              >
                {section2?.btn.label}
              </ButtonView>
            </BasicSection>

            <Link href={`/${lang + "/" + section2?.btn.url}`}>
              <CardBasic
                imgSrc={section2?.imgBasicContent?.data?.attributes.url}
              />
            </Link>
          </TwoColumnGrid>

          <section className="py-20">
            <HeaderComponents
              classNameText={"px-10  titleGreen chelseaFont font-responsive"}
              alignment={`${screenSize <= 1200 ? "center" : "start"}`}
              width={`${screenSize <= 1200 ? "100%" : "60%"}`}
            >
              {titles[1]?.Titulo}
            </HeaderComponents>
            <TwoColumnGrid>
              <CardBasic
                maskSrc={"/images/mask.png"}
                iconSrc={section3?.imgModelBasic?.data?.attributes?.url}
                imgSrc={section3?.imgBasicContent.data.attributes.url}
                title={section3?.title}
                subtitle={section3?.subTitle}
              />

              <BasicSection
                classNameTitle={""}
                classNameWrapper={"setionStyle"}
                title={""}
                classNameContent={` fuentesParrafo  ${
                  screenSize <= 1200
                    ? "align-vertical-center-horizontal-center"
                    : "align-vertical-center-horizontal-start "
                } p-5 sm:p-5 sm:m-5`}
                width={`${screenSize <= 1200 ? "100%" : "70%"}`}
                alignItems={"center"}
                justifyContent={"center"}
                styleWrapper={{ height: "100%" }}
                // styleContent={{height: "100%"}}
              >
                <span id="material"></span>
                <ReactMarkdown className="py-5">
                  {section3?.content}
                </ReactMarkdown>
                {section3?.btn?.fileLabel?.data?.attributes?.url && (
                  <Link
                    className={
                      " buttonGreen m-0 manropeFont p-5 btnPrimary py-2"
                    }
                    href={section3?.btn?.fileLabel?.data?.attributes?.url || ""}
                    target="_blank"
                  >
                    {section3?.btn.label}
                  </Link>
                )}
              </BasicSection>
            </TwoColumnGrid>
          </section>
          <HeaderComponents
            classNameText={"py-10 colorPrimary chelseaFont font-responsive"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
            width={`${screenSize <= 1200 ? "100%" : "70%"}`}
          >
            {titles[2]?.Titulo}
          </HeaderComponents>

          <Slider data={blogs?.blogs?.data} />

          <TwoColumnGrid>
            <Map />
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyle"}
              title={""}
              classNameContent={` fuentesParrafo  ${
                screenSize <= 1200
                  ? "align-vertical-center-horizontal-center"
                  : "align-vertical-center-horizontal-start "
              }`}
              width={`${screenSize <= 1200 ? "100%" : "70%"}`}
              alignItems={"center"}
              justifyContent={"center"}
              styleWrapper={{ height: "100%" }}
            >
              {horarios}
            </BasicSection>
          </TwoColumnGrid>

          <HeaderComponents
            src="/images/fondo1.png"
            classNameText={"py-5 colorVerde chelseaFont font-responsive"}
            alignment={`${screenSize <= 1200 ? "center" : "start"}`}
          >
            {patrocinadores}
          </HeaderComponents>
          <SliderTwo />
        </div>
      </Main>
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
    const homeSlug = lang === "es" ? "inicio" : "home";
    const page = updatePage.find((page) => page.slug === homeSlug);
    if (!page) return { notFound: true };
    // Agrega los metadatos aquí
    const meta = {
      title: page?.meta?.ogTitle || 'Título por defecto',
      keywords: page?.meta?.keywords || '',
      author: page?.meta?.author || '',
      ogTitle: page?.meta?.ogTitle || 'Título por defecto',
      ogDescription: page?.meta?.description || '',
      ogImage: page?.meta?.ogImage?.data?.attributes?.url || '',
      ogUrl: page?.meta?.ogUrl || '',
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
