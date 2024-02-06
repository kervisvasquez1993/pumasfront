import React, { useEffect } from "react";
import {
  getBlog,
  getFooter,
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
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, color: 'white', backgroundColor: '#E86641', borderRadius: '50%', margin: "0", padding: "0", display:"flex", justifyContent: "center", alignItems: "center" }}
      onClick={onClick}
    >
      <FontAwesomeIcon  className="custom-arrow" icon={faChevronLeft} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, color: 'blue', backgroundColor: '#E86641', borderRadius: '50%',  }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};




const BlogInfo = ({ blog, whatsapp, footer }) => {
  const { screenSize } = useScreenSize();
  const { loadedFooter, loadedWhatsapp } = useMenu();
  const router = useRouter();
  const { lang } = router.query;
  useEffect(() => {
    loadedFooter(footer);
    loadedWhatsapp(whatsapp);
  }, [lang]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />



  };

  return (
    <Main titlePage={blog?.attributes?.TitleBlog}>
      <HeaderComponents
        classNameText={"colorPrimary chelseaFont pt-10 mt-10 px-10 mx-10 "}
        alignment={`${screenSize <= 1024 ? "center" : "start"}`}
      >
        {blog?.attributes?.TitleBlog}
      </HeaderComponents>

      <section className="container-section py-10 my-5">
        <section
          className={`${blog?.attributes?.imgBlog?.data ? "flex-2" : ""}`}
        >
          {/* <SliderSingle slidesData={blog?.attributes?.imgBlog?.data} /> */}
          
          <div className="containerSlider">
            
            <Slider {...settings}>
              {blog?.attributes?.imgBlog?.data.map((slider) => {
                console.log(slider);
                return (
                  <div>
                    <Image
                      src={slider.attributes.url}
                      width={450}
                      height={450}
                      alt="Picture of the author"
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
              <ReactMarkdown className="contentBlog">
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

  const [blogAllResponse, whatsappResponse, footerResponse] = await Promise.all(
    [getBlog(lang), getWhatsapp(lang), getFooter(lang)]
  );
  const whatsapp = whatsappResponse?.data?.data[0]?.attributes;
  const footer = footerResponse?.data?.data[0]?.attributes?.footerInfo;

  const blogAll = blogAllResponse.data.data;

  const blog = blogAll.find((e) => e.attributes.slug == slug);
  console.log(blogAll)
  return {
    props: {
      blog,
      whatsapp,
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
