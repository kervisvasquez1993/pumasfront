import React, { useEffect } from "react";
import {
  getBlog,
  getFooter,
  getMenus,
  getWhatsapp,
  langAll,
} from "../../../apis/ApiBackend";
import { useRouter } from "next/router";
import Main from "../../../Layout/Main/Main";
import HeaderComponents from "../../../components/UI/HeaderComponents/HeaderComponets";
import useScreenSize from "../../../hooks/useScreenSize";
import SliderThree from "../../../components/UI/Slider/SliderThree";
import ReactMarkdown from "react-markdown";
import BasicSection from "../../../components/Section/Basic/BasicSection";
import SliderSingle from "../../../components/UI/Slider/SliderSingle";
import { versionInfo } from "graphql";
import useMenu from "../../../hooks/useMenu";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "../../../hooks/useFetch";
import Head from "next/head";
const BlogInfo = ({ blog, whatsapp, footer, menus }) => {
  const { screenSize } = useScreenSize();
  console.log(footer, "footer");
  const router = useRouter();
  const { lang } = router.query;
  const { loadedFooter, loadedWhatsapp, updateMenuLoader } = useMenu();
  useEffect(() => {
    loadedFooter(footer);
    // loadedWhatsapp(whatsapp)
    // updateMenuLoader(menus, lang)
  }, [lang]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const {data, isLoading} = useFetch(`/api/blogs?populate=*&locale=${lang}`, {}, process.env.NEXT_PUBLIC_TOKEN)
  // console.log(data, "data");
  return (
    <Main titlePage={blog?.attributes?.TitleBlog}>
      <Head>
        <title> {data?.meta?.title}</title>
        <meta name="description" content={data?.meta?.description} />
        <meta name="keywords" content={data?.meta?.keywords} />
        <meta name="author" content={data?.meta?.authors} />
        <meta property="og:title" content={data?.meta?.ogTitle} />
        <meta property="og:description" content={data?.meta?.ogDescription} />
        <meta property="og:url" content={data?.meta?.ogUrl} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderComponents
        classNameText={"colorPrimary chelseaFont pt-10 mt-10 lg:px-10 lg:mx-10 "}
        alignment={`${screenSize <= 1024 ? "center" : "start"}`}
      >
        {blog?.attributes?.TitleBlog}
      </HeaderComponents>

      <section className="container-section py-10 my-5">
        <section
          className={`${blog?.attributes?.imgBlog?.data ? "flex-2" : ""}`}
        >
          

          <div className="containerSlider">
            <Slider {...settings}>
              {blog?.attributes?.imgBlog?.data.map((slider) => {
                return (
                  <div className="w-64 h-100">
                    <Image
                      src={slider.attributes.url}
                      width={450}
                      height={450}
                      alt="Picture of the author"
                      className="w-full h-auto"
                    />
                  </div>
                );
              })}
            </Slider>
           
          </div>
          <section>
            <BasicSection
              classNameTitle={""}
              classNameWrapper={"setionStyleTwo px-10"}
              title={""}
              alignItems={"center"}
              width={`${screenSize <= 1024 ? "100%" : "100%"}`}
              classNameContent={`${
                screenSize <= 1024
                  ? "align-vertical-center-horizontal-center"
                  : "align-vertical-center-horizontal-start"
              } fuentesParrafo `}
            >
              <ReactMarkdown className="contentBlog saltoLinea2">
                {blog?.attributes?.ContentBlog}
              </ReactMarkdown>
            </BasicSection>
          </section>
        </section>
      </section>
    </Main>
  );
};

export default BlogInfo;

export const getStaticProps = async ({ params }) => {
  const { lang, slug } = params;

  const [blogAllResponse, whatsappResponse, footerResponse, menusResponse] =
    await Promise.all([
      getBlog(lang),
      getWhatsapp(lang),
      getFooter(lang),
      getMenus(lang),
    ]);
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;

  const blogAll = blogAllResponse.data.data;
  const menus = menusResponse.data.data;

  const blog = blogAll.find((e) => e.attributes.slug == slug);
  return {
    props: {
      blog,
      whatsapp,
      menus,
      footer,
    },
  };
};

export const getStaticPaths = async () => {
  const blogs = [];
  const locales = await langAll();
  const languages = locales;
  for (const language of languages) {
    const blogAllResponse = await getBlog(language.code);
    const blogAll = blogAllResponse.data;
    blogAll.data.forEach((element) => {
      return blogs.push({
        params: {
          id: element.id.toString(),
          body: element,
          lang: language.code,
        },
      });
    });
  }
  return {
    paths: blogs,
    fallback: true,
  };
};
