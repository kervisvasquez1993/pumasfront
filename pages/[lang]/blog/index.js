import React, { useEffect } from "react";
import {
  getBlog,
  getFooter,
  getMenus,
  getPageWithComponents,
  getWhatsapp,
  langAll,
} from "../../../apis/ApiBackend";
import { useRouter } from "next/router";
import CardComponentHover from "../../../components/UI/Card/CardComponentHover";
import Main from "../../../Layout/Main/Main";
import ReactMarkdown from "react-markdown";
import useMenu from "../../../hooks/useMenu";
// import useScreenSizeStore from "../../../store/screenSizeStore";

const index = ({ blogsPage, blogPageData, whatsapp, footer, menus }) => {
  // const screenSize = useScreenSizeStore((state) => state.screenSize);
  const router = useRouter();
  const { lang } = router.query;
  const blogs = blogsPage?.data;
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu();
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
    updateMenuLoader(menus, lang);
  }, [lang]);
  const sectionBlogs = blogs?.map((blog, index) => {
    const { TitleBlog, ContentBlog, imgBlog, slug } = blog?.attributes ?? {};
    const resumen = ContentBlog?.substring(0, 150) ?? "";
    return (
      <div key={index}>
        <CardComponentHover
          url={`/${lang}/blog/${slug}`}
          description={resumen + " ...... "}
          title={TitleBlog}
          imageUrl={`${
            imgBlog?.data
              ? imgBlog?.data[0]?.attributes?.url
              : "/images/no-img.jpg"
          }`}
        />
      </div>
    );
  });

  const ComponentDynamicsRenderer = ({ DynamicComponent = [] }) => {
    // Solución 1: Valor predeterminado
    // Solución 2: Verificación antes de usar reduce
    const renderedComponents = Array.isArray(DynamicComponent)
      ? DynamicComponent.reduce((acc, elemento, index) => {
          if (elemento?.typeSection === "section2") {
            const component = (
              <div className="container-program">
                <h3 className="program-title fuenteTitulo colorPrimary sm:mx-10 sm:px-10 p-5">
                  {elemento?.title}
                </h3>
                <div className="grid-2 px-5">
                  <div className="about-program_text fuentesParrafo lg:px-10 sm:py-5 saltoLinea2">
                    <ReactMarkdown>{elemento?.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            );
            return [...acc, component];
          }
          return acc;
        }, [])
      : []; // Retorna un array vacío si DynamicComponent no es un array

    return <div>{renderedComponents}</div>;
  };
  return (
    <Main titlePage={"Blog"} data={blogPageData?.attributes}>
      <div className="container">
        {ComponentDynamicsRenderer(blogPageData?.attributes ?? {})}
        <div className="blog">{sectionBlogs}</div>
      </div>
    </Main>
  );
};

export default index;

export const getStaticProps = async ({ params }) => {
  let idOfBlog = null;
  const { lang } = params;

  if (lang == "es") {
    idOfBlog = 2;
  } else if (lang == "en") {
    idOfBlog = 14;
  }
  const [blogPage, blog, whatsappResponse, footerResponse, menusResponse] =
    await Promise.all([
      getPageWithComponents(lang, idOfBlog),
      getBlog(lang),
      getWhatsapp(lang),
      getFooter(lang),
      getMenus(lang),
    ]);
  const blogPageData = blogPage?.data?.page?.data;
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;
  const menus = menusResponse.data.data;
  const blogsPage = blog.data;
  return {
    props: { blogsPage, blogPageData, footer, whatsapp, menus },
  };
};

export const getStaticPaths = async () => {
  const locales = await langAll();
  const languages = locales;
  const lang = [];
  for (const language of languages) {
    lang.push({ params: { lang: language.attributes.code } });
  }
  return {
    paths: lang,
    fallback: true,
  };
};
